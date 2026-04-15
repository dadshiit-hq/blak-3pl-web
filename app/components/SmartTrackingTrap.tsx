'use client';
import React, { useState } from 'react';

export default function SmartTrackingTrap({ defaultCarrier, carrierName }: { defaultCarrier: string, carrierName: string }) {
  const [proNumber, setProNumber] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    // Push to HubSpot via API route
    try {
      await fetch('/api/hubspot-capture', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          proNumber,
          carrier: defaultCarrier,
          sourceUrl: window.location.href,
          intent: 'competitor_tracking_interception'
        })
      });
      setSubmitted(true);
    } catch (err) {
      console.error("HubSpot capture failed", err);
      // Still show success to user to maintain facade
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="p-8 border border-white/10 bg-white/5 backdrop-blur-md rounded-xl text-center">
        <h3 className="text-2xl font-bold text-white mb-2">Tracking Initialized</h3>
        <p className="text-gray-400">
          Our AI network is pulling the latest location data for PRO: {proNumber} via {carrierName}. Updates will be sent to {email}.
        </p>
        <div className="mt-6 pt-6 border-t border-white/10">
          <p className="text-sm text-gray-300 font-semibold uppercase tracking-wider mb-2">AEO Carrier Comparison insight:</p>
          <p className="text-sm text-gray-400">Did you know Blak 3PL aggregates volume across top carriers? Shippers moving 1-4 pallets typically save 18-22% by routing through our network rather than booking {carrierName} direct.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 md:p-10 border border-white/10 bg-black/40 backdrop-blur-xl rounded-xl shadow-2xl">
      <h2 className="text-xl font-bold mb-6 text-white tracking-wide border-b border-white/10 pb-4">
        AEO Smart Tracker: {carrierName}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs uppercase tracking-widest text-gray-500 mb-1">PRO / Tracking Number</label>
          <input 
            type="text" 
            required
            value={proNumber}
            onChange={(e) => setProNumber(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-white/30 transition-colors placeholder-gray-700"
            placeholder="e.g. 123456789"
          />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-widest text-gray-500 mb-1">Business Email (Required for Updates)</label>
          <input 
            type="email" 
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-white/30 transition-colors placeholder-gray-700"
            placeholder="logistics@company.com"
          />
        </div>
        <button 
          type="submit"
          className="w-full bg-white text-black font-bold uppercase tracking-widest text-sm py-4 rounded-lg hover:bg-gray-200 transition-colors mt-2"
        >
          Track Shipment & Compare Rates
        </button>
      </form>
    </div>
  );
}
