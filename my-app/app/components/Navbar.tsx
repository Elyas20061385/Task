"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Send } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);


  {/*تغییر استایل نویگیشن هنگام اسکرول*/ }
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Courses', href: '/courses' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-100 transition-all duration-500 px-6 md:px-12 ${scrolled  ? "py-3 bg-white/80 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.05)]  border-gray-100"   : "py-6 bg-transparent" }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">

          {/* Logo Section */}
          <Link href="/" className="relative w-12 h-12 md:w-14 md:h-14 transition-transform active:scale-90">
            <Image
              src="/logo.png"
              alt="Tech Logo"
              fill
              className="object-contain "
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="group relative text-sm font-bold text-gray-900 overflow-hidden"
              >
                <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">
                  {link.name}
                </span>
                <span className="absolute left-0 top-full inline-block text-[#21a07f] transition-transform duration-300 group-hover:-translate-y-full">
                  {link.name}
                </span>
                {/* Underline Animation */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#21a07f] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Right Side Action */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsOpen(true)}
              className="hidden sm:flex items-center gap-2 bg-[#feba0f] text-white px-7 py-3 rounded-2xl text-sm font-bold  transition-all shadow-lg active:scale-95 group"
            >
              Get In Touch
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(true)}
              className="md:hidden p-3 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors"
            >
              <Menu className="w-6 h-6 text-gray-900" />
            </button>
          </div>
        </div>
      </nav>

      {/* Fullscreen Contact & Menu Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-200 flex items-center justify-center p-4 md:p-8">
            {/* Overlay Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-gray-900/60 backdrop-blur-md"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white w-full max-w-4xl h-fit max-h-[90vh] rounded-[40px] shadow-[0_32px_64px_rgba(0,0,0,0.2)] overflow-hidden flex flex-col md:flex-row"
            >
              {/* Left Side: Info (Dark) */}
              <div className="hidden md:flex flex-col justify-between w-1/3 bg-gray-950 p-12 text-white">
                <div>
                  <div className="w-12 h-12 bg-[#FF7A5C] rounded-2xl mb-8 flex items-center justify-center">
                    <Send className="w-6 h-6" />
                  </div>
                  <h3 className="text-3xl font-black mb-4 tracking-tight">بیاین با هم بسازیمش!</h3>
                  <p className="text-gray-400 leading-relaxed">ما همیشه آماده شنیدن ایده‌های جدید و پروژه‌های هیجان‌انگیز هستیم.</p>
                </div>
                <div className="text-sm text-gray-500">
                  hello@yourtech.com <br />
                  +98 912 000 0000
                </div>
              </div>

              {/* Right Side: Form */}
              <div className="flex-1 p-8 md:p-16 relative">
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-8 right-8 p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-gray-400" />
                </button>

                <h4 className="text-2xl font-black text-gray-900 mb-8">ارسال پیام مستقیم</h4>

                <form className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-gray-400 ml-1">Full Name</label>
                      <input type="text" className="w-full bg-gray-50 border-2 border-transparent focus:border-[#FF7A5C]/20 focus:bg-white rounded-2xl p-4 text-sm outline-none transition-all" placeholder="نام شما" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-gray-400 ml-1">Email Address</label>
                      <input type="email" className="w-full bg-gray-50 border-2 border-transparent focus:border-[#FF7A5C]/20 focus:bg-white rounded-2xl p-4 text-sm outline-none transition-all" placeholder="email@example.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-gray-400 ml-1">Your Project</label>
                    <textarea rows={4} className="w-full bg-gray-50 border-2 border-transparent focus:border-[#FF7A5C]/20 focus:bg-white rounded-2xl p-4 text-sm outline-none transition-all resize-none" placeholder="در مورد پروژه خود توضیح دهید..."></textarea>
                  </div>

                  <button className="w-full bg-[#FF7A5C] text-white py-5 rounded-2xl font-black text-lg shadow-xl shadow-[#FF7A5C]/20 hover:bg-[#e66d52] transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3">
                    Send Proposal
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;