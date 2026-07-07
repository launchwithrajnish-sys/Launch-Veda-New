"use client";

import SEOManager from "../../../components/seo/SEOManager";
import Navbar from "../../../components/layout/Navbar";
import LaunchFooterSection from "../../../components/layout/LaunchFooterSection";
import GsapTextReveal from "../../../components/ui/GsapTextReveal";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Sparkles, CheckCircle2, ShieldCheck, HelpCircle, ArrowRight, Factory, Droplet, Leaf, Pill, AlertCircle, Award } from "lucide-react";

export default function ManufacturingSupportPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "Does LaunchVeda manufacture products directly?",
      a: "LaunchVeda supports manufacturer selection, sampling coordination and production direction. Final manufacturing is handled by the selected manufacturing partner."
    },
    {
      q: "Can LaunchVeda help find a manufacturer?",
      a: "Yes. LaunchVeda helps identify suitable manufacturers based on product category, MOQ, documentation needs, quality expectations and launch goals."
    },
    {
      q: "Does LaunchVeda help with sampling?",
      a: "Yes. LaunchVeda supports sample brief creation, coordination, feedback and refinement during the product development stage."
    },
    {
      q: "Which product categories does LaunchVeda support for manufacturing?",
      a: "LaunchVeda supports manufacturing direction for Perfume, Ayurveda, Cosmetics, Nutraceuticals and modern D2C product categories."
    },
    {
      q: "Does LaunchVeda help with MOQ planning?",
      a: "Yes. LaunchVeda helps founders understand MOQ expectations, batch planning and production feasibility based on category and manufacturer capability."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      <SEOManager
        title="Manufacturing Support for Product Brands"
        description="LaunchVeda helps founders connect with suitable manufacturing partners and plan production direction for Perfume, Ayurveda, Cosmetics, Nutraceuticals and D2C product brands."
        canonical="https://launchveda.com/services/manufacturing-support"
        breadcrumb={[
          { name: "Home", item: "https://launchveda.com" },
          { name: "Services", item: "https://launchveda.com/services" },
          { name: "Manufacturing Support", item: "https://launchveda.com/services/manufacturing-support" }
        ]}
        service={{
          name: "Manufacturing Support Services for Product Brands",
          description: "LaunchVeda helps founders with manufacturing support, manufacturer selection, sampling coordination, MOQ planning and production direction for Perfume, Ayurveda, Cosmetics and Nutraceutical brands."
        }}
        faq={faqs}
      />

      <div className="bg-[#061033]">
        <Navbar />
      </div>

      <main className="flex-grow">
        {/* Hero Section */}
        <section id="manufacturing-hero" className="relative bg-[#061033] pt-40 pb-28 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.15),transparent_45%)]" />
          <div className="absolute -bottom-48 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-indigo-300 text-xs sm:text-sm font-semibold mb-6 backdrop-blur-sm"
            >
              <Factory className="w-4 h-4 text-sky-400" />
              <span>Scale-ready manufacturing alignment</span>
            </motion.div>

            <GsapTextReveal as="h1" variant="heading"
              id="manufacturing-title"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight max-w-4xl mx-auto leading-tight"
            >Manufacturing Support for Product Brands</GsapTextReveal>

            <GsapTextReveal as="p" variant="subheading"
              className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
            >LaunchVeda helps founders connect with suitable manufacturing partners and plan production direction for Perfume, Ayurveda, Cosmetics, Nutraceuticals and D2C product brands.</GsapTextReveal>

            <motion.div
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a
                id="cta-primary-manufacturing"
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-red-600 to-amber-500 text-white font-bold rounded-xl shadow-lg shadow-red-950/20 hover:opacity-95 transition-all transform hover:-translate-y-0.5 text-center"
              >
                Find Manufacturing Support
              </a>
              <a
                id="cta-secondary-manufacturing"
                href="/services/product-formulation"
                className="w-full sm:w-auto px-8 py-4 bg-white/10 border border-white/20 text-white font-bold rounded-xl hover:bg-white/15 transition-all text-center backdrop-blur-sm"
              >
                Explore Product Formulation
              </a>
            </motion.div>
          </div>
        </section>

        {/* Direct Answer Section */}
        <section id="direct-answer-section" className="py-16 bg-white border-b border-slate-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="bg-sky-50/70 border-l-4 border-sky-600 p-8 rounded-r-2xl shadow-sm">
              <GsapTextReveal as="h2" variant="heading" className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2"><Factory className="w-5 h-5 text-sky-600" />
                What Is Manufacturing Support?</GsapTextReveal>
              <GsapTextReveal as="p" variant="subheading" className="text-slate-700 leading-relaxed text-lg">Manufacturing support helps founders identify suitable production partners, understand MOQ, sampling, documentation, cost direction, packaging coordination and production readiness. LaunchVeda guides the manufacturer selection and coordination process so founders can move from idea or sample to production with more clarity.</GsapTextReveal>
            </div>
          </div>
        </section>

        {/* Why Manufacturing Support Matters Section */}
        <section id="why-manufacturing-matters-section" className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <GsapTextReveal as="span" variant="label" className="text-sky-600 font-bold tracking-wider text-xs uppercase">Precision & Scale</GsapTextReveal>
              <GsapTextReveal as="h2" variant="heading" className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight">The Right Manufacturer Can Make or Break a Product Launch</GsapTextReveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  id: "mfg-why-1",
                  title: "Wrong Partner Selection",
                  desc: "Choosing the wrong manufacturer can create delays, quality issues and cost confusion."
                },
                {
                  id: "mfg-why-2",
                  title: "MOQ Confusion",
                  desc: "Founders need clarity on minimum order quantities, batch size and production feasibility before committing."
                },
                {
                  id: "mfg-why-3",
                  title: "Sampling Delays",
                  desc: "Without clear briefs and feedback, sampling can become slow, expensive and inconsistent."
                },
                {
                  id: "mfg-why-4",
                  title: "Documentation Gaps",
                  desc: "Manufacturing requires packaging, label, compliance and documentation readiness for smooth execution."
                }
              ].map((card) => (
                <div
                  id={card.id}
                  key={card.id}
                  className="bg-white p-8 rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow flex gap-5"
                >
                  <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center flex-shrink-0 text-sky-600 mt-1">
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
              <GsapTextReveal as="span" variant="label" className="text-sky-600 font-bold tracking-wider text-xs uppercase">Strategic Alignment</GsapTextReveal>
              <GsapTextReveal as="h2" variant="heading" className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight">Our Manufacturing Support Deliverables</GsapTextReveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  id: "mfg-deliv-1",
                  title: "Manufacturer Shortlisting",
                  desc: "We help identify suitable manufacturing partners based on category, product type and launch goals."
                },
                {
                  id: "mfg-deliv-2",
                  title: "MOQ & Cost Direction",
                  desc: "We help founders understand production quantity, batch planning, approximate cost logic and commercial expectations."
                },
                {
                  id: "mfg-deliv-3",
                  title: "Sampling Coordination",
                  desc: "We support sample brief communication, feedback, refinement and coordination with selected partners."
                },
                {
                  id: "mfg-deliv-4",
                  title: "Production Readiness Planning",
                  desc: "We help align product formulation, packaging, label, documentation and production expectations."
                },
                {
                  id: "mfg-deliv-5",
                  title: "Quality Expectation Mapping",
                  desc: "We help define quality benchmarks, packaging expectations, product finish and launch readiness."
                },
                {
                  id: "mfg-deliv-6",
                  title: "Category-Specific Guidance",
                  desc: "We guide manufacturing direction for Perfume, Ayurveda, Cosmetics and Nutraceutical product categories."
                }
              ].map((item) => (
                <div
                  id={item.id}
                  key={item.id}
                  className="bg-slate-50 p-8 rounded-2xl border border-slate-100 flex flex-col justify-between hover:border-sky-200 transition-colors group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-sky-600 text-white flex items-center justify-center mb-6 shadow-md group-hover:scale-105 transition-transform duration-300">
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

        {/* Manufacturing Categories */}
        <section id="manufacturing-categories-section" className="py-24 bg-slate-50 border-t border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <GsapTextReveal as="span" variant="label" className="text-sky-600 font-bold tracking-wider text-xs uppercase">Key Verticals</GsapTextReveal>
              <GsapTextReveal as="h2" variant="heading" className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight">Manufacturing Support Across Key Categories</GsapTextReveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  id: "cat-mfg-perfume",
                  icon: <Droplet className="w-6 h-6 text-pink-500" />,
                  title: "Perfume",
                  desc: "Fragrance manufacturing direction, bottle size planning, filling, packaging coordination and launch batch planning."
                },
                {
                  id: "cat-mfg-ayurveda",
                  icon: <Leaf className="w-6 h-6 text-emerald-600" />,
                  title: "Ayurveda",
                  desc: "Ayurvedic product manufacturer selection, herbal product planning, label direction and compliance coordination."
                },
                {
                  id: "cat-mfg-cosmetics",
                  icon: <Sparkles className="w-6 h-6 text-indigo-500" />,
                  title: "Cosmetics",
                  desc: "Skincare and cosmetic manufacturer support for serums, creams, face wash, sunscreen, moisturizers and beauty products."
                },
                {
                  id: "cat-mfg-nutraceuticals",
                  icon: <Pill className="w-6 h-6 text-amber-500" />,
                  title: "Nutraceuticals",
                  desc: "Supplement manufacturer support for capsules, powders, juices, shots, gummies and wellness formats."
                }
              ].map((cat) => (
                <div
                  id={cat.id}
                  key={cat.id}
                  className="bg-white p-6.5 rounded-2xl border border-slate-200/60 shadow-sm flex flex-col items-start hover:border-sky-200 transition-colors"
                >
                  <div className="p-3 bg-sky-50 rounded-xl mb-5">
                    {cat.icon}
                  </div>
                  <GsapTextReveal as="h3" variant="heading" className="font-bold text-slate-900 text-lg mb-3">{cat.title}</GsapTextReveal>
                  <GsapTextReveal as="p" variant="text" className="text-slate-600 leading-relaxed text-sm">{cat.desc}</GsapTextReveal>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Manufacturing Support Process */}
        <section id="process-section" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <GsapTextReveal as="span" variant="label" className="text-sky-600 font-bold tracking-wider text-xs uppercase">Step-by-step guidance</GsapTextReveal>
              <GsapTextReveal as="h2" variant="heading" className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight">How We Help With Manufacturing</GsapTextReveal>
            </div>

            <div className="relative border-l border-sky-200 ml-4 md:ml-32 space-y-12">
              {[
                {
                  step: "Step 01",
                  title: "Understand Product Requirement",
                  desc: "We understand your category, product type, expected quality, packaging direction, budget and launch target."
                },
                {
                  step: "Step 02",
                  title: "Create Manufacturer Brief",
                  desc: "We prepare a clear brief covering product format, sampling needs, packaging expectation and production direction."
                },
                {
                  step: "Step 03",
                  title: "Shortlist Suitable Partners",
                  desc: "We help identify manufacturers aligned with your category, MOQ, documentation needs and quality expectations."
                },
                {
                  step: "Step 04",
                  title: "Coordinate Sampling",
                  desc: "We support sample request, feedback, revision and decision-making during the sampling stage."
                },
                {
                  step: "Step 05",
                  title: "Prepare for Production",
                  desc: "We help align packaging, label, compliance, costing and production readiness before final manufacturing."
                }
              ].map((item, index) => (
                <div key={index} className="relative pl-8 md:pl-12">
                  <div className="absolute -left-3.5 top-1.5 w-7 h-7 rounded-full bg-sky-600 border-4 border-white flex items-center justify-center shadow-sm" />
                  <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-100 shadow-sm max-w-4xl">
                    <GsapTextReveal as="span" variant="label" className="font-mono text-sky-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">{item.step}</GsapTextReveal>
                    <GsapTextReveal as="h3" variant="heading" className="font-bold text-slate-900 text-lg sm:text-xl mb-2">{item.title}</GsapTextReveal>
                    <GsapTextReveal as="p" variant="text" className="text-slate-600 leading-relaxed text-sm sm:text-base">{item.desc}</GsapTextReveal>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who Needs This Service */}
        <section id="who-needs-section" className="py-24 bg-slate-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="bg-[#061033] text-white rounded-3xl p-8 sm:p-14 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-sky-500/10 blur-[100px] rounded-full pointer-events-none" />
              
              <div className="relative z-10">
                <div className="text-center mb-12">
                  <GsapTextReveal as="span" variant="label" className="text-sky-400 font-bold tracking-wider text-xs uppercase">Target Profile</GsapTextReveal>
                  <GsapTextReveal as="h2" variant="heading" className="text-3xl font-extrabold mt-2 tracking-tight">This Service Is Best For</GsapTextReveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                  {[
                    "Founders looking for reliable manufacturing partners",
                    "Brands stuck between idea and production",
                    "Businesses confused about MOQ and production cost",
                    "Product owners needing sample coordination",
                    "D2C startups entering Perfume, Ayurveda, Cosmetics or Nutraceutical categories",
                    "Founders who want production clarity before investing heavily"
                  ].map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3.5">
                      <div className="w-6 h-6 rounded-full bg-sky-500/20 text-sky-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-sky-400" />
                      </div>
                      <GsapTextReveal as="p" variant="text" className="text-slate-300 font-medium text-sm sm:text-base leading-relaxed">{point}</GsapTextReveal>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Important Note Section */}
        <section id="important-note-section" className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="bg-amber-50 border-l-4 border-amber-500 p-8 rounded-r-2xl shadow-sm flex gap-4">
              <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <GsapTextReveal as="h2" variant="heading" className="text-xl font-bold text-amber-950 mb-2">Important Manufacturing Note</GsapTextReveal>
                <GsapTextReveal as="p" variant="subheading" className="text-slate-700 leading-relaxed text-base sm:text-lg">LaunchVeda helps with manufacturer selection, sampling coordination and production direction. Final manufacturing, pricing, MOQ, quality terms, timelines and commercial agreements are decided between the client and selected manufacturing partner.</GsapTextReveal>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section id="faqs-section" className="py-24 bg-slate-50 border-t border-slate-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <GsapTextReveal as="span" variant="label" className="text-sky-600 font-bold tracking-wider text-xs uppercase">Production FAQ</GsapTextReveal>
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
                        <HelpCircle className="w-5 h-5 text-sky-600 mt-0.5 flex-shrink-0" />
                        <span>{faq.q}</span>
                      </h3>
                      <ChevronDown
                        className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-sky-600" : ""}`}
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
        <section id="manufacturing-cta" className="bg-[#061033] py-20 text-center relative overflow-hidden border-t border-white/5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(56,189,248,0.12),transparent_40%)]" />
          <div className="max-w-4xl mx-auto px-4 relative z-10">
            <GsapTextReveal as="h2" variant="heading" className="text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">Ready to find manufacturing support?</GsapTextReveal>
            <GsapTextReveal as="p" variant="subheading" className="text-slate-300 mb-8 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">Connect with top production partners and launch your product in record time with absolute confidence.</GsapTextReveal>
            <a
              id="cta-bottom-manufacturing"
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-4 text-base font-bold text-white bg-gradient-to-r from-red-600 to-amber-500 hover:opacity-90 rounded-xl transition-opacity shadow-lg shadow-red-950/40"
            >
              Start My Production Plan
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
