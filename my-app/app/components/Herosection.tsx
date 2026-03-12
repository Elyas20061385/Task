"use client";
import React from 'react';
import Image from 'next/image';
import Services from './Services';
import Portfolio from './Ourworks';
import WhyChooseUs from './Whychooseus';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative min-h-screen bg-white overflow-hidden font-sans">
            {/* دایره‌های رنگی محو در پس‌زمینه برای جذابیت بیشتر */}
            <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-[#FF7A5C]/10 blur-[120px] rounded-full" />
            <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-96 h-96 bg-blue-50 blur-[120px] rounded-full" />

            <main className="max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-16 flex flex-col lg:flex-row items-center gap-16 relative z-10">
                
                {/* بخش سمت چپ: گرید تصاویر با انیمیشن */}
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full lg:w-1/2 flex items-center justify-center gap-3 md:gap-5 h-125"
                >
                    {[
                        { src: "/student1.png", h: "h-72", self: "self-center" },
                        { src: "/student.png", h: "h-96", self: "self-start" },
                        { src: "/student.jpg", h: "h-96", self: "self-end" },
                        { src: "/student.png", h: "h-72", self: "self-center" }
                    ].map((img, index) => (
                        <motion.div 
                            key={index}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className={`w-24 md:w-32 ${img.h} ${img.self} relative rounded-full overflow-hidden shadow-2xl border-4 border-white`}
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

                {/* بخش سمت راست: محتوا */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full lg:w-1/2 space-y-8 text-center lg:text-left"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-100 text-[#FF7A5C] text-sm font-bold tracking-wide uppercase">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF7A5C] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF7A5C]"></span>
                        </span>
                        Next Generation Design
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight text-gray-900">
                        Crafting spaces <br />
                        <span className="text-[#FF7A5C]">with purpose</span> <br />
                        & personality.
                    </h1>

                    <p className="text-gray-500 max-w-lg mx-auto lg:mx-0 text-lg leading-relaxed">
                        ما با ترکیب هنر و تکنولوژی، فضایی می‌سازیم که داستانی برای گفتن داشته باشد. پروژه‌های ما بازتابی از هویت و آرزوهای شماست.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                        <button className="bg-[#FF7A5C] text-white px-10 py-5 rounded-2xl text-lg font-bold hover:bg-[#e66d52] transition-all flex items-center group shadow-xl shadow-[#FF7A5C]/20 active:scale-95">
                            Start a Project
                            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                        </button>
                        
                        {/* بخش آمار مشتریان (Social Proof) */}
                        <div className="flex items-center gap-3 pl-4">
                            <div className="flex -space-x-3">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                                        <img src={`https://i.pravatar.cc{i+10}`} alt="user" />
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
        </section>
    );
};

export default Hero;