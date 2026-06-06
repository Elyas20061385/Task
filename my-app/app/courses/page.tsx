"use client";
import React, { useState } from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaPython, FaUsers, FaTimes, FaUser, FaEnvelope, FaPhone } from 'react-icons/fa';
import { TbBrandJavascript } from 'react-icons/tb';
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri';
import { DiDjango } from 'react-icons/di';
import { motion } from 'framer-motion';
import { Inter } from "next/font/google";

// Load Inter with Latin subset and swap display
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const CourseCard = ({ course, onOpenModal }) => {
  const { icon: Icon, title, description, instructor, rating, price, discountPrice, discount, studentsCount } = course;

  return (
    <motion.div initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      onClick={() => onOpenModal(course)} className="group cursor-pointer rounded-xl overflow-hidden bg-white hover:-translate-y-2 hover:shadow-2xl duration-500 border border-gray-100 flex flex-col h-full text-left" >
      <div className="h-48 bg-[#21a07f] flex items-center justify-center relative overflow-hidden">
        <Icon className="w-24 h-24 text-white opacity-90 group-hover:scale-110 duration-500" />
        <span className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-bold">
          {title} Expert
        </span>
      </div>

      <div className="p-6 flex flex-col grow">
        <h3 className="text-gray-800 text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4 grow line-clamp-2">{description}</p>

        <div className="flex flex-col gap-3 mb-6 bg-gray-50 p-3 rounded-lg border border-gray-100">
          <div className="flex justify-between items-center text-sm text-gray-700">
            <span>Instructor: {instructor}</span>
            <div className="flex items-center text-accent-500">
              <span className="ml-1 font-bold">{rating}</span>
              <svg className="w-4 h-4 text-[#feba0f]" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
            </div>
          </div>
          <div className="flex items-center text-xs text-gray-500 border-t border-gray-200 pt-2">
            <FaUsers className="mr-2 text-primary-500" />
            <span>{studentsCount.toLocaleString()} students</span>
          </div>
        </div>

        <div className="flex justify-between items-center mt-auto">
          <div className="flex flex-col">
            <span className="text-xs text-gray-400 line-through">{price.toLocaleString()} AFN</span>
            <span className="text-primary-500 font-extrabold text-xl">{discountPrice.toLocaleString()} AFN</span>
          </div>
          <div className="bg-[#21a07f] text-white text-xs font-bold px-2 py-1 rounded-md animate-pulse">{discount}% OFF</div>
        </div>
      </div>
    </motion.div>
  );
};

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const coursesData = [
    { id: 1, icon: FaHtml5, title: "HTML", instructor: "Elyas Alowdin", rating: 5.0, price: 1500, discountPrice: 1000, discount: 60, studentsCount: 30, description: "In this course you will learn web structure and HTML5 tags in a standard way. This is the first step into the world of web programming." },
    { id: 2, icon: FaCss3Alt, title: "CSS", instructor: "Elyas Alowdin", rating: 4.9, price: 1200, discountPrice: 600, discount: 50, studentsCount: 35, description: "Learn styling, Flexbox, CSS Grid and animations. By the end of this course you will be able to turn any design into code." },
    { id: 3, icon: TbBrandJavascript, title: "JavaScript", instructor: "Elyas Alowdin", rating: 5.0, price: 1500, discountPrice: 750, discount: 50, studentsCount: 20, description: "The beating heart of the web! Learn programming logic, DOM manipulation and advanced ES6 concepts to build dynamic websites." },
    { id: 4, icon: FaReact, title: "React", instructor: "Elyas Alowdin", rating: 4.8, price: 1500, discountPrice: 750, discount: 50, studentsCount: 25, description: "The most popular JavaScript library. Learn Hooks, Components and State Management to build single-page applications." },
    { id: 5, icon: RiTailwindCssFill, title: "Tailwind CSS", instructor: "Elyas Alowdin", rating: 5.0, price: 1500, discountPrice: 750, discount: 50, studentsCount: 30, description: "Build UI without writing a single line of extra CSS! Multiply your development speed with Tailwind." },
    { id: 6, icon: RiNextjsFill, title: "Next.js", instructor: "Elyas Alowdin", rating: 5.0, price: 1500, discountPrice: 750, discount: 50, studentsCount: 20, description: "The React framework for production. Learn Server-Side Rendering, API Routes and Static Site Generation to build high-performance websites." },
    { id: 7, icon: FaPython, title: "Python", instructor: "Haidar Rezaei", rating: 4.7, price: 1500, discountPrice: 750, discount: 50, studentsCount: 25, description: "Versatile programming language. Start with Python from scripting to AI and web development." },
    { id: 8, icon: DiDjango, title: "Django", instructor: "Haidar Rezaei", rating: 4.9, price: 1500, discountPrice: 750, discount: 50, studentsCount: 15, description: "Professional Python framework for building secure and fast backends. Perfect for those who want to build full websites." },
  ];

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    alert("Your request has been submitted successfully. We will contact you soon.");
    setSelectedCourse(null);
  };

  return (
    <div className={`${inter.className} w-full px-[5%] lg:px-[12%] py-16 bg-gray-50 min-h-screen antialiased`} dir="ltr">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-black text-gray-800 mb-4 mt-20 tracking-tight">Top Training Courses</h2>
        <div className="w-24 h-1.5 bg-primary-500 mx-auto rounded-full"></div>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
        {coursesData.map((course) => (
          <CourseCard key={course.id} course={course} onOpenModal={setSelectedCourse} />
        ))}
      </div>

      {/* Modal Popup */}
      {selectedCourse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl relative animate-scaleUp max-h-[90vh] overflow-y-auto">

            {/* Close button */}
            <button
              onClick={() => setSelectedCourse(null)}
              className="absolute top-4 left-4 text-gray-400 hover:text-red-500 transition-colors z-10"
            >
              <FaTimes size={24} />
            </button>

            <div className="flex flex-col md:flex-row">
              {/* Course info section in modal */}
              <div className="md:w-1/2 bg-[#21a07f] p-8 text-white flex flex-col justify-center">
                <selectedCourse.icon className="text-6xl mb-4 opacity-30" />
                <h2 className="text-3xl font-bold mb-4">{selectedCourse.title} Expert Course</h2>
                <p className="text-white/80 leading-relaxed mb-6">{selectedCourse.description}</p>
                <div className="space-y-2 text-sm">
                  <p>👤 Instructor: {selectedCourse.instructor}</p>
                  <p>⭐ Rating: {selectedCourse.rating}</p>
                  <p>💰 Final Fee: {selectedCourse.discountPrice.toLocaleString()} AFN</p>
                </div>
              </div>

              {/* Registration form section */}
              <div className="md:w-1/2 p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Course Registration Form</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <FaUser className="absolute left-3 top-3.5 text-gray-400" />
                    <input required type="text" placeholder="Full Name" className="w-full pl-10 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#21a07f] outline-none transition-all" />
                  </div>
                  <div className="relative">
                    <FaEnvelope className="absolute left-3 top-3.5 text-gray-400" />
                    <input required type="email" placeholder="Valid Email" className="w-full pl-10 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#21a07f] outline-none transition-all" />
                  </div>
                  <div className="relative">
                    <FaPhone className="absolute left-3 top-3.5 text-gray-400" />
                    <input required type="tel" placeholder="Phone Number (WhatsApp)" className="w-full pl-10 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#21a07f] outline-none transition-all" />
                  </div>
                  <button type="submit" className="w-full bg-[#21a07f] hover:bg-[#1a8569] text-white font-bold py-3 rounded-lg shadow-lg transition-all active:scale-95">
                    Confirm & Enroll
                  </button>
                  <p className="text-[10px] text-gray-400 text-center mt-4">By clicking the button, our experts will contact you to complete the process.</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Custom CSS animations */}
      <style jsx>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes scaleUp { from { transform: scale(0.9); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out; }
        .animate-scaleUp { animation: scaleUp 0.3s ease-out; }
      `}</style>
    </div>
  );
};
export default Courses;