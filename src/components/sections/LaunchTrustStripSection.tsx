"use client";

import React from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  Layers,
  Target,
  Sparkles,
  Store
} from "lucide-react";
import GsapTextReveal from "../ui/GsapTextReveal";

export const LaunchTrustStripSection: React.FC = () => {
  // Container motion presets
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 18,
        staggerChildren: 0.1,
        delayChildren: 0.15
      }
    }
  } as const;

  const textVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  } as const;

  const chipVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 120, damping: 15 }
    }
  } as const;

  const chips = [
    {
      text: "End-to-End Launch",
      icon: <Layers className="w-3.5 h-3.5" />,
      colorClass: "text-blue-600 bg-blue-50/70 border-blue-100/50 hover:bg-blue-100/90 hover:border-blue-300",
      glowBg: "group-hover:bg-blue-400/20"
    },
    {
      text: "Category-Specific Strategy",
      icon: <Target className="w-3.5 h-3.5" />,
      colorClass: "text-emerald-600 bg-emerald-50/70 border-emerald-100/50 hover:bg-emerald-100/90 hover:border-emerald-300",
      glowBg: "group-hover:bg-emerald-400/20"
    },
    {
      text: "Strategic Launch Planning",
      icon: <Sparkles className="w-3.5 h-3.5" />,
      colorClass: "text-purple-600 bg-purple-50/70 border-purple-100/50 hover:bg-purple-100/90 hover:border-purple-300",
      glowBg: "group-hover:bg-purple-400/20"
    },
    {
      text: "Marketplace Ready",
      icon: <Store className="w-3.5 h-3.5" />,
      colorClass: "text-pink-600 bg-pink-50/70 border-pink-100/50 hover:bg-pink-100/90 hover:border-pink-300",
      glowBg: "group-hover:bg-pink-400/20"
    }
  ];

  return (
    <section
      id="launch-trust-strip"
      className="relative w-full py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F8FAFC] via-[#F1F5F9] to-[#f1f5f9] overflow-hidden border-t border-slate-100/60 max-sm:hidden"
    >
      {/* Background soft premium accent lights */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute -top-12 left-1/4 w-[350px] h-[150px] rounded-full bg-blue-200/20 blur-[80px]" />
        <div className="absolute -bottom-12 right-1/4 w-[350px] h-[150px] rounded-full bg-purple-200/20 blur-[80px]" />
      </div>

      <div className="relative w-full max-w-[1380px] mx-auto z-10">
        {/* FloatingRounded Glass Bar */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="w-full rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] border border-white/90 bg-white/70 backdrop-blur-2xl p-6 sm:p-8 lg:px-12 lg:py-10 shadow-[0_20px_50px_-12px_rgba(15,23,42,0.08),inset_0_1px_0_rgba(255,255,255,1)] grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center hover:shadow-[0_30px_60px_-15px_rgba(15,23,42,0.12)] hover:bg-white/80 transition-all duration-700"
        >
          {/* LEFT: Core Headlines */}
          <div className="min-w-0 text-center lg:text-left w-full">
            <GsapTextReveal
              as="h3"
              variant="heading"
              className="text-[#0F172A] font-[900] text-xl sm:text-2xl md:text-3xl lg:text-[28px] xl:text-[32px] tracking-tight leading-tight mb-2"
            >
              One Launch System. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">Zero Confusion.</span>
            </GsapTextReveal>
            <GsapTextReveal
              as="p"
              variant="subheading"
              className="text-slate-500 font-semibold text-[13px] sm:text-sm md:text-[15px] xl:text-[15.5px] leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              Product, brand, compliance, marketplace and growth — connected in one clear roadmap.
            </GsapTextReveal>
          </div>

          {/* MIDDLE: Interactive Trust Chips Grid - 2x2 */}
          <div className="min-w-0 grid grid-cols-2 gap-2 sm:gap-3 w-full">
            {chips.map((chip, index) => (
              <motion.div
                key={chip.text}
                variants={chipVariants}
                whileHover={{ y: -2.5, scale: 1.015 }}
                className={`inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-2 sm:py-2.5 rounded-lg sm:rounded-xl border text-[11px] sm:text-xs xl:text-[12.5px] font-[800] transition-all cursor-pointer group tracking-tight ${chip.colorClass} shadow-[0_1px_2px_rgba(0,0,0,0.015)]`}
              >
                {/* Micro-interactive Icon Frame */}
                <div className={`relative w-5 h-5 sm:w-6 sm:h-6 rounded-md sm:rounded-lg bg-white/90 border border-slate-100 flex items-center justify-center transition-colors duration-200 ${chip.glowBg}`}>
                  {chip.icon}
                </div>
                <span>{chip.text}</span>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default LaunchTrustStripSection;
