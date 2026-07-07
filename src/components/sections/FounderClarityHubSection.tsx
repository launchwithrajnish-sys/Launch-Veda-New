"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useRouter } from "next/navigation";
import {
  Factory,
  FlaskConical,
  Package,
  ShieldCheck,
  Store,
  TrendingUp,
  ArrowRight,
  ChevronDown,
  Sparkles
} from "lucide-react";
import GsapTextReveal from "../ui/GsapTextReveal";

interface ObjectionItem {
  id: string;
  stageNumber: string;
  title: string;
  question: string;
  answer: string;
  chips: string[];
  accentColor: string;
  icon: React.ComponentType<{ className?: string }>;
}

const OBJECTIONS_DATA: ObjectionItem[] = [
  {
    id: "manufacturer",
    stageNumber: "01",
    title: "Manufacturer Match",
    question: "Manufacturer kaise milega?",
    answer: "LaunchVeda helps you identify the right manufacturer based on your category, product type, MOQ, formulation needs, packaging requirements and quality expectations without random vendor confusion.",
    chips: ["Manufacturer", "MOQ", "Vendor Fit", "Quality Check"],
    accentColor: "#3B82F6", // Blue
    icon: Factory
  },
  {
    id: "formula",
    stageNumber: "02",
    title: "Formula Validation",
    question: "Formula genuine hoga?",
    answer: "We help define formula direction, ingredient logic, sampling expectations, texture goals and quality checkpoints before final product development decisions are made.",
    chips: ["Formula Direction", "Sampling", "Texture Labs", "Stability"],
    accentColor: "#8B5CF6", // Purple
    icon: FlaskConical
  },
  {
    id: "packaging",
    stageNumber: "03",
    title: "Packaging Strategy",
    question: "Packaging kaise decide hogi?",
    answer: "Packaging is planned around your brand positioning, product category, pricing, customer perception, label space, marketplace needs and launch readiness with optimal shelf impact.",
    chips: ["Premium Bottles", "Label Space", "Design Flow", "Cost Cap"],
    accentColor: "#F97316", // Orange
    icon: Package
  },
  {
    id: "compliance",
    stageNumber: "04",
    title: "Compliance Shield",
    question: "Compliance kaun dekhega?",
    answer: "LaunchVeda guides labeling, documentation, certification direction, claim-safe communication and legal readiness through the right compliance approach to avoid any risky claims.",
    chips: ["Label Audit", "Legal Docs", "Claim-Safe", "Certifications"],
    accentColor: "#10B981", // Emerald
    icon: ShieldCheck
  },
  {
    id: "marketplace",
    stageNumber: "05",
    title: "Marketplace Listing",
    question: "Marketplace launch kaise hoga?",
    answer: "We help prepare product pages, listing content, image text, keywords, platform readiness and marketplace assets for Amazon, Flipkart, Nykaa, Myntra and quick commerce apps before going live.",
    chips: ["Amazon SEO", "Flipkart", "Nykaa Store", "Q-Commerce"],
    accentColor: "#EC4899", // Pink
    icon: Store
  },
  {
    id: "sales",
    stageNumber: "06",
    title: "Growth Funnels",
    question: "Sales kaise aayegi?",
    answer: "LaunchVeda supports growth through content planning, performance marketing, influencer briefs, WhatsApp follow-up, CRM flow, sales scripts and automated conversion systems.",
    chips: ["Content Plan", "Performance Ads", "Influencer Brief", "CRM Hooks"],
    accentColor: "#0EA5E9", // Sky Blue
    icon: TrendingUp
  }
];


export const FounderClarityHubSection: React.FC = () => {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState<number | null>(0); // Default first item expanded

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      id="founder-clarity-hub"
      className="relative w-full overflow-hidden bg-gradient-to-br from-[#4C1D95] via-[#2E1065] to-[#120024] py-20 lg:py-28 border-t border-purple-900/30"
    >
      {/* Dynamic Glowing Ambient Blobs */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-1/4 -left-1/4 w-[60%] h-[60%] rounded-full bg-violet-600/10 filter blur-[140px]" />
        <div className="absolute -bottom-1/4 -right-1/4 w-[60%] h-[60%] rounded-full bg-indigo-500/10 filter blur-[140px]" />
        {/* Subtle high-tech dark grid backdrop */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1380px] px-4 sm:px-8 lg:px-12 z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-[850px] mx-auto mb-16 lg:mb-20">
          
          {/* Eyebrow Pill Badge (Clean opaque badge) */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/10 text-[11px] font-[800] uppercase tracking-wider text-white mb-5 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-indigo-200" />
            <GsapTextReveal as="span" variant="label">
              FOUNDER CLARITY HUB
            </GsapTextReveal>
          </div>

          {/* Main Heading */}
          <GsapTextReveal
            as="h2"
            variant="heading"
            style={{ letterSpacing: "-0.04em" }}
            className="text-white font-[900] text-3xl sm:text-5xl lg:text-6xl leading-[1.08] mb-6"
          >
            Every Founder Has Questions.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-violet-200 to-pink-300">
              We Build the Answers.
            </span>
          </GsapTextReveal>

          {/* Subheading text */}
          <GsapTextReveal
            as="p"
            variant="subheading"
            className="text-purple-100/90 font-medium text-[15px] sm:text-[17px] leading-relaxed max-w-[700px] mx-auto"
          >
            Starting a product brand comes with critical formulation, packaging, manufacturer, and compliance hurdles. Explore structured solutions to the most common founder challenges below.
          </GsapTextReveal>
        </div>

        {/* Layout: Single Image Left, FAQ Accordion Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          
          {/* LEFT COLUMN: One single premium, static visual taking full space of the container */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative w-full h-full min-h-[350px] sm:min-h-[440px] lg:min-h-[520px] rounded-[32px] overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.35)] flex flex-col"
            >
              {/* Decorative gradient visual - brand clarity themed */}
              <div className="absolute inset-0 w-full h-full" aria-hidden="true">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-900/80 via-indigo-900/60 to-purple-950/90" />
                <div className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:32px_32px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] rounded-full bg-violet-500/20 filter blur-[80px]" />
                <div className="absolute bottom-8 right-8 w-[160px] h-[160px] rounded-full bg-indigo-400/15 filter blur-[60px]" />
              </div>
              {/* Overlay content */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full gap-6 px-8 text-center">
                <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-white/10 border border-white/20 shadow-lg">
                  <svg className="w-10 h-10 text-violet-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                </div>
                <div>
                  <p className="text-white font-[800] text-xl leading-snug mb-2">Founder-First Clarity</p>
                  <p className="text-purple-200/80 text-sm font-medium leading-relaxed max-w-[240px] mx-auto">Structured answers to your toughest brand-building questions</p>
                </div>
                <div className="flex flex-wrap gap-2 justify-center">
                  {["Formulation", "Packaging", "Compliance", "Manufacturing"].map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[11px] font-[700] text-violet-200 tracking-wide">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Vertical FAQ-like Accordion */}
          <div className="lg:col-span-7 flex flex-col gap-4 h-full justify-center">
            {OBJECTIONS_DATA.map((item, idx) => {
              const isOpen = activeIndex === idx;
              const IconComponent = item.icon;

              return (
                <div
                  key={item.id}
                  className="w-full text-left"
                >
                  <div style={{ display: "none" }} className="faq-seo-metadata" data-question={item.question} data-answer={item.answer} />
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className={`relative rounded-2xl border transition-all duration-300 overflow-hidden cursor-pointer ${
                      isOpen
                        ? "bg-white border-slate-300 shadow-[0_12px_32px_rgba(0,0,0,0.15)]"
                        : "bg-white border-slate-200/80 shadow-sm hover:border-slate-300"
                    }`}
                    onClick={() => toggleAccordion(idx)}
                  >
                    {/* Active dynamic glowing bar */}
                    {isOpen && (
                      <motion.div
                        layoutId="active-left-indicator-glow"
                        className="absolute left-0 top-0 bottom-0 w-[4px] z-10"
                        style={{ backgroundColor: item.accentColor }}
                      />
                    )}

                    <div className="p-5 sm:p-6 flex items-start gap-4">
                      {/* Left icon badge representing the FAQ category */}
                      <div
                        style={{
                          backgroundColor: isOpen ? `${item.accentColor}12` : "#F1F5F9",
                          color: isOpen ? item.accentColor : "#475569"
                        }}
                        className="w-11 h-11 rounded-xl shrink-0 flex items-center justify-center border border-slate-200 transition-colors"
                      >
                        <IconComponent className="w-5 h-5 stroke-[2.2]" />
                      </div>

                      {/* Main FAQ Detail Stacks */}
                      <div className="flex-grow min-w-0">
                        {/* Title Tag above the question */}
                        <div className="mb-1">
                          <span className="text-[10px] font-black px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-600 uppercase tracking-wider">
                            {item.title}
                          </span>
                        </div>
                        
                        <h3 className="font-[800] text-slate-900 text-[16px] sm:text-[17px] tracking-tight leading-snug mt-1">
                          {item.question}
                        </h3>

                        {/* Expandable answer */}
                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                              className="overflow-hidden"
                            >
                              <div className="pt-2">
                                <p className="text-[14px] leading-relaxed font-semibold text-slate-600 mt-1">
                                  {item.answer}
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Dropdown indicator arrow */}
                      <div className="shrink-0 pt-0.5 text-slate-400">
                        <ChevronDown
                          className={`w-[18px] h-[18px] transition-transform duration-350 ${
                            isOpen ? "rotate-180 text-slate-800" : "text-slate-400"
                          }`}
                        />
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Action Button & Underlay Support */}
        <div className="mt-16 lg:mt-24 text-center flex flex-col items-center">
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => router.push("/process")}
            style={{
              background: "linear-gradient(90deg, #6366F1 0%, #4F46E5 45%, #7C3AED 100%)",
              boxShadow: "0 20px 40px rgba(79, 70, 229, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.3)"
            }}
            className="h-[58px] px-10 rounded-full text-white font-[800] text-base sm:text-[17px] flex items-center justify-center gap-3 cursor-pointer group transition-all duration-300 hover:brightness-105"
          >
            <span>Clear My Launch Doubts</span>
            <div className="group-hover:translate-x-1 transition-transform duration-200">
              <ArrowRight className="w-5 h-5 stroke-[2.5]" />
            </div>
          </motion.button>

          <p className="text-purple-100/80 text-sm font-semibold mt-5">
            Real launch questions. Structured answers. Clear next steps.
          </p>
        </div>

      </div>
    </section>
  );
};

export default FounderClarityHubSection;
