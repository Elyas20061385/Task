"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, Users, Award, Star, ArrowUpRight, Sparkles, MoveRight } from 'lucide-react';

const stats = [
  { id: 1, label: "پروژه موفق", value: "250+", icon: <Rocket className="w-4 h-4" /> },
  { id: 2, label: "مشتری راضی", value: "500+", icon: <Users className="w-4 h-4" /> },
  { id: 3, label: "جایزه طراحی", value: "12", icon: <Award className="w-4 h-4" /> },
  { id: 4, label: "امتیاز اعتماد", value: "4.9", icon: <Star className="w-4 h-4" /> },
];

const PremiumStatsAndCTA = () => {
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);

  return (
    <section className="py-36 bg-[#fafafa] relative overflow-hidden select-none">
      {/* Avant-Garde Ambient Aura Lighting */}
      <div className="absolute top-1/3 left-1/4 w-150 h-150 bg-[#21a07f]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-125 h-125 bg-[#feba0f]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Kinetic Overlapping Workspace Framework */}
        <div className="flex flex-col lg:flex-row items-stretch gap-8 w-full">
          
          {/* Left Wing: Kinetic Architectural Matrix */}
          <div className="w-full lg:w-[45%] flex flex-col justify-between gap-6">
            <div className="space-y-4 max-w-md">
              <div className="inline-flex items-center gap-2 bg-[#21a07f]/10 border border-[#21a07f]/20 text-[#21a07f] px-3.5 py-1.5 rounded-full text-[9px] tracking-[0.25em] uppercase font-black shadow-xs">
                <Sparkles className="w-3 h-3 text-[#feba0f]" /> Empirical Milestones
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-none">
                Our Journey <br /><span className="text-[#21a07f] font-light italic">In Numbers<span className="text-[#feba0f]">.</span></span>
              </h2>
              <p className="text-gray-400 text-xs font-medium tracking-wide leading-relaxed pt-1">
                A quantitative validation of engineering precision, creative longevity, and global trust indicators.
              </p>
            </div>

            {/* Elastic Statistical Deck */}
            <div className="grid grid-cols-2 gap-4 w-full pt-8 lg:pt-0">
              {stats.map((stat) => {
                const isHovered = hoveredStat === stat.id;
                return (
                  <motion.div
                    key={stat.id}
                    onMouseEnter={() => setHoveredStat(stat.id)}
                    onMouseLeave={() => setHoveredStat(null)}
                    animate={{ scale: isHovered ? 1.02 : 1, y: isHovered ? -4 : 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 22 }}
                    className="relative bg-white border border-gray-100 p-6 rounded-3xl shadow-xs flex flex-col justify-between min-h-40 cursor-pointer hover:shadow-[0_20px_45px_rgba(33,160,127,0.06)] hover:border-[#21a07f]/20 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <div className="w-9 h-9 rounded-xl bg-gray-50 text-gray-400 group-hover:bg-[#21a07f]/10 group-hover:text-[#21a07f] flex items-center justify-center border border-gray-100/60 transition-colors">
                        {stat.icon}
                      </div>
                      <span className="text-gray-200 text-[9px] font-mono">// 0{stat.id}</span>
                    </div>

                    <div className="space-y-0.5">
                      <h3 className="text-3xl font-black text-gray-900 tracking-tight transition-colors group-hover:text-[#21a07f]">
                        {stat.value}
                      </h3>
                      <p className="text-gray-400 font-bold uppercase tracking-wider text-[9px]">
                        {stat.label}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Wing: High-Interface Immersive Epicenter Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-1 relative rounded-[40px] overflow-hidden bg-[#21a07f] border border-[#21a07f]/20 p-8 md:p-16 flex flex-col justify-between min-h-125 shadow-[0_40px_80px_-20px_rgba(33,160,127,0.2)]"
          >
            {/* Chromatic Glass Shimmer Assets */}
            <div className="absolute inset-0 bg-radial-to-tr from-white/10 via-transparent to-transparent opacity-70 pointer-events-none" />
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#feba0f]/20 rounded-full blur-[90px] pointer-events-none" />

            {/* Top Row: Meta Header */}
            <div className="relative z-10 w-full flex justify-between items-start">
              <p className="text-white/60 font-black tracking-[0.2em] text-[10px] uppercase">
                // System Upgrade Ready
              </p>
              
              {/* Refractive Floating Sphere */}
              <div className="w-12 h-12 bg-white/10 border border-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white">
                <Sparkles className="w-4 h-4 text-[#feba0f]" />
              </div>
            </div>

            {/* Core Body Context Layer */}
            <div dir="rtl" className="relative z-10 max-w-xl text-right my-12">
              <h2 className="text-4xl md:text-6xl font-black text-white leading-[1.15] mb-6 tracking-tight">
                بیاین با هم چیزی <br />
                <span className="text-[#feba0f] relative inline-block">
                  ماندگار خلق کنیم
                  <span className="absolute bottom-1 right-0 w-full h-0.75 bg-white/20 rounded-full" />
                </span>
              </h2>
              <p className="text-white/80 text-sm font-medium leading-relaxed font-sans">
                پروژه‌ی بعدی شما می‌تواند شاهکار بعدی ما باشد. همین امروز کانال ارتباطی مستقیم را فعال و مشاوره تخصصی خود را آغاز کنید.
              </p>
            </div>

            {/* Action Row: Seamless Social Conversion Hub */}
            <div className="relative z-10 w-full border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
              
              {/* Dynamic Action Trigger Button */}
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                <button className="w-full sm:w-auto relative px-7 py-4 bg-[#feba0f] hover:bg-[#e2a409] text-white text-xs font-black tracking-widest uppercase rounded-[18px] transition-all duration-300 shadow-[0_12px_28px_rgba(254,186,15,0.25)] hover:scale-[1.01] active:scale-97 flex items-center justify-center gap-3 group overflow-hidden">
                  <span className="relative z-10 flex items-center gap-2">
                    شروع پروژه جدید
                    <MoveRight className="w-3.5 h-3.5 text-white transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </button>
                <button className="w-full sm:w-auto px-7 py-4 bg-white/5 border border-white/15 text-white text-xs font-black tracking-widest uppercase rounded-[18px] hover:bg-white/10 backdrop-blur-md transition-all">
                  مشاهده تعرفه‌ها
                </button>
              </div>

              {/* Overlapping Social Proof Handles */}
              <div className="flex items-center gap-3 self-center sm:self-end">
                <div className="flex -space-x-2.5">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-[#21a07f] bg-white overflow-hidden shadow-xs relative">
                      <img src={`https://pravatar.cc{i + 22}`} alt="User Avatar" className="object-cover w-full h-full" />
                    </div>
                  ))}
                </div>
                <span className="text-white/60 text-[10px] font-bold tracking-wide uppercase font-sans">
                  Join 500+ Ecosystem Partners
                </span>
              </div>

            </div>

            {/* Internal High-Speed Glass Glare Sweep */}
            <div className="absolute inset-0 w-full h-full bg-linear-to-tr from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default PremiumStatsAndCTA;
