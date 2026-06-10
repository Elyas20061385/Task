"use client";
import React, { useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaPython,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaUsers,
  FaArrowLeft,
} from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { DiDjango } from "react-icons/di";
import {
  CalendarDays,
  CheckCircle2,
  BookOpen,
  Languages,
  Video,
  UsersRound,
  Share2,
  Download,
} from "lucide-react";

// ========== Types ==========
interface Course {
  id: number;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  instructor: string;
  rating: number;
  price: number;
  discountPrice: number;
  discount: number;
  studentsCount: number;
  description: string;
  shortDescription?: string;
  level?: "beginner" | "intermediate" | "advanced";
  language?: "english" | "persian" | "pashto" | "arabic";
  duration?: string; // e.g., "8 weeks"
  meetingType?: "google_meet" | "zoom" | "physical" | "recorded";
  startDate?: string; // ISO string
  scheduleRows?: { day: string; startTime: string; endTime: string }[];
  whatYouWillLearn?: string[];
  curriculumTopics?: string[];
  requirements?: string[];
  targetAudience?: string[];
  thumbnail?: string;
  slug?: string;
}

// ========== Helper Functions ==========
function formatPrice(price: number, currency = "AFN") {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(price);
}

function formatLevel(level?: string) {
  if (!level) return null;
  const map: Record<string, string> = {
    beginner: "Beginner",
    intermediate: "Intermediate",
    advanced: "Advanced",
  };
  return map[level.toLowerCase()] || level;
}

function formatMeetingType(type?: string) {
  if (!type) return null;
  const map: Record<string, string> = {
    google_meet: "Google Meet",
    zoom: "Zoom",
    physical: "In Person",
    recorded: "Google Meet",
  };
  return map[type.toLowerCase()] || type;
}

function formatLanguage(lang?: string) {
  if (!lang) return null;
  const map: Record<string, string> = {
    english: "English",
    persian: "Persian",
    pashto: "Pashto",
    arabic: "Arabic",
  };
  return map[lang.toLowerCase()] || lang;
}

function formatDayLabel(dayKey: string) {
  const map: Record<string, string> = {
    saturday: "Saturday",
    sunday: "Sunday",
    monday: "Monday",
    tuesday: "Tuesday",
    wednesday: "Wednesday",
    thursday: "Thursday",
    friday: "Friday",
  };
  return map[dayKey.toLowerCase()] || dayKey;
}

const WEEK_DAY_ORDER = [
  "saturday",
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
];

function normalizeScheduleRows(scheduleRows?: Course["scheduleRows"]) {
  if (!scheduleRows || !scheduleRows.length) return [];
  const byDay = new Map();
  scheduleRows.forEach((row) => {
    const dayKey = row.day?.toLowerCase().trim();
    if (dayKey && WEEK_DAY_ORDER.includes(dayKey) && !byDay.has(dayKey)) {
      byDay.set(dayKey, {
        day: dayKey,
        startTime: row.startTime || "-",
        endTime: row.endTime || "-",
      });
    }
  });
  return WEEK_DAY_ORDER.map((day) => byDay.get(day) || { day, startTime: "-", endTime: "-" });
}

// ========== Course Card Component ==========
const CourseCard: React.FC<{ course: Course; onSelect: (course: Course) => void }> = ({
  course,
  onSelect,
}) => {
  const { icon: Icon, title, description, instructor, rating, studentsCount, price, discountPrice, discount } = course;

  return (
    <div
      onClick={() => onSelect(course)}
      className="group cursor-pointer rounded-2xl overflow-hidden bg-white hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(33,160,127,0.12)] border border-slate-100 flex flex-col h-full text-left transition-all duration-300 ease-out"
    >
      <div className="h-44 bg-linear-to-br from-[#21a07f] to-[#1a8267] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_30%,#fff_1px,transparent_1px)] bg-size-[12px_12px]" />
        <Icon className="w-20 h-20 text-white opacity-95 transform group-hover:scale-105 transition-transform duration-500" />
        <span className="absolute top-4 right-4 bg-white/15 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-semibold">
          {title} Expert
        </span>
      </div>
      <div className="p-6 flex flex-col grow">
        <h3 className="text-slate-800 text-xl font-bold tracking-tight mb-2 group-hover:text-[#21a07f] transition-colors">
          {title}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed mb-5 line-clamp-2">{description}</p>
        <div className="mt-auto border-t border-slate-100 pt-4 mb-5">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center text-slate-600 font-medium">
              <span>{instructor}</span>
              <span className="mx-2 text-slate-300">•</span>
              <div className="flex items-center text-slate-500 text-xs font-normal">
                <FaUsers className="mr-1.5 text-[#21a07f]/80 text-sm" />
                <span>{studentsCount.toLocaleString()}</span>
              </div>
            </div>
            <div className="flex items-center bg-amber-50 px-2 py-1 rounded-md">
              <svg className="w-3.5 h-3.5 text-[#feba0f]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
              <span className="ml-1 text-xs font-bold text-slate-700">{rating.toFixed(1)}</span>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-end border-t border-slate-50 pt-4">
          <div>
            <span className="text-xs text-slate-400 line-through">{price.toLocaleString()} AFN</span>
            <p className="text-slate-900 font-black text-2xl">
              {discountPrice.toLocaleString()} <span className="text-xs">AFN</span>
            </p>
          </div>
          <div className="bg-[#21a07f] text-white text-[10px] font-extrabold px-2.5 py-1.5 rounded-md shadow-sm group-hover:scale-105 transition-transform">
            {discount}% OFF
          </div>
        </div>
      </div>
    </div>
  );
};

// ========== Detailed Course View Component ==========
const CourseDetailView: React.FC<{
  course: Course;
  onBack: () => void;
}> = ({ course, onBack }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! We will contact you about ${course.title}.`);
    setFormSubmitted(true);
  };

  const levelText = formatLevel(course.level);
  const courseLanguageText = formatLanguage(course.language);
  const platformText = formatMeetingType(course.meetingType);
  const durationText = course.duration;
  const startDateText = course.startDate
    ? new Date(course.startDate).toLocaleDateString("en-US", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    })
    : null;
  const scheduleRows = normalizeScheduleRows(course.scheduleRows);
  const learningOutcomes = course.whatYouWillLearn || [];
  const syllabusItems = course.curriculumTopics || [];
  const requirements = course.requirements || [];
  const suitableAudience = course.targetAudience || [];

  const quickFacts = [
    course.instructor && { icon: UsersRound, label: "Teacher", value: course.instructor },
    startDateText && { icon: CalendarDays, label: "Start Date", value: startDateText },
    platformText && { icon: Video, label: "Platform", value: platformText },
    levelText && { icon: BookOpen, label: "Course Level", value: levelText },
    courseLanguageText && { icon: Languages, label: "Teaching Language", value: courseLanguageText },
    { icon: FaUsers, label: "Price", value: `${course.discountPrice.toLocaleString()} AFN` },
  ].filter(Boolean);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({ title: course.title, url: window.location.href });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied!");
    }
  };

  const handleDownloadSyllabus = () => {
    const lines = [
      course.title,
      `Level: ${levelText || "N/A"}`,
      `Language: ${courseLanguageText || "N/A"}`,
      `Duration: ${durationText || "N/A"}`,
      `Platform: ${platformText || "N/A"}`,
      "\nWhat you will learn:",
      ...(learningOutcomes.length ? learningOutcomes : ["-"]),
      "\nSyllabus:",
      ...(syllabusItems.length ? syllabusItems : ["-"]),
    ];
    const blob = new Blob([lines.join("\n")], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${course.slug || course.title.toLowerCase().replace(/\s+/g, "-")}-syllabus.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-slate-50 pb-24 pt-5 mt-32 font-sans antialiased">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <button
          onClick={onBack}
          className="mb-4 inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-[#21a07f] transition-colors"
        >
          <FaArrowLeft size={14} /> Back to all courses
        </button>

        <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_340px]">
          {/* Main content */}
          <div className="space-y-5">
            {/* Hero card */}
            <div className="rounded-3xl border border-slate-200 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.08)] p-4 sm:p-6">
              <div className="grid gap-5 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)]">
                <div>
                  <h1 className="text-2xl md:text-3xl font-black text-slate-950">{course.title}</h1>
                  <p className="mt-3 text-[15px] leading-7 text-slate-600">{course.description}</p>
                  {course.shortDescription && (
                    <p className="mt-2 text-sm text-slate-500">{course.shortDescription}</p>
                  )}
                </div>
                <div className="aspect-750/422 overflow-hidden rounded-2xl bg-slate-100">
                  {course.thumbnail ? (
                    <img src={course.thumbnail} alt={course.title} className="h-full w-full object-cover" />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-[#21a07f]/10">
                      <course.icon className="h-20 w-20 text-[#21a07f]/50" />
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Quick facts */}
            {quickFacts.length > 0 && (
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
                {quickFacts.map((fact, idx) => {
                  const Icon = fact!.icon;
                  return (
                    <div key={idx} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 grid h-9 w-9 place-items-center rounded-full bg-primary-50 text-primary-700">
                          <Icon size={16} />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-slate-500">{fact!.label}</p>
                          <p className="mt-1 text-sm font-black text-slate-900">{fact!.value}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Who is this for & Schedule */}
            <div className="grid gap-5 lg:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <h2 className="text-xl font-black text-slate-950">Who is this course for?</h2>
                <div className="mt-4 space-y-2.5">
                  {suitableAudience.length ? suitableAudience.map((item, i) => (
                    <p key={i} className="flex items-start gap-2 text-sm font-semibold text-slate-700">
                      <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-600" size={16} />
                      <span>{item}</span>
                    </p>
                  )) : <p className="text-sm text-slate-500">Not specified yet.</p>}
                </div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <h2 className="text-xl font-black text-slate-950">Weekly Schedule</h2>
                <div className="mt-4 overflow-hidden rounded-xl border border-slate-200">
                  {scheduleRows.map((row, idx) => (
                    <div key={idx} className="grid grid-cols-3 gap-2 border-b border-slate-100 px-3 py-3 text-xs font-semibold text-slate-700 last:border-0">
                      <span>{formatDayLabel(row.day)}</span>
                      <span>{row.startTime}</span>
                      <span className="text-teal-700">{row.endTime}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* What you'll learn & Requirements */}
            <div className="grid gap-5 lg:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <h2 className="text-xl font-black text-slate-950">What you'll learn</h2>
                <div className="mt-4 space-y-2.5">
                  {learningOutcomes.length ? learningOutcomes.map((item, i) => (
                    <p key={i} className="flex items-start gap-2 text-sm font-semibold text-slate-700">
                      <CheckCircle2 className="mt-0.5 shrink-0 text-primary-700" size={16} />
                      <span>{item}</span>
                    </p>
                  )) : <p className="text-sm text-slate-500">Not added yet.</p>}
                </div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <h2 className="text-xl font-black text-slate-950">Requirements</h2>
                <div className="mt-4 space-y-2">
                  {requirements.length ? requirements.map((item, i) => (
                    <div key={i} className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm font-semibold text-slate-700">
                      {item}
                    </div>
                  )) : <p className="text-sm text-slate-500">No prerequisites required.</p>}
                </div>
              </div>
            </div>

            {/* Syllabus */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <h2 className="text-xl font-black text-slate-950">Course Syllabus</h2>
              <div className="mt-3 max-h-130 space-y-2 overflow-y-auto pe-1">
                {syllabusItems.length ? syllabusItems.map((item, i) => (
                  <div key={i} className="flex min-h-11 items-center rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-bold text-slate-800">
                    {item}
                  </div>
                )) : <p className="text-sm text-slate-500">Syllabus coming soon.</p>}
              </div>
            </div>
          </div>

          {/* Sidebar - Registration / Price */}
          <aside className="hidden xl:block">
            <div className="sticky top-24 rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_16px_40px_rgba(15,23,42,0.08)]">
              <p className="text-center text-xs font-bold uppercase text-slate-500">Course Fee</p>
              <p className="mt-1 text-center text-3xl font-black text-slate-950" dir="ltr">
                {formatPrice(course.discountPrice)}
              </p>
              <p className="text-center text-xs text-slate-400 line-through">{formatPrice(course.price)}</p>

              <div className="mt-5 space-y-3">
                <div className="flex justify-between rounded-lg bg-slate-50 px-3 py-2 text-sm font-semibold">
                  <span>💳 Secure payment</span>
                  <span className="text-[#21a07f]">HesabPay / Cash</span>
                </div>
                <div className="flex justify-between rounded-lg bg-slate-50 px-3 py-2 text-sm font-semibold">
                  <span>📚 Access</span>
                  <span>Lifetime</span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm focus:border-[#21a07f] focus:outline-none"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm focus:border-[#21a07f] focus:outline-none"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone (WhatsApp)"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm focus:border-[#21a07f] focus:outline-none"
                />
                <button
                  type="submit"
                  className="w-full rounded-lg bg-[#21a07f] py-3 font-bold text-white transition hover:bg-[#1a8569] active:scale-95"
                  disabled={formSubmitted}
                >
                  {formSubmitted ? "✓ Request Sent" : "Enroll Now"}
                </button>
              </form>

              <div className="mt-4 flex flex-wrap gap-2">
                <button onClick={handleDownloadSyllabus} className="inline-flex items-center gap-1 rounded-md border border-slate-200 px-3 py-1.5 text-xs font-bold text-slate-700 hover:border-primary-300 hover:text-primary-700">
                  <Download size={14} /> Syllabus
                </button>
                <button onClick={handleShare} className="inline-flex items-center gap-1 rounded-md border border-slate-200 px-3 py-1.5 text-xs font-bold text-slate-700 hover:border-primary-300 hover:text-primary-700">
                  <Share2 size={14} /> Share
                </button>
              </div>
            </div>
          </aside>
        </div>

        {/* Mobile bottom bar */}
        <div className="fixed inset-x-0 bottom-0 z-30 border-t border-slate-200 bg-white/95 p-3 backdrop-blur xl:hidden">
          <div className="mx-auto flex max-w-7xl items-center gap-3">
            <div>
              <p className="text-[11px] font-bold uppercase text-slate-500">Price</p>
              <p className="text-lg font-black text-slate-950">{formatPrice(course.discountPrice)}</p>
            </div>
            <button
              onClick={() => {
                const form = document.querySelector("aside form") as HTMLFormElement;
                if (form) form.requestSubmit();
                else alert("Please fill the form above.");
              }}
              className="inline-flex h-11 flex-1 items-center justify-center rounded-lg bg-[#21a07f] px-4 text-sm font-bold text-white hover:bg-[#1a8569]"
            >
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// ========== Main Courses Component ==========
const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const coursesData: Course[] = [
    // ... (your existing courses data – unchanged)
    {
      id: 1,
      icon: FaHtml5,
      title: "HTML",
      instructor: "Elyas Alowdin",
      rating: 5.0,
      price: 1500,
      discountPrice: 1000,
      discount: 60,
      studentsCount: 30,
      description: "Master web structure and HTML5 tags – the first step into web programming.",
      shortDescription: "Learn semantic HTML, forms, multimedia, and accessibility.",
      level: "beginner",
      language: "english",
      duration: "4 weeks",
      meetingType: "google_meet",
      startDate: "2026-07-01T09:00:00",
      scheduleRows: [
        { day: "saturday", startTime: "10:00", endTime: "12:00" },
        { day: "monday", startTime: "10:00", endTime: "12:00" },
      ],
      whatYouWillLearn: ["HTML5 semantic tags", "Forms and input validation", "Multimedia embedding", "SEO basics"],
      curriculumTopics: ["Introduction to HTML", "Text formatting", "Links and images", "Tables and lists", "Forms", "Semantic HTML"],
      requirements: ["No prior coding experience needed"],
      targetAudience: ["Absolute beginners", "Aspiring web developers"],
      slug: "html-basics",
    },
    {
      id: 2,
      icon: FaCss3Alt,
      title: "CSS",
      instructor: "Elyas Alowdin",
      rating: 4.9,
      price: 1200,
      discountPrice: 600,
      discount: 50,
      studentsCount: 35,
      description: "Learn styling, Flexbox, CSS Grid and animations. Turn designs into code.",
      level: "beginner",
      language: "english",
      duration: "5 weeks",
      meetingType: "google_meet",
      startDate: "2026-07-05T10:00:00",
      scheduleRows: [{ day: "sunday", startTime: "14:00", endTime: "16:00" }],
      whatYouWillLearn: ["Box model", "Flexbox & Grid", "Responsive design", "CSS animations"],
      curriculumTopics: ["Selectors", "Colors & typography", "Layout techniques", "Transitions & transforms"],
      requirements: ["Basic HTML knowledge"],
      targetAudience: ["HTML beginners", "Frontend enthusiasts"],
      slug: "css-styling",
    },
    {
      id: 3,
      icon: TbBrandJavascript,
      title: "JavaScript",
      instructor: "Elyas Alowdin",
      rating: 5.0,
      price: 1500,
      discountPrice: 750,
      discount: 50,
      studentsCount: 20,
      description: "Programming logic, DOM manipulation and ES6.",
      level: "beginner",
      language: "english",
      duration: "8 weeks",
      meetingType: "google_meet",
      startDate: "2026-07-10T10:00:00",
      scheduleRows: [{ day: "tuesday", startTime: "14:00", endTime: "16:00" }],
      whatYouWillLearn: ["Variables and data types", "Functions and scope", "DOM manipulation", "ES6 features"],
      curriculumTopics: ["Basics", "Control flow", "Arrays and objects", "Events", "Async JS"],
      requirements: ["Basic HTML/CSS"],
      targetAudience: ["Aspiring web developers"],
      slug: "javascript-fundamentals",
    },
    {
      id: 4,
      icon: FaReact,
      title: "React",
      instructor: "Elyas Alowdin",
      rating: 4.8,
      price: 1500,
      discountPrice: 750,
      discount: 50,
      studentsCount: 25,
      description: "Hooks, Components and State Management.",
      level: "intermediate",
      language: "english",
      duration: "10 weeks",
      meetingType: "zoom",
      startDate: "2026-07-15T10:00:00",
      scheduleRows: [{ day: "wednesday", startTime: "16:00", endTime: "18:00" }],
      whatYouWillLearn: ["Components & props", "State & lifecycle", "Hooks", "React Router"],
      curriculumTopics: ["JSX", "Components", "State management", "Effects", "Context API"],
      requirements: ["JavaScript knowledge"],
      targetAudience: ["Frontend developers"],
      slug: "react-mastery",
    },
    {
      id: 5,
      icon: RiTailwindCssFill,
      title: "Tailwind CSS",
      instructor: "Elyas Alowdin",
      rating: 5.0,
      price: 1500,
      discountPrice: 750,
      discount: 50,
      studentsCount: 30,
      description: "Build UI without writing extra CSS.",
      level: "beginner",
      language: "english",
      duration: "3 weeks",
      meetingType: "google_meet",
      startDate: "2026-07-20T10:00:00",
      scheduleRows: [{ day: "thursday", startTime: "11:00", endTime: "13:00" }],
      whatYouWillLearn: ["Utility-first workflow", "Responsive design", "Custom themes"],
      curriculumTopics: ["Installation", "Layout utilities", "Typography", "Animations"],
      requirements: ["Basic CSS knowledge"],
      targetAudience: ["Developers who want faster styling"],
      slug: "tailwind-css",
    },
    {
      id: 6,
      icon: RiNextjsFill,
      title: "Next.js",
      instructor: "Elyas Alowdin",
      rating: 5.0,
      price: 1500,
      discountPrice: 750,
      discount: 50,
      studentsCount: 20,
      description: "SSR, API Routes and Static Site Generation.",
      level: "advanced",
      language: "english",
      duration: "8 weeks",
      meetingType: "zoom",
      startDate: "2026-08-01T10:00:00",
      scheduleRows: [{ day: "friday", startTime: "09:00", endTime: "11:00" }],
      whatYouWillLearn: ["Routing", "Data fetching", "API routes", "Deployment"],
      curriculumTopics: ["Pages", "SSR/SSG", "Middleware", "Optimization"],
      requirements: ["React knowledge"],
      targetAudience: ["React developers"],
      slug: "nextjs",
    },
    {
      id: 7,
      icon: FaPython,
      title: "Python",
      instructor: "Haidar Rezaei",
      rating: 4.7,
      price: 1500,
      discountPrice: 750,
      discount: 50,
      studentsCount: 25,
      description: "From scripting to AI and web development.",
      level: "beginner",
      language: "english",
      duration: "12 weeks",
      meetingType: "google_meet",
      startDate: "2026-08-05T10:00:00",
      scheduleRows: [{ day: "saturday", startTime: "15:00", endTime: "17:00" }],
      whatYouWillLearn: ["Syntax", "Data structures", "OOP", "Libraries"],
      curriculumTopics: ["Basics", "Functions", "Modules", "File handling"],
      requirements: ["No prior experience"],
      targetAudience: ["Complete beginners", "Data enthusiasts"],
      slug: "python-programming",
    },
    {
      id: 8,
      icon: DiDjango,
      title: "Django",
      instructor: "Haidar Rezaei",
      rating: 4.9,
      price: 1500,
      discountPrice: 750,
      discount: 50,
      studentsCount: 15,
      description: "Build secure backends with Python.",
      level: "intermediate",
      language: "english",
      duration: "10 weeks",
      meetingType: "zoom",
      startDate: "2026-08-10T10:00:00",
      scheduleRows: [{ day: "monday", startTime: "18:00", endTime: "20:00" }],
      whatYouWillLearn: ["Models", "Views", "Templates", "Admin panel"],
      curriculumTopics: ["ORM", "URL dispatcher", "Forms", "Authentication"],
      requirements: ["Python knowledge"],
      targetAudience: ["Backend developers"],
      slug: "django-backend",
    },
  ];

  if (selectedCourse) {
    return <CourseDetailView course={selectedCourse} onBack={() => setSelectedCourse(null)} />;
  }

  return (
    <div className="w-full px-[5%] lg:px-[12%] py-20 bg-slate-50 min-h-screen font-sans antialiased" dir="ltr">
      <div className="text-center mb-16 max-w-xl mx-auto mt-20">
        <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-4 tracking-tight">
          Top Training Courses
        </h2>
        <div className="w-12 h-1 bg-[#21a07f] mx-auto rounded-full mt-4"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {coursesData.map((course) => (
          <CourseCard key={course.id} course={course} onSelect={setSelectedCourse} />
        ))}
      </div>
    </div>
  );
};

export default Courses;