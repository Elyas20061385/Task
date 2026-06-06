"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {Terminal, Layout, Cpu, Layers,Smartphone, Palette, ShieldCheck,CheckCircle2, Code2, Zap,} from 'lucide-react';
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function Services() {
  const [activeHighlight, setActiveHighlight] = useState<'frontend' | 'backend'>('frontend');

  const services = [
    {
      id: "web-app",
      title: "Web Application Development",
      description: "Architecting hyper-scalable web applications engineered for structural endurance, high throughput, and seamless growth.",
      features: ["Enterprise-grade software patterns", "Cloud-native infrastructure", "Isolated sandbox environments"],
      tech: ["Next.js", "Django", "AWS", "Docker"],
      icon: <Terminal className="w-5 h-5" />
    },
    {
      id: "frontend",
      title: "Frontend Engineering (Next.js)",
      description: "Crafting sub-second digital interfaces optimized for Core Web Vitals, organic search positioning, and client conversion.",
      features: ["Server-Side Rendering (SSR)", "Statically generated components", "Zero-latency route transitions"],
      tech: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
      icon: <Layout className="w-5 h-5" />
    },
    {
      id: "backend",
      title: "Backend Infrastructure",
      description: "Developing robust data serialization layers, highly secure authentication, and low-latency API endpoints.",
      features: ["Django REST Framework schemas", "Database optimization", "Strict JWT protocol security"],
      tech: ["Django", "DRF", "PostgreSQL", "Redis"],
      icon: <Cpu className="w-5 h-5" />
    },
    {
      id: "fullstack",
      title: "Full-Stack System Synthesis",
      description: "Unified structural delivery pairing rapid client presentation layers with secure, industrial-strength database nodes.",
      features: ["Monolithic or microservice cohesion", "Automated system telemetry", "Optimized data serialization"],
      tech: ["Next.js", "Django DRF", "PostgreSQL"],
      icon: <Layers className="w-5 h-5" />
    },
    {
      id: "mobile",
      title: "Mobile Application Ecosystems",
      description: "Compiling native cross-platform experiences utilizing shared computational modules for uniform iOS and Android deployment.",
      features: ["Native hardware API execution", "Off-grid caching and state sync", "App Store & Play Store compliance"],
      tech: ["React Native", "Expo", "Fastlane"],
      icon: <Smartphone className="w-5 h-5" />
    },
    {
      id: "uiux",
      title: "Avant-Garde UI/UX Design",
      description: "Translating sophisticated product engineering requirements into clear, distraction-free spatial layouts that drive user action.",
      features: ["High-fidelity interactive blueprints", "Component tokenization systems", "User-validated interface mapping"],
      tech: ["Figma", "Framer", "Design Tokens"],
      icon: <Palette className="w-5 h-5" />
    },
    {
      id: "support",
      title: "Sustained Asset Maintenance",
      description: "Proactive version updates, continuous dependency audits, security vulnerability patching, and real-time error logging.",
      features: ["24/7 automated health monitoring", "Zero-downtime rolling upgrades", "Continuous Integration pipelines"],
      tech: ["GitHub Actions", "Sentry", "New Relic"],
      icon: <ShieldCheck className="w-5 h-5" />
    }
  ];

  const detailedHighlights = {
    frontend: {
      title: "Production-Grade Frontend Fidelity",
      metric: "99+ Lighthouse Score",
      description: "We bypass standard template structures. Our Next.js frontends are explicitly tuned for extreme performance, applying granular code-splitting and atomic asset loading to guarantee your interface feels instantaneous.",
      bullets: ["Dynamic hydration routing", "Edge-network caching topology", "Semantic accessibility layout"]
    },
    backend: {
      title: "High-Throughput API Frameworks",
      metric: "<45ms Response Window",
      description: "Utilizing Django REST Framework backed by highly optimized PostgreSQL databases, we implement query optimization algorithms and advanced caching structures capable of processing millions of requests seamlessly.",
      bullets: ["Asynchronous worker tasks", "Strict database indexing patterns", "Real-time socket data streams"]
    }
  };

  const trustPoints = [
    { title: "Scalable Architecture", desc: "Every structural line is designed to scale dynamically alongside your growing transaction and user volumes." },
    { title: "Clean & Maintainable Code", desc: "Strict type parameters and documented software architecture ensure easy handover and development longevity." },
    { title: "Modern UI/UX Excellence", desc: "Elite interface mechanics designed to maximize screen real estate, reduce cognitive load, and boost user retention." },
    { title: "Velocity Driven Delivery", desc: "Agile, milestone-driven sprints mean your core functional product is deployed to production weeks ahead of schedule." }
  ];

  return (
    <section className={`${inter.className} py-32 bg-white text-gray-900 relative overflow-hidden antialiased border-t border-gray-100`}>
      {/* Background Soft Aura Ambient Elements */}
      <div className="absolute top-1/4 left-1/4 w-120 h-120 bg-[#21a07f]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-120 h-120 bg-[#feba0f]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* 1. HERO HEADER AREA */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 pb-10 border-b border-gray-100">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-50 border border-gray-100 text-[#21a07f] text-xs font-bold tracking-wide uppercase">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#feba0f] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#feba0f]"></span>
              </span>
              Capabilities Catalog
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900">
              What we build <br />
              <span className="text-[#21a07f]">and how we engineer.</span>
            </h2>
            <p className="text-gray-500 text-lg font-light leading-relaxed max-w-lg">
              We engineer functional software systems by marrying sub-second frontend response variables with reliable API architectures.
            </p>
          </div>
          <div>
            <button className="bg-[#21a07f] text-white px-8 py-4 rounded-xl text-base font-bold transition-all flex items-center group shadow-md active:scale-95 hover:bg-[#1b8569]">
              Start Your Project
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </div>
        {/* 2. SERVICES BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-28">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="group bg-white border border-gray-100 p-8 rounded-3xl flex flex-col justify-between cursor-pointer transition-all duration-300 shadow-xs hover:shadow-[0_20px_45px_rgba(33,160,127,0.06)] hover:border-[#21a07f]/20"
            >
              <div className="space-y-5">
                {/* Header Icon Row */}
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-gray-50 text-gray-400 group-hover:bg-[#21a07f]/10 group-hover:text-[#21a07f] flex items-center justify-center border border-gray-100 transition-all duration-300">
                    {service.icon}
                  </div>
                  <span className="text-gray-300 font-mono text-[9px] tracking-wider">// CORE_0{index + 1}</span>
                </div>

                {/* Content Layer */}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#21a07f] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed font-light">
                    {service.description}
                  </p>
                </div>

                {/* Micro Bullet Metrics */}
                <ul className="space-y-2 pt-4 border-t border-gray-50">
                  {service.features.map((feat, idx) => (
                    <li key={idx} className="text-gray-600 text-xs font-medium flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-200 group-hover:bg-[#21a07f] transition-colors" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technology Badges Matrix */}
              <div className="flex flex-wrap gap-1.5 pt-4 mt-2 border-t border-gray-50">
                {service.tech.map((t, idx) => (
                  <span key={idx} className="text-[9px] font-mono text-gray-400 bg-gray-50 px-2 py-0.5 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        {/* 3. SERVICE DETAIL HIGHLIGHTS (DEEP DIVE) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-28">
          {/* Left Controller Panel */}
          <div className="lg:col-span-1 space-y-6">
            <div className="sticky top-8">
              <div className="inline-flex items-center gap-2 mb-6">
                <Zap className="w-4 h-4 text-[#21a07f]" />
                <span className="text-xs uppercase tracking-wider text-gray-400 font-mono">Capability Deep Dive</span>
              </div>
              <h2 className="text-2xl font-bold tracking-tight mb-4">Technical Architecture Standards</h2>
              <p className="text-gray-500 text-sm mb-8">
                Toggle below to explore how we enforce industrial reliability metrics at the core production level.
              </p>
              <div className="space-y-2">
                <button
                  onClick={() => setActiveHighlight('frontend')}
                  className={`w-full text-left px-4 py-3 rounded-xl border text-sm font-bold transition-all duration-300 ${
                    activeHighlight === 'frontend'
                      ? 'bg-white border-gray-200 text-[#21a07f] shadow-xs'
                      : 'bg-transparent border-transparent text-gray-400 hover:text-gray-600'
                  }`}
                >
                  Frontend Core Vitals (Next.js)
                </button>
                <button
                  onClick={() => setActiveHighlight('backend')}
                  className={`w-full text-left px-4 py-3 rounded-xl border text-sm font-bold transition-all duration-300 ${
                    activeHighlight === 'backend'
                      ? 'bg-white border-gray-200 text-[#21a07f] shadow-xs'
                      : 'bg-transparent border-transparent text-gray-400 hover:text-gray-600'
                  }`}
                >
                  Backend Performance (Django DRF)
                </button>
              </div>
            </div>
          </div>

          {/* Right Interactive Presentation Screen */}
          <div className="lg:col-span-2 bg-gray-50/50 border border-gray-100 rounded-2xl p-8">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-[#21a07f]" />
              <span className="text-xs font-mono text-gray-500 tracking-wider">// ACTIVE_CONTEXT</span>
            </div>
            <div className="space-y-6">
              <div className="inline-block bg-white border border-gray-200 rounded-full px-3 py-1">
                <span className="text-xs font-mono text-[#21a07f]">{detailedHighlights[activeHighlight].metric}</span>
              </div>
              <h3 className="text-3xl font-bold tracking-tight">{detailedHighlights[activeHighlight].title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed max-w-2xl">
                {detailedHighlights[activeHighlight].description}
              </p>
              <ul className="space-y-3 pt-4">
                {detailedHighlights[activeHighlight].bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-[#21a07f] mt-0.5 shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* 4. TECHNOLOGIES FRAMEWORK BAR */}
        <div className="border-y border-gray-100 py-8 mb-28">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="flex items-center gap-3">
              <Code2 className="w-5 h-5 text-gray-400" />
              <span className="text-xs uppercase tracking-wider text-gray-400 font-mono">Integrated Core Frameworks</span>
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-4">
              {[
                { name: "Next.js", type: "Frontend Execution" },
                { name: "React", type: "UI Interface Layer" },
                { name: "Django DRF", type: "Backend API Engine" },
                { name: "PostgreSQL", type: "Relational Node" },
                { name: "RESTful APIs", type: "Data Pipeline" },
                { name: "Redis", type: "Cache Optimization" }
              ].map((tech, idx) => (
                <div key={idx} className="flex flex-col items-start">
                  <span className="text-sm font-mono text-gray-800">{tech.name}</span>
                  <span className="text-[10px] text-gray-400">{tech.type}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* 5. WHY CHOOSE OUR SERVICES */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-28">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#21a07f]" />
              <span className="text-xs uppercase tracking-wider text-gray-400 font-mono">Operational Intelligence</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight">Engineered to eliminate systemic drag.</h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              We design digital infrastructure with absolute technical precision, ensuring every codebase accelerates interaction velocity and business growth vectors.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {trustPoints.map((point, idx) => (
              <div key={idx} className="bg-gray-50/50 border border-gray-100 rounded-xl p-5">
                <div className="w-7 h-7 rounded-full bg-[#21a07f]/10 flex items-center justify-center mb-3">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#21a07f]" />
                </div>
                <h4 className="text-sm font-bold tracking-wide mb-1">{point.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
        {/* 6. CLOSING CALL TO ACTION HUB */}
        <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-gray-50 to-white border border-gray-100 p-12 text-center">
          {/* Subtle green aura inner glare */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(33,160,127,0.03),transparent)]" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="w-12 h-12 bg-[#21a07f]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Zap className="w-6 h-6 text-[#21a07f]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Ready to construct your digital centerpiece?</h2>
            <p className="text-gray-500 text-sm max-w-xl mx-auto mb-8">
              Open a direct consultation channel with our software architects today. Let's map out your endpoints, system dependencies, and vector trajectories.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button className="px-8 py-3.5 bg-[#21a07f] text-white text-xs font-bold tracking-wide rounded-xl hover:bg-[#1b8569] transition-all duration-300 shadow-md">
                Get a Free Consultation
              </button>
              <button className="px-8 py-3.5 bg-transparent border border-gray-200 text-gray-600 text-xs font-bold tracking-wide rounded-xl hover:bg-gray-50 transition-all duration-300">
                Review Core Strategy
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}