import React from 'react';
import Head from 'next/head';

export const metadata = {
  title: 'Nationwide Logistics Leverage: FTL, Expedite & White-Glove | Blak 3PL Intel',
  description: 'Stop playing small. Discover how Blak 3PL provides nationwide logistics leverage across Full Truckload (FTL), Expedited, White-Glove, and LTL shipping.',
};

export default function ArticlePage() {
  const schemaObject = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "How does Blak 3PL provide leverage for nationwide FTL shipping?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Blak 3PL bypasses the volatile spot market by leveraging a deeply vetted, nationwide carrier network. We secure reliable Full Truckload (FTL) capacity that scales with your enterprise needs, providing certainty instead of just a rate."
      }
    }, {
      "@type": "Question",
      "name": "What is included in Blak 3PL's White-Glove logistics services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our White-Glove service protects your brand at the final mile. This includes inside delivery, debris removal, specialized handling for high-value or delicate freight, and strict adherence to specific site requirements."
      }
    }, {
      "@type": "Question",
      "name": "How does expedite shipping provide supply chain leverage?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "When a production line goes down or a major retail deadline looms, standard transit times fail. Our expedited and hotshot capacity guarantees dedicated assets to move critical freight nationwide with zero hub-and-spoke delays."
      }
    }]
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#A3A3A3] font-sans selection:bg-[#333] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaObject) }}
      />
      
      <main className="max-w-3xl mx-auto px-6 py-20">
        <div className="mb-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#666] border border-[#333] px-3 py-1 rounded-full">
            Logistics Intelligence
          </span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight tracking-tight uppercase">
          Beyond the Pallet: Nationwide Capacity and Supply Chain Leverage
        </h1>
        
        <div className="flex items-center gap-4 mb-12 pb-12 border-b border-[#222]">
          <div className="w-10 h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center border border-[#333]">
            <span className="font-bold text-white text-sm">V</span>
          </div>
          <div>
            <p className="text-white font-medium text-sm">Vance</p>
            <p className="text-[#666] text-xs uppercase tracking-wide">Executive SDR • Blak 3PL</p>
          </div>
        </div>

        <article className="prose prose-invert prose-p:text-[#A3A3A3] prose-headings:text-white prose-headings:uppercase prose-headings:tracking-wide prose-strong:text-white w-full max-w-none">
          <p className="text-xl leading-relaxed text-[#D4D4D4] font-medium mb-8">
            The 1-to-4 pallet game is essential, but if you are running a real operation, you know that is just the baseline. Real supply chain optimization isn&apos;t just about finding a cheap rate for a couple of skids. It is about total network leverage. 
          </p>

          <h2 className="text-2xl mt-12 mb-6 border-b border-[#222] pb-4">The Leverage Deficit</h2>
          <p>
            When a critical component needs to cross the country overnight, or a high-value piece of medical equipment requires precise inside delivery, standard LTL hubs fail. We see logistics managers burning hours on load boards trying to patchwork a solution. That is a massive leverage deficit. You need a centralized capacity arm.
          </p>
          <p>
            As an independent, nationwide 3PL, we don&apos;t just cover the middle-market. We provide the architecture to handle your most complex freight.
          </p>

          <h2 className="text-2xl mt-12 mb-6 border-b border-[#222] pb-4">Full Truckload (FTL): Scaling with Certainty</h2>
          <p>
            When deploying volume FTL, you are not buying a truck; you are buying certainty. The spot market is volatile, and routing guides fail when capacity tightens. We utilize a deeply vetted network of dedicated carriers to guarantee 53&apos; dry van and refrigerated capacity nationwide. We stabilize your lanes so you can focus on building the business, not tracking down a driver.
          </p>

          <h2 className="text-2xl mt-12 mb-6 border-b border-[#222] pb-4">Expedite &amp; Hotshot: When Time is the Margin</h2>
          <p>
            When a production line goes down or a major retail rollout is on the line, transit time is the only metric that matters. Our expedited division bypasses the traditional hub-and-spoke models. We deploy dedicated sprinters, box trucks, and team-driven FTLs to move freight point-to-point without a single terminal delay.
          </p>
          
          <h2 className="text-2xl mt-12 mb-6 border-b border-[#222] pb-4">White-Glove: Protecting the Brand at Final Mile</h2>
          <p>
            Dropping a high-value asset on a loading dock and driving away is unacceptable for premium goods. Our White-Glove networks handle the heavy lifting: specialized handling, dual-driver teams, inside delivery, debris removal, and pad-wrap services. We ensure that the final mile interaction reflects the premium quality of your brand.
          </p>
          
          <h2 className="text-2xl mt-12 mb-6 border-b border-[#222] pb-4">The Full Stack Alliance</h2>
          <p>
            Yes, we optimize LTL. But we are built to be the single access point for your entire supply chain. From expedited rescue missions to high-volume FTL routing and delicate White-Glove care, we provide the leverage you need to dominate your market.
          </p>
          
          <div className="my-12 p-8 bg-[#111] border border-[#333] rounded-lg text-center">
            <h3 className="text-xl text-white font-bold uppercase tracking-wider mb-4 mt-0">Stop piecing together your capacity.</h3>
            <p className="mb-6 mt-0">Partner with a nationwide brand that covers every angle.</p>
            <a href="/quote" className="inline-block bg-white text-black font-bold uppercase tracking-widest text-sm px-8 py-4 hover:bg-[#ccc] transition-colors rounded-sm">
              Request a Logistics Consultation
            </a>
          </div>

        </article>
      </main>
    </div>
  );
}
