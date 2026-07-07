"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, X, User, Mail, Box, Tag, Rocket, ChevronDown, CheckCircle2 } from "lucide-react";
import Navbar from "./components/layout/Navbar";
import LaunchBadge from "./components/ui/LaunchBadge";
import GsapTextReveal from "./components/ui/GsapTextReveal";
import CategorySection from "./components/sections/CategorySection";

const HeroLiquidCursor = dynamic(() => import("./components/ui/HeroLiquidCursor"), {
	ssr: false,
	loading: () => null,
});

const LaunchVedaSystem = dynamic(
	() => import("./components/sections/LaunchVedaSystem"),
	{ ssr: false, loading: () => null },
);
const LaunchNo1Ticker = dynamic(
	() => import("./components/ui/LaunchNo1Ticker"),
	{ ssr: false, loading: () => null },
);
const LaunchVedaSection3 = dynamic(
	() => import("./components/sections/LaunchVedaSection3"),
	{ ssr: false, loading: () => null },
);
const PowerLaunchSection = dynamic(
	() => import("./components/sections/PowerLaunchSection"),
	{ ssr: false, loading: () => null },
);
const PhysicalBrandBanner = dynamic(
	() => import("./components/ui/PhysicalBrandBanner"),
	{ ssr: false, loading: () => null },
);
const LaunchIntelligenceSection = dynamic(
	() => import("./components/sections/LaunchIntelligenceSection"),
	{ ssr: false, loading: () => null },
);
const CompleteLaunchStackSection = dynamic(
	() =>
		import("./components/sections/CompleteLaunchStackSection").then(
			(mod) => mod.CompleteLaunchStackSection,
		),
	{ ssr: false, loading: () => null },
);
const ConnectedLaunchEcosystemSection = dynamic(
	() =>
		import("./components/sections/ConnectedLaunchEcosystemSection").then(
			(mod) => mod.ConnectedLaunchEcosystemSection,
		),
	{ ssr: false, loading: () => null },
);
const LaunchTickerStrip = dynamic(
	() => import("./components/ui/LaunchTickerStrip"),
	{ ssr: false, loading: () => null },
);
const FounderClarityHubSection = dynamic(
	() => import("./components/sections/FounderClarityHubSection"),
	{ ssr: false, loading: () => null },
);
const LaunchTrustStripSection = dynamic(
	() => import("./components/sections/LaunchTrustStripSection"),
	{ ssr: false, loading: () => null },
);
const LaunchInquiryFormSection = dynamic(
	() => import("./components/sections/LaunchInquiryFormSection"),
	{ ssr: false, loading: () => null },
);
const LaunchFooterSection = dynamic(
	() => import("./components/layout/LaunchFooterSection"),
	{ ssr: false, loading: () => null },
);

export default function App() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [formData, setFormData] = useState({
		fullName: "",
		email: "",
		brandName: "",
		category: "Cosmetics",
		stage: "Idea",
	});
	const [errors, setErrors] = useState({ fullName: "", email: "" });
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);
	const [submitError, setSubmitError] = useState("");

	const validateForm = () => {
		let valid = true;
		const newErrors = { fullName: "", email: "" };
		if (!formData.fullName.trim()) {
			newErrors.fullName = "Full Name is required";
			valid = false;
		}
		if (!formData.email.trim()) {
			newErrors.email = "Email is required";
			valid = false;
		} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
			newErrors.email = "Please enter a valid email";
			valid = false;
		}
		setErrors(newErrors);
		return valid;
	};

	const handleFormSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!validateForm()) return;
		setIsSubmitting(true);
		setSubmitError("");
		try {
			const res = await fetch("/api/launch-roadmap-lead", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(formData),
			});
			if (res.ok) {
				setIsSuccess(true);
				setFormData({
					fullName: "",
					email: "",
					brandName: "",
					category: "Cosmetics",
					stage: "Idea",
				});
			} else {
				const data = await res.json();
				setSubmitError(data.error || "Failed to submit. Please try again.");
			}
		} catch (err) {
			setSubmitError("Failed to submit. Please check your connection.");
		} finally {
			setIsSubmitting(false);
		}
	};

	const [enableDeferredHeroEffects, setEnableDeferredHeroEffects] =
		useState(false);

	useEffect(() => {
		const showHeroEffects = () => setEnableDeferredHeroEffects(true);
		const idleCallback =
			"requestIdleCallback" in window
				? window.requestIdleCallback(showHeroEffects, { timeout: 1600 })
				: globalThis.setTimeout(showHeroEffects, 900);

		return () => {
			if ("cancelIdleCallback" in window && typeof idleCallback === "number") {
				window.cancelIdleCallback(idleCallback);
			} else {
				globalThis.clearTimeout(idleCallback as number);
			}
		};
	}, []);

	// Animation presets for heading, subheading and CTA
	const staggerContainer = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.15,
				delayChildren: 0.1,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.8,
				ease: [0.22, 1, 0.36, 1] as const,
			},
		},
	};

	const headingVariants = {
		hidden: {
			opacity: 0,
			y: 35,
			letterSpacing: "0.04em",
			"--mask-progress": "0%",
		},
		visible: {
			opacity: 1,
			y: 0,
			letterSpacing: "-0.04em",
			"--mask-progress": "100%",
			transition: {
				duration: 1.1,
				ease: [0.22, 1, 0.36, 1],
				letterSpacing: { duration: 1.4, ease: [0.22, 1, 0.36, 1] },
				"--mask-progress": {
					duration: 1.5,
					ease: [0.22, 1, 0.36, 1],
				},
			},
		},
	} as const;

	const subheadingVariants = {
		hidden: {
			opacity: 0,
			y: 30,
			letterSpacing: "0.06em",
		},
		visible: {
			opacity: 1,
			y: 0,
			letterSpacing: "0em",
			transition: {
				duration: 1.1,
				ease: [0.22, 1, 0.36, 1],
				letterSpacing: { duration: 1.4, ease: [0.22, 1, 0.36, 1] },
			},
		},
	} as const;

	return (
		<div id="home-page">
			<div
				id="hero-canvas"
				className="relative w-full min-h-[844px] overflow-hidden sm:h-[100vh] sm:min-h-[720px]"
			>
				<img
					src="/herrrrooo.webp"
					alt=""
					loading="eager"
					fetchPriority="high"
					decoding="async"
					aria-hidden="true"
					className="absolute inset-0 z-0 hidden h-full w-full object-cover object-top sm:block"
				/>

				<video
					className="absolute inset-0 z-0 h-full w-full object-cover sm:hidden"
					src="/hero-mobile.webm"
					autoPlay
					muted
					loop
					playsInline
					aria-hidden="true"
				/>

				{/* 1. Subtle Dark/Blue Overlay (max opacity 0.08 to 0.12) to elevate text readability */}
				<div
					id="bg-mask"
					className="absolute inset-0 bg-[#061033] pointer-events-none z-[1] opacity-10"
				/>

				{/* Premium Water Ripple / Cursor Motion layer */}
				{enableDeferredHeroEffects && <HeroLiquidCursor />}

				{/* 2. Top Header / Navbar */}
				<Navbar />

				{/* 3. Main Content Container (Original Default Layout) */}
				<main
					id="main-content-flow"
					className="relative z-10 w-full max-w-[1380px] mx-auto min-h-[844px] px-4 sm:px-12 lg:px-16 pt-[160px] pb-[80px] sm:h-full sm:min-h-[920px] sm:pt-[200px] sm:pb-[120px] lg:pt-[220px] lg:pb-[140px] flex flex-col"
				>
					{/* Upper Center Banner and Copy Section */}
					<motion.div
						id="above-fold-hero"
						className="flex flex-1 flex-col justify-between sm:justify-start items-center sm:items-start text-center sm:text-left w-full max-w-[950px] sm:mr-auto"
						variants={staggerContainer}
						initial="hidden"
						animate="visible"
					>
						<div className="w-full flex flex-col items-center sm:items-start">
							{/* Centered Launch Badge */}
							<motion.div variants={itemVariants}>
								<LaunchBadge />
							</motion.div>

							{/* Main Display Heading */}
							<GsapTextReveal
								as="h1"
								id="hero-heading"
								variant="heading"
								delay={0.25}
								useScrollTrigger={false}
								style={
									{
										lineHeight: "1.06",
										textShadow:
											"0 4px 15px rgba(0, 0, 0, 0.12)",
										WebkitMaskImage:
											"linear-gradient(to top, rgba(0,0,0,1) var(--mask-progress), rgba(0,0,0,0) calc(var(--mask-progress) + 20%))",
										maskImage:
											"linear-gradient(to top, rgba(0,0,0,1) var(--mask-progress), rgba(0,0,0,0) calc(var(--mask-progress) + 20%))",
									} as any
								}
								className="text-[#F4F0E5] font-extrabold text-center sm:text-left max-w-[900px] mt-8"
							>
								<span className="block text-[clamp(35px,4.5vw,62px)] tracking-tight">
									Turn Your Idea Into a
								</span>
								<span
									style={{
										backgroundImage:
											"linear-gradient(180deg, #C9EAFF 0%, #6DBBFF 100%)",
										WebkitBackgroundClip: "text",
										WebkitTextFillColor:
											"transparent",
									}}
									className="text-[clamp(60px,5.5vw,78px)] block mt-[4px] font-black tracking-tight uppercase max-sm:font-semibold"
								>
									Brand
								</span>
							</GsapTextReveal>
						</div>

						<div className="w-full flex flex-col items-center sm:items-start">
							{/* Subheading text block */}
							<GsapTextReveal
								as="p"
								id="hero-subheading"
								variant="subheading"
								delay={0.4}
								useScrollTrigger={false}
								style={{
									textShadow:
										"0 2px 12px rgba(0, 0, 0, 0.45)",
								}}
								className="text-[#E2E8F0] text-sm sm:text-lg lg:text-xl font-medium max-w-[720px] leading-relaxed mt-[24px] text-center sm:text-left"
							>
								From formulation and manufacturing to
								packaging, compliance, branding,
								marketplace launch, and advanced
								growth.
							</GsapTextReveal>

							{/* Centered Action Call to Action row */}
							<motion.div
								id="cta-row"
								variants={itemVariants}
								className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-[16px] mt-[36px] w-full"
							>
								{/* Primary Action Button */}
								<motion.button
									id="cta-primary-btn"
									style={{
										background:
											"linear-gradient(135deg, #D71912 0%, #FF8A00 100%)",
									}}
									onClick={() => setIsModalOpen(true)}
									whileHover={{
										y: -2,
										borderColor:
											"rgba(255, 255, 255, 0.4)",
									}}
									className="w-[170px] sm:w-[200px] lg:w-[240px] h-[46px] sm:h-[52px] lg:h-[58px] rounded-lg sm:rounded-xl text-xs sm:text-sm lg:text-base text-white font-extrabold flex items-center justify-center gap-2 cursor-pointer shadow-md border border-transparent transition-colors duration-200"
								>
									<span>Start My Launch Plan</span>
									<ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
								</motion.button>

								{/* Secondary Action Button */}
								<motion.button
									id="cta-secondary-btn"
									whileHover={{
										y: -2,
										backgroundColor:
											"rgba(0,0,0,0.35)",
										borderColor:
											"rgba(255, 255, 255, 0.35)",
									}}
									onClick={() =>
										document
											.getElementById(
												"category-explore-section",
											)
											?.scrollIntoView({
												behavior: "smooth",
												block: "start",
											})
									}
									style={{
										boxShadow:
											"0 6px 20px rgba(0, 0, 0, 0.1)",
									}}
									className="w-[155px] sm:w-[180px] lg:w-[210px] h-[46px] sm:h-[52px] lg:h-[58px] rounded-lg sm:rounded-xl bg-black/25 border border-white/20 text-white font-extrabold text-xs sm:text-sm lg:text-base flex items-center justify-center gap-2 cursor-pointer backdrop-blur-sm transition-colors duration-200"
								>
									<span>Explore Process</span>
									<ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
								</motion.button>
							</motion.div>
						</div>
					</motion.div>
				</main>

				{/* 3b. Dedicated Override Composition for 1910x876 Viewport Only */}
				<div
					id="main-content-viewport-override"
					className="relative z-10 w-full h-[680px] px-6 sm:px-12 lg:px-16 pt-[120px] flex flex-row items-center justify-between pointer-events-auto"
				>
					{/* Left column content - Left text block */}
					<motion.div
						id="viewport-left-column"
						className="flex flex-col items-start text-left w-[740px] h-full justify-center"
						variants={staggerContainer}
						initial="hidden"
						animate="visible"
					>
						{/* Badge */}
						<motion.div
							id="viewport-badge-wrapper"
							className="mb-4"
							variants={itemVariants}
						>
							<LaunchBadge />
						</motion.div>

						{/* Heading */}
						<motion.div
							id="viewport-hero-heading"
							variants={headingVariants}
							style={
								{
									lineHeight: "1.02",
									textShadow:
										"0 4px 20px rgba(0, 0, 0, 0.14)",
									WebkitMaskImage:
										"linear-gradient(to top, rgba(0,0,0,1) var(--mask-progress), rgba(0,0,0,0) calc(var(--mask-progress) + 20%))",
									maskImage:
										"linear-gradient(to top, rgba(0,0,0,1) var(--mask-progress), rgba(0,0,0,0) calc(var(--mask-progress) + 20%))",
								} as any
							}
							className="text-[#F4F0E5] font-extrabold text-left"
						>
							<span className="block text-[60px] font-semibold tracking-tight italic">
								Turn Your Idea Into a
							</span>
							<span className="text-[144px] block mt-[-4px] font-black tracking-tighter leading-none">
								<span className="text-white font-black italic">
									B
								</span>
								<span className="text-[#6DBBFF] font-black italic">
									rand
								</span>
							</span>
						</motion.div>

						{/* Subheading text block */}
						<motion.p
							id="viewport-hero-subheading"
							variants={subheadingVariants}
							style={{
								textShadow:
									"0 2px 12px rgba(0, 0, 0, 0.55), 0 1px 3px rgba(0, 0, 0, 0.75)",
							}}
							className="text-white text-xl font-medium max-w-[620px] leading-relaxed mt-[22px] tracking-wide"
						>
							From formulation and manufacturing to
							packaging, compliance, branding, marketplace
							launch, and advanced growth.
						</motion.p>

						{/* Action Call to Action row */}
						<motion.div
							id="viewport-cta-row"
							variants={itemVariants}
							className="flex items-center gap-[18px] mt-[36px] w-full"
						>
							{/* Primary Button */}
							<motion.button
								id="viewport-cta-primary-btn"
								style={{
									background:
										"linear-gradient(135deg, #D71912 0%, #FF8A00 100%)",
								}}
								onClick={() => setIsModalOpen(true)}
								whileHover={{
									y: -2.5,
									borderColor:
										"rgba(255, 255, 255, 0.4)",
								}}
								className="w-[280px] h-[64px] rounded-[18px] text-white font-bold text-xl flex items-center justify-center gap-2 cursor-pointer shadow-lg border border-transparent transition-colors duration-200"
							>
								<span>Start My Launch Plan</span>
								<ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
							</motion.button>

							{/* Secondary Button */}
							<motion.button
								id="viewport-cta-secondary-btn"
								whileHover={{
									y: -2.5,
									backgroundColor:
										"rgba(0,0,0,0.35)",
									borderColor:
										"rgba(255, 255, 255, 0.35)",
								}}
								onClick={() =>
									document
										.getElementById(
											"category-explore-section",
										)
										?.scrollIntoView({
											behavior: "smooth",
											block: "start",
										})
								}
								style={{
									boxShadow:
										"0 10px 30px rgba(0, 0, 0, 0.1)",
								}}
								className="w-[280px] h-[64px] rounded-[18px] bg-black/25 border border-white/20 text-white font-bold text-xl flex items-center justify-center gap-2 cursor-pointer backdrop-blur-sm transition-colors duration-200"
							>
								<span>Explore Our Process</span>
								<ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
							</motion.button>
						</motion.div>
					</motion.div>

					{/* Right column content (stacked cards) */}
				</div>

				{/* Mobile-only Category Ticker/Marquee exactly matching mock */}
				<div className="absolute bottom-0 left-0 w-full bg-transparent overflow-hidden py-4 sm:hidden pointer-events-none select-none z-10 border-t border-white/10">
					<div className="flex w-max">
						<div
							style={{
								animation:
									"marquee-slide 15s linear infinite",
							}}
							className="flex items-center gap-6 pr-6 whitespace-nowrap"
						>
							{Array.from({ length: 4 }).map((_, i) => (
								<div
									key={i}
									className="flex items-center gap-6 text-white text-[16px] font-extrabold tracking-wide"
								>
									<span>Perfumes</span>
									<span className="text-white text-xl font-black">
										•
									</span>
									<span>Cosmetics</span>
									<span className="text-white text-xl font-black">
										•
									</span>
									<span>Ayurveda</span>
									<span className="text-white text-xl font-black">
										•
									</span>
									<span>Nutraceuticals</span>
									<span className="text-white text-xl font-black">
										•
									</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
			<CategorySection />
			<LaunchVedaSystem />
			<LaunchNo1Ticker />
			<LaunchVedaSection3 />
			<PowerLaunchSection />
			<PhysicalBrandBanner />
			<LaunchIntelligenceSection />
			<CompleteLaunchStackSection />
			<ConnectedLaunchEcosystemSection />
			<LaunchTickerStrip />
			<FounderClarityHubSection />
			<LaunchTrustStripSection />
			<LaunchInquiryFormSection />
			<LaunchFooterSection />

			{/* Premium Frosted Modal Popup Form */}
			<AnimatePresence>
				{isModalOpen && (
					<div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm">
						{/* Click outside to close backdrop */}
						<div className="absolute inset-0 cursor-pointer" onClick={() => { setIsModalOpen(false); setIsSuccess(false); }} />

						<motion.div
							initial={{ scale: 0.96, opacity: 0, y: 15 }}
							animate={{ scale: 1, opacity: 1, y: 0 }}
							exit={{ scale: 0.96, opacity: 0, y: 15 }}
							transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
							className="relative w-full max-w-md bg-white border border-slate-100 rounded-[28px] p-6 sm:p-8 shadow-2xl z-10 text-left space-y-6 overflow-hidden"
						>
							{/* Close Button */}
							<button
								onClick={() => { setIsModalOpen(false); setIsSuccess(false); }}
								className="absolute right-5 top-5 w-8 h-8 rounded-full border border-slate-100 bg-slate-50 flex items-center justify-center text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
							>
								<X className="w-4 h-4" />
							</button>

							{!isSuccess ? (
								<form onSubmit={handleFormSubmit} className="space-y-4">
									<div className="space-y-1">
										<div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-purple-50 border border-purple-100 text-[10px] font-extrabold uppercase tracking-widest text-purple-600 mb-1">
											Consultation
										</div>
										<h3 className="text-[#07152B] font-[900] text-xl tracking-tight leading-none">
											Start Your Launch Plan
										</h3>
										<p className="text-slate-500 font-semibold text-[11px] leading-relaxed">
											Fill in details to receive a custom roadmap execution plan.
										</p>
									</div>

									{/* Name */}
									<div className="space-y-1">
										<label className="text-slate-600 font-extrabold text-[10.5px] uppercase tracking-wider">Full Name</label>
										<div className="relative">
											<input
												type="text"
												placeholder="Enter your full name"
												value={formData.fullName}
												onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
												className={`w-full h-11 bg-slate-50/50 border ${errors.fullName ? "border-red-400 focus:ring-red-400" : "border-slate-200 focus:ring-purple-600"
													} rounded-xl pl-10 pr-4 text-xs font-semibold text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:bg-white transition-all`}
											/>
											<User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
										</div>
										{errors.fullName && <p className="text-[10px] text-red-500 font-semibold">{errors.fullName}</p>}
									</div>

									{/* Email */}
									<div className="space-y-1">
										<label className="text-slate-600 font-extrabold text-[10.5px] uppercase tracking-wider">Email Address</label>
										<div className="relative">
											<input
												type="email"
												placeholder="Enter your email address"
												value={formData.email}
												onChange={(e) => setFormData({ ...formData, email: e.target.value })}
												className={`w-full h-11 bg-slate-50/50 border ${errors.email ? "border-red-400 focus:ring-red-400" : "border-slate-200 focus:ring-purple-600"
													} rounded-xl pl-10 pr-4 text-xs font-semibold text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:bg-white transition-all`}
											/>
											<Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
										</div>
										{errors.email && <p className="text-[10px] text-red-500 font-semibold">{errors.email}</p>}
									</div>

									<div className="grid grid-cols-2 gap-4">
										{/* Brand Name */}
										<div className="space-y-1">
											<label className="text-slate-600 font-extrabold text-[10.5px] uppercase tracking-wider">Brand Name</label>
											<div className="relative">
												<input
													type="text"
													placeholder="e.g. Aura Botanics"
													value={formData.brandName}
													onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
													className="w-full h-11 bg-slate-50/50 border border-slate-200 focus:ring-purple-600 rounded-xl pl-9 pr-4 text-xs font-semibold text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:bg-white transition-all"
												/>
												<Box className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
											</div>
										</div>

										{/* Category */}
										<div className="space-y-1">
											<label className="text-slate-600 font-extrabold text-[10.5px] uppercase tracking-wider">Target Category</label>
											<div className="relative">
												<select
													value={formData.category}
													onChange={(e) => setFormData({ ...formData, category: e.target.value })}
													className="w-full h-11 bg-slate-50/50 border border-slate-200 focus:ring-purple-600 rounded-xl pl-9 pr-8 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-1 focus:bg-white appearance-none cursor-pointer"
												>
													<option value="Cosmetics">Cosmetics</option>
													<option value="Nutraceuticals">Nutraceuticals</option>
													<option value="Ayurveda">Ayurveda</option>
													<option value="Perfumes">Perfumes</option>
												</select>
												<Tag className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
												<ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
											</div>
										</div>
									</div>

									{/* Stage */}
									<div className="space-y-1">
										<label className="text-slate-600 font-extrabold text-[10.5px] uppercase tracking-wider">Launch Stage</label>
										<div className="relative">
											<select
												value={formData.stage}
												onChange={(e) => setFormData({ ...formData, stage: e.target.value })}
												className="w-full h-11 bg-slate-50/50 border border-slate-200 focus:ring-purple-600 rounded-xl pl-10 pr-8 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-1 focus:bg-white appearance-none cursor-pointer"
											>
												<option value="Idea">Idea (Just exploring)</option>
												<option value="Planning">Planning (1-3 months)</option>
												<option value="Development">Development (3-6 months)</option>
												<option value="Launch Ready">Launch Ready (0-3 months)</option>
											</select>
											<Rocket className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
											<ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
										</div>
									</div>

									{submitError && (
										<div className="p-3 rounded-xl bg-red-50 border border-red-100 text-[11px] font-semibold text-red-700">
											{submitError}
										</div>
									)}

									{/* Submit button */}
									<button
										type="submit"
										disabled={isSubmitting}
										className="w-full h-12 rounded-xl bg-slate-900 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-purple-700 transition-colors shadow-md disabled:opacity-50 cursor-pointer pt-0.5"
									>
										{isSubmitting ? "Submitting..." : "Get Consultation Roadmap"}
									</button>
								</form>
							) : (
								<div className="text-center py-6 space-y-6">
									<div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mx-auto">
										<CheckCircle2 className="w-8 h-8 stroke-[2]" />
									</div>
									<div className="space-y-2">
										<h4 className="text-[#07152B] font-[900] text-xl tracking-tight leading-none">
											Roadmap Plan Requested!
										</h4>
										<p className="text-slate-500 font-semibold text-xs leading-relaxed max-w-[280px] mx-auto">
											Thank you for sharing your requirement. Our team will reach out with a detailed roadmap proposal shortly.
										</p>
									</div>
									<button
										onClick={() => { setIsModalOpen(false); setIsSuccess(false); }}
										className="w-full h-11 rounded-xl bg-slate-900 text-white font-bold text-xs uppercase tracking-wider hover:bg-purple-600 transition-colors"
									>
										Done, Close
									</button>
								</div>
							)}
						</motion.div>
					</div>
				)}
			</AnimatePresence>
		</div>
	);
}
