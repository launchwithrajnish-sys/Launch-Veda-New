import type { Metadata } from "next";
import {
	ArrowRight,
	BadgeCheck,
	Database,
	FileLock2,
	Fingerprint,
	FlaskConical,
	Globe2,
	LockKeyhole,
	MapPin,
	Scale,
	ShieldCheck,
} from "lucide-react";
import Navbar from "../../components/layout/Navbar";
import { LaunchFooterSection } from "../../components/layout/LaunchFooterSection";
import GsapTextReveal from "../../components/ui/GsapTextReveal";

export const metadata: Metadata = {
	title: "Privacy Policy & Regulatory Disclosures",
	description:
		"LaunchVeda privacy policy, CDSCO and FSSAI regulatory disclosures, data protection principles, laboratory confidentiality, cookies, analytics and jurisdiction information.",
	alternates: {
		canonical: "https://launchveda.com/privacy-policy",
	},
};

const policySections = [
	{
		id: "01",
		title: "Data Alignment & Protection Principles",
		icon: ShieldCheck,
		body: "At Launch Veda, we construct premium D2C brand infrastructures. Protecting your intellectual property, custom formulations, bottle mold CAD vectors, and user telemetry is our foundational commitment. This policy governs all privacy practices under Section 43A of the Indian Information Technology Act, 2000.",
	},
	{
		id: "02",
		title: "Information Collected & Intended Purposes",
		icon: Database,
		body: "We strictly collect business details necessary for launching: contact information such as founder name, business email and telephone, formulation parameters such as wellness requirements, organic certifications and CDSCO licensing data, and technical integration details such as e-commerce checkout telemetry and Google Analytics tracking indices.",
	},
	{
		id: "03",
		title: "CDSCO, FSSAI & Laboratory Confidentiality",
		icon: FlaskConical,
		body: "All chemical formulas, raw ingredient proportions, material-safety sheets (MSDS), and trademark files transferred through our co-founding matrix are held in sterile cryptographic nodes. We enforce direct, non-disclosure-backed co-owner conditions, guaranteeing zero raw formula data leaks to contract laboratory networks.",
	},
	{
		id: "04",
		title: "No Fractional Data Claims",
		icon: Fingerprint,
		body: "You retain 100% unilateral ownership of all physical formulation variants, legal safety approvals, trademark registrations, and digital node structures built on Shopify. No data or telemetry created during our partner terms is rented or sold to competitors.",
	},
	{
		id: "05",
		title: "Cookies & Secure Site Analytics",
		icon: Globe2,
		body: "We utilize secure, server-side cookies solely to monitor Core Web Vitals, including Time to First Byte, First Contentful Paint, Cumulative Layout Shift, and Interaction to Next Paint, enhancing technical sitemap processing and ranking outputs for Googlebot and Bingbot crawlers.",
	},
];

const compliancePills = [
	"Privacy Policy",
	"CDSCO Disclosure",
	"FSSAI Disclosure",
	"Laboratory Confidentiality",
	"Noida Jurisdiction",
];

export default function PrivacyPolicyPage() {
	return (
		<div className="min-h-screen bg-[#f8fafc] text-slate-950 selection:bg-indigo-100 selection:text-indigo-950">
			<Navbar />

			<main className="relative overflow-hidden pt-28 sm:pt-32">
				<div className="absolute inset-x-0 top-0 -z-10 h-[520px] bg-gradient-to-br from-white via-indigo-50 to-sky-50" />
				<div className="absolute right-[-120px] top-10 -z-10 h-[360px] w-[360px] rounded-full bg-indigo-300/30 blur-[90px]" />
				<div className="absolute left-[-120px] top-72 -z-10 h-[320px] w-[320px] rounded-full bg-sky-300/30 blur-[90px]" />

				<section className="mx-auto w-full max-w-[1180px] px-4 pb-14 sm:px-6 lg:px-8">
					<div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
						<div className="text-slate-950">
							<div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white/80 px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.18em] text-indigo-700 shadow-sm backdrop-blur-md">
								<LockKeyhole className="h-4 w-4 text-indigo-600" />
								Launch Veda Corporate Compliance Matrix
							</div>
							<GsapTextReveal as="h1" variant="heading" className="max-w-4xl text-[38px] font-black leading-[0.98] tracking-tight sm:text-5xl lg:text-6xl">Privacy Policy & CDSCO / FSSAI
								Regulatory Disclosures</GsapTextReveal>
							<GsapTextReveal as="p" variant="text" className="mt-6 max-w-2xl text-base font-semibold leading-8 text-slate-700 sm:text-lg">A clear record of how Launch Veda
								handles founder data, product
								formulation material, laboratory
								confidentiality, secure analytics, and
								regulatory disclosure principles.</GsapTextReveal>
						</div>

						<div className="rounded-[2rem] border border-white bg-white/60 p-5 shadow-2xl shadow-indigo-900/10 backdrop-blur-xl sm:p-6">
							<div className="rounded-[1.5rem] bg-white p-5 shadow-xl shadow-slate-950/10 sm:p-6">
								<div className="flex items-start gap-4">
									<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
										<BadgeCheck className="h-6 w-6" />
									</div>
									<div>
										<GsapTextReveal as="p" variant="text" className="text-xs font-extrabold uppercase tracking-[0.16em] text-emerald-600">Verified Legal Integrity
											Channel</GsapTextReveal>
										<GsapTextReveal as="h2" variant="heading" className="mt-2 text-2xl font-black tracking-tight text-slate-950">Secured Under Noida
											Jurisdiction</GsapTextReveal>
										<GsapTextReveal as="p" variant="text" className="mt-3 text-sm font-medium leading-6 text-slate-600">This page consolidates
											Launch Veda privacy,
											regulatory, laboratory,
											analytics and ownership
											disclosures for founders
											and product brand
											partners.</GsapTextReveal>
									</div>
								</div>

								<div className="mt-6 grid gap-3 sm:grid-cols-2">
									{compliancePills.map((pill) => (
										<div
											key={pill}
											className="flex items-center gap-2 rounded-2xl border border-slate-100 bg-slate-50 px-3 py-2.5 text-xs font-extrabold text-slate-700"
										>
											<span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
											{pill}
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="mx-auto w-full max-w-[1180px] px-4 sm:px-6 lg:px-8">
					<div className="grid gap-5 lg:grid-cols-[280px_minmax(0,1fr)]">
						<aside className="h-fit rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm lg:sticky lg:top-24">
							<div className="flex items-center gap-3 border-b border-slate-100 pb-4">
								<div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
									<Scale className="h-5 w-5" />
								</div>
								<div>
									<GsapTextReveal as="p" variant="text" className="text-xs font-extrabold uppercase tracking-widest text-slate-400">Policy Index</GsapTextReveal>
									<GsapTextReveal as="p" variant="text" className="text-sm font-black text-slate-900">Compliance Sections</GsapTextReveal>
								</div>
							</div>
							<nav className="mt-4 space-y-2">
								{policySections.map((section) => (
									<a
										key={section.id}
										href={`#section-${section.id}`}
										className="group flex items-center justify-between rounded-2xl px-3 py-2.5 text-sm font-bold text-slate-600 transition-colors hover:bg-slate-50 hover:text-indigo-700"
									>
										<span>{section.title}</span>
										<ArrowRight className="h-4 w-4 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
									</a>
								))}
							</nav>
						</aside>

						<div className="space-y-5">
							{policySections.map((section) => (
								<article
									key={section.id}
									id={`section-${section.id}`}
									className="scroll-mt-28 rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-xl hover:shadow-slate-200/50 sm:p-8"
								>
									<div className="flex flex-col gap-5 sm:flex-row sm:items-start">
										<div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-lg shadow-slate-950/15">
											<section.icon className="h-6 w-6" />
										</div>
										<div>
											<div className="mb-3 inline-flex rounded-full bg-indigo-50 px-3 py-1 text-[11px] font-extrabold uppercase tracking-widest text-indigo-700">
												Section {section.id}
											</div>
											<GsapTextReveal as="h2" variant="heading" className="text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">{section.title}</GsapTextReveal>
											<GsapTextReveal as="p" variant="text" className="mt-4 text-[15px] font-medium leading-8 text-slate-650 sm:text-base">{section.body}</GsapTextReveal>
										</div>
									</div>
								</article>
							))}

							<section className="rounded-[2rem] bg-[#07152B] p-6 text-white shadow-2xl shadow-slate-950/20 sm:p-8">
								<div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
									<div>
										<div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.16em] text-sky-100">
											<MapPin className="h-4 w-4" />
											Jurisdiction Record
										</div>
										<GsapTextReveal as="h2" variant="heading" className="text-2xl font-black tracking-tight sm:text-3xl">Verified Legal Integrity
											Channel</GsapTextReveal>
										<GsapTextReveal as="p" variant="text" className="mt-3 max-w-2xl text-sm font-medium leading-7 text-slate-300">Secured under Noida
											jurisdiction, this
											disclosure page is
											maintained for Launch
											Veda founders, partners,
											and product launch
											stakeholders.</GsapTextReveal>
									</div>
									<a
										href="mailto:support@launchveda.com"
										className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-black text-slate-950 transition-transform hover:-translate-y-0.5"
									>
										Contact Compliance
									</a>
								</div>
							</section>

							<GsapTextReveal as="p" variant="text" className="px-2 text-xs font-medium leading-6 text-slate-500">This page is an informational privacy
								and disclosure statement for Launch
								Veda. Regulatory obligations may vary by
								product category, formulation, claims,
								marketplace and manufacturing partner.</GsapTextReveal>
						</div>
					</div>
				</section>
			</main>

			<LaunchFooterSection />
		</div>
	);
}
