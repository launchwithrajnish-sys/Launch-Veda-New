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
      q: "How can I launch a Nutraceutical brand in India?",
      a: "To launch a Nutraceutical or supplement brand, you need category selection, formulation guidance, manufacturer support, packaging design, FSSAI compliance direction, website, marketplace readiness, and a growth strategy. LaunchVeda helps map these steps."
    },
    {
      q: "Does LaunchVeda help with Nutraceutical formulation?",
      a: "Yes. We support product category planning, active ingredient direction (vitamins, proteins, probiotics, botanicals), formulation briefs, and sample coordination with certified lab partners."
    },
    {
      q: "Does LaunchVeda help with FSSAI compliance and label approval?",
      a: "Yes. We guide you through the packaging rules, ingredient approvals, label declarations, and FSSAI certification direction needed for nutraceutical products in India."
    },
    {
      q: "Do you help select GMP-certified contract manufacturers?",
      a: "Yes. We help identify and coordinate with WHO-GMP and FSSAI certified contract manufacturers to handle encapsulation, tableting, powder blending, or gummy production based on your budget and MOQ."
    },
    {
      q: "How do we market and sell Nutraceuticals online?",
      a: "We help setup high-conversion Shopify stores, Amazon/Flipkart listings, educate customers with content marketing, run compliance-friendly digital ads, and optimize CRM retention channels."
    }
  ];

  return (
    <div id="nutraceutical-launch-page" className="bg-white min-h-screen flex flex-col font-sans selection:bg-indigo-600 selection:text-white">
      <SEOManager
        title="Nutraceutical Brand Launch Services in India | LaunchVeda"
        description="LaunchVeda helps founders launch Nutraceutical and supplement brands with product planning, formulation guidance, manufacturer support, packaging, compliance direction, marketplace readiness, and growth strategy."
        canonical="https://launchveda.com/nutraceutical-brand-launch"
        breadcrumb={[
          { name: "Home", item: "https://launchveda.com" },
          { name: "Nutraceutical Brand Launch", item: "https://launchveda.com/nutraceutical-brand-launch" }
        ]}
        service={{
          name: "Nutraceutical Brand Launch Services in India",
          description: "LaunchVeda helps founders build Nutraceutical and wellness supplement brands with category planning, formulation direction, manufacturer support, packaging, labeling, compliance readiness, website, marketplace and growth execution."
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
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            {/* Tag/Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-indigo-400 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-8 animate-fade-in">
              <Sparkles className="w-4 h-4 text-indigo-400 animate-pulse" />
              <span>Science-Backed Wellness Path</span>
            </div>

            {/* Main Headline */}
            <GsapTextReveal as="h1" variant="heading" className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 max-w-4xl mx-auto leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-indigo-400">Nutraceutical Brand Launch Services in India</GsapTextReveal>

            {/* Subheading */}
            <GsapTextReveal as="p" variant="subheading" className="text-slate-300 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed mb-10">LaunchVeda helps founders launch Nutraceutical and supplement brands with product planning, formulation guidance, manufacturer support, packaging, FSSAI compliance direction, marketplace readiness, and growth strategy.</GsapTextReveal>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button 
                onClick={handleScrollToForm}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#D71912] to-[#FF8A00] hover:from-[#e3241b] hover:to-[#ff991a] text-white font-bold rounded-xl shadow-lg shadow-indigo-950/20 hover:shadow-indigo-950/30 transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2 text-base"
              >
                <span>Build My Nutraceutical Roadmap</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={handleScrollToForm}
                className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 text-base backdrop-blur-md"
              >
                Explore Supplement Formulation
              </button>
            </div>

            {/* Hero Pills */}
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {[
                "Supplement Category Planning",
                "Formulation Direction",
                "GMP Manufacturer Support",
                "FSSAI Compliance Guidance",
                "Shopify & Amazon Setup",
                "Customer Education Funnels"
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
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500" />
              
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3 py-1.5 rounded-md inline-block mb-4">
                Launch Overview
              </span>
 
              <GsapTextReveal as="h2" variant="heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 tracking-tight">How Does LaunchVeda Help Launch a Nutraceutical Brand?</GsapTextReveal>

               <GsapTextReveal as="p" variant="subheading" className="text-slate-700 leading-relaxed text-lg sm:text-xl mb-8 font-medium">Launch Veda supports nutraceutical brand launches in India with product planning, formulation guidance, manufacturer selection, compliance direction, marketplace listing, and growth strategy.</GsapTextReveal>

              <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-100">
                {[
                  "Active Ingredient Mapping",
                  "GMP Contract Manufacturing",
                  "FSSAI Compliance Ready"
                ].map((pill, i) => (
                  <span 
                    key={i} 
                    className="bg-indigo-50/80 border border-indigo-100/80 text-indigo-700 px-4 py-2 rounded-full text-xs sm:text-sm font-bold flex items-center gap-2"
                  >
                    <CheckCircle className="w-4 h-4" />
                    <span>{pill}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: WHY NUTRACEUTICAL BRAND LAUNCH NEEDS CLARITY */}
        <section id="strategy-importance" className="py-24 bg-white">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-sm font-bold uppercase text-indigo-600 tracking-wider block mb-3">Holistic Strategy</span>
              <GsapTextReveal as="h2" variant="heading" className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Nutraceutical Brands Need Trust, Formulation Efficacy, and Compliance.</GsapTextReveal>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Format Selection",
                  desc: "Choose between powders, capsules, tablets, effervescents, or gummies based on consumer convenience and cost.",
                  icon: Compass,
                  color: "border-indigo-100 bg-indigo-50/20 text-indigo-600"
                },
                {
                  title: "Efficacy & Formulation",
                  desc: "Identify right ingredient blends, dosage limits, bioavailability, stability parameters, and sample testing.",
                  icon: FolderHeart,
                  color: "border-pink-100 bg-pink-50/20 text-pink-600"
                },
                {
                  title: "FSSAI Compliance",
                  desc: "Nutraceuticals require strict adherence to ingredient allowances, RDA standards, nutritional labeling, and claims validation.",
                  icon: Box,
                  color: "border-orange-100 bg-orange-50/20 text-orange-600"
                },
                {
                  title: "Brand Credibility",
                  desc: "Supplement consumers seek clean labels, certified safety, clinical backings, transparency, and education-driven communications.",
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
              <span className="text-sm font-bold uppercase text-indigo-600 tracking-wider block mb-3">Our Deliverables</span>
              <GsapTextReveal as="h2" variant="heading" className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Our Nutraceutical Brand Launch Support</GsapTextReveal>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  num: "01",
                  title: "Category & Product Planning",
                  desc: "We define target category placement, supplement product format, dosage profiles, and packaging units."
                },
                {
                  num: "02",
                  title: "Formulation Direction",
                  desc: "We assist with active ingredient selection, scientific backing checks, dose planning, stability and taste briefs."
                },
                {
                  num: "03",
                  title: "GMP Manufacturer Sourcing",
                  desc: "We source certified FSSAI & WHO-GMP contract manufacturing partners matching your format, quality expectations, and MOQ budgets."
                },
                {
                  num: "04",
                  title: "Packaging & FSSAI Compliance",
                  desc: "We guide package structural parameters, FSSAI labeling norms, nutritional panels, claims formatting, and compliance checks."
                },
                {
                  num: "05",
                  title: "Brand Strategy & Copy",
                  desc: "We build a trust-focused brand story, packaging copy, product promise, positioning, and credible scientific messaging."
                },
                {
                  num: "06",
                  title: "Shopify & Marketplace Setup",
                  desc: "We design high-converting e-commerce sites, educate users with functional funnels, and optimize Amazon/Flipkart listings."
                },
                {
                  num: "07",
                  title: "Customer Education Content",
                  desc: "We plan ingredient guides, health benefits sheets, dietitian collaborations, and medical-disclaimer friendly awareness copy."
                },
                {
                  num: "08",
                  title: "Growth & Retention Planning",
                  desc: "We establish digital ad hooks, subscription-friendly retention funnels, dietitian reference programs, and performance loops."
                }
              ].map((del, idx) => (
                <div 
                  key={idx}
                  className="bg-white border border-slate-200/60 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all group"
                >
                  <span className="text-xs font-bold text-indigo-600 bg-indigo-50 group-hover:bg-indigo-600 group-hover:text-white px-2.5 py-1 rounded-md transition-all inline-block mb-4">
                    {del.num}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">{del.title}</h3>
                  <GsapTextReveal as="p" variant="text" className="text-slate-600 text-xs sm:text-sm leading-relaxed">{del.desc}</GsapTextReveal>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: NUTRACEUTICAL LAUNCH PROCESS */}
        <section id="launch-process" className="py-24 bg-white overflow-hidden">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-sm font-bold uppercase text-indigo-600 tracking-wider block mb-3">Six Launch Stages</span>
              <GsapTextReveal as="h2" variant="heading" className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">How We Launch a Nutraceutical Brand</GsapTextReveal>
            </div>

            <div className="relative">
              {/* Process line for desktop */}
              <div className="hidden lg:block absolute top-12 left-8 right-8 h-0.5 bg-slate-200 z-0" />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 relative z-10">
                {[
                  {
                    step: "Stage 01",
                    title: "Category Selection",
                    desc: "Analyze supplement format (gummies, tablets, powders, capsules) and define target benefits."
                  },
                  {
                    step: "Stage 02",
                    title: "Formulation Brief",
                    desc: "Draft active ingredient mixes, nutritional properties, flavor specs, and coordinate lab samples."
                  },
                  {
                    step: "Stage 03",
                    title: "Manufacturer Audit",
                    desc: "Verify contract manufacturers for GMP certification, FSSAI compliance, lab test facilities, and batch capacities."
                  },
                  {
                    step: "Stage 04",
                    title: "FSSAI Label Planning",
                    desc: "Create compliance-checked label declarations, RDA limits tables, allergy warnings, and ingredient lists."
                  },
                  {
                    step: "Stage 05",
                    title: "Frosted Digital Setup",
                    desc: "Deploy highly educational e-commerce setups, marketplace stores, subscription systems, and trust banners."
                  },
                  {
                    step: "Stage 06",
                    title: "Growth Scale-up",
                    desc: "Optimize high-retaining digital ad channels, nutritionist reviews, video reels, and performance hooks."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white text-left space-y-3">
                    <div className="w-10 h-10 rounded-full bg-indigo-600 border-[3px] border-white shadow flex items-center justify-center text-[11px] font-bold text-white mb-2 relative z-10">
                      {idx + 1}
                    </div>
                    <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest block">{item.step}</span>
                    <h3 className="text-base font-extrabold text-slate-900">{item.title}</h3>
                    <GsapTextReveal as="p" variant="text" className="text-slate-500 text-xs sm:text-sm leading-relaxed">{item.desc}</GsapTextReveal>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: KEY CHALLENGES (Warning flags) */}
        <section id="challenges" className="py-24 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/30 via-slate-900 to-slate-950 pointer-events-none" />
          
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase text-indigo-400 tracking-wider bg-indigo-950/60 border border-indigo-900 px-3.5 py-1.5 rounded-full inline-block mb-3">
                Watchpoints
              </span>
              <GsapTextReveal as="h2" variant="heading" className="text-3xl sm:text-4xl font-extrabold tracking-tight">Key Hurdles in Launching Supplement Brands</GsapTextReveal>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  title: "Formulation Integrity & Taste",
                  desc: "Vitamins, plant extracts, or active minerals often have bitter tastes or smell issues. Getting tablets or powders to be stable and palatable requires chemical flavor expertise."
                },
                {
                  title: "FSSAI & Regulatory Fines",
                  desc: "Non-compliant ingredient dosages (exceeding RDA thresholds), banned botanicals, or unverified therapeutic claims can lead to FSSAI product recalls or advertising penalties."
                },
                {
                  title: "High Production MOQ Barriers",
                  desc: "Most contract supplement manufacturers require huge MOQs for capsule blisters or customized powder tubs, locking up critical working capital during early iterations."
                },
                {
                  title: "Audience Trust Deficits",
                  desc: "Consumers are highly cautious about what they ingest. Building brand transparency via COAs (Certificate of Analysis) and clear clinical backing is essential for retention."
                }
              ].map((chal, idx) => (
                <div key={idx} className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 sm:p-8 flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0 text-red-400 mt-1">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <div className="space-y-2 text-left">
                    <h3 className="text-base font-bold text-white">{chal.title}</h3>
                    <GsapTextReveal as="p" variant="text" className="text-slate-400 text-xs sm:text-sm leading-relaxed">{chal.desc}</GsapTextReveal>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 7: INTERACTIVE FORM CONTAINER */}
        <section id="inquiry" className="relative scroll-mt-24">
          <LaunchInquiryFormSection />
        </section>

        {/* SECTION 8: FAQ ACCORDION */}
        <section id="faq-section" className="py-24 bg-white border-t border-slate-100">
          <div className="max-w-[800px] mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-sm font-bold uppercase text-indigo-600 tracking-wider block mb-3">FAQ</span>
              <GsapTextReveal as="h2" variant="heading" className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Supplement Launch Questions</GsapTextReveal>
            </div>

            <div className="space-y-4 text-left">
              {faqs.map((faq, index) => {
                const isOpen = activeFaq === index;
                return (
                  <div 
                    key={index}
                    className={`rounded-2xl border transition-all duration-300 ${isOpen ? 'bg-indigo-50/20 border-indigo-100 shadow-sm' : 'border-slate-200 hover:border-slate-300'}`}
                  >
                    {/* Schema detection hook */}
                    <div style={{ display: "none" }} className="faq-seo-metadata" data-question={faq.q} data-answer={faq.a} />

                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none select-none cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <HelpCircle className={`w-5 h-5 shrink-0 ${isOpen ? 'text-indigo-600' : 'text-slate-400'}`} />
                        <span className="font-extrabold text-slate-900 text-sm sm:text-base leading-snug">{faq.q}</span>
                      </div>
                      <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-indigo-600' : ''}`} />
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-5 pl-14">
                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-semibold">{faq.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION 9: FINAL CTA */}
        <section className="py-20 bg-[#061033] text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-indigo-500/10 blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-[800px] mx-auto px-6 space-y-6">
            <h2 className="font-[900] text-3xl sm:text-5xl tracking-tight leading-[1.1]">
              Ready to Turn Your Supplement Idea Into a Brand?
            </h2>
            <p className="text-slate-300 font-medium text-sm sm:text-base leading-relaxed max-w-[600px] mx-auto">
              Connect with LaunchVeda for a structured consultation call, certified FSSAI manufacturing sourcing, and high-converting growth roadmaps.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4 select-none">
              <button
                onClick={handleScrollToForm}
                className="w-full sm:w-auto h-[54px] px-8 rounded-xl bg-gradient-to-r from-[#D71912] to-[#FF8A00] hover:opacity-90 text-white font-bold text-sm tracking-wide shadow-md hover:-translate-y-0.5 active:scale-95 transition-all cursor-pointer"
              >
                Submit Consultation Request
              </button>
              <a
                href="https://wa.me/918796300199?text=Hi%20LaunchVeda,%20I%20want%20to%20discuss%20my%20nutraceutical%20brand%20launch%20idea."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto h-[54px] px-8 rounded-xl bg-white/[0.08] hover:bg-white/[0.12] border border-white/10 text-white font-bold text-sm tracking-wide transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <MessageCircleIcon className="w-4 h-4 text-emerald-400 fill-emerald-400" />
                <span>WhatsApp Launch Team</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <div className="bg-[#061033] w-full">
        <LaunchFooterSection />
      </div>
    </div>
  );
}

// WhatsApp icon component wrapper to avoid compile issues
function MessageCircleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}
