"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Send, ShieldCheck, Mail, Phone } from 'lucide-react';
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const CorporateFooter = () => {
  const currentYear = new Date().getFullYear();

  const navigationBlocks = [
    {
      title: "Solutions",
      links: [
        { name: "Tech Academy", href: "/academy" },
        { name: "Enterprise Training", href: "/enterprise" },
        { name: "Project Management", href: "/projects" },
        { name: "Consulting Services", href: "/consulting" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Our Methodology", href: "/methodology" },
        { name: "Success Stories", href: "/success" },
        { name: "Careers", href: "/careers" }
      ]
    },
    {
      title: "Legal & Trust",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Security Architecture", href: "/security" },
        { name: "Compliance Index", href: "/compliance" }
      ]
    }
  ];

  return (
    <footer className={`${inter.className} bg-[#21a07f] pt-20 pb-10 px-6 md:px-16 w-full border-t border-white/10 relative z-10 select-none antialiased`}>
      <div className="max-w-7xl mx-auto space-y-16">

        {/* Top Section: Directory & Communication Center */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-4">

          {/* Identity Block (4 Columns) */}
          <div className="lg:col-span-4 space-y-6 flex flex-col justify-between">
            <div className="space-y-5">

              {/* Logo Section - Completely matches the header logo component */}
              <Link href="/" className="relative flex items-center gap-4 group w-fit select-none">

                {/* Kinetic Emblem Module */}
                <div className="relative w-14 h-14 flex items-center justify-center">

                  {/* Layer 1: Ambient Chroma Flare */}
                  <div className="absolute inset-0 bg-linear-to-br from-[#21a07f] via-[#21a07f]/50 to-[#feba0f]/40 rounded-[22px] blur-xl opacity-20 group-hover:opacity-75 transition-all duration-700 ease-[0.25,1,0.5,1] scale-90 group-hover:scale-110 group-hover:-rotate-12" />

                  {/* Layer 2: Dashed Magnetic Orbit Ring */}
                  <div className="absolute inset-0 border-2 border-dashed border-white/20 group-hover:border-[#feba0f]/60 rounded-3xl transition-all duration-700 ease-[0.25,1,0.5,1] scale-95 group-hover:scale-105 group-hover:rotate-45" />

                  {/* Layer 3: Transparent Liquifying Core */}
                  <div className="relative w-full h-full bg-transparent border border-white/10 shadow-[0_8px_20px_rgba(33,160,127,0.04)] rounded-[18px] group-hover:rounded-tr-none group-hover:rounded-bl-3xl group-hover:rounded-br-xl group-hover:rounded-tl-xl flex items-center justify-center overflow-hidden transition-all duration-500 ease-[0.34,1.56,0.64,1] group-hover:shadow-[0_12px_28px_rgba(33,160,127,0.12)]">

                    {/* Logo Image */}
                    <div className="relative w-full h-full p-2.5 transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-6">
                      <Image
                        src="/logo1.png"
                        alt="Amazon Tech Logo"
                        fill
                        className="object-contain"
                        priority
                      />
                    </div>

                    {/* Glass Shimmer Effect */}
                    <div className="absolute inset-0 w-full h-full bg-linear-to-tr from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                  </div>
                </div>

                {/* Avant-Garde Kinetic Typography */}
                <div className="hidden sm:flex flex-col text-left pointer-events-none">
                  <div className="overflow-hidden relative h-4">
                    <span className="block text-[#feba0f] font-black tracking-[0.15em] text-sm uppercase transition-all duration-500 ease-[0.25,1,0.5,1] group-hover:translate-x-0.5">
                      Amazon<span className="text-[#feba0f] inline-block transition-transform duration-500 group-hover:rotate-360 group-hover:scale-125">.</span>
                    </span>
                  </div>
                  <span className="text-white/80 font-extrabold tracking-[0.25em] text-[9px] uppercase mt-1 transition-all duration-500 ease-[0.25,1,0.5,1] group-hover:text-white group-hover:tracking-[0.38em]">
                    Tech
                  </span>
                </div>

              </Link>

              <p className="text-white/80 text-sm font-medium leading-relaxed max-w-sm">
                Providing high-performance technical engineering, certified language instruction tracks, and world-class product consulting.
              </p>
            </div>

            {/* Direct Corporate Channels */}
            <div className="space-y-2.5 pt-4 text-xs font-semibold text-white/70">
              <div className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-[#feba0f]" />
                <span>contact@amazontech.com</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-[#feba0f]" />
                <span dir="ltr">+93 780 123 456</span>
              </div>
            </div>
          </div>

          {/* Dynamic Map Directory Block (5 Columns) */}
          <div className="lg:col-span-5 grid grid-cols-3 gap-6 md:gap-8">
            {navigationBlocks.map((block) => (
              <div key={block.title} className="col-span-1 space-y-4">
                <h5 className="text-white font-black uppercase text-[10px] tracking-[0.2em]">
                  {block.title}
                </h5>
                <ul className="space-y-2.5">
                  {block.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-xs font-medium text-white/70 hover:text-[#feba0f] transition-colors duration-200 block w-fit py-0.5"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Secure Updates Hub Block (3 Columns) */}
          <div className="lg:col-span-3 space-y-4 bg-white/3 border border-white/10 p-6 rounded-2xl flex flex-col justify-between shadow-inner">
            <div className="space-y-1.5">
              <h5 className="text-[#feba0f] font-black uppercase text-[10px] tracking-[0.2em]">
                Corporate Briefs
              </h5>
              <p className="text-white/70 text-xs leading-relaxed font-medium">
                Subscribe to receive verified engineering articles, project releases, and official system updates.
              </p>
            </div>

            {/* Stable High-Contrast Form Module */}
            <form onSubmit={(e) => e.preventDefault()} className="space-y-2 pt-4">
              <input
                type="email"
                required
                placeholder="corporate@email.com"
                className="w-full bg-white/10 border border-white/10 focus:border-[#feba0f] rounded-xl p-3 text-xs text-white outline-none transition-colors placeholder-white/30 font-medium"
              />
              <button
                type="submit"
                className="w-full py-3 bg-[#feba0f] hover:bg-[#e2a409] text-white text-[10px] font-black tracking-widest uppercase rounded-xl transition-colors flex items-center justify-center gap-2 shadow-xs group"
              >
                <span>Subscribe Channel</span>
                <Send className="w-3 h-3 text-white/80 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Section: Legal Registry Alignment */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 w-full text-xs font-semibold text-white/50">

          {/* Trust Compliance Guard */}
          <div className="flex items-center gap-2 text-white/70 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
            <ShieldCheck className="w-4 h-4 text-[#feba0f]" />
            <span className="text-[10px] uppercase tracking-wider">Secured & Encrypted Architecture</span>
          </div>

          {/* Legal Sign-off String */}
          <div className="flex items-center gap-1.5 text-center sm:text-right">
            <span>&copy; {currentYear}</span>
            <span className="text-white font-extrabold uppercase tracking-wider">Amazon Tech Group</span>
            <span>&bull; Designed by Elyas Alowdin. All rights reserved.</span>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default CorporateFooter;