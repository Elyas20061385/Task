"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Twitter, Linkedin } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bgColor: string;
  shape: string;
}

const team: TeamMember =[
  {
    name: "Ana Belić",
    role: "Social Media Specialist",
    image: "/Edris.png",
    bgColor: "bg-[#feba0f]",
    shape: "rounded-[80px_20px_80px_20px]", 
  },
  {
    name: "Logan Dang",
    role: "WordPress Developer",
    image: "/Elyas.png",
    bgColor: "bg-[#21a07f]",
    shape: "rounded-[60px_10px_60px_10px]", 
  },
  {
    name: "Darko Stanković",
    role: "UI Designer",
    image: "/Mahdi.png",
    bgColor: "bg-[#feba0f]",
    shape: "rounded-[80px_20px_80px_20px]", 
  },
  {
    name: "Darko Stanković",
    role: "UI Designer",
    image: "/Painda.png",
    bgColor: "bg-[#21a07f]",
    shape: "rounded-[80px_20px_80px_20px]", 
  },
  {
    name: "Darko Stanković",
    role: "UI Designer",
    image: "/student.png",
    bgColor: "bg-[#feba0f]",
    shape: "rounded-[80px_20px_80px_20px]", 
  },
  {
    name: "Darko Stanković",
    role: "UI Designer",
    image: "/student.png",
    bgColor: "bg-[#21a07f]",
    shape: "rounded-[80px_20px_80px_20px]", 
  },
  {
    name: "Darko Stanković",
    role: "UI Designer",
    image: "/student.png",
    bgColor: "bg-[#feba0f]",
    shape: "rounded-[80px_20px_80px_20px]", 
  },
  {
    name: "Darko Stanković",
    role: "UI Designer",
    image: "/student.png",
    bgColor: "bg-[#21a07f]",
    shape: "rounded-[80px_20px_80px_20px]", 
  },
];

const Team = () => {
  return (
    <section className="py-24 bg-white overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight tracking-tight">
            Meet the <span className="italic font-serif font-light opacity-70">creative minds</span> <br />
            behind our success
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {team.map((member, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center group"
            >
              <div className="relative w-full aspect-4/5 mb-8">
                <motion.div 
                  whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
                  className={`absolute inset-0 ${member.bgColor} ${member.shape} transition-all duration-500`}
                />
                
                <div className="absolute inset-0 flex items-end justify-center">
                  <div className="relative w-[90%] h-[90%]">
                    <Image 
                      src={member.image} 
                      alt={member.name} 
                      fill 
                      className="object-cover rounded-[80px_20px_80px_20px]"
                    />
                  </div>
                </div>
              </div>

              <div className="text-center space-y-1">
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-gray-400 text-sm font-medium">{member.role}</p>
              </div>

              <div className="flex gap-4 mt-5 text-gray-300 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <Twitter className="w-5 h-5 cursor-pointer hover:text-gray-900" />
                <Linkedin className="w-5 h-5 cursor-pointer hover:text-gray-900" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;