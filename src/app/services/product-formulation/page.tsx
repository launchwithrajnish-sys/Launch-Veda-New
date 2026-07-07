"use client";

import SEOManager from "../../../components/seo/SEOManager";
import Navbar from "../../../components/layout/Navbar";
import LaunchFooterSection from "../../../components/layout/LaunchFooterSection";
import GsapTextReveal from "../../../components/ui/GsapTextReveal";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Sparkles, CheckCircle2, ShieldCheck, HelpCircle, ArrowRight, FlaskConical, Droplet, Leaf, Pill, Heart, Award } from "lucide-react";

export default function ProductFormulationPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "Does LaunchVeda create the formula directly?",
      a: "LaunchVeda provides formulation direction, product planning, sample brief creation and coordination support. Final formulation may be developed with formulation experts or manufacturing partners depending on the category."
    },
    {
      q: "Can LaunchVeda help with cosmetic formulation?",
      a: "Yes. LaunchVeda supports cosmetic and skincare formulation planning including active direction, texture, product format, claim direction and sampling coordination."
    },
    {
      q: "Can LaunchVeda help with Ayurveda product formulation?",
      a: "Yes. LaunchVeda supports Ayurveda product category planning, herbal ingredient direction, product format and manufacturer coordination."
    },
    {
      q: "Does LaunchVeda help with nutraceutical taste and format?",
      a: "Yes. LaunchVeda supports nutraceutical format planning, taste direction, ingredient logic and FSSAI-oriented product direction."
    },
    {
      q: "Does formulation support include manufacturing?",
      a: "Formulation support can be connected with manufacturing support. LaunchVeda helps align formulation expectations with suitable manufacturing partners."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      <SEOManager
        title="Product Formulation Support for Market-Ready Brands"
        description="LaunchVeda helps founders plan product formulation with category direction, ingredient logic, product format, sampling guidance and manufacturer coordination for Perfume, Ayurveda, Cosmetics and Nutraceutical brands."
        canonical="https://launchveda.com/services/product-formulation"
        breadcrumb={[
          { name: "Home", item: "https://launchveda.com" },
          { name: "Services", item: "https://launchveda.com/services" },
          { name: "Product Formulation", item: "https://launchveda.com/services/product-formulation" }
        ]}
        service={{
          name: "Product Formulation Support Services",
          description: "LaunchVeda provides product formulation support for Perfume, Ayurveda, Cosmetics and Nutraceutical brands including ingredient direction, sampling, product format and manufacturer coordination."
        }}
        faq={faqs}
      />

      <div className="bg-[#061033]">
        <Navbar />
      </div>

      <main className="flex-grow">
        {/* Hero Section */}
        <section id="formulation-hero" className="relative bg-[#061033] pt-40 pb-28 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.15),transparent_45%)]" />
          <div className="absolute -bottom-48 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-indigo-300 text-xs sm:text-sm font-semibold mb-6 backdrop-blur-sm"
            >
              <FlaskConical className="w-4 h-4 text-emerald-400" />
              <span>Expert formulation consultation</span>
            </motion.div>

            <GsapTextReveal as="h1" variant="heading"
              id="formulation-title"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight max-w-4xl mx-auto leading-tight"
            >Product Formulation Support for Market-Ready Brands</GsapTextReveal>

            <GsapTextReveal as="p" variant="subheading"
              className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
            >LaunchVeda helps founders plan product formulation with category direction, ingredient logic, product format, sampling guidance and manufacturer coordination for Perfume, Ayurveda, Cosmetics and Nutraceutical brands.</GsapTextReveal>

            <motion.div
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a
                id="cta-primary-formulation"
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-red-600 to-amber-500 text-white font-bold rounded-xl shadow-lg shadow-red-950/20 hover:opacity-95 transition-all transform hover:-translate-y-0.5 text-center"
              >
                Plan My Product Formulation
              </a>
              <a
                id="cta-secondary-formulation"
                href="/services/manufacturing-support"
                className="w-full sm:w-auto px-8 py-4 bg-white/10 border border-white/20 text-white font-bold rounded-xl hover:bg-white/15 transition-all text-center backdrop-blur-sm"
              >
                Explore Manufacturing Support
              </a>
            </motion.div>
          </div>
        </section>

        {/* Direct Answer Section */}
        <section id="direct-answer-section" className="py-16 bg-white border-b border-slate-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="bg-emerald-50/70 border-l-4 border-emerald-600 p-8 rounded-r-2xl shadow-sm">
              <GsapTextReveal as="h2" variant="heading" className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2"><FlaskConical className="w-5 h-5 text-emerald-600" />
                What Is Product Formulation Support?</GsapTextReveal>
              <GsapTextReveal as="p" variant="subheading" className="text-slate-700 leading-relaxed text-lg">Product formulation support helps founders convert a product idea into a practical, sample-ready and market-ready product direction. LaunchVeda guides product format, ingredient logic, sampling expectations, manufacturer coordination and formulation planning based on your brand category and target market.</GsapTextReveal>
            </div>
          </div>
        </section>

        {/* Why Formulation Planning Matters Section */}
        <section id="why-planning-matters-section" className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <GsapTextReveal as="span" variant="label" className="text-emerald-600 font-bold tracking-wider text-xs uppercase">Scientific Foundation</GsapTextReveal>
              <GsapTextReveal as="h2" variant="heading" className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight">Your Product Foundation Starts With the Right Formula Direction</GsapTextReveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  id: "form-why-1",
                  title: "Product Concept Clarity",
                  desc: "We help define what the product should do, who it is for and how it should be positioned."
                },
                {
                  id: "form-why-2",
                  title: "Ingredient Direction",
                  desc: "We guide ingredient logic based on category, benefit, trend, audience and product claim direction."
                },
                {
                  id: "form-why-3",
                  title: "Sample Planning",
                  desc: "We help define sampling needs, texture, fragrance, taste, finish, performance and feedback points."
                },
                {
                  id: "form-why-4",
                  title: "Manufacturer Alignment",
                  desc: "We help communicate formulation expectations clearly with the right manufacturing partners."
                }
              ].map((card) => (
                <div
                  id={card.id}
                  key={card.id}
                  className="bg-white p-8 rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow flex gap-5"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center flex-shrink-0 text-emerald-600 mt-1">
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

        {/* Categories We Support */}
        <section id="formulation-categories-section" className="py-24 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <GsapTextReveal as="span" variant="label" className="text-emerald-600 font-bold tracking-wider text-xs uppercase">Category Specialization</GsapTextReveal>
              <GsapTextReveal as="h2" variant="heading" className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight">Formulation Support Across Product Categories</GsapTextReveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  id: "cat-perfume",
                  icon: <Droplet className="w-6 h-6 text-pink-500" />,
                  title: "Perfume",
                  desc: "Fragrance direction, concentration planning, mood, notes, bottle size, positioning and sampling direction."
                },
                {
                  id: "cat-ayurveda",
                  icon: <Leaf className="w-6 h-6 text-emerald-600" />,
                  title: "Ayurveda",
                  desc: "Herbal ingredient logic, product category planning, format direction, traditional-modern positioning and label consideration."
                },
                {
                  id: "cat-cosmetics",
                  icon: <Sparkles className="w-6 h-6 text-indigo-500" />,
                  title: "Cosmetics",
                  desc: "Skincare format planning, active ingredient direction, texture, usage experience, claims and packaging compatibility."
                },
                {
                  id: "cat-nutraceuticals",
                  icon: <Pill className="w-6 h-6 text-amber-500" />,
                  title: "Nutraceuticals",
                  desc: "Supplement format, taste direction, dosage logic, ingredient positioning, FSSAI direction and consumption experience."
                }
              ].map((cat) => (
                <div
                  id={cat.id}
                  key={cat.id}
                  className="bg-slate-50 p-6.5 rounded-2xl border border-slate-100 flex flex-col items-start hover:border-emerald-200 transition-colors"
                >
                  <div className="p-3 bg-white rounded-xl shadow-sm mb-5">
                    {cat.icon}
                  </div>
                  <GsapTextReveal as="h3" variant="heading" className="font-bold text-slate-900 text-lg mb-3">{cat.title}</GsapTextReveal>
                  <GsapTextReveal as="p" variant="text" className="text-slate-600 leading-relaxed text-sm">{cat.desc}</GsapTextReveal>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What LaunchVeda Provides (Deliverables) */}
        <section id="deliverables-section" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <GsapTextReveal as="span" variant="label" className="text-emerald-600 font-bold tracking-wider text-xs uppercase">Core Deliverables</GsapTextReveal>
              <GsapTextReveal as="h2" variant="heading" className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight">Our Formulation Support Deliverables</GsapTextReveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  id: "form-deliv-1",
                  title: "Product Concept Direction",
                  desc: "We define the product idea, benefit promise, format and launch logic."
                },
                {
                  id: "form-deliv-2",
                  title: "Ingredient & Active Direction",
                  desc: "We help map key ingredients, actives, herbs or functional components based on category needs."
                },
                {
                  id: "form-deliv-3",
                  title: "Sample Brief Creation",
                  desc: "We prepare a clear sample brief for manufacturer or formulation partner coordination."
                },
                {
                  id: "form-deliv-4",
                  title: "Texture, Taste or Fragrance Direction",
                  desc: "Depending on category, we help define sensory experience such as taste, fragrance, texture, feel or finish."
                },
                {
                  id: "form-deliv-5",
                  title: "Claim & Positioning Alignment",
                  desc: "We ensure formulation direction supports the brand’s positioning, claim approach and marketplace communication."
                },
                {
                  id: "form-deliv-6",
                  title: "Manufacturer Coordination",
                  desc: "We help communicate product expectations, sampling changes and development direction with selected partners."
                }
              ].map((item) => (
                <div
                  id={item.id}
                  key={item.id}
                  className="bg-slate-50 p-8 rounded-2xl border border-slate-100 flex flex-col justify-between hover:border-emerald-200 transition-colors group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center mb-6 shadow-md group-hover:scale-105 transition-transform duration-300">
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

        {/* Formulation Process */}
        <section id="process-section" className="py-20 bg-slate-50 border-t border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <GsapTextReveal as="span" variant="label" className="text-emerald-600 font-bold tracking-wider text-xs uppercase">Step-by-step workflow</GsapTextReveal>
              <GsapTextReveal as="h2" variant="heading" className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight">How Product Formulation Works With LaunchVeda</GsapTextReveal>
            </div>

            <div className="relative border-l border-emerald-200 ml-4 md:ml-32 space-y-12">
              {[
                {
                  step: "Step 01",
                  title: "Understand Product Goal",
                  desc: "We understand your idea, category, audience, benchmark products and expected price segment."
                },
                {
                  step: "Step 02",
                  title: "Define Product Format",
                  desc: "We identify whether the product should be serum, cream, capsule, powder, juice, spray, perfume, oil, gel or another format."
                },
                {
                  step: "Step 03",
                  title: "Create Formulation Direction",
                  desc: "We define ingredient logic, sensory expectation, benefit angle and sampling brief."
                },
                {
                  step: "Step 04",
                  title: "Coordinate Sampling",
                  desc: "We support communication with formulation/manufacturing partners for sample creation and feedback."
                },
                {
                  step: "Step 05",
                  title: "Refine for Launch",
                  desc: "We align the final product direction with packaging, compliance, brand story and marketplace readiness."
                }
              ].map((item, index) => (
                <div key={index} className="relative pl-8 md:pl-12">
                  <div className="absolute -left-3.5 top-1.5 w-7 h-7 rounded-full bg-emerald-600 border-4 border-white flex items-center justify-center shadow-sm" />
                  <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/60 shadow-sm max-w-4xl">
                    <GsapTextReveal as="span" variant="label" className="font-mono text-emerald-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">{item.step}</GsapTextReveal>
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
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" />
              
              <div className="relative z-10">
                <div className="text-center mb-12">
                  <GsapTextReveal as="span" variant="label" className="text-emerald-400 font-bold tracking-wider text-xs uppercase">Target Profile</GsapTextReveal>
                  <GsapTextReveal as="h2" variant="heading" className="text-3xl font-extrabold mt-2 tracking-tight">This Service Is Best For</GsapTextReveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                  {[
                    "Founders with product ideas but no technical formulation clarity",
                    "D2C brands planning new product development",
                    "Ayurveda, Cosmetic, Perfume and Nutraceutical startups",
                    "Businesses looking for manufacturer-ready product briefs",
                    "Brands that need sampling and product refinement guidance",
                    "Founders who want product-market clarity before production"
                  ].map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3.5">
                      <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
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
              <GsapTextReveal as="span" variant="label" className="text-emerald-600 font-bold tracking-wider text-xs uppercase">Formulation FAQ</GsapTextReveal>
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
                        <HelpCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span>{faq.q}</span>
                      </h3>
                      <ChevronDown
                        className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-emerald-600" : ""}`}
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
        <section id="formulation-cta" className="bg-[#061033] py-20 text-center relative overflow-hidden border-t border-white/5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.12),transparent_40%)]" />
          <div className="max-w-4xl mx-auto px-4 relative z-10">
            <GsapTextReveal as="h2" variant="heading" className="text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">Ready to plan your product formulation?</GsapTextReveal>
            <GsapTextReveal as="p" variant="subheading" className="text-slate-300 mb-8 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">Create highly unique, compliant, and sample-ready product brief directions for your brand launch.</GsapTextReveal>
            <a
              id="cta-bottom-formulation"
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-4 text-base font-bold text-white bg-gradient-to-r from-red-600 to-amber-500 hover:opacity-90 rounded-xl transition-opacity shadow-lg shadow-red-950/40"
            >
              Start My Formulation Plan
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
