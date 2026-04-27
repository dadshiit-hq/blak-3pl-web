import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, proNumber, carrier, sourceUrl, intent } = body;

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Valid email is required' }, { status: 400 });
    }

    const TWENTY_API_TOKEN = process.env.TWENTY_API_TOKEN || process.env.NEXT_PUBLIC_TWENTY_API_TOKEN;
    
    if (!TWENTY_API_TOKEN) {
      console.warn("TWENTY_API_TOKEN is missing. Emulating success for AEO trap.");
      // We still map Telegram so at least the Lead is caught.
    } else {
        // Twenty Person Mapping
        const personBody = {
          name: {
              firstName: "AEO",
              lastName: "Capture"
          },
          emails: {
            primaryEmail: email
          },
          jobTitle: "Logistics Lead",
          intro: `AEO Interception!\nCarrier: ${carrier}\nPRO Number: ${proNumber}\nIntent: ${intent}`
        };

        const response = await fetch('https://api.twenty.com/rest/core/people', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${TWENTY_API_TOKEN}`,
            'User-Agent': 'Blak3PL-AEO-Trap/1.0'
          },
          body: JSON.stringify(personBody)
        });

        if (!response.ok) {
          const errorData = await response.json();
          console.error("Twenty API Error:", response.status, errorData);
          // If Twenty returns an error (like Duplicate Email), catch it cleanly.
        } else {
            console.log("Twenty CRM Lead Created.");
        }
    }
    
    // Telegram Push to Business Channel
    const TELEGRAM_BOT_TOKEN=process.env.TELEGRAM_BOT_TOKEN;
    const CHAT_ID = "-1003837159711";
    
    if (TELEGRAM_BOT_TOKEN) {
      try {
        const message = `🚨 *AEO TRAP TRIGGERED* 🚨\n\n*Carrier:* ${carrier}\n*PRO:* ${proNumber}\n*Email:* ${email}\n\n[Twenty CRM Lead Captured]`;
        await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: CHAT_ID,
            text: message,
            parse_mode: "Markdown"
          })
        });
      } catch (tgError) {
        console.error("Telegram notification failed:", tgError);
      }
    }

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Twenty Route Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

