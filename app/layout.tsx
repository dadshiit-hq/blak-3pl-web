import './globals.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LogisticsService",
    "name": "Blak 3PL",
    "url": "https://blak-3pl-web.vercel.app",
    "logo": "https://assets-dadshiit.vercel.app/assets/banner.png",
    "description": "Nationwide FTL, LTL, and White-Glove Logistics designed for builders and businesses that need execution, not excuses.",
    "telephone": "+1-708-231-8045",
    "areaServed": [
      {
        "@type": "Country",
        "name": "United States"
      },
      {
        "@type": "Country",
        "name": "Canada"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Freight Logistics Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "LTL Freight Consolidation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Full Truckload (FTL) Capacity"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "White-Glove Final Mile Delivery"
          }
        }
      ]
    }
  };

  return (
    <html lang="en" className="bg-[#0A0A0A]">
      <body className="min-h-screen bg-[#0A0A0A] text-[#FFFFFF] font-sans flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navigation />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}