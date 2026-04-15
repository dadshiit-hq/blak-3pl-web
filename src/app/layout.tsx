import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blak 3PL | Nationwide LTL & FTL Freight Capacity",
  description: "Boutique, white-glove logistics backed by massive nationwide capacity. The hybrid freight solution.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
         <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} bg-zinc-950 text-white`}>
          <nav className="border-b border-zinc-800 p-6 flex justify-between items-center bg-black/50 backdrop-blur-md sticky top-0 z-50">
             <div className="font-bold text-2xl tracking-tighter">BLAK <span className="text-zinc-500">3PL</span></div>
             <div className="space-x-6 text-sm tracking-wide hidden md:block">
                 <a href="/services/ltl-freight" className="hover:text-zinc-400 border-b border-transparent hover:border-zinc-400 uppercase">LTL Freight</a>
                 <a href="/services/ftl-full-truckload" className="hover:text-zinc-400 border-b border-transparent hover:border-zinc-400 uppercase">FTL Freight</a>
                 <a href="/services/white-glove" className="hover:text-zinc-400 border-b border-transparent hover:border-zinc-400 uppercase">White Glove</a>
             </div>
          </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
