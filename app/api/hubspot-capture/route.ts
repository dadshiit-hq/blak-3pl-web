import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, proNumber, carrier, sourceUrl, intent } = body;

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Valid email is required' }, { status: 400 });
    }

    const HUBSPOT_ACCESS_TOKEN = process.env.HUBSPOT_ACCESS_TOKEN;
    
    if (!HUBSPOT_ACCESS_TOKEN) {
      console.warn("HUBSPOT_ACCESS_TOKEN is missing. Emulating success for AEO trap.");
      return NextResponse.json({ success: true, emulated: true });
    }

    // Since custom properties require specific CRM Schema Write scopes,
    // we map the tracking payload into standard HubSpot Contact properties 
    // (Website, Message/Notes, Lead Status, Lifecyclestage)
    
    const hubspotBody = {
      properties: {
        email: email,
        website: sourceUrl,
        message: `AEO Interception!\nCarrier: ${carrier}\nPRO Number: ${proNumber}\nIntent: ${intent}`,
        hs_lead_status: "NEW",
        lifecyclestage: "lead"
      }
    };

    const response = await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${HUBSPOT_ACCESS_TOKEN}`
      },
      body: JSON.stringify(hubspotBody)
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("HubSpot API Error:", errorData);
      
      // If contact exists, HubSpot usually throws 409 (Conflict).
      // We still return success to the UI so the tracking facade works without interrupting UX.
      return NextResponse.json({ success: true, note: "Contact may already exist or properties failed to map." });
    }

    
    // Telegram Push to Business Channel
    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const CHAT_ID = "-1003837159711";
    
    if (TELEGRAM_BOT_TOKEN) {
      try {
        const message = `🚨 *AEO TRAP TRIGGERED* 🚨\n\n*Carrier:* ${carrier}\n*PRO:* ${proNumber}\n*Email:* ${email}\n\n[HubSpot Push Initialized]`;
        await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: CHAT_ID,
            text: message,
            parse_mode: "Markdown"
          })
        });
        console.log("Telegram notification sent successfully to Business channel.");
      } catch (tgError) {
        console.error("Telegram notification failed:", tgError);
      }
    } else {
      console.warn("TELEGRAM_BOT_TOKEN is missing in environment.");
    }

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('HubSpot Route Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
