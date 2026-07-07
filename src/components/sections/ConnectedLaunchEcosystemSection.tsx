"use client";

import React from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Rocket,
  Boxes,
  ShieldCheck,
  UserRound,
  Store,
  Sparkles,
  FlaskConical,
  Package,
  ChevronDown,
  Check,
  CheckCircle2,
  FileText,
  ClipboardList,
  Award,
  Users,
  Folder
} from "lucide-react";
import GsapTextReveal from "../ui/GsapTextReveal";

// Line with glowing particle for the absolute diagram (Desktop only)
const ConnectedLineParticle = ({ x1, y1, x2, y2, delay = 0 }: { x1: number; y1: number; x2: number; y2: number; delay?: number }) => {
  return (
    <g>
      {/* Glow path */}
      <line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        className="stroke-[#3B82F6]/10"
        strokeWidth={5}
        strokeLinecap="round"
      />
      {/* High-fidelity Vector line */}
      <motion.line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        className="stroke-[#2563EB]/40"
        strokeWidth={1.5}
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] }}
      />
      {/* Floating dot particle */}
      <motion.circle
        r={3}
        fill="#2563EB"
        className="filter drop-shadow-[0_0_6px_#3B82F6]"
        animate={{
          cx: [x1, x2],
          cy: [y1, y2],
          opacity: [0, 1, 1, 0]
        }}
        transition={{
          duration: 4.5 + ((x1 + y1) % 4) / 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </g>
  );
};

export const ConnectedLaunchEcosystemSection: React.FC = () => {
  return (
    <section
      id="connected-launch-ecosystem-section"
      className="connected-ecosystem-section"
      style={{
        background: `
          radial-gradient(circle at 50% 42%, rgba(132, 176, 255, 0.20) 0%, rgba(255,255,255,0) 34%),
          radial-gradient(circle at 18% 78%, rgba(255, 202, 122, 0.18) 0%, rgba(255,255,255,0) 28%),
          radial-gradient(circle at 82% 78%, rgba(164, 120, 255, 0.16) 0%, rgba(255,255,255,0) 30%),
          linear-gradient(135deg, #F8FBFF 0%, #EEF6FF 45%, #F7FBFF 100%)
        `
      }}
    >
      <style>{`
        .connected-ecosystem-section {
          padding-top: 56px;
          padding-bottom: 30px;
          min-height: 1180px;
          overflow: hidden;
          position: relative;
        }

        .section-container {
          max-width: 1320px;
          margin: 0 auto;
          padding-left: 40px;
          padding-right: 40px;
        }

        .heading-area {
          text-align: center;
          margin-bottom: 70px;
        }

        .ecosystem-stage-wrapper {
          width: 100%;
          display: none;
          justify-content: center;
          align-items: flex-start;
        }

        @media (min-width: 1280px) {
          .ecosystem-stage-wrapper {
            display: flex;
          }
        }

        .ecosystem-stage {
          position: relative;
          width: 1120px;
          height: 780px;
          margin: 0 auto;
        }

        .core-wrapper {
          position: absolute;
          left: 50%;
          top: 335px;
          transform: translate(-50%, -50%);
          width: 260px;
          height: 260px;
          z-index: 5;
        }

        .ring-wrapper {
          position: absolute;
          left: 50%;
          top: 335px;
          transform: translate(-50%, -50%);
          width: 520px;
          height: 520px;
          z-index: 1;
          pointer-events: none;
        }

        .ecosystem-stage .eco-category-card {
          position: absolute;
          left: 50%;
          top: 20px;
          transform: translateX(-50%);
          width: 470px;
          height: 120px;
          z-index: 6;
        }

        .ecosystem-stage .product-card {
          position: absolute;
          left: 30px;
          top: 255px;
          width: 280px;
          height: 180px;
          z-index: 6;
        }

        .ecosystem-stage .compliance-card {
          position: absolute;
          right: 30px;
          left: auto;
          top: 255px;
          width: 280px;
          height: 180px;
          z-index: 6;
        }

        .ecosystem-stage .founder-card {
          position: absolute;
          left: 0px;
          top: 500px;
          width: 260px;
          height: 170px;
          z-index: 6;
        }

        .ecosystem-stage .ai-growth-card {
          position: absolute;
          right: 0px;
          left: auto;
          top: 500px;
          width: 260px;
          height: 170px;
          z-index: 6;
        }

        .ecosystem-stage .marketplace-card {
          position: absolute;
          left: 50%;
          top: 570px;
          transform: translateX(-50%);
          width: 520px;
          height: 115px;
          z-index: 7;
        }

        .ecosystem-stage .bottom-pill {
          position: absolute;
          left: 50%;
          top: 720px;
          transform: translateX(-50%);
          width: 560px;
          height: 54px;
          z-index: 8;
        }

        @media (min-width: 1441px) {
          .ecosystem-stage {
            transform: scale(1);
            transform-origin: top center;
          }

          .ecosystem-stage-wrapper {
            height: 780px;
          }
        }

        @media (min-width: 1281px) and (max-width: 1440px) {
          .ecosystem-stage {
            transform: scale(0.92);
            transform-origin: top center;
          }

          .ecosystem-stage-wrapper {
            height: 720px;
          }
        }

        @media (max-width: 1280px) {
          .ecosystem-stage {
            transform: scale(0.84);
            transform-origin: top center;
          }

          .ecosystem-stage-wrapper {
            height: 660px;
          }
        }
      `}</style>

      {/* Tiny soft background sparkles */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.22] mix-blend-screen bg-[radial-gradient(#557EFF_1px,transparent_1px)] [background-size:16px_16px]" />

      {/* Main Content Envelope */}
      <div className="section-container relative z-10">

        {/* ====================================================
            TOP HEADING AREA — EXACT STYLE (CENTERED)
            ==================================================== */}
        <div className="heading-area">

          {/* Top pill badge */}
          <div className="relative flex items-center justify-center">
            {/* Sparkle above center */}
            <Sparkles className="w-4 h-4 text-amber-400 absolute -top-5 left-1/2 -translate-x-1/2 animate-bounce" />

            {/* Left line */}
            <div className="w-[80px] h-[1px] bg-gradient-to-r from-transparent to-[#2563EB]/40 relative mr-4 hidden sm:block">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-[#2563EB]" />
            </div>

            <div className="h-[34px] px-[20px] rounded-full bg-white/72 border border-[#557EFF]/18 flex items-center justify-center shadow-[0_6px_20px_rgba(47,93,180,0.08)] backdrop-blur-[14px]">
              <GsapTextReveal
                as="span"
                variant="label"
                className="text-[11px] font-bold tracking-[0.16em] text-[#2563EB] uppercase"
              >
                CONNECTED LAUNCH ECOSYSTEM
              </GsapTextReveal>
            </div>

            {/* Right line */}
            <div className="w-[80px] h-[1px] bg-gradient-to-r from-[#2563EB]/40 to-transparent relative ml-4 hidden sm:block">
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-[#2563EB]" />
            </div>
          </div>

          {/* Main Heading with precise lines and dot */}
          <GsapTextReveal
            as="h2"
            variant="heading"
            className="text-[clamp(42px,4.4vw,60px)] font-[900] leading-[0.94] tracking-[-0.045em] text-[#07152B] mt-[18px] max-w-[680px] mx-auto whitespace-pre-line text-center"
          >
            One Launch System.{"\n"}
            Every Team Connected<span className="text-[#2F80FF]">.</span>
          </GsapTextReveal>

          {/* Subheading */}
          <GsapTextReveal
            as="p"
            variant="subheading"
            className="max-w-[620px] mx-auto mt-[14px] text-[15px] leading-[1.5] font-medium text-[rgba(16,24,40,0.68)] text-center"
          >
            LaunchVeda connects product development, branding, compliance, marketplace launch, marketing and advanced growth into one structured ecosystem.
          </GsapTextReveal>

          {/* Decorative Divider under heading */}
          <div className="flex items-center justify-center gap-2.5 mt-[16px]">
            <div className="w-[80px] h-[1px] bg-gradient-to-r from-transparent to-purple-600/50" />
            <motion.div
              animate={{ y: [0, 3, 0] }}
              transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
            >
              <ChevronDown className="w-4 h-4 text-purple-600/70 stroke-[2]" />
            </motion.div>
            <div className="w-[80px] h-[1px] bg-gradient-to-r from-[#2563EB]/50 to-transparent" />
          </div>
        </div>

        {/* ====================================================
            ECOSYSTEM DIAGRAM AREA
            ==================================================== */}

        {/* 1. DESKTOP DIAGRAM VIEW (Absolute Positioning with exact requested dimensions) */}
        <div className="ecosystem-stage-wrapper hidden xl:flex">
          <div className="ecosystem-stage">

            {/* Glowing central rings around center core (z-index 1) */}
            <div className="ring-wrapper">
              {/* Ring 3 (Outer dashed) */}
              <motion.div
                className="absolute inset-0 rounded-full border border-dashed border-[#6F8CFF]/12"
                style={{ stroke: "rgba(111,140,255,0.12)" }}
                animate={{ rotate: -360 }}
                transition={{ duration: 46, repeat: Infinity, ease: "linear" }}
              />

              {/* Ring 2 (Middle dashed) */}
              <motion.div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#6F8CFF]/16"
                style={{ width: "350px", height: "350px", stroke: "rgba(111,140,255,0.16)" }}
                animate={{ rotate: 360 }}
                transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
              />

              {/* Ring 1 (Inner solid & Glowing) */}
              <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#6F8CFF]/24 shadow-[0_0_25px_rgba(111,140,255,0.12)]"
                style={{ width: "270px", height: "270px" }}
              >
                {/* 6 Small Blue Connection Nodes on Ring's bounds */}
                {/* Top Node */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#2F80FF] border border-white shadow-[0_0_6px_rgba(47,128,255,0.4)]" />

                {/* Bottom Node */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#2F80FF] border border-white shadow-[0_0_6px_rgba(47,128,255,0.4)]" />

                {/* Left Node */}
                <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#2F80FF] border border-white shadow-[0_0_6px_rgba(47,128,255,0.4)]" />

                {/* Right Node */}
                <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#2F80FF] border border-white shadow-[0_0_6px_rgba(47,128,255,0.4)]" />

                {/* Bottom-left diagonal Node */}
                <div
                  className="absolute w-2.5 h-2.5 rounded-full bg-[#2F80FF] border border-white shadow-[0_0_6px_rgba(47,128,255,0.4)]"
                  style={{ left: "14.5%", top: "85.5%", transform: "translate(-50%, -50%)" }}
                />

                {/* Bottom-right diagonal Node */}
                <div
                  className="absolute w-2.5 h-2.5 rounded-full bg-[#2F80FF] border border-white shadow-[0_0_6px_rgba(47,128,255,0.4)]"
                  style={{ right: "14.5%", top: "85.5%", transform: "translate(50%, -50%)" }}
                />
              </div>
            </div>

            {/* SVG Connection Lines Overlay (z-index 2) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-[2]">
              {/* Line Category Launch Access: Center to Top Card */}
              <ConnectedLineParticle x1={560} y1={335} x2={560} y2={140} delay={0.1} />

              {/* Line Product Development: Center to Left Card */}
              <ConnectedLineParticle x1={560} y1={335} x2={310} y2={345} delay={0.2} />

              {/* Line Compliance Readiness: Center to Right Card */}
              <ConnectedLineParticle x1={560} y1={335} x2={810} y2={345} delay={0.3} />

              {/* Line Founder Control: Center to Bottom-Left Card */}
              <ConnectedLineParticle x1={560} y1={335} x2={260} y2={500} delay={0.5} />

              {/* Line Digital Growth Sync: Center to Bottom-Right Card */}
              <ConnectedLineParticle x1={560} y1={335} x2={860} y2={500} delay={0.6} />

              {/* Line Marketplace Launch Setup: Center to Bottom Card */}
              <ConnectedLineParticle x1={560} y1={335} x2={560} y2={570} delay={0.4} />
            </svg>

            {/* ====================================================
                CENTRAL LAUNCHVEDA CORE (z-index 5 wrapper)
                ==================================================== */}
            <div className="core-wrapper">
              <motion.div
                id="central-launchveda-core"
                className="w-full h-full rounded-full cursor-pointer flex flex-col items-center justify-center transition-all duration-[350ms] hover:scale-[1.04]"
                style={{
                  background: "radial-gradient(circle at 50% 38%, rgba(255,255,255,0.98) 0%, rgba(246,250,255,0.96) 52%, rgba(232,241,255,0.92) 105%)",
                  border: "1px solid rgba(84, 148, 255, 0.22)",
                  boxShadow: "0 22px 65px rgba(73, 137, 255, 0.18), inset 0 1px 0 rgba(255,255,255,0.95), inset 0 -10px 25px rgba(113, 165, 255, 0.08)"
                }}
                initial={{ opacity: 0, scale: 0.94, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Premium 3D Styled V Logo */}
                <div className="relative w-[48px] h-[44px] mb-2 flex items-center justify-center">
                  <svg width="48" height="44" viewBox="0 0 76 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="filter drop-shadow-[0_5px_10px_rgba(59,130,246,0.25)]">
                    <path
                      d="M12 12L38 52L64 12"
                      stroke="url(#core-v-gradient)"
                      strokeWidth="15"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M26 12L38 31L50 12"
                      stroke="url(#core-v-gradient-secondary)"
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <defs>
                      <linearGradient id="core-v-gradient" x1="12" y1="12" x2="64" y2="52" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#2563EB" />
                        <stop offset="50%" stopColor="#7C3AED" />
                        <stop offset="100%" stopColor="#EC4899" />
                      </linearGradient>
                      <linearGradient id="core-v-gradient-secondary" x1="26" y1="12" x2="50" y2="31" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#9333EA" />
                        <stop offset="100%" stopColor="#3B82F6" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                {/* Core Title & Subtitle */}
                <h3 className="text-[20px] font-[900] leading-none tracking-[-0.04em] text-[#07152B]">
                  LaunchVeda Core
                </h3>
                <p className="text-[12px] font-[500] leading-[1.35] text-[#07152B]/62 text-center mt-[6px] max-w-[150px]">
                  Your connected brand{"\n"}launch ecosystem
                </p>
              </motion.div>
            </div>

            {/* ====================================================
                SURROUNDING ECOSYSTEM DIAL CARDS (z-index 6)
                ==================================================== */}

            {/* CARD 1 — TOP CATEGORY LAUNCH ACCESS */}
            <div className="eco-category-card">
              <motion.div
                className="rounded-[16px] border p-[18px] flex flex-col items-center justify-between pointer-events-auto backdrop-blur-[14px] cursor-pointer w-full h-full relative"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.85), rgba(246,240,255,0.8))",
                  borderColor: "rgba(124, 58, 237, 0.18)",
                  boxShadow: "0 15px 35px rgba(40, 88, 152, 0.08), inset 0 1px 0 rgba(255,255,255,0.85)",
                  overflow: "hidden",
                  boxSizing: "border-box"
                }}
                initial={{ opacity: 0, scale: 0.94, y: 15, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -3, scale: 1.015, borderColor: "rgba(124, 58, 237, 0.3)", boxShadow: "0 20px 45px rgba(40, 88, 152, 0.12)" }}
              >
                {/* Title and rocket icon inline */}
                <div className="flex items-center justify-center gap-2 w-full shrink-0">
                  <Rocket className="w-5 h-5 text-purple-600 stroke-[2.2]" />
                  <h4 className="text-[16px] font-[800] tracking-[-0.035em] text-[#07152B]">
                    Category Launch Access
                  </h4>
                </div>

                {/* 5 Category items in one horizontal row */}
                <div className="flex items-center justify-around w-full mb-1 shrink-0 px-2 lg:px-4">
                  {[
                    { name: "Perfume", label: "Perfume", color: "from-purple-500 to-indigo-500", char: "🌸" },
                    { name: "Cosmetics", label: "Cosmetics", color: "from-pink-500 to-rose-500", char: "💖" },
                    { name: "Skincare", label: "Skincare", color: "from-teal-400 to-emerald-500", char: "💧" },
                    { name: "Modern Ayurveda", label: "Ayurveda", color: "from-green-500 to-emerald-600", char: "🌿" },
                    { name: "Nutraceuticals", label: "Nutra", color: "from-amber-500 to-orange-500", char: "🧬" }
                  ].map((item) => (
                    <div key={item.name} className="flex flex-col items-center gap-[4px] w-[58px] text-center">
                      <div className={`w-[26px] h-[26px] rounded-md bg-gradient-to-br ${item.color} flex items-center justify-center text-[12px] text-white shadow-sm`}>
                        <span>{item.char}</span>
                      </div>
                      <span className="text-[11px] font-[800] text-[#07152B]/85 whitespace-nowrap overflow-hidden text-ellipsis max-w-full">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* CARD 2 — LEFT PRODUCT DEVELOPMENT */}
            <div className="product-card">
              <motion.div
                className="rounded-[16px] border p-[18px] flex flex-col justify-start pointer-events-auto backdrop-blur-[14px] w-full h-full"
                style={{
                  background: "linear-gradient(135deg, rgba(238,246,255,0.88), rgba(220,235,255,0.76))",
                  borderColor: "rgba(59, 130, 246, 0.16)",
                  boxShadow: "0 15px 35px rgba(40, 88, 152, 0.08), inset 0 1px 0 rgba(255,255,255,0.85)",
                  overflow: "hidden",
                  boxSizing: "border-box"
                }}
                initial={{ opacity: 0, scale: 0.94, y: 15, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -3, scale: 1.015, borderColor: "rgba(59, 130, 246, 0.3)", boxShadow: "0 20px 45px rgba(40, 88, 152, 0.12)" }}
              >
                {/* Header with Main Icon */}
                <div className="flex items-center gap-2 mb-3 shrink-0">
                  <Boxes className="w-5 h-5 text-blue-500 stroke-[2.2]" />
                  <h4 className="text-[16px] font-[800] leading-none text-[#07152B] tracking-tight">
                    Product Development
                  </h4>
                </div>

                {/* List Rows */}
                <div className="flex flex-col gap-[8px] w-full mt-auto">
                  {[
                    { title: "Manufacturer Connect" },
                    { title: "Formula Direction" },
                    { title: "Sampling" },
                    { title: "Quality Check" }
                  ].map((row) => (
                    <div key={row.title} className="h-[24px] rounded-[6px] bg-white/58 border border-white/50 flex items-center gap-2 px-[10px] shadow-sm text-[11px] font-[750] text-[#07152B]/85">
                      <Check className="w-[12px] h-[12px] text-[#2563EB] stroke-[3] shrink-0" />
                      <span className="truncate leading-none">{row.title}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* CARD 3 — RIGHT COMPLIANCE READINESS */}
            <div className="compliance-card">
              <motion.div
                className="rounded-[16px] border p-[18px] flex flex-col justify-start pointer-events-auto backdrop-blur-[14px] w-full h-full"
                style={{
                  background: "linear-gradient(135deg, rgba(235,255,247,0.88), rgba(207,246,226,0.76))",
                  borderColor: "rgba(16, 185, 129, 0.16)",
                  boxShadow: "0 15px 35px rgba(40, 88, 152, 0.08), inset 0 1px 0 rgba(255,255,255,0.85)",
                  overflow: "hidden",
                  boxSizing: "border-box"
                }}
                initial={{ opacity: 0, scale: 0.94, y: 15, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -3, scale: 1.015, borderColor: "rgba(16, 185, 129, 0.3)", boxShadow: "0 20px 45px rgba(40, 88, 152, 0.12)" }}
              >
                {/* Header with Main Icon */}
                <div className="flex items-center gap-2 mb-3 shrink-0">
                  <ShieldCheck className="w-5 h-5 text-emerald-500 stroke-[2.2]" />
                  <h4 className="text-[16px] font-[800] leading-none text-[#07152B] tracking-tight">
                    Compliance Readiness
                  </h4>
                </div>

                {/* List Rows */}
                <div className="flex flex-col gap-[8px] w-full mt-auto">
                  {[
                    { title: "Label Planning" },
                    { title: "Documentation" },
                    { title: "Certification Guidance" },
                    { title: "Claim Safety" }
                  ].map((row) => (
                    <div key={row.title} className="h-[24px] rounded-[6px] bg-white/58 border border-white/50 flex items-center gap-2 px-[10px] shadow-sm text-[11px] font-[750] text-[#07152B]/85">
                      <Check className="w-[12px] h-[12px] text-[#10B981] stroke-[3] shrink-0" />
                      <span className="truncate leading-none">{row.title}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* CARD 4 — BOTTOM LEFT FOUNDER CONTROL */}
            <div className="founder-card">
              <motion.div
                className="rounded-[16px] border p-[18px] flex flex-col justify-start pointer-events-auto backdrop-blur-[14px] w-full h-full"
                style={{
                  background: "linear-gradient(135deg, rgba(255,247,231,0.95), rgba(255,226,183,0.8))",
                  borderColor: "rgba(245, 158, 11, 0.16)",
                  boxShadow: "0 15px 35px rgba(40, 88, 152, 0.08), inset 0 1px 0 rgba(255,255,255,0.85)",
                  overflow: "hidden",
                  boxSizing: "border-box"
                }}
                initial={{ opacity: 0, scale: 0.94, y: 15, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -3, scale: 1.015, borderColor: "rgba(245, 158, 11, 0.3)", boxShadow: "0 20px 45px rgba(40, 88, 152, 0.12)" }}
              >
                {/* Header */}
                <div className="flex items-center gap-2 mb-3 shrink-0">
                  <UserRound className="w-5 h-5 text-[#F59E0B] stroke-[2.2]" />
                  <h4 className="text-[16px] font-[800] leading-none text-[#07152B] tracking-tight">
                    Founder Control
                  </h4>
                </div>

                {/* 2x2 Mini Grid */}
                <div className="grid grid-cols-2 gap-[8px] w-full mt-auto">
                  {[
                    { title: "Launch Stage", emoji: "🚀" },
                    { title: "Team Updates", emoji: "👥" },
                    { title: "Asset Status", emoji: "📂" },
                    { title: "Approval Flow", emoji: "✅" }
                  ].map((box) => (
                    <div key={box.title} className="h-[36px] rounded-[8px] bg-white/58 border border-white/50 flex items-center justify-center gap-1.5 hover:bg-white/80 transition-all duration-200">
                      <span className="text-[14px]">{box.emoji}</span>
                      <span className="text-[11px] font-extrabold text-[#07152B]/85 tracking-tight truncate max-w-[85px]">{box.title}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* CARD 5 — BOTTOM CENTER MARKETPLACE LAUNCH SETUP (z-index 7 wrapper) */}
            <div className="marketplace-card">
              <motion.div
                className="rounded-[16px] border p-[18px] flex flex-col justify-between pointer-events-auto backdrop-blur-[14px] w-full h-full"
                style={{
                  background: "linear-gradient(135deg, rgba(232,244,255,0.95), rgba(218,235,255,0.8))",
                  borderColor: "rgba(37, 99, 235, 0.16)",
                  boxShadow: "0 15px 35px rgba(40, 88, 152, 0.08), inset 0 1px 0 rgba(255,255,255,0.85)",
                  overflow: "hidden",
                  boxSizing: "border-box"
                }}
                initial={{ opacity: 0, scale: 0.94, y: 15, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -3, scale: 1.015, borderColor: "rgba(37, 99, 235, 0.3)", boxShadow: "0 20px 45px rgba(40, 88, 152, 0.12)" }}
              >
                {/* Header */}
                <div className="flex items-center justify-center gap-2 shrink-0 w-full mb-1">
                  <Store className="w-5 h-5 text-blue-600 stroke-[2.2]" />
                  <h4 className="text-[16px] font-[800] leading-none text-[#07152B] tracking-tight">
                    Marketplace Launch Setup
                  </h4>
                </div>

                {/* 7 Platform elements in a beautiful horizontal row */}
                <div className="flex items-center justify-between gap-[4px] w-full mt-auto shrink-0">
                  {[
                    { name: "Website", icon: "🌐", label: "Web" },
                    { name: "Amazon", icon: "a➔", label: "Amazon" },
                    { name: "Flipkart", icon: "F", label: "Flipkart" },
                    { name: "Nykaa", icon: "N", label: "" },
                    { name: "Tata 1mg", icon: "1m", label: "1mg" },
                    { name: "Blinkit", icon: "b", label: "Blinkit" },
                    { name: "Instamart", icon: "⚡", label: "Instamart" }
                  ].map((plat) => (
                    <div key={plat.name} className="w-[46px] h-[46px] rounded-[8px] bg-white/62 border border-white/50 flex flex-col items-center justify-center gap-0.5 shrink-0 shadow-sm">
                      <span className="text-[18px] font-black leading-none">{plat.icon}</span>
                      {plat.label && (
                        <span className="text-[9px] font-[900] text-[#07152B]/85 text-center leading-none truncate max-w-[42px]">
                          {plat.label}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* CARD 6 — BOTTOM RIGHT DIGITAL GROWTH SYNC */}
            <div className="ai-growth-card">
              <motion.div
                className="rounded-[16px] border p-[18px] flex flex-col justify-start pointer-events-auto backdrop-blur-[14px] w-full h-full"
                style={{
                  background: "linear-gradient(135deg, rgba(247,240,255,0.95), rgba(232,220,255,0.8))",
                  borderColor: "rgba(124, 58, 237, 0.16)",
                  boxShadow: "0 15px 35px rgba(40, 88, 152, 0.08), inset 0 1px 0 rgba(255,255,255,0.85)",
                  overflow: "hidden",
                  boxSizing: "border-box"
                }}
                initial={{ opacity: 0, scale: 0.94, y: 15, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -3, scale: 1.015, borderColor: "rgba(124, 58, 237, 0.3)", boxShadow: "0 20px 45px rgba(40, 88, 152, 0.12)" }}
              >
                {/* Header */}
                <div className="flex items-center gap-2 mb-3 shrink-0">
                  <Sparkles className="w-5 h-5 text-purple-500 stroke-[2.2]" />
                  <h4 className="text-[16px] font-[800] leading-none text-[#07152B] tracking-tight">
                    Digital Growth Sync
                  </h4>
                </div>

                {/* Layout */}
                <div className="flex flex-col gap-[6px] w-full mt-auto">
                  <div className="grid grid-cols-2 gap-[6px]">
                    {[
                      { title: "Content", emoji: "📅" },
                      { title: "Ad Angles", emoji: "🎯" },
                      { title: "WhatsApp", emoji: "💬" },
                      { title: "CRM Flow", emoji: "🤖" }
                    ].map((chip) => (
                      <div key={chip.title} className="h-[24px] rounded-[6px] bg-white/58 border border-white/50 flex items-center gap-1.5 px-2 shadow-sm">
                        <span className="text-[12px]">{chip.emoji}</span>
                        <span className="text-[11px] font-extrabold text-[#07152B]/85 truncate leading-none">
                          {chip.title}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Full width 5th item */}
                  <div className="h-[24px] rounded-[6px] bg-white/58 border border-white/50 flex items-center gap-1.5 px-2.5 shadow-sm mt-1">
                    <span className="text-[12px]">📝</span>
                    <span className="text-[11px] font-extrabold text-[#07152B]/85 leading-none truncate col-span-2">
                      Sales Scripts
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* ====================================================
                BOTTOM PILL (z-index 8 wrapper)
                ==================================================== */}
            <div className="bottom-pill">
              <motion.div
                className="rounded-full flex items-center justify-center gap-2 bg-white/76 border border-white/86 backdrop-blur-[18px] pointer-events-auto w-full h-full px-5 shadow-[0_12px_28px_rgba(47,93,180,0.08)]"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.85, duration: 0.72 }}
              >
                <Sparkles className="w-4 h-4 text-[#6366F1] shrink-0" />
                <span className="text-[12px] font-bold text-[#07152B] whitespace-nowrap">
                  Connected Strategy. Connected Execution. Connected Growth.
                </span>
              </motion.div>
            </div>

          </div>
        </div>

        {/* ====================================================
            MOBILE & TABLET RESPONSIVE VIEW (Visible only below xl)
            ==================================================== */}
        <div className="xl:hidden mt-8 px-[6px] sm:px-6 max-w-4xl mx-auto flex flex-col gap-8">

          {/* Central core shown as a beautiful master header */}
          <motion.div
            className="rounded-[24px] p-6 flex flex-col items-center justify-center text-center shadow-[0_12px_40px_rgba(47,93,180,0.08)]"
            style={{
              background: "radial-gradient(circle at 50% 38%, rgba(255,255,255,0.98) 0%, rgba(246,250,255,0.96) 52%, rgba(232,241,255,0.92) 105%)",
              border: "1px solid rgba(84, 148, 255, 0.22)",
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Premium 3D Styled V Logo */}
            <div className="relative w-[48px] h-[44px] mb-2 flex items-center justify-center">
              <svg width="48" height="44" viewBox="0 0 76 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 12L38 52L64 12"
                  stroke="url(#core-v-gradient-mob)"
                  strokeWidth="15"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <defs>
                  <linearGradient id="core-v-gradient-mob" x1="12" y1="12" x2="64" y2="52" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#2563EB" />
                    <stop offset="50%" stopColor="#7C3AED" />
                    <stop offset="100%" stopColor="#EC4899" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <h3 className="text-[20px] font-[900] text-[#07152B] tracking-[-0.04em]">
              LaunchVeda Core
            </h3>
            <p className="text-[12px] font-[500] text-[#07152B]/62 mt-1">
              Your connected brand launch ecosystem
            </p>
          </motion.div>

          {/* Connected Lines Visual Indicator (vertical) */}
          <div className="flex flex-col gap-6 relative">
            {/* Soft vertical line behind card stack */}
            <div className="absolute left-[9px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#2563EB]/40 via-[#7C3AED]/20 to-transparent pointer-events-none" />

            {/* CARD 1 — CATEGORY LAUNCH ACCESS */}
            <motion.div
              className="relative pl-5"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute left-[3px] top-6 w-[12px] h-[12px] rounded-full bg-purple-600 border-[3px] border-white shadow-sm z-10" />
              <div
                className="rounded-[20px] border p-3.5 sm:p-5 flex flex-col gap-4"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.92), rgba(246,240,255,0.85))",
                  borderColor: "rgba(124, 58, 237, 0.18)",
                  boxShadow: "0 10px 30px rgba(40, 88, 152, 0.05)"
                }}
              >
                <div className="flex items-center gap-2.5">
                  <Rocket className="w-5 h-5 text-purple-600 stroke-[2.2]" />
                  <h4 className="text-[16px] font-[800] tracking-tight text-[#07152B]">
                    Category Launch Access
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    { name: "Perfume", color: "from-purple-500 to-indigo-500", char: "🌸" },
                    { name: "Cosmetics", color: "from-pink-500 to-rose-500", char: "💖" },
                    { name: "Skincare", color: "from-teal-400 to-emerald-500", char: "💧" },
                    { name: "Modern Ayurveda", color: "from-green-500 to-emerald-600", char: "🌿" },
                    { name: "Nutraceuticals", color: "from-amber-500 to-orange-500", char: "🧬" }
                  ].map((item) => (
                    <div key={item.name} className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/70 border border-white/60 shadow-sm">
                      <span className={`w-5 h-5 rounded bg-gradient-to-br ${item.color} flex items-center justify-center text-[10px] text-white`}>
                        {item.char}
                      </span>
                      <span className="text-[11px] font-[800] text-[#07152B]/85">
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* CARD 2 — PRODUCT DEVELOPMENT */}
            <motion.div
              className="relative pl-5"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="absolute left-[3px] top-6 w-[12px] h-[12px] rounded-full bg-blue-500 border-[3px] border-white shadow-sm z-10" />
              <div
                className="rounded-[20px] border p-3.5 sm:p-5 flex flex-col gap-4"
                style={{
                  background: "linear-gradient(135deg, rgba(238,246,255,0.95), rgba(220,235,255,0.85))",
                  borderColor: "rgba(59, 130, 246, 0.16)",
                  boxShadow: "0 10px 30px rgba(40, 88, 152, 0.05)"
                }}
              >
                <div className="flex items-center gap-2.5">
                  <Boxes className="w-5 h-5 text-blue-500 stroke-[2.2]" />
                  <h4 className="text-[16px] font-[800] tracking-tight text-[#07152B]">
                    Product Development
                  </h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    "Manufacturer Connect",
                    "Formula Direction",
                    "Sampling",
                    "Quality Check"
                  ].map((title) => (
                    <div key={title} className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/70 border border-white/60 shadow-sm text-[12px] font-[750] text-[#07152B]/85">
                      <Check className="w-[14px] h-[14px] text-[#2563EB] stroke-[3] shrink-0" />
                      <span>{title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* CARD 3 — COMPLIANCE READINESS */}
            <motion.div
              className="relative pl-5"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <div className="absolute left-[3px] top-6 w-[12px] h-[12px] rounded-full bg-emerald-500 border-[3px] border-white shadow-sm z-10" />
              <div
                className="rounded-[20px] border p-3.5 sm:p-5 flex flex-col gap-4"
                style={{
                  background: "linear-gradient(135deg, rgba(235,255,247,0.95), rgba(207,246,226,0.85))",
                  borderColor: "rgba(16, 185, 129, 0.16)",
                  boxShadow: "0 10px 30px rgba(40, 88, 152, 0.05)"
                }}
              >
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-5 h-5 text-emerald-500 stroke-[2.2]" />
                  <h4 className="text-[16px] font-[800] tracking-tight text-[#07152B]">
                    Compliance Readiness
                  </h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    "Label Planning",
                    "Documentation",
                    "Certification Guidance",
                    "Claim Safety"
                  ].map((title) => (
                    <div key={title} className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/70 border border-white/60 shadow-sm text-[12px] font-[750] text-[#07152B]/85">
                      <Check className="w-[14px] h-[14px] text-[#10B981] stroke-[3] shrink-0" />
                      <span>{title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* CARD 4 — FOUNDER CONTROL */}
            <motion.div
              className="relative pl-5"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="absolute left-[3px] top-6 w-[12px] h-[12px] rounded-full bg-amber-500 border-[3px] border-white shadow-sm z-10" />
              <div
                className="rounded-[20px] border p-3.5 sm:p-5 flex flex-col gap-4"
                style={{
                  background: "linear-gradient(135deg, rgba(255,247,231,0.95), rgba(255,226,183,0.85))",
                  borderColor: "rgba(245, 158, 11, 0.16)",
                  boxShadow: "0 10px 30px rgba(40, 88, 152, 0.05)"
                }}
              >
                <div className="flex items-center gap-2.5">
                  <UserRound className="w-5 h-5 text-[#F59E0B] stroke-[2.2]" />
                  <h4 className="text-[16px] font-[800] tracking-tight text-[#07152B]">
                    Founder Control
                  </h4>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { title: "Launch Stage", emoji: "🚀" },
                    { title: "Team Updates", emoji: "👥" },
                    { title: "Asset Status", emoji: "📂" },
                    { title: "Approval Flow", emoji: "✅" }
                  ].map((box) => (
                    <div key={box.title} className="p-3 rounded-xl bg-white/70 border border-white/60 shadow-sm flex items-center justify-center gap-2 hover:bg-white/90 transition-all">
                      <span className="text-[16px]">{box.emoji}</span>
                      <span className="text-[12px] font-extrabold text-[#07152B]/85">{box.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* CARD 5 — MARKETPLACE LAUNCH SETUP */}
            <motion.div
              className="relative pl-5"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <div className="absolute left-[3px] top-6 w-[12px] h-[12px] rounded-full bg-blue-600 border-[3px] border-white shadow-sm z-10" />
              <div
                className="rounded-[20px] border p-3.5 sm:p-5 flex flex-col gap-4"
                style={{
                  background: "linear-gradient(135deg, rgba(232,244,255,0.95), rgba(218,235,255,0.85))",
                  borderColor: "rgba(37, 99, 235, 0.16)",
                  boxShadow: "0 10px 30px rgba(40, 88, 152, 0.05)"
                }}
              >
                <div className="flex items-center gap-2.5">
                  <Store className="w-5 h-5 text-blue-600 stroke-[2.2]" />
                  <h4 className="text-[16px] font-[800] tracking-tight text-[#07152B]">
                    Marketplace Launch Setup
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    { name: "Website", icon: "🌐" },
                    { name: "Amazon", icon: "a➔" },
                    { name: "Flipkart", icon: "F" },
                    { name: "Nykaa", icon: "N" },
                    { name: "Tata 1mg", icon: "1m" },
                    { name: "Blinkit", icon: "b" },
                    { name: "Instamart", icon: "⚡" }
                  ].map((plat) => (
                    <div key={plat.name} className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/70 border border-white/60 shadow-sm">
                      <span className="text-[16px] font-black">{plat.icon}</span>
                      <span className="text-[11px] font-[800] text-[#07152B]/85">{plat.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* CARD 6 — DIGITAL GROWTH SYNC */}
            <motion.div
              className="relative pl-5"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="absolute left-[3px] top-6 w-[12px] h-[12px] rounded-full bg-purple-500 border-[3px] border-white shadow-sm z-10" />
              <div
                className="rounded-[20px] border p-3.5 sm:p-5 flex flex-col gap-4"
                style={{
                  background: "linear-gradient(135deg, rgba(247,240,255,0.95), rgba(232,220,255,0.85))",
                  borderColor: "rgba(124, 58, 237, 0.16)",
                  boxShadow: "0 10px 30px rgba(40, 88, 152, 0.05)"
                }}
              >
                <div className="flex items-center gap-2.5">
                  <Sparkles className="w-5 h-5 text-purple-500 stroke-[2.2]" />
                  <h4 className="text-[16px] font-[800] tracking-tight text-[#07152B]">
                    Digital Growth Sync
                  </h4>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { title: "Content", emoji: "📅" },
                    { title: "Ad Angles", emoji: "🎯" },
                    { title: "WhatsApp", emoji: "💬" },
                    { title: "CRM Flow", emoji: "🤖" },
                    { title: "Sales Scripts", emoji: "📝" }
                  ].map((chip) => (
                    <div key={chip.title} className="p-2.5 rounded-xl bg-white/70 border border-white/60 shadow-sm flex items-center gap-2">
                      <span className="text-[14px]">{chip.emoji}</span>
                      <span className="text-[11px] font-extrabold text-[#07152B]/85 truncate">{chip.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>

          {/* Bottom pill for Mobile */}
          <motion.div
            className="rounded-[20px] p-4 flex items-center justify-center gap-2 bg-white/80 border border-white/90 backdrop-blur-md shadow-sm mt-4 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Sparkles className="w-4 h-4 text-[#6366F1] shrink-0" />
            <span className="text-[11px] sm:text-[12px] font-bold text-[#07152B]">
              Connected Strategy. Connected Execution. Connected Growth.
            </span>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
