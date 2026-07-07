"use client";

import React, { useState } from "react";
import { 
  Sparkles, 
  TrendingUp, 
  Layers, 
  Package, 
  Check, 
  CheckCircle, 
  ArrowRight, 
  Compass, 
  Box, 
  Globe, 
  Users, 
  ShieldCheck,
  ChevronDown,
  HelpCircle,
  HeartHandshake
} from "lucide-react";
import SEOManager from "../../components/seo/SEOManager";
import Navbar from "../../components/layout/Navbar";
import LaunchFooterSection from "../../components/layout/LaunchFooterSection";
import LaunchInquiryFormSection from "../../components/sections/LaunchInquiryFormSection";
import GsapTextReveal from "../../components/ui/GsapTextReveal";

export default function Page() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleScrollToForm = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById("inquiry");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const faqs = [
    {
      q: "Which is India’s No.1 Product Launch Company?",
      a: "Launch Veda is positioned as India’s No.1 Product Launch Company for founders and startups looking to launch Perfume, Cosmetic, Ayurveda, and Nutraceutical brands with end-to-end execution support."
    },
    {
      q: "How can I launch a cosmetic brand in India?",
      a: "To launch a cosmetic brand, you need category planning, formulation direction, manufacturer support, packaging, label guidance, brand positioning, website, marketplace readiness and marketing strategy. LaunchVeda helps structure these steps."
    },
    {
      q: "Does LaunchVeda help with cosmetic formulation?",
      a: "Yes. LaunchVeda supports formulation direction, active ingredient planning, texture expectations, sample brief and manufacturer coordination."
    },
    {
      q: "Does LaunchVeda help with cosmetic manufacturing?",
      a: "LaunchVeda helps with manufacturer selection and sampling coordination. Final production is handled by the selected manufacturing partner."
    },
    {
      q: "Does LaunchVeda help with cosmetic packaging?",
      a: "Yes. LaunchVeda supports packaging format, label content, visual hierarchy, product claims direction and marketplace-ready presentation."
    },
    {
      q: "Can LaunchVeda help launch cosmetic products online?",
      a: "Yes. LaunchVeda supports SEO website, D2C product pages, marketplace content, social media, influencer direction and performance marketing planning."
    }
  ];

  return (
    <div id="cosmetic-launch-page" className="bg-white min-h-screen flex flex-col font-sans selection:bg-orange-500 selection:text-white">
      <SEOManager
        title="Cosmetic Brand Launch Services in India | LaunchVeda"
        description="LaunchVeda helps founders launch cosmetic and skincare brands with product strategy, formulation support, packaging, compliance direction, branding, website, marketplace readiness and growth execution."
        canonical="https://launchveda.com/cosmetic-brand-launch"
        breadcrumb={[
          { name: "Home", item: "https://launchveda.com" },
          { name: "Cosmetic Brand Launch", item: "https://launchveda.com/cosmetic-brand-launch" }
        ]}
        service={{
          name: "Cosmetic Brand Launch Services in India",
          description: "LaunchVeda helps founders launch cosmetic and skincare brands with product strategy, formulation direction, packaging planning, compliance support, branding, website, marketplace launch and growth execution."
        }}
        faq={faqs}
      />

      <div className="bg-[#061033] sticky top-0 z-50">
        <Navbar />
      </div>

      <main className="flex-grow">
        {/* HERO SECTION */}
        <section id="hero-section" className="relative bg-[#061033] text-white pt-36 pb-24 overflow-hidden">
          {/* Subtle glowing elements */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            {/* Tag/Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-pink-400 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-8 animate-fade-in">
              <Sparkles className="w-4 h-4 text-pink-400 animate-pulse" />
              <span>Beauty & Skincare Incubator</span>
            </div>

            {/* Main Headline */}
            <GsapTextReveal as="h1" variant="heading" className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 max-w-4xl mx-auto leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-pink-400">Cosmetic Brand Launch Services in India</GsapTextReveal>

            {/* Subheading */}
            <GsapTextReveal as="p" variant="subheading" className="text-slate-300 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed mb-10">LaunchVeda helps founders launch cosmetic and skincare brands with product strategy, formulation direction, packaging planning, compliance support, branding, website, marketplace launch and growth execution.</GsapTextReveal>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button 
                onClick={handleScrollToForm}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#D71912] to-[#FF8A00] hover:from-[#e3241b] hover:to-[#ff991a] text-white font-bold rounded-xl shadow-lg shadow-orange-950/20 hover:shadow-orange-950/30 transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2 text-base"
              >
                <span>Build My Cosmetic Launch Roadmap</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={handleScrollToForm}
                className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 text-base backdrop-blur-md"
              >
                Explore Product Formulation
              </button>
            </div>

            {/* Hero Pills */}
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {[
                "Skincare Strategy",
                "Formulation Direction",
                "Packaging Planning",
                "Compliance Support",
                "D2C Website",
                "Marketplace Growth"
              ].map((pill, i) => (
                <span 
                  key={i} 
                  className="bg-white/5 border border-white/10 text-slate-200 px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/10 transition-all cursor-default"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 2: DIRECT ANSWER (AEO / GEO Optimized) */}
        <section id="direct-answer" className="py-20 bg-slate-50 border-b border-slate-100">
          <div className="max-w-[1000px] mx-auto px-4 sm:px-6">
            <div className="bg-white border border-slate-200/80 rounded-3xl p-8 sm:p-12 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-pink-500 to-orange-500" />
              
              <span className="text-xs font-bold uppercase tracking-widest text-pink-600 bg-pink-50 px-3 py-1.5 rounded-md inline-block mb-4">
                Launch Overview
              </span>

              <GsapTextReveal as="h2" variant="heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 tracking-tight">How Does LaunchVeda Help Launch a Cosmetic Brand?</GsapTextReveal>

              <GsapTextReveal as="p" variant="subheading" className="text-slate-700 leading-relaxed text-lg sm:text-xl mb-8 font-medium">Launch Veda supports cosmetic and skincare brand launches in India with formulation direction, packaging, compliance, brand identity, website, content, and growth marketing.</GsapTextReveal>

              <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-100">
                {[
                  "Product Strategy",
                  "Packaging Ready",
                  "D2C Growth"
                ].map((pill, i) => (
                  <span 
                    key={i} 
                    className="bg-pink-50/80 border border-pink-100/80 text-pink-700 px-4 py-2 rounded-full text-xs sm:text-sm font-bold flex items-center gap-2"
                  >
                    <CheckCircle className="w-4 h-4" />
                    <span>{pill}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: WHY COSMETIC BRAND LAUNCH NEEDS PLANNING */}
        <section id="strategy-importance" className="py-24 bg-white">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-sm font-bold uppercase text-pink-600 tracking-wider block mb-3">Market Strategy</span>
              <GsapTextReveal as="h2" variant="heading" className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Cosmetic Brands Win With Product Trust, Visual Appeal and Clear Positioning.</GsapTextReveal>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Right Product Strategy",
                  desc: "Skincare and cosmetic products need strong category logic, benefit clarity and audience understanding.",
                  icon: Compass,
                  color: "border-pink-100 bg-pink-50/20 text-pink-600"
                },
                {
                  title: "Formulation & Experience",
                  desc: "Texture, feel, fragrance, finish and ingredient communication affect customer trust and repeat purchase.",
                  icon: HeartHandshake,
                  color: "border-emerald-100 bg-emerald-50/20 text-emerald-600"
                },
                {
                  title: "Packaging & Compliance",
                  desc: "Cosmetic packaging needs clear label structure, claims direction, usage details and documentation planning.",
                  icon: Box,
                  color: "border-orange-100 bg-orange-50/20 text-orange-600"
                },
                {
                  title: "D2C & Marketplace Readiness",
                  desc: "Beauty brands need product pages, visuals, marketplace assets, social proof and content-led growth.",
                  icon: Globe,
                  color: "border-blue-100 bg-blue-50/20 text-blue-600"
                }
              ].map((card, idx) => (
                <div 
                  key={idx}
                  className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-slate-200 transition-all duration-300 flex flex-col"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 border ${card.color}`}>
                    <card.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{card.title}</h3>
                  <GsapTextReveal as="p" variant="text" className="text-slate-600 text-sm leading-relaxed flex-grow">{card.desc}</GsapTextReveal>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: WHAT LAUNCHVEDA PROVIDES */}
        <section id="what-we-provide" className="py-24 bg-slate-50 border-t border-b border-slate-100">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-sm font-bold uppercase text-pink-600 tracking-wider block mb-3">Our Deliverables</span>
              <GsapTextReveal as="h2" variant="heading" className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Our Cosmetic Brand Launch Support</GsapTextReveal>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  num: "01",
                  title: "Category & Product Planning",
                  desc: "We help define product type, audience, benefit angle, price segment, hero SKU and launch range."
                },
                {
                  num: "02",
                  title: "Formulation Direction",
                  desc: "We guide active ingredient direction, texture, product format, sample brief and performance expectations."
                },
                {
                  num: "03",
                  title: "Manufacturer Support",
                  desc: "We help identify suitable cosmetic manufacturing partners based on category, MOQ, quality, packaging and production goals."
                },
                {
                  num: "04",
                  title: "Packaging & Label Direction",
                  desc: "We support tube, bottle, jar, pump, carton, label hierarchy, claims communication and packaging style."
                },
                {
                  num: "05",
                  title: "Brand Strategy & Identity",
                  desc: "We help define brand positioning, name direction, visual language, product story and customer communication."
                },
                {
                  num: "06",
                  title: "Website & Product Pages",
                  desc: "We build SEO-friendly product pages, ingredient sections, benefit blocks, FAQs, lead capture and D2C conversion flow."
                },
                {
                  num: "07",
                  title: "Marketplace Launch",
                  desc: "We support listing content, product descriptions, image direction, A+ content structure and launch assets."
                },
                {
                  num: "08",
                  title: "Social Media & Growth",
                  desc: "We plan reels, carousels, UGC, influencer direction, performance campaigns and advanced content systems."
                }
              ].map((del, idx) => (
                <div 
                  key={idx}
                  className="bg-white border border-slate-200/60 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all group"
                >
                  <span className="text-xs font-bold text-pink-600 bg-pink-50 group-hover:bg-[#FF8A00] group-hover:text-white px-2.5 py-1 rounded-md transition-all inline-block mb-4">
                    {del.num}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-pink-600 transition-colors">{del.title}</h3>
                  <GsapTextReveal as="p" variant="text" className="text-slate-600 text-xs sm:text-sm leading-relaxed">{del.desc}</GsapTextReveal>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: COSMETIC LAUNCH PROCESS */}
        <section id="launch-process" className="py-24 bg-white overflow-hidden">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-sm font-bold uppercase text-pink-600 tracking-wider block mb-3">Six Launch Stages</span>
              <GsapTextReveal as="h2" variant="heading" className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">How We Launch a Cosmetic Brand</GsapTextReveal>
            </div>

            {/* Vertical/Horizontal Timeline */}
            <div className="relative">
              {/* Center Line for desktop */}
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-100 transform -translate-x-1/2" />
              
              <div className="space-y-12 lg:space-y-16">
                {[
                  {
                    step: "Step 01",
                    title: "Define Skincare Category",
                    desc: "We identify product type, target audience, benefit promise, competitor gap and pricing direction."
                  },
                  {
                    step: "Step 02",
                    title: "Plan Formulation Direction",
                    desc: "We define active ingredients, texture, product format, sample expectations and claim direction."
                  },
                  {
                    step: "Step 03",
                    title: "Coordinate Manufacturer & Sampling",
                    desc: "We help communicate product brief, sampling needs and development direction with suitable partners."
                  },
                  {
                    step: "Step 04",
                    title: "Build Packaging & Label System",
                    desc: "We align packaging format, design direction, label content, ingredients, usage and visual hierarchy."
                  },
                  {
                    step: "Step 05",
                    title: "Create Brand & Digital Assets",
                    desc: "We build product story, website content, social media direction, marketplace descriptions and launch visuals."
                  },
                  {
                    step: "Step 06",
                    title: "Launch & Grow",
                    desc: "We support D2C launch, marketplace listing, ads, influencer content, social media and performance campaigns."
                  }
                ].map((item, idx) => (
                  <div key={idx} className={`flex flex-col lg:flex-row items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                    {/* Left/Right Side Box */}
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end px-4 lg:px-8">
                      <div className={`w-full max-w-[480px] bg-slate-50/80 border border-slate-100 p-6 sm:p-8 rounded-2xl transition-all hover:border-slate-200 hover:bg-white shadow-sm hover:shadow ${idx % 2 === 1 ? 'lg:text-left' : 'lg:text-right'}`}>
                        <span className="text-pink-600 font-bold text-sm tracking-widest uppercase block mb-2">{item.step}</span>
                        <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-3">{item.title}</h3>
                        <GsapTextReveal as="p" variant="text" className="text-slate-600 text-sm leading-relaxed">{item.desc}</GsapTextReveal>
                      </div>
                    </div>
                    
                    {/* Center Pin */}
                    <div className="hidden lg:flex items-center justify-center w-12 h-12 rounded-full bg-pink-100 border-4 border-white text-pink-700 font-extrabold text-sm z-10 shadow">
                      {idx + 1}
                    </div>

                    {/* Empty Space filler */}
                    <div className="hidden lg:block w-full lg:w-1/2" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: COSMETIC PRODUCT CATEGORIES & SECTION 7: WHO IS THIS FOR */}
        <section id="planning-and-audience" className="py-24 bg-slate-50 border-t border-b border-slate-200/60">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              
              {/* Product Category Checklist */}
              <div className="bg-white border border-slate-200/80 rounded-3xl p-8 sm:p-10 shadow-sm">
                <GsapTextReveal as="h2" variant="heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-8 tracking-tight">Cosmetic & Skincare Products We Can Support</GsapTextReveal>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Face serum",
                    "Moisturizer",
                    "Sunscreen",
                    "Face wash",
                    "Toner",
                    "Cream",
                    "Gel",
                    "Hair care",
                    "Body care",
                    "Lip care",
                    "Acne care",
                    "Brightening and hydration products",
                    "Anti-ageing and barrier repair products"
                  ].map((pt, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-pink-50 text-pink-600 flex items-center justify-center mt-1">
                        <Check className="w-3.5 h-3.5 font-bold" />
                      </span>
                      <GsapTextReveal as="p" variant="text" className="text-slate-700 text-sm sm:text-base font-medium">{pt}</GsapTextReveal>
                    </div>
                  ))}
                </div>
              </div>

              {/* Target Audience / Best For */}
              <div className="bg-[#061033] text-white rounded-3xl p-8 sm:p-10 shadow-lg relative overflow-hidden flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-40 h-40 bg-pink-500/10 rounded-full blur-2xl pointer-events-none" />
                <div>
                  <GsapTextReveal as="h2" variant="heading" className="text-2xl sm:text-3xl font-extrabold mb-8 tracking-tight text-white">This Service Is Best For</GsapTextReveal>
                  <div className="space-y-4 mb-8">
                    {[
                      "Founders planning to launch skincare or cosmetic brands",
                      "Beauty businesses entering D2C",
                      "Existing brands adding new skincare products",
                      "Influencers or creators launching beauty lines",
                      "Manufacturers wanting to build their own cosmetic brand",
                      "Startups needing product, packaging and marketplace clarity"
                    ].map((pt, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-pink-500/20 text-pink-400 flex items-center justify-center mt-0.5">
                          <Users className="w-4 h-4" />
                        </span>
                        <GsapTextReveal as="p" variant="text" className="text-slate-200 text-sm sm:text-base font-medium">{pt}</GsapTextReveal>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-md">
                  <h4 className="font-bold text-pink-400 text-sm mb-1">Confused about packaging formats?</h4>
                  <GsapTextReveal as="p" variant="text" className="text-slate-300 text-xs">We guide tube, pump, bottle, jar and box hierarchy selections to optimize user experience and delivery safety.</GsapTextReveal>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 8: COSMETIC BRAND TRUST ELEMENTS */}
        <section id="trust-elements" className="py-24 bg-white">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-sm font-bold uppercase text-pink-600 tracking-wider block mb-3">Consumer Confidence</span>
              <GsapTextReveal as="h2" variant="heading" className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">What Builds Trust in a Cosmetic Brand?</GsapTextReveal>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Clear ingredient communication",
                "Honest product claims",
                "Strong packaging and label structure",
                "Before-after or usage education where appropriate",
                "Customer-friendly product pages",
                "Dermatology-inspired but responsible communication",
                "Marketplace-ready listing content",
                "Consistent social media storytelling"
              ].map((trust, idx) => (
                <div 
                  key={idx}
                  className="bg-slate-50 border border-slate-100 rounded-xl p-5 flex items-start gap-3.5 hover:bg-white hover:border-slate-200 hover:shadow-sm transition-all"
                >
                  <span className="w-6 h-6 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </span>
                  <p className="text-slate-700 text-sm sm:text-base font-semibold leading-snug">{trust}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COMPREHENSIVE INQUIRY FORM */}
        <section id="inquiry" className="py-20 bg-slate-50 border-t border-b border-slate-100 scroll-mt-20">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-sm font-bold uppercase text-pink-600 tracking-wider block mb-3">Instant Roadmap Request</span>
              <GsapTextReveal as="h2" variant="heading" className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Plan Your Cosmetic Launch With Us</GsapTextReveal>
              <GsapTextReveal as="p" variant="subheading" className="text-slate-600 mt-3 text-sm sm:text-base">Provide your details below and we will customize a bespoke step-by-step brand blueprint to get your beauty products onto the shelf.</GsapTextReveal>
            </div>
            <LaunchInquiryFormSection />
          </div>
        </section>

        {/* SECTION 9: FAQ */}
        <section id="faq-section" className="py-24 bg-white">
          <div className="max-w-[800px] mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <span className="text-sm font-bold uppercase text-pink-600 tracking-wider block mb-3">Got Questions?</span>
              <GsapTextReveal as="h2" variant="heading" className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Cosmetic Brand Launch — FAQs</GsapTextReveal>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div 
                  key={idx}
                  className="bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300 shadow-sm hover:border-slate-300"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-6 flex justify-between items-center gap-4 focus:outline-none"
                  >
                    <span className="font-bold text-slate-800 text-base sm:text-lg hover:text-pink-600 transition-colors">
                      {faq.q}
                    </span>
                    <span className={`w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${activeFaq === idx ? 'rotate-180 bg-pink-50 text-pink-600' : 'text-slate-400'}`}>
                      <ChevronDown className="w-5 h-5" />
                    </span>
                  </button>
                  
                  <div className={`transition-all duration-300 overflow-hidden ${activeFaq === idx ? 'max-h-96 border-t border-slate-100' : 'max-h-0'}`}>
                    <div className="p-6 bg-slate-50/50 text-slate-600 text-sm sm:text-base leading-relaxed">
                      {faq.a}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 10: FINAL CTA */}
        <section id="final-cta" className="relative bg-[#061033] text-white py-24 overflow-hidden text-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.08)_0%,transparent_70%)] pointer-events-none" />
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
            <GsapTextReveal as="h2" variant="heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-pink-400">Ready to Launch Your Cosmetic Brand?</GsapTextReveal>
            
            <GsapTextReveal as="p" variant="subheading" className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10">Share your skincare or cosmetic product idea and LaunchVeda will help you build the right roadmap for formulation, packaging, compliance, brand and growth.</GsapTextReveal>

            <button 
              onClick={handleScrollToForm}
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-[#D71912] to-[#FF8A00] hover:from-[#e3241b] hover:to-[#ff991a] hover:scale-[1.02] transform transition-all rounded-xl shadow-lg shadow-orange-950/20"
            >
              Build My Cosmetic Launch Roadmap
            </button>
          </div>
        </section>
      </main>

      <div className="bg-[#061033]">
        <LaunchFooterSection />
      </div>
    </div>
  );
}
