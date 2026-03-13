"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  const stats = [
    { label: 'Years Experience', value: '12+' },
    { label: 'Project Completed', value: '250+' },
    { label: 'Global Partners', value: '45+' },
    { label: 'Awards Won', value: '18' },
  ];

  return (
    <section className="relative py-24 bg-white overflow-hidden mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* بخش سمت چپ: ترکیب‌بندی بصری خاص */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* المان تزئینی پشت تصویر */}
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-[#FF7A5C]/10 rounded-full blur-3xl animate-pulse" />
            
            <div className="relative z-10 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-80 rounded-3xl overflow-hidden shadow-2xl transform hover:-rotate-2 transition-transform duration-500">
                  <Image src="/student.png" alt="Our Work" fill className="object-cover" />
                </div>
                <div className="h-48 bg-[#FF7A5C] rounded-3xl flex items-center justify-center p-6 text-white">
                  <p className="text-xl font-medium leading-tight">پایبند به جزئیات، مشتاق برای نوآوری.</p>
                </div>
              </div>
              <div className="space-y-4 pt-12">
                <div className="h-48 bg-gray-900 rounded-3xl flex flex-col justify-center p-8 text-white">
                  <span className="text-4xl font-bold text-[#FF7A5C]">99%</span>
                  <span className="text-sm text-gray-400 uppercase tracking-widest">رضایت مشتریان</span>
                </div>
                <div className="relative h-80 rounded-3xl overflow-hidden shadow-2xl transform hover:rotate-2 transition-transform duration-500">
                  <Image src="/student1.png" alt="Team" fill className="object-cover" />
                </div>
              </div>
            </div>

            {/* نشان شناور (Floating Badge) */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-6 -right-6 bg-white shadow-2xl p-6 rounded-2xl z-20 border border-gray-100"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  ✔
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">Verified Quality</p>
                  <p className="text-xs text-gray-500">Best Agency 2024</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* بخش سمت راست: محتوا */}
          <div className="space-y-10">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-[#FF7A5C] font-bold tracking-[0.2em] uppercase text-sm">
                About Our Vision
              </h2>
              <h3 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                ما مرزهای بین <span className="text-transparent bg-clip-text bg-linear-to-r from-[#FF7A5C] to-orange-400">تکنولوژی و هنر</span> را جابجا می‌کنیم.
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                تیم ما فراتر از یک آژانس معمولی عمل می‌کند. ما شریک استراتژیک شما در مسیر رشد هستیم. با استفاده از جدیدترین متدهای طراحی جهان، فضایی خلق می‌کنیم که نه تنها زیبا، بلکه کاملاً کارآمد باشد.
              </p>
            </motion.div>

            {/* بخش آمار (Grid Stats) */}
            <div className="grid grid-cols-2 gap-8 border-t border-gray-100 pt-10">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-3xl font-black text-gray-900">{stat.value}</h4>
                  <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-4 text-gray-900 font-bold text-lg"
            >
              <span className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center group-hover:bg-gray-900 group-hover:text-white transition-all">
                →
              </span>
              Learn More About Us
            </motion.button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;