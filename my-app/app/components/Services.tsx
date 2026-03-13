"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Home, Layout, Sparkles, ArrowRight } from 'lucide-react';

const services = [
  {
    title: "Interior Design",
    description: "طراحی داخلی منحصر به فرد با تمرکز بر تعادل بین زیبایی‌شناسی و کارایی فضا.",
    icon: <Home className="w-8 h-8" />,
    color: "bg-[#feba0f]"
  },
  {
    title: "Color Consultation",
    description: "انتخاب پالت‌های رنگی هوشمندانه که با روحیه و هویت برند یا خانه شما همخوانی دارد.",
    icon: <Palette className="w-8 h-8" />,
    color: "bg-[#21a07f]"
  },
  {
    title: "Space Planning",
    description: "بهینه‌سازی هر سانتی‌متر از فضای شما برای ایجاد جریان حرکت و راحتی بیشتر.",
    icon: <Layout className="w-8 h-8" />,
    color: "bg-[#feba0f]"
  },
  {
    title: "Luxury Styling",
    description: "افزودن جزئیات نهایی و اکسسوری‌های خاص که فضای شما را به یک اثر هنری تبدیل می‌کند.",
    icon: <Sparkles className="w-8 h-8" />,
    color: "bg-[#21a07f]"
  }
];

const Services = () => {
  return (
    <section className="py-24 bg-[#F8F9FA] relative overflow-hidden">
      {/* دکوراسیون پس‌زمینه محو */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-orange-50/50 via-transparent to-transparent z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* هدر بخش خدمات */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-[#21a07f] font-bold tracking-widest uppercase text-sm mb-4 block"
            >
              Our Services
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-black text-gray-900 leading-tight"
            >
              Experience the art of <br /> 
              <span className=" bg-clip-text bg-linear-to-r from-gray-900 text-[#21a07f]">Modern Living.</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gray-500 text-lg max-w-sm pb-2"
          >
            ما فقط فضا طراحی نمی‌کنیم؛ ما سبک زندگی جدیدی برای شما خلق می‌کنیم که فراتر از استانداردهای معمولی است.
          </motion.p>
        </div>

        {/* گرید خدمات */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -12 }}
              className="group relative bg-white p-8 rounded-4xl shadow-sm border border-gray-100 hover:shadow-2xl hover:shadow-[#FF7A5C]/10 transition-all duration-500 overflow-hidden"
            >
              {/* پس‌زمینه رنگی در هنگام هوور */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gray-50 rounded-bl-[100px] -z-10 group-hover:bg-[#21a07f]/5 transition-colors" />
              
              {/* آیکون */}
              <div className={`w-16 h-16 ${service.color} text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                {service.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#21a07f] transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-500 leading-relaxed mb-8 text-sm">
                {service.description}
              </p>

              <button className="flex items-center gap-2 text-sm font-bold text-gray-900 group/btn">
                Learn More 
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover/btn:bg-[#feba0f] group-hover/btn:text-white transition-all">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </button>
            </motion.div>
          ))}
        </div>

        {/* بخش پایین - CTA کوچک */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 p-8 rounded-[40px] bg-[#21a07f] flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex items-center gap-6">
            <div className="flex -space-x-4">
              {[1,2,3,4].map(i => (
                <div key={i} className="w-12 h-12 rounded-full border-2 border-amber-50  overflow-hidden text-white">
                   <img src={`/logo.png`} alt="team" />
                </div>
              ))}
            </div>
            <p className="text-white font-medium text-lg">آماده‌اید با تیم متخصص ما صحبت کنید؟</p>
          </div>
          <button className="bg-white text-gray-900 px-8 py-4 rounded-2xl font-bold hover:bg-[#feba0f] hover:text-white transition-all active:scale-95 whitespace-nowrap">
            Book a Consultation
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default Services;