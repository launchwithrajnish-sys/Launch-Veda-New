"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Navbar from "../../components/layout/Navbar";
import { LaunchFooterSection } from "../../components/layout/LaunchFooterSection";
import {
	ArrowRight,
	Target,
	CheckCircle2,
	ShieldCheck,
	TrendingUp,
	Sparkles,
	FlaskConical,
	ShoppingBag,
	Map,
	Settings,
	ChevronDown,
	ChevronUp,
	Package,
	Leaf,
	Droplets,
} from "lucide-react";
import GsapTextReveal from "../../components/ui/GsapTextReveal";
import Link from "next/link";

const staggerContainer = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { staggerChildren: 0.15, delayChildren: 0.1 },
	},
};

const fadeUp = {
	hidden: { opacity: 0, y: 30 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: "easeOut" as const },
	},
};

export default function ProcessClientPage() {
	const [openFaq, setOpenFaq] = useState<number | null>(0);

	const toggleFaq = (index: number) => {
		setOpenFaq(openFaq === index ? null : index);
	};

	const faqs = [
		{
			q: "How does LaunchVeda start the process?",
			a: "We start by understanding the founder’s product idea, category, budget, target audience, launch goals and current stage.",
		},
		{
			q: "How long does a product launch take?",
			a: "A typical launch can take 8 to 12 weeks or more depending on category, formulation, sampling, manufacturing, packaging and compliance requirements.",
		},
		{
			q: "Does LaunchVeda help with manufacturer selection?",
			a: "Yes. LaunchVeda helps founders identify suitable manufacturers based on product category, MOQ, quality expectations and documentation needs.",
		},
		{
			q: "Does LaunchVeda support compliance?",
			a: "Yes. LaunchVeda provides packaging, label, documentation and compliance direction based on the selected category and launch platform.",
		},
		{
			q: "What happens after the product is ready?",
			a: "LaunchVeda supports website, marketplace setup, content planning, social media, performance marketing direction and advanced growth systems.",
		},
	];

	const floatingProcessItems = [
		{
			icon: Target,
			label: "Category",
			color: "text-blue-500",
			top: "15%",
			left: "15%",
			delay: 0,
		},
		{
			icon: FlaskConical,
			label: "Formulation",
			color: "text-purple-500",
			top: "25%",
			right: "12%",
			delay: 1,
		},
		{
			icon: Package,
			label: "Packaging",
			color: "text-emerald-500",
			bottom: "35%",
			left: "10%",
			delay: 2,
		},
		{
			icon: ShieldCheck,
			label: "Compliance",
			color: "text-teal-500",
			bottom: "15%",
			left: "35%",
			delay: 3,
		},
		{
			icon: ShoppingBag,
			label: "Marketplace",
			color: "text-orange-500",
			bottom: "25%",
			right: "15%",
			delay: 4,
		},
		{
			icon: TrendingUp,
			label: "Growth",
			color: "text-pink-500",
			top: "50%",
			right: "8%",
			delay: 5,
		},
	];

	const mobileOrbitItems = floatingProcessItems.map((item, index) => ({
		...item,
		orbit: [
			{ angle: -90, radius: 118, duration: 24 },
			{ angle: -30, radius: 118, duration: 24 },
			{ angle: 30, radius: 118, duration: 24 },
			{ angle: 90, radius: 118, duration: 24 },
			{ angle: 150, radius: 118, duration: 24 },
			{ angle: 210, radius: 118, duration: 24 },
		][index],
	}));

	return (
		<div className="min-h-screen bg-slate-50 font-sans selection:bg-indigo-100 selection:text-indigo-900 overflow-x-hidden flex flex-col">
			<Navbar />

			<main className="flex-grow pt-24 lg:pt-32 pb-20 relative overflow-hidden">
				{/* Abstract Background for Hero */}
				<div className="absolute top-0 left-0 w-full h-[800px] overflow-hidden -z-10 pointer-events-none">
					<div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-[120px]" />
					<div className="absolute top-[20%] -left-[10%] w-[50%] h-[50%] bg-gradient-to-tr from-blue-500/10 to-teal-500/10 rounded-full blur-[100px]" />
				</div>

				{/* Section 1: Hero */}
				<section className="px-6 max-w-[1320px] mx-auto w-full mb-32 relative">
					<div className="flex flex-col lg:flex-row items-center gap-16">
						<motion.div
							className="lg:w-1/2"
							initial="hidden"
							animate="visible"
							variants={staggerContainer}
						>
							<motion.div variants={fadeUp}>
								<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-indigo-100 shadow-sm mb-8">
									<span className="relative flex h-2.5 w-2.5">
										<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
										<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-500"></span>
									</span>
									<span className="text-xs font-extrabold tracking-widest text-indigo-600 uppercase">
										LAUNCHVEDA PROCESS
									</span>
								</div>
							</motion.div>
							<motion.h1
								variants={fadeUp}
								className="text-5xl lg:text-7xl font-extrabold text-[#0B132B] leading-[1.05] tracking-tight mb-8"
							>
								One Structured Process From{" "}
								<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
									Idea to Market
								</span>
								.
							</motion.h1>
							<motion.p
								variants={fadeUp}
								className="text-xl text-slate-600 leading-relaxed font-medium mb-10 max-w-lg"
							>
								LaunchVeda connects category strategy,
								formulation, manufacturing support,
								packaging, compliance, branding,
								marketplace launch and advanced growth
								into one clear execution roadmap.
							</motion.p>
							<motion.div
								variants={fadeUp}
								className="flex flex-wrap items-center gap-5"
							>
								<Link
									href="/contact"
									className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all bg-indigo-600 rounded-full hover:bg-indigo-700 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/40 hover:-translate-y-1"
								>
									Build My Launch Roadmap
									<ArrowRight className="w-5 h-5 ml-2" />
								</Link>
								<Link
									href="/services"
									className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-700 transition-all bg-white border border-slate-200 rounded-full hover:border-slate-300 hover:bg-slate-50 hover:-translate-y-1 hover:shadow-sm"
								>
									Explore Services
								</Link>
							</motion.div>
						</motion.div>

						<motion.div
							className="lg:w-1/2 relative w-full h-[500px] sm:h-[550px] flex items-center justify-center"
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{
								duration: 1,
								delay: 0.2,
								type: "spring",
								stiffness: 100,
							}}
						>
							<div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 rounded-[2rem] sm:rounded-[3rem] border border-white/60 shadow-2xl shadow-indigo-900/5 backdrop-blur-3xl overflow-hidden">
								{/* Orbit Circles */}
								<motion.div
									className="absolute w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] border border-indigo-200/60 rounded-full border-dashed"
									animate={{ rotate: 360 }}
									transition={{
										duration: 60,
										repeat: Infinity,
										ease: "linear",
									}}
								/>
								<motion.div
									className="absolute w-[210px] h-[210px] sm:w-[300px] sm:h-[300px] border border-purple-200/60 rounded-full border-dashed"
									animate={{ rotate: -360 }}
									transition={{
										duration: 40,
										repeat: Infinity,
										ease: "linear",
									}}
								/>

								{/* Center Core */}
								<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-24 h-24 sm:w-32 sm:h-32 bg-white rounded-[1.5rem] sm:rounded-3xl shadow-xl shadow-indigo-200/50 flex flex-col items-center justify-center border border-indigo-100/50 overflow-hidden group">
									<div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
									<div className="relative z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-indigo-50 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-500 shadow-inner">
										<span className="font-extrabold text-[20px] sm:text-[22px] tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-[#6366F1] to-[#A855F7]">
											Lv
										</span>
									</div>
									<span className="relative z-10 text-[11px] font-extrabold text-slate-500 uppercase tracking-widest group-hover:text-indigo-600 transition-colors">
										Core
									</span>
								</div>

								<div className="absolute inset-0 z-20 lg:hidden">
									{mobileOrbitItems.map(
										(item, i) => (
											<motion.div
												key={i}
												className="absolute left-1/2 top-1/2 h-0 w-0"
												initial={{
													opacity: 0,
													rotate: item
														.orbit
														.angle,
												}}
												whileInView={{
													opacity: 1,
												}}
												animate={{
													rotate:
														item.orbit
															.angle +
														360,
												}}
												viewport={{
													once: true,
												}}
												transition={{
													opacity: {
														duration: 0.45,
														delay:
															i *
															0.05,
													},
													rotate: {
														duration:
															item
																.orbit
																.duration,
														repeat: Infinity,
														ease: "linear",
													},
												}}
											>
												<motion.div
													className="absolute left-0 top-0 flex items-center gap-2.5 rounded-2xl border border-white/70 bg-white/85 px-3 py-2.5 shadow-[0_10px_30px_rgba(15,23,42,0.07)] backdrop-blur-md"
													style={{
														x: item
															.orbit
															.radius,
														y: "-50%",
													}}
													initial={{
														rotate: -item
															.orbit
															.angle,
														scale: 0.98,
													}}
													whileInView={{
														scale: 1,
													}}
													animate={{
														rotate: -(
															item
																.orbit
																.angle +
															360
														),
													}}
													viewport={{
														once: true,
													}}
													transition={{
														scale: {
															duration: 0.45,
															delay:
																i *
																0.05,
														},
														rotate: {
															duration:
																item
																	.orbit
																	.duration,
															repeat: Infinity,
															ease: "linear",
														},
													}}
												>
													<div className="shrink-0 rounded-xl bg-slate-50 p-2 shadow-inner">
														<item.icon
															className={`w-4 h-4 ${item.color}`}
														/>
													</div>
													<span className="text-[12.5px] font-extrabold leading-tight tracking-tight text-slate-700">
														{
															item.label
														}
													</span>
												</motion.div>
											</motion.div>
										),
									)}
								</div>

								{/* Floating Elements */}
								{floatingProcessItems.map((item, i) => (
									<motion.div
										key={i}
										className="hidden lg:flex absolute bg-white/90 backdrop-blur-sm px-4 py-3 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-white/50 items-center gap-3 z-20"
										style={{
											top: item.top,
											left: item.left,
											right: item.right,
											bottom: item.bottom,
										}}
										animate={{ y: [0, -10, 0] }}
										transition={{
											duration: 4,
											repeat: Infinity,
											delay: item.delay,
											ease: "easeInOut",
										}}
										whileHover={{
											scale: 1.05,
											zIndex: 30,
										}}
									>
										<div className="p-1.5 rounded-lg bg-slate-50 shadow-inner">
											<item.icon
												className={`w-4 h-4 ${item.color}`}
											/>
										</div>
										<span className="text-sm font-bold text-slate-700 tracking-tight">
											{item.label}
										</span>
									</motion.div>
								))}
							</div>
						</motion.div>
					</div>
				</section>

				{/* Section 2: Direct Answer Block */}
				<section className="px-6 max-w-[1100px] mx-auto w-full mb-32 relative z-10 -mt-8">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="bg-white/60 backdrop-blur-2xl p-10 md:p-14 rounded-[2.5rem] border border-white shadow-[0_8px_40px_rgba(0,0,0,0.04)] relative overflow-hidden"
					>
						<div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-indigo-100/50 to-transparent rounded-full blur-[80px] -z-10 transform translate-x-1/2 -translate-y-1/2" />
						<div className="max-w-3xl mx-auto text-center relative z-10">
							<GsapTextReveal as="h2" variant="heading" className="text-3xl md:text-4xl font-extrabold text-[#0B132B] mb-6">How LaunchVeda Works</GsapTextReveal>
							<GsapTextReveal as="p" variant="subheading" className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium mb-10">LaunchVeda follows a structured product
								launch process where every step is
								connected — from idea validation and
								category direction to formulation,
								manufacturer selection, packaging,
								compliance, brand building, marketplace
								setup and growth execution.</GsapTextReveal>
							<div className="flex flex-wrap justify-center gap-4">
								{[
									{
										icon: Target,
										label: "Strategy First",
										color: "text-indigo-600",
										bg: "bg-indigo-50",
									},
									{
										icon: ShieldCheck,
										label: "Compliance Ready",
										color: "text-emerald-600",
										bg: "bg-emerald-50",
									},
									{
										icon: TrendingUp,
										label: "Growth Connected",
										color: "text-pink-600",
										bg: "bg-pink-50",
									},
								].map((pill, i) => (
									<motion.div
										key={i}
										whileHover={{
											scale: 1.05,
											y: -2,
										}}
										className="px-6 py-3 bg-white shadow-sm border border-slate-100 rounded-full flex items-center gap-3 transition-all cursor-default"
									>
										<div
											className={`p-1.5 rounded-full ${pill.bg}`}
										>
											<pill.icon
												className={`w-4 h-4 ${pill.color}`}
											/>
										</div>
										<span className="text-sm font-bold text-slate-700 tracking-tight">
											{pill.label}
										</span>
									</motion.div>
								))}
							</div>
						</div>
					</motion.div>
				</section>

				{/* Section 3: Main Process Timeline */}
				<section className="px-6 max-w-[1320px] mx-auto w-full mb-32 relative">
					<div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-gradient-to-r from-blue-50/50 to-transparent rounded-full blur-[100px] -z-10 -translate-x-1/2 -translate-y-1/2" />

					<div className="text-center mb-24 max-w-3xl mx-auto">
						<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 mb-6">
							<span className="text-xs font-extrabold tracking-wider text-slate-600 uppercase">
								Step-by-Step
							</span>
						</div>
						<GsapTextReveal as="h2" variant="heading" className="text-4xl md:text-5xl font-extrabold text-[#0B132B] tracking-tight mb-6">From Idea to Launch</GsapTextReveal>
					</div>

					<div className="space-y-8 relative">
						{/* Vertical Line Desktop */}
						<div className="hidden md:block absolute left-[52px] top-10 bottom-10 w-1 bg-gradient-to-b from-blue-100 via-purple-100 to-pink-100 rounded-full" />

						{[
							{
								step: "01",
								title: "Category & Market Direction",
								text: "We define the right category, audience, pricing logic, competitor gap and product positioning before development starts.",
								tags: [
									"Market Gap",
									"Category Selection",
									"Pricing Direction",
									"Launch Feasibility",
								],
								gradient: "from-blue-500 to-indigo-500",
								shadow: "shadow-blue-500/20",
							},
							{
								step: "02",
								title: "Product Formulation & Sampling",
								text: "We guide formulation direction, sampling requirements, ingredient logic, product format and manufacturer coordination.",
								tags: [
									"Formula Direction",
									"Sample Planning",
									"Ingredient Strategy",
									"Product Format",
								],
								gradient:
									"from-indigo-500 to-violet-500",
								shadow: "shadow-indigo-500/20",
							},
							{
								step: "03",
								title: "Manufacturing Support",
								text: "We help identify suitable manufacturers based on category, MOQ, quality expectations, documentation and launch goals.",
								tags: [
									"Manufacturer Match",
									"MOQ Planning",
									"Production Scope",
									"Cost Direction",
								],
								gradient:
									"from-violet-500 to-purple-500",
								shadow: "shadow-violet-500/20",
							},
							{
								step: "04",
								title: "Packaging & Compliance",
								text: "We align packaging structure, label direction, documentation and compliance requirements for a market-ready product.",
								tags: [
									"Packaging Design",
									"Label Direction",
									"Documentation",
									"Compliance Guidance",
								],
								gradient:
									"from-purple-500 to-fuchsia-500",
								shadow: "shadow-purple-500/20",
							},
							{
								step: "05",
								title: "Brand & Digital Setup",
								text: "We build positioning, naming, identity, website direction, content system and marketplace-ready brand assets.",
								tags: [
									"Brand Identity",
									"Website",
									"Content System",
									"Marketplace Assets",
								],
								gradient:
									"from-fuchsia-500 to-pink-500",
								shadow: "shadow-fuchsia-500/20",
							},
							{
								step: "06",
								title: "Marketplace & Growth Launch",
								text: "We prepare the brand for Amazon, Flipkart, Nykaa, Tata 1mg, quick commerce, social media, ads and advanced growth.",
								tags: [
									"Marketplace Listing",
									"Social Media",
									"Performance Ads",
									"AI Growth",
								],
								gradient: "from-pink-500 to-rose-500",
								shadow: "shadow-pink-500/20",
							},
						].map((item, i) => (
							<motion.div
								key={i}
								initial={{ opacity: 0, x: -30 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{
									once: true,
									margin: "-100px",
								}}
								transition={{
									duration: 0.6,
									delay: i * 0.1,
									type: "spring",
									stiffness: 50,
								}}
								className="relative bg-white rounded-[2rem] p-8 lg:p-12 border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-xl transition-all duration-500 md:ml-32 group overflow-hidden"
							>
								{/* Hover Glow Background */}
								<div
									className={`absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl ${item.gradient} opacity-0 group-hover:opacity-[0.03] rounded-full blur-[80px] transition-opacity duration-700 pointer-events-none transform translate-x-1/3 -translate-y-1/3`}
								/>

								{/* Desktop Step Badge (Absolute) */}
								<div
									className={`hidden md:flex absolute top-12 -left-[4.5rem] w-14 h-14 rounded-full bg-white border-4 border-white shadow-lg items-center justify-center z-10 group-hover:scale-110 transition-transform duration-500`}
								>
									<div
										className={`absolute inset-0 rounded-full bg-gradient-to-br ${item.gradient} opacity-20 blur-md`}
									/>
									<div
										className={`w-full h-full rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center`}
									>
										<span className="font-extrabold text-white text-lg">
											{item.step}
										</span>
									</div>
								</div>

								<div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-start relative z-10">
									<div className="flex-1">
										<div className="md:hidden inline-flex items-center justify-center w-12 h-12 rounded-full mb-6 relative">
											<div
												className={`absolute inset-0 rounded-full bg-gradient-to-br ${item.gradient} opacity-20 blur-sm`}
											/>
											<div
												className={`w-full h-full rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center relative z-10`}
											>
												<span className="font-extrabold text-white text-lg">
													{item.step}
												</span>
											</div>
										</div>
										<h3 className="text-2xl lg:text-3xl font-extrabold text-[#0B132B] mb-4 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-slate-900 group-hover:to-slate-600 transition-all duration-300">
											{item.title}
										</h3>
										<GsapTextReveal as="p" variant="subheading" className="text-slate-600 text-lg leading-relaxed font-medium mb-8 max-w-3xl">{item.text}</GsapTextReveal>
										<div className="flex flex-wrap gap-3">
											{item.tags.map(
												(tag, j) => (
													<span
														key={j}
														className="px-4 py-2 bg-slate-50 border border-slate-100 rounded-xl text-xs font-bold text-slate-600 hover:bg-white hover:border-slate-300 hover:shadow-sm transition-all cursor-default"
													>
														{tag}
													</span>
												),
											)}
										</div>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</section>

				{/* Section 4: Dark Premium System Section */}
				<section className="py-32 bg-[#0B132B] relative overflow-hidden w-full mb-32">
					<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
					<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-full blur-[120px] pointer-events-none" />

					<div className="max-w-[1280px] w-full px-6 mx-auto relative z-10">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							className="text-center mb-24 max-w-3xl mx-auto"
						>
							<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6 backdrop-blur-sm">
								<span className="text-xs font-bold tracking-wider text-indigo-400 uppercase">
									Connected Ecosystem
								</span>
							</div>
							<GsapTextReveal as="h2" variant="heading" className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">One Process.
								<br />
								<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
									Every Team Connected.
								</span></GsapTextReveal>
							<GsapTextReveal as="p" variant="subheading" className="text-lg md:text-xl text-slate-400 leading-relaxed font-medium">Product, brand, compliance and growth
								work better when they are planned
								together.</GsapTextReveal>
						</motion.div>

						<div className="relative w-full max-w-[1100px] mx-auto h-auto lg:h-[650px] flex flex-col lg:block mt-10">
							{/* Desktop Connector SVG */}
							<svg className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-0">
								<defs>
									<linearGradient
										id="grad-dark-1"
										x1="0%"
										y1="0%"
										x2="100%"
										y2="0%"
									>
										<stop
											offset="0%"
											stopColor="transparent"
										/>
										<stop
											offset="100%"
											stopColor="#818cf8"
										/>
									</linearGradient>
									<linearGradient
										id="grad-dark-2"
										x1="0%"
										y1="0%"
										x2="100%"
										y2="0%"
									>
										<stop
											offset="0%"
											stopColor="transparent"
										/>
										<stop
											offset="100%"
											stopColor="#34d399"
										/>
									</linearGradient>
									<linearGradient
										id="grad-dark-3"
										x1="100%"
										y1="0%"
										x2="0%"
										y2="0%"
									>
										<stop
											offset="0%"
											stopColor="transparent"
										/>
										<stop
											offset="100%"
											stopColor="#60a5fa"
										/>
									</linearGradient>
									<linearGradient
										id="grad-dark-4"
										x1="100%"
										y1="0%"
										x2="0%"
										y2="0%"
									>
										<stop
											offset="0%"
											stopColor="transparent"
										/>
										<stop
											offset="100%"
											stopColor="#fb923c"
										/>
									</linearGradient>
									<linearGradient
										id="grad-dark-5"
										x1="100%"
										y1="0%"
										x2="0%"
										y2="0%"
									>
										<stop
											offset="0%"
											stopColor="transparent"
										/>
										<stop
											offset="100%"
											stopColor="#f472b6"
										/>
									</linearGradient>
								</defs>

								{/* Base Lines */}
								<path
									d="M280,150 C400,150 420,325 500,325"
									fill="none"
									stroke="rgba(255,255,255,0.05)"
									strokeWidth="1.5"
									strokeLinecap="round"
								/>
								<path
									d="M280,500 C400,500 420,325 500,325"
									fill="none"
									stroke="rgba(255,255,255,0.05)"
									strokeWidth="1.5"
									strokeLinecap="round"
								/>
								<path
									d="M820,100 C700,100 680,325 600,325"
									fill="none"
									stroke="rgba(255,255,255,0.05)"
									strokeWidth="1.5"
									strokeLinecap="round"
								/>
								<path
									d="M820,325 C700,325 680,325 600,325"
									fill="none"
									stroke="rgba(255,255,255,0.05)"
									strokeWidth="1.5"
									strokeLinecap="round"
								/>
								<path
									d="M820,550 C700,550 680,325 600,325"
									fill="none"
									stroke="rgba(255,255,255,0.05)"
									strokeWidth="1.5"
									strokeLinecap="round"
								/>

								{/* Animated Lines */}
								<motion.path
									d="M280,150 C400,150 420,325 500,325"
									fill="none"
									stroke="url(#grad-dark-1)"
									strokeWidth="2"
									strokeLinecap="round"
									initial={{
										pathLength: 0.1,
										pathOffset: 0,
									}}
									animate={{ pathOffset: [0, 1] }}
									transition={{
										duration: 3,
										repeat: Infinity,
										ease: "linear",
									}}
								/>
								<motion.path
									d="M280,500 C400,500 420,325 500,325"
									fill="none"
									stroke="url(#grad-dark-2)"
									strokeWidth="2"
									strokeLinecap="round"
									initial={{
										pathLength: 0.1,
										pathOffset: 0,
									}}
									animate={{ pathOffset: [0, 1] }}
									transition={{
										duration: 3,
										repeat: Infinity,
										ease: "linear",
										delay: 1,
									}}
								/>
								<motion.path
									d="M820,100 C700,100 680,325 600,325"
									fill="none"
									stroke="url(#grad-dark-3)"
									strokeWidth="2"
									strokeLinecap="round"
									initial={{
										pathLength: 0.1,
										pathOffset: 0,
									}}
									animate={{ pathOffset: [0, 1] }}
									transition={{
										duration: 3,
										repeat: Infinity,
										ease: "linear",
										delay: 0.5,
									}}
								/>
								<motion.path
									d="M820,325 C700,325 680,325 600,325"
									fill="none"
									stroke="url(#grad-dark-4)"
									strokeWidth="2"
									strokeLinecap="round"
									initial={{
										pathLength: 0.1,
										pathOffset: 0,
									}}
									animate={{ pathOffset: [0, 1] }}
									transition={{
										duration: 3,
										repeat: Infinity,
										ease: "linear",
										delay: 1.5,
									}}
								/>
								<motion.path
									d="M820,550 C700,550 680,325 600,325"
									fill="none"
									stroke="url(#grad-dark-5)"
									strokeWidth="2"
									strokeLinecap="round"
									initial={{
										pathLength: 0.1,
										pathOffset: 0,
									}}
									animate={{ pathOffset: [0, 1] }}
									transition={{
										duration: 3,
										repeat: Infinity,
										ease: "linear",
										delay: 2.5,
									}}
								/>
							</svg>

							{/* Central Orb */}
							<div className="relative lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 z-30 w-[240px] h-[240px] mx-auto mb-16 lg:mb-0 rounded-full bg-slate-900/80 backdrop-blur-md flex flex-col items-center justify-center text-center p-6 border border-slate-700/50 shadow-[0_0_100px_rgba(99,102,241,0.3)] before:absolute before:inset-[-24px] before:rounded-full before:border-[1px] before:border-slate-700/30 before:-z-10 after:absolute after:inset-[-48px] after:rounded-full after:border-[1px] after:border-slate-700/10 after:-z-20 group">
								<div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
								<div className="relative z-10 w-16 h-16 rounded-2xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
									<span className="font-extrabold text-[32px] tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-[#818cf8] to-[#c084fc]">
										Lv
									</span>
								</div>
								<span className="relative z-10 font-bold text-[24px] text-white leading-tight mb-1">
									LaunchVeda
								</span>
								<span className="relative z-10 text-[14px] text-indigo-400 font-extrabold tracking-widest uppercase">
									Core
								</span>
							</div>

							{/* Cards Container (Grid on mobile/tablet, absolute on desktop) */}
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:block w-full z-20 relative">
								{/* 1. Product Development */}
								<motion.div
									whileHover={{ scale: 1.02 }}
									className="relative lg:absolute lg:top-[100px] lg:left-0 w-full lg:w-[320px] bg-slate-900/60 backdrop-blur-xl rounded-3xl p-6 border border-slate-700/50 flex items-center gap-5 group hover:border-indigo-500/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] transition-all duration-300"
								>
									<div className="hidden lg:flex absolute top-1/2 -right-3 -translate-y-1/2 w-6 h-6 rounded-full bg-slate-800 items-center justify-center border border-slate-700 z-10">
										<div
											className="absolute inset-0 rounded-full bg-indigo-400/40 animate-ping"
											style={{
												animationDuration:
													"3s",
											}}
										/>
										<div className="w-2.5 h-2.5 rounded-full bg-indigo-400 relative z-10" />
									</div>
									<div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0 text-indigo-400 group-hover:scale-110 transition-transform duration-300">
										<FlaskConical className="w-6 h-6" />
									</div>
									<div>
										<h4 className="font-bold text-[16px] text-white mb-1.5">
											Product Development
										</h4>
										<GsapTextReveal as="p" variant="subheading" className="text-[13px] text-slate-400 leading-relaxed font-medium">Formulation, sampling and
											manufacturer direction.</GsapTextReveal>
									</div>
								</motion.div>

								{/* 2. Packaging & Compliance */}
								<motion.div
									whileHover={{ scale: 1.02 }}
									className="relative lg:absolute lg:top-[450px] lg:left-0 w-full lg:w-[320px] bg-slate-900/60 backdrop-blur-xl rounded-3xl p-6 border border-slate-700/50 flex items-center gap-5 group hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] transition-all duration-300"
								>
									<div className="hidden lg:flex absolute top-1/2 -right-3 -translate-y-1/2 w-6 h-6 rounded-full bg-slate-800 items-center justify-center border border-slate-700 z-10">
										<div
											className="absolute inset-0 rounded-full bg-emerald-400/40 animate-ping"
											style={{
												animationDuration:
													"3s",
												animationDelay:
													"1s",
											}}
										/>
										<div className="w-2.5 h-2.5 rounded-full bg-emerald-400 relative z-10" />
									</div>
									<div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 text-emerald-400 group-hover:scale-110 transition-transform duration-300">
										<ShieldCheck className="w-6 h-6" />
									</div>
									<div>
										<h4 className="font-bold text-[16px] text-white mb-1.5">
											Packaging & Compliance
										</h4>
										<GsapTextReveal as="p" variant="subheading" className="text-[13px] text-slate-400 leading-relaxed font-medium">Label, documentation and
											marketplace readiness.</GsapTextReveal>
									</div>
								</motion.div>

								{/* 3. Brand Creation */}
								<motion.div
									whileHover={{ scale: 1.02 }}
									className="relative lg:absolute lg:top-[50px] lg:right-0 w-full lg:w-[320px] bg-slate-900/60 backdrop-blur-xl rounded-3xl p-6 border border-slate-700/50 flex items-center gap-5 group hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-300"
								>
									<div className="hidden lg:flex absolute top-1/2 -left-3 -translate-y-1/2 w-6 h-6 rounded-full bg-slate-800 items-center justify-center border border-slate-700 z-10">
										<div
											className="absolute inset-0 rounded-full bg-blue-400/40 animate-ping"
											style={{
												animationDuration:
													"3s",
												animationDelay:
													"0.5s",
											}}
										/>
										<div className="w-2.5 h-2.5 rounded-full bg-blue-400 relative z-10" />
									</div>
									<div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0 text-blue-400 group-hover:scale-110 transition-transform duration-300">
										<Map className="w-6 h-6" />
									</div>
									<div>
										<h4 className="font-bold text-[16px] text-white mb-1.5">
											Brand Creation
										</h4>
										<GsapTextReveal as="p" variant="subheading" className="text-[13px] text-slate-400 leading-relaxed font-medium">Naming, positioning,
											identity and website
											direction.</GsapTextReveal>
									</div>
								</motion.div>

								{/* 4. Marketplace Setup */}
								<motion.div
									whileHover={{ scale: 1.02 }}
									className="relative lg:absolute lg:top-[275px] lg:right-0 w-full lg:w-[320px] bg-slate-900/60 backdrop-blur-xl rounded-3xl p-6 border border-slate-700/50 flex items-center gap-5 group hover:border-orange-500/50 hover:shadow-[0_0_30px_rgba(249,115,22,0.15)] transition-all duration-300"
								>
									<div className="hidden lg:flex absolute top-1/2 -left-3 -translate-y-1/2 w-6 h-6 rounded-full bg-slate-800 items-center justify-center border border-slate-700 z-10">
										<div
											className="absolute inset-0 rounded-full bg-orange-400/40 animate-ping"
											style={{
												animationDuration:
													"3s",
												animationDelay:
													"1.5s",
											}}
										/>
										<div className="w-2.5 h-2.5 rounded-full bg-orange-400 relative z-10" />
									</div>
									<div className="w-14 h-14 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0 text-orange-400 group-hover:scale-110 transition-transform duration-300">
										<ShoppingBag className="w-6 h-6" />
									</div>
									<div>
										<h4 className="font-bold text-[16px] text-white mb-1.5">
											Marketplace Setup
										</h4>
										<GsapTextReveal as="p" variant="subheading" className="text-[13px] text-slate-400 leading-relaxed font-medium">Listing assets, product
											content and launch
											readiness.</GsapTextReveal>
									</div>
								</motion.div>

								{/* 5. Growth Engine */}
								<motion.div
									whileHover={{ scale: 1.02 }}
									className="relative lg:absolute lg:top-[500px] lg:right-0 w-full lg:w-[320px] bg-slate-900/60 backdrop-blur-xl rounded-3xl p-6 border border-slate-700/50 flex items-center gap-5 group hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.15)] transition-all duration-300"
								>
									<div className="hidden lg:flex absolute top-1/2 -left-3 -translate-y-1/2 w-6 h-6 rounded-full bg-slate-800 items-center justify-center border border-slate-700 z-10">
										<div
											className="absolute inset-0 rounded-full bg-pink-400/40 animate-ping"
											style={{
												animationDuration:
													"3s",
												animationDelay:
													"2.5s",
											}}
										/>
										<div className="w-2.5 h-2.5 rounded-full bg-pink-400 relative z-10" />
									</div>
									<div className="w-14 h-14 rounded-2xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center shrink-0 text-pink-400 group-hover:scale-110 transition-transform duration-300">
										<Sparkles className="w-6 h-6" />
									</div>
									<div>
										<h4 className="font-bold text-[16px] text-white mb-1.5">
											Growth Engine
										</h4>
										<GsapTextReveal as="p" variant="subheading" className="text-[13px] text-slate-400 leading-relaxed font-medium">Social, ads, influencer
											and advanced
											automation.</GsapTextReveal>
									</div>
								</motion.div>
							</div>
						</div>
					</div>
				</section>

				{/* Section 5: Timeline Overview */}
				<section className="px-6 max-w-[1200px] mx-auto w-full mb-32">
					<div className="text-center mb-16">
						<GsapTextReveal as="h2" variant="heading" className="text-3xl md:text-5xl font-extrabold text-[#0B132B] mb-6 tracking-tight">Typical Launch Timeline</GsapTextReveal>
						<GsapTextReveal as="p" variant="subheading" className="text-lg text-slate-600 font-medium max-w-2xl mx-auto">A structured view of how we take your product
							from concept to marketplace execution.</GsapTextReveal>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
						{[
							{
								phase: "Phase 1",
								title: "Strategy & Product Direction",
								time: "Week 1–2",
								gradient: "from-blue-500 to-indigo-500",
								bg: "bg-blue-50/50",
								shadow: "hover:shadow-blue-500/10",
							},
							{
								phase: "Phase 2",
								title: "Formulation, Sampling & Packaging",
								time: "Week 3–6",
								gradient:
									"from-indigo-500 to-purple-500",
								bg: "bg-indigo-50/50",
								shadow: "hover:shadow-indigo-500/10",
							},
							{
								phase: "Phase 3",
								title: "Brand, Compliance & Marketplace Setup",
								time: "Week 6–10",
								gradient: "from-purple-500 to-pink-500",
								bg: "bg-purple-50/50",
								shadow: "hover:shadow-purple-500/10",
							},
							{
								phase: "Phase 4",
								title: "Launch, Marketing & Growth",
								time: "Week 10+",
								gradient: "from-pink-500 to-rose-500",
								bg: "bg-pink-50/50",
								shadow: "hover:shadow-pink-500/10",
							},
						].map((block, i) => (
							<motion.div
								key={i}
								whileHover={{ y: -8 }}
								className={`relative p-8 rounded-[2rem] border border-slate-100 flex flex-col justify-between bg-white shadow-lg shadow-slate-200/20 ${block.shadow} transition-all duration-300 h-full group overflow-hidden`}
							>
								<div
									className={`absolute inset-0 ${block.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
								/>
								<div
									className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${block.gradient}`}
								/>

								<div className="relative z-10">
									<div className="inline-flex items-center gap-2 mb-6">
										<span
											className={`w-2 h-2 rounded-full bg-gradient-to-r ${block.gradient}`}
										/>
										<span className="text-xs font-extrabold uppercase tracking-widest text-slate-500">
											{block.phase}
										</span>
									</div>
									<h3 className="text-xl font-bold text-slate-900 mb-8 leading-snug">
										{block.title}
									</h3>
								</div>
								<div className="relative z-10 inline-flex items-center px-4 py-2.5 bg-slate-50 group-hover:bg-white rounded-xl text-sm font-bold text-slate-700 shadow-sm border border-slate-100 self-start transition-colors duration-300">
									{block.time}
								</div>
							</motion.div>
						))}
					</div>
					<div className="flex items-center justify-center gap-2 text-sm text-slate-500 font-medium bg-slate-50 border border-slate-100 py-3 px-6 rounded-full max-w-fit mx-auto">
						<span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
						Timeline varies based on category, sampling,
						compliance and product complexity.
					</div>
				</section>

				{/* Section 6: What Founder Gets */}
				<section className="py-32 bg-gradient-to-b from-white to-slate-50/50 px-6 w-full mb-32 relative overflow-hidden">
					<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

					<div className="max-w-[1320px] mx-auto w-full relative z-10">
						<div className="text-center mb-20 max-w-3xl mx-auto">
							<GsapTextReveal as="h2" variant="heading" className="text-4xl md:text-5xl font-extrabold text-[#0B132B] tracking-tight mb-6">What You Get</GsapTextReveal>
							<GsapTextReveal as="p" variant="subheading" className="text-lg text-slate-600 font-medium">We don't just advise. We deliver the
								roadmap, the connections, and the assets
								you need.</GsapTextReveal>
						</div>

						<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
							{[
								{
									title: "Clear launch roadmap",
									icon: Target,
									color: "text-blue-600",
									bg: "bg-blue-50",
								},
								{
									title: "Category-specific product direction",
									icon: Map,
									color: "text-indigo-600",
									bg: "bg-indigo-50",
								},
								{
									title: "Manufacturer and formulation guidance",
									icon: FlaskConical,
									color: "text-purple-600",
									bg: "bg-purple-50",
								},
								{
									title: "Packaging and compliance support",
									icon: ShieldCheck,
									color: "text-emerald-600",
									bg: "bg-emerald-50",
								},
								{
									title: "Website and marketplace readiness",
									icon: ShoppingBag,
									color: "text-orange-600",
									bg: "bg-orange-50",
								},
								{
									title: "Growth and marketing execution plan",
									icon: TrendingUp,
									color: "text-pink-600",
									bg: "bg-pink-50",
								},
							].map((item, i) => (
								<motion.div
									key={i}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{
										duration: 0.5,
										delay: i * 0.1,
									}}
									className="bg-white p-8 rounded-3xl border border-slate-100 flex items-center gap-6 hover:border-slate-200 hover:shadow-xl hover:shadow-slate-200/40 transition-all duration-300 group"
								>
									<div
										className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center shrink-0 border border-white shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}
									>
										<item.icon
											className={`w-7 h-7 ${item.color}`}
										/>
									</div>
									<span className="font-bold text-slate-800 text-lg leading-tight group-hover:text-indigo-600 transition-colors">
										{item.title}
									</span>
								</motion.div>
							))}
						</div>

						<div className="mt-24 pt-16 border-t border-slate-100 relative">
							<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[1px] bg-gradient-to-r from-transparent via-indigo-200 to-transparent" />
							<div className="text-center mb-10">
								<h3 className="text-2xl font-extrabold text-[#0B132B]">
									Explore Category-Specific Launch
									Processes
								</h3>
							</div>
							<div className="flex flex-wrap justify-center gap-4">
								<Link
									href="/perfume-brand-launch"
									className="px-6 py-4 bg-white border border-slate-200 hover:border-indigo-300 hover:shadow-lg hover:shadow-indigo-500/10 rounded-2xl font-bold text-slate-700 transition-all text-sm flex items-center gap-3 hover:-translate-y-1"
								>
									<div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center">
										<Sparkles className="w-4 h-4 text-indigo-500" />
									</div>
									Perfume Brand Launch
								</Link>
								<Link
									href="/ayurveda-brand-launch"
									className="px-6 py-4 bg-white border border-slate-200 hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-500/10 rounded-2xl font-bold text-slate-700 transition-all text-sm flex items-center gap-3 hover:-translate-y-1"
								>
									<div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center">
										<Leaf className="w-4 h-4 text-emerald-500" />
									</div>
									Ayurveda Brand Launch
								</Link>
								<Link
									href="/cosmetic-brand-launch"
									className="px-6 py-4 bg-white border border-slate-200 hover:border-pink-300 hover:shadow-lg hover:shadow-pink-500/10 rounded-2xl font-bold text-slate-700 transition-all text-sm flex items-center gap-3 hover:-translate-y-1"
								>
									<div className="w-8 h-8 rounded-lg bg-pink-50 flex items-center justify-center">
										<Droplets className="w-4 h-4 text-pink-500" />
									</div>
									Cosmetic Brand Launch
								</Link>
								<Link
									href="/nutraceutical-brand-launch"
									className="px-6 py-4 bg-white border border-slate-200 hover:border-orange-300 hover:shadow-lg hover:shadow-orange-500/10 rounded-2xl font-bold text-slate-700 transition-all text-sm flex items-center gap-3 hover:-translate-y-1"
								>
									<div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center">
										<Package className="w-4 h-4 text-orange-500" />
									</div>
									Nutraceutical Launch
								</Link>
							</div>
						</div>
					</div>
				</section>

				{/* Section 7: FAQ */}
				<section className="px-6 max-w-[800px] mx-auto w-full mb-32 relative">
					<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-b from-indigo-50/50 to-purple-50/50 rounded-full blur-[100px] -z-10 pointer-events-none" />

					<div className="text-center mb-16">
						<GsapTextReveal as="h2" variant="heading" className="text-4xl md:text-5xl font-extrabold text-[#0B132B] tracking-tight">Process FAQs</GsapTextReveal>
					</div>
					<div className="space-y-4">
						{faqs.map((faq, index) => (
							<div
								key={index}
								className="border border-slate-200/80 rounded-3xl overflow-hidden bg-white/60 backdrop-blur-md transition-all hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-500/5 group"
							>
								<div
									style={{ display: "none" }}
									className="faq-seo-metadata"
									data-question={faq.q}
									data-answer={faq.a}
								/>
								<button
									className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none"
									onClick={() => toggleFaq(index)}
								>
									<span className="font-bold text-lg md:text-xl text-[#0B132B] group-hover:text-indigo-700 transition-colors">
										{faq.q}
									</span>
									<span className="ml-4 flex-shrink-0 text-slate-400 group-hover:text-indigo-500 transition-colors">
										<motion.div
											animate={{
												rotate:
													openFaq ===
													index
														? 180
														: 0,
											}}
											transition={{
												duration: 0.3,
											}}
										>
											<ChevronDown className="w-6 h-6" />
										</motion.div>
									</span>
								</button>
								<AnimatePresence>
									{openFaq === index && (
										<motion.div
											initial={{
												height: 0,
												opacity: 0,
											}}
											animate={{
												height: "auto",
												opacity: 1,
											}}
											exit={{
												height: 0,
												opacity: 0,
											}}
											className="overflow-hidden"
										>
											<div className="px-8 pb-6 text-slate-600 text-lg leading-relaxed font-medium">
												{faq.a}
											</div>
										</motion.div>
									)}
								</AnimatePresence>
							</div>
						))}
					</div>
				</section>

				{/* Section 8: Final CTA */}
				<section className="px-6 max-w-[1200px] mx-auto w-full relative z-10">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="bg-[#0B132B] rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl shadow-indigo-900/20"
					>
						{/* Dark Mode Background Effects */}
						<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-[100px] transform translate-x-1/3 -translate-y-1/3 pointer-events-none" />
						<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-blue-500/20 to-teal-500/20 rounded-full blur-[100px] transform -translate-x-1/3 translate-y-1/3 pointer-events-none" />
						<div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none" />

						<div className="relative z-10 max-w-3xl mx-auto">
							<GsapTextReveal as="h2" variant="heading" className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-8 tracking-tight">Ready to Start Your <br />
								Launch Process?</GsapTextReveal>
							<GsapTextReveal as="p" variant="subheading" className="text-xl text-slate-300 font-medium mb-12 leading-relaxed">Share your product idea and LaunchVeda
								will help you understand the right next
								steps for product, brand, compliance and
								growth.</GsapTextReveal>
							<Link
								href="/contact"
								className="inline-flex items-center justify-center px-4 sm:px-10 sm:text-lg py-5 text-sm font-bold text-white transition-all bg-indigo-600 rounded-full hover:bg-indigo-500 shadow-xl shadow-indigo-500/20 hover:shadow-indigo-500/40 hover:-translate-y-1"
							>
								Build My Launch Roadmap
								<ArrowRight className="w-5 h-5 ml-2" />
							</Link>
						</div>
					</motion.div>
				</section>
			</main>

			<LaunchFooterSection />
		</div>
	);
}
