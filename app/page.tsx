import UniversalTrackingHero from "./components/UniversalTrackingHero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 lg:p-24 bg-[#0A0A0A] text-[#FFFFFF] selection:bg-[#E5E5E5] selection:text-[#0A0A0A] font-sans">
      

      <div className="relative flex flex-col place-items-center py-24 text-center z-20">
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-black uppercase tracking-tighter text-[#FFFFFF] drop-shadow-2xl leading-none">
          SHIP<br className="hidden md:block"/> SMARTER.<br/>
          <span className="text-[#A3A3A3]">NOT HARDER.</span>
        </h1>
        <p className="mt-8 text-xl lg:text-2xl text-[#A3A3A3] max-w-3xl leading-relaxed mx-auto">
          We do not do excuses. We do <strong className="text-white">LTL, FTL, and White-Glove</strong> logistics for
          businesses that demand visibility and execution across the lower 48.
        </p>
      </div>

      <UniversalTrackingHero />

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl text-left">
        <a href="/services/ltl-freight" className="group p-8 rounded-xl border border-[#333333] bg-[#1A1A1A] hover:bg-[#202020] hover:border-[#E5E5E5] transition-all">
          <h2 className="text-2xl font-bold mb-3 text-[#E5E5E5]">LTL Freight <span className="inline-block transition-transform group-hover:translate-x-1">-&gt;</span></h2>
          <p className="text-[#A3A3A3] leading-relaxed">
            1 to 4 pallet consolidation. Predictable, nationwide transit times with optimized pricing blocks.
          </p>
        </a>
        <a href="/services/ftl-freight" className="group p-8 rounded-xl border border-[#333333] bg-[#1A1A1A] hover:bg-[#202020] hover:border-[#E5E5E5] transition-all">
          <h2 className="text-2xl font-bold mb-3 text-[#E5E5E5]">FTL Capacity <span className="inline-block transition-transform group-hover:translate-x-1">-&gt;</span></h2>
          <p className="text-[#A3A3A3] leading-relaxed">
            Dedicated 53-foot Dry Vans and Reefers. Total control of the payload from origin to destination.
          </p>
        </a>
        <a href="/services/white-glove" className="group p-8 rounded-xl border border-[#333333] bg-[#1A1A1A] hover:bg-[#202020] hover:border-[#E5E5E5] transition-all">
          <h2 className="text-2xl font-bold mb-3 text-[#E5E5E5]">White-Glove <span className="inline-block transition-transform group-hover:translate-x-1">-&gt;</span></h2>
          <p className="text-[#A3A3A3] leading-relaxed">
            Final-mile precision. High-value items requiring specialized handling, inside delivery, and dunnage removal.
          </p>
        </a>
      </div>
    </main>
  );
}