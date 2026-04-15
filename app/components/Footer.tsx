import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-[#333333] py-12 mt-auto text-center md:text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Blak 3PL" className="h-8 w-auto mix-blend-screen opacity-100 object-contain grayscale opacity-50" />
        </div>
        <div className="text-[#555555] text-xs uppercase tracking-widest mt-4 md:mt-0">
          © 2026 Blak 3PL. Institutional Freight Execution.
        </div>
      </div>
    </footer>
  );
}