"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Plus } from 'lucide-react';

const categories = ["All", "Residential", "Commercial", "Modern"];

const projects = [
  {
    id: 1,
    title: "The Glass House",
    category: "Residential",
    image: "/logo.png", // آدرس تصاویر خود را جایگزین کنید
    gridSpan: "md:col-span-2 md:row-span-2",
  },
  {
    id: 2,
    title: "Minimal Office",
    category: "Commercial",
    image: "/logo.png",
    gridSpan: "md:col-span-1 md:row-span-1",
  },
  {
    id: 3,
    title: "Urban Loft",
    category: "Modern",
    image: "/logo.png",
    gridSpan: "md:col-span-1 md:row-span-2",
  },
  {
    id: 4,
    title: "Skyline Suite",
    category: "Residential",
    image: "/logo.png",
    gridSpan: "md:col-span-1 md:row-span-1",
  },
];

const Portfolio = () => {
  const [filter, setFilter] = useState("All");

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header & Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-[#21a07f] font-bold tracking-[0.2em] uppercase text-xs mb-3 block"
            >
              Selected Works
            </motion.span>
            <h2 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter">
              Featured <span className="text-[#21a07f]">Projects.</span>
            </h2>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3 bg-[#21a07f] p-2 rounded-2xl border border-gray-100">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-xl text-sm font-bold transition-all ${
                  filter === cat 
                  ? "bg-white text-[#feba0f] shadow-sm" 
                  : "text-white hover:text-[#feba0f]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className={`group relative rounded-[40px] overflow-hidden bg-gray-100 ${project.gridSpan}`}
              >
                {/* Image Component */}
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-linear-to-t  to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content on Hover */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex justify-between items-end">
                    <div>
                      <span className="text-[#21a07f]  text-xs font-bold uppercase tracking-wider mb-2 block">
                        {project.category}
                      </span>
                      <h3 className="text-2xl font-bold text-black leading-tight">
                        {project.title}
                      </h3>
                    </div>
                    <motion.div 
                      whileHover={{ rotate: 45 }}
                      className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-gray-900 shadow-xl"
                    >
                      <ArrowUpRight className="w-6 h-6" />
                    </motion.div>
                  </div>
                </div>

                {/* Plus Icon (Top Right) */}
                <div className="absolute top-6 right-6 w-10 h-10 bg-[#21a07f] backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-100 group-hover:opacity-0 transition-opacity">
                  <Plus className="w-5 h-5" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Button */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 text-center"
        >
          <button className="inline-flex items-center gap-4 text-lg font-black group">
            <span className="border-b-2 border-transparent group-hover:border-[#21a07f] transition-all">
              EXPLORE ALL PROJECTS
            </span>
            <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-[#feba0f] group-hover:text-white transition-all">
              →
            </div>
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default Portfolio;