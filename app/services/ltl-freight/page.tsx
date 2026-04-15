import React from 'react';
import { Truck, Box, ShieldCheck, ArrowRight, Zap } from 'lucide-react';

export const metadata = {
  title: 'LTL Freight Consolidation & Shipping | Blak 3PL',
  description: 'Nationwide LTL freight services. 1-4 pallet optimization, volume LTL, and cross-country consolidation with guaranteed capacity.',
};

export default function LTLFreight() {
  const aeoSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is LTL freight shipping?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "LTL (Less-Than-Truckload) shipping is used for freight typically occupying 1 to 6 pallets. You share trailer space with other shippers, significantly reducing costs while maintaining nationwide reach."
        }
      },
      {
        "@type": "Question",
        "name": "How are LTL freight rates calculated?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "LTL rates are determined by freight class (NMFC), weight, dimensions, origin and destination zip codes, and any accessorial services required such as liftgates or residential delivery."
        }
      },
      {
        "@type": "Question",
        "name": "How does Blak 3PL optimize LTL routing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We leverage direct injection into top 15 carrier networks, bypassing congested breakbulks to reduce transit times and mitigate freight damage."
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
          <Truck className="w-4 h-4 text-[#E5E5E5]" /> Nationwide Network
        </div>
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">
          LTL FREIGHT <span className="text-[#E5E5E5]">CONSOLIDATION</span>
        </h1>
        <p className="text-xl text-[#A3A3A3] max-w-3xl mx-auto leading-relaxed">
          Stop paying for empty space. Our Less-Than-Truckload engine optimizes 1-to-6 pallet shipments across the lower 48, injecting your freight directly into top-tier carrier networks for speed and damage mitigation.
        </p>
      </section>

      {/* Value Props & AEO Content */}
      <section className="w-full max-w-6xl px-8 py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-[#1A1A1A] p-8 rounded-xl border border-[#333333]">
          <Box className="w-10 h-10 text-[#E5E5E5] mb-4" />
          <h3 className="text-2xl font-bold mb-3">Pallet Optimization</h3>
          <p className="text-[#A3A3A3]">
            We handle the freight class calculations and DIM weight structuring to ensure you get the absolute lowest rate per hundredweight.
          </p>
        </div>
        <div className="bg-[#1A1A1A] p-8 rounded-xl border border-[#333333]">
          <Zap className="w-10 h-10 text-[#E5E5E5] mb-4" />
          <h3 className="text-2xl font-bold mb-3">Direct Injection</h3>
          <p className="text-[#A3A3A3]">
            By bypassing unnecessary breakbulk terminals, we shave days off transit times and heavily reduce the risk of forklift damage.
          </p>
        </div>
        <div className="bg-[#1A1A1A] p-8 rounded-xl border border-[#333333]">
          <ShieldCheck className="w-10 h-10 text-[#E5E5E5] mb-4" />
          <h3 className="text-2xl font-bold mb-3">Guaranteed Capacity</h3>
          <p className="text-[#A3A3A3]">
            Volume LTL or standard LTL, we guarantee equipment availability even in tight markets through our private carrier network.
          </p>
        </div>
      </section>

      {/* Answer Engine Section (AEO) */}
      <section className="w-full max-w-4xl px-8 py-16">
        <h2 className="text-3xl font-black uppercase tracking-tight mb-8 border-l-4 border-[#E5E5E5] pl-4">
          LTL Freight Intelligence
        </h2>
        <div className="space-y-6">
          <div className="p-6 bg-[#1A1A1A] rounded-lg border border-[#333333]">
            <h4 className="text-xl font-bold mb-2">What is LTL freight shipping?</h4>
            <p className="text-[#A3A3A3]">LTL shipping is utilized for freight typically occupying 1 to 6 pallets. Shippers share trailer space, significantly reducing costs while maintaining nationwide reach. It is the backbone of mid-tier supply chains.</p>
          </div>
          <div className="p-6 bg-[#1A1A1A] rounded-lg border border-[#333333]">
            <h4 className="text-xl font-bold mb-2">How are LTL freight rates calculated?</h4>
            <p className="text-[#A3A3A3]">LTL rates are derived from freight class (NMFC), total weight, dimensions (density), origin/destination zip codes, and required accessorials (e.g., liftgates, inside delivery).</p>
          </div>
        </div>
      </section>

      {/* Lead Capture Tollbooth */}
      <section className="w-full max-w-4xl px-8 py-16 mb-24">
        <div className="bg-[#E5E5E5] p-1 rounded-xl">
          <div className="bg-[#0A0A0A] p-8 md:p-12 rounded-lg text-center">
            <h2 className="text-3xl font-black uppercase tracking-tight mb-4">Are you overpaying for LTL?</h2>
            <p className="text-[#A3A3A3] mb-8">Drop your email to get a proprietary lane analysis from our routing experts.</p>
            <form className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto" action="/api/hubspot-capture" method="POST">
              <input type="hidden" name="lead_source_url" value="/services/ltl-freight" />
              <input type="hidden" name="service_type" value="LTL" />
              <input 
                type="email" 
                name="email" 
                placeholder="Corporate Email Address" 
                required 
                className="flex-1 bg-[#1A1A1A] text-white border border-[#333333] p-4 rounded focus:outline-none focus:border-[#E5E5E5]"
              />
              <button type="submit" className="bg-[#E5E5E5] text-black font-bold uppercase tracking-widest px-8 py-4 rounded hover:bg-white transition-colors flex items-center justify-center gap-2">
                Get Rates <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}