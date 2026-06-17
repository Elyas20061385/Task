"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Sparkles, Send, Mail, Phone, Globe } from "lucide-react";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter", 
});

const WorldClassNavbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isModalOpen || isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen, isMenuOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsModalOpen(false);
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Projects", href: "/projects" },
    { name: "Courses", href: "/courses" },
    { name: "Our Services", href: "/services" },
  ];

  const letterVariants = {
    initial: { y: 0 },
    hovered: { y: "-100%" },
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("✨ Thank you! Our team will reach out within 24 hours.");
    setFormData({ name: "", email: "", message: "" });
    setIsModalOpen(false);
  };

  return (
    <div className={`${inter.className} antialiased`}>
      {/* Dynamic World-Class Top Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-100 transition-all duration-500 px-6 md:px-16 ${scrolled
            ? "py-4 bg-white/70 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.03)]"
            : "py-8 bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between relative bg-[#21a07f] border border-gray-100/80 p-3 pl-4 md:pl-6 rounded-[28px] shadow-[0_24px_60px_-15px_rgba(33,160,127,0.06)] backdrop-blur-xl">
          {/* Left: Asymmetric Kinetic Brand Anchor */}
          <div className="flex items-center gap-4">
            <Link href="/" className="relative flex items-center gap-4 group select-none">
              {/* World-Class Kinetic Emblem Module */}
              <div className="relative w-14 h-14 flex items-center justify-center">
                <div className="absolute inset-0 bg-linear-to-br from-[#21a07f] via-[#21a07f]/50 to-[#feba0f]/40 rounded-[22px] blur-xl opacity-20 group-hover:opacity-75 transition-all duration-700 ease-[0.25,1,0.5,1] scale-90 group-hover:scale-110 group-hover:-rotate-12" />
                <div className="absolute inset-0 border-2 border-dashed border-white/20 group-hover:border-[#feba0f]/60 rounded-3xl transition-all duration-700 ease-[0.25,1,0.5,1] scale-95 group-hover:scale-105 group-hover:rotate-45" />
                <div className="relative w-full h-full bg-transparent border border-white/10 shadow-[0_8px_20px_rgba(33,160,127,0.04)] rounded-[18px] group-hover:rounded-tr-none group-hover:rounded-bl-3xl group-hover:rounded-br-xl group-hover:rounded-tl-xl flex items-center justify-center overflow-hidden transition-all duration-500 ease-[0.34,1.56,0.64,1] group-hover:shadow-[0_12px_28px_rgba(33,160,127,0.12)]">
                  <div className="relative w-full h-full p-2.5 transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-6">
                    <Image
                      src="/logo1.png"
                      alt="Amazon Tech Logo"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                  <div className="absolute inset-0 w-full h-full bg-linear-to-tr from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                </div>
              </div>

              {/* Avant-Garde Kinetic Typographic System */}
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
          </div>

          {/* Center: Segmented Link Enclosures */}
          <div className="hidden md:flex items-center bg-white/10 border border-white/10 p-1.5 rounded-[22px] gap-1 shadow-sm backdrop-blur-md">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative px-5 py-2.5 text-xs font-bold text-white/80 hover:text-white transition-colors rounded-xl group overflow-hidden"
              >
                <span className="sr-only">{link.name}</span>
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300 rounded-xl" />
                <motion.div
                  aria-hidden="true"
                  initial="initial"
                  whileHover="hovered"
                  className="relative z-10 block overflow-hidden whitespace-nowrap select-none"
                >
                  <div className="flex">
                    {link.name.split("").map((char, i) => (
                      <motion.span
                        key={i}
                        variants={letterVariants}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1], delay: i * 0.012 }}
                        className="inline-block"
                      >
                        {char === " " ? "\u00A0" : char}
                      </motion.span>
                    ))}
                  </div>
                  <div className="absolute inset-0 flex">
                    {link.name.split("").map((char, i) => (
                      <motion.span
                        key={i}
                        variants={letterVariants}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1], delay: i * 0.012 }}
                        className="inline-block text-[#feba0f] translate-y-full"
                      >
                        {char === " " ? "\u00A0" : char}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Right: Tactile Dynamic CTA & Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsModalOpen(true)}
              className="hidden sm:flex items-center gap-3 relative px-6 py-3 bg-[#feba0f] hover:bg-[#e2a409] text-white text-xs font-black tracking-widest uppercase rounded-[18px] transition-all duration-300 shadow-[0_10px_25px_rgba(254,186,15,0.15)] hover:shadow-[0_12px_30px_rgba(254,186,15,0.25)] active:scale-95 group overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get In Touch
                <div className="relative w-4 h-4 bg-white/10 rounded-md flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <ArrowUpRight className="w-3 h-3 text-white transition-transform duration-300 group-hover:rotate-45" />
                </div>
              </span>
              <div className="absolute inset-0 w-full h-full bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
            </button>

            <button
              onClick={() => setIsMenuOpen(true)}
              className="md:hidden p-3 bg-white/10 border border-white/10 rounded-xl hover:bg-white/20 text-white transition-all active:scale-95 shadow-sm"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <div className="fixed inset-0 z-200 md:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="absolute inset-0 bg-gray-900/40 backdrop-blur-xl"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-4/5 max-w-sm bg-white border-l border-gray-100 p-8 flex flex-col justify-between shadow-2xl"
            >
              <div>
                <div className="flex items-center justify-between mb-12">
                  <span className="font-black text-xs tracking-widest text-gray-400 uppercase">
                    Navigation
                  </span>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2.5 bg-gray-50 rounded-full border border-gray-100"
                  >
                    <X className="w-4 h-4 text-gray-900" />
                  </button>
                </div>
                <div className="flex flex-col gap-6">
                  {navLinks.map((link, idx) => (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      key={link.name}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="text-2xl font-bold text-gray-900 hover:text-[#21a07f] transition-colors block"
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsModalOpen(true);
                }}
                className="w-full flex items-center justify-center gap-2 bg-[#feba0f] text-white py-4 rounded-xl font-bold tracking-wider uppercase text-xs shadow-md"
              >
                Let's Talk
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-200 flex items-center justify-center p-4 md:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-gray-900/30 backdrop-blur-2xl"
            />
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.95 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative bg-white border border-gray-100 w-full max-w-5xl h-fit max-h-[92vh] rounded-[36px] shadow-[0_50px_100px_rgba(0,0,0,0.12)] overflow-hidden flex flex-col md:flex-row"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 z-20 p-2.5 bg-gray-50 hover:bg-gray-100 text-gray-400 hover:text-gray-700 rounded-full transition-all border border-gray-100 backdrop-blur-sm"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Side */}
              <div className="hidden md:flex flex-col justify-between w-[38%] bg-linear-to-b from-[#21a07f]/5 to-transparent p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-52 h-52 bg-[#21a07f]/10 rounded-full blur-[80px]" />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="inline-flex items-center gap-2 bg-[#21a07f]/10 border border-[#21a07f]/20 text-[#21a07f] px-3 py-1.5 rounded-full text-[10px] tracking-wider uppercase font-bold mb-8 shadow-sm w-fit">
                    <Sparkles className="w-3 h-3" />
                    Exciting Projects
                  </div>
                  <div className="space-y-6">
                    <h3 className="text-3xl font-black leading-tight">
                      <span className="text-gray-900">Let's build it</span>
                      <br />
                      <span className="bg-linear-to-r from-[#21a07f] to-[#2cbe94] bg-clip-text text-transparent">
                        together!
                      </span>
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      We are always ready to turn your disruptive ideas into stable
                      code and digital masterpieces.
                    </p>
                    <p className="text-gray-400 text-xs italic border-l-2 border-[#21a07f] pl-3">
                      “We are always ready to turn your disruptive ideas into
                      stable code and digital masterpieces.”
                    </p>
                  </div>
                  <div className="mt-auto pt-12 space-y-4">
                    <div className="h-px bg-linear-to-r from-transparent via-gray-200 to-transparent" />
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-gray-500 hover:text-gray-700 transition-colors group">
                        <Mail className="w-4 h-4 group-hover:text-[#21a07f]" />
                        <span className="text-xs tracking-wide">
                          hello@tech.studio
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-500 hover:text-gray-700 transition-colors group">
                        <Phone className="w-4 h-4 group-hover:text-[#21a07f]" />
                        <span className="text-xs tracking-wide">
                          +98 912 000 0000
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-500 hover:text-gray-700 transition-colors group">
                        <Globe className="w-4 h-4 group-hover:text-[#21a07f]" />
                        <span className="text-xs tracking-wide">
                          www.tech.studio
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side Form */}
              <div className="flex-1 p-6 md:p-10 overflow-y-auto">
                <div className="max-w-md mx-auto w-full">
                  <div className="mb-8 text-center md:text-left">
                    <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">
                      Direct Channel
                    </h2>
                    <p className="text-gray-500 text-sm tracking-wide">
                      Send a direct message
                    </p>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <label className="block text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#21a07f]/50 focus:ring-1 focus:ring-[#21a07f]/30 transition-all"
                        placeholder="Alexander Pierce"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#21a07f]/50 focus:ring-1 focus:ring-[#21a07f]/30 transition-all"
                        placeholder="hello@creativemind.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400">
                        Your Project Blueprint
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#21a07f]/50 focus:ring-1 focus:ring-[#21a07f]/30 transition-all resize-none"
                        placeholder="Describe your vision, goals, and expectations..."
                      />
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full relative overflow-hidden group bg-linear-to-r from-[#feba0f] to-[#e2a409] rounded-xl py-4 font-black tracking-wider uppercase text-xs text-white shadow-lg shadow-[#feba0f]/20"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        Send Message
                        <Send className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </span>
                      <div className="absolute inset-0 w-full h-full bg-linear-to-r from-[#e2a409] to-[#feba0f] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </motion.button>
                  </form>
                  <p className="text-[10px] text-gray-300 text-center mt-6">
                    * All communications are encrypted & confidential
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WorldClassNavbar;