"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../../components/layout/Navbar";
import { LaunchFooterSection } from "../../components/layout/LaunchFooterSection";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Box,
  Target,
  Layers,
  CheckCircle2,
  Package,
  ShieldCheck,
  Factory,
  TrendingUp,
  Sparkles,
  Droplets,
  Leaf,
  FlaskConical,
  ShoppingBag,
  Users,
  Map,
  AlertCircle,
  Activity,
  Settings,
} from "lucide-react";
import GsapTextReveal from "../../components/ui/GsapTextReveal";
import Link from "next/link";
import { ConnectedLaunchEcosystemSection } from "../../components/sections/ConnectedLaunchEcosystemSection";

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const faqs = [
  {
    question: "What does LaunchVeda do?",
    answer:
      "LaunchVeda helps founders launch product brands by connecting product strategy, formulation, manufacturing support, packaging, compliance, branding, website, marketplace listing and growth execution.",
  },
  {
    question: "Which categories does LaunchVeda support?",
    answer:
      "LaunchVeda supports Perfume, Ayurveda, Cosmetics, Nutraceuticals and modern D2C product categories.",
  },
  {
    question: "Does LaunchVeda handle manufacturing?",
    answer:
      "LaunchVeda helps founders with manufacturer selection, sampling coordination, formulation direction and launch planning. Manufacturing commercials and final production depend on the selected manufacturing partner.",
  },
  {
    question: "Is LaunchVeda suitable for new founders?",
    answer:
      "Yes. LaunchVeda is built for founders who have an idea, product concept, existing product or early-stage brand and need a structured path to launch.",
  },
  {
    question: "Does LaunchVeda help with marketing?",
    answer:
      "Yes. LaunchVeda supports website, social media, marketplace readiness, performance marketing direction, influencer planning and advanced growth systems.",
  },
];

export default function AboutClientPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="bg-white min-h-screen flex flex-col font-sans overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-[160px] pb-[100px] w-full z-10 lg:min-h-[860px] flex items-center overflow-hidden bg-gradient-to-br from-[#F8FAFF] via-[#FFFFFF] to-[#F3E8FF]/30">
        {/* Very subtle dotted map/grid pattern */}
        <div
          className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
            backgroundSize: "24px 24px",
            maskImage:
              "radial-gradient(ellipse at center, black 0%, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 0%, transparent 80%)",
          }}
        />

        {/* Soft pale ambient light */}
        <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-indigo-100/40 rounded-full blur-[120px] -z-10 pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-100/30 rounded-full blur-[120px] -z-10 pointer-events-none" />

        <div className="max-w-[1320px] mx-auto px-6 lg:px-12 w-full relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-0 justify-between">
          {/* Left Content */}
          <motion.div
            className="w-full lg:w-[45%] lg:pr-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={itemVariants}
              className="mb-6 flex items-center gap-2"
            >
              <span className="text-[12px] font-bold tracking-[0.15em] text-[#4A3AFF] uppercase">
                About LaunchVeda
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-[76px] font-bold text-[#0B132B] leading-[1.05] tracking-tight mb-8"
            >
              We’re Not Just <br />
              a Service. <br />
              We’re a <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4A3AFF] to-[#9D4EDD]">
                Launch System.
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-[18px] text-[#4A5568] leading-[1.6] mb-12 max-w-[540px] font-medium"
            >
              LaunchVeda connects strategy, formulation, compliance, branding,
              marketplace, and growth into one structured ecosystem—so founders
              can launch with clarity and scale with confidence.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 items-start sm:items-center"
            >
              <Link
                href="/process"
                className="h-[56px] px-8 rounded-full font-bold text-white flex items-center justify-center gap-2 transition-all shadow-[0_8px_20px_rgba(74,58,255,0.25)] hover:shadow-[0_12px_25px_rgba(74,58,255,0.35)] hover:-translate-y-0.5 text-base whitespace-nowrap"
                style={{
                  background:
                    "linear-gradient(90deg, #4A3AFF 0%, #9D4EDD 100%)",
                }}
              >
                Explore Our Process
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
              <Link
                href="/#launch-stack"
                className="h-[56px] px-8 rounded-full font-bold text-[#0B132B] bg-white border border-slate-200 hover:bg-slate-50 flex items-center justify-center gap-2 transition-all shadow-[0_4px_10px_rgba(0,0,0,0.03)] text-base whitespace-nowrap"
              >
                See the Launch Stack
                <Layers className="w-4 h-4 ml-1 text-slate-600" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Visual - Orbit Ecosystem */}
          <motion.div
            className="w-full lg:w-[55%] flex flex-col items-center mt-16 lg:mt-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {/* Dedicated Wrapper for Orbit Ecosystem */}
            <div className="relative w-full max-w-[680px] h-auto lg:h-[640px] mx-auto flex flex-col lg:block">
              {/* Desktop Background Orbit Circles */}
              <div className="hidden lg:flex absolute inset-0 items-center justify-center pointer-events-none z-0">
                <div className="absolute w-[95%] h-[95%] rounded-full border border-indigo-200/50 border-dashed" />
                <div className="absolute w-[65%] h-[65%] rounded-full border border-indigo-200/70 border-dashed" />
                <div className="absolute w-[35%] h-[35%] rounded-full border border-indigo-300/80 border-dashed" />
              </div>

              {/* Desktop Connector Lines */}
              <svg
                className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-10"
                style={{ opacity: 0.4 }}
              >
                {/* Strategy */}
                <line
                  x1="50%"
                  y1="50%"
                  x2="70%"
                  y2="20%"
                  stroke="#818cf8"
                  strokeWidth="1"
                  strokeDasharray="3 3"
                />
                {/* Formulation */}
                <line
                  x1="50%"
                  y1="50%"
                  x2="20%"
                  y2="42%"
                  stroke="#818cf8"
                  strokeWidth="1"
                  strokeDasharray="3 3"
                />
                {/* Compliance */}
                <line
                  x1="50%"
                  y1="50%"
                  x2="85%"
                  y2="48%"
                  stroke="#818cf8"
                  strokeWidth="1"
                  strokeDasharray="3 3"
                />
                {/* Marketplace */}
                <line
                  x1="50%"
                  y1="50%"
                  x2="30%"
                  y2="78%"
                  stroke="#818cf8"
                  strokeWidth="1"
                  strokeDasharray="3 3"
                />
                {/* Growth */}
                <line
                  x1="50%"
                  y1="50%"
                  x2="75%"
                  y2="82%"
                  stroke="#818cf8"
                  strokeWidth="1"
                  strokeDasharray="3 3"
                />
              </svg>

              {/* Central Orb */}
              <div className="relative lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 z-30 w-[220px] h-[220px] mx-auto mb-10 lg:mb-0 rounded-full bg-white/90 backdrop-blur-xl border border-white shadow-[0_20px_60px_rgba(74,58,255,0.08)] flex flex-col items-center justify-center text-center p-6 before:absolute before:inset-[-12px] before:rounded-full before:border-[6px] before:border-[#F8FAFF] before:-z-10">
                <div className="w-16 h-16 rounded-2xl bg-transparent flex items-center justify-center mb-1">
                  <span className="font-extrabold text-[40px] tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-[#4A3AFF] to-[#9D4EDD]">
                    Lv
                  </span>
                </div>
                <span className="font-bold text-[22px] text-[#0B132B] leading-tight mb-2">
                  LaunchVeda
                </span>
                <span className="text-[12px] text-[#4A5568] font-medium px-2 leading-relaxed">
                  One System. Every
                  <br />
                  Launch Connected.
                </span>
              </div>

              {/* Cards Grid on Mobile / Absolute on Desktop */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full relative z-20 lg:block lg:static">
                {/* 1. Strategy (Top Right) */}
                <motion.div
                  className="relative lg:absolute lg:top-[30px] lg:left-[52%] w-full lg:w-[210px] bg-white rounded-[20px] p-4 shadow-[0_15px_40px_rgba(0,0,0,0.06)] border border-slate-100 z-20"
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div className="flex items-start gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center shrink-0">
                      <Target className="w-4 h-4 text-[#4A3AFF]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[14px] text-[#0B132B]">
                        Strategy
                      </h4>
                    </div>
                  </div>
                  <GsapTextReveal as="p" variant="subheading" className="text-[11px] text-[#4A5568] leading-relaxed lg:ml-11">Market insights, competitive mapping & launch roadmap.</GsapTextReveal>
                  {/* Connector dot (Desktop only) */}
                  <div className="hidden lg:flex absolute -bottom-2 left-[30%] -translate-x-1/2 w-4 h-4 rounded-full bg-[#E0E7FF] items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#4A3AFF]" />
                  </div>
                </motion.div>

                {/* 2. Formulation (Middle Left) */}
                <motion.div
                  className="relative lg:absolute lg:top-[210px] lg:left-[20px] w-full lg:w-[210px] bg-white rounded-[20px] p-4 shadow-[0_15px_40px_rgba(0,0,0,0.06)] border border-slate-100 z-20"
                  animate={{ y: [0, 8, 0] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                >
                  <div className="flex items-start gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                      <FlaskConical className="w-4 h-4 text-[#3B82F6]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[14px] text-[#0B132B]">
                        Formulation
                      </h4>
                    </div>
                  </div>
                  <GsapTextReveal as="p" variant="subheading" className="text-[11px] text-[#4A5568] leading-relaxed lg:ml-11">Product development & sampling with precision.</GsapTextReveal>
                  {/* Connector dot (Desktop only) */}
                  <div className="hidden lg:flex absolute top-[30%] -right-2 -translate-y-1/2 w-4 h-4 rounded-full bg-blue-100 items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#3B82F6]" />
                  </div>
                </motion.div>

                {/* 3. Compliance (Middle Right) */}
                <motion.div
                  className="relative lg:absolute lg:top-[220px] lg:right-[10px] w-full lg:w-[210px] bg-white rounded-[20px] p-4 shadow-[0_15px_40px_rgba(0,0,0,0.06)] border border-slate-100 z-20"
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 5.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                  }}
                >
                  <div className="flex items-start gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-4 h-4 text-[#22C55E]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[14px] text-[#0B132B]">
                        Compliance
                      </h4>
                    </div>
                  </div>
                  <GsapTextReveal as="p" variant="subheading" className="text-[11px] text-[#4A5568] leading-relaxed lg:ml-11">Regulatory readiness & documentation done right.</GsapTextReveal>
                  {/* Connector dot (Desktop only) */}
                  <div className="hidden lg:flex absolute top-[40%] -left-2 -translate-y-1/2 w-4 h-4 rounded-full bg-green-100 items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#22C55E]" />
                  </div>
                </motion.div>

                {/* 4. Marketplace (Bottom Left) */}
                <motion.div
                  className="relative lg:absolute lg:bottom-[80px] lg:left-[110px] w-full lg:w-[210px] bg-white rounded-[20px] p-4 shadow-[0_15px_40px_rgba(0,0,0,0.06)] border border-slate-100 z-20"
                  animate={{ y: [0, 10, 0] }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                >
                  <div className="flex items-start gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center shrink-0">
                      <ShoppingBag className="w-4 h-4 text-[#F97316]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[14px] text-[#0B132B]">
                        Marketplace
                      </h4>
                    </div>
                  </div>
                  <GsapTextReveal as="p" variant="subheading" className="text-[11px] text-[#4A5568] leading-relaxed lg:ml-11">Listing, content, and distribution that convert.</GsapTextReveal>
                  {/* Connector dot (Desktop only) */}
                  <div className="hidden lg:flex absolute -top-2 right-[20%] w-4 h-4 rounded-full bg-orange-100 items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#F97316]" />
                  </div>
                </motion.div>

                {/* 5. Growth (Bottom Right) */}
                <motion.div
                  className="relative lg:absolute lg:bottom-[70px] lg:right-[70px] w-full lg:w-[210px] bg-white rounded-[20px] p-4 shadow-[0_15px_40px_rgba(0,0,0,0.06)] border border-slate-100 z-20"
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 5.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.5,
                  }}
                >
                  <div className="flex items-start gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center shrink-0">
                      <TrendingUp className="w-4 h-4 text-[#9D4EDD]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[14px] text-[#0B132B]">
                        Growth
                      </h4>
                    </div>
                  </div>
                  <GsapTextReveal as="p" variant="subheading" className="text-[11px] text-[#4A5568] leading-relaxed lg:ml-11">advanced growth systems to scale your brand.</GsapTextReveal>
                  {/* Connector dot (Desktop only) */}
                  <div className="hidden lg:flex absolute -top-2 left-[20%] w-4 h-4 rounded-full bg-purple-100 items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#9D4EDD]" />
                  </div>
                </motion.div>
              </div>

              {/* Subtle floating background dots (Desktop only) */}
              <div className="hidden lg:block absolute inset-0 pointer-events-none z-0">
                {[
                  { w: 6, h: 6, t: 25, l: 20, d: 3.2 },
                  { w: 4, h: 4, t: 75, l: 30, d: 4.5 },
                  { w: 7, h: 7, t: 15, l: 75, d: 5.1 },
                  { w: 5, h: 5, t: 85, l: 80, d: 3.8 },
                  { w: 4, h: 4, t: 50, l: 15, d: 5.5 },
                  { w: 6, h: 6, t: 40, l: 85, d: 4.2 },
                ].map((dot, i) => (
                  <div
                    key={i}
                    className={`absolute rounded-full ${i % 2 === 0 ? "bg-[#4A3AFF]/30" : "bg-[#9D4EDD]/30"}`}
                    style={{
                      width: `${dot.w}px`,
                      height: `${dot.h}px`,
                      top: `${dot.t}%`,
                      left: `${dot.l}%`,
                      animation: `pulse ${dot.d}s infinite alternate`,
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Who We Are */}
      <section className="py-24 px-6 relative bg-white overflow-hidden">
        {/* Subtle background details */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-50/30 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-[1320px] mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 md:text-center max-w-3xl md:mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 mb-6">
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
              <span className="text-xs font-bold tracking-wider text-indigo-600 uppercase">
                Who We Are
              </span>
            </div>
            <GsapTextReveal as="h2" variant="heading" className="text-4xl lg:text-5xl font-extrabold text-[#0B132B] leading-[1.1] tracking-tight mb-6">India’s Premier <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">
                End-to-End
              </span>{" "}
              Launch Partner.</GsapTextReveal>
            <GsapTextReveal as="p" variant="subheading" className="text-lg lg:text-xl text-slate-600 leading-relaxed font-medium">We specialize in building Perfume, Ayurveda, Cosmetics,
              Nutraceuticals and modern D2C brands. We connect the most critical
              parts of a product launch into one clear, actionable roadmap.</GsapTextReveal>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: "End-to-End Launch",
                desc: "From product direction and formulation, to packaging, compliance, and growth—we architect complete ecosystems.",
                icon: Target,
                color: "text-blue-600",
                bg: "bg-blue-50",
                border: "group-hover:border-blue-200",
                delay: 0,
              },
              {
                title: "Category Strategy",
                desc: "Data-driven insights for niche domination. We position your brand where it can win and scale rapidly.",
                icon: TrendingUp,
                color: "text-indigo-600",
                bg: "bg-indigo-50",
                border: "group-hover:border-indigo-200",
                delay: 0.1,
              },
              {
                title: "advanced Planning",
                desc: "Smart logistics, predictive forecasting, and optimized marketplace listings powered by cutting-edge AI.",
                icon: Sparkles,
                color: "text-purple-600",
                bg: "bg-purple-50",
                border: "group-hover:border-purple-200",
                delay: 0.2,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: item.delay,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`group relative bg-slate-50 hover:bg-white rounded-3xl p-8 lg:p-10 border border-slate-100 ${item.border} transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] overflow-hidden`}
              >
                <div
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white to-transparent opacity-50 rounded-bl-full pointer-events-none transition-transform duration-700 group-hover:scale-150`}
                />
                <div
                  className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center mb-6 relative z-10 transition-transform duration-500 group-hover:-translate-y-1`}
                >
                  <item.icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 relative z-10">
                  {item.title}
                </h3>
                <GsapTextReveal as="p" variant="subheading" className="text-slate-600 leading-relaxed relative z-10">{item.desc}</GsapTextReveal>

                {/* Decorative dots */}
                <div className="absolute bottom-6 right-6 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Why LaunchVeda Exists */}
      <section className="py-24 px-6 relative bg-[#0B132B] overflow-hidden text-white w-full">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-[1320px] mx-auto relative z-10">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6">
                <span className="text-xs font-bold tracking-wider text-indigo-400 uppercase">
                  The Problem
                </span>
              </div>
              <GsapTextReveal as="h2" variant="heading" className="text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight">Why LaunchVeda Exists</GsapTextReveal>
              <GsapTextReveal as="p" variant="subheading" className="text-lg lg:text-xl text-slate-400 leading-relaxed font-medium">Most founders do not fail because their idea is bad. They fail
                because the launch process is scattered.</GsapTextReveal>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Too Many Vendors",
                text: "Founders often deal with separate vendors for formulation, manufacturing, packaging, website and marketing.",
                icon: Users,
                delay: 0.1,
              },
              {
                title: "No Clear Direction",
                text: "Without category strategy, pricing logic and positioning, even good products struggle to enter the market.",
                icon: Map,
                delay: 0.2,
              },
              {
                title: "Compliance Chaos",
                text: "Labels, documentation, licenses and marketplace requirements need structured planning from day one.",
                icon: AlertCircle,
                delay: 0.3,
              },
              {
                title: "Weak Execution",
                text: "A product needs website, marketplace, social media, content, ads and sales systems to grow after launch.",
                icon: Activity,
                delay: 0.4,
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: card.delay }}
                className="group relative bg-slate-900/50 backdrop-blur-md p-8 rounded-3xl border border-slate-800 hover:border-indigo-500/50 transition-colors overflow-hidden flex flex-col"
              >
                {/* Hover Glow */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-indigo-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-6 text-indigo-400 group-hover:scale-110 group-hover:text-indigo-300 group-hover:bg-indigo-500/20 transition-all duration-300">
                  <card.icon className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-200 transition-colors">
                  {card.title}
                </h3>
                <GsapTextReveal as="p" variant="subheading" className="text-slate-400 leading-relaxed text-sm group-hover:text-slate-300 transition-colors flex-1">{card.text}</GsapTextReveal>

                {/* Bottom line accent */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-1 group-hover:translate-y-0" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Ecosystem */}
      <section className="py-24 bg-[#FAFBFC] relative overflow-hidden flex justify-center w-full">
        <div className="max-w-[1280px] w-full px-6 relative z-10">
          <div className="text-center mb-16 max-w-2xl mx-auto px-6">
            <GsapTextReveal as="h2" variant="heading" className="text-4xl md:text-5xl font-extrabold text-[#0B132B] mb-4 tracking-tight leading-tight">One Launch System.
              <br />
              Every Step Connected.</GsapTextReveal>
            <GsapTextReveal as="p" variant="subheading" className="text-lg text-[#4A5568] leading-relaxed mb-6 font-medium">We bring product, brand, compliance and growth teams together
              <br className="hidden md:block" /> so founders can launch with
              clarity.</GsapTextReveal>
            <Link
              href="/services"
              className="text-[#6366F1] font-semibold hover:text-[#4F46E5] transition-colors inline-flex items-center gap-1"
            >
              View all our services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="relative w-full max-w-[1100px] mx-auto h-auto lg:h-[600px] flex flex-col lg:block mt-10">
            {/* Desktop Connector SVG */}
            <svg
              className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-0"
              style={{ filter: "drop-shadow(0px 1px 2px rgba(0,0,0,0.02))" }}
            >
              <defs>
                <linearGradient
                  id="grad-purple"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="transparent" />
                  <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
                <linearGradient
                  id="grad-green"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="transparent" />
                  <stop offset="100%" stopColor="#22c55e" />
                </linearGradient>
                <linearGradient
                  id="grad-blue"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="transparent" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
                <linearGradient
                  id="grad-orange"
                  x1="100%"
                  y1="0%"
                  x2="0%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="transparent" />
                  <stop offset="100%" stopColor="#f97316" />
                </linearGradient>
                <linearGradient
                  id="grad-teal"
                  x1="100%"
                  y1="0%"
                  x2="0%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="transparent" />
                  <stop offset="100%" stopColor="#14b8a6" />
                </linearGradient>
                <linearGradient
                  id="grad-pink"
                  x1="100%"
                  y1="0%"
                  x2="0%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="transparent" />
                  <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
              </defs>

              {/* Left Lines */}
              <path
                d="M280,100 C400,100 420,300 500,300"
                fill="none"
                stroke="#E2E8F0"
                strokeWidth="1.5"
              />
              <path
                d="M280,300 C400,300 420,300 500,300"
                fill="none"
                stroke="#E2E8F0"
                strokeWidth="1.5"
              />
              <path
                d="M280,500 C400,500 420,300 500,300"
                fill="none"
                stroke="#E2E8F0"
                strokeWidth="1.5"
              />

              {/* Left Lines (Animated Pulse) */}
              <motion.path
                d="M280,100 C400,100 420,300 500,300"
                fill="none"
                stroke="url(#grad-purple)"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0.1, pathSpacing: 1, pathOffset: 0 }}
                animate={{ pathOffset: [0, 1] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 0,
                }}
              />
              <motion.path
                d="M280,300 C400,300 420,300 500,300"
                fill="none"
                stroke="url(#grad-green)"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0.1, pathSpacing: 1, pathOffset: 0 }}
                animate={{ pathOffset: [0, 1] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 0.8,
                }}
              />
              <motion.path
                d="M280,500 C400,500 420,300 500,300"
                fill="none"
                stroke="url(#grad-blue)"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0.1, pathSpacing: 1, pathOffset: 0 }}
                animate={{ pathOffset: [0, 1] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 1.6,
                }}
              />

              {/* Right Lines */}
              <path
                d="M820,100 C700,100 680,300 600,300"
                fill="none"
                stroke="#E2E8F0"
                strokeWidth="1.5"
              />
              <path
                d="M820,300 C700,300 680,300 600,300"
                fill="none"
                stroke="#E2E8F0"
                strokeWidth="1.5"
              />
              <path
                d="M820,500 C700,500 680,300 600,300"
                fill="none"
                stroke="#E2E8F0"
                strokeWidth="1.5"
              />

              {/* Right Lines (Animated Pulse) */}
              <motion.path
                d="M820,100 C700,100 680,300 600,300"
                fill="none"
                stroke="url(#grad-orange)"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0.1, pathSpacing: 1, pathOffset: 0 }}
                animate={{ pathOffset: [0, 1] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 0.4,
                }}
              />
              <motion.path
                d="M820,300 C700,300 680,300 600,300"
                fill="none"
                stroke="url(#grad-teal)"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0.1, pathSpacing: 1, pathOffset: 0 }}
                animate={{ pathOffset: [0, 1] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 1.2,
                }}
              />
              <motion.path
                d="M820,500 C700,500 680,300 600,300"
                fill="none"
                stroke="url(#grad-pink)"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0.1, pathSpacing: 1, pathOffset: 0 }}
                animate={{ pathOffset: [0, 1] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 2.0,
                }}
              />
            </svg>

            {/* Central Orb */}
            <div className="relative lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 z-30 w-[240px] h-[240px] mx-auto mb-12 lg:mb-0 rounded-full bg-white shadow-[0_10px_50px_rgba(99,102,241,0.15)] flex flex-col items-center justify-center text-center p-6 border-4 border-white before:absolute before:inset-[-20px] before:rounded-full before:border-[1px] before:border-[#EEF2FF] before:-z-10 after:absolute after:inset-[-40px] after:rounded-full after:border-[1px] after:border-[#F8FAFC] after:-z-20">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center mb-3">
                <span className="font-extrabold text-[24px] tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-[#6366F1] to-[#A855F7]">
                  Lv
                </span>
              </div>
              <span className="font-bold text-[22px] text-[#0B132B] leading-tight">
                LaunchVeda
              </span>
              <span className="text-[16px] text-[#6366F1] font-bold mt-1">
                Core
              </span>
            </div>

            {/* Cards Container (Grid on mobile/tablet, absolute on desktop) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:block w-full z-20 relative">
              {/* 1. Product Development */}
              <div className="relative lg:absolute lg:top-[50px] lg:left-0 w-full lg:w-[320px] bg-white rounded-2xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#F1F5F9] flex items-center gap-4 group hover:shadow-md transition-shadow">
                <div className="w-14 h-14 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center shrink-0">
                  <FlaskConical className="w-6 h-6 text-purple-500" />
                </div>
                <div>
                  <h4 className="font-bold text-[15px] text-[#0B132B] mb-1">
                    Product Development
                  </h4>
                  <p className="text-[13px] text-[#64748B] leading-snug">
                    Formulation, sampling and manufacturer direction.
                  </p>
                </div>
                {/* Dot Desktop */}
                <div className="hidden lg:flex absolute top-1/2 -right-3 -translate-y-1/2 w-6 h-6 rounded-full bg-white items-center justify-center border border-[#F1F5F9] shadow-sm">
                  <div
                    className="absolute inset-0 rounded-full bg-purple-400/40 animate-ping"
                    style={{ animationDuration: "3s" }}
                  />
                  <div className="w-2.5 h-2.5 rounded-full bg-purple-500 relative z-10" />
                </div>
              </div>

              {/* 2. Packaging & Compliance */}
              <div className="relative lg:absolute lg:top-[250px] lg:left-0 w-full lg:w-[320px] bg-white rounded-2xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#F1F5F9] flex items-center gap-4 group hover:shadow-md transition-shadow">
                <div className="w-14 h-14 rounded-xl bg-green-50 border border-green-100 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <h4 className="font-bold text-[15px] text-[#0B132B] mb-1">
                    Packaging & Compliance
                  </h4>
                  <p className="text-[13px] text-[#64748B] leading-snug">
                    Label guidance, documentation and marketplace readiness.
                  </p>
                </div>
                {/* Dot Desktop */}
                <div className="hidden lg:flex absolute top-1/2 -right-3 -translate-y-1/2 w-6 h-6 rounded-full bg-white items-center justify-center border border-[#F1F5F9] shadow-sm">
                  <div
                    className="absolute inset-0 rounded-full bg-green-400/40 animate-ping"
                    style={{ animationDuration: "3s", animationDelay: "0.5s" }}
                  />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500 relative z-10" />
                </div>
              </div>

              {/* 3. Brand & Website */}
              <div className="relative lg:absolute lg:top-[450px] lg:left-0 w-full lg:w-[320px] bg-white rounded-2xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#F1F5F9] flex items-center gap-4 group hover:shadow-md transition-shadow">
                <div className="w-14 h-14 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                  <Map className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h4 className="font-bold text-[15px] text-[#0B132B] mb-1">
                    Brand & Website
                  </h4>
                  <p className="text-[13px] text-[#64748B] leading-snug">
                    Naming, positioning, identity and conversion-focused
                    website.
                  </p>
                </div>
                {/* Dot Desktop */}
                <div className="hidden lg:flex absolute top-1/2 -right-3 -translate-y-1/2 w-6 h-6 rounded-full bg-white items-center justify-center border border-[#F1F5F9] shadow-sm">
                  <div
                    className="absolute inset-0 rounded-full bg-blue-400/40 animate-ping"
                    style={{ animationDuration: "3s", animationDelay: "1s" }}
                  />
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-500 relative z-10" />
                </div>
              </div>

              {/* 4. Marketplace Launch (Right 1) */}
              <div className="relative lg:absolute lg:top-[50px] lg:right-0 w-full lg:w-[320px] bg-white rounded-2xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#F1F5F9] flex items-center gap-4 group hover:shadow-md transition-shadow">
                {/* Dot Desktop */}
                <div className="hidden lg:flex absolute top-1/2 -left-3 -translate-y-1/2 w-6 h-6 rounded-full bg-white items-center justify-center border border-[#F1F5F9] shadow-sm z-10">
                  <div
                    className="absolute inset-0 rounded-full bg-orange-400/40 animate-ping"
                    style={{ animationDuration: "3s", animationDelay: "1.5s" }}
                  />
                  <div className="w-2.5 h-2.5 rounded-full bg-orange-500 relative z-10" />
                </div>
                <div className="w-14 h-14 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center shrink-0">
                  <ShoppingBag className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h4 className="font-bold text-[15px] text-[#0B132B] mb-1">
                    Marketplace Launch
                  </h4>
                  <p className="text-[13px] text-[#64748B] leading-snug">
                    Amazon, Flipkart, Nykaa, Tata 1mg and quick commerce
                    readiness.
                  </p>
                </div>
              </div>

              {/* 5. Growth System (Right 2) */}
              <div className="relative lg:absolute lg:top-[250px] lg:right-0 w-full lg:w-[320px] bg-white rounded-2xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#F1F5F9] flex items-center gap-4 group hover:shadow-md transition-shadow">
                {/* Dot Desktop */}
                <div className="hidden lg:flex absolute top-1/2 -left-3 -translate-y-1/2 w-6 h-6 rounded-full bg-white items-center justify-center border border-[#F1F5F9] shadow-sm z-10">
                  <div
                    className="absolute inset-0 rounded-full bg-teal-400/40 animate-ping"
                    style={{ animationDuration: "3s", animationDelay: "2s" }}
                  />
                  <div className="w-2.5 h-2.5 rounded-full bg-teal-500 relative z-10" />
                </div>
                <div className="w-14 h-14 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center shrink-0">
                  <Activity className="w-6 h-6 text-teal-500" />
                </div>
                <div>
                  <h4 className="font-bold text-[15px] text-[#0B132B] mb-1">
                    Growth System
                  </h4>
                  <p className="text-[13px] text-[#64748B] leading-snug">
                    Social media, ads, influencer, content and automation.
                  </p>
                </div>
              </div>

              {/* 6. advanced Planning (Right 3) */}
              <div className="relative lg:absolute lg:top-[450px] lg:right-0 w-full lg:w-[320px] bg-white rounded-2xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#F1F5F9] flex items-center gap-4 group hover:shadow-md transition-shadow">
                {/* Dot Desktop */}
                <div className="hidden lg:flex absolute top-1/2 -left-3 -translate-y-1/2 w-6 h-6 rounded-full bg-white items-center justify-center border border-[#F1F5F9] shadow-sm z-10">
                  <div
                    className="absolute inset-0 rounded-full bg-pink-400/40 animate-ping"
                    style={{ animationDuration: "3s", animationDelay: "2.5s" }}
                  />
                  <div className="w-2.5 h-2.5 rounded-full bg-pink-500 relative z-10" />
                </div>
                <div className="w-14 h-14 rounded-xl bg-pink-50 border border-pink-100 flex items-center justify-center shrink-0">
                  <Sparkles className="w-6 h-6 text-pink-500" />
                </div>
                <div>
                  <h4 className="font-bold text-[15px] text-[#0B132B] mb-1">
                    advanced Planning
                  </h4>
                  <p className="text-[13px] text-[#64748B] leading-snug">
                    Data-driven insights and intelligent planning for smarter
                    decisions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Pill Strip */}
          <div className="mt-20 lg:mt-16 w-full max-w-[800px] mx-auto bg-white rounded-full p-4 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#F1F5F9] flex flex-col md:flex-row items-center justify-between px-6 lg:px-12 gap-4 md:gap-0">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center">
                <Target className="w-4 h-4 text-purple-600" />
              </div>
              <span className="font-medium text-[14px] text-[#4A5568]">
                Connected Strategy.
              </span>
            </div>
            <div className="hidden md:block w-px h-8 bg-slate-100" />
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center">
                <Settings className="w-4 h-4 text-indigo-600" />
              </div>
              <span className="font-medium text-[14px] text-[#4A5568]">
                Connected Execution.
              </span>
            </div>
            <div className="hidden md:block w-px h-8 bg-slate-100" />
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-blue-600" />
              </div>
              <span className="font-medium text-[14px] text-[#4A5568]">
                Connected Growth.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Our Approach */}
      <section className="py-32 px-6 relative bg-white overflow-hidden w-full">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

        <div className="max-w-[1320px] mx-auto relative z-10">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-xs font-bold tracking-wider text-blue-600 uppercase">
                Process
              </span>
            </div>
            <GsapTextReveal as="h2" variant="heading" className="text-4xl md:text-5xl font-extrabold text-[#0B132B] tracking-tight mb-6">How We Work</GsapTextReveal>
            <GsapTextReveal as="p" variant="subheading" className="text-lg text-slate-600 font-medium">A structured, step-by-step approach to taking your product from
              idea to a high-growth brand.</GsapTextReveal>
          </div>

          <div className="grid md:grid-cols-5 gap-4 lg:gap-6 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-[88px] left-10 right-10 h-0.5 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 -z-10" />

            {[
              {
                step: "01",
                title: "Understand Your Idea",
                text: "We study your category, audience, product vision, budget and launch goals.",
                color: "from-blue-500 to-indigo-500",
                bg: "bg-blue-50",
                textCol: "text-blue-600",
              },
              {
                step: "02",
                title: "Build the Roadmap",
                text: "We define the product direction, formulation path, packaging scope, and go-to-market plan.",
                color: "from-indigo-500 to-violet-500",
                bg: "bg-indigo-50",
                textCol: "text-indigo-600",
              },
              {
                step: "03",
                title: "Connect Partners",
                text: "We help with manufacturer selection, sampling direction, packaging and documentation.",
                color: "from-violet-500 to-purple-500",
                bg: "bg-violet-50",
                textCol: "text-violet-600",
              },
              {
                step: "04",
                title: "Build Brand System",
                text: "We create positioning, identity, website, content direction and marketplace readiness.",
                color: "from-purple-500 to-fuchsia-500",
                bg: "bg-purple-50",
                textCol: "text-purple-600",
              },
              {
                step: "05",
                title: "Launch & Grow",
                text: "We support the launch with social media, marketplace, performance marketing, and AI systems.",
                color: "from-fuchsia-500 to-pink-500",
                bg: "bg-fuchsia-50",
                textCol: "text-fuchsia-600",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative bg-white p-6 rounded-3xl border border-slate-100 hover:border-slate-200 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 flex flex-col items-center text-center"
              >
                <div
                  className={`w-16 h-16 rounded-2xl ${item.bg} flex items-center justify-center mb-6 relative group-hover:-translate-y-2 transition-transform duration-500`}
                >
                  <span className={`text-xl font-extrabold ${item.textCol}`}>
                    {item.step}
                  </span>
                  {/* Decorative dot */}
                  <div
                    className={`absolute -top-1 -right-1 w-3 h-3 rounded-full bg-gradient-to-r ${item.color} border-2 border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  />
                </div>
                <h3 className="font-bold text-[#0B132B] mb-3 text-lg leading-snug">
                  {item.title}
                </h3>
                <GsapTextReveal as="p" variant="subheading" className="text-sm text-slate-500 leading-relaxed font-medium">{item.text}</GsapTextReveal>

                {/* Hover gradient line */}
                <div
                  className={`absolute bottom-0 left-10 right-10 h-1 rounded-t-full bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Categories We Support */}
      <section className="py-32 bg-[#0B132B] text-white px-6 relative overflow-hidden w-full">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />

        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-[120px] pointer-events-none transform translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-blue-500/10 to-teal-500/10 rounded-full blur-[100px] pointer-events-none transform -translate-x-1/3 translate-y-1/3" />

        <div className="max-w-[1320px] mx-auto w-full relative z-10">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/50 border border-slate-700 mb-6 backdrop-blur-sm">
                <span className="text-xs font-bold tracking-wider text-slate-300 uppercase">
                  Specialized Categories
                </span>
              </div>
              <GsapTextReveal as="h2" variant="heading" className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">Built for High-Growth
                <br className="hidden md:block" /> Product Categories</GsapTextReveal>
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Perfume",
                icon: Sparkles,
                desc: "Fragrance direction, bottle planning, packaging, brand story and marketplace launch.",
                link: "/perfume-brand-launch",
                gradient: "from-indigo-500 to-purple-500",
                iconColor: "text-indigo-400",
                hoverBg: "group-hover:bg-indigo-500/10",
                hoverBorder: "group-hover:border-indigo-500/30",
              },
              {
                title: "Ayurveda",
                icon: Leaf,
                desc: "Product category planning, formulation guidance, manufacturer support and compliance.",
                link: "/ayurveda-brand-launch",
                gradient: "from-emerald-500 to-teal-500",
                iconColor: "text-emerald-400",
                hoverBg: "group-hover:bg-emerald-500/10",
                hoverBorder: "group-hover:border-emerald-500/30",
              },
              {
                title: "Cosmetics",
                icon: Droplets,
                desc: "Skincare and beauty brand launch with formulation, packaging, compliance and D2C growth.",
                link: "/cosmetic-brand-launch",
                gradient: "from-pink-500 to-rose-500",
                iconColor: "text-pink-400",
                hoverBg: "group-hover:bg-pink-500/10",
                hoverBorder: "group-hover:border-pink-500/30",
              },
              {
                title: "Nutraceuticals",
                icon: Box,
                desc: "Supplement and wellness product launch with formulation, taste, FSSAI and marketplace readiness.",
                link: "/nutraceutical-brand-launch",
                gradient: "from-orange-500 to-amber-500",
                iconColor: "text-orange-400",
                hoverBg: "group-hover:bg-orange-500/10",
                hoverBorder: "group-hover:border-orange-500/30",
              },
            ].map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link href={cat.link} className="block h-full">
                  <div
                    className={`group bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 transition-all duration-500 h-full flex flex-col relative overflow-hidden ${cat.hoverBg} ${cat.hoverBorder}`}
                  >
                    {/* Hover Glow Effect */}
                    <div
                      className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${cat.gradient} blur-[50px] opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                    />

                    <div
                      className={`w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-inner border border-slate-700/50 relative z-10`}
                    >
                      <cat.icon className={`w-7 h-7 ${cat.iconColor}`} />
                    </div>

                    <h3 className="text-2xl font-bold mb-3 text-white relative z-10">
                      {cat.title}
                    </h3>
                    <GsapTextReveal as="p" variant="subheading" className="text-slate-400 text-sm leading-relaxed flex-grow relative z-10 font-medium group-hover:text-slate-300 transition-colors">{cat.desc}</GsapTextReveal>

                    <div
                      className={`mt-8 flex items-center text-sm font-bold ${cat.iconColor} relative z-10`}
                    >
                      <span className="relative overflow-hidden">
                        <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                          Explore Category
                        </span>
                        <span className="block absolute top-0 left-0 translate-y-full transition-transform duration-300 group-hover:translate-y-0 text-white">
                          Explore Category
                        </span>
                      </span>
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-2 group-hover:text-white" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Why Founders Choose LaunchVeda */}
      <section className="py-32 px-6 bg-[#FAFBFC] w-full relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

        <div className="max-w-[1320px] mx-auto w-full relative z-10">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <GsapTextReveal as="h2" variant="heading" className="text-4xl md:text-5xl font-extrabold text-[#0B132B] tracking-tight mb-6">Why Founders Choose LaunchVeda</GsapTextReveal>
              <GsapTextReveal as="p" variant="subheading" className="text-lg text-slate-600 font-medium">Everything you need to launch successfully, consolidated into
                one expert team.</GsapTextReveal>
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                text: "One structured launch roadmap",
                icon: Target,
                color: "text-blue-600",
                bg: "bg-blue-50",
              },
              {
                text: "Category-specific guidance",
                icon: Map,
                color: "text-indigo-600",
                bg: "bg-indigo-50",
              },
              {
                text: "Manufacturer & formulation support",
                icon: FlaskConical,
                color: "text-purple-600",
                bg: "bg-purple-50",
              },
              {
                text: "Compliance & label direction",
                icon: ShieldCheck,
                color: "text-green-600",
                bg: "bg-green-50",
              },
              {
                text: "Marketplace launch readiness",
                icon: ShoppingBag,
                color: "text-orange-600",
                bg: "bg-orange-50",
              },
              {
                text: "advanced growth planning",
                icon: Sparkles,
                color: "text-pink-600",
                bg: "bg-pink-50",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group bg-white p-6 rounded-2xl border border-slate-100 flex items-center gap-5 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:border-slate-200 transition-all duration-300"
              >
                <div
                  className={`w-12 h-12 rounded-xl ${feature.bg} flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}
                >
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <span className="font-bold text-slate-800 text-lg leading-tight">
                  {feature.text}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: FAQ */}
      <section className="py-24 px-6 max-w-[800px] mx-auto w-full">
        <div className="text-center mb-12">
          <GsapTextReveal as="h2" variant="heading" className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">About LaunchVeda — FAQs</GsapTextReveal>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-slate-200 rounded-2xl bg-white overflow-hidden shadow-sm"
            >
              <div style={{ display: "none" }} className="faq-seo-metadata" data-question={faq.question} data-answer={faq.answer} />
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="font-bold text-slate-900 pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 transition-transform ${openFaq === i ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {openFaq === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 pt-0 text-slate-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* Section 9: Final Internal CTA */}
      <section className="py-20 px-6 max-w-[1200px] mx-auto w-full mb-12">
        <div className="bg-gradient-to-br from-indigo-900 via-[#121e50] to-blue-900 rounded-[32px] p-10 md:p-16 text-center border border-indigo-800 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/20 blur-[80px] rounded-full pointer-events-none" />
          <div className="relative z-10">
            <GsapTextReveal as="h2" variant="heading" className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">Ready to Build Your Launch Roadmap?</GsapTextReveal>
            <p className="text-indigo-100/80 mb-8 max-w-2xl mx-auto text-lg">
              Share your product idea and our team will help you understand the
              next steps for product, compliance, brand and growth.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex h-14 px-8 rounded-full font-bold text-[#121e50] bg-white hover:bg-slate-50 items-center justify-center gap-2 transition-all shadow-lg hover:-translate-y-0.5"
              >
                Build My Launch Roadmap
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-[#061033]">
        <LaunchFooterSection />
      </div>
    </div>
  );
}
