"use client";
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Award, Globe, Users, Sparkles } from 'lucide-react';
import Image from 'next/image';
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const features = [
  {
    icon: <ShieldCheck className="w-5 h-5 text-[#21a07f]" />,
    title: "Execution Quality Guarantee",
    desc: "We engineer production-grade architectures utilizing strict type systems, modular structures, and absolute security standards."
  },
  {
    icon: <Zap className="w-5 h-5 text-[#21a07f]" />,
    title: "Velocity-Driven Sprints",
    desc: "Meticulous agile project milestone mapping to safely compile and deploy your product without compromising codebase health."
  },
  {
    icon: <Award className="w-5 h-5 text-[#21a07f]" />,
    title: "Award-Winning UI/UX Unit",
    desc: "Collaborative design execution from structural thinkers focused on reducing user churn, cognitive stress, and system drag."
  }
];

const WhyChooseUs = () => {
  return (
    <section className={`${inter.className} py-32 bg-white overflow-hidden relative antialiased border-b border-gray-50`}>
      {/* Avant-Garde Background Grid Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-size-[32px_32px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-[#21a07f]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          {/* LEFT COLUMN: INTERACTIVE VISUAL FRAMEWORK */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 relative order-2 lg:order-1"
          >
            {/* Structural Background Outline Matrix */}
            <div className="absolute -inset-4 border border-gray-100 rounded-[56px] pointer-events-none hidden sm:block scale-102" />
            
            {/* Core Image Container */}
            <div className="relative w-full h-125 md:h-140 rounded-[48px] overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.08)] bg-gray-50 border border-gray-100">
              <Image
                src="/why.png"
                alt="Engineering Workspace"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-w-7xl) 50vw, 100vw"
              />
              {/* Refractive Light Overlay Fill */}
              <div className="absolute inset-0 bg-linear-to-tr from-[#21a07f]/10 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating Telemetry Element 1: High Satisfaction */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.05)] border border-gray-100/80 hidden sm:flex items-center gap-3.5"
            >
              <div className="w-10 h-10 bg-[#21a07f]/10 rounded-xl flex items-center justify-center text-[#21a07f]">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xl font-bold text-gray-900 leading-none mb-1">98%</p>
                <p className="text-[9px] text-gray-400 font-mono uppercase tracking-widest leading-none">Satisfaction</p>
              </div>
            </motion.div>

            {/* Floating Telemetry Element 2: Architectural Experience */}
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-6 -left-4 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-[0_20px_45px_rgba(0,0,0,0.06)] border border-gray-100/80 text-gray-900 hidden sm:block max-w-52.5"
            >
              <div className="flex flex-col gap-2">
                <div className="w-8 h-8 rounded-lg bg-gray-50 border border-gray-100 text-[#21a07f] flex items-center justify-center shadow-xs">
                  <Globe className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900 tracking-tight leading-none mb-1.5">10+ Years</p>
                  <p className="text-gray-500 text-xs font-light leading-snug">Deploying software architectures globally.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
          {/* RIGHT COLUMN: HIGH-VALUE CONVERSION ENGINE */}
          <div className="w-full lg:w-1/2 space-y-10 order-1 lg:order-2">
            <div className="space-y-4">
              {/* Premium Badge Component */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-50 border border-gray-100 text-[#21a07f] text-xs font-bold tracking-wide uppercase">
                <Sparkles className="w-3.5 h-3.5 text-[#feba0f]" />
                Value Proving Matrix
              </div>
              
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-bold text-gray-900 leading-[1.1] tracking-tight"
              >
                We shift system <br />
                <span className="text-[#21a07f]">expectations.</span>
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-gray-500 text-base md:text-lg font-light leading-relaxed max-w-lg pt-1"
              >
                Our distinction is built directly inside system dependencies others overlook. More than a vendor, we act as your core structural engineering asset.
              </motion.p>
            </div>

            {/* Dynamic Features List Matrix */}
            <div className="space-y-2">
              {features.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08, duration: 0.4 }}
                  className="flex gap-5 group p-5 rounded-2xl transition-all duration-300 border border-transparent hover:border-gray-100 hover:bg-gray-50/50 hover:shadow-xs"
                >
                  <div className="shrink-0 w-11 h-11 bg-gray-50 border border-gray-100 shadow-xs rounded-xl flex items-center justify-center group-hover:scale-105 group-hover:bg-[#21a07f]/10 transition-all duration-300">
                    {item.icon}
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-lg font-bold text-gray-900 group-hover:text-[#21a07f] transition-colors">{item.title}</h4>
                    <p className="text-sm leading-relaxed text-gray-500 font-light max-w-md">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Interactive Call To Action Action */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="pt-2"
            >
              <button className="bg-[#feba0f] text-white px-9 py-4.5 rounded-xl text-base font-bold transition-all duration-300 flex items-center gap-3.5 shadow-md shadow-[#feba0f]/15 hover:shadow-lg hover:bg-[#e0a207] active:scale-97 group">
                Get a Free Consultation
                <span className="group-hover:translate-x-1.5 transition-transform duration-300">→</span>
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default WhyChooseUs;