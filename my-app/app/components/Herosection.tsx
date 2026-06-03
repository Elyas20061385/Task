"use client";
import React from 'react';
import Image from 'next/image';
import { Inter } from "next/font/google";
import Services from './Services';
import Portfolio from './Ourworks';
import WhyChooseUs from './Whychooseus';
import Testimonials from './Testimonials ';
import StatsAndCTA from './StatsAndCTA';
import Team from './Team';
import { motion } from 'framer-motion';

// Load Inter with desired subsets and display swap
const inter = Inter({
    subsets: ["latin"],
    display: "swap",
});

const Hero = () => {
    return (
        <section className={`${inter.className} relative min-h-screen bg-white overflow-hidden mt-20 antialiased`}>
            <main className="max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-16 flex flex-col lg:flex-row items-center gap-16 relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full lg:w-1/2 flex items-center justify-center gap-3 md:gap-5 h-125"
                >
                    {[
                        { src: "/h1.png", h: "h-72", self: "self-center" },
                        { src: "/h2.png", h: "h-96", self: "self-start" },
                        { src: "/h3.png", h: "h-96", self: "self-end" },
                        { src: "/h3.png", h: "h-72", self: "self-center" }
                    ].map((img, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className={`w-24 md:w-32 ${img.h} ${img.self} relative rounded-full overflow-hidden shadow-2xl border-4 border-[#21a07f]`}
                        >
                            <Image
                                src={img.src}
                                alt={`Interior ${index + 1}`}
                                fill
                                className="object-cover"
                                priority
                            />
                        </motion.div>
                    ))}
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full lg:w-1/2 space-y-8 text-center lg:text-left"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-100 text-[#21a07f] text-sm font-bold tracking-wide uppercase">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#feba0f] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#feba0f]"></span>
                        </span>
                        Next Generation Design
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold text-gray-900">
                        Crafting spaces <br />
                        <span className="text-[#21a07f]">with purpose</span> <br />
                        & personality.
                    </h1>
                    <p className="text-gray-500 max-w-lg mx-auto lg:mx-0 text-lg leading-relaxed">
                        By combining art and technology, we create spaces that tell a story. Our projects are a reflection of your identity and dreams.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                        <button className="bg-[#21a07f] text-white px-10 py-5 rounded-2xl text-lg font-bold transition-all flex items-center group shadow-xl active:scale-95">
                            Start a Project
                            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                        </button>
                        {/* Social Proof Section */}
                        <div className="flex items-center gap-3 pl-4">
                            <div className="flex -space-x-3">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                                        <img src={`/h3.png`} alt="user" />
                                    </div>
                                ))}
                            </div>
                            <div className="text-left">
                                <p className="text-sm font-bold text-gray-900">500+ Clients</p>
                                <p className="text-xs text-gray-400">Trust our services</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </main>
            <Services />
            <Portfolio />
            <WhyChooseUs />
            <Testimonials />
            <StatsAndCTA />
            <Team />
        </section>
    );
};

export default Hero;
