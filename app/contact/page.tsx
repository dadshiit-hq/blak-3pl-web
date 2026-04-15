"use client";

import React, { useState } from 'react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export default function ContactPage() {
  // Local state for simulating HubSpot fallback if needed
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCaptureSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    
    // Auto-inject URL context for tracking
    formData.append('lead_source_url', '/contact');
    
    try {
      await fetch('/api/hubspot-capture', {
        method: 'POST',
        body: formData
      });
      setFormSubmitted(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#FFFFFF] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12">
        
        {/* Left Column: Context & Info */}
        <div className="md:col-span-2 space-y-10">
          <div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 uppercase">
              Sign Up / Request <br/><span className="text-[#A3A3A3]">Quote</span>
            </h1>
            <p className="text-[#A3A3A3] text-lg leading-relaxed">
              Drop your lane details into the engine. Our routing architects will cross-reference our national network and return a rate matrix that beats your current carrier.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4 text-[#A3A3A3]">
              <div className="w-12 h-12 bg-[#1A1A1A] flex items-center justify-center rounded-lg border border-[#333333]">
                <Phone className="w-5 h-5 text-[#E5E5E5]" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-[#555555]">Direct Dispatch</div>
                <div className="text-[#FFFFFF] font-semibold">708-231-8045</div>
              </div>
            </div>
            
            <div className="flex items-center gap-4 text-[#A3A3A3]">
              <div className="w-12 h-12 bg-[#1A1A1A] flex items-center justify-center rounded-lg border border-[#333333]">
                <Mail className="w-5 h-5 text-[#E5E5E5]" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-[#555555]">Enterprise Sales</div>
                <div className="text-[#FFFFFF] font-semibold">twanjones@blak3pll.com</div>
              </div>
            </div>

            <div className="flex items-center gap-4 text-[#A3A3A3]">
              <div className="w-12 h-12 bg-[#1A1A1A] flex items-center justify-center rounded-lg border border-[#333333]">
                <MapPin className="w-5 h-5 text-[#E5E5E5]" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-[#555555]">Headquarters</div>
                <div className="text-[#FFFFFF] font-semibold">Dunedin, FL Operations Center</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: HubSpot Lead Trap */}
        <div className="md:col-span-3 bg-[#1A1A1A] p-8 md:p-10 rounded-xl border border-[#333333] shadow-2xl relative">
          
          <h3 className="text-2xl font-bold uppercase tracking-wide mb-6 flex items-center gap-2">
            Create Account & <span className="text-[#A3A3A3]">Quote Request</span> <ArrowRight className="w-5 h-5" />
          </h3>
          
          <div id="hubspot-embed-target" className="min-h-[400px] w-full bg-[#0A0A0A] border border-[#333333] rounded-lg p-6">
            
            {!formSubmitted ? (
              <form className="space-y-4" onSubmit={handleCaptureSubmit}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#A3A3A3] mb-2 uppercase">First Name</label>
                    <input type="text" name="firstname" className="w-full bg-[#1A1A1A] text-white border border-[#333333] p-3 rounded focus:border-[#E5E5E5] outline-none" required />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#A3A3A3] mb-2 uppercase">Last Name</label>
                    <input type="text" name="lastname" className="w-full bg-[#1A1A1A] text-white border border-[#333333] p-3 rounded focus:border-[#E5E5E5] outline-none" required />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#A3A3A3] mb-2 uppercase">Corporate Email</label>
                  <input type="email" name="email" className="w-full bg-[#1A1A1A] text-white border border-[#333333] p-3 rounded focus:border-[#E5E5E5] outline-none" required />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#A3A3A3] mb-2 uppercase">Freight Type</label>
                  <select name="freight_type" className="w-full bg-[#1A1A1A] text-white border border-[#333333] p-3 rounded focus:border-[#E5E5E5] outline-none appearance-none">
                    <option>LTL (Less-Than-Truckload)</option>
                    <option>FTL (Full Truckload)</option>
                    <option>White-Glove / Final Mile</option>
                  </select>
                </div>
                <button type="submit" className="w-full bg-[#E5E5E5] text-[#0A0A0A] font-extrabold uppercase tracking-widest p-4 rounded hover:bg-white transition-colors mt-4">
                  Create Account & Request Quote
                </button>
              </form>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-center space-y-4 animate-fade-in py-12">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-2">
                  <div className="w-8 h-8 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                <h4 className="text-xl font-bold text-white">Payload Received.</h4>
                <p className="text-[#A3A3A3]">Account initialized. Our routing architects have your capacity request and will touch base with your rate matrix shortly.</p>
              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}