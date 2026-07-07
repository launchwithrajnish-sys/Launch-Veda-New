import type { Metadata } from "next";
import {
	ArrowRight,
	BadgeCheck,
	Building2,
	ClipboardCheck,
	Factory,
	FileSignature,
	FlaskConical,
	Handshake,
	MapPin,
	PackageCheck,
	Scale,
	Store,
} from "lucide-react";
import Navbar from "../../components/layout/Navbar";
import { LaunchFooterSection } from "../../components/layout/LaunchFooterSection";
import GsapTextReveal from "../../components/ui/GsapTextReveal";

export const metadata: Metadata = {
	title: "Terms of Service & Licensing Agreements",
	description:
		"Launch Veda terms of service, licensing agreements, co-founding framework, product formulation, regulatory approvals, supply chain and digital store handover terms.",
	alternates: {
		canonical: "https://launchveda.com/terms-of-service",
	},
};

const agreements = [
	{
		id: "01",
		title: "Co-Founding Partner Framework",
		icon: Handshake,
		body: "By scheduling a luxury consultation or requesting form templates from Launch Veda, you align with our custom co-founder engagement model. We prioritize skin-in-the-game support over transactional agency fees, working actively to eliminate typical launch barriers for first-time founders.",
	},
	{
		id: "02",
		title: "Product Formulation & Laboratory Trials",
		icon: FlaskConical,
		body: "All lab sampling runs are conducted in certified ISO, WHO-GMP, and FDA-compliant facilities in Noida or greater Delhi-NCR hubs. Turnaround times are estimated averages; specific formula stability and microbial clearances may alter production timing to ensure 100% legal compliance.",
	},
	{
		id: "03",
		title: "Quality Approvals & Regulatory CDSCO Clears",
		icon: ClipboardCheck,
		body: "Launch Veda leads the registration and submission process for CDSCO cosmetic manufacturing licenses, FSSAI nutritional approvals, and trademark registries. Licensing approvals are contingent upon governmental regulatory bodies; we provide full clerical execution to guarantee accuracy.",
	},
	{
		id: "04",
		title: "Supply Chain Automation & Freight Handling",
		icon: Factory,
		body: "Factory manufacturing outputs, physical bottle fitments, outer shell foil stamp specifications, and pallet packaging must be cleared and approved during the 3D CAD step before production line initiation. Once production completes, ownership passes to client-founder nodes following final clearance audits.",
	},
	{
		id: "05",
		title: "Digital Store Node Handover",
		icon: Store,
		body: "Upon successful builds, ownership of high-converting digital storefront structures, Shopify administrative portals, warehouse automated integrations, and Google Search Console property tracking setup is handily transferred directly to the founder.",
	},
];

const highlights = [
	"Co-Founder Framework",
	"Laboratory Trials",
	"CDSCO & FSSAI Support",
	"Supply Chain Clearance",
	"Digital Store Handover",
];

export default function TermsOfServicePage() {
	return (
		<div className="min-h-screen bg-[#f8fafc] text-slate-950 selection:bg-indigo-100 selection:text-indigo-950">
			<Navbar />

			<main className="relative overflow-hidden pt-28 sm:pt-32">
				<div className="absolute inset-x-0 top-0 -z-10 h-[520px] bg-gradient-to-br from-white via-indigo-50 to-sky-50" />
				<div className="absolute right-[-140px] top-4 -z-10 h-[380px] w-[380px] rounded-full bg-violet-300/30 blur-[90px]" />
				<div className="absolute left-[-120px] top-72 -z-10 h-[320px] w-[320px] rounded-full bg-cyan-300/30 blur-[90px]" />

				<section className="mx-auto w-full max-w-[1180px] px-4 pb-14 sm:px-6 lg:px-8">
					<div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
						<div className="text-slate-950">
							<div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white/80 px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.18em] text-indigo-700 shadow-sm backdrop-blur-md">
								<FileSignature className="h-4 w-4 text-indigo-600" />
								Launch Veda Corporate Compliance Matrix
							</div>
							<GsapTextReveal as="h1" variant="heading" className="max-w-4xl text-[38px] font-black leading-[0.98] tracking-tight sm:text-5xl lg:text-6xl">Terms of Service & Licensing Agreements</GsapTextReveal>
							<GsapTextReveal as="p" variant="text" className="mt-6 max-w-2xl text-base font-semibold leading-8 text-slate-700 sm:text-lg">A structured view of Launch Veda’s
								consultation, formulation, regulatory,
								supply chain, licensing and digital
								handover terms for founders building
								product brands.</GsapTextReveal>
						</div>

						<div className="rounded-[2rem] border border-white bg-white/60 p-5 shadow-2xl shadow-indigo-900/10 backdrop-blur-xl sm:p-6">
							<div className="rounded-[1.5rem] bg-white p-5 shadow-xl shadow-slate-950/10 sm:p-6">
								<div className="flex items-start gap-4">
									<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
										<BadgeCheck className="h-6 w-6" />
									</div>
									<div>
										<GsapTextReveal as="p" variant="text" className="text-xs font-extrabold uppercase tracking-[0.16em] text-indigo-600">Verified Legal Integrity
											Channel</GsapTextReveal>
										<GsapTextReveal as="h2" variant="heading" className="mt-2 text-2xl font-black tracking-tight text-slate-950">Secured Under Noida
											Jurisdiction</GsapTextReveal>
										<GsapTextReveal as="p" variant="text" className="mt-3 text-sm font-medium leading-6 text-slate-600">These terms outline how
											Launch Veda supports
											founders through partner
											engagement, lab trials,
											regulatory licensing,
											production clearance and
											digital asset handover.</GsapTextReveal>
									</div>
								</div>

								<div className="mt-6 grid gap-3 sm:grid-cols-2">
									{highlights.map((item) => (
										<div
											key={item}
											className="flex items-center gap-2 rounded-2xl border border-slate-100 bg-slate-50 px-3 py-2.5 text-xs font-extrabold text-slate-700"
										>
											<span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
											{item}
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
									<GsapTextReveal as="p" variant="text" className="text-xs font-extrabold uppercase tracking-widest text-slate-400">Agreement Index</GsapTextReveal>
									<GsapTextReveal as="p" variant="text" className="text-sm font-black text-slate-900">Service Terms</GsapTextReveal>
								</div>
							</div>
							<nav className="mt-4 space-y-2">
								{agreements.map((agreement) => (
									<a
										key={agreement.id}
										href={`#agreement-${agreement.id}`}
										className="group flex items-center justify-between rounded-2xl px-3 py-2.5 text-sm font-bold text-slate-600 transition-colors hover:bg-slate-50 hover:text-indigo-700"
									>
										<span>{agreement.title}</span>
										<ArrowRight className="h-4 w-4 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
									</a>
								))}
							</nav>
						</aside>

						<div className="space-y-5">
							{agreements.map((agreement) => (
								<article
									key={agreement.id}
									id={`agreement-${agreement.id}`}
									className="scroll-mt-28 rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-xl hover:shadow-slate-200/50 sm:p-8"
								>
									<div className="flex flex-col gap-5 sm:flex-row sm:items-start">
										<div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-lg shadow-slate-950/15">
											<agreement.icon className="h-6 w-6" />
										</div>
										<div>
											<div className="mb-3 inline-flex rounded-full bg-indigo-50 px-3 py-1 text-[11px] font-extrabold uppercase tracking-widest text-indigo-700">
												Agreement{" "}
												{agreement.id}
											</div>
											<GsapTextReveal as="h2" variant="heading" className="text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">{agreement.title}</GsapTextReveal>
											<GsapTextReveal as="p" variant="text" className="mt-4 text-[15px] font-medium leading-8 text-slate-600 sm:text-base">{agreement.body}</GsapTextReveal>
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
											jurisdiction, this terms
											page is maintained for
											Launch Veda founders,
											client-founder nodes,
											manufacturing
											stakeholders and digital
											launch partners.</GsapTextReveal>
									</div>
									<a
										href="mailto:support@launchveda.com"
										className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-black text-slate-950 transition-transform hover:-translate-y-0.5"
									>
										Contact Legal Team
									</a>
								</div>
							</section>

							<div className="grid gap-4 sm:grid-cols-3">
								{[
									{
										icon: Building2,
										label: "Partner Framework",
									},
									{
										icon: PackageCheck,
										label: "Clearance Audits",
									},
									{
										icon: Store,
										label: "Store Handover",
									},
								].map((item) => (
									<div
										key={item.label}
										className="rounded-2xl border border-slate-200 bg-white p-4 text-sm font-black text-slate-700 shadow-sm"
									>
										<item.icon className="mb-3 h-5 w-5 text-indigo-600" />
										{item.label}
									</div>
								))}
							</div>

							<GsapTextReveal as="p" variant="text" className="px-2 text-xs font-medium leading-6 text-slate-500">This page is an informational terms and
								licensing statement for Launch Veda.
								Final timelines, regulatory approvals,
								licensing clearances and handover
								dependencies may vary by product
								category, manufacturing partner,
								government authority and founder scope.</GsapTextReveal>
						</div>
					</div>
				</section>
			</main>

			<LaunchFooterSection />
		</div>
	);
}
