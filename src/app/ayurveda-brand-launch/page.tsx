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
  AlertTriangle,
  ChevronDown,
  HelpCircle,
  FolderHeart
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
      q: "How can I launch an Ayurveda brand in India?",
      a: "To launch an Ayurveda brand, you need category selection, formulation direction, manufacturer support, packaging, label planning, compliance direction, website, marketplace readiness and marketing strategy. LaunchVeda helps structure these steps."
    },
    {
      q: "Does LaunchVeda help with Ayurveda formulation?",
      a: "Yes. LaunchVeda supports product category planning, herbal ingredient direction, formulation brief and sample coordination with suitable partners."
    },
    {
      q: "Does LaunchVeda help with Ayurveda manufacturing?",
      a: "LaunchVeda helps with manufacturer selection and coordination. Final manufacturing is handled by the selected manufacturing partner."
    },
    {
      q: "Does LaunchVeda help with Ayurveda label compliance?",
      a: "LaunchVeda supports packaging and label direction. Final compliance depends on product type, manufacturer, formulation and applicable regulatory requirements."
    },
    {
      q: "Can LaunchVeda help sell Ayurveda products online?",
      a: "Yes. LaunchVeda supports website, marketplace content, social media, product education and growth planning for Ayurveda brands."
    }
  ];

  return (
    <div id="ayurveda-launch-page" className="bg-white min-h-screen flex flex-col font-sans selection:bg-orange-500 selection:text-white">
      <SEOManager
        title="Ayurveda Brand Launch Services in India | LaunchVeda"
        description="LaunchVeda helps founders launch Ayurveda brands with product category planning, formulation guidance, manufacturer support, packaging, labeling, compliance direction, marketplace readiness and growth strategy."
        canonical="https://launchveda.com/ayurveda-brand-launch"
        breadcrumb={[
          { name: "Home", item: "https://launchveda.com" },
          { name: "Ayurveda Brand Launch", item: "https://launchveda.com/ayurveda-brand-launch" }
        ]}
        service={{
          name: "Ayurveda Brand Launch Services in India",
          description: "LaunchVeda helps founders build Ayurveda and herbal wellness brands with category planning, formulation direction, manufacturer support, packaging, labeling, compliance readiness, website, marketplace and growth execution."
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
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            {/* Tag/Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-emerald-400 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-8 animate-fade-in">
              <Sparkles className="w-4 h-4 text-emerald-400 animate-pulse" />
              <span>Modern Ayurvedic Path</span>
            </div>

            {/* Main Headline */}
            <GsapTextReveal as="h1" variant="heading" className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 max-w-4xl mx-auto leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-emerald-400">Ayurveda Brand Launch Services in India</GsapTextReveal>

            {/* Subheading */}
            <GsapTextReveal as="p" variant="subheading" className="text-slate-300 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed mb-10">LaunchVeda helps founders build Ayurveda and herbal wellness brands with category planning, formulation direction, manufacturer support, packaging, labeling, compliance readiness, website, marketplace and growth execution.</GsapTextReveal>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button 
                onClick={handleScrollToForm}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#D71912] to-[#FF8A00] hover:from-[#e3241b] hover:to-[#ff991a] text-white font-bold rounded-xl shadow-lg shadow-orange-950/20 hover:shadow-orange-950/30 transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2 text-base"
              >
                <span>Build My Ayurveda Launch Roadmap</span>
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
                "Ayurveda Product Planning",
                "Herbal Formulation Direction",
                "Manufacturer Support",
                "Label Guidance",
                "Marketplace Readiness",
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
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-emerald-500 to-teal-500" />
              
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-md inline-block mb-4">
                Launch Overview
              </span>

              <GsapTextReveal as="h2" variant="heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 tracking-tight">How Does LaunchVeda Help Launch an Ayurveda Brand?</GsapTextReveal>

              <GsapTextReveal as="p" variant="subheading" className="text-slate-700 leading-relaxed text-lg sm:text-xl mb-8 font-medium">Launch Veda helps founders launch Ayurveda brands in India with product planning, manufacturer coordination, compliance guidance, packaging, catalogue, website, and marketing support.</GsapTextReveal>

              <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-100">
                {[
                  "Category Clarity",
                  "Formulation Direction",
                  "Compliance Ready"
                ].map((pill, i) => (
                  <span 
                    key={i} 
                    className="bg-emerald-50/80 border border-emerald-100/80 text-emerald-700 px-4 py-2 rounded-full text-xs sm:text-sm font-bold flex items-center gap-2"
                  >
                    <CheckCircle className="w-4 h-4" />
                    <span>{pill}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: WHY AYURVEDA BRAND LAUNCH NEEDS CLARITY */}
        <section id="strategy-importance" className="py-24 bg-white">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-sm font-bold uppercase text-emerald-600 tracking-wider block mb-3">Holistic Strategy</span>
              <GsapTextReveal as="h2" variant="heading" className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Ayurveda Brands Need Trust, Clarity and Compliance From Day One.</GsapTextReveal>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Product Category Direction",
                  desc: "Ayurveda has many product formats. The right category, use case and benefit angle must be clear.",
                  icon: Compass,
                  color: "border-emerald-100 bg-emerald-50/20 text-emerald-600"
                },
                {
                  title: "Formulation Confidence",
                  desc: "Herbal ingredient logic, product format and benefit communication need structured planning.",
                  icon: FolderHeart,
                  color: "border-pink-100 bg-pink-50/20 text-pink-600"
                },
                {
                  title: "Label & Compliance Readiness",
                  desc: "Ayurveda products need careful packaging, label content and documentation direction.",
                  icon: Box,
                  color: "border-orange-100 bg-orange-50/20 text-orange-600"
                },
                {
                  title: "Trust-Based Branding",
                  desc: "Customers choose Ayurveda brands based on credibility, ingredient clarity, story and visible trust signals.",
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
              <span className="text-sm font-bold uppercase text-emerald-600 tracking-wider block mb-3">Our Deliverables</span>
              <GsapTextReveal as="h2" variant="heading" className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Our Ayurveda Brand Launch Support</GsapTextReveal>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  num: "01",
                  title: "Category & Product Planning",
                  desc: "We help define the right Ayurveda category, product format, customer problem, benefit angle and launch range."
                },
                {
                  num: "02",
                  title: "Formulation Direction",
                  desc: "We support herbal ingredient logic, formulation brief, product format direction and sample planning."
                },
                {
                  num: "03",
                  title: "Manufacturer Support",
                  desc: "We help identify suitable Ayurveda manufacturing partners based on product type, MOQ, quality expectation and documentation needs."
                },
                {
                  num: "04",
                  title: "Packaging & Label Guidance",
                  desc: "We guide packaging structure, label hierarchy, ingredient communication, claims approach and compliance-friendly content direction."
                },
                {
                  num: "05",
                  title: "Brand Strategy",
                  desc: "We help define brand story, positioning, audience, trust signals, product promise and communication tone."
                },
                {
                  num: "06",
                  title: "Website & Marketplace Setup",
                  desc: "We support SEO-friendly website sections, product pages, marketplace content and category-specific launch assets."
                },
                {
                  num: "07",
                  title: "Social Media & Education Content",
                  desc: "We create content themes around ingredients, benefits, founder education, product trust and customer awareness."
                },
                {
                  num: "08",
                  title: "Growth Roadmap",
                  desc: "We help plan launch campaigns, marketplace push, performance marketing direction and advanced content systems."
                }
              ].map((del, idx) => (
                <div 
                  key={idx}
                  className="bg-white border border-slate-200/60 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all group"
                >
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 group-hover:bg-emerald-600 group-hover:text-white px-2.5 py-1 rounded-md transition-all inline-block mb-4">
                    {del.num}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">{del.title}</h3>
                  <GsapTextReveal as="p" variant="text" className="text-slate-600 text-xs sm:text-sm leading-relaxed">{del.desc}</GsapTextReveal>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: AYURVEDA LAUNCH PROCESS */}
        <section id="launch-process" className="py-24 bg-white overflow-hidden">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-sm font-bold uppercase text-emerald-600 tracking-wider block mb-3">Six Launch Stages</span>
              <GsapTextReveal as="h2" variant="heading" className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">How We Launch an Ayurveda Brand</GsapTextReveal>
            </div>

            {/* Vertical/Horizontal Timeline */}
            <div className="relative">
              {/* Center Line for desktop */}
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-100 transform -translate-x-1/2" />
              
              <div className="space-y-12 lg:space-y-16">
                {[
                  {
                    step: "Step 01",
                    title: "Define Product Category",
                    desc: "We identify whether the brand should start with juice, capsules, oil, powder, syrup, personal care, wellness or another format."
                  },
                  {
                    step: "Step 02",
                    title: "Build Product & Formulation Direction",
                    desc: "We define herbal ingredient logic, product benefit, usage style, formulation brief and sample direction."
                  },
                  {
                    step: "Step 03",
                    title: "Select Manufacturer Direction",
                    desc: "We help match the product requirement with suitable manufacturing partners and sampling expectations."
                  },
                  {
                    step: "Step 04",
                    title: "Plan Packaging & Label",
                    desc: "We align packaging, label content, ingredient display, product story and compliance direction."
                  },
                  {
                    step: "Step 05",
                    title: "Build Brand & Website",
                    desc: "We create positioning, identity direction, website content, SEO blocks and customer trust sections."
                  },
                  {
                    step: "Step 06",
                    title: "Launch & Scale",
                    desc: "We support marketplace launch, social media, product education, ads, influencer direction and growth systems."
                  }
                ].map((item, idx) => (
                  <div key={idx} className={`flex flex-col lg:flex-row items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                    {/* Left/Right Side Box */}
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end px-4 lg:px-8">
                      <div className={`w-full max-w-[480px] bg-slate-50/80 border border-slate-100 p-6 sm:p-8 rounded-2xl transition-all hover:border-slate-200 hover:bg-white shadow-sm hover:shadow ${idx % 2 === 1 ? 'lg:text-left' : 'lg:text-right'}`}>
                        <span className="text-emerald-600 font-bold text-sm tracking-widest uppercase block mb-2">{item.step}</span>
                        <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-3">{item.title}</h3>
                        <GsapTextReveal as="p" variant="text" className="text-slate-600 text-sm leading-relaxed">{item.desc}</GsapTextReveal>
                      </div>
                    </div>
                    
                    {/* Center Pin */}
                    <div className="hidden lg:flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100 border-4 border-white text-emerald-700 font-extrabold text-sm z-10 shadow">
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

        {/* SECTION 6: AYURVEDA PRODUCT FORMATS & SECTION 7: WHO IS THIS FOR */}
        <section id="planning-and-audience" className="py-24 bg-slate-50 border-t border-b border-slate-200/60">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              
              {/* Product Format Checklist */}
              <div className="bg-white border border-slate-200/80 rounded-3xl p-8 sm:p-10 shadow-sm">
                <GsapTextReveal as="h2" variant="heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-8 tracking-tight">Ayurveda Categories We Can Support</GsapTextReveal>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Herbal juices",
                    "Capsules and tablets",
                    "Powders and churnas",
                    "Oils and topical products",
                    "Syrups and wellness liquids",
                    "Herbal personal care",
                    "Immunity and wellness products",
                    "Digestive and lifestyle wellness products",
                    "Skin, hair and body care Ayurveda products"
                  ].map((pt, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mt-1">
                        <Check className="w-3.5 h-3.5 font-bold" />
                      </span>
                      <GsapTextReveal as="p" variant="text" className="text-slate-700 text-sm sm:text-base font-medium">{pt}</GsapTextReveal>
                    </div>
                  ))}
                </div>
              </div>

              {/* Target Audience / Best For */}
              <div className="bg-[#061033] text-white rounded-3xl p-8 sm:p-10 shadow-lg relative overflow-hidden flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
                <div>
                  <GsapTextReveal as="h2" variant="heading" className="text-2xl sm:text-3xl font-extrabold mb-8 tracking-tight text-white">This Service Is Best For</GsapTextReveal>
                  <div className="space-y-4 mb-8">
                    {[
                      "Founders planning to launch Ayurveda or herbal wellness brands",
                      "Existing Ayurvedic businesses wanting modern brand positioning",
                      "D2C startups entering herbal wellness",
                      "Manufacturers wanting to build their own Ayurveda brand",
                      "Doctors, wellness experts or creators launching product lines",
                      "Founders needing formulation, compliance and marketplace clarity"
                    ].map((pt, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mt-0.5">
                          <Users className="w-4 h-4" />
                        </span>
                        <GsapTextReveal as="p" variant="text" className="text-slate-200 text-sm sm:text-base font-medium">{pt}</GsapTextReveal>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-md">
                  <h4 className="font-bold text-emerald-400 text-sm mb-1 font-sans">Need compliant label directions?</h4>
                  <GsapTextReveal as="p" variant="text" className="text-slate-300 text-xs">We guide claims structure and ingredient communications to avoid compliance issues down the line.</GsapTextReveal>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 8: IMPORTANT COMPLIANCE NOTE */}
        <section id="compliance-note" className="py-16 bg-white">
          <div className="max-w-[1000px] mx-auto px-4 sm:px-6">
            <div className="bg-amber-50/50 border border-amber-200/80 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start gap-4 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700 flex-shrink-0">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Ayurveda Launch Needs Responsible Claims
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  LaunchVeda helps with label, packaging and documentation direction based on the product category. Final regulatory approval, license requirements and product claims depend on the product type, manufacturer, formulation and applicable authority guidelines.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* COMPREHENSIVE INQUIRY FORM */}
        <section id="inquiry" className="py-20 bg-slate-50 border-t border-b border-slate-100 scroll-mt-20">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-sm font-bold uppercase text-emerald-600 tracking-wider block mb-3">Instant Roadmap Request</span>
              <GsapTextReveal as="h2" variant="heading" className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Plan Your Ayurveda Launch With Us</GsapTextReveal>
              <GsapTextReveal as="p" variant="subheading" className="text-slate-600 mt-3 text-sm sm:text-base">Provide your details below and we will customize a bespoke step-by-step brand blueprint to get your herbal wellness products onto the shelf.</GsapTextReveal>
            </div>
            <LaunchInquiryFormSection />
          </div>
        </section>

        {/* SECTION 9: FAQ */}
        <section id="faq-section" className="py-24 bg-white">
          <div className="max-w-[800px] mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <span className="text-sm font-bold uppercase text-emerald-600 tracking-wider block mb-3">Got Questions?</span>
              <GsapTextReveal as="h2" variant="heading" className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Ayurveda Brand Launch — FAQs</GsapTextReveal>
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
                    <span className="font-bold text-slate-800 text-base sm:text-lg hover:text-emerald-700 transition-colors">
                      {faq.q}
                    </span>
                    <span className={`w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${activeFaq === idx ? 'rotate-180 bg-emerald-50 text-emerald-600' : 'text-slate-400'}`}>
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
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.08)_0%,transparent_70%)] pointer-events-none" />
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
            <GsapTextReveal as="h2" variant="heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-emerald-400">Ready to Launch Your Ayurveda Brand?</GsapTextReveal>
            
            <GsapTextReveal as="p" variant="subheading" className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10">Share your Ayurveda product idea and LaunchVeda will help you plan the right product, formulation, packaging, compliance and growth roadmap.</GsapTextReveal>

            <button 
              onClick={handleScrollToForm}
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-[#D71912] to-[#FF8A00] hover:from-[#e3241b] hover:to-[#ff991a] hover:scale-[1.02] transform transition-all rounded-xl shadow-lg shadow-orange-950/20"
            >
              Build My Ayurveda Launch Roadmap
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
