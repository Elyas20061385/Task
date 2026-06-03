"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
    Search, Compass, Layers, Code2, ShieldCheck, Rocket, Activity,
    ArrowRight, TrendingUp, ShoppingBag, GraduationCap, Quote, Briefcase,
    MapPin, Clock, ChevronDown, ChevronUp, CheckCircle2, Users, Award,
    Heart, FileText
} from "lucide-react";
import { Inter } from "next/font/google";

// Load Inter with Latin subset and swap display
const inter = Inter({
    subsets: ["latin"],
    display: "swap",
});

interface Stage {
    title: string;
    description: string;
    icon: React.ElementType;
    color: string;
    techFocus: string;
}
interface CaseStudy {
    id: string;
    tag: string;
    title: string;
    industry: string;
    type: string;
    icon: React.ReactNode;
    color: string;
    overview: string;
    challenge: string;
    solution: string;
    process: string;
    metrics: { value: string; label: string }[];
    technologies: string[];
    testimonial: { quote: string; author: string; role: string };
}
interface Job {
    id: string;
    title: string;
    department: "Engineering" | "Design" | "Product";
    type: string;
    location: string;
    experience: string;
    responsibilities: string[];
    requiredSkills: string[];
    preferredQualifications: string[];
}

const stages: Stage[] = [
    {
        title: "Discovery & Requirement Analysis",
        description:
            "We begin by thoroughly understanding your business goals. Deep analysis of requirements, user behavior, and market potential ensures the creation of a product aligned perfectly with your real business needs.",
        icon: Search,
        color: "bg-[#feba0f]",
        techFocus: "Business Alignment",
    },
    {
        title: "Planning & Strategy",
        description:
            "Excellent software demands a well-engineered architecture. We model the systemic structure, define the database layout, and outline a transparent project schedule to guarantee a highly scalable final product.",
        icon: Compass,
        color: "bg-[#21a07f]",
        techFocus: "System Architecture",
    },
    {
        title: "UI/UX Design",
        description:
            "Crafting highly engaging, modern, and user-centered interfaces is our priority. Through interactive wireframes and functional prototypes, we design a smooth and intuitive digital experience for your audience.",
        icon: Layers,
        color: "bg-[#feba0f]",
        techFocus: "Figma Prototyping",
    },
    {
        title: "Development",
        description:
            "Writing clean and optimized code using the high-performance Next.js frontend framework for blinding speed, paired with a robust and secure Django backend for efficient data management via Agile practices.",
        icon: Code2,
        color: "bg-[#21a07f]",
        techFocus: "Next.js & Django Stack",
    },
    {
        title: "Testing & Quality Assurance",
        description:
            "Quality is our absolute red line. Your platform undergoes rigorous automated and manual testing, covering deep security assessments, vulnerability scans, comprehensive bug fixes, and speed benchmarking.",
        icon: ShieldCheck,
        color: "bg-[#feba0f]",
        techFocus: "Security & QA Audits",
    },
    {
        title: "Deployment",
        description:
            "Transitioning your product to live production servers with maximum security standards. Utilizing modern CI/CD automation pipelines, we deploy your system with zero service interruption or downtime.",
        icon: Rocket,
        color: "bg-[#21a07f]",
        techFocus: "CI/CD & Cloud Launch",
    },
    {
        title: "Maintenance & Support",
        description:
            "Our partnership doesn't end at product launch. Continuous performance monitoring, periodic security patches, and persistent server optimizations are maintained to scale fluidly alongside your growing company.",
        icon: Activity,
        color: "bg-[#feba0f]",
        techFocus: "Ongoing Optimization",
    },
];

const caseStudies: CaseStudy[] = [
    {
        id: "fintech",
        tag: "FINANCIAL TECHNOLOGY",
        title: "Scaling a High-Frequency Wealth Management Platform",
        industry: "Fintech & Investment",
        type: "Web Application & Real-time Dashboard",
        icon: <TrendingUp className="w-6 h-6" />,
        color: "bg-[#21a07f]",
        overview:
            "We partnered with a leading European wealth management firm to rebuild their client-facing portal and investment analytics engine.",
        challenge:
            "The client's legacy system suffered from sluggish data loading times, frequent downtime during peak trading hours, and an outdated user interface that hindered client onboarding and retention.",
        solution:
            "We engineered a secure, modern architecture utilizing Django for robust data processing, financial compliance routing, and mathematical modeling on the backend. For the frontend, Next.js was deployed to achieve server-side rendering, delivering instantaneous data visualization dashboards and millisecond-level responsiveness.",
        process:
            "Using an Agile, feature-driven delivery framework, we rolled out the platform in strategic, iterative phases. Continuous collaboration with the client's internal compliance and risk teams ensured total alignment with international financial security standards.",
        metrics: [
            { value: "400%", label: "Faster Data Load Times" },
            { value: "99.99%", label: "Platform Uptime Achieved" },
            { value: "+65%", label: "User Onboarding Rate" },
        ],
        technologies: ["Next.js", "Django", "PostgreSQL", "Tailwind CSS", "Redis", "AWS"],
        testimonial: {
            quote:
                "The team didn't just write code; they deeply understood our complex financial operations. The new platform transformed how our clients interact with their portfolios.",
            author: "Marcus Vance",
            role: "Chief Product Officer",
        },
    },
    {
        id: "ecommerce",
        tag: "E-COMMERCE & RETAIL",
        title: "Next-Gen Headless Commerce Infrastructure for Global Retail",
        industry: "E-Commerce",
        type: "Headless B2C Platform",
        icon: <ShoppingBag className="w-6 h-6" />,
        color: "bg-[#feba0f]",
        overview:
            "A rapidly growing apparel brand needed to transition away from standard, rigid SaaS website builders to a highly customized storefront.",
        challenge:
            "Poor mobile performance and slow checkout flows were driving cart abandonment rates to an unsustainable 74%. The operations team also struggled with manual, slow inventory updates across multiple international warehouses.",
        solution:
            "Our team implemented a headless commerce structure. We leveraged Next.js for a lightning-fast frontend that handles heavy imagery seamlessly across devices. On the backend, Django manages complex relational databases, orchestrating automated inventory updates, cart logic, and multi-currency operations.",
        process:
            "We followed a user-centric, behavioral-led roadmap. We continuously optimized the cart and checkout sequence based on iterative design sprints, conducting live feedback testing loops prior to final production release.",
        metrics: [
            { value: "2.1s", label: "Average Page Load Speed" },
            { value: "-35%", label: "Cart Abandonment Drop" },
            { value: "+42%", label: "Conversion Rate Surge" },
        ],
        technologies: ["Next.js", "Django REST Framework", "GraphQL", "Stripe API", "Docker"],
        testimonial: {
            quote:
                "Our global conversion rates skyrocketed within the first month of deployment. The scalability of this setup has completely future-proofed our digital storefront.",
            author: "Elena Rostova",
            role: "Director of Digital Commerce",
        },
    },
    {
        id: "edtech",
        tag: "EDUCATION TECHNOLOGY",
        title: "An Interactive, Enterprise-Grade Learning Management System",
        industry: "EdTech & Corporate Training",
        type: "SaaS Learning Platform",
        icon: <GraduationCap className="w-6 h-6" />,
        color: "bg-[#21a07f]",
        overview:
            "We collaborated with a corporate training provider to build an interactive learning management system (LMS) handling thousands of concurrent users.",
        challenge:
            "The client relied on disjointed video tools and manual spreadsheet evaluations. They lacked a centralized system capable of dynamically generating student performance metrics or managing complex media streaming assets.",
        solution:
            "We engineered an interactive SaaS platform. Next.js handles serverless page routing and secure, optimized video loading states. The Django backend safely processes complex student progress metrics, manages database operations, and powers an automated testing engine.",
        process:
            "Adopting a strict Scrum methodology, we delivered a functional prototype within six weeks. We then polished features through rapid, bi-weekly development intervals, ensuring strict protection of sensitive user data throughout.",
        metrics: [
            { value: "50K+", label: "Active Monthly Learners" },
            { value: "92%", label: "Course Completion Rate" },
            { value: "14 Days", label: "Average Enterprise Setup" },
        ],
        technologies: ["Next.js", "Django", "Celery", "Vimeo Enterprise API", "PostgreSQL"],
        testimonial: {
            quote:
                "This platform allowed us to scale from localized training centers to delivering enterprise-grade educational programs globally with zero infrastructure lag.",
            author: "Dr. Aris Thorne",
            role: "Founder & CEO",
        },
    },
];

const openPositions: Job[] = [
    {
        id: "frontend-eng",
        title: "Senior Frontend Engineer (Next.js)",
        department: "Engineering",
        type: "Full-Time",
        location: "Remote / Hybrid",
        experience: "4+ Years",
        responsibilities: [
            "Develop and optimize frontend projects using Next.js and React",
            "Collaborate closely with the design team to implement interactive UI/UX and smooth animations",
            "Optimize application performance (Web Vitals) and server-side rendering (SSR/ISR)",
            "Write clean, modular, testable code with TypeScript",
        ],
        requiredSkills: [
            "Strong mastery of Next.js, React, and TypeScript",
            "Professional experience with Tailwind CSS and animation libraries like Framer Motion",
            "Deep understanding of API architectures (RESTful / GraphQL)",
            "Solid familiarity with state management tools and Git",
        ],
        preferredQualifications: [
            "Experience with Design Systems",
            "Knowledge of technical SEO principles on the frontend",
        ],
    },
    {
        id: "backend-eng",
        title: "Backend Core Developer (Django)",
        department: "Engineering",
        type: "Full-Time",
        location: "Remote",
        experience: "3+ Years",
        responsibilities: [
            "Design and develop secure, high-performance APIs using Django REST Framework",
            "Manage, model, and optimize distributed databases (PostgreSQL)",
            "Implement background and asynchronous tasks using Celery and Redis",
            "Ensure data security, user privacy, and system integrity",
        ],
        requiredSkills: [
            "Deep proficiency in Python and Django / DRF framework",
            "Strong foundation in relational database design and query optimization",
            "Experience with Docker and CI/CD pipelines",
            "Familiarity with microservices architecture and software design patterns",
        ],
        preferredQualifications: [
            "Experience with messaging systems like RabbitMQ or Kafka",
            "Track record of developing large-scale cloud platforms",
        ],
    },
    {
        id: "uiux-des",
        title: "Product Designer (UI/UX)",
        department: "Design",
        type: "Full-Time / Part-Time",
        location: "Hybrid (Tehran Office)",
        experience: "2+ Years",
        responsibilities: [
            "Research, document user behavior, and create wireframes and logical user flows",
            "Design modern, creative, minimalist UI for web and applications",
            "Build high-fidelity interactive prototypes for testing and evaluation",
            "Collaborate with engineering to ensure accurate implementation of designs",
        ],
        requiredSkills: [
            "Complete mastery of Figma and dynamic components",
            "Deep understanding of color theory, typography, and grid systems",
            "Problem-solving mindset and ability to turn complex requirements into simple paths",
        ],
        preferredQualifications: [
            "Basic familiarity with HTML/CSS structure to better understand frontend technical constraints",
            "Online portfolio showcasing successful projects",
        ],
    },
];

const perks = [
    {
        icon: <Clock className="w-6 h-6 text-[#21a07f]" />,
        title: "Flexible Working Hours",
        desc: "Work-life balance is our priority; manage your own time.",
    },
    {
        icon: <Rocket className="w-6 h-6 text-[#feba0f]" />,
        title: "Growth Path & Education Budget",
        desc: "Budget for purchasing books, courses, and attending specialized conferences.",
    },
    {
        icon: <Users className="w-6 h-6 text-[#21a07f]" />,
        title: "Agile & Transparent Culture",
        desc: "Agile-based development without complex administrative bureaucracy.",
    },
    {
        icon: <Award className="w-6 h-6 text-[#feba0f]" />,
        title: "International Projects",
        desc: "Opportunity to work on global-scale products with the latest cutting-edge stack.",
    },
];

const steps = [
    { no: "01", title: "Submit Resume & Portfolio", desc: "Initial review of your documents, work history, and previous projects." },
    { no: "02", title: "Initial Technical Interview", desc: "Online conversation about your skills, engineering challenges, and foundational knowledge." },
    { no: "03", title: "Assessment Task (Optional)", desc: "A small real-world scenario to evaluate your coding and problem-solving approach." },
    { no: "04", title: "Cultural Interview & Offer", desc: "Meet the team, align with company values, and finally receive an official offer." },
];

const About = () => {
    const [activeTab, setActiveTab] = useState<string>("fintech");
    const activeCase = caseStudies.find((c) => c.id === activeTab) || caseStudies[0];

    // Careers state
    const [activeCategory, setActiveCategory] = useState<string>("All");
    const [expandedJob, setExpandedJob] = useState<string | null>(null);

    const filteredJobs =
        activeCategory === "All" ? openPositions : openPositions.filter((job) => job.department === activeCategory);

    const toggleJob = (id: string) => {
        setExpandedJob(expandedJob === id ? null : id);
    };

    return (
        <div className={`${inter.className} antialiased`}>
            {/* SECTION 1 */}
            <section className="relative py-24 overflow-hidden mt-12">
                <div className="max-w-6xl mx-auto px-6 lg:px-12">
                    <div className="text-center mb-24">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                            className="inline-block text-xs uppercase tracking-[0.3em] text-[#8C8C8C] mb-4"
                        >
                            Established 2025
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl"
                        >
                            The Art of Timeless <br />
                            <span className=" font-bold text-[#21a07f] border-b border-gray-200">
                                Interior Storytelling
                            </span>
                        </motion.h2>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.2 }}
                            viewport={{ once: true }}
                            className="space-y-10 text-left"
                        >
                            <h3 className="text-2xl font-medium text-[#1A1A1A]">Authenticity in Every Detail</h3>
                            <p className="text-lg leading-relaxed text-[#555] font-light">
                                We believe that every space should reflect the soul of its inhabitants. In our studio,
                                classic style is intertwined with modern needs to create an environment that never goes out of style.
                                <br />
                                <br />
                                Our goal is simple: to create a setting where serenity and elegance find meaning together.
                                Instead of following fleeting trends, we pursue timeless beauty.
                            </p>
                            <div className="pt-6 border-t border-gray-200 flex justify-between items-center">
                                <div>
                                    <p className="text-3xl font-light italic text-[#21a07f]">12+</p>
                                    <p className="text-[10px] uppercase tracking-widest text-gray-400">Years Excellence</p>
                                </div>
                                <div className="h-10 w-px bg-gray-200"></div>
                                <div>
                                    <p className="text-3xl font-light italic text-[#21a07f]">450</p>
                                    <p className="text-[10px] uppercase tracking-widest text-gray-400">Curated Spaces</p>
                                </div>
                                <div className="h-10 w-px bg-gray-200"></div>
                                <div>
                                    <p className="text-3xl font-light italic text-[#21a07f]">World</p>
                                    <p className="text-[10px] uppercase tracking-widest text-gray-400">Class Design</p>
                                </div>
                            </div>
                        </motion.div>

                        <div className="relative">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1.5 }}
                                viewport={{ once: true }}
                                className="aspect-4/5 relative rounded-t-[100px] overflow-hidden shadow-sm"
                            >
                                <Image
                                    src="/business.png"
                                    alt="Classic interior living room with elegant furniture"
                                    fill
                                    className="object-cover grayscale-20 hover:grayscale-0 transition-all duration-1000"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.2, delay: 0.5 }}
                                viewport={{ once: true }}
                                className="absolute -bottom-10 -left-10 w-48 h-64 hidden md:block border-12 border-[#21a07f] shadow-xl overflow-hidden"
                            >
                                <Image
                                    src="/h3.png"
                                    alt="Close-up of decorative interior detail"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 0px, 12rem"
                                />
                            </motion.div>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 2 }}
                        viewport={{ once: true }}
                        className="mt-32 border-b border-gray-100 pb-12 text-center"
                    >
                        <p className="text-xl md:text-2xl italic font-light text-gray-400 max-w-3xl mx-auto">
                            "Simplicity is the ultimate sophistication."
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* SECTION 2 METHODOLOGY */}
            <section className="py-24 bg-[#F8F9FA] relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-orange-50/50 via-transparent to-transparent z-0" />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div className="max-w-2xl">
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-[#21a07f] font-bold tracking-widest uppercase text-sm mb-4 block"
                            >
                                OUR METHODOLOGY
                            </motion.span>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                viewport={{ once: true }}
                                className="text-4xl md:text-6xl text-gray-900 font-bold "
                            >
                                Engineering the art of <br />
                                <span className="bg-linear-to-r from-gray-900 to-[#21a07f] bg-clip-text text-transparent">
                                    Digital Excellence.
                                </span>
                            </motion.h2>
                        </div>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-gray-500 text-lg max-w-sm pb-2 leading-relaxed"
                        >
                            We integrate software engineering practices with agile frameworks to build secure,
                            fast, and scalable platforms tailored to your business goals.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {stages.map((stage, index) => {
                            const IconComponent = stage.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -12 }}
                                    className="group relative bg-white p-8 rounded-4xl shadow-sm border border-gray-100 hover:shadow-2xl hover:shadow-[#21a07f]/10 transition-all duration-500 overflow-hidden flex flex-col justify-between"
                                >
                                    <div>
                                        <div className="absolute top-0 right-0 w-24 h-24 bg-gray-50 rounded-bl-[100px] -z-10 group-hover:bg-[#21a07f]/5 transition-colors" />
                                        <div className="flex justify-between items-start mb-8">
                                            <div
                                                className={`w-16 h-16 ${stage.color} text-white rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}
                                            >
                                                <IconComponent className="w-8 h-8" />
                                            </div>
                                            <span className="text-[10px] font-mono tracking-wider uppercase text-slate-400 bg-slate-50 px-2 py-1 rounded-md border border-slate-100">
                                                {stage.techFocus}
                                            </span>
                                        </div>
                                        <h3 className="font-extrabold text-gray-900 mb-4 group-hover:text-[#21a07f] transition-colors text-sm uppercase tracking-wide">
                                            <span className="text-[#21a07f]/40 font-mono mr-2 text-xs">0{index + 1}.</span>
                                            {stage.title}
                                        </h3>
                                        <p className="text-gray-500 leading-relaxed mb-8 text-sm text-justify">{stage.description}</p>
                                    </div>
                                    <button className="flex items-center gap-2 text-sm font-bold text-gray-900 group/btn mt-auto">
                                        Learn More
                                        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover/btn:bg-[#feba0f] group-hover/btn:text-white transition-all transform">
                                            <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </button>
                                </motion.div>
                            );
                        })}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="mt-20 p-8 rounded-[40px] bg-[#21a07f] flex flex-col md:flex-row items-center justify-between gap-8"
                    >
                        <div className="flex items-center gap-6">
                            <div className="flex -space-x-4">
                                {[1, 2, 3, 4].map((i) => (
                                    <div
                                        key={i}
                                        className="w-12 h-12 rounded-full border-2 border-amber-50 overflow-hidden bg-slate-800"
                                    >
                                        <Image
                                            src="/logo.png"
                                            alt="Team member"
                                            width={48}
                                            height={48}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                            <p className="text-white font-medium text-lg">
                                Ready to build your project following modern engineering standards?
                            </p>
                        </div>
                        <button className="bg-white text-gray-900 px-8 py-4 rounded-2xl font-bold hover:bg-[#feba0f] hover:text-white transition-all active:scale-95 whitespace-nowrap">
                            Request Technical Consultation
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* SECTION 3: SUCCESS STORIES */}
            <section className="py-24 bg-[#F8F9FA] relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-orange-50/50 via-transparent to-transparent z-0" />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div className="max-w-2xl">
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-[#21a07f] font-bold tracking-widest uppercase text-sm mb-4 block"
                            >
                                CASE STUDIES
                            </motion.span>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                viewport={{ once: true }}
                                className="text-4xl md:text-6xl text-gray-900 font-bold "
                            >
                                Real Challenges. <br />
                                <span className="bg-linear-to-r from-gray-900 to-[#21a07f] bg-clip-text text-transparent">
                                    Proven Impact.
                                </span>
                            </motion.h2>
                        </div>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-gray-500 text-lg max-w-sm pb-2 leading-relaxed"
                        >
                            See how our engineers' technical expertise in Next.js frontend and Django backend has
                            transformed complex business challenges into growth opportunities.
                        </motion.p>
                    </div>

                    {/* Tabs */}
                    <div className="flex flex-wrap gap-3 mb-12 border-b border-gray-200 pb-4">
                        {caseStudies.map((study) => (
                            <button
                                key={study.id}
                                onClick={() => setActiveTab(study.id)}
                                className={`flex items-center gap-3 px-6 py-3.5 rounded-2xl font-bold text-sm transition-all duration-300 ${activeTab === study.id
                                    ? "bg-[#21a07f] text-white shadow-lg shadow-[#21a07f]/20"
                                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200/60"
                                    }`}
                            >
                                <span className={activeTab === study.id ? "text-white" : "text-[#21a07f]"}>
                                    {study.icon}
                                </span>
                                {study.industry}
                            </button>
                        ))}
                    </div>

                    {/* Animated Content */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
                        >
                            {/* Left: Story */}
                            <div className="lg:col-span-8 bg-white p-8 md:p-12 rounded-4xl border border-gray-100 shadow-sm space-y-8">
                                <div>
                                    <span className="text-xs font-mono tracking-widest text-[#21a07f] font-bold block mb-2">
                                        {activeCase.tag}
                                    </span>
                                    <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight">
                                        {activeCase.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm mt-2 font-medium">
                                        Project Type: {activeCase.type}
                                    </p>
                                </div>

                                {/* Overview */}
                                <div className="space-y-2">
                                    <h4 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                                        <span className="w-1 h-5 bg-[#21a07f] rounded-full" />
                                        Project Overview
                                    </h4>
                                    <p className="text-gray-600 leading-relaxed">{activeCase.overview}</p>
                                </div>

                                {/* Challenge */}
                                <div className="space-y-2">
                                    <h4 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                                        <span className="w-1 h-5 bg-[#21a07f] rounded-full" />
                                        The Challenge
                                    </h4>
                                    <p className="text-gray-600 leading-relaxed">{activeCase.challenge}</p>
                                </div>

                                {/* Solution */}
                                <div className="space-y-2">
                                    <h4 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                                        <span className="w-1 h-5 bg-[#21a07f] rounded-full" />
                                        Our Solution
                                    </h4>
                                    <p className="text-gray-600 leading-relaxed">{activeCase.solution}</p>
                                </div>

                                {/* Process */}
                                <div className="space-y-2">
                                    <h4 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                                        <span className="w-1 h-5 bg-[#21a07f] rounded-full" />
                                        Development & Implementation Process
                                    </h4>
                                    <p className="text-gray-600 leading-relaxed">{activeCase.process}</p>
                                </div>

                                {/* Technologies */}
                                <div className="space-y-2">
                                    <h4 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                                        <span className="w-1 h-5 bg-[#21a07f] rounded-full" />
                                        Technologies Used
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {activeCase.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Right: Metrics & Testimonial */}
                            <div className="lg:col-span-4 space-y-6">
                                {/* Metrics Card */}
                                <div className="bg-linear-to-br from-[#21a07f]/5 to-transparent p-6 rounded-2xl border border-[#21a07f]/20">
                                    <h4 className="text-sm font-bold uppercase tracking-wider text-[#21a07f] mb-4">
                                        Results & Impact
                                    </h4>
                                    <div className="space-y-4">
                                        {activeCase.metrics.map((metric, idx) => (
                                            <div key={idx}>
                                                <p className="text-2xl font-extrabold text-gray-900">
                                                    {metric.value}
                                                </p>
                                                <p className="text-xs text-gray-500">{metric.label}</p>
                                                {idx < activeCase.metrics.length - 1 && (
                                                    <div className="h-px bg-gray-200 mt-3" />
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Testimonial Card */}
                                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                                    <Quote className="w-8 h-8 text-[#21a07f]/40 mb-3" />
                                    <p className="text-gray-700 italic leading-relaxed">
                                        "{activeCase.testimonial.quote}"
                                    </p>
                                    <div className="mt-4 pt-3 border-t border-gray-100">
                                        <p className="font-bold text-gray-900">{activeCase.testimonial.author}</p>
                                        <p className="text-xs text-gray-400">{activeCase.testimonial.role}</p>
                                    </div>
                                </div>

                                {/* Call to Action */}
                                <button className="w-full bg-[#21a07f] text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-[#1a8a6b] transition-all group">
                                    <span>Have a similar challenge? Start collaborating with our team</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>

            {/* SECTION 4: CAREERS (Job Openings) */}
            <section className="py-24 bg-[#F8F9FA] relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-teal-50/40 via-transparent to-transparent z-0" />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
                        <div className="max-w-2xl">
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-[#21a07f] font-bold tracking-widest uppercase text-sm mb-4 block"
                            >
                                WE ARE HIRING
                            </motion.span>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                viewport={{ once: true }}
                                className="text-4xl md:text-6xl text-gray-900 font-bold "
                            >
                                Build your career. <br />
                                <span className="bg-linear-to-r from-gray-900 to-[#21a07f] bg-clip-text text-transparent">
                                    Shape the Future.
                                </span>
                            </motion.h2>
                        </div>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-gray-500 text-lg max-w-md pb-2 leading-relaxed"
                        >
                            We believe exceptional software is built by happy, creative, and dynamic teams.
                            At our company, space for innovation, continuous learning, and challenging engineering boundaries
                            is always available.
                        </motion.p>
                    </div>

                    {/* Perks Grid */}
                    <div className="mb-24">
                        <h3 className="text-xl font-extrabold text-gray-900 mb-8 flex items-center gap-2">
                            <Heart className="w-5 h-5 text-[#21a07f] fill-[#21a07f]/10" />
                            Why is working with us different?
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {perks.map((perk, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -6 }}
                                    className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm transition-all"
                                >
                                    <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center mb-4 border border-gray-100">
                                        {perk.icon}
                                    </div>
                                    <h4 className="font-bold text-gray-900 mb-2 text-base">{perk.title}</h4>
                                    <p className="text-gray-500 text-sm leading-relaxed">{perk.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Job Openings Accordion */}
                    <div className="mb-24">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                            <h3 className="text-xl font-extrabold text-gray-900 flex items-center gap-2">
                                <Briefcase className="w-5 h-5 text-[#21a07f]" />
                                Active Job Openings
                            </h3>
                            <div className="flex gap-2 p-1.5 bg-gray-200/60 rounded-xl text-xs font-bold">
                                {["All", "Engineering", "Design"].map((cat) => (
                                    <button
                                        key={cat}
                                        onClick={() => {
                                            setActiveCategory(cat);
                                            setExpandedJob(null);
                                        }}
                                        className={`px-4 py-2 rounded-lg transition-all ${activeCategory === cat
                                            ? "bg-white text-gray-900 shadow-sm"
                                            : "text-gray-500 hover:text-gray-900"
                                            }`}
                                    >
                                        {cat === "All" ? "All Positions" : cat}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-4">
                            {filteredJobs.map((job) => (
                                <div
                                    key={job.id}
                                    className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden transition-all duration-300"
                                >
                                    <div
                                        onClick={() => toggleJob(job.id)}
                                        className="p-6 md:p-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 cursor-pointer hover:bg-gray-50/50 transition-colors"
                                    >
                                        <div>
                                            <h4 className="font-extrabold text-gray-900 text-lg md:text-xl transition-colors">
                                                {job.title}
                                            </h4>
                                            <div className="flex flex-wrap gap-4 mt-3 text-xs text-gray-500 font-medium">
                                                <span className="flex items-center gap-1.5 bg-gray-50 border border-gray-100 px-2.5 py-1 rounded-md">
                                                    {job.department}
                                                </span>
                                                <span className="flex items-center gap-1.5 bg-gray-50 border border-gray-100 px-2.5 py-1 rounded-md">
                                                    {job.type}
                                                </span>
                                                <span className="flex items-center gap-1.5 bg-gray-50 border border-gray-100 px-2.5 py-1 rounded-md">
                                                    <MapPin className="w-3 h-3" /> {job.location}
                                                </span>
                                                <span className="flex items-center gap-1.5 bg-gray-50 border border-gray-100 px-2.5 py-1 rounded-md">
                                                    Experience: {job.experience}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="text-[#21a07f]">
                                            {expandedJob === job.id ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                                        </div>
                                    </div>

                                    {expandedJob === job.id && (
                                        <motion.div
                                            initial={{ height: 0 }}
                                            animate={{ height: "auto" }}
                                            exit={{ height: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="border-t border-gray-100 bg-gray-50/40"
                                        >
                                            <div className="p-6 md:p-8 space-y-6">
                                                {/* Responsibilities */}
                                                <div>
                                                    <h5 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                                        <CheckCircle2 className="w-4 h-4 text-[#21a07f]" />
                                                        Responsibilities:
                                                    </h5>
                                                    <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm pl-4">
                                                        {job.responsibilities.map((res, i) => (
                                                            <li key={i}>{res}</li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                {/* Required Skills */}
                                                <div>
                                                    <h5 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                                        <FileText className="w-4 h-4 text-[#feba0f]" />
                                                        Required Technical Skills:
                                                    </h5>
                                                    <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm pl-4">
                                                        {job.requiredSkills.map((skill, i) => (
                                                            <li key={i}>{skill}</li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                {/* Preferred Qualifications */}
                                                {job.preferredQualifications.length > 0 && (
                                                    <div>
                                                        <h5 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                                            <Award className="w-4 h-4 text-[#21a07f]" />
                                                            Nice to Have:
                                                        </h5>
                                                        <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm pl-4">
                                                            {job.preferredQualifications.map((pref, i) => (
                                                                <li key={i}>{pref}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}

                                                {/* CTA */}
                                                <div className="pt-4">
                                                    <p className="text-xs text-gray-400 mb-3">
                                                        Please submit your resume along with your portfolio or GitHub.
                                                    </p>
                                                    <button className="bg-[#21a07f] text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-[#1a8a6b] transition-colors">
                                                        Apply for this position
                                                    </button>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Recruitment Steps */}
                    <div className="mb-24">
                        <h3 className="text-xl font-extrabold text-gray-900 mb-8 flex items-center gap-2">
                            <Rocket className="w-5 h-5 text-[#21a07f]" />
                            Recruitment Process Steps
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {steps.map((step, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -4 }}
                                    className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm"
                                >
                                    <div className="text-3xl font-black text-[#21a07f]/20 mb-3">{step.no}</div>
                                    <h4 className="font-bold text-gray-900 mb-2">
                                        {step.title}
                                    </h4>
                                    <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Bottom Global CTA */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="p-8 md:p-12 rounded-[40px] bg-[#21a07f] flex flex-col lg:flex-row items-center justify-between gap-8 text-white relative overflow-hidden"
                    >
                        <div>
                            <h4 className="text-2xl font-bold mb-2">Didn't find the position you're looking for?</h4>
                            <p className="opacity-90">
                                We are always eager to meet talented engineers, designers, and product managers. Submit your resume as a general application.
                            </p>
                        </div>
                        <button className="bg-white text-gray-900 px-8 py-4 rounded-2xl font-bold hover:bg-[#feba0f] hover:text-white transition-all whitespace-nowrap">
                            Submit General Application
                        </button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default About;