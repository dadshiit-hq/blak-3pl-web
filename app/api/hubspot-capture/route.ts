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

    const hubspotBody = {
      properties: {
        email: email,
        tracking_trap_pro_number: proNumber,
        tracking_trap_carrier: carrier,
        lead_source_url: sourceUrl,
        lead_intent: intent,
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
      // We still return success to the UI so the tracking facade works.
      return NextResponse.json({ success: true, note: "Contact may already exist or properties failed to map." });
    }

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('HubSpot Route Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
