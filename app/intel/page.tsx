
import Link from 'next/link';

export const metadata = {
  title: 'Logistics Intel & Industry Data | Blak 3PL',
  description: 'High-level insights, Answer Engine Optimization (AEO), and data for institutional shippers and supply chain builders.',
};

export default function IntelPage() {
  return (
    <div className="flex flex-col min-h-screen items-center py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 w-full relative">
      
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-[#FFFFFF] drop-shadow-2xl mb-6">
          INDUSTRY <span className="text-[#A3A3A3]">INTEL</span>
        </h1>
        <p className="text-xl text-[#A3A3A3] max-w-3xl mx-auto leading-relaxed">
          We strip the noise out of North American supply chains. High-level analysis, institutional guidance, and data for businesses that demand execution.
        </p>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Article Card */}
        <Link href="/intel/the-1-4-pallet-lie" className="group">
          <article className="bg-[#0A0A0A] border border-[#333333] p-10 rounded-xl hover:bg-[#1A1A1A] hover:border-[#E5E5E5] transition-all h-full relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
            
            <time className="text-xs font-bold text-[#555555] uppercase tracking-widest mb-4 block">April 2026</time>
            <h2 className="text-[#FFFFFF] text-2xl font-extrabold tracking-tight mb-4 group-hover:text-[#E5E5E5] transition-colors leading-snug">
              The 1-4 Pallet Lie: Why Legacy LTL Consolidation is Bleeding You Dry
            </h2>
            <p className="text-[#A3A3A3] leading-relaxed mb-8">
              Why institutional shippers are losing margin on 1 to 4 pallet freight, and how legacy hub-and-spoke networks treat your cargo as filler.
            </p>
            
            <div className="flex items-center text-[#E5E5E5] font-bold text-sm tracking-wider uppercase group-hover:translate-x-2 transition-transform">
              Read Intel <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </div>
          </article>
        </Link>
        {/* End Article Card */}

      </div>
    </div>
  );
}
