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
  Clock, 
  ShieldCheck, 
  Compass, 
  Building, 
  Box, 
  Globe, 
  MessageCircle, 
  ChevronDown,
  HelpCircle,
  FileCheck2,
  Users
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
      q: "How can I launch a perfume brand in India?",
      a: "To launch a perfume brand, you need fragrance direction, manufacturer selection, bottle and packaging planning, label content, brand positioning, website, marketplace readiness and marketing strategy. LaunchVeda helps connect these steps into one roadmap."
    },
    {
      q: "Does LaunchVeda help with perfume manufacturing?",
      a: "LaunchVeda helps with manufacturer selection, sampling coordination and product direction. Final manufacturing is handled by the selected manufacturing partner."
    },
    {
      q: "Can LaunchVeda help with perfume bottle and packaging?",
      a: "Yes. LaunchVeda supports bottle, cap, box, label and packaging direction so the perfume brand looks market-ready and premium."
    },
    {
      q: "Does LaunchVeda help with perfume branding?",
      a: "Yes. LaunchVeda supports brand naming, positioning, fragrance story, visual direction, packaging communication and launch messaging."
    },
    {
      q: "Can LaunchVeda help sell perfume online?",
      a: "Yes. LaunchVeda helps prepare website, marketplace listing content, product storytelling, social media content and growth direction for online launch."
    }
  ];

  return (
    <div id="perfume-launch-page" className="bg-white min-h-screen flex flex-col font-sans selection:bg-orange-500 selection:text-white">
      <SEOManager
        title="Perfume Brand Launch Services in India | LaunchVeda"
        description="LaunchVeda helps founders launch perfume brands in India with fragrance direction, manufacturer support, bottle and packaging planning, compliance, branding, website, marketplace launch and growth strategy."
        canonical="https://launchveda.com/perfume-brand-launch"
        breadcrumb={[
          { name: "Home", item: "https://launchveda.com" },
          { name: "Perfume Brand Launch", item: "https://launchveda.com/perfume-brand-launch" }
        ]}
        service={{
          name: "Perfume Brand Launch Services in India",
          description: "LaunchVeda helps founders build and launch perfume brands with fragrance direction, bottle planning, packaging, compliance, brand story, website, marketplace readiness and growth execution."
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
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            {/* Tag/Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-orange-400 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-8 animate-fade-in">
              <Sparkles className="w-4 h-4 text-orange-400 animate-pulse" />
              <span>Fragrance Brand Incubator</span>
            </div>

            {/* Main Headline */}
            <GsapTextReveal as="h1" variant="heading" className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 max-w-4xl mx-auto leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-orange-400">Perfume Brand Launch Services in India</GsapTextReveal>

            {/* Subheading */}
            <GsapTextReveal as="p" variant="subheading" className="text-slate-300 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed mb-10">LaunchVeda helps founders build and launch perfume brands with fragrance direction, bottle planning, packaging, compliance, brand story, website, marketplace readiness and growth execution.</GsapTextReveal>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button 
                onClick={handleScrollToForm}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#D71912] to-[#FF8A00] hover:from-[#e3241b] hover:to-[#ff991a] text-white font-bold rounded-xl shadow-lg shadow-orange-950/20 hover:shadow-orange-950/30 transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2 text-base"
              >
                <span>Build My Perfume Launch Roadmap</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={handleScrollToForm}
                className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 text-base backdrop-blur-md"
              >
                Explore Launch Services
              </button>
            </div>

            {/* Hero Pills */}
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {[
                "Fragrance Direction",
                "Bottle Planning",
                "Packaging Support",
                "Brand Story",
                "Marketplace Launch",
                "Growth Strategy"
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
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#D71912] to-[#FF8A00]" />
              
              <span className="text-xs font-bold uppercase tracking-widest text-[#D71912] bg-orange-50 px-3 py-1.5 rounded-md inline-block mb-4">
                Launch Overview
              </span>

              <GsapTextReveal as="h2" variant="heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 tracking-tight">How Does LaunchVeda Help You Launch a Perfume Brand?</GsapTextReveal>

              <GsapTextReveal as="p" variant="subheading" className="text-slate-700 leading-relaxed text-lg sm:text-xl mb-8 font-medium">Launch Veda helps founders launch perfume brands in India with support for fragrance planning, manufacturer selection, packaging, branding, website, marketplace listing, and marketing.</GsapTextReveal>

              <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-100">
                {[
                  "Fragrance to Brand",
                  "Packaging to Marketplace",
                  "Launch to Growth"
                ].map((pill, i) => (
                  <span 
                    key={i} 
                    className="bg-orange-50/80 border border-orange-100/80 text-[#D71912] px-4 py-2 rounded-full text-xs sm:text-sm font-bold flex items-center gap-2"
                  >
                    <CheckCircle className="w-4 h-4" />
                    <span>{pill}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: WHY PERFUME BRAND LAUNCH NEEDS STRATEGY */}
        <section id="strategy-importance" className="py-24 bg-white">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-sm font-bold uppercase text-[#FF8A00] tracking-wider block mb-3">Fragrance Business Logic</span>
              <GsapTextReveal as="h2" variant="heading" className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Perfume Is Not Just a Product. It Is a Brand Experience.</GsapTextReveal>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Fragrance Identity",
                  desc: "Your perfume needs a clear mood, audience, note direction and emotional story.",
                  icon: Compass,
                  color: "border-blue-100 bg-blue-50/20 text-blue-600"
                },
                {
                  title: "Bottle & Packaging Impact",
                  desc: "Perfume buying is highly visual. Bottle, cap, box and label must create premium perception.",
                  icon: Box,
                  color: "border-orange-100 bg-orange-50/20 text-orange-600"
                },
                {
                  title: "Strong Positioning",
                  desc: "Your brand must clearly stand apart in a crowded perfume market.",
                  icon: TrendingUp,
                  color: "border-emerald-100 bg-emerald-50/20 text-emerald-600"
                },
                {
                  title: "Marketplace Readiness",
                  desc: "Perfume brands need product content, lifestyle visuals, claims, descriptions and launch assets for D2C and marketplaces.",
                  icon: Globe,
                  color: "border-purple-100 bg-purple-50/20 text-purple-600"
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
              <span className="text-sm font-bold uppercase text-[#D71912] tracking-wider block mb-3">Our Deliverables</span>
              <GsapTextReveal as="h2" variant="heading" className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Our Perfume Brand Launch Support</GsapTextReveal>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  num: "01",
                  title: "Fragrance Direction",
                  desc: "We help define fragrance mood, target audience, gender direction, note family, usage occasion and product positioning."
                },
                {
                  num: "02",
                  title: "Manufacturer Support",
                  desc: "We help identify suitable perfume manufacturing partners based on MOQ, bottle size, fragrance quality and launch goals."
                },
                {
                  num: "03",
                  title: "Bottle, Cap & Packaging Direction",
                  desc: "We guide bottle format, cap style, box structure, label approach and premium product presentation."
                },
                {
                  num: "04",
                  title: "Brand Strategy & Naming",
                  desc: "We help define brand name direction, tagline, story, audience angle, pricing logic and fragrance communication."
                },
                {
                  num: "05",
                  title: "Website & D2C Setup",
                  desc: "We support a conversion-focused perfume website with product storytelling, SEO content, lead capture and launch pages."
                },
                {
                  num: "06",
                  title: "Marketplace Launch",
                  desc: "We help prepare product listings, descriptions, visual direction and marketplace-ready content for platforms like Amazon, Flipkart and Nykaa."
                },
                {
                  num: "07",
                  title: "Social Media & Content",
                  desc: "We build content themes for fragrance storytelling, lifestyle positioning, reels, carousels, founder content and launch campaigns."
                },
                {
                  num: "08",
                  title: "Growth & Marketing Roadmap",
                  desc: "We support awareness, lead generation, influencer direction, performance ads and product launch campaigns."
                }
              ].map((del, idx) => (
                <div 
                  key={idx}
                  className="bg-white border border-slate-200/60 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all group"
                >
                  <span className="text-xs font-bold text-orange-500 bg-orange-50 group-hover:bg-[#FF8A00] group-hover:text-white px-2.5 py-1 rounded-md transition-all inline-block mb-4">
                    {del.num}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors">{del.title}</h3>
                  <GsapTextReveal as="p" variant="text" className="text-slate-600 text-xs sm:text-sm leading-relaxed">{del.desc}</GsapTextReveal>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: PERFUME LAUNCH PROCESS */}
        <section id="launch-process" className="py-24 bg-white overflow-hidden">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-sm font-bold uppercase text-orange-500 tracking-wider block mb-3">Six Launch Stages</span>
              <GsapTextReveal as="h2" variant="heading" className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">How We Launch a Perfume Brand</GsapTextReveal>
            </div>

            {/* Vertical/Horizontal Timeline */}
            <div className="relative">
              {/* Center Line for desktop */}
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-100 transform -translate-x-1/2" />
              
              <div className="space-y-12 lg:space-y-16">
                {[
                  {
                    step: "Step 01",
                    title: "Define Fragrance Positioning",
                    desc: "We identify the audience, fragrance mood, price segment, gender direction and brand promise."
                  },
                  {
                    step: "Step 02",
                    title: "Plan Product Range",
                    desc: "We help decide SKU count, bottle sizes, fragrance variants, hero product and launch range."
                  },
                  {
                    step: "Step 03",
                    title: "Coordinate Sampling & Manufacturer Direction",
                    desc: "We help with fragrance brief, sampling direction, manufacturer coordination and product refinement."
                  },
                  {
                    step: "Step 04",
                    title: "Build Packaging & Brand Identity",
                    desc: "We align bottle, cap, box, label, logo, colors, typography and product storytelling."
                  },
                  {
                    step: "Step 05",
                    title: "Prepare Website & Marketplace Assets",
                    desc: "We create product content, SEO sections, listing direction, lifestyle content and launch assets."
                  },
                  {
                    step: "Step 06",
                    title: "Launch & Grow",
                    desc: "We support social media, ads, influencer planning, marketplace push and growth campaigns."
                  }
                ].map((item, idx) => (
                  <div key={idx} className={`flex flex-col lg:flex-row items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                    {/* Left/Right Side Box */}
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end px-4 lg:px-8">
                      <div className={`w-full max-w-[480px] bg-slate-50/80 border border-slate-100 p-6 sm:p-8 rounded-2xl transition-all hover:border-slate-200 hover:bg-white shadow-sm hover:shadow ${idx % 2 === 1 ? 'lg:text-left' : 'lg:text-right'}`}>
                        <span className="text-[#D71912] font-bold text-sm tracking-widest uppercase block mb-2">{item.step}</span>
                        <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-3">{item.title}</h3>
                        <GsapTextReveal as="p" variant="text" className="text-slate-600 text-sm leading-relaxed">{item.desc}</GsapTextReveal>
                      </div>
                    </div>
                    
                    {/* Center Pin */}
                    <div className="hidden lg:flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 border-4 border-white text-orange-600 font-extrabold text-sm z-10 shadow">
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

        {/* SECTION 6: PERFUME PRODUCT PLANNING & SECTION 7: WHO IS THIS FOR */}
        <section id="planning-and-audience" className="py-24 bg-slate-50 border-t border-b border-slate-200/60">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              
              {/* Product Decision Checklist */}
              <div className="bg-white border border-slate-200/80 rounded-3xl p-8 sm:p-10 shadow-sm">
                <GsapTextReveal as="h2" variant="heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-8 tracking-tight">What We Help You Decide</GsapTextReveal>
                <div className="space-y-4">
                  {[
                    "Eau de Parfum, perfume oil or body mist direction",
                    "Male, female or unisex fragrance positioning",
                    "30ml, 50ml or 100ml bottle planning",
                    "Premium, affordable luxury or mass positioning",
                    "Bottle and cap style",
                    "Fragrance family and mood",
                    "Packaging and label direction",
                    "Product launch price and offer strategy",
                    "Marketplace and D2C launch plan"
                  ].map((pt, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mt-0.5">
                        <Check className="w-4 h-4 font-bold" />
                      </span>
                      <GsapTextReveal as="p" variant="text" className="text-slate-700 text-sm sm:text-base font-medium">{pt}</GsapTextReveal>
                    </div>
                  ))}
                </div>
              </div>

              {/* Target Audience / Best For */}
              <div className="bg-[#061033] text-white rounded-3xl p-8 sm:p-10 shadow-lg relative overflow-hidden flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-40 h-40 bg-orange-500/10 rounded-full blur-2xl pointer-events-none" />
                <div>
                  <GsapTextReveal as="h2" variant="heading" className="text-2xl sm:text-3xl font-extrabold mb-8 tracking-tight text-white">This Service Is Best For</GsapTextReveal>
                  <div className="space-y-4 mb-8">
                    {[
                      "Founders planning to launch a new perfume brand",
                      "D2C businesses entering the fragrance category",
                      "Existing brands adding perfume products",
                      "Influencers or creators launching fragrance lines",
                      "Traders or manufacturers wanting to build their own brand",
                      "Startups needing fragrance, packaging and marketing clarity"
                    ].map((pt, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center mt-0.5">
                          <Users className="w-4 h-4" />
                        </span>
                        <GsapTextReveal as="p" variant="text" className="text-slate-200 text-sm sm:text-base font-medium">{pt}</GsapTextReveal>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-md">
                  <h4 className="font-bold text-orange-400 text-sm mb-1">Struggling with formulation or MOQs?</h4>
                  <GsapTextReveal as="p" variant="text" className="text-slate-300 text-xs">We provide complete direction to help you bridge the gap with manufacturing partners without losing control of quality.</GsapTextReveal>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* COMPREHENSIVE INQUIRY FORM */}
        <section id="inquiry" className="py-20 bg-white scroll-mt-20">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-sm font-bold uppercase text-[#D71912] tracking-wider block mb-3">Instant Roadmap Request</span>
              <GsapTextReveal as="h2" variant="heading" className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Plan Your Perfume Launch With Us</GsapTextReveal>
              <GsapTextReveal as="p" variant="subheading" className="text-slate-600 mt-3 text-sm sm:text-base">Provide your details below and we will customize a bespoke step-by-step brand blueprint to get your fragrance brand onto the shelf.</GsapTextReveal>
            </div>
            <LaunchInquiryFormSection />
          </div>
        </section>

        {/* SECTION 8: FAQ */}
        <section id="faq-section" className="py-24 bg-slate-50 border-t border-b border-slate-200/60">
          <div className="max-w-[800px] mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <span className="text-sm font-bold uppercase text-orange-500 tracking-wider block mb-3">Got Questions?</span>
              <GsapTextReveal as="h2" variant="heading" className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Perfume Brand Launch — FAQs</GsapTextReveal>
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
                    <span className="font-bold text-slate-800 text-base sm:text-lg hover:text-orange-600 transition-colors">
                      {faq.q}
                    </span>
                    <span className={`w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${activeFaq === idx ? 'rotate-180 bg-orange-50 text-orange-600' : 'text-slate-400'}`}>
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

        {/* SECTION 9: FINAL CTA */}
        <section id="final-cta" className="relative bg-[#061033] text-white py-24 overflow-hidden text-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(215,25,18,0.08)_0%,transparent_70%)] pointer-events-none" />
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
            <GsapTextReveal as="h2" variant="heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-orange-400">Ready to Launch Your Perfume Brand?</GsapTextReveal>
            
            <GsapTextReveal as="p" variant="subheading" className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10">Share your fragrance idea and LaunchVeda will help you build a clear roadmap for product, packaging, brand, marketplace and growth.</GsapTextReveal>

            <button 
              onClick={handleScrollToForm}
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-[#D71912] to-[#FF8A00] hover:from-[#e3241b] hover:to-[#ff991a] hover:scale-[1.02] transform transition-all rounded-xl shadow-lg shadow-orange-950/20"
            >
              Build My Perfume Launch Roadmap
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
