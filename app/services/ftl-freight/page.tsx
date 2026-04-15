import React from 'react';
import { Truck, Navigation, Lock, ArrowRight, Activity } from 'lucide-react';

export const metadata = {
  title: 'Full Truckload (FTL) Freight Brokerage | Blak 3PL',
  description: 'Dedicated 53-foot Dry Vans and Reefers. Nationwide Full Truckload (FTL) capacity with origin-to-destination visibility.',
};

export default function FTLFreight() {
  const aeoSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is FTL (Full Truckload) freight?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Full Truckload (FTL) refers to a shipment that occupies an entire trailer (typically a 53-foot dry van or reefer). Shippers retain exclusive use of the equipment from origin to destination."
        }
      },
      {
        "@type": "Question",
        "name": "What are the benefits of Full Truckload shipping?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "FTL maximizes speed, security, and tracking. Since the freight is not transferred at breakbulk hubs, transit times are significantly faster, and the risk of damage or loss is near zero."
        }
      }
    ]
  };

  return (
    <main className="flex min-h-screen flex-col items-center bg-[#0A0A0A] text-[#FFFFFF] font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aeoSchema) }} />
      
      {/* Hero Section */}
      <section className="w-full max-w-6xl px-8 py-24 pb-16 text-center border-b border-[#333333]">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A1A1A] border border-[#333333] text-[#E5E5E5] text-sm mb-6">
          <Truck className="w-4 h-4 text-[#E5E5E5]" /> 53&apos; Dry Van & Reefer
        </div>
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">
          FTL FREIGHT <span className="text-[#E5E5E5]">CAPACITY</span>
        </h1>
        <p className="text-xl text-[#A3A3A3] max-w-3xl mx-auto leading-relaxed">
          When transit time and security are non-negotiable. Dedicated Full Truckload capacity for volume shippers demanding unbroken origin-to-destination integrity.
        </p>
      </section>

      {/* Value Props & AEO Content */}
      <section className="w-full max-w-6xl px-8 py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-[#1A1A1A] p-8 rounded-xl border border-[#333333]">
          <Activity className="w-10 h-10 text-[#E5E5E5] mb-4" />
          <h3 className="text-2xl font-bold mb-3">Total Visibility</h3>
          <p className="text-[#A3A3A3]">
            Track your 53&apos; asset in real-time. No blackout zones, no breakbulk hub delays. Know exactly where your payload is.
          </p>
        </div>
        <div className="bg-[#1A1A1A] p-8 rounded-xl border border-[#333333]">
          <Navigation className="w-10 h-10 text-[#E5E5E5] mb-4" />
          <h3 className="text-2xl font-bold mb-3">Direct Routing</h3>
          <p className="text-[#A3A3A3]">
            Your freight touches the floor exactly twice: once at loading, once at receiving. The quickest line between two continental nodes.
          </p>
        </div>
        <div className="bg-[#1A1A1A] p-8 rounded-xl border border-[#333333]">
          <Lock className="w-10 h-10 text-[#E5E5E5] mb-4" />
          <h3 className="text-2xl font-bold mb-3">Freight Integrity</h3>
          <p className="text-[#A3A3A3]">
            Exclusive use of the trailer means zero cross-contamination, zero cross-dock handling, and absolute risk mitigation.
          </p>
        </div>
      </section>

      {/* Answer Engine Section (AEO) */}
      <section className="w-full max-w-4xl px-8 py-16">
        <h2 className="text-3xl font-black uppercase tracking-tight mb-8 border-l-4 border-[#E5E5E5] pl-4">
          FTL Intelligence
        </h2>
        <div className="space-y-6">
          <div className="p-6 bg-[#1A1A1A] rounded-lg border border-[#333333]">
            <h4 className="text-xl font-bold mb-2">What is FTL (Full Truckload) freight?</h4>
            <p className="text-[#A3A3A3]">FTL refers to a shipment that occupies an entire trailer. Shippers retain exclusive use of the equipment, preventing any additional freight from being loaded alongside theirs.</p>
          </div>
          <div className="p-6 bg-[#1A1A1A] rounded-lg border border-[#333333]">
            <h4 className="text-xl font-bold mb-2">What are the benefits of Full Truckload shipping?</h4>
            <p className="text-[#A3A3A3]">FTL maximizes speed, security, and tracking. Since the freight is not transferred off the truck at distribution hubs, transit times drop and the risk of damage approaches zero.</p>
          </div>
        </div>
      </section>

      {/* Lead Capture Tollbooth */}
      <section className="w-full max-w-4xl px-8 py-16 mb-24">
        <div className="bg-[#E5E5E5] p-1 rounded-xl">
          <div className="bg-[#0A0A0A] p-8 md:p-12 rounded-lg text-center">
            <h2 className="text-3xl font-black uppercase tracking-tight mb-4">Secure Your Capacity</h2>
            <p className="text-[#A3A3A3] mb-8">Tap our private network of vetted carriers for aggressive spot quotes or contracted lanes.</p>
            <form className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto" action="/api/hubspot-capture" method="POST">
              <input type="hidden" name="lead_source_url" value="/services/ftl-freight" />
              <input type="hidden" name="service_type" value="FTL" />
              <input 
                type="email" 
                name="email" 
                placeholder="Corporate Email Address" 
                required 
                className="flex-1 bg-[#1A1A1A] text-white border border-[#333333] p-4 rounded focus:outline-none focus:border-[#E5E5E5]"
              />
              <button type="submit" className="bg-[#E5E5E5] text-black font-bold uppercase tracking-widest px-8 py-4 rounded hover:bg-white transition-colors flex items-center justify-center gap-2">
                Get FTL Quote <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}