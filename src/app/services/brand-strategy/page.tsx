"use client";

import SEOManager from "../../../components/seo/SEOManager";
import Navbar from "../../../components/layout/Navbar";
import LaunchFooterSection from "../../../components/layout/LaunchFooterSection";
import GsapTextReveal from "../../../components/ui/GsapTextReveal";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Sparkles, CheckCircle2, ShieldCheck, HelpCircle, ArrowRight, TrendingUp, Compass, Award } from "lucide-react";

export default function BrandStrategyPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "Why is brand strategy important before product launch?",
      a: "Brand strategy helps define the right category, audience, positioning, pricing and communication before product development and marketing investment begins."
    },
    {
      q: "Does LaunchVeda help with brand naming?",
      a: "Yes. LaunchVeda supports naming direction, brand tone and positioning logic based on the category and audience."
    },
    {
      q: "Is brand strategy useful for existing brands?",
      a: "Yes. Existing brands can use brand strategy to reposition, improve communication, enter new categories or prepare for marketplace growth."
    },
    {
      q: "Does brand strategy include logo design?",
      a: "Brand strategy defines the foundation, direction and communication. Logo and identity design can be developed as part of the broader brand building process."
    },
    {
      q: "Which categories need brand strategy?",
      a: "Perfume, Ayurveda, Cosmetics, Nutraceuticals and D2C product brands all need strong strategy because these categories depend on trust, differentiation and clear positioning."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      <SEOManager
        title="Brand Strategy Services for Product Launch"
        description="LaunchVeda provides brand strategy services for Perfume, Ayurveda, Cosmetics, Nutraceutical and D2C brands including positioning, naming, audience mapping, pricing direction and launch roadmap."
        canonical="https://launchveda.com/services/brand-strategy"
        breadcrumb={[
          { name: "Home", item: "https://launchveda.com" },
          { name: "Services", item: "https://launchveda.com/services" },
          { name: "Brand Strategy", item: "https://launchveda.com/services/brand-strategy" }
        ]}
        service={{
          name: "Brand Strategy Services for Product Launch",
          description: "LaunchVeda provides brand strategy services for Perfume, Ayurveda, Cosmetics, Nutraceutical and D2C brands including positioning, naming, audience mapping, pricing direction and launch roadmap."
        }}
        faq={faqs}
      />

      <div className="bg-[#061033]">
        <Navbar />
      </div>

      <main className="flex-grow">
        {/* Hero Section */}
        <section id="brand-strategy-hero" className="relative bg-[#061033] pt-40 pb-28 text-white overflow-hidden">
          {/* Decorative background grid/gradients */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.15),transparent_45%)]" />
          <div className="absolute -bottom-48 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-indigo-300 text-xs sm:text-sm font-semibold mb-6 backdrop-blur-sm"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Premium Strategy Deliverables</span>
            </motion.div>

            <GsapTextReveal as="h1" variant="heading"
              id="brand-strategy-title"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight max-w-4xl mx-auto leading-tight"
            >Brand Strategy Services for Product Launch</GsapTextReveal>

            <GsapTextReveal as="p" variant="subheading"
              className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
            >A great product needs a clear brand direction. LaunchVeda helps founders define positioning, audience, category gap, pricing logic, brand story and launch roadmap before entering the market.</GsapTextReveal>

            <motion.div
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a
                id="cta-primary-brand-strategy"
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-red-600 to-amber-500 text-white font-bold rounded-xl shadow-lg shadow-red-950/20 hover:opacity-95 transition-all transform hover:-translate-y-0.5 text-center"
              >
                Build My Brand Strategy
              </a>
              <a
                id="cta-secondary-brand-strategy"
                href="/services"
                className="w-full sm:w-auto px-8 py-4 bg-white/10 border border-white/20 text-white font-bold rounded-xl hover:bg-white/15 transition-all text-center backdrop-blur-sm"
              >
                View Launch Services
              </a>
            </motion.div>
          </div>
        </section>

        {/* Direct Answer Section */}
        <section id="direct-answer-section" className="py-16 bg-white border-b border-slate-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="bg-indigo-50/70 border-l-4 border-indigo-600 p-8 rounded-r-2xl shadow-sm">
              <GsapTextReveal as="h2" variant="heading" className="text-xl font-bold text-indigo-950 mb-3 flex items-center gap-2"><Compass className="w-5 h-5 text-indigo-600" />
                What Is Brand Strategy in Product Launch?</GsapTextReveal>
              <GsapTextReveal as="p" variant="subheading" className="text-slate-700 leading-relaxed text-lg">Brand strategy is the foundation that defines how your product will enter the market, who it will speak to, why customers should trust it and how it will stand apart from competitors. LaunchVeda builds category-specific brand strategy for founders launching Perfume, Ayurveda, Cosmetics, Nutraceuticals and D2C brands.</GsapTextReveal>
            </div>
          </div>
        </section>

        {/* Why Brand Strategy Matters Section */}
        <section id="why-matters-section" className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <GsapTextReveal as="span" variant="label" className="text-indigo-600 font-bold tracking-wider text-xs uppercase">Positioning is Everything</GsapTextReveal>
              <GsapTextReveal as="h2" variant="heading" className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight">Most Brands Do Not Fail Because of Product. They Fail Because of Positioning.</GsapTextReveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  id: "why-card-1",
                  title: "Unclear Category Direction",
                  desc: "Without the right category and product positioning, customers may not understand why your product exists."
                },
                {
                  id: "why-card-2",
                  title: "Weak Brand Story",
                  desc: "A product needs a clear story, promise and reason to believe before customers can trust it."
                },
                {
                  id: "why-card-3",
                  title: "Wrong Pricing Logic",
                  desc: "Pricing should match product quality, audience expectation, packaging, competition and channel strategy."
                },
                {
                  id: "why-card-4",
                  title: "No Market Differentiation",
                  desc: "A brand must show why it is different from existing players in the same category."
                }
              ].map((card) => (
                <div
                  id={card.id}
                  key={card.id}
                  className="bg-white p-8 rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow flex gap-5"
                >
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center flex-shrink-0 text-indigo-600 mt-1">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <GsapTextReveal as="h3" variant="heading" className="font-bold text-slate-900 text-lg sm:text-xl mb-2">{card.title}</GsapTextReveal>
                    <GsapTextReveal as="p" variant="text" className="text-slate-600 leading-relaxed text-sm sm:text-base">{card.desc}</GsapTextReveal>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What LaunchVeda Provides (Deliverables) */}
        <section id="deliverables-section" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <GsapTextReveal as="span" variant="label" className="text-indigo-600 font-bold tracking-wider text-xs uppercase">Strategic Framework</GsapTextReveal>
              <GsapTextReveal as="h2" variant="heading" className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight">Our Brand Strategy Deliverables</GsapTextReveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  id: "deliv-1",
                  title: "Brand Positioning",
                  desc: "We define what your brand stands for, who it serves and how it should be remembered."
                },
                {
                  id: "deliv-2",
                  title: "Audience Mapping",
                  desc: "We identify target customers, buying motivations, pain points and category expectations."
                },
                {
                  id: "deliv-3",
                  title: "Competitor & Market Gap",
                  desc: "We study existing brands, pricing patterns, claims, packaging, content and positioning gaps."
                },
                {
                  id: "deliv-4",
                  title: "Brand Naming Direction",
                  desc: "We help define name style, naming logic and brand tone based on your category and audience."
                },
                {
                  id: "deliv-5",
                  title: "Pricing & Offer Direction",
                  desc: "We guide price positioning, entry offer, product bundle logic and premium perception."
                },
                {
                  id: "deliv-6",
                  title: "Brand Communication System",
                  desc: "We create messaging pillars, tagline direction, content themes and launch communication style."
                }
              ].map((item) => (
                <div
                  id={item.id}
                  key={item.id}
                  className="bg-slate-50 p-8 rounded-2xl border border-slate-100 flex flex-col justify-between hover:border-indigo-200 transition-colors group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-indigo-600 text-white flex items-center justify-center mb-6 shadow-md group-hover:scale-105 transition-transform duration-300">
                      <Award className="w-5 h-5" />
                    </div>
                    <GsapTextReveal as="h3" variant="heading" className="font-bold text-slate-900 text-lg mb-3">{item.title}</GsapTextReveal>
                    <GsapTextReveal as="p" variant="text" className="text-slate-600 leading-relaxed text-sm sm:text-base">{item.desc}</GsapTextReveal>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Brand Strategy Process */}
        <section id="process-section" className="py-20 bg-slate-50 border-t border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <GsapTextReveal as="span" variant="label" className="text-indigo-600 font-bold tracking-wider text-xs uppercase">Step-by-step framework</GsapTextReveal>
              <GsapTextReveal as="h2" variant="heading" className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight">How We Build Your Brand Strategy</GsapTextReveal>
            </div>

            <div className="relative border-l border-indigo-200 ml-4 md:ml-32 space-y-12">
              {[
                {
                  step: "Step 01",
                  title: "Understand Your Product Idea",
                  desc: "We understand your category, product concept, budget, competition, target audience and launch stage."
                },
                {
                  step: "Step 02",
                  title: "Study Market & Competitors",
                  desc: "We analyze what is already working, where the market is crowded and where your brand can stand apart."
                },
                {
                  step: "Step 03",
                  title: "Define Positioning",
                  desc: "We create the core positioning, product promise, customer angle and brand narrative."
                },
                {
                  step: "Step 04",
                  title: "Build Launch Messaging",
                  desc: "We define key messages for website, packaging, social media, marketplace and sales communication."
                },
                {
                  step: "Step 05",
                  title: "Connect Strategy With Execution",
                  desc: "We align the strategy with product formulation, packaging, website, marketplace and growth planning."
                }
              ].map((item, index) => (
                <div key={index} className="relative pl-8 md:pl-12">
                  <div className="absolute -left-3.5 top-1.5 w-7 h-7 rounded-full bg-indigo-600 border-4 border-white flex items-center justify-center shadow-sm" />
                  <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/60 shadow-sm max-w-4xl">
                    <GsapTextReveal as="span" variant="label" className="font-mono text-indigo-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">{item.step}</GsapTextReveal>
                    <GsapTextReveal as="h3" variant="heading" className="font-bold text-slate-900 text-lg sm:text-xl mb-2">{item.title}</GsapTextReveal>
                    <GsapTextReveal as="p" variant="text" className="text-slate-600 leading-relaxed text-sm sm:text-base">{item.desc}</GsapTextReveal>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who Needs This Service */}
        <section id="who-needs-section" className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="bg-[#061033] text-white rounded-3xl p-8 sm:p-14 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />
              
              <div className="relative z-10">
                <div className="text-center mb-12">
                  <GsapTextReveal as="span" variant="label" className="text-indigo-400 font-bold tracking-wider text-xs uppercase">Target Profile</GsapTextReveal>
                  <GsapTextReveal as="h2" variant="heading" className="text-3xl font-extrabold mt-2 tracking-tight">This Service Is Best For</GsapTextReveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                  {[
                    "Founders launching a new product brand",
                    "Existing brands planning repositioning",
                    "Product owners confused about category direction",
                    "Startups entering Perfume, Ayurveda, Cosmetics or Nutraceutical categories",
                    "Businesses preparing for D2C or marketplace launch",
                    "Founders who want clarity before spending on manufacturing and marketing"
                  ].map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3.5">
                      <div className="w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                      </div>
                      <GsapTextReveal as="p" variant="text" className="text-slate-300 font-medium text-sm sm:text-base leading-relaxed">{point}</GsapTextReveal>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section id="faqs-section" className="py-24 bg-slate-50 border-t border-slate-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <GsapTextReveal as="span" variant="label" className="text-indigo-600 font-bold tracking-wider text-xs uppercase">Your Questions Answered</GsapTextReveal>
              <GsapTextReveal as="h2" variant="heading" className="text-3xl font-extrabold text-slate-900 mt-2 tracking-tight">Frequently Asked Questions</GsapTextReveal>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={index}
                    className="border border-slate-200/80 rounded-2xl bg-white overflow-hidden shadow-sm transition-all"
                  >
                    <div style={{ display: "none" }} className="faq-seo-metadata" data-question={faq.q} data-answer={faq.a} />
                    <button
                      id={`faq-btn-${index}`}
                      onClick={() => toggleFaq(index)}
                      className="w-full px-6 py-5 sm:px-8 flex items-center justify-between text-left focus:outline-none"
                    >
                      <h3 className="font-bold text-slate-900 text-base sm:text-lg pr-4 flex items-start gap-3">
                        <HelpCircle className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                        <span>{faq.q}</span>
                      </h3>
                      <ChevronDown
                        className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-indigo-600" : ""}`}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: "auto" }}
                          exit={{ height: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                        >
                          <div className="px-6 pb-6 pt-1 sm:px-8 sm:pb-6 text-slate-600 leading-relaxed text-sm sm:text-base border-t border-slate-100/60 bg-slate-50/40">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="brand-strategy-cta" className="bg-[#061033] py-20 text-center relative overflow-hidden border-t border-white/5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(99,102,241,0.12),transparent_40%)]" />
          <div className="max-w-4xl mx-auto px-4 relative z-10">
            <GsapTextReveal as="h2" variant="heading" className="text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">Ready to build your brand strategy?</GsapTextReveal>
            <GsapTextReveal as="p" variant="subheading" className="text-slate-300 mb-8 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">Define your custom positioning, audience insights and a bulletproof category-first product roadmap with LaunchVeda.</GsapTextReveal>
            <a
              id="cta-bottom-brand-strategy"
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-4 text-base font-bold text-white bg-gradient-to-r from-red-600 to-amber-500 hover:opacity-90 rounded-xl transition-opacity shadow-lg shadow-red-950/40"
            >
              Start My Strategy Plan
            </a>
          </div>
        </section>
      </main>

      <div className="bg-[#061033]">
        <LaunchFooterSection />
      </div>
    </div>
  );
}
