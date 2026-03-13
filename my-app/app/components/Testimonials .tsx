"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "سارا احمدی",
    role: "مدیر پروژه",
    text: "تجربه همکاری با این تیم فراتر از انتظار من بود. دقت در جزئیات و خلاقیت آن‌ها در طراحی داخلی واقعاً ستودنی است.",
    avatar: "https://i.pravatar.cc"
  },
  {
    name: "امیرحسین رضایی",
    role: "کارآفرین",
    text: "فضای کاری جدید ما به لطف طراحی هوشمندانه شما، بهره‌وری تیم را دو برابر کرده است. ممنون از حرفه‌ای بودن شما.",
    avatar: "https://i.pravatar.cc"
  },
  {
    name: "مریم حسینی",
    role: "خانه دار",
    text: "تغییر دکوراسیون منزلم بهترین تصمیمی بود که گرفتم. هر روز از بودن در این فضای زیبا لذت می‌برم.",
    avatar: "https://i.pravatar.cc"
  },
  {
    name: "داوود کریمی",
    role: "معمار",
    text: "به عنوان یک همکار، ظرافت‌های فنی و مهندسی را در کارهای این تیم به وضوح می‌بینم. سطح کار بین‌المللی است.",
    avatar: "https://i.pravatar.cc"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-[#21a07f] overflow-hidden relative">
      {/* دکوراسیون پس‌زمینه (نورهای محو رنگی) */}
      <div className="absolute top-0 right-0 w-125 h-125  rounded-full" />
      <div className="absolute bottom-0 left-0 w-125 h-125   rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white text-sm font-bold mb-6"
          >
            <Star className="w-4 h-4 fill-[#feba0f] text-[#feba0f]" />
            What Our Clients Say
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white tracking-tighter"
          >
            اعتمادی که بر پایه <br /> <span className="bg-clip-text bg-linear-to-r text-[#feba0f]">تجربه</span> ساخته شده.
          </motion.h2>
        </div>

        {/* Marquee Row 1 */}
        <div className="flex overflow-hidden space-x-6 group">
          <motion.div 
            animate={{ x: [0, -1920] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="flex space-x-6 min-w-full"
          >
            {[...testimonials, ...testimonials].map((item, idx) => (
              <div 
                key={idx}
                className="shrink-0 w-87.5 md:w-112.5 bg-white backdrop-blur-xl  p-8 rounded-4xl  transition-colors relative"
              >
                <Quote className="absolute top-6 right-8 w-10 h-10 text-white/5" />
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full border-2 border-[#feba0f] overflow-hidden">
                    <img src={item.avatar} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">{item.name}</h4>
                    <p className="text-gray-500 text-sm">{item.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed italic">
                  "{item.text}"
                </p>
                <div className="flex gap-1 mt-6">
                  {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-[#feba0f] text-[#feba0f]" />)}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 text-center"
        >
          <p className="text-white mb-4">بیش از ۵۰۰ مشتری از خدمات ما استفاده کرده‌اند</p>
          <div className="h-px w-32 bg-linear-to-r from-transparent via-[#feba0f] to-transparent mx-auto" />
        </motion.div>

      </div>

      {/* Overlay Gradients برای لبه‌ها */}
      <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l  to-transparent z-20 pointer-events-none" />
    </section>
  );
};

export default Testimonials;