"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Shield, Phone, ChevronDown, Activity } from 'lucide-react';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const serviceLinks = [
    { name: 'LTL Freight', href: '/services/ltl-freight', description: 'Optimized network consolidation.' },
    { name: 'Full Truckload', href: '/services/ftl-freight', description: 'Dedicated high-capacity assets.' },
    { name: 'White Glove', href: '/services/white-glove', description: 'Premium final-mile handling.' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[#333333]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo / Brand */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-3 cursor-pointer relative top-1">
            <img src="/logo.png" alt="Blak 3PL" className="h-10 w-auto mix-blend-screen opacity-100 object-contain" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-[#A3A3A3] hover:text-[#FFFFFF] text-sm font-bold uppercase tracking-wider transition-colors flex items-center gap-2">
               Tracking
            </Link>
            
            {/* Services Dropdown (Desktop) */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="text-[#A3A3A3] group-hover:text-[#FFFFFF] text-sm font-bold uppercase tracking-wider transition-colors flex items-center gap-1 py-8 focus:outline-none">
                Services <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 w-72 bg-[#1A1A1A] border border-[#333333] shadow-2xl rounded-b-lg overflow-hidden py-2 animate-fade-in">
                  {serviceLinks.map((service) => (
                    <Link 
                      key={service.name} 
                      href={service.href} 
                      className="block px-6 py-4 hover:bg-[#333333]/50 transition-colors border-b border-[#333333] last:border-0"
                    >
                      <div className="text-[#FFFFFF] font-bold text-sm uppercase tracking-wide mb-1">{service.name}</div>
                      <div className="text-[#A3A3A3] text-xs">{service.description}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/about" className="text-[#A3A3A3] hover:text-[#FFFFFF] text-sm font-bold uppercase tracking-wider transition-colors">
              The Blak Standard
            </Link>
            
            <Link href="/contact" className="bg-[#E5E5E5] text-[#0A0A0A] px-6 py-3 rounded-sm font-extrabold text-sm uppercase tracking-wider hover:bg-white transition-colors shadow-lg">
              Get Quote
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button 
              onClick={toggleMobileMenu}
              className="text-[#E5E5E5] hover:text-white p-2 focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#1A1A1A] border-b border-[#333333] absolute w-full left-0 animate-fade-in shadow-2xl">
          <div className="px-4 pt-4 pb-6 space-y-2">
            <Link href="/" className="block px-4 py-3 text-[#FFFFFF] font-bold text-sm uppercase tracking-wider bg-[#333333]/30 rounded-md">
              Tracking Center
            </Link>
            
            <div className="px-4 py-2 text-[#777777] text-xs font-bold uppercase tracking-widest mt-4 mb-2">
              Logistics Services
            </div>
            {serviceLinks.map((service) => (
              <Link key={service.name} href={service.href} className="block px-4 py-3 text-[#A3A3A3] hover:text-[#FFFFFF] font-semibold text-sm border-l-2 border-transparent hover:border-[#E5E5E5] transition-all">
                {service.name}
              </Link>
            ))}

            <div className="h-px bg-[#333333] my-4 mx-4"></div>

            <Link href="/about" className="block px-4 py-3 text-[#A3A3A3] hover:text-[#FFFFFF] font-bold text-sm uppercase tracking-wider">
              The Blak Standard
            </Link>
            <Link href="/contact" className="block mt-4 px-4 py-4 text-center bg-[#E5E5E5] text-[#0A0A0A] font-extrabold text-sm uppercase tracking-wider rounded-md">
              Sign Up / Request Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}