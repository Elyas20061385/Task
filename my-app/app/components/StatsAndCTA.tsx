"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Users, Award, Star, ArrowRight } from 'lucide-react';

const stats = [
  { id: 1, label: "پروژه موفق", value: "250+", icon: <Rocket className="w-6 h-6" /> },
  { id: 2, label: "مشتری راضی", value: "500+", icon: <Users className="w-6 h-6" /> },
  { id: 3, label: "جایزه طراحی", value: "12", icon: <Award className="w-6 h-6" /> },
  { id: 4, label: "امتیاز اعتماد", value: "4.9", icon: <Star className="w-6 h-6" /> },
];

const StatsAndCTA = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* بخش آمار (Stats Grid) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gray-50 text-gray-400 group-hover:bg-[#FF7A5C]/10 group-hover:text-[#FF7A5C] transition-all duration-500 mb-4">
                {stat.icon}
              </div>
              <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-2 tracking-tighter">
                {stat.value}
              </h3>
              <p className="text-gray-500 font-medium uppercase tracking-widest text-xs">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* بخش فراخوان (Final CTA Card) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-[48px] overflow-hidden bg-gray-900 py-16 md:py-24 px-8 md:px-16 text-center"
        >
          {/* دکوراسیون پس‌زمینه شیک */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#FF7A5C]/20 blur-[120px] rounded-full" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[#FF7A5C] font-bold tracking-[0.3em] uppercase text-sm mb-6 block"
            >
              Ready to Transform?
            </motion.span>
            
            <h2 className="text-4xl md:text-7xl font-black text-white leading-tight mb-8 tracking-tighter">
              بیاین با هم چیزی <br /> <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-[#FF7A5C]">ماندگار خلق کنیم.</span>
            </h2>
            
            <p className="text-gray-400 text-lg md:text-xl mb-12 leading-relaxed">
              پروژه‌ی بعدی شما می‌تواند شاهکار بعدی ما باشد. همین امروز مشاوره رایگان خود را رزرو کنید.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="w-full sm:w-auto bg-[#FF7A5C] text-white px-10 py-6 rounded-2xl text-xl font-bold hover:bg-[#e66d52] hover:scale-105 transition-all shadow-2xl shadow-[#FF7A5C]/30 flex items-center justify-center gap-3 group">
                شروع پروژه جدید
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>
              
              <button className="w-full sm:w-auto bg-white/5 backdrop-blur-md text-white border border-white/10 px-10 py-6 rounded-2xl text-xl font-bold hover:bg-white/10 transition-all flex items-center justify-center">
                مشاهده تعرفه‌ها
              </button>
            </div>

            {/* Social Proof کوچک */}
            <div className="mt-12 pt-12 border-t border-white/5 flex flex-col items-center gap-4">
               <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-gray-900 bg-gray-800 overflow-hidden">
                       <img src={`https://i.pravatar.cc{i+40}`} alt="client" />
                    </div>
                  ))}
               </div>
               <p className="text-gray-500 text-sm italic">Join 500+ happy clients worldwide</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default StatsAndCTA;