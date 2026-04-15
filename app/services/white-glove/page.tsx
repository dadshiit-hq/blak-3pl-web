import React from 'react';
import { Hexagon, Users, Clock, ArrowRight, ShieldCheck } from 'lucide-react';

export const metadata = {
  title: 'White-Glove Final Mile Delivery | Blak 3PL',
  description: 'Nationwide White-Glove and final-mile logistics. Inside delivery, specialized handling, and debris removal for high-value freight.',
};

export default function WhiteGlove() {
  const aeoSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is White-Glove delivery logistics?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "White-Glove delivery is a premium logistics tier that goes beyond the loading dock. It includes inside delivery, unpacking, specialized equipment (stair crawlers, blanket wraps), and dunnage (debris) removal."
        }
      },
      {
        "@type": "Question",
        "name": "When is White-Glove shipping necessary?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It is critical for high-value, fragile, or oversized items (e.g., medical devices, server racks, high-end furniture) where the final receiver cannot or shouldn't handle the physical moving of the freight themselves."
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
          <Hexagon className="w-4 h-4 text-[#E5E5E5]" /> Final-Mile Execution
        </div>
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">
          WHITE GLOVE <span className="text-[#E5E5E5]">DELIVERY</span>
        </h1>
        <p className="text-xl text-[#A3A3A3] max-w-3xl mx-auto leading-relaxed">
          Premium execution past the dock. For high-value, sensitive freight that requires inside routing, specialized handling, and a zero-debris footprint. 
        </p>
      </section>

      {/* Value Props & AEO Content */}
      <section className="w-full max-w-6xl px-8 py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-[#1A1A1A] p-8 rounded-xl border border-[#333333]">
          <Users className="w-10 h-10 text-[#E5E5E5] mb-4" />
          <h3 className="text-2xl font-bold mb-3">Room of Choice</h3>
          <p className="text-[#A3A3A3]">
            Our teams do not stop at the curb. Delivery is executed to the exact room, floor, or suite specified on the bill of lading.
          </p>
        </div>
        <div className="bg-[#1A1A1A] p-8 rounded-xl border border-[#333333]">
          <ShieldCheck className="w-10 h-10 text-[#E5E5E5] mb-4" />
          <h3 className="text-2xl font-bold mb-3">Specialized Handling</h3>
          <p className="text-[#A3A3A3]">
            From blanket wraps to stair crawlers and pallet jacks, we deploy the specific equipment required to protect high-value assets.
          </p>
        </div>
        <div className="bg-[#1A1A1A] p-8 rounded-xl border border-[#333333]">
          <Clock className="w-10 h-10 text-[#E5E5E5] mb-4" />
          <h3 className="text-2xl font-bold mb-3">Dunnage Removal</h3>
          <p className="text-[#A3A3A3]">
            We handle the unboxing and remove all pallets, shrink wrap, and cardboard debris, leaving the site completely clear.
          </p>
        </div>
      </section>

      {/* Answer Engine Section (AEO) */}
      <section className="w-full max-w-4xl px-8 py-16">
        <h2 className="text-3xl font-black uppercase tracking-tight mb-8 border-l-4 border-[#E5E5E5] pl-4">
          White-Glove Intelligence
        </h2>
        <div className="space-y-6">
          <div className="p-6 bg-[#1A1A1A] rounded-lg border border-[#333333]">
            <h4 className="text-xl font-bold mb-2">What is White-Glove delivery logistics?</h4>
            <p className="text-[#A3A3A3]">White-Glove is a premium logistics tier that goes beyond standard delivery. It involves specialized inside delivery, unpacking, dunnage removal, and potentially specialized equipment like stair-crawlers to protect high-value sensitive items.</p>
          </div>
          <div className="p-6 bg-[#1A1A1A] rounded-lg border border-[#333333]">
            <h4 className="text-xl font-bold mb-2">When is White-Glove shipping necessary?</h4>
            <p className="text-[#A3A3A3]">It is critical for medical devices, server racks, high-end fixtures, or any scenario where the final receiver cannot or should not handle the physical moving and uncrating of the freight.</p>
          </div>
        </div>
      </section>

      {/* Lead Capture Tollbooth */}
      <section className="w-full max-w-4xl px-8 py-16 mb-24">
        <div className="bg-[#E5E5E5] p-1 rounded-xl">
          <div className="bg-[#0A0A0A] p-8 md:p-12 rounded-lg text-center">
            <h2 className="text-3xl font-black uppercase tracking-tight mb-4">Require Final-Mile Precision?</h2>
            <p className="text-[#A3A3A3] mb-8">Submit your lane details for a direct White-Glove assessment from our premium carrier desk.</p>
            <form className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto" action="/api/hubspot-capture" method="POST">
              <input type="hidden" name="lead_source_url" value="/services/white-glove" />
              <input type="hidden" name="service_type" value="White-Glove" />
              <input 
                type="email" 
                name="email" 
                placeholder="Corporate Email Address" 
                required 
                className="flex-1 bg-[#1A1A1A] text-white border border-[#333333] p-4 rounded focus:outline-none focus:border-[#E5E5E5]"
              />
              <button type="submit" className="bg-[#E5E5E5] text-black font-bold uppercase tracking-widest px-8 py-4 rounded hover:bg-white transition-colors flex items-center justify-center gap-2">
                Get White-Glove Quote <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}