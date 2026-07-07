"use client";

import React from "react";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import GsapTextReveal from "./GsapTextReveal";

export const PhysicalBrandBanner: React.FC = () => {
  return (
    <section className="relative w-full py-16 bg-[#f8fafc]/50 overflow-hidden px-5 sm:px-12 max-sm:hidden">
      <div className="mx-auto max-w-[1240px] relative">

        {/* Main Card with beautiful moving / rotating premium gradient */}
        <div className="relative rounded-[40px] p-8 sm:p-12 lg:p-16 overflow-hidden border border-slate-200/40 shadow-xl group flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">

          {/* Base white background layer */}
          <div className="absolute inset-0 bg-white z-0" />

          {/* Smooth, high-performance rotating gradient rectangle */}
          <motion.div
            className="absolute z-0 pointer-events-none origin-center opacity-95"
            style={{
              width: "250%",
              height: "250%",
              top: "-75%",
              left: "-75%",
              background: "linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(237,219,255,0.95) 50%, rgba(109,40,217,0.65) 75%, rgba(3,105,161,0.6) 100%)",
            }}
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Left Side: Content Column */}
          <div className="relative z-10 max-w-[680px] space-y-6 text-left">

            {/* Eyebrow Badge exactly as shown in the image */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-200 bg-white/70 backdrop-blur-md shadow-sm">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <GsapTextReveal
                as="span"
                variant="label"
                className="text-[10px] font-black tracking-widest text-slate-700 uppercase"
              >
                Scale Formation Strategy
              </GsapTextReveal>
            </div>

            {/* Main Heading */}
            <GsapTextReveal
              as="h2"
              variant="heading"
              className="text-slate-900 font-[900] text-3xl sm:text-4xl md:text-[42px] leading-[1.15] tracking-tight"
            >
              Ready to construct your real physical brand?
            </GsapTextReveal>

            {/* Description Paragraph */}
            <GsapTextReveal
              as="p"
              variant="subheading"
              className="text-slate-600/90 font-medium text-[14px] sm:text-[15px] leading-relaxed"
            >
              A complete launch roadmap covering idea validation, market research, formulation support, packaging, compliance, website, marketplace listing, and advanced launch marketing.
            </GsapTextReveal>

            {/* Bottom Bullet List */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 pt-2">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 stroke-[2.5]" />
                <span className="text-[13px] font-extrabold text-slate-700">
                  Lab clearance guaranteed
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 stroke-[2.5]" />
                <span className="text-[13px] font-extrabold text-slate-700">
                  Trade-mark execution handled
                </span>
              </div>
            </div>
          </div>

          {/* Right Side: Interactive UI/Badge & CTA Column */}
          <div className="relative z-10 flex flex-col sm:flex-row lg:flex-col items-stretch sm:items-center lg:items-stretch gap-5 lg:gap-6 lg:min-w-[320px] shrink-0">

            {/* Float Badge/Widget with shelf status */}
            <motion.div
              whileHover={{ y: -3, scale: 1.02 }}
              className="flex items-center gap-4 bg-white/85 backdrop-blur-md border border-white/60 p-4 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
            >
              <div className="w-14 h-14 rounded-2xl overflow-hidden shrink-0 shadow-inner border border-slate-100">
                <div
                  className="w-full h-full bg-gradient-to-br from-slate-300 via-slate-400 to-slate-600 relative overflow-hidden"
                  aria-hidden="true"
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-amber-200/30 to-slate-500/20" />
                  <div className="absolute inset-0 opacity-20 bg-[linear-gradient(45deg,#ffffff_1px,transparent_1px),linear-gradient(-45deg,#ffffff_1px,transparent_1px)] bg-[size:8px_8px]" />
                </div>
              </div>
              <div className="space-y-1 text-left">
                <span className="text-[9px] font-black tracking-wider text-slate-400 uppercase block">
                  SHELF INTEGRITY STATUS
                </span>
                <h4 className="text-[14px] font-[800] text-slate-800 leading-none">
                  Prestige Grade Mold
                </h4>
                <div className="flex items-center gap-1">
                  <span className="text-[10px] font-black text-emerald-600 uppercase">
                    APPROVED
                  </span>
                  <span className="text-[10px] text-emerald-500 font-bold">✓</span>
                </div>
              </div>
            </motion.div>

            {/* Premium Solid Black CTA Button */}
            <motion.button
              whileHover={{ y: -2, scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              onClick={() => {
                document.getElementById("launch-plan-form")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start"
                });
              }}
              className="h-16 px-8 rounded-full bg-[#0a0f1d] hover:bg-[#121a30] text-white font-extrabold text-[13px] sm:text-[14px] tracking-wider uppercase flex items-center justify-center gap-4 shadow-lg transition-all duration-300 cursor-pointer"
            >
              <span>Consult With Us Live</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </motion.button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PhysicalBrandBanner;
