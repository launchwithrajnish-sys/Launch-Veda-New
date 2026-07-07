import SEOManager from "../../components/seo/SEOManager";
import Navbar from "../../components/layout/Navbar";
import LaunchFooterSection from "../../components/layout/LaunchFooterSection";
import GsapTextReveal from "../../components/ui/GsapTextReveal";

export default function Page() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <SEOManager
        title="Growth & Marketing Services | LaunchVeda"
        description="Advanced marketing and growth strategies for your brand."
        canonical="https://launchveda.com/growth-and-marketing"
        breadcrumb={[
          { name: "Home", item: "https://launchveda.com" },
          { name: "Growth & Marketing", item: "https://launchveda.com/growth-and-marketing" }
        ]}
        service={{
          name: "Growth & Marketing Services",
          description: "Advanced marketing and growth strategies for your brand."
        }}
      />
      <div className="bg-[#061033]">
        <Navbar />
      </div>
      <main className="flex-grow pt-32 pb-24 px-4 sm:px-12 max-w-[1200px] mx-auto w-full">
        
        {/* AEO / GEO Direct Answer Block */}
        <section className="mb-16">
          <GsapTextReveal as="h1" variant="heading" className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Growth & Marketing</GsapTextReveal>
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl shadow-sm mb-8">
            <GsapTextReveal as="h2" variant="heading" className="text-xl font-bold text-slate-800 mb-2">Direct Answer</GsapTextReveal>
            <GsapTextReveal as="p" variant="subheading" className="text-slate-700 leading-relaxed text-lg">Advanced marketing and growth strategies for your brand. LaunchVeda provides a complete, step-by-step connected ecosystem to take your idea from formulation to successful market launch, ensuring compliance, premium quality, and scalable growth.</GsapTextReveal>
          </div>
        </section>

        {/* Short Explanation Section */}
        <section className="mb-16">
          <GsapTextReveal as="h2" variant="heading" className="text-3xl font-bold text-slate-900 mb-6">Overview</GsapTextReveal>
          <GsapTextReveal as="p" variant="subheading" className="text-slate-600 leading-relaxed text-lg">Launching a product brand requires expertise across multiple domains. Our Growth & Marketing service connects you with vetted experts, state-of-the-art facilities, and data-driven growth strategies. We eliminate the guesswork so you can focus on building your brand's vision.</GsapTextReveal>
        </section>

        {/* Process & Benefits */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <section>
            <GsapTextReveal as="h3" variant="heading" className="text-2xl font-bold text-slate-900 mb-6">Step-by-Step Process</GsapTextReveal>
            <ol className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold">1</span>
                <div>
                  <GsapTextReveal as="h4" variant="heading" className="font-bold text-slate-800">Initial Consultation</GsapTextReveal>
                  <GsapTextReveal as="p" variant="text" className="text-slate-600 text-sm">Understanding your vision and market positioning.</GsapTextReveal>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold">2</span>
                <div>
                  <GsapTextReveal as="h4" variant="heading" className="font-bold text-slate-800">Strategy & Planning</GsapTextReveal>
                  <GsapTextReveal as="p" variant="text" className="text-slate-600 text-sm">Detailed roadmap including formulation, packaging, and compliance.</GsapTextReveal>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold">3</span>
                <div>
                  <GsapTextReveal as="h4" variant="heading" className="font-bold text-slate-800">Execution</GsapTextReveal>
                  <GsapTextReveal as="p" variant="text" className="text-slate-600 text-sm">Manufacturing, branding, and digital asset creation.</GsapTextReveal>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold">4</span>
                <div>
                  <GsapTextReveal as="h4" variant="heading" className="font-bold text-slate-800">Launch & Scale</GsapTextReveal>
                  <GsapTextReveal as="p" variant="text" className="text-slate-600 text-sm">Marketplace optimization and data-driven growth campaigns.</GsapTextReveal>
                </div>
              </li>
            </ol>
          </section>

          <section>
            <GsapTextReveal as="h3" variant="heading" className="text-2xl font-bold text-slate-900 mb-6">Key Benefits</GsapTextReveal>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-slate-700">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                End-to-end managed ecosystem
              </li>
              <li className="flex items-center gap-3 text-slate-700">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                100% legal and regulatory compliance
              </li>
              <li className="flex items-center gap-3 text-slate-700">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                Premium packaging and brand identity
              </li>
              <li className="flex items-center gap-3 text-slate-700">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                Faster time to market
              </li>
            </ul>
          </section>
        </div>

        {/* FAQ Section for AEO */}
        <section className="mb-16">
          <GsapTextReveal as="h2" variant="heading" className="text-3xl font-bold text-slate-900 mb-6">Frequently Asked Questions</GsapTextReveal>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <GsapTextReveal as="h3" variant="heading" className="font-bold text-slate-800 text-lg mb-2">Who is this for?</GsapTextReveal>
              <GsapTextReveal as="p" variant="text" className="text-slate-600">This is for ambitious founders, entrepreneurs, and existing businesses looking to launch or scale a premium product brand in India without the operational headaches.</GsapTextReveal>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <GsapTextReveal as="h3" variant="heading" className="font-bold text-slate-800 text-lg mb-2">What is the typical timeline?</GsapTextReveal>
              <GsapTextReveal as="p" variant="text" className="text-slate-600">Depending on the product complexity (private label vs custom formulation), a complete launch typically takes between 45 to 90 days.</GsapTextReveal>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <GsapTextReveal as="h3" variant="heading" className="font-bold text-slate-800 text-lg mb-2">What are the deliverables?</GsapTextReveal>
              <GsapTextReveal as="p" variant="text" className="text-slate-600">You receive a fully formulated, manufactured, compliant, and branded product ready for sale, along with an optimized e-commerce presence and marketplace listings.</GsapTextReveal>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-slate-50 border border-slate-200 rounded-2xl p-8 sm:p-12 text-center">
          <GsapTextReveal as="h2" variant="heading" className="text-3xl font-bold text-slate-900 mb-4">Ready to start your journey?</GsapTextReveal>
          <GsapTextReveal as="p" variant="subheading" className="text-slate-600 mb-8 max-w-2xl mx-auto">Get in touch with our experts today to discuss your vision and see how LaunchVeda can bring your brand to life.</GsapTextReveal>
          <a href="/" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-[linear-gradient(135deg,#D71912_0%,#FF8A00_100%)] hover:opacity-90 rounded-xl transition-opacity shadow-md">
            Start My Launch Plan
          </a>
        </section>
      </main>
      <div className="bg-[#061033]">
        <LaunchFooterSection />
      </div>
    </div>
  );
}
