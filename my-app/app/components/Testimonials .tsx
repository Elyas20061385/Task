"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Inter } from "next/font/google";

// Load Inter with Latin subset and swap display
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const testimonials = [
  {
    name: "Sarah M.",
    text: "This salon transformed my entire look. The attention to detail and luxury experience is unmatched. I feel confident and beautiful every day.",
    stars: 5
  },
  {
    name: "Sara Ahmadi",
    text: "The experience of working with this team went far beyond my expectations. Their attention to detail and creativity in interior design is truly commendable and conveys a deep sense of luxury.",
    stars: 5
  },
  {
    name: "Amirhossein Rezaei",
    text: "Our new workspace has doubled our team's productivity, thanks to your smart planning and design. Thank you for your precise and professional management.",
    stars: 5
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
    })
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className={`${inter.className} py-28 bg-[#fafafa] relative overflow-hidden select-none antialiased`}>
      {/* Minimal background lighting glow for depth and a luxury feel */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-125 h-125 bg-[#21a07f]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight">
            What Our Clients Experience
          </h2>
        </div>

        {/* Luxury Floating Testimonial Bento Card */}
        <div className="w-full bg-white border border-gray-100/80 rounded-4xl shadow-[0_32px_64px_rgba(0,0,0,0.02)] p-8 md:p-16 min-h-70 flex flex-col justify-center items-center relative overflow-hidden">

          {/* Subtle transparent quote icon for a modern visual anchor */}
          <Quote className="absolute -top-4 -left-4 w-24 h-24 text-gray-50/50 pointer-events-none -rotate-12" />

          <div className="w-full relative overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="flex flex-col items-center text-center"
              >
                {/* Main testimonial text with an italicized and rhythmic style */}
                <p className="text-gray-500 text-base md:text-lg lg:text-xl font-medium leading-relaxed max-w-2xl italic tracking-wide">
                  "{testimonials[currentIndex].text}"
                </p>

                {/* Author or client name */}
                <h4 className="mt-8 text-gray-900 font-extrabold text-base tracking-wide uppercase">
                  {testimonials[currentIndex].name}
                </h4>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Rating stars row (Brand gold color) */}
          <div className="flex gap-1 mt-3">
            {Array.from({ length: testimonials[currentIndex].stars }).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[#feba0f] text-[#feba0f] transition-transform duration-300 hover:scale-110" />
            ))}
          </div>

        </div>

        {/* Navigation control row and slider handling */}
        <div className="flex items-center gap-6 mt-10">

          {/* Previous Button */}
          <button
            onClick={handlePrev}
            className="w-11 h-11 rounded-full bg-[#feba0f] hover:bg-[#e2a409] text-white flex items-center justify-center shadow-md active:scale-90 transition-all group"
          >
            <ChevronLeft className="w-5 h-5 transition-transform group-hover:-translate-x-0.5" />
          </button>

          {/* Pagination Dots */}
          <div className="flex gap-2 items-center">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                }}
                className={`transition-all duration-300 rounded-full h-2 ${currentIndex === idx
                    ? "w-5 bg-[#feba0f]"
                    : "w-2 bg-gray-200 hover:bg-gray-300"
                  }`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="w-11 h-11 rounded-full bg-[#feba0f] hover:bg-[#e2a409] text-white flex items-center justify-center shadow-md active:scale-90 transition-all group"
          >
            <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
          </button>

        </div>

      </div>
    </section>
  );
};

export default Testimonials;