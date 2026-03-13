"use client";
import React, { useState } from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaPython, FaUsers, FaTimes, FaUser, FaEnvelope, FaPhone } from 'react-icons/fa';
import { TbBrandJavascript } from 'react-icons/tb';
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri';
import { DiDjango } from 'react-icons/di';

const CourseCard = ({ course, onOpenModal }) => {
  const { icon: Icon, title, description, instructor, rating, price, discountPrice, discount, studentsCount } = course;

  return (
    <div
      onClick={() => onOpenModal(course)}
      className="group cursor-pointer rounded-xl overflow-hidden bg-white hover:-translate-y-2 hover:shadow-2xl duration-500 border border-gray-100 flex flex-col h-full text-right"
      dir="rtl"
    >
      <div className="h-48 bg-[#21a07f] flex items-center justify-center relative overflow-hidden">
        <Icon className="w-24 h-24 text-white opacity-90 group-hover:scale-110 duration-500" />
        <span className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-bold">
          متخصص {title}
        </span>
      </div> 

      <div className="p-6 flex flex-col grow">
        <h3 className="text-gray-800 text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4 grow line-clamp-2">{description}</p>

        <div className="flex flex-col gap-3 mb-6 bg-gray-50 p-3 rounded-lg border border-gray-100">
          <div className="flex justify-between items-center text-sm text-gray-700">
            <span>مدرس: {instructor}</span>
            <div className="flex items-center text-accent-500">
              <span className="ml-1 font-bold">{rating}</span>
              <svg className="w-4 h-4 text-[#feba0f]" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
            </div>
          </div>
          <div className="flex items-center text-xs text-gray-500 border-t border-gray-200 pt-2">
            <FaUsers className="ml-2 text-primary-500" />
            <span>{studentsCount.toLocaleString('fa-AF')} دانشجو</span>
          </div>
        </div>

        <div className="flex justify-between items-center mt-auto">
          <div className="flex flex-col">
            <span className="text-xs text-gray-400 line-through">{price.toLocaleString()} افغانی</span>
            <span className="text-primary-500 font-extrabold text-xl">{discountPrice.toLocaleString()} افغانی</span>
          </div>
          <div className="bg-[#21a07f] text-white text-xs font-bold px-2 py-1 rounded-md animate-pulse">{discount}% تخفیف</div>
        </div>
      </div>
    </div>
  );  
};

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const coursesData = [
    { id: 1, icon: FaHtml5, title: "HTML", instructor: "الیاس علاوالدین", rating: 5.0, price: 1500, discountPrice: 1000, discount: 60, studentsCount: 30, description: "در این دوره شما با ساختار وب و تگ‌های HTML5 به صورت استاندارد آشنا می‌شوید. این اولین قدم برای ورود به دنیای برنامه‌نویسی وب است." },
    { id: 2, icon: FaCss3Alt, title: "CSS", instructor: "الیاس علاوالدین", rating: 4.9, price: 1200, discountPrice: 600, discount: 50, studentsCount: 35, description: "آموزش استایل‌دهی، Flexbox، CSS Grid و انیمیشن‌ها. در پایان این دوره می‌توانید هر طرحی را به کد تبدیل کنید." },
    { id: 3, icon: TbBrandJavascript, title: "JavaScript", instructor: "حیدر رضایی", rating: 5.0, price: 1500, discountPrice: 750, discount: 50, studentsCount: 20, description: "قلب تپنده وب! یادگیری منطق برنامه‌نویسی، کار با DOM و مفاهیم پیشرفته ES6 برای ساخت وب‌سایت‌های داینامیک." },
    { id: 4, icon: FaReact, title: "React", instructor: "حیدر رضایی", rating: 4.8, price: 1500, discountPrice: 750, discount: 50, studentsCount: 25, description: "محبوب‌ترین کتابخانه جاوااسکریپت. یادگیری Hooks، Components و مدیریت State برای ساخت اپلیکیشن‌های تک‌صفحه‌ای." },
    { id: 5, icon: RiTailwindCssFill, title: "Tailwind CSS", instructor: "حیدر رضایی", rating: 5.0, price: 1500, discountPrice: 750, discount: 50, studentsCount: 30, description: "طراحی رابط کاربری بدون نوشتن حتی یک خط CSS اضافی! سرعت توسعه خود را با Tailwind چند برابر کنید." },
    { id: 6, icon: RiNextjsFill, title: "Next.js", instructor: "حیدر رضایی", rating: 5.0, price: 1500, discountPrice: 750, discount: 50, studentsCount: 20, description: "فریم‌ورک قدرتمند بر پایه React. آموزش سئو عالی، SSR و سیستم روتینگ پیشرفته برای پروژه‌های بزرگ." },
    { id: 7, icon: FaPython, title: "Python", instructor: "حیدر رضایی", rating: 4.7, price: 1500, discountPrice: 750, discount: 50, studentsCount: 25, description: "زبان برنامه‌نویسی همه فن حریف. از اسکریپت‌نویسی تا هوش مصنوعی و توسعه وب را با پایتون شروع کنید." },
    { id: 8, icon: DiDjango, title: "Django", instructor: "حیدر رضایی", rating: 4.9, price: 1500, discountPrice: 750, discount: 50, studentsCount: 15, description: "فریم‌ورک حرفه‌ای پایتون برای توسعه بک‌اندهای امن و سریع. مناسب برای کسانی که می‌خواهند وب‌سایت‌های کامل بسازند." },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("درخواست شما با موفقیت ثبت شد. به زودی با شما تماس می‌گیریم.");
    setSelectedCourse(null);
  };

  return (
    <div className='w-full px-[5%] lg:px-[12%] py-16 bg-gray-50 min-h-screen' dir="rtl">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-black text-gray-800 mb-4 mt-20 tracking-tight">دوره‌های آموزشی برتر</h2>
        <div className="w-24 h-1.5 bg-primary-500 mx-auto rounded-full"></div>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
        {coursesData.map((course) => (
          <CourseCard key={course.id} course={course} onOpenModal={setSelectedCourse} />
        ))}
      </div>

      {/* مودال پاپ‌آپ */}
      {selectedCourse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl relative animate-scaleUp max-h-[90vh] overflow-y-auto">

            {/* دکمه بستن */}
            <button
              onClick={() => setSelectedCourse(null)}
              className="absolute top-4 left-4 text-gray-400 hover:text-red-500 transition-colors z-10"
            >
              <FaTimes size={24} />
            </button>

            <div className="flex flex-col md:flex-row">
              {/* بخش اطلاعات دوره در مودال */}
              <div className="md:w-1/2 bg-primary-500 p-8 text-white flex flex-col justify-center">
                <selectedCourse.icon className="text-6xl mb-4 opacity-30" />
                <h2 className="text-3xl font-bold mb-4">دوره متخصص {selectedCourse.title}</h2>
                <p className="text-white/80 leading-relaxed mb-6">{selectedCourse.description}</p>
                <div className="space-y-2 text-sm">
                  <p>👤 مدرس: {selectedCourse.instructor}</p>
                  <p>⭐ امتیاز: {selectedCourse.rating}</p>
                  <p>💰 فیس نهایی: {selectedCourse.discountPrice.toLocaleString()} افغانی</p>
                </div>
              </div>

              {/* بخش فرم ثبت‌نام */}
              <div className="md:w-1/2 p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-6">فرم ثبت‌ نام در دوره</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <FaUser className="absolute right-3 top-3.5 text-gray-400" />
                    <input required type="text" placeholder="نام و نام خانوادگی" className="w-full pr-10 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#21a07f] outline-none transition-all" />
                  </div>
                  <div className="relative">
                    <FaEnvelope className="absolute right-3 top-3.5 text-gray-400" />
                    <input required type="email" placeholder="ایمیل معتبر" className="w-full pr-10 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#21a07f] outline-none transition-all" />
                  </div>
                  <div className="relative">
                    <FaPhone className="absolute right-3 top-3.5 text-gray-400" />
                    <input required type="tel" placeholder="شماره تماس (واتس‌اپ)" className="w-full pr-10 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#21a07f] outline-none transition-all" />
                  </div>
                  <button type="submit" className="w-full bg-primary-500 hover:bg-[#1a8569] text-white font-bold py-3 rounded-lg shadow-lg transition-all active:scale-95">
                    تایید و ثبت‌نام در دوره
                  </button>
                  <p className="text-[10px] text-gray-400 text-center mt-4">با کلیک روی دکمه، کارشناسان ما جهت تکمیل فرآیند با شما تماس می‌گیرند.</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* انیمیشن‌های CSS سفارشی */}
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