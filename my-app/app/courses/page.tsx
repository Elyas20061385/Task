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
  Users,
  Calendar,
  Compass,
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
  duration?: string;
  meetingType?: "google_meet" | "zoom" | "physical" | "recorded";
  startDate?: string;
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

// ========== Detailed Course View Component (fully fixed) ==========
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
    <div className="bg-slate-50 pb-24 pt-5 font-sans antialiased mt-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <button
          onClick={onBack}
          className="mb-4 inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-[#21a07f] transition-colors"
        >
          <FaArrowLeft size={14} /> Back to all courses
        </button>

        <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_340px] items-start">
          {/* Main content */}
          <div className="space-y-6">
            {/* Hero section */}
            <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-sm p-6 md:p-8">
              <div className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(300px,0.8fr)] items-center">
                <div className="space-y-4">
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                    {course.title}
                  </h1>
                  <p className="text-[15px] leading-relaxed text-slate-500/90 font-medium">
                    {course.description}
                  </p>
                  {course.shortDescription && (
                    <p className="inline-flex items-center rounded-md bg-slate-50 border border-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600">
                      {course.shortDescription}
                    </p>
                  )}
                </div>
                <div className="aspect-video overflow-hidden rounded-2xl border border-slate-100 shadow-sm bg-slate-50">
                  {course.thumbnail ? (
                    <img src={course.thumbnail} alt={course.title} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-[#21a07f]/5">
                      <course.icon className="h-16 w-16 text-[#21a07f]/40" />
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Quick facts */}
            {quickFacts.length > 0 && (
              <div className="space-y-4">
                <div className="flex items-center justify-between px-1">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">Course Overview</h3>
                  <span className="h-px flex-1 bg-linear-to-r from-slate-200/60 via-slate-100 to-transparent ml-4 hidden sm:block" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {quickFacts.map((fact, idx) => {
                    const Icon = fact!.icon;
                    return (
                      <div
                        key={idx}
                        className="group relative flex flex-col sm:flex-row sm:items-center gap-4 rounded-2xl border border-slate-200/60 bg-linear-to-b from-white to-slate-50/40 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-md"
                      >
                        <div className="absolute left-0 top-1/4 h-1/2 w-0.75 rounded-r-full bg-primary-600 opacity-0 scale-y-50 transition-all duration-300 group-hover:opacity-100 group-hover:scale-y-100" />
                        <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-slate-200/50 bg-white shadow-xs text-slate-500 transition-all duration-300 group-hover:scale-105 group-hover:border-primary-100 group-hover:bg-primary-50/50 group-hover:text-primary-600">
                          <Icon size={18} strokeWidth={2} />
                        </div>
                        <div className="flex-1 min-w-0 space-y-0.5">
                          <span className="block text-[10px] font-bold tracking-widest uppercase text-slate-400 leading-none">
                            {fact!.label}
                          </span>
                          <span className="block text-[14px] font-semibold tracking-tight text-slate-800 leading-snug wrap-break-word whitespace-normal">
                            {fact!.value}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Target Audience & Schedule */}
            <div className="grid gap-8 md:grid-cols-2">

              {/* 1. ELITE TARGET AUDIENCE: Bento-Style Persona Grid */}
              <div className="group/card relative flex flex-col rounded-3xl border border-slate-200/70 bg-linear-to-b from-white to-slate-50/50 p-6 shadow-[0_2px_8px_rgba(15,23,42,0.01),0_20px_40px_-16px_rgba(15,23,42,0.03)] transition-all duration-300 hover:border-slate-300 hover:shadow-[0_4px_24px_rgba(15,23,42,0.02),0_32px_64px_-16px_rgba(15,23,42,0.05)]">

                {/* Top decorative gradient glow accent */}
                <div className="absolute top-0 right-12 h-px w-24 bg-linear-to-r from-transparent via-emerald-400/40 to-transparent opacity-0 transition-opacity duration-500 group-hover/card:opacity-100" />

                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-50 border border-emerald-100/50 text-emerald-600 shadow-3xs">
                      <Users size={15} strokeWidth={2.2} />
                    </div>
                    <h2 className="text-[15px] font-bold tracking-tight text-slate-900">Target Audience</h2>
                  </div>
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" />
                </div>

                <div className="flex-1 space-y-3">
                  {suitableAudience.length ? (
                    suitableAudience.map((item, i) => (
                      <div
                        key={i}
                        className="group relative flex items-start gap-4 rounded-2xl border border-slate-100 bg-white p-4 shadow-[0_1px_3px_rgba(15,23,42,0.01)] transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-200 hover:shadow-[0_4px_12px_rgba(15,23,42,0.02)]"
                      >
                        {/* Dynamic left border highlight line */}
                        <div className="absolute left-0 top-4 bottom-4 w-[2.5px] rounded-r-full bg-emerald-500 opacity-0 scale-y-50 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:scale-y-100" />

                        <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-50/60 border border-emerald-100/30 text-emerald-600 shadow-3xs transition-all duration-300 group-hover:scale-105 group-hover:bg-emerald-50">
                          <CheckCircle2 size={13} strokeWidth={2.5} />
                        </div>

                        <span className="text-[13px] font-medium leading-relaxed text-slate-600 transition-colors duration-200 group-hover:text-slate-900">
                          {item}
                        </span>
                      </div>
                    ))
                  ) : (
                    <div className="flex h-full min-h-35 flex-col items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-slate-50/30 p-4 text-center">
                      <p className="text-xs font-semibold text-slate-400 italic">No target profiles defined yet.</p>
                    </div>
                  )}
                </div>
              </div>

              {/* 2. PREMIUM AGENDA TIMELINE: High-End Interactive Grid */}
              <div className="group/card relative flex flex-col rounded-3xl border border-slate-200/70 bg-linear-to-b from-white to-slate-50/50 p-6 shadow-[0_2px_8px_rgba(15,23,42,0.01),0_20px_40px_-16px_rgba(15,23,42,0.03)] transition-all duration-300 hover:border-slate-300 hover:shadow-[0_4px_24px_rgba(15,23,42,0.02),0_32px_64px_-16px_rgba(15,23,42,0.05)]">

                {/* Top decorative gradient glow accent */}
                <div className="absolute top-0 right-12 h-px w-24 bg-linear-to-r from-transparent via-primary-400/40 to-transparent opacity-0 transition-opacity duration-500 group-hover/card:opacity-100" />

                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary-50 border border-primary-100/50 text-primary-600 shadow-3xs">
                      <Calendar size={15} strokeWidth={2.2} />
                    </div>
                    <h2 className="text-[15px] font-bold tracking-tight text-slate-900">Weekly Schedule</h2>
                  </div>
                  <span className="inline-flex items-center rounded-full bg-slate-100/80 border border-slate-200/60 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-500 shadow-3xs backdrop-blur-xs">
                    Live Cohort
                  </span>
                </div>

                <div className="flex-1 space-y-2.5">
                  {scheduleRows.length ? (
                    scheduleRows.map((row, idx) => (
                      <div
                        key={idx}
                        className="group flex items-center justify-between rounded-2xl border border-slate-100 bg-white p-3.5 shadow-[0_1px_3px_rgba(15,23,42,0.01)] transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-200 hover:shadow-[0_4px_12px_rgba(15,23,42,0.02)]"
                      >
                        {/* Elegant Calendar Badging */}
                        <div className="flex items-center gap-3">
                          <div className="flex h-8 w-14 items-center justify-center rounded-xl bg-slate-50 border border-slate-100 text-xs font-bold text-slate-700 shadow-3xs transition-all duration-300 group-hover:bg-primary-50/50 group-hover:text-primary-700 group-hover:border-primary-100/50">
                            {formatDayLabel(row.day).slice(0, 3)}
                          </div>
                          <span className="hidden sm:inline text-xs font-semibold text-slate-400 transition-colors duration-200 group-hover:text-slate-600">
                            {formatDayLabel(row.day)}
                          </span>
                        </div>

                        {/* Time Badge with Structural Pill Architecture */}
                        <div className="flex items-center gap-2.5">
                          <span className="text-xs font-bold text-slate-700 tracking-tight">{row.startTime}</span>
                          <span className="text-[10px] font-black text-slate-300 tracking-widest">—</span>
                          <span className="inline-flex items-center justify-center rounded-lg bg-teal-50/60 border border-teal-100/50 px-2.5 py-1 text-xs font-bold text-teal-700 shadow-3xs transition-colors duration-200 group-hover:bg-teal-50 group-hover:text-teal-800">
                            {row.endTime}
                          </span>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="flex h-full min-h-35 flex-col items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-slate-50/30 p-4 text-center">
                      <p className="text-xs font-semibold text-slate-400 italic">No class timings arranged yet.</p>
                    </div>
                  )}
                </div>
              </div>

            </div>



            {/* Learning Outcomes & Requirements */}
            <div className="grid gap-6 md:grid-cols-2">

              {/* 1. WHAT YOU'LL LEARN: Premium Outcome Grid */}
              <div className="group/card relative flex flex-col rounded-3xl border border-slate-200/70 bg-linear-to-b from-white to-slate-50/50 p-6 shadow-[0_2px_8px_rgba(15,23,42,0.01),0_20px_40px_-16px_rgba(15,23,42,0.03)] transition-all duration-300 hover:border-slate-300 hover:shadow-[0_4px_24px_rgba(15,23,42,0.02),0_32px_64px_-16px_rgba(15,23,42,0.05)]">

                {/* Decorative hairline gradient glow on hover */}
                <div className="absolute top-0 right-12 h-px w-24 bg-linear-to-r from-transparent via-primary-400/40 to-transparent opacity-0 transition-opacity duration-500 group-hover/card:opacity-100" />

                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary-50 border border-primary-100/50 text-primary-600 shadow-3xs">
                      <BookOpen size={15} strokeWidth={2.2} />
                    </div>
                    <h2 className="text-[15px] font-bold tracking-tight text-slate-900">What you'll learn</h2>
                  </div>
                  <span className="h-1.5 w-1.5 rounded-full bg-primary-500 shadow-[0_0_8px_rgba(var(--primary-rgb),0.6)]" />
                </div>

                <div className="flex-1 space-y-3">
                  {learningOutcomes.length ? (
                    learningOutcomes.map((item, i) => (
                      <div
                        key={i}
                        className="group relative flex items-start gap-4 rounded-2xl border border-slate-100 bg-white p-4 shadow-[0_1px_3px_rgba(15,23,42,0.01)] transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-200 hover:shadow-[0_4px_12px_rgba(15,23,42,0.02)]"
                      >
                        {/* Dynamic left border highlight bar */}
                        <div className="absolute left-0 top-4 bottom-4 w-[2.5px] rounded-r-full bg-primary-600 opacity-0 scale-y-50 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:scale-y-100" />

                        <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-50/60 border border-primary-100/30 text-primary-600 shadow-3xs transition-all duration-300 group-hover:scale-105 group-hover:bg-primary-50">
                          <CheckCircle2 size={13} strokeWidth={2.5} />
                        </div>

                        <span className="text-[13px] font-medium leading-relaxed text-slate-600 transition-colors duration-200 group-hover:text-slate-900">
                          {item}
                        </span>
                      </div>
                    ))
                  ) : (
                    <div className="flex h-full min-h-35 flex-col items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-slate-50/30 p-4 text-center">
                      <p className="text-xs font-semibold text-slate-400 italic">No outcomes defined yet.</p>
                    </div>
                  )}
                </div>
              </div>

              {/* 2. REQUIREMENTS: Premium Prerequisite Track */}
              <div className="group/card relative flex flex-col rounded-3xl border border-slate-200/70 bg-linear-to-b from-white to-slate-50/50 p-6 shadow-[0_2px_8px_rgba(15,23,42,0.01),0_20px_40px_-16px_rgba(15,23,42,0.03)] transition-all duration-300 hover:border-slate-300 hover:shadow-[0_4px_24px_rgba(15,23,42,0.02),0_32px_64px_-16px_rgba(15,23,42,0.05)]">

                {/* Decorative hairline gradient glow on hover */}
                <div className="absolute top-0 right-12 h-px w-24 bg-linear-to-r from-transparent via-slate-400/30 to-transparent opacity-0 transition-opacity duration-500 group-hover/card:opacity-100" />

                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-100 border border-slate-200/50 text-slate-600 shadow-3xs">
                      <Compass size={15} strokeWidth={2.2} />
                    </div>
                    <h2 className="text-[15px] font-bold tracking-tight text-slate-900">Requirements</h2>
                  </div>
                  <span className="inline-flex items-center rounded-full bg-slate-100 border border-slate-200/60 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-500 shadow-3xs">
                    Prerequisites
                  </span>
                </div>

                <div className="flex-1 space-y-2.5">
                  {requirements.length ? (
                    requirements.map((item, i) => (
                      <div
                        key={i}
                        className="group flex items-center justify-between rounded-2xl border border-slate-100 bg-white p-3.5 shadow-[0_1px_3px_rgba(15,23,42,0.01)] transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-200 hover:shadow-[0_4px_12px_rgba(15,23,42,0.02)]"
                      >
                        <div className="flex items-center gap-3 w-full">
                          {/* Premium ordered badge identifier */}
                          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-slate-50 border border-slate-100 text-[11px] font-bold text-slate-400 shadow-3xs transition-all duration-300 group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900">
                            {String(i + 1).padStart(2, '0')}
                          </div>
                          <span className="text-[13px] font-semibold text-slate-600 leading-snug transition-colors duration-200 group-hover:text-slate-900 wrap-break-word w-full">
                            {item}
                          </span>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="flex h-full min-h-35 flex-col items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-slate-50/30 p-4 text-center">
                      <p className="text-xs font-semibold text-slate-400 italic">No prerequisites required.</p>
                    </div>
                  )}
                </div>
              </div>

            </div>


            {/* Syllabus */}
            <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-bold tracking-tight text-slate-900">Course Syllabus</h2>
              <div className="mt-4 max-h-96 space-y-2 overflow-y-auto pr-1">
                {syllabusItems.length ? syllabusItems.map((item, i) => (
                  <div key={i} className="group flex min-h-12 items-center justify-between rounded-xl border border-slate-100 bg-white px-4 py-3 shadow-sm transition-all hover:border-slate-200 hover:bg-slate-50/40">
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-slate-50 text-[11px] font-bold text-slate-400 border border-slate-100 group-hover:bg-primary-50 group-hover:text-primary-600 group-hover:border-primary-100">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="text-[14px] font-semibold text-slate-700 truncate group-hover:text-slate-900">
                        {item}
                      </span>
                    </div>
                  </div>
                )) : <p className="text-sm text-slate-400 italic">Syllabus coming soon.</p>}
              </div>
            </div>
          </div>

          {/* Sidebar - Registration Form */}
          <aside className="hidden xl:block sticky top-6 w-full max-w-87.5">
            <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-linear-to-b from-white to-slate-50/50 p-6 shadow-[0_2px_12px_rgba(15,23,42,0.01),0_24px_48px_-12px_rgba(15,23,42,0.04)]">

              {/* Premium top accent glow path */}
              <div className="absolute top-0 inset-x-0 h-0.5 bg-linear-to-r from-transparent via-[#21a07f]/40 to-transparent" />

              {/* 1. FinTech Pricing Display Frame */}
              <div className="relative rounded-2xl bg-slate-50 border border-slate-100 p-5 text-center shadow-inner">


                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-3xl font-extrabold tracking-tight text-slate-950" dir="ltr">
                    {formatPrice(course.discountPrice)}
                  </span>
                  {course.price && (
                    <span className="text-sm font-semibold text-slate-400 line-through">
                      {formatPrice(course.price)}
                    </span>
                  )}
                </div>
                <p className="mt-1.5 text-[11px] font-medium text-slate-400">Includes all materials & certificate</p>
              </div>

              {/* 2. Structured Meta Value Track */}
              <div className="mt-5 space-y-2.5">
                <div className="group flex items-center justify-between rounded-xl border border-slate-100 bg-white p-3 shadow-[0_1px_2px_rgba(0,0,0,0.01)] hover:border-slate-200 transition-colors">
                  <div className="flex items-center gap-2.5">
                    <span className="text-base text-slate-500 group-hover:scale-105 transition-transform">💳</span>
                    <span className="text-xs font-bold text-slate-500">Secure Payment</span>
                  </div>
                  <span className="inline-flex items-center rounded-md bg-teal-50/60 border border-teal-100/40 px-2 py-0.5 text-xs font-bold text-[#21a07f]">
                    HesabPay / Cash
                  </span>
                </div>

                <div className="group flex items-center justify-between rounded-xl border border-slate-100 bg-white p-3 shadow-[0_1px_2px_rgba(0,0,0,0.01)] hover:border-slate-200 transition-colors">
                  <div className="flex items-center gap-2.5">
                    <span className="text-base text-slate-500 group-hover:scale-105 transition-transform">📚</span>
                    <span className="text-xs font-bold text-slate-500">Course Access</span>
                  </div>
                  <span className="text-xs font-bold text-slate-700">Lifetime Upgrade</span>
                </div>
              </div>

              {/* 3. Luxury Premium Input Field Tray */}
              <form onSubmit={handleSubmit} className="mt-6 space-y-3.5">
                <div className="space-y-1">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-xs font-semibold text-slate-800 placeholder-slate-400 shadow-3xs transition-all duration-200 focus:border-[#21a07f] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#21a07f]/10"
                  />
                </div>

                <div className="space-y-1">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-xs font-semibold text-slate-800 placeholder-slate-400 shadow-3xs transition-all duration-200 focus:border-[#21a07f] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#21a07f]/10"
                  />
                </div>

                <div className="space-y-1">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone (WhatsApp)"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-xs font-semibold text-slate-800 placeholder-slate-400 shadow-3xs transition-all duration-200 focus:border-[#21a07f] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#21a07f]/10"
                  />
                </div>

                {/* 4. Glossy Action Call-To-Action Button */}
                <button
                  type="submit"
                  className="relative group/btn w-full overflow-hidden rounded-xl bg-[#21a07f] py-3.5 text-xs font-bold text-white shadow-md shadow-[#21a07f]/10 transition-all duration-300 hover:bg-[#1a8569] hover:shadow-lg hover:shadow-[#21a07f]/20 active:scale-[0.98]"
                  disabled={formSubmitted}
                >
                  <span className="relative z-10 tracking-wide flex items-center justify-center gap-1.5">
                    {formSubmitted ? "✓ Registration Request Sent" : "Enroll In Course Now"}
                  </span>
                  {/* Subtle white gloss shimmer animation on button hover */}
                  <div className="absolute inset-0 w-1/2 h-full bg-white/10 transform -skew-x-12 -translate-x-full group-hover/btn:animate-[shimmer_1s_ease-in-out]" />
                </button>
              </form>

              {/* 5. Clean Auxiliary Actions Bar */}
              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-3">
                <button
                  onClick={handleDownloadSyllabus}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-xs font-bold text-slate-600 shadow-3xs transition-all duration-200 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-800 active:scale-95"
                >
                  <Download size={13} strokeWidth={2.2} /> Syllabus
                </button>
                <button
                  onClick={handleShare}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-xs font-bold text-slate-600 shadow-3xs transition-all duration-200 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-800 active:scale-95"
                >
                  <Share2 size={13} strokeWidth={2.2} /> Share
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
                const form = document.querySelector("aside form");
                if (form && form instanceof HTMLFormElement) form.requestSubmit();
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
      description:
        "HTML (HyperText Markup Language) is the foundational technology used to create and organize content on the web. It defines the structure, meaning, and layout of a webpage, enabling browsers to display text, images, and other media. At its core, HTML uses a system of elements and tags to describe different types of content. These tags act as building blocks that tell the browser how each piece of information should be presented. From simple paragraphs and headings to complex layouts and forms, HTML provides the framework that supports every modern website.",
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
      requirements: ["Laptop with internet access"],
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
      description:
        "CSS (Cascading Style Sheets) is a core web technology used to control the visual appearance and layout of a website. While HTML provides the structure of a webpage, CSS is responsible for transforming that structure into a visually appealing design. CSS allows developers to apply styles such as colors, fonts, spacing, positioning, and animations, ensuring that websites are not only functional but also engaging and professional.",
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
      description:
        "JavaScript is a powerful programming language used to create dynamic, interactive, and intelligent web experiences. While HTML provides the structure and CSS handles the design, JavaScript brings websites to life by enabling real-time updates, user interactions, and complex functionality. It runs directly in the browser and allows developers to build everything from simple interactive elements to full-scale web applications.",
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
      description:
        "React is a powerful JavaScript library used to build modern, fast, and interactive user interfaces, especially for web applications. It allows developers to create reusable components that manage their own data and efficiently update the user interface when changes occur. Developed and maintained by Meta (Facebook), React has become one of the most popular tools for frontend development, powering applications like social media platforms, dashboards, and large-scale web systems.",
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
      description:
        "Tailwind CSS is a modern utility-first CSS framework that enables developers to build custom, responsive, and professional user interfaces directly within their HTML or JSX. Instead of writing traditional CSS, Tailwind provides a set of small, reusable utility classes that can be combined to create any design efficiently. It is widely used in modern development environments, especially with frameworks like React and Next.js, to speed up UI development and maintain consistency across projects.",
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
      description:
        "Next.js is a powerful React-based framework used to build fast, scalable, and production-ready web applications. It extends React by adding advanced features like server-side rendering, routing, performance optimization, and backend capabilities—making it a complete solution for modern web development. Developed by Vercel, Next.js is widely used for building everything from simple websites to complex SaaS platforms and enterprise applications.",
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
      description:
        "Python is a powerful, high-level programming language known for its simplicity, readability, and versatility. It is widely used in web development, data science, artificial intelligence, automation, and software engineering, making it one of the most popular programming languages in the world. Python’s clean and easy-to-understand syntax allows developers to write efficient code with fewer lines, making it an excellent choice for both beginners and professionals.",
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
      description:
        "Django is a high-level Python web framework used to build secure, scalable, and high-performance web applications. It follows the MVT (Model–View–Template) architecture and provides a structured way to develop backend systems quickly and efficiently. Designed with best practices in mind, Django helps developers build powerful web platforms such as e-commerce systems, dashboards, APIs, and enterprise applications with minimal effort.",
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