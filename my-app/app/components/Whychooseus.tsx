"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Award, Globe, Users } from 'lucide-react';
import Image from 'next/image';

const features = [
  {
    icon: <ShieldCheck className="w-6 h-6 text-[#FF7A5C]" />,
    title: "تضمین کیفیت اجرایی",
    desc: "ما از بهترین متریال‌های روز دنیا برای پروژه‌های شما استفاده می‌کنیم."
  },
  {
    icon: <Zap className="w-6 h-6 text-[#FF7A5C]" />,
    title: "سرعت در تحویل",
    desc: "برنامه‌ریزی دقیق زمانی برای اتمام پروژه بدون افت کیفیت."
  },
  {
    icon: <Award className="w-6 h-6 text-[#FF7A5C]" />,
    title: "تیم بین‌المللی",
    desc: "همکاری با طراحان برتر که دارای جوایز معتبر طراحی هستند."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* بخش سمت چپ: تصویر و المان‌های شناور */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative"
          >
            {/* تصویر اصلی با لبه‌های گرد مدرن */}
            <div className="relative w-full h-125 md:h-150 rounded-[48px] overflow-hidden shadow-2xl">
              <Image 
                src="/about-image.jpg" // تصویر محیط کار یا تیم خود را قرار دهید
                alt="Our Workspace"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-tr from-[#FF7A5C]/20 to-transparent" />
            </div>

            {/* کارت شناور ۱: آمار مشتریان */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 md:right-0 bg-white p-6 rounded-3xl shadow-xl border border-gray-100 hidden sm:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <Users className="text-[#FF7A5C]" />
                </div>
                <div>
                  <p className="text-2xl font-black text-gray-900">98%</p>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">رضایت مشتریان</p>
                </div>
              </div>
            </motion.div>

            {/* کارت شناور ۲: تجربه */}
            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-10 -left-6 bg-gray-900 p-8 rounded-4xl shadow-2xl text-white hidden sm:block"
            >
              <div className="flex flex-col gap-2">
                <Globe className="text-[#FF7A5C] w-10 h-10 mb-2" />
                <p className="text-3xl font-black italic">10+ Years</p>
                <p className="text-gray-400 text-sm">تجربه در پروژه‌های لوکس</p>
              </div>
            </motion.div>
          </motion.div>

          {/* بخش سمت راست: محتوا */}
          <div className="w-full lg:w-1/2 space-y-10">
            <div className="space-y-4">
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="inline-block px-4 py-1 rounded-full bg-orange-50 text-[#FF7A5C] text-sm font-black uppercase tracking-widest"
              >
                Why Choose Us?
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-6xl font-black text-gray-900 leading-[1.1] tracking-tighter"
              >
                ما استانداردها را <br />
                <span className="text-[#FF7A5C]">تغییر می‌دهیم.</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-gray-500 text-lg leading-relaxed max-w-lg"
              >
                تفاوت ما در جزئیاتی است که دیگران نادیده می‌گیرند. ما فراتر از یک پیمانکار، شریک استراتژیک شما در خلق زیبایی هستیم.
              </motion.p>
            </div>

            {/* لیست ویژگی‌ها */}
            <div className="space-y-6">
              {features.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.2 }}
                  className="flex gap-6 group p-4 rounded-3xl hover:bg-gray-50 transition-colors"
                >
                  <div className="shrink-0 w-14 h-14 bg-white shadow-md rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform border border-gray-100">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* دکمه نهایی */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="pt-6"
            >
              <button className="bg-gray-900 text-white px-10 py-5 rounded-2xl text-lg font-bold hover:bg-[#FF7A5C] transition-all flex items-center gap-3 shadow-xl active:scale-95 group">
                مشاوره رایگان بگیرید
                <span className="group-hover:translate-x-2 transition-transform">→</span>
              </button>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;