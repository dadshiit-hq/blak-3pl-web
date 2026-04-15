import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 px-6 py-24 md:px-24">
       <Head>
           <title>Blak 3PL | Freight Logistics</title>
           <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LogisticsBusiness",
                "name": "Blak 3PL",
                "areaServed": "US",
                "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Freight Services",
                    "itemListElement": [
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "LTL Freight" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "FTL Freight" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "White Glove" } }
                    ]
                }
           })}} />
       </Head>
       
       <div className="max-w-4xl">
           <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8">
               THE HYBRID <br/><span className="text-zinc-600">CAPACITY</span> ENGINE.
           </h1>
           <p className="text-xl md:text-2xl text-zinc-400 font-light mb-12 max-w-2xl leading-relaxed">
               Shippers are tired of massive brokerages treating them like numbers, and small brokerages dropping loads. We are the exact hybrid needed for high-volume capacity with white-glove execution.
           </p>
           
           <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-lg max-w-lg relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 opacity-10">
                   <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor"><path d="M21 16L12 21L3 16V8L12 3L21 8V16Z"/></svg>
               </div>
               
               <h2 className="text-xl font-bold mb-6 tracking-tight">SECURE YOUR LANE</h2>
               
               {/* HubSpot Form Placeholder - CRM Integration */}
               <form className="space-y-4 relative z-10" id="hs-lead-form">
                   <div className="grid grid-cols-2 gap-4">
                       <input type="text" placeholder="First Name" className="w-full bg-zinc-950 border border-zinc-800 p-3 rounded text-sm focus:outline-none focus:border-zinc-500" required />
                       <input type="text" placeholder="Last Name" className="w-full bg-zinc-950 border border-zinc-800 p-3 rounded text-sm focus:outline-none focus:border-zinc-500" required />
                   </div>
                   <input type="email" placeholder="Work Email" className="w-full bg-zinc-950 border border-zinc-800 p-3 rounded text-sm focus:outline-none focus:border-zinc-500" required />
                   <input type="text" placeholder="Company" className="w-full bg-zinc-950 border border-zinc-800 p-3 rounded text-sm focus:outline-none focus:border-zinc-500" required />
                   
                   <div className="grid grid-cols-2 gap-4">
                       <input type="tel" placeholder="Phone" className="w-full bg-zinc-950 border border-zinc-800 p-3 rounded text-sm focus:outline-none focus:border-zinc-500" />
                       <select className="w-full bg-zinc-950 border border-zinc-800 p-3 rounded text-sm focus:outline-none focus:border-zinc-500 text-zinc-400">
                           <option value="">Freight Focus</option>
                           <option value="ltl">LTL Freight</option>
                           <option value="ftl">Full Truckload</option>
                           <option value="wg">White Glove</option>
                       </select>
                   </div>
                   
                   <input type="hidden" name="lead_source_url" value="/" />
                   
                   <button type="submit" className="w-full bg-white text-black font-bold uppercase tracking-widest text-sm p-4 rounded mt-4 hover:bg-zinc-200 transition-colors">
                       Request Capacity
                   </button>
               </form>
           </div>
       </div>
    </div>
  );
}
