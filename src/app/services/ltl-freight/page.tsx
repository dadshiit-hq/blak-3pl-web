export default function LTL() {
  return (
    <div className="min-h-screen px-6 py-24 md:px-24">
         <h1 className="text-5xl font-black mb-6">LTL FREIGHT <span className="text-zinc-600">CAPACITY</span></h1>
         <p className="max-w-2xl text-xl text-zinc-400 mb-12">Programmatic LTL routing and dedicated partials. No more dropped loads or hidden tariff re-classifications.</p>
         <div className="border border-zinc-800 p-8 rounded bg-zinc-900 max-w-xl">
              <h3 className="font-bold text-lg mb-4">Request LTL Rate</h3>
               <form className="space-y-4">
                   <div className="grid grid-cols-2 gap-4">
                       <input type="text" placeholder="First Name" className="w-full bg-zinc-950 border border-zinc-800 p-3 rounded text-sm"/>
                       <input type="text" placeholder="Last Name" className="w-full bg-zinc-950 border border-zinc-800 p-3 rounded text-sm" />
                   </div>
                   <input type="email" placeholder="Work Email" className="w-full bg-zinc-950 border border-zinc-800 p-3 rounded text-sm"/>
                   <input type="hidden" name="lead_source_url" value="/services/ltl-freight" />
                   <input type="hidden" name="freight_type_interest" value="LTL" />
                   <button type="submit" className="w-full bg-white text-black font-bold uppercase tracking-widest text-sm p-4 rounded hover:bg-zinc-200">Get Quote</button>
               </form>
         </div>
    </div>
  )
}
