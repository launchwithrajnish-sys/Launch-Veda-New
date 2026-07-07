"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Rocket,
  ArrowRight,
  Check,
  ChevronDown,
  Sparkles,
  Info
} from "lucide-react";
import GsapTextReveal from "../ui/GsapTextReveal";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Option lists
const categories = [
  "Perfume",
  "Cosmetics / Skincare",
  "Modern Ayurveda",
  "Nutraceuticals"
];

const productTypesMap: Record<string, string[]> = {
  "Perfume": ["Eau De Parfum", "Body Mist", "Attar", "Deodorant"],
  "Cosmetics / Skincare": ["Face Serum", "Moisturizer", "Sunscreen", "Face Wash", "Lip Care", "Body Care"],
  "Modern Ayurveda": ["Hair Oil", "Chyawanprash", "Juices / Tonics", "Herbal Capsules"],
  "Nutraceuticals": ["Protein Powder", "Multivitamin", "Gummies", "Capsules / Tablets"]
};

const moqs = [
  "Below 1,000 Units",
  "1,000 – 5,000 Units",
  "5,000 – 10,000 Units",
  "10,000+ Units"
];

const brandStatuses = [
  "Brand Name Finalized",
  "Working Name Ready",
  "Need Help With Naming"
];

const investments = [
  "Below ₹5L",
  "₹5L – ₹10L",
  "₹10L – ₹25L",
  "₹25L – ₹50L",
  "₹50L+"
];

const supports = [
  "Product Development Only",
  "Branding & Packaging",
  "Website & Marketplace",
  "Marketing & Growth",
  "End-to-End Launch"
];

const LAUNCH_PATH_HEADING = "Find The Right Launch Path For Your Brand.";

function LaunchPathHeading() {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const heading = headingRef.current;
    if (!heading || typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const chars = gsap.utils.toArray<HTMLElement>(
      ".launch-path-heading-char",
      heading,
    );
    const shimmer = heading.querySelector<HTMLElement>(".launch-path-shimmer");

    gsap.set(chars, {
      autoAlpha: 0,
      yPercent: 84,
      rotateX: -68,
      rotateZ: 1.4,
      filter: "blur(9px)",
      color: "#7C3AED",
      textShadow: "0 0 0 rgba(124,58,237,0)",
      transformOrigin: "50% 100%",
    });

    if (shimmer) {
      gsap.set(shimmer, {
        autoAlpha: 0,
        scaleX: 0.58,
        transformOrigin: "50% 50%",
      });
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heading,
          start: "top 84%",
          once: true,
        },
      });

      tl.to(chars, {
        autoAlpha: 1,
        yPercent: 0,
        rotateX: 0,
        rotateZ: 0,
        filter: "blur(0px)",
        color: "#20123A",
        textShadow:
          "0 10px 30px rgba(124, 58, 237, 0.18), 0 0 22px rgba(168, 85, 247, 0.2)",
        duration: 0.82,
        ease: "back.out(1.45)",
        stagger: {
          each: 0.018,
          from: "start",
        },
      }).to(
        chars,
        {
          textShadow: "0 0 0 rgba(124,58,237,0)",
          duration: 0.66,
          ease: "power2.out",
          stagger: {
            each: 0.006,
            from: "start",
          },
        },
        "-=0.24",
      );

      if (shimmer) {
        tl.to(
          shimmer,
          {
            autoAlpha: 1,
            scaleX: 1,
            duration: 0.68,
            ease: "power3.out",
          },
          "-=0.58",
        ).to(
          shimmer,
          {
            autoAlpha: 0.36,
            duration: 0.76,
            ease: "power2.out",
          },
          "-=0.16",
        );
      }
    }, heading);

    return () => ctx.revert();
  }, []);

  return (
    <h2
      ref={headingRef}
      aria-label={LAUNCH_PATH_HEADING}
      id="section3-heading"
      className="relative text-[26.5px] sm:text-[32px] md:text-[38px] font-extrabold text-[#20123A] leading-[1.12] tracking-[-0.03em] px-2"
    >
      <span className="relative z-10 block" aria-hidden="true">
        {LAUNCH_PATH_HEADING.split(" ").map((word, wordIndex, words) => (
          <span
            key={`${word}-${wordIndex}`}
            className="inline-block whitespace-nowrap"
            style={{
              marginRight: wordIndex < words.length - 1 ? "0.22em" : 0,
              perspective: "680px",
            }}
          >
            {word.split("").map((char, charIndex) => (
              <span
                key={`${word}-${wordIndex}-${charIndex}`}
                className="launch-path-heading-char inline-block will-change-[transform,opacity,filter]"
              >
                {char}
              </span>
            ))}
          </span>
        ))}
      </span>
      <span className="launch-path-shimmer pointer-events-none absolute left-1/2 top-1/2 h-[0.16em] w-[82%] -translate-x-1/2 translate-y-[0.74em] rounded-full bg-gradient-to-r from-transparent via-[#A855F7]/40 to-transparent blur-md" />
    </h2>
  );
}

// Badge gradients aligned exactly to reference image
const badgeGradients = [
  "linear-gradient(135deg, #4F2BE8 0%, #6E46FF 100%)", // 1
  "linear-gradient(135deg, #3B66F5 0%, #6385FF 100%)", // 2
  "linear-gradient(135deg, #4A3AF4 0%, #7E70FF 100%)", // 3
  "linear-gradient(135deg, #6C3AF4 0%, #A27DFF 100%)", // 4
  "linear-gradient(135deg, #993AF4 0%, #C98EFF 100%)", // 5
  "linear-gradient(135deg, #C23AF4 0%, #EB99FF 100%)"  // 6
];

export default function LaunchVedaSection3() {
  // Option Select state
  const [category, setCategory] = useState("Cosmetics / Skincare");
  const [productType, setProductType] = useState("Face Serum");
  const [moq, setMoq] = useState("1,000 – 5,000 Units");
  const [brandStatus, setBrandStatus] = useState("Need Help With Naming");
  const [investment, setInvestment] = useState("₹10L – ₹25L");
  const [support, setSupport] = useState("End-to-End Launch");

  // Filter Dropdown Open State
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Result state
  const [isCalculated, setIsCalculated] = useState(false);
  const [expertNotified, setExpertNotified] = useState(false);

  // Reset formulation type on category change
  const handleCategoryChange = (newCat: string) => {
    setCategory(newCat);
    const defaults = productTypesMap[newCat] || [];
    if (defaults.length > 0) {
      setProductType(defaults[0]);
    }
    setActiveDropdown(null);
  };

  const currentProducts = productTypesMap[category] || [];

  return (
    <section
      id="launchveda-section3"
      className="relative w-full pt-16 pb-20 overflow-hidden font-sans max-sm:hidden"
      style={{
        background: `
          radial-gradient(circle at 50% 100%, rgba(139, 92, 246, 0.28), transparent 38%),
          radial-gradient(circle at 18% 20%, rgba(168, 85, 247, 0.08), transparent 30%),
          radial-gradient(circle at 82% 22%, rgba(124, 58, 237, 0.08), transparent 32%),
          linear-gradient(180deg, #FAF9FC 0%, #F6F3FA 52%, #EFE8F8 100%)
        `
      }}
    >
      {/* Styles Injected dynamically for precise typography and concentric orbits matches layout guidelines */}
      <style>{`
        /* fonts removed */
        
        #launchveda-section3 {
          font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        }

        .custom-scroll::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scroll::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scroll::-webkit-scrollbar-thumb {
          background: rgba(139, 92, 246, 0.2);
          border-radius: 9px;
        }
        .custom-scroll::-webkit-scrollbar-thumb:hover {
          background: rgba(139, 92, 246, 0.4);
        }

        .premium-text-glow {
          text-shadow: 0 0 35px rgba(255, 255, 255, 0.12);
        }
      `}</style>

      {/* 1. TOP FLOATING PILLS */}
      <div
        id="section3-floating-pills"
        className="flex justify-between items-center w-full max-w-[1380px] mx-auto px-6 sm:px-8 py-3.5"
      >
        <span className="px-5 py-2 rounded-full border border-purple-100/70 bg-white/70 backdrop-blur-md shadow-[0_2px_12px_rgba(124,58,237,0.03)] text-[11px] font-bold text-[#7C3AED]/90 uppercase tracking-[0.12em] flex items-center gap-2 hover:scale-102 transition-transform">
          <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] animate-pulse" />
          LaunchVeda
        </span>
        <span className="px-5 py-2 rounded-full border border-purple-100/70 bg-white/70 backdrop-blur-md shadow-[0_2px_12px_rgba(124,58,237,0.03)] text-[11px] font-bold text-[#6D28D9] uppercase tracking-[0.12em] flex items-center gap-1.5 hover:scale-102 transition-transform">
          Launch Smarter
          <span className="text-[11px] opacity-90">✨</span>
        </span>
      </div>

      {/* 2. MINIMAL CENTERED CONTENT BLOCK */}
      <div
        id="section3-centered-content"
        className="text-center max-w-2xl mx-auto mb-10 mt-6 space-y-2.5 px-6 animate-fadeIn"
      >
        <GsapTextReveal
          as="span"
          variant="label"
          id="section3-label"
          className="text-[11px] font-extrabold tracking-[0.2em] uppercase text-[#7C3AED] block"
        >
          LAUNCH READINESS AUDIT
        </GsapTextReveal>
        <LaunchPathHeading />
        <GsapTextReveal
          as="p"
          variant="subheading"
          id="section3-subheading"
          className="text-[13px] sm:text-[14.5px] leading-[1.55] text-[#6B6780] max-w-[540px] mx-auto font-medium"
        >
          Choose your category, define your needs, and let LaunchVeda guide your next move.
        </GsapTextReveal>
      </div>

      {/* 3. MAIN SPLIT CONTAINER */}
      <div
        id="section3-main-split"
        className="w-full max-w-[1380px] mx-auto px-4 sm:px-8 lg:px-12 pb-10"
      >
        <div className="bg-[#FAF9FC] border-[3.5px] border-white/85 rounded-[30px] shadow-[0_24px_70px_rgba(32,18,58,0.07)] overflow-hidden grid grid-cols-1 lg:grid-cols-2 min-h-[620px] lg:h-[650px] transition-all">

          {/* LEFT PANEL: DARK PURPLE PREMIUM VISUAL PANEL */}
          <div
            id="section3-left-panel"
            className="relative flex flex-col justify-between p-5 sm:p-9 text-white overflow-hidden min-h-[500px] lg:min-h-full"
            style={{
              background: `
                radial-gradient(circle at 78% 78%, rgba(139, 92, 246, 0.65), transparent 36%),
                radial-gradient(circle at 48% 42%, rgba(124, 58, 237, 0.25), transparent 28%),
                linear-gradient(135deg, #05020B 0%, #16002D 52%, #3B0A87 100%)
              `
            }}
          >
            {/* Subtle high-fidelity grain element */}
            <div className="absolute inset-0 opacity-[0.015] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

            {/* Top Row: Logo & Indicator matches reference perfectly */}
            <div className="z-10 flex items-center justify-between">
              <div id="left-panel-logo" className="flex items-center gap-2">
                <svg className="w-6 h-6 stroke-[1.5]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 22h20L12 2zm0 4l6.5 13H5.5L12 6z" fill="url(#logoGrad)" />
                  <defs>
                    <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FFFFFF" />
                      <stop offset="100%" stopColor="#A855F7" />
                    </linearGradient>
                  </defs>
                </svg>
                <span className="text-xl font-bold tracking-[-0.03em] text-white">
                  LaunchVeda
                </span>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-300 bg-white/[0.06] border border-white/10 rounded-full px-3 py-1 scale-95 shadow-sm">
                Strategic Intelligence
              </span>
            </div>

            {/* Middle visual: Custom Floating Infographics orbiting perfectly */}
            <div className="z-10 my-auto flex flex-col justify-center items-center relative h-[310px] w-full scale-[0.98] sm:scale-100 lg:scale-[0.82] xl:scale-[0.92] 2xl:scale-100 origin-center">

              {/* Concentric planetary orbit lines */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <svg className="absolute w-[360px] h-[360px] opacity-15" viewBox="0 0 360 360" fill="none">
                  {/* Orbit 1 */}
                  <circle cx="180" cy="180" r="145" stroke="white" strokeWidth="1" strokeDasharray="3 6" />
                  {/* Orbit 2 */}
                  <circle cx="180" cy="180" r="105" stroke="white" strokeWidth="0.85" strokeDasharray="2 4" />
                  {/* Orbit 3 */}
                  <circle cx="180" cy="180" r="65" stroke="white" strokeWidth="0.75" strokeDasharray="1 3" />
                </svg>
              </div>

              {/* Central Glowing Orb & Rocket Icon */}
              <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#5735E8] to-[#9A50FF] flex items-center justify-center shadow-[0_0_50px_rgba(139,92,246,0.45)] z-20 animate-pulse relative">
                <Rocket className="w-10 h-10 text-white stroke-[2] rotate-45 transform translate-x-[-1px] translate-y-[1px]" />
                <div className="absolute -inset-2.5 rounded-full bg-purple-500/10 blur-sm pointer-events-none -z-10" />
              </div>

              {/* CARD 1: Launch Roadmap */}
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1 left-[-22px] bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-2xl p-3.5 shadow-[0_12px_30px_rgba(0,0,0,0.22)] w-[170px] -rotate-[4deg]"
              >
                <div className="space-y-3">
                  <span className="text-[10px] text-slate-300 font-extrabold uppercase tracking-wider block">Launch Roadmap</span>
                  {/* Custom Roadmap dots connector */}
                  <div className="flex items-center justify-between px-1 relative">
                    <div className="absolute top-1/2 left-0 right-0 h-[1.5px] bg-white/20 transform -translate-y-1/2" />
                    <div className="w-1.5 h-1.5 rounded-full bg-white/40 z-10" />
                    <div className="w-1.5 h-1.5 rounded-full bg-white/40 z-10" />
                    {/* Active Point */}
                    <div className="w-3 h-3 rounded-full bg-[#8B5CF6] border-2 border-white/90 z-10 shadow-[0_0_10px_rgba(139,92,246,0.8)]" />
                    <div className="w-1.5 h-1.5 rounded-full bg-white/40 z-10" />
                  </div>
                </div>
              </motion.div>

              {/* CARD 2: Market Opportunity with Sparkline */}
              <motion.div
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                className="absolute top-3 right-[-14px] bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-2xl p-3.5 shadow-[0_12px_30px_rgba(0,0,0,0.22)] w-[165px] -rotate-[5deg]"
              >
                <div className="flex items-start justify-between">
                  <div className="space-y-0.5">
                    <span className="text-[10px] text-slate-200 font-bold block uppercase tracking-wider">Opportunity</span>
                    <span className="text-xl font-black text-white leading-none">8.4x</span>
                    <span className="text-[8px] text-slate-400 font-bold block">Category Growth</span>
                  </div>
                  {/* Sparkline graphics */}
                  <svg className="w-16 h-10 mt-2 shrink-0 overflow-visible" viewBox="0 0 60 30">
                    <defs>
                      <linearGradient id="sparkGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="rgba(168, 85, 247, 0.4)" />
                        <stop offset="100%" stopColor="rgba(168, 85, 247, 0)" />
                      </linearGradient>
                    </defs>
                    <path d="M0 25 C10 18, 20 8, 30 15 C40 22, 50 2, 60 4" fill="none" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" />
                    <path d="M0 25 C10 18, 20 8, 30 15 C40 22, 50 2, 60 4 L60 30 L0 30 Z" fill="url(#sparkGrad)" />
                    <circle cx="60" cy="4" r="2.5" fill="#A855F7" />
                  </svg>
                </div>
              </motion.div>

              {/* CARD 3: Go-to-Market Plan list checklist */}
              <motion.div
                animate={{ x: [0, -3, 0] }}
                transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-4 right-[-24px] bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-2xl p-3.5 shadow-[0_12px_30px_rgba(0,0,0,0.22)] w-[180px] rotate-[5deg]"
              >
                <div className="space-y-2 text-left">
                  <span className="text-[10px] text-slate-300 font-extrabold uppercase tracking-wider block">Go-to-Market Plan</span>
                  <div className="space-y-1.5 pl-0.5">
                    <div className="flex items-center gap-1.5">
                      <span className="w-3.5 h-3.5 rounded-full bg-purple-500/20 border border-purple-400/40 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 text-white stroke-[3.5]" />
                      </span>
                      <span className="text-[10px] font-bold text-slate-100">Product Strategy</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-3.5 h-3.5 rounded-full bg-purple-500/20 border border-purple-400/40 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 text-white stroke-[3.5]" />
                      </span>
                      <span className="text-[10px] font-bold text-slate-100">Brand Positioning</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-3.5 h-3.5 rounded-full bg-purple-500/20 border border-purple-400/40 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 text-white stroke-[3.5]" />
                      </span>
                      <span className="text-[10px] font-bold text-slate-100">Channel Plan</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* CARD 4: Projected Revenue Histogram */}
              <motion.div
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-2 left-[-26px] bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-2xl p-3.5 shadow-[0_12px_30px_rgba(0,0,0,0.22)] w-[190px] -rotate-[4deg]"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-slate-200 font-extrabold uppercase tracking-wider block">Projected Revenue</span>
                    <span className="text-[8px] font-bold text-slate-400 bg-white/[0.06] border border-white/10 px-1.5 py-0.5 rounded">12 Mths</span>
                  </div>
                  <span className="text-xl font-black text-white leading-none block text-left">₹2.8 Cr</span>

                  {/* Decorative Bar Histogram */}
                  <div className="flex items-end gap-1 px-1 pt-1 justify-between h-9 h-full">
                    <div className="w-1.5 h-4 rounded-full bg-[#8B5CF6]/40" />
                    <div className="w-1.5 h-5 rounded-full bg-[#8B5CF6]/50" />
                    <div className="w-1.5 h-6 rounded-full bg-[#8B5CF6]/60" />
                    <div className="w-1.5 h-4 rounded-full bg-[#8B5CF6]/50" />
                    <div className="w-1.5 h-7 rounded-full bg-[#8B5CF6]/75" />
                    <div className="w-1.5 h-8 rounded-full bg-[#A855F7]" />
                    <div className="w-1.5 h-6 rounded-full bg-[#8B5CF6]/80" />
                    <div className="w-1.5 h-9 rounded-full bg-[#C084FC] shadow-[0_0_10px_rgba(192,132,252,0.6)]" />
                  </div>
                </div>
              </motion.div>

              {/* Small floating widgets & badges matches visual precisely */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                className="absolute w-2 h-2 rounded-full bg-[#D43BFF] left-[110px] top-[100px] shadow-[0_0_8px_#D43BFF]"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute w-1.5 h-1.5 rounded-full bg-[#3B66F5] right-[90px] bottom-[100px] shadow-[0_0_6px_#3B66F5]"
              />

              {/* Floating icon widget: Chart */}
              <div className="absolute left-[130px] bottom-[48px] w-9 h-9 rounded-xl bg-white/[0.05] backdrop-blur-xl border border-white/10 flex items-center justify-center p-1.5 shadow-[0_5px_15px_rgba(0,0,0,0.15)] select-none">
                <svg className="w-full h-full text-purple-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 3v18h18" />
                  <path d="m19 9-5 5-4-4-3 3" />
                </svg>
              </div>

              {/* Floating icon widget: crosshair */}
              <div className="absolute right-[115px] top-[54px] w-10 h-10 rounded-xl bg-white/[0.05] backdrop-blur-xl border border-white/10 flex items-center justify-center p-2 shadow-[0_5px_15px_rgba(0,0,0,0.15)] select-none">
                <svg className="w-full h-full text-blue-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </div>

              {/* Floating icon widget: pie chart */}
              <div className="absolute right-[120px] bottom-[42px] w-[38px] h-[38px] rounded-xl bg-white/[0.05] backdrop-blur-xl border border-white/10 flex items-center justify-center p-2 shadow-[0_5px_15px_rgba(0,0,0,0.15)] select-none">
                <svg className="w-full h-full text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
                  <path d="M22 12A10 10 0 0 0 12 2v10z" />
                </svg>
              </div>

            </div>

            {/* Bottom Row: Premium Copywriting */}
            <div className="z-10 space-y-4 text-left">
              <div className="space-y-1.5">
                <h3 className="text-[28px] sm:text-[34px] font-bold text-white tracking-[-0.04em] leading-[1.05] premium-text-glow">
                  Launch Smarter. Build Faster.
                </h3>
                <p className="text-[14px] leading-[1.55] text-white/70 max-w-[400px]">
                  From strategy to scale—LaunchVeda turns ideas into market-ready brands with confidence, clarity, and speed.
                </p>
              </div>

              {/* Slider Dots Matches Reference */}
              <div className="flex items-center gap-2 pt-2 select-none">
                <span className="w-6 h-1.5 rounded-full bg-[#8B5CF6] transition-all" />
                <span className="w-1.5 h-1.5 rounded-full bg-white/25 hover:bg-white/40 cursor-pointer" />
                <span className="w-1.5 h-1.5 rounded-full bg-white/25 hover:bg-white/40 cursor-pointer" />
              </div>
            </div>

          </div>

          {/* RIGHT PANEL: FROSTED GLASS AND CENTERED LAUNCH CARD */}
          <div
            id="section3-right-panel"
            className="flex items-center justify-center p-6 sm:p-10"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.88), rgba(246,242,255,0.8))"
            }}
          >
            <div
              className="w-full max-w-[420px] p-7 md:p-8 rounded-[24px] bg-white/70 backdrop-blur-md border border-white shadow-[0_20px_55px_rgba(62,42,112,0.11),inset 0_1px_0_rgba(255,255,255,0.85)] flex flex-col justify-between"
            >
              <AnimatePresence mode="wait">
                {!isCalculated ? (
                  // AUDIT FORM
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6 flex flex-col justify-between h-full"
                  >
                    {/* Header */}
                    <div className="text-center space-y-1.5">
                      <h4 className="text-[23px] font-extrabold text-[#20123A] tracking-[-0.035em] leading-[1.1]">
                        Start Your Launch Audit
                      </h4>
                      <p className="text-[12px] text-[#6B6780] leading-[1.45]">
                        Answer a few quick inputs to discover the right launch path for your brand.
                      </p>
                    </div>

                    {/* Interactive rows connecting by a subtle vertical line */}
                    <div className="space-y-3 relative">
                      {/* Vertical connecting accent line matches reference style perfectly */}
                      <div className="absolute left-[14px] top-4 bottom-4 w-[1.5px] bg-[#8B5CF6]/20 pointer-events-none" />

                      {/* Row 1: Launch Category */}
                      <div className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-3 h-auto sm:h-12 w-full py-1.5 sm:py-0">
                        <div className="flex items-center gap-3 select-none">
                          <div
                            className="w-[28px] h-[28px] rounded-full text-white font-mono font-bold text-[10px] flex items-center justify-center shrink-0 shadow-[0_4px_10px_rgba(79,43,232,0.25)]"
                            style={{ background: badgeGradients[0] }}
                          >
                            1
                          </div>
                          <span className="text-[12px] font-bold text-[#211A36] uppercase tracking-wide block">
                            Category
                          </span>
                        </div>

                        <div className="relative w-full sm:w-[190px] shrink-0">
                          <button
                            type="button"
                            onClick={() => setActiveDropdown(activeDropdown === "category" ? null : "category")}
                            className="w-full h-10 bg-[#20123A]/[0.03] hover:bg-[#20123A]/[0.05] border border-[#20123A]/10 rounded-xl px-3 text-[12.5px] font-semibold text-[#2E2945] focus:outline-none flex items-center justify-between transition-all cursor-pointer truncate"
                          >
                            <span className="truncate pr-1">{category}</span>
                            <ChevronDown className="w-3.5 h-3.5 text-[#8B5CF6] shrink-0" />
                          </button>

                          {activeDropdown === "category" && (
                            <>
                              <div className="fixed inset-0 z-40" onClick={() => setActiveDropdown(null)} />
                              <div className="absolute right-0 top-full mt-1 w-full bg-white border border-slate-100 rounded-xl shadow-[0_12px_32px_rgba(0,0,0,0.15)] z-50 overflow-hidden divide-y divide-slate-50 animate-fadeIn select-none">
                                {categories.map((cat) => (
                                  <button
                                    key={cat}
                                    type="button"
                                    onClick={() => handleCategoryChange(cat)}
                                    className="w-full text-left px-3.5 py-2.5 text-[12px] font-semibold text-[#20123A] hover:bg-purple-50 hover:text-[#7C3AED] transition-colors"
                                  >
                                    {cat}
                                  </button>
                                ))}
                              </div>
                            </>
                          )}
                        </div>
                      </div>

                      {/* Row 2: Product Type */}
                      <div className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-3 h-auto sm:h-12 w-full py-1.5 sm:py-0">
                        <div className="flex items-center gap-3 select-none">
                          <div
                            className="w-[28px] h-[28px] rounded-full text-white font-mono font-bold text-[10px] flex items-center justify-center shrink-0 shadow-[0_4px_10px_rgba(59,102,245,0.25)]"
                            style={{ background: badgeGradients[1] }}
                          >
                            2
                          </div>
                          <span className="text-[12px] font-bold text-[#211A36] uppercase tracking-wide block">
                            Type
                          </span>
                        </div>

                        <div className="relative w-full sm:w-[190px] shrink-0">
                          <button
                            type="button"
                            onClick={() => setActiveDropdown(activeDropdown === "productType" ? null : "productType")}
                            className="w-full h-10 bg-[#20123A]/[0.03] hover:bg-[#20123A]/[0.05] border border-[#20123A]/10 rounded-xl px-3 text-[12.5px] font-semibold text-[#2E2945] focus:outline-none flex items-center justify-between transition-all cursor-pointer truncate"
                          >
                            <span className="truncate pr-1">{productType}</span>
                            <ChevronDown className="w-3.5 h-3.5 text-[#8B5CF6] shrink-0" />
                          </button>

                          {activeDropdown === "productType" && (
                            <>
                              <div className="fixed inset-0 z-40" onClick={() => setActiveDropdown(null)} />
                              <div className="absolute right-0 top-full mt-1 w-full max-h-[160px] overflow-y-auto bg-white border border-slate-100 rounded-xl shadow-[0_12px_32px_rgba(0,0,0,0.15)] z-50 divide-y divide-slate-50 animate-fadeIn custom-scroll select-none">
                                {currentProducts.map((p) => (
                                  <button
                                    key={p}
                                    type="button"
                                    onClick={() => {
                                      setProductType(p);
                                      setActiveDropdown(null);
                                    }}
                                    className="w-full text-left px-3.5 py-2.5 text-[12px] font-semibold text-[#20123A] hover:bg-purple-50 hover:text-[#7C3AED] transition-colors"
                                  >
                                    {p}
                                  </button>
                                ))}
                              </div>
                            </>
                          )}
                        </div>
                      </div>

                      {/* Row 3: Expected MOQ */}
                      <div className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-3 h-auto sm:h-12 w-full py-1.5 sm:py-0">
                        <div className="flex items-center gap-3 select-none">
                          <div
                            className="w-[28px] h-[28px] rounded-full text-white font-mono font-bold text-[10px] flex items-center justify-center shrink-0 shadow-[0_4px_10px_rgba(74,58,244,0.25)]"
                            style={{ background: badgeGradients[2] }}
                          >
                            3
                          </div>
                          <span className="text-[12px] font-bold text-[#211A36] uppercase tracking-wide block">
                            Expected MOQ
                          </span>
                        </div>

                        <div className="relative w-full sm:w-[190px] shrink-0">
                          <button
                            type="button"
                            onClick={() => setActiveDropdown(activeDropdown === "moq" ? null : "moq")}
                            className="w-full h-10 bg-[#20123A]/[0.03] hover:bg-[#20123A]/[0.05] border border-[#20123A]/10 rounded-xl px-3 text-[12.5px] font-semibold text-[#2E2945] focus:outline-none flex items-center justify-between transition-all cursor-pointer truncate"
                          >
                            <span className="truncate pr-1">{moq}</span>
                            <ChevronDown className="w-3.5 h-3.5 text-[#8B5CF6] shrink-0" />
                          </button>

                          {activeDropdown === "moq" && (
                            <>
                              <div className="fixed inset-0 z-40" onClick={() => setActiveDropdown(null)} />
                              <div className="absolute right-0 top-full mt-1 w-full bg-white border border-slate-100 rounded-xl shadow-[0_12px_32px_rgba(0,0,0,0.15)] z-50 overflow-hidden divide-y divide-slate-50 animate-fadeIn select-none">
                                {moqs.map((m) => (
                                  <button
                                    key={m}
                                    type="button"
                                    onClick={() => {
                                      setMoq(m);
                                      setActiveDropdown(null);
                                    }}
                                    className="w-full text-left px-3.5 py-2.5 text-[12px] font-semibold text-[#20123A] hover:bg-purple-50 hover:text-[#7C3AED] transition-colors"
                                  >
                                    {m}
                                  </button>
                                ))}
                              </div>
                            </>
                          )}
                        </div>
                      </div>

                      {/* Row 4: Brand Status */}
                      <div className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-3 h-auto sm:h-12 w-full py-1.5 sm:py-0">
                        <div className="flex items-center gap-3 select-none">
                          <div
                            className="w-[28px] h-[28px] rounded-full text-white font-mono font-bold text-[10px] flex items-center justify-center shrink-0 shadow-[0_4px_10px_rgba(108,58,244,0.25)]"
                            style={{ background: badgeGradients[3] }}
                          >
                            4
                          </div>
                          <span className="text-[12px] font-bold text-[#211A36] uppercase tracking-wide block">
                            Brand Status
                          </span>
                        </div>

                        <div className="relative w-full sm:w-[190px] shrink-0">
                          <button
                            type="button"
                            onClick={() => setActiveDropdown(activeDropdown === "brandStatus" ? null : "brandStatus")}
                            className="w-full h-10 bg-[#20123A]/[0.03] hover:bg-[#20123A]/[0.05] border border-[#20123A]/10 rounded-xl px-3 text-[12.5px] font-semibold text-[#2E2945] focus:outline-none flex items-center justify-between transition-all cursor-pointer truncate"
                          >
                            <span className="truncate pr-1">{brandStatus}</span>
                            <ChevronDown className="w-3.5 h-3.5 text-[#8B5CF6] shrink-0" />
                          </button>

                          {activeDropdown === "brandStatus" && (
                            <>
                              <div className="fixed inset-0 z-40" onClick={() => setActiveDropdown(null)} />
                              <div className="absolute right-0 top-full mt-1 w-full bg-white border border-slate-100 rounded-xl shadow-[0_12px_32px_rgba(0,0,0,0.15)] z-50 overflow-hidden divide-y divide-slate-50 animate-fadeIn select-none">
                                {brandStatuses.map((b) => (
                                  <button
                                    key={b}
                                    type="button"
                                    onClick={() => {
                                      setBrandStatus(b);
                                      setActiveDropdown(null);
                                    }}
                                    className="w-full text-left px-3.5 py-2.5 text-[12px] font-semibold text-[#20123A] hover:bg-purple-50 hover:text-[#7C3AED] transition-colors"
                                  >
                                    {b}
                                  </button>
                                ))}
                              </div>
                            </>
                          )}
                        </div>
                      </div>

                      {/* Row 5: Investment Range */}
                      <div className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-3 h-auto sm:h-12 w-full py-1.5 sm:py-0">
                        <div className="flex items-center gap-3 select-none">
                          <div
                            className="w-[28px] h-[28px] rounded-full text-white font-mono font-bold text-[10px] flex items-center justify-center shrink-0 shadow-[0_4px_10px_rgba(153,58,244,0.25)]"
                            style={{ background: badgeGradients[4] }}
                          >
                            5
                          </div>
                          <span className="text-[12px] font-bold text-[#211A36] uppercase tracking-wide block">
                            Investment
                          </span>
                        </div>

                        <div className="relative w-full sm:w-[190px] shrink-0">
                          <button
                            type="button"
                            onClick={() => setActiveDropdown(activeDropdown === "investment" ? null : "investment")}
                            className="w-full h-10 bg-[#20123A]/[0.03] hover:bg-[#20123A]/[0.05] border border-[#20123A]/10 rounded-xl px-3 text-[12.5px] font-semibold text-[#2E2945] focus:outline-none flex items-center justify-between transition-all cursor-pointer truncate"
                          >
                            <span className="truncate pr-1">{investment}</span>
                            <ChevronDown className="w-3.5 h-3.5 text-[#8B5CF6] shrink-0" />
                          </button>

                          {activeDropdown === "investment" && (
                            <>
                              <div className="fixed inset-0 z-40" onClick={() => setActiveDropdown(null)} />
                              <div className="absolute right-0 top-full mt-1 w-full bg-white border border-slate-100 rounded-xl shadow-[0_12px_32px_rgba(0,0,0,0.15)] z-50 overflow-hidden divide-y divide-slate-50 animate-fadeIn select-none">
                                {investments.map((i) => (
                                  <button
                                    key={i}
                                    type="button"
                                    onClick={() => {
                                      setInvestment(i);
                                      setActiveDropdown(null);
                                    }}
                                    className="w-full text-left px-3.5 py-2.5 text-[12px] font-semibold text-[#20123A] hover:bg-purple-50 hover:text-[#7C3AED] transition-colors"
                                  >
                                    {i}
                                  </button>
                                ))}
                              </div>
                            </>
                          )}
                        </div>
                      </div>

                      {/* Row 6: Support Needed */}
                      <div className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-3 h-auto sm:h-12 w-full py-1.5 sm:py-0">
                        <div className="flex items-center gap-3 select-none">
                          <div
                            className="w-[28px] h-[28px] rounded-full text-white font-mono font-bold text-[10px] flex items-center justify-center shrink-0 shadow-[0_4px_10px_rgba(194,58,244,0.25)]"
                            style={{ background: badgeGradients[5] }}
                          >
                            6
                          </div>
                          <span className="text-[12px] font-bold text-[#211A36] uppercase tracking-wide block">
                            Support
                          </span>
                        </div>

                        <div className="relative w-full sm:w-[190px] shrink-0">
                          <button
                            type="button"
                            onClick={() => setActiveDropdown(activeDropdown === "support" ? null : "support")}
                            className="w-full h-10 bg-[#20123A]/[0.03] hover:bg-[#20123A]/[0.05] border border-[#20123A]/10 rounded-xl px-3 text-[12.5px] font-semibold text-[#2E2945] focus:outline-none flex items-center justify-between transition-all cursor-pointer truncate"
                          >
                            <span className="truncate pr-1">{support}</span>
                            <ChevronDown className="w-3.5 h-3.5 text-[#8B5CF6] shrink-0" />
                          </button>

                          {activeDropdown === "support" && (
                            <>
                              <div className="fixed inset-0 z-40" onClick={() => setActiveDropdown(null)} />
                              <div className="absolute right-0 top-full mt-1 w-full bg-white border border-slate-100 rounded-xl shadow-[0_12px_32px_rgba(0,0,0,0.15)] z-50 overflow-hidden divide-y divide-slate-50 animate-fadeIn select-none">
                                {supports.map((s) => (
                                  <button
                                    key={s}
                                    type="button"
                                    onClick={() => {
                                      setSupport(s);
                                      setActiveDropdown(null);
                                    }}
                                    className="w-full text-left px-3.5 py-2.5 text-[12px] font-semibold text-[#20123A] hover:bg-purple-50 hover:text-[#7C3AED] transition-colors"
                                  >
                                    {s}
                                  </button>
                                ))}
                              </div>
                            </>
                          )}
                        </div>
                      </div>

                    </div>

                    {/* Submit Button matches reference precisely with stylish orange/red-to-purple gradient glow */}
                    <div className="space-y-3 pt-3">
                      <button
                        type="button"
                        onClick={() => setIsCalculated(true)}
                        className="w-full h-[52px] rounded-xl text-white text-[15px] font-bold tracking-tight flex items-center justify-center gap-2.5 active:scale-[0.98] transition-all duration-200 cursor-pointer shadow-[0_14px_34px_rgba(124,58,237,0.3),inset_0_1px_0_rgba(255,255,255,0.2)]"
                        style={{
                          background: "linear-gradient(135deg, #FF5E3A 0%, #7C3AED 50%, #4F2BE8 100%)"
                        }}
                      >
                        <span>Get My Launch Path</span>
                        <svg className="w-4 h-4 translate-x-[1px] translate-y-[-1px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <line x1="7" y1="17" x2="17" y2="7" />
                          <polyline points="7 7 17 7 17 17" />
                        </svg>
                      </button>
                      <p className="text-[10.5px] text-center text-[#6B6780]/80 font-bold select-none">
                        Your information is secure and confidential.
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  // RESULTS VIEW (MATCHING THE SAME COMPACT SIZE AND ALIGNMENT)
                  <motion.div
                    key="results"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-5 flex flex-col justify-between h-full text-left"
                  >
                    <div className="space-y-4">
                      {/* Header with high-fidelity success badge */}
                      <div className="flex items-center justify-between select-none">
                        <div className="space-y-0.5">
                          <span className="text-[9px] font-extrabold tracking-widest text-[#7C3AED] uppercase block">
                            Generated Profile
                          </span>
                          <h4 className="text-[18px] font-extrabold text-[#20123A] tracking-tight">
                            Launch Path Calculated!
                          </h4>
                        </div>
                        <div className="px-2.5 py-1 bg-green-50 rounded-full border border-green-100 flex items-center gap-1 shrink-0 select-none">
                          <Check className="w-3 h-3 text-green-500 stroke-[4]" />
                          <span className="text-[8.5px] font-extrabold uppercase tracking-wide text-green-600">Matched</span>
                        </div>
                      </div>

                      {/* Dynamic GTM breakdown */}
                      <div className="space-y-3">

                        {/* Step 1 */}
                        <div className="bg-slate-50/70 border border-purple-50/50 rounded-xl p-3.5 space-y-1">
                          <div className="flex items-center gap-1.5">
                            <span className="text-[9px] font-extrabold bg-[#7C3AED]/10 text-[#7C3AED] px-1.5 py-0.5 rounded font-mono">01</span>
                            <h5 className="text-[11px] font-extrabold text-[#20123A] uppercase tracking-wider">
                              Milestone Feasibility
                            </h5>
                          </div>
                          <p className="text-[11.5px] text-[#5F5B74] font-medium leading-[1.5]">
                            For your <strong className="text-[#20123A] font-bold">{category} ({productType})</strong>, formulation stabilization is prioritized. Target sample verification batch in 15-21 days.
                          </p>
                        </div>

                        {/* Step 2 */}
                        <div className="bg-slate-50/70 border border-purple-50/50 rounded-xl p-3.5 space-y-1">
                          <div className="flex items-center gap-1.5">
                            <span className="text-[9px] font-extrabold bg-[#7C3AED]/10 text-[#7C3AED] px-1.5 py-0.5 rounded font-mono">02</span>
                            <h5 className="text-[11px] font-extrabold text-[#20123A] uppercase tracking-wider">
                              MOQ & Sourcing Plan
                            </h5>
                          </div>
                          <p className="text-[11.5px] text-[#5F5B74] font-medium leading-[1.5]">
                            Your volume of <strong className="text-[#20123A] font-bold">{moq}</strong> matches custom parameters. We recommend matching single-ingredient primary vendors to lower expenses.
                          </p>
                        </div>

                        {/* Step 3 */}
                        <div className="bg-slate-50/70 border border-purple-50/50 rounded-xl p-3.5 space-y-1">
                          <div className="flex items-center gap-1.5">
                            <span className="text-[9px] font-extrabold bg-[#7C3AED]/10 text-[#7C3AED] px-1.5 py-0.5 rounded font-mono">03</span>
                            <h5 className="text-[11px] font-extrabold text-[#20123A] uppercase tracking-wider">
                              {support} Alignment
                            </h5>
                          </div>
                          <p className="text-[11.5px] text-[#5F5B74] font-medium leading-[1.5]">
                            {brandStatus === "Need Help With Naming"
                              ? "Our branding desks will submit 3 trademark-cleared names. "
                              : "With naming ready, "
                            }
                            We will sync high-converting digital distribution immediately.
                          </p>
                        </div>

                      </div>
                    </div>

                    {/* Success CTA area */}
                    <div className="space-y-3.5 pt-1">

                      {!expertNotified ? (
                        <button
                          type="button"
                          onClick={() => {
                            document.getElementById("launch-plan-form")?.scrollIntoView({
                              behavior: "smooth",
                              block: "start"
                            });
                          }}
                          className="w-full h-12 rounded-xl text-white text-[13px] font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg active:scale-98 transition-all cursor-pointer"
                          style={{
                            background: "linear-gradient(90deg, #6D28D9 0%, #7C3AED 42%, #A855F7 100%)"
                          }}
                        >
                          <Sparkles className="w-4 h-4 text-yellow-300 fill-yellow-300" />
                          <span>Talk To Launch Expert</span>
                        </button>
                      ) : (
                        <div className="w-full h-12 text-center rounded-xl bg-emerald-500 text-white text-[12px] font-bold uppercase tracking-wider flex items-center justify-center gap-2 border border-emerald-400/20 select-none animate-fadeIn">
                          <Check className="w-4 h-4 stroke-[3]" />
                          <span>Expert Desk Notified! (SLA: 12h)</span>
                        </div>
                      )}

                      <div className="flex items-center justify-between select-none px-0.5">
                        <button
                          type="button"
                          onClick={() => {
                            setIsCalculated(false);
                            setExpertNotified(false);
                          }}
                          className="text-[11px] font-extrabold text-[#7C3AED] hover:underline cursor-pointer bg-transparent border-none focus:outline-none"
                        >
                          ← Modify Inputs
                        </button>
                        <span className="text-[10px] text-[#6B6780] font-bold flex items-center gap-1">
                          <Info className="w-3.5 h-3.5" />
                          Confidential Study
                        </span>
                      </div>

                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
