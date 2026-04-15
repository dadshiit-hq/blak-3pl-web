"use client";

import React, { useState } from 'react';
import { Search, Mail, Truck, ArrowRight, CheckCircle, Loader2 } from 'lucide-react';

// Comprehensive Top 15 NA LTL Carrier Dictionary with GET Parameter URLs
const CARRIER_ROUTING_MAP = {
  arcbest: { name: 'ArcBest / ABF Freight', baseUrl: 'https://arcb.com/tools/tracking.html?numbers=' },
  averitt: { name: 'Averitt Express', baseUrl: 'https://www.averitt.com/tracking?pro=' },
  central: { name: 'Central Transport', baseUrl: 'https://www.centraltransport.com/ctii/tracking.cgi?reqtype=PRO&reqno=' },
  dayton: { name: 'Dayton Freight', baseUrl: 'https://www.daytonfreight.com/tracking/?pro=' },
  estes: { name: 'Estes Express Lines', baseUrl: 'https://www.estes-express.com/tracking/overview?pro=' },
  fedex: { name: 'FedEx Freight', baseUrl: 'https://www.fedex.com/fedextrack/?tracknumbers=' },
  odfl: { name: 'Old Dominion (ODFL)', baseUrl: 'https://www.odfl.com/us/en/tools/trace-track-ltl-freight.html?pro=' },
  oakharbor: { name: 'Oak Harbor Freight', baseUrl: 'https://www.oakh.com/tracking/?pro=' },
  pittohio: { name: 'Pitt Ohio', baseUrl: 'https://works.pittohio.com/mypittohio/sgt/Trace?pro=' },
  rl: { name: 'R+L Carriers', baseUrl: 'https://www.rlcarriers.com/freight/shipping/trace?pro=' },
  saia: { name: 'Saia LTL Freight', baseUrl: 'https://www.saia.com/track?proNumber=' },
  sefl: { name: 'Southeastern Freight (SEFL)', baseUrl: 'https://www.sefl.com/seflWebsite/trace.jsp?pro=' },
  tforce: { name: 'TForce Freight', baseUrl: 'https://www.tforcefreight.com/ltl/apps/Tracking?type=PRO&reference=' },
  ward: { name: 'Ward Transport', baseUrl: 'https://www.wardtlc.com/tracking/?pro=' },
  xpo: { name: 'XPO Logistics', baseUrl: 'https://www.xpo.com/tracking/?pro=' }
};

export default function UniversalTrackingHero() {
  const [carrier, setCarrier] = useState('xpo');
  const [proNumber, setProNumber] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleTrackSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Basic validation
    if (!proNumber.trim()) {
      setErrorMessage('PRO number is required.');
      return;
    }
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) {
      setErrorMessage('A valid corporate email is required to access tracking.');
      return;
    }

    setStatus('submitting');

    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("tracking_number", proNumber);
      formData.append("carrier", CARRIER_ROUTING_MAP[carrier as keyof typeof CARRIER_ROUTING_MAP].name);
      formData.append("lead_source_url", window.location.pathname);
      
      await fetch("/api/hubspot-capture", {
        method: "POST",
        body: formData,
      });

      // Construct the external carrier URL
      const trackingUrl = `${CARRIER_ROUTING_MAP[carrier as keyof typeof CARRIER_ROUTING_MAP].baseUrl}${encodeURIComponent(proNumber)}`;
      
      // Open the carrier tracking securely in a NEW tab
      window.open(trackingUrl, '_blank', 'noopener,noreferrer');

      // Pivot the local UI to the Success/Lead Trap state
      setStatus('success');
      
    } catch (error) {
      setErrorMessage('System error. Please try again or contact support.');
      setStatus('idle');
    }
  };

  const resetForm = () => {
    setProNumber('');
    setEmail('');
    setStatus('idle');
  };

  // SUCCESS STATE (The Sales Pitch)
  if (status === 'success') {
    return (
      <div className="w-full bg-[#0A0A0A] flex flex-col items-center justify-center py-12 px-4 shadow-2xl relative z-10 text-left border border-[#333333] rounded-xl mt-8">
        <div className="w-full max-w-2xl bg-[#1A1A1A] p-8 md:p-12 rounded-xl text-center">
          <div className="flex justify-center mb-6">
            <CheckCircle className="w-16 h-16 text-green-500 animate-pulse" />
          </div>
          <h2 className="text-[#FFFFFF] text-3xl font-bold tracking-tight mb-4">
            Tracking Data Retrieved.
          </h2>
          <p className="text-[#A3A3A3] mb-8 text-lg leading-relaxed">
            Your carrier&apos;s tracking interface has been securely opened in a new window. <br />
            <span className="text-[#E5E5E5] font-semibold mt-4 block">
              Still paying retail for that lane?
            </span>
            Our SDR team has received your query and will be emailing <strong className="text-white">{email}</strong> shortly with a comparative rate matrix. Stop losing margin to legacy carriers.
          </p>
          <button 
            onClick={resetForm}
            className="px-8 py-4 bg-transparent border border-[#333333] text-[#E5E5E5] font-bold rounded-lg hover:border-[#E5E5E5] hover:text-[#FFFFFF] transition-all uppercase tracking-wider"
          >
            Track Another Shipment
          </button>
        </div>
      </div>
    );
  }

  // DEFAULT STATE (The Tollbooth)
  return (
    <div className="w-full mt-8 bg-[#0A0A0A] flex flex-col items-center justify-center relative z-10 text-left border border-[#333333] shadow-2xl p-4 md:p-10 rounded-xl">
      <div className="w-full max-w-5xl">
        <div className="text-center mb-10">
          <h2 className="text-[#FFFFFF] text-4xl md:text-5xl font-extrabold tracking-tighter mb-4 uppercase">
            Universal Carrier Tracking
          </h2>
          <p className="text-[#A3A3A3] text-lg max-w-2xl mx-auto">
            Access real-time transit data across the top 15 North American LTL networks from a single, unified command center.
          </p>
        </div>

        <div className="bg-[#1A1A1A] p-6 md:p-10 rounded-xl border border-[#333333] relative overflow-hidden">
          
          {/* Subtle background accent */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>

          <form onSubmit={handleTrackSubmit} className="flex flex-col gap-6 relative z-10">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Carrier Selection */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-xs font-bold text-[#A3A3A3] uppercase tracking-wider">
                  <Truck className="w-4 h-4" /> Freight Carrier
                </label>
                <div className="relative">
                  <select 
                    className="w-full bg-[#0A0A0A] text-[#FFFFFF] border border-[#333333] p-4 pl-4 pr-10 rounded-lg focus:outline-none focus:border-[#E5E5E5] transition-colors appearance-none shadow-inner"
                    value={carrier}
                    onChange={(e) => setCarrier(e.target.value)}
                    disabled={status === 'submitting'}
                  >
                    {Object.entries(CARRIER_ROUTING_MAP).map(([key, data]) => (
                      <option key={key} value={key}>{data.name}</option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-[#A3A3A3]">
                    ▼
                  </div>
                </div>
              </div>

              {/* PRO Number Input */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-xs font-bold text-[#A3A3A3] uppercase tracking-wider">
                  <Search className="w-4 h-4" /> PRO / Tracking Number
                </label>
                <input 
                  type="text" 
                  placeholder="e.g. 123456789"
                  className="w-full bg-[#0A0A0A] text-[#FFFFFF] border border-[#333333] p-4 rounded-lg focus:outline-none focus:border-[#E5E5E5] transition-colors shadow-inner placeholder-[#444444]"
                  value={proNumber}
                  onChange={(e) => setProNumber(e.target.value)}
                  disabled={status === 'submitting'}
                  required
                />
              </div>
            </div>

            {/* Email Tollbooth & Submit Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end mt-2">
              <div className="md:col-span-2 space-y-2">
                <label className="flex items-center gap-2 text-xs font-bold text-[#A3A3A3] uppercase tracking-wider">
                  <Mail className="w-4 h-4" /> Corporate Email <span className="text-red-500">*</span>
                </label>
                <input 
                  type="email" 
                  placeholder="Enter email to access tracking..."
                  className="w-full bg-[#0A0A0A] text-[#FFFFFF] border border-[#333333] p-4 rounded-lg focus:outline-none focus:border-[#E5E5E5] transition-colors shadow-inner placeholder-[#444444]"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === 'submitting'}
                  required
                />
              </div>

              <div className="md:col-span-1">
                <button 
                  type="submit"
                  disabled={status === 'submitting'}
                  className={`w-full flex items-center justify-center gap-2 bg-[#E5E5E5] text-[#0A0A0A] font-extrabold p-4 rounded-lg hover:bg-[#FFFFFF] transition-all uppercase tracking-widest h-[58px] ${status === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {status === 'submitting' ? (
                    <><Loader2 className="w-5 h-5 animate-spin" /> Verifying...</>
                  ) : (
                    <>Trace Route <ArrowRight className="w-5 h-5" /></>
                  )}
                </button>
              </div>
            </div>

            {/* Error State */}
            {errorMessage && (
              <div className="p-3 bg-red-500/10 border border-red-500/50 rounded text-red-400 text-sm font-semibold mt-2">
                {errorMessage}
              </div>
            )}

            <p className="text-xs text-[#555555] text-center mt-4">
              By accessing tracking data, you agree to allow Blak 3PL to send a one-time comparative quote to the provided email address.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}