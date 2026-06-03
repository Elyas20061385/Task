"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Sparkles, MoveRight } from "lucide-react";
import { Inter } from "next/font/google";

// Load Inter with Latin subset and swap display
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const categories = ["All", "Residential", "Commercial", "Modern"];

const projects = [
  {
    id: 1,
    title: "The Glass House",
    category: "Residential",
    image: "/logo.png",
    initialFlex: 1.8,
  },
  {
    id: 2,
    title: "Minimal Office",
    category: "Commercial",
    image: "/logo.png",
    initialFlex: 1,
  },
  {
    id: 3,
    title: "Urban Loft",
    category: "Modern",
    image: "/logo.png",
    initialFlex: 1.2,
  },
  {
    id: 4,
    title: "Skyline Suite",
    category: "Residential",
    image: "/logo.png",
    initialFlex: 1,
  },
];

const PremiumPortfolio = () => {
  const [filter, setFilter] = useState("All");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  // Split text stagger config
  const titleVariants = {
    initial: { y: "100%" },
    animate: {
      y: 0,
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className={`${inter.className} py-36 bg-[#fafafa] relative overflow-hidden select-none antialiased`}>
      {/* Avant-Garde Subtle Atmospheric Ambient Lighting */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-[#21a07f]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-100 h-100 bg-[#feba0f]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* World-Class Modular Header Layout */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-12">
          <div className="space-y-4 max-w-xl">
            <div className="inline-flex items-center gap-2 bg-[#21a07f]/10 border border-[#21a07f]/20 text-[#21a07f] px-3.5 py-1.5 rounded-full text-[9px] tracking-[0.25em] uppercase font-black shadow-xs">
              <Sparkles className="w-3 h-3 text-[#feba0f]" /> Curated Spatial Index
            </div>
            <h2 className="text-5xl md:text-7xl text-gray-900 tracking-tighter font-black leading-[0.95]">
              Selected{" "}
              <span className="text-[#21a07f]">
                Creations<span className="text-[#feba0f]">.</span>
              </span>
            </h2>
            <p className="text-gray-400 text-sm font-medium tracking-wide leading-relaxed pt-2">
              A high-interface showcase exploring structural boundaries, kinetic
              geometric balance, and premium architectural minimalism.
            </p>
          </div>

          {/* Chrome Sliding Capsule Filter Deck */}
          <div className="flex bg-white border border-gray-100 p-1.5 rounded-3xl shadow-[0_20px_45px_rgba(0,0,0,0.02)] backdrop-blur-xl relative self-start lg:self-end">
            {categories.map((cat) => {
              const isActive = filter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`relative px-6 py-3.5 rounded-[18px] text-[10px] uppercase tracking-[0.15em] font-black transition-colors duration-300 z-10 ${
                    isActive
                      ? "text-[#21a07f]"
                      : "text-gray-400 hover:text-gray-900"
                  }`}
                >
                  <span className="relative z-20">{cat}</span>
                  {isActive && (
                    <motion.div
                      layoutId="premiumFilterBackground"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 28,
                      }}
                      className="absolute inset-0 bg-[#21a07f]/5 border border-[#21a07f]/10 rounded-[18px] z-10"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Next-Gen Flex Kinetic Grid System */}
        <motion.div
          layout
          className="flex flex-col lg:flex-row gap-6 min-h-145 w-full items-stretch"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const isHovered = hoveredId === project.id;
              const anyCardHovered = hoveredId !== null;

              // Programmatically calculate kinetic elastic layouts
              let currentFlex = project.initialFlex;
              if (anyCardHovered) {
                currentFlex = isHovered ? 2.4 : 0.7;
              }

              return (
                <motion.div
                  key={project.id}
                  layout
                  animate={{ flex: currentFlex }}
                  transition={{ type: "spring", stiffness: 220, damping: 26 }}
                  onMouseEnter={() => setHoveredId(project.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className="group relative rounded-4xl overflow-hidden bg-white border border-gray-100 shadow-sm flex flex-col justify-between p-8 transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(33,160,127,0.08)] cursor-pointer min-w-0"
                >
                  {/* Layer 1: Core Background Asset Module */}
                  <div className="absolute inset-0 w-full h-full z-0">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover opacity-[0.15] group-hover:opacity-100 transition-all duration-700 ease-[0.25,1,0.5,1] scale-100 group-hover:scale-105 filter grayscale group-hover:grayscale-0 saturate-150"
                      priority
                    />
                    {/* Dark gradient vignette layer appearing seamlessly on card focus */}
                    <div className="absolute inset-0 bg-linear-to-t from-gray-950/80 via-gray-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Top Block: Dynamic Kinetic Indicators */}
                  <div className="relative z-10 flex items-center justify-between w-full">
                    <span className="text-gray-400 group-hover:text-[#feba0f] text-[10px] font-mono tracking-widest transition-colors duration-300">
                      // 0{project.id}
                    </span>

                    {/* Circular Morphing Action Shell */}
                    <div className="w-12 h-12 bg-white border border-gray-100 rounded-full flex items-center justify-center text-gray-900 shadow-xs group-hover:bg-[#21a07f] group-hover:text-white group-hover:border-transparent transition-all duration-500 ease-[0.34,1.56,0.64,1] group-hover:rounded-tr-none group-hover:rounded-bl-none">
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-500 group-hover:rotate-45" />
                    </div>
                  </div>

                  {/* Bottom Block: Staggered Typographic Metadata Engine */}
                  <div className="relative z-10 w-full pt-32">
                    <p className="text-[#21a07f] group-hover:text-[#feba0f] text-[9px] font-black uppercase tracking-[0.25em] mb-2 transition-colors duration-300">
                      {project.category}
                    </p>

                    <div className="overflow-hidden">
                      {/* Desktop Luxury Text Stagger Pass */}
                      <h3 className="hidden lg:block text-2xl font-black text-gray-900 group-hover:text-white tracking-tight leading-none transition-colors duration-300">
                        <AnimatePresence mode="wait">
                          {isHovered ? (
                            <motion.span
                              initial="initial"
                              animate="animate"
                              className="flex flex-wrap gap-x-1"
                            >
                              {project.title.split(" ").map((word, idx) => (
                                <span
                                  key={idx}
                                  className="overflow-hidden inline-block relative"
                                >
                                  <motion.span
                                    variants={titleVariants}
                                    className="inline-block"
                                  >
                                    {word}
                                  </motion.span>
                                </span>
                              ))}
                            </motion.span>
                          ) : (
                            <span>{project.title}</span>
                          )}
                        </AnimatePresence>
                      </h3>

                      {/* Fallback Static Title Header for Touch/Mobile Frameworks */}
                      <h3 className="lg:hidden text-xl font-black text-gray-900 group-hover:text-white tracking-tight leading-none transition-colors duration-300">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {/* Internal Refraction Light Shimmer Flare */}
                  <div className="absolute inset-0 w-full h-full bg-linear-to-tr from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Global Structural CTA Interface Trigger */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 flex justify-center"
        >
          <button className="group relative px-10 py-4 bg-white border border-gray-200 rounded-full text-gray-900 text-sm font-black uppercase tracking-[0.2em] overflow-hidden transition-all duration-300 hover:border-[#21a07f]/30 hover:shadow-[0_10px_30px_rgba(33,160,127,0.1)]">
            <span className="relative z-10 flex items-center gap-3">
              Access Complete Archives
              <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 w-full h-full bg-linear-to-r from-[#21a07f]/5 to-[#feba0f]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default PremiumPortfolio;