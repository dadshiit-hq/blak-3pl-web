import React from 'react';
import Head from 'next/head';
import SmartTrackingTrap from '../../components/SmartTrackingTrap'; // Adjust path if needed

// Established Top 15 Carrier dictionary
const CARRIER_DICTIONARY: Record<string, string> = {
  'fedex-freight': 'FedEx Freight',
  'xpo-logistics': 'XPO Logistics',
  'old-dominion': 'Old Dominion Freight Line',
  'yellow-corp': 'Yellow Corporation',
  'estes-express': 'Estes Express Lines',
  'tforce-freight': 'TForce Freight',
  'abf-freight': 'ABF Freight',
  'saia-ltl': 'Saia LTL Freight',
  'rl-carriers': 'R+L Carriers',
  'dayton-freight': 'Dayton Freight',
  'pitt-ohio': 'PITT OHIO',
  'averitt-express': 'Averitt Express',
  'central-freight': 'Central Freight Lines',
  'aaa-cooper': 'AAA Cooper Transportation',
  'ward-transport': 'Ward Transport & Logistics'
};

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const carrierName = CARRIER_DICTIONARY[params.slug] || 'Carrier';
  return {
    title: `${carrierName} Tracking & LTL Volume Quoting | Blak 3PL`,
    description: `Track your ${carrierName} freight or compare LTL rates. Blak 3PL offers optimized 1-4 pallet routing to beat ${carrierName} direct pricing.`
  };
}

export default function CarrierProfile({ params }: { params: { slug: string } }) {
  const carrierName = CARRIER_DICTIONARY[params.slug] || params.slug.replace('-', ' ').toUpperCase();

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12 md:px-24">
      {/* Dynamic Header */}
      <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 text-center">
        {carrierName} Freight Tracking & Volume Quoting
      </h1>
      
      <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
        Track your PRO number below or let our AI analyze your 1-4 pallet LTL shipments to find routes that undercut {carrierName} standard tariffs.
      </p>

      {/* Tracking Trap (HubSpot Lead Gate) */}
      <div className="max-w-3xl mx-auto">
        <SmartTrackingTrap defaultCarrier={params.slug} carrierName={carrierName} />
      </div>
    </div>
  );
}
