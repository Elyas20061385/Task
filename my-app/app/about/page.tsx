"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const AboutClassic = () => {
    return (
        <section className="relative py-24  font-serif overflow-hidden mt-12 ">
            
            <div className="max-w-6xl mx-auto px-6 lg:px-12 ">
                
                {/* Header Section: Elegance in Simplicity */}
                <div className="text-center mb-24">
                    <motion.span 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="inline-block text-xs uppercase tracking-[0.3em] text-[#8C8C8C] mb-4"
                    >
                        Established 2012
                    </motion.span>
                    <motion.h2 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1.5, delay: 0.2 }}
                        className="text-4xl md:text-6xl font-light italic leading-tight"
                    >
                        The Art of Timeless <br /> 
                        <span className="font-normal not-italic tracking-tight text-[#21a07f] border-b border-gray-200 ">Interior Storytelling</span>
                    </motion.h2>
                </div>

                {/* Main Content: Asymmetric Layout */}
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    
                    {/* Left Side: Storytelling */}
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2 }}
                        className="space-y-10 dir-rtl text-right"
                    >
                        <h3 className="text-2xl font-medium text-[#1A1A1A]">اصالت در هر جزئیات</h3>
                        <p className="text-lg leading-relaxed text-[#555] font-sans font-light">
                            ما معتقدیم که هر فضا باید منعکس‌کننده روح ساکنان آن باشد. در استودیو ما، سبک کلاسیک با نیازهای مدرن گره خورده است تا فضایی خلق شود که هرگز از مد نمی‌افتد. 
                            <br /><br />
                            هدف ما ساده است: خلق محیطی که در آن آرامش و شکوه در کنار هم معنا پیدا می‌کنند. ما به جای دنبال کردن ترندهای زودگذر، به دنبال زیبایی ماندگار هستیم.
                        </p>
                        
                        <div className="pt-6 border-t border-gray-200 flex justify-between items-center dir-ltr">
                            <div>
                                <p className="text-3xl font-light italic text-[#21a07f]">12+</p>
                                <p className="text-[10px] uppercase tracking-widest text-gray-400">Years Excellence</p>
                            </div>
                            <div className="h-10 w-px bg-gray-200"></div>
                            <div>
                                <p className="text-3xl font-light italic text-[#21a07f]">450</p>
                                <p className="text-[10px] uppercase tracking-widest text-gray-400">Curated Spaces</p>
                            </div>
                            <div className="h-10 w-px bg-gray-200"></div>
                            <div>
                                <p className="text-3xl font-light italic text-[#21a07f]">World</p>
                                <p className="text-[10px] uppercase tracking-widest text-gray-400">Class Design</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side: Elegant Image Grid */}
                    <div className="relative">
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.5 }}
                            className="aspect-4/5 relative rounded-t-[100px] overflow-hidden shadow-sm"
                        >
                            <Image 
                                src="/business.png" // تصویر اصلی (یک دکوراسیون ملایم و کلاسیک)
                                alt="Classic Interior"
                                fill
                                className="object-cover grayscale-20 hover:grayscale-0 transition-all duration-1000  "
                            />
                        </motion.div>
                        
                        {/* Floating Small Image */}
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, delay: 0.5 }}
                            className="absolute -bottom-10 -left-10 w-48 h-64 hidden md:block border-12 border-[#21a07f] shadow-xl overflow-hidden"
                        >
                            <Image 
                                src="/h3.png" // یک نمای نزدیک از جزئیات کار
                                alt="Detail Shot"
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                    </div>
                </div>

                {/* Bottom Quote */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    className="mt-32 border-b border-gray-100 pb-12 text-center"
                >
                    <p className="text-xl md:text-2xl italic font-light text-gray-400 max-w-3xl mx-auto">
                        "Simplicity is the ultimate sophistication."
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutClassic;