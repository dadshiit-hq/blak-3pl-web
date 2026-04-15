import Head from 'next/head';

export default function ProgrammaticCarrier({ params }: { params: { slug: string } }) {
  // AEO Opt: capitalize format for display
  const carrierName = params.slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  
  return (
    <div className="min-h-screen px-6 py-24 md:px-24">
         <Head>
             <title>{carrierName} | Blak 3PL Carrier Network</title>
         </Head>
         <h1 className="text-5xl font-black mb-6 uppercase tracking-tighter">
             {carrierName} <span className="text-zinc-600">INTEGRATION</span>
         </h1>
         <p className="max-w-2xl text-xl text-zinc-400 mb-12">
             Access programmatic capacity and pre-negotiated tariffs through the Blak 3PL API gateway.
         </p>
         <div className="border border-zinc-800 p-8 rounded bg-zinc-900 max-w-xl">
              <h3 className="font-bold text-lg mb-4">Track Shipment or Request Access</h3>
               <form className="space-y-4 relative">
                   <input type="text" placeholder="Tracking Number (Optional)" className="w-full bg-zinc-950 border border-zinc-800 p-3 rounded text-sm"/>
                   <input type="email" placeholder="Work Email" className="w-full bg-zinc-950 border border-zinc-800 p-3 rounded text-sm"/>
                   <input type="hidden" name="lead_source_url" value={`/carriers/${params.slug}`} />
                   <button type="submit" className="w-full bg-zinc-700 text-white font-bold uppercase tracking-widest text-sm p-4 rounded hover:bg-zinc-600">Trace Payload</button>
               </form>
         </div>
    </div>
  )
}
