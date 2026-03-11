"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* Navigation */}
      <nav className="flex items-center justify-between px-12 py-6">
        <div className="flex items-center gap-8">
          <div className="text-2xl font-bold italic">A</div>
          <div className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
            <Link href="/" className="transition-colors hover:text-[#FF7A5C]">Home</Link>
            <Link href="/about" className="transition-colors hover:text-[#FF7A5C]">About</Link>
            <div className="relative group cursor-pointer flex items-center hover:text-black">
              Pages
              <span className="ml-1 text-[10px] transition-transform group-hover:rotate-180">▼</span>
              <div className="absolute top-full left-0 mt-2 w-40 bg-white border border-gray-100 shadow-lg rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2 flex flex-col text-sm gap-2 ml-2 justify-center">
                  <Link href="/blog" className="transition-colors hover:text-[#FF7A5C]">Blog</Link>
                  <Link href="/services" className="transition-colors hover:text-[#FF7A5C]">Services</Link>
                  <Link href="/contact" className="transition-colors hover:text-[#FF7A5C]">Contact Us</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Trigger Button */}
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-[#FF7A5C] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#e66d52] transition-all active:scale-95"
        >
          Get In touch →
        </button>
      </nav>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Modal Content */}
          <div className="relative bg-white w-full max-w-md rounded-3xl p-8 shadow-2xl transform transition-all scale-100">
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-black"
            >
              ✕
            </button>
            
            <h3 className="text-2xl font-bold mb-2 flex justify-center">Let's Talk! 🚀</h3>
            <p className="text-gray-500 text-sm mb-6 flex justify-center">Leave a message and we'll get back to you.</p>
            
            <form className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase text-gray-400 mb-1 ml-1">Name</label>
                <input type="text" className="w-full bg-gray-50 border-none rounded-xl p-3 text-sm focus:ring-2 focus:ring-[#FF7A5C] outline-none" placeholder="Your Name" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-gray-400 mb-1 ml-1">Email</label>
                <input type="email" className="w-full bg-gray-50 border-none rounded-xl p-3 text-sm focus:ring-2 focus:ring-[#FF7A5C] outline-none" placeholder="hello@example.com" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-gray-400 mb-1 ml-1">Message</label>
                <textarea  className="w-full bg-gray-50 border-none rounded-xl p-3 text-sm focus:ring-2 focus:ring-[#FF7A5C] outline-none resize-none" placeholder="Tell us about your project..."></textarea>
              </div>
              
              <button className="w-full bg-[#FF7A5C] text-white py-3 rounded-xl font-bold shadow-lg shadow-[#FF7A5C]/30 hover:bg-[#e66d52] transition-colors mt-2">
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
export default Navbar;