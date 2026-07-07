"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Navbar from "../../components/layout/Navbar";
import { LaunchFooterSection } from "../../components/layout/LaunchFooterSection";
import {
	ArrowRight,
	Target,
	FlaskConical,
	Settings,
	Package,
	ShieldCheck,
	Globe,
	ShoppingBag,
	Share2,
	TrendingUp,
	Sparkles,
	ChevronDown,
	Sparkle,
	Droplets,
	Leaf,
	CheckCircle2,
	Cpu,
} from "lucide-react";
import GsapTextReveal from "../../components/ui/GsapTextReveal";
import Link from "next/link";

// Animation Variants
const staggerContainer: Variants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { staggerChildren: 0.1, delayChildren: 0.05 },
	},
};

const fadeUp: Variants = {
	hidden: { opacity: 0, y: 30 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
	},
};

const scaleIn: Variants = {
	hidden: { opacity: 0, scale: 0.95 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
	},
};

// Premium Animated Icon Wrapper Component
const IconWrapper = ({
	icon: Icon,
	colorClass = "text-indigo-600",
	bgClass = "bg-indigo-50",
	shadowClass = "shadow-indigo-100",
	delay = 0,
}: {
	icon: React.ComponentType<any>;
	colorClass?: string;
	bgClass?: string;
	shadowClass?: string;
	delay?: number;
}) => {
	return (
		<motion.div
			animate={{
				y: [0, -6, 0],
			}}
			transition={{
				duration: 5,
				repeat: Infinity,
				ease: "easeInOut",
				delay: delay,
			}}
			className={`relative flex items-center justify-center w-14 h-14 rounded-2xl ${bgClass} ${shadowClass} shadow-md border border-white/80 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg`}
		>
			{/* Glow Backdrop */}
			<div
				className={`absolute inset-0 rounded-2xl opacity-30 blur-md ${bgClass} group-hover:opacity-50 transition-opacity duration-300`}
			/>
			{/* Icon */}
			<Icon
				className={`w-7 h-7 relative z-10 ${colorClass} transition-transform duration-300 group-hover:rotate-12`}
			/>
		</motion.div>
	);
};

export default function ServicesClientPage() {
	const [activeFaq, setActiveFaq] = useState<number | null>(null);

	// Mouse trail pointer tracking state
	const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
	const [trail, setTrail] = useState<
		{ id: number; x: number; y: number; color: string }[]
	>([]);
	const trailCounter = useRef(0);

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			setMousePosition({ x: e.clientX, y: e.clientY });

			// Spawn a colorful interactive particle on swift move
			if (Math.random() < 0.25) {
				const colors = [
					"rgba(99, 102, 241, 0.7)", // Indigo
					"rgba(168, 85, 247, 0.7)", // Purple
					"rgba(236, 72, 153, 0.7)", // Pink
					"rgba(245, 158, 11, 0.7)", // Amber
					"rgba(16, 185, 129, 0.7)", // Emerald
					"rgba(6, 182, 212, 0.7)", // Cyan
				];
				const randomColor =
					colors[Math.floor(Math.random() * colors.length)];
				const newId = trailCounter.current++;
				setTrail((prev) => [
					...prev.slice(-15),
					{
						id: newId,
						x: e.clientX,
						y: e.clientY,
						color: randomColor,
					},
				]);
			}
		};

		window.addEventListener("mousemove", handleMouseMove);
		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, []);

	const toggleFaq = (index: number) => {
		setActiveFaq(activeFaq === index ? null : index);
	};

	// 10 Core Services with solid premium colors, bold solid borders, and clear dark slate text
	const coreServices = [
		{
			icon: Target,
			title: "Brand Strategy & Positioning",
			description:
				"We define your brand direction, audience, category gap, pricing logic, product positioning and market entry strategy.",
			points: [
				"Brand Naming",
				"Positioning",
				"Audience Mapping",
				"Pricing Direction",
			],
			bgColor: "bg-[#F3E8FF] hover:bg-[#E9D5FF]",
			borderColor: "border-2 border-[#D6BCFA] hover:border-[#B794F4]",
			iconBg: "bg-white",
			iconColor: "text-[#7E22CE]",
			glowColor: "shadow-purple-200/60",
			textColor: "text-[#0F172A]",
			descColor: "text-slate-700",
			pillClass: "bg-white text-[#6B21A8] border border-[#E9D5FF]",
			href: "/services/brand-strategy",
		},
		{
			icon: FlaskConical,
			title: "Product Formulation & Sampling",
			description:
				"We guide product formulation, ingredient logic, product format, sample planning and refinement based on your category.",
			points: [
				"Formula Direction",
				"Ingredient Strategy",
				"Sample Planning",
				"Product Format",
			],
			bgColor: "bg-[#E0F2FE] hover:bg-[#BAE6FD]",
			borderColor: "border-2 border-[#93C5FD] hover:border-[#60A5FA]",
			iconBg: "bg-white",
			iconColor: "text-[#1D4ED8]",
			glowColor: "shadow-blue-200/60",
			textColor: "text-[#0F172A]",
			descColor: "text-slate-700",
			pillClass: "bg-white text-[#1E40AF] border border-[#BFDBFE]",
			href: "/services/product-formulation",
		},
		{
			icon: Settings,
			title: "Manufacturing Support",
			description:
				"We help identify suitable manufacturers based on product category, MOQ, quality expectations, documentation and launch goals.",
			points: [
				"Manufacturer Match",
				"MOQ Planning",
				"Production Scope",
				"Cost Direction",
			],
			bgColor: "bg-[#D1FAE5] hover:bg-[#A7F3D0]",
			borderColor: "border-2 border-[#6EE7B7] hover:border-[#34D399]",
			iconBg: "bg-white",
			iconColor: "text-[#047857]",
			glowColor: "shadow-emerald-200/60",
			textColor: "text-[#0F172A]",
			descColor: "text-slate-700",
			pillClass: "bg-white text-[#065F46] border border-[#A7F3D0]",
			href: "/services/manufacturing-support",
		},
		{
			icon: Package,
			title: "Packaging & Labeling",
			description:
				"We plan packaging structure, label content, visual hierarchy, product claims and category-specific packaging direction.",
			points: [
				"Packaging Direction",
				"Label Content",
				"Product Claims",
				"Visual System",
			],
			bgColor: "bg-[#FFEDD5] hover:bg-[#FED7AA]",
			borderColor: "border-2 border-[#FDBA74] hover:border-[#FB923C]",
			iconBg: "bg-white",
			iconColor: "text-[#C2410C]",
			glowColor: "shadow-orange-200/60",
			textColor: "text-[#0F172A]",
			descColor: "text-slate-700",
			pillClass: "bg-white text-[#9A3412] border border-[#FED7AA]",
			href: "/packaging-and-labeling",
		},
		{
			icon: ShieldCheck,
			title: "Legal & Compliance Direction",
			description:
				"We support label, documentation, license and compliance planning based on the product category and marketplace requirements.",
			points: [
				"Label Guidance",
				"Documentation",
				"Category Compliance",
				"Marketplace Readiness",
			],
			bgColor: "bg-[#CCFBF1] hover:bg-[#99F6E4]",
			borderColor: "border-2 border-[#5EEAD4] hover:border-[#2DD4BF]",
			iconBg: "bg-white",
			iconColor: "text-[#0F766E]",
			glowColor: "shadow-teal-200/60",
			textColor: "text-[#0F172A]",
			descColor: "text-slate-700",
			pillClass: "bg-white text-[#115E59] border border-[#99F6E4]",
			href: "/legal-and-compliance",
		},
		{
			icon: Globe,
			title: "Website Development",
			description:
				"We build conversion-focused websites with SEO-ready content, clear product storytelling, lead capture and brand credibility.",
			points: [
				"SEO Website",
				"Landing Pages",
				"Lead Form",
				"Conversion Flow",
			],
			bgColor: "bg-[#E0E7FF] hover:bg-[#C7D2FE]",
			borderColor: "border-2 border-[#B4C6FC] hover:border-[#818CF8]",
			iconBg: "bg-white",
			iconColor: "text-[#4338CA]",
			glowColor: "shadow-indigo-200/60",
			textColor: "text-[#0F172A]",
			descColor: "text-slate-700",
			pillClass: "bg-white text-[#3730A3] border border-[#C7D2FE]",
			href: "/website-development",
		},
		{
			icon: ShoppingBag,
			title: "Marketplace Launch",
			description:
				"We prepare brands for Amazon, Flipkart, Nykaa, Tata 1mg and quick commerce with listing content and launch assets.",
			points: [
				"Amazon Listing",
				"Product Content",
				"A+ Direction",
				"Marketplace Assets",
			],
			bgColor: "bg-[#FCE7F3] hover:bg-[#FBCFE8]",
			borderColor: "border-2 border-[#F472B6] hover:border-[#EC4899]",
			iconBg: "bg-white",
			iconColor: "text-[#BE185D]",
			glowColor: "shadow-pink-200/60",
			textColor: "text-[#0F172A]",
			descColor: "text-slate-700",
			pillClass: "bg-white text-[#9D174D] border border-[#FBCFE8]",
			href: "/marketplace-launch",
		},
		{
			icon: Share2,
			title: "Social Media & Content",
			description:
				"We create content systems for brand awareness, founder education, product storytelling, category trust and launch campaigns.",
			points: ["Static Posts", "Carousels", "Reels", "Stories"],
			bgColor: "bg-[#CFFAFE] hover:bg-[#A5F3FC]",
			borderColor: "border-2 border-[#67E8F9] hover:border-[#22D3EE]",
			iconBg: "bg-white",
			iconColor: "text-[#0E7490]",
			glowColor: "shadow-cyan-200/60",
			textColor: "text-[#0F172A]",
			descColor: "text-slate-700",
			pillClass: "bg-white text-[#155E75] border border-[#AED9E0]",
			href: "/ai-growth-and-marketing",
		},
		{
			icon: TrendingUp,
			title: "Performance & Growth Marketing",
			description:
				"We plan growth campaigns across awareness, lead generation, remarketing, marketplace traffic and B2B distribution.",
			points: [
				"Meta Ads",
				"Lead Campaigns",
				"Retargeting",
				"B2B Growth",
			],
			bgColor: "bg-[#FEE2E2] hover:bg-[#FECACA]",
			borderColor: "border-2 border-[#FCA5A5] hover:border-[#F87171]",
			iconBg: "bg-white",
			iconColor: "text-[#C53030]",
			glowColor: "shadow-red-200/60",
			textColor: "text-[#0F172A]",
			descColor: "text-slate-700",
			pillClass: "bg-white text-[#9B2C2C] border border-[#FED7D7]",
			href: "/ai-growth-and-marketing",
		},
		{
			icon: Sparkles,
			title: "advanced Growth System",
			description:
				"We use advanced planning for content, launch strategy, sales scripts, automation, customer support and campaign direction.",
			points: [
				"AI Content",
				"Automation",
				"Sales Scripts",
				"Growth Planning",
			],
			bgColor: "bg-[#F5E8FF] hover:bg-[#F3E8FF]",
			borderColor: "border-2 border-[#F5D0FE] hover:border-[#E879F9]",
			iconBg: "bg-white",
			iconColor: "text-[#A21CAF]",
			glowColor: "shadow-fuchsia-200/60",
			textColor: "text-[#0F172A]",
			descColor: "text-slate-700",
			pillClass: "bg-white text-[#86198F] border border-[#F5D0FE]",
			href: "/ai-growth-and-marketing",
		},
	];

	// Category specific with solid opaque backgrounds and bold solid borders
	const categoryServices = [
		{
			title: "Perfume Brand Launch",
			description:
				"Fragrance direction, bottle planning, packaging, compliance, brand story, website and marketplace launch.",
			icon: Droplets,
			bgColor: "bg-[#E0F2FE] hover:bg-[#BAE6FD]",
			borderColor: "border-2 border-[#93C5FD] hover:border-[#0284C7]",
			iconColor: "text-sky-600 bg-white border border-sky-200",
			btnColor: "text-sky-700 hover:text-sky-800",
		},
		{
			title: "Ayurveda Brand Launch",
			description:
				"Ayurvedic product planning, formulation guidance, manufacturer support, label direction and marketplace readiness.",
			icon: Leaf,
			bgColor: "bg-[#D1FAE5] hover:bg-[#A7F3D0]",
			borderColor: "border-2 border-[#6EE7B7] hover:border-[#059669]",
			iconColor: "text-emerald-600 bg-white border border-emerald-200",
			btnColor: "text-emerald-700 hover:text-emerald-800",
		},
		{
			title: "Cosmetic Brand Launch",
			description:
				"Skincare and beauty brand launch support with product strategy, formulation, packaging, compliance and D2C growth.",
			icon: Sparkle,
			bgColor: "bg-[#FCE7F3] hover:bg-[#FBCFE8]",
			borderColor: "border-2 border-[#F472B6] hover:border-[#DB2777]",
			iconColor: "text-pink-600 bg-white border border-pink-200",
			btnColor: "text-pink-700 hover:text-pink-800",
		},
		{
			title: "Nutraceutical Brand Launch",
			description:
				"Supplement and wellness brand launch with formulation planning, taste direction, FSSAI guidance and growth strategy.",
			icon: ShieldCheck,
			bgColor: "bg-[#FEF3C7] hover:bg-[#FDE68A]",
			borderColor: "border-2 border-[#FCD34D] hover:border-[#D97706]",
			iconColor: "text-amber-600 bg-white border border-amber-200",
			btnColor: "text-amber-700 hover:text-amber-800",
		},
	];

	// How services connect with solid colors and bold solid borders
	const connectedServices = [
		{
			title: "Product Development",
			desc: "Formulation, sampling and manufacturer direction.",
			icon: FlaskConical,
			color: "from-orange-400 to-amber-500",
			bg: "bg-[#FFEBE5]",
			border: "border-2 border-orange-200 hover:border-orange-400",
		},
		{
			title: "Packaging & Compliance",
			desc: "Label guidance, documentation and marketplace readiness.",
			icon: Package,
			color: "from-amber-400 to-orange-500",
			bg: "bg-[#FFF2E0]",
			border: "border-2 border-amber-200 hover:border-amber-400",
		},
		{
			title: "Brand & Website",
			desc: "Naming, positioning, identity and conversion-focused website.",
			icon: Globe,
			color: "from-orange-500 to-red-400",
			bg: "bg-[#FDF2F8]",
			border: "border-2 border-pink-200 hover:border-pink-400",
		},
		{
			title: "Marketplace Launch",
			desc: "Amazon, Flipkart, Nykaa, Tata 1mg and quick commerce readiness.",
			icon: ShoppingBag,
			color: "from-red-400 to-orange-500",
			bg: "bg-[#EFF6FF]",
			border: "border-2 border-blue-200 hover:border-blue-400",
		},
		{
			title: "Growth System",
			desc: "Social media, ads, influencer, content and advanced automation.",
			icon: TrendingUp,
			color: "from-amber-500 to-red-400",
			bg: "bg-[#ECFDF5]",
			border: "border-2 border-emerald-200 hover:border-emerald-400",
		},
		{
			title: "AI Planning",
			desc: "Data-driven insights and intelligent planning for smarter decisions.",
			icon: Cpu,
			color: "from-orange-500 to-amber-500",
			bg: "bg-[#F5E8FF]",
			border: "border-2 border-purple-200 hover:border-purple-400",
		},
	];

	// Steps
	const processSteps = [
		{
			step: "01",
			title: "Understand Your Launch Stage",
			desc: "We identify your product idea, category, budget, timeline, target market and current business stage.",
		},
		{
			step: "02",
			title: "Create Your Launch Roadmap",
			desc: "We define the right services, priorities, timeline and execution path based on your brand goal.",
		},
		{
			step: "03",
			title: "Build Product & Brand Foundation",
			desc: "We support formulation, packaging, compliance direction, brand positioning and launch assets.",
		},
		{
			step: "04",
			title: "Prepare Digital & Marketplace Launch",
			desc: "We build the website, marketplace content, social media system and launch communication.",
		},
		{
			step: "05",
			title: "Activate Growth",
			desc: "We support campaigns, content, ads, influencer direction and advanced systems to scale your brand.",
		},
	];

	// Why Choose Us
	const whyChooseUs = [
		{
			title: "One Partner, Complete Launch",
			desc: "Avoid managing multiple scattered vendors and get one connected roadmap.",
		},
		{
			title: "Category-Specific Direction",
			desc: "Get guidance built for Perfume, Ayurveda, Cosmetics and Nutraceutical categories.",
		},
		{
			title: "Compliance-First Thinking",
			desc: "Plan labels, documentation and marketplace readiness from the beginning.",
		},
		{
			title: "Manufacturer & Formulation Support",
			desc: "Move from idea to sample and production direction with more clarity.",
		},
		{
			title: "Brand + Growth Together",
			desc: "Launch with positioning, website, marketplace, social media and marketing direction.",
		},
		{
			title: "advanced Execution",
			desc: "Use smarter planning, content systems and automation to move faster.",
		},
	];

	// FAQs
	const faqsList = [
		{
			q: "What services does LaunchVeda provide?",
			a: "LaunchVeda provides end-to-end product launch services including brand strategy, formulation direction, manufacturing support, packaging, compliance, website, marketplace launch, social media and growth marketing.",
		},
		{
			q: "Can LaunchVeda help me if I only have an idea?",
			a: "Yes. LaunchVeda helps early-stage founders convert ideas into structured launch roadmaps with product direction, category selection, positioning, compliance planning and go-to-market strategy.",
		},
		{
			q: "Does LaunchVeda provide manufacturing?",
			a: "LaunchVeda helps with manufacturer selection, sampling coordination and production direction. Final manufacturing depends on the selected manufacturing partner, category, MOQ and commercial terms.",
		},
		{
			q: "Which product categories does LaunchVeda support?",
			a: "LaunchVeda supports Perfume, Ayurveda, Cosmetics, Nutraceuticals and modern D2C product categories.",
		},
		{
			q: "Does LaunchVeda help with marketplace launch?",
			a: "Yes. LaunchVeda supports marketplace readiness for platforms like Amazon, Flipkart, Nykaa, Tata 1mg and quick commerce through listing content, product assets and launch planning.",
		},
		{
			q: "Does LaunchVeda handle marketing after launch?",
			a: "Yes. LaunchVeda supports social media, content planning, performance marketing direction, influencer planning and advanced growth systems.",
		},
	];

	return (
		<div className="bg-white text-slate-900 min-h-screen font-sans overflow-x-hidden selection:bg-indigo-500 selection:text-white relative">
			{/* Navigation Header Overlay */}
			<Navbar />

			{/* Interactive Pointer Tracker Background Glow */}
			<div
				className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-500"
				style={{
					background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.04), transparent 80%)`,
				}}
			/>

			{/* Floating Sparkles & Spawning Cursor Particles */}
			<div className="pointer-events-none fixed inset-0 z-40 overflow-hidden">
				<AnimatePresence>
					{trail.map((pt) => (
						<motion.div
							key={pt.id}
							initial={{
								opacity: 0.8,
								scale: 0.5,
								y: pt.y - 10,
								x: pt.x - 10,
							}}
							animate={{
								opacity: 0,
								scale: 2,
								y: pt.y + (Math.random() * 40 - 20),
								x: pt.x + (Math.random() * 40 - 20),
							}}
							exit={{ opacity: 0 }}
							transition={{
								duration: 1.2,
								ease: "easeOut",
							}}
							className="absolute w-5 h-5 rounded-full blur-[4px]"
							style={{
								background: pt.color,
								boxShadow: `0 0 10px ${pt.color}`,
							}}
						/>
					))}
				</AnimatePresence>
			</div>

			{/* Floating Multi-color particles pre-seeded across the viewport */}
			<div className="pointer-events-none absolute inset-0 overflow-hidden z-10 opacity-60">
				{[
					{
						color: "bg-purple-400",
						top: "12%",
						left: "8%",
						size: "w-2.5 h-2.5",
						dur: 14,
					},
					{
						color: "bg-indigo-400",
						top: "18%",
						left: "85%",
						size: "w-3 h-3",
						dur: 16,
					},
					{
						color: "bg-pink-400",
						top: "32%",
						left: "15%",
						size: "w-2 h-2",
						dur: 12,
					},
					{
						color: "bg-blue-400",
						top: "45%",
						left: "78%",
						size: "w-3 h-3",
						dur: 18,
					},
					{
						color: "bg-emerald-400",
						top: "58%",
						left: "5%",
						size: "w-2.5 h-2.5",
						dur: 15,
					},
					{
						color: "bg-amber-400",
						top: "68%",
						left: "92%",
						size: "w-3.5 h-3.5",
						dur: 20,
					},
					{
						color: "bg-cyan-400",
						top: "79%",
						left: "12%",
						size: "w-2 h-2",
						dur: 11,
					},
					{
						color: "bg-purple-400",
						top: "88%",
						left: "80%",
						size: "w-3 h-3",
						dur: 17,
					},
				].map((item, index) => (
					<motion.div
						key={index}
						animate={{
							y: [0, -40, 0],
							x: [0, 20, 0],
							opacity: [0.4, 0.9, 0.4],
						}}
						transition={{
							duration: item.dur,
							repeat: Infinity,
							ease: "easeInOut",
						}}
						className={`absolute ${item.size} ${item.color} rounded-full blur-[1px] shadow-[0_0_12px_currentColor]`}
						style={{ top: item.top, left: item.left }}
					/>
				))}
			</div>

			{/* SECTION 1: HERO SECTION - Clean White with Soft Multi-Glow Ambient Halo */}
			<section className="relative pt-36 pb-24 max-sm:pb-8 sm:pt-44 sm:pb-32 px-6 w-full overflow-hidden bg-white border-b border-slate-100">
				{/* Soft Multi-Glow Background Halos */}
				<div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
					<div className="absolute -top-[10%] left-[20%] w-[500px] h-[500px] bg-purple-200/20 rounded-full blur-[120px]" />
					<div className="absolute top-[20%] right-[10%] w-[600px] h-[600px] bg-sky-200/20 rounded-full blur-[130px]" />
				</div>

				<motion.div
					initial="hidden"
					animate="visible"
					variants={staggerContainer}
					className="max-w-[1320px] mx-auto text-center flex flex-col items-center relative z-10"
				>
					{/* Label Badge */}
					<motion.div variants={fadeUp} className="mb-6">
						<span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 shadow-sm text-[11px] font-black uppercase tracking-widest text-slate-800">
							<Sparkles className="w-3.5 h-3.5 animate-pulse text-indigo-600" />
							LAUNCHVEDA SERVICES
						</span>
					</motion.div>

					{/* H1 Heading */}
					<motion.h1
						variants={fadeUp}
						className="text-4xl sm:text-6xl lg:text-7.5xl font-black tracking-tight text-slate-900 mb-6 leading-[1.08] max-w-5xl"
					>
						Everything Your Brand{" "}
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 drop-shadow-sm">
							Needs to Launch
						</span>
						.
					</motion.h1>

					{/* Subheading */}
					<motion.p
						variants={fadeUp}
						className="text-slate-600 text-lg sm:text-xl leading-relaxed max-w-3xl mb-12 font-semibold"
					>
						From category selection and formulation to
						branding, packaging, compliance, marketplace
						launch, marketing and advanced growth —
						LaunchVeda brings the complete product launch
						stack together for founders.
					</motion.p>

					{/* CTA Buttons */}
					<motion.div
						variants={fadeUp}
						className="flex flex-col sm:flex-row items-center gap-4 mb-16 max-sm:mb-4 w-full sm:w-auto"
					>
						<Link
							href="/contact"
							className="w-full sm:w-auto inline-flex items-center justify-center h-[56px] px-9 rounded-full font-black text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 hover:opacity-95 transition-all shadow-[0_10px_35px_rgba(99,102,241,0.25)] hover:shadow-[0_10px_45px_rgba(219,39,119,0.35)] hover:-translate-y-0.5 text-base"
						>
							Build My Launch Roadmap
							<ArrowRight className="w-5 h-5 ml-2.5 text-white" />
						</Link>
						<Link
							href="/process"
							className="w-full sm:w-auto inline-flex items-center justify-center h-[56px] px-9 rounded-full font-bold text-slate-700 bg-white border border-slate-200/80 hover:bg-slate-50 hover:border-slate-300 shadow-sm hover:shadow transition-all text-base"
						>
							Explore Our Process
						</Link>
					</motion.div>

					{/* Hero Pills */}
					<motion.div
						variants={fadeUp}
						className="flex flex-wrap justify-center gap-3 max-w-4xl max-sm:hidden"
					>
						{[
							"Brand Strategy",
							"Product Formulation",
							"Manufacturing Support",
							"Compliance Ready",
							"Marketplace Growth",
							"advanced Launch",
						].map((pill, idx) => (
							<span
								key={idx}
								className="inline-flex items-center gap-1.5 px-4.5 py-2.5 rounded-full bg-white border border-slate-200/80 text-xs sm:text-sm font-bold text-slate-700 shadow-sm hover:border-indigo-400 hover:text-indigo-600 transition-all cursor-default"
							>
								<span className="w-2.5 h-2.5 rounded-full bg-indigo-500" />
								{pill}
							</span>
						))}
					</motion.div>
				</motion.div>
			</section>

			{/* SECTION 2: DIRECT ANSWER - Pure White Background */}
			<section className="max-sm:py-8 py-20 px-6 w-full relative overflow-hidden bg-white border-b border-slate-100">
				<div className="max-w-[1320px] mx-auto relative z-10">
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-100px" }}
						variants={scaleIn}
						className="bg-white border border-slate-200/80 p-8 sm:p-14 rounded-3xl shadow-[0_15px_50px_rgba(0,0,0,0.03)] relative overflow-hidden"
					>
						{/* Soft decorative background element */}
						<div className="absolute -top-12 -right-12 w-36 h-36 bg-indigo-100/50 rounded-full blur-2xl pointer-events-none" />

						<div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
							<div className="lg:col-span-8">
								<span className="inline-flex items-center gap-1.5 text-xs font-black tracking-widest uppercase text-indigo-600 bg-indigo-50 px-3 py-1.5 rounded-md mb-4 border border-indigo-100">
									<span className="w-2 h-2 rounded-full bg-indigo-500 animate-ping" />
									DIRECT ANSWER
								</span>
								<GsapTextReveal as="h2" variant="heading" className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">What Services Does LaunchVeda
									Provide?</GsapTextReveal>
								<GsapTextReveal as="p" variant="subheading" className="text-slate-700 text-base sm:text-lg leading-relaxed font-semibold">LaunchVeda provides end-to-end
									product launch services for
									founders who want to build Perfume,
									Ayurveda, Cosmetics, Nutraceuticals
									and modern D2C brands. We help with
									product direction, formulation
									planning, manufacturer
									coordination, packaging,
									compliance, branding, website,
									marketplace readiness, social media
									and growth execution.</GsapTextReveal>
							</div>
							<div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4">
								{[
									"Idea to Launch Roadmap",
									"Category-Specific Guidance",
									"Marketplace-Ready Deliverables",
								].map((pill, idx) => (
									<div
										key={idx}
										className="flex items-center gap-3.5 px-5 py-4 rounded-xl bg-white border border-slate-200/80 hover:border-indigo-400 hover:bg-indigo-50/30 transition-all w-full shadow-sm"
									>
										<div className="w-9 h-9 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0 border border-indigo-100">
											<CheckCircle2 className="w-5 h-5 text-indigo-500" />
										</div>
										<span className="font-extrabold text-sm text-slate-800">
											{pill}
										</span>
									</div>
								))}
							</div>
						</div>
					</motion.div>
				</div>
			</section>

			{/* SECTION 3: COMPLETE LAUNCH STACK - White background */}
			<section
				id="services-grid"
				className="py-24 max-sm:py-8 px-6 w-full relative overflow-hidden bg-white border-b border-slate-100"
			>
				<div className="max-w-[1320px] mx-auto relative z-10">
					<div className="text-center mb-20">
						<span className="inline-flex items-center gap-1.5 text-xs font-black tracking-widest uppercase text-indigo-600 bg-indigo-50 px-4.5 py-2 rounded-full mb-4 border border-indigo-100">
							CORE CAPABILITIES
						</span>
						<GsapTextReveal as="h2" variant="heading" className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 mb-4">Our Complete <br />{" "}
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 mt-1">
								Launch Stack
							</span></GsapTextReveal>
						<GsapTextReveal as="p" variant="subheading" className="text-slate-600 text-lg max-w-2xl mx-auto font-semibold">Every service is designed to remove confusion
							and connect your product, brand and growth
							journey into one clear roadmap.</GsapTextReveal>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{coreServices.map((srv, idx) => {
							return (
								<motion.div
									key={idx}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{
										once: true,
										margin: "-100px",
									}}
									transition={{
										duration: 0.5,
										delay: idx * 0.05,
									}}
									className={`group border ${srv.borderColor} rounded-2xl p-6.5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_30px_rgba(0,0,0,0.04)] flex flex-col justify-between`}
								>
									<div>
										{/* Glowing Accent Icon container */}
										<div className="mb-6.5">
											<IconWrapper
												icon={srv.icon}
												colorClass={
													srv.iconColor
												}
												bgClass={srv.iconBg}
												shadowClass={
													srv.glowColor
												}
												delay={idx * 0.2}
											/>
										</div>
										<h3
											className={`text-xl font-black ${srv.textColor} mb-3.5`}
										>
											{srv.title}
										</h3>
										<p
											className={`${srv.descColor} text-sm leading-relaxed mb-4 font-medium`}
										>
											{srv.description}
										</p>
										{srv.href && (
											<a
												href={srv.href}
												className="inline-flex items-center gap-1 text-xs font-black text-indigo-700 hover:text-indigo-900 transition-colors mb-6 group/btn"
											>
												Learn More{" "}
												<ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
											</a>
										)}
									</div>

									<div className="mt-auto">
										<div className="border-t border-slate-200/60 pt-5">
											<span className="text-[10px] tracking-wider uppercase text-slate-500 font-extrabold mb-3 block">
												KEY DELIVERABLES
											</span>
											<div className="flex flex-wrap gap-2">
												{srv.points.map(
													(pt, pIdx) => (
														<span
															key={
																pIdx
															}
															className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${srv.pillClass}`}
														>
															{pt}
														</span>
													),
												)}
											</div>
										</div>
									</div>
								</motion.div>
							);
						})}
					</div>
				</div>
			</section>

			{/* SECTION 4: CATEGORY-SPECIFIC SERVICES - Product focused, Pure White Background */}
			<section className="py-24 max-sm:py-8 w-full relative overflow-hidden bg-white border-b border-slate-100">
				<div className="max-w-[1320px] mx-auto px-6 relative z-10">
					<div className="text-center mb-20">
						<span className="inline-flex items-center gap-1.5 text-xs font-black tracking-widest uppercase text-pink-600 bg-pink-50 px-4.5 py-2 rounded-full mb-4 border border-pink-100">
							SPECIALIZED PATHWAYS
						</span>
						<GsapTextReveal as="h2" variant="heading" className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 mb-4">Built for High-Growth Product Categories</GsapTextReveal>
						<GsapTextReveal as="p" variant="subheading" className="text-slate-600 text-lg max-w-3xl mx-auto font-semibold">LaunchVeda is designed for founders building
							product brands in categories where
							formulation, packaging, compliance and trust
							matter from day one.</GsapTextReveal>
					</div>

					<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
						{categoryServices.map((cat, idx) => {
							const IconComponent = cat.icon;
							return (
								<div
									key={idx}
									className={`group relative rounded-2xl border ${cat.borderColor} p-6.5 transition-all duration-300 hover:shadow-md flex flex-col justify-between shadow-sm`}
								>
									<div>
										{/* Glowing Accent Icon container */}
										<div
											className={`w-11 h-11 rounded-xl flex items-center justify-center mb-6.5 ${cat.iconColor}`}
										>
											<IconComponent className="w-6 h-6" />
										</div>
										<h3 className="text-lg font-extrabold text-slate-900 mb-3">
											{cat.title}
										</h3>
										<GsapTextReveal as="p" variant="subheading" className="text-slate-600 text-sm leading-relaxed mb-8 font-medium">{cat.description}</GsapTextReveal>
									</div>

									<Link
										href="/contact"
										className={`inline-flex items-center text-xs font-extrabold ${cat.btnColor} mt-4 group`}
									>
										Launch this category
										<ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
									</Link>
								</div>
							);
						})}
					</div>
				</div>
			</section>

			{/* SECTION 5: ONE SYSTEM. EVERY SERVICE CONNECTED. - White Background */}
			<section className="py-24 max-sm:py-8 px-6 w-full relative overflow-hidden bg-white border-b border-slate-100">
				<div className="max-w-[1320px] mx-auto relative z-10">
					<div className="text-center mb-20">
						<span className="inline-flex items-center gap-1.5 text-xs font-black tracking-widest uppercase text-amber-600 bg-[#FFF3E8] px-4.5 py-2 rounded-full mb-4 border border-amber-200">
							INTEGRATED SYSTEM
						</span>
						<GsapTextReveal as="h2" variant="heading" className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 mb-4">One System. Every Service Connected.</GsapTextReveal>
						<GsapTextReveal as="p" variant="subheading" className="text-slate-600 text-lg max-w-3xl mx-auto font-semibold">LaunchVeda is not a collection of separate
							services. It is a connected launch system
							where product, compliance, brand, website,
							marketplace and growth work together.</GsapTextReveal>
					</div>

					<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 relative">
						{/* Soft decorative line linking bento cards */}
						<div className="hidden lg:block absolute inset-x-0 top-1/2 h-0.5 bg-gradient-to-r from-transparent via-amber-200 to-transparent -z-10" />

						{connectedServices.map((item, idx) => {
							const ConnectedIcon = item.icon;
							const textColor = item.border.replace(
								"border-",
								"text-",
							);

							return (
								<div
									key={idx}
									className={`border ${item.border} p-7.5 rounded-2xl shadow-sm relative overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-1`}
								>
									{/* <div className={`absolute top-0 left-0 w-1.5 h-full ${item.bg}`} /> */}

									<div className="flex justify-between items-start mb-4">
										<span
											className={`${textColor} font-mono text-xs font-black uppercase tracking-widest`}
										>
											Module {idx + 1}
										</span>

										<ConnectedIcon
											className={`w-5.5 h-5.5 ${textColor}`}
										/>
									</div>

									<h3 className="text-xl font-extrabold text-slate-900 mb-3">
										{item.title}
									</h3>

									<GsapTextReveal as="p" variant="subheading" className="text-slate-700 text-sm leading-relaxed font-semibold">{item.desc}</GsapTextReveal>
								</div>
							);
						})}
					</div>
				</div>
			</section>

			{/* SECTION 6: HOW WE DELIVER SERVICES - Pure White Background */}
			<section className="py-24 max-sm:py-8 w-full relative overflow-hidden bg-white border-b border-slate-100">
				<div className="max-w-[1320px] mx-auto px-6 relative z-10">
					<div className="text-center mb-20">
						<span className="inline-flex items-center gap-1.5 text-xs font-black tracking-widest uppercase text-cyan-600 bg-cyan-50 px-4.5 py-2 rounded-full mb-4 border border-cyan-100">
							METHODOLOGY
						</span>
						<GsapTextReveal as="h2" variant="heading" className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 mb-4">How We Deliver Services</GsapTextReveal>
						<GsapTextReveal as="p" variant="subheading" className="text-slate-600 text-lg max-w-2xl mx-auto font-semibold">Our structured step-by-step methodology
							ensures zero confusion from mapping your idea
							to scaling campaigns.</GsapTextReveal>
					</div>

					<div className="relative max-w-5xl mx-auto">
						{/* Center timeline */}
						<div className="absolute left-[15px] md:left-1/2 top-5 bottom-5 w-0.5 -translate-x-1/2 bg-gradient-to-b from-blue-700 via-blue-500 to-blue-200" />

						<div className="space-y-14">
							{processSteps.map((step, idx) => {
								const isEven = idx % 2 === 0;

								return (
									<div
										key={idx}
										className={`flex flex-col md:flex-row items-start md:items-center gap-8 relative ${
											isEven
												? "md:flex-row-reverse"
												: ""
										}`}
									>
										{/* Number */}
										<div className="absolute left-[13px] md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white border-2 border-blue-600 flex items-center justify-center font-black text-sm text-blue-700 shadow-[0_0_18px_rgba(37,99,235,0.15)] z-10 mt-3">
											{step.step}
										</div>

										{/* Content */}
										<div className="w-full md:w-1/2 pl-14 md:pl-0 md:px-8">
											<div className="bg-white border border-slate-200 p-6.5 rounded-2xl shadow-sm transition-all duration-300 hover:border-blue-300 hover:shadow-[0_10px_30px_rgba(37,99,235,0.08)]">
												<span className="font-mono text-xs font-black text-blue-600 uppercase tracking-widest block mb-2">
													Phase{" "}
													{step.step}
												</span>

												<h3 className="text-xl font-extrabold text-slate-900 mb-2.5">
													{step.title}
												</h3>

												<GsapTextReveal as="p" variant="subheading" className="text-slate-600 text-sm leading-relaxed font-semibold">{step.desc}</GsapTextReveal>
											</div>
										</div>

										{/* Spacer */}
										<div className="hidden md:block w-1/2" />
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</section>

			{/* SECTION 7: WHY CHOOSE LAUNCHVEDA SERVICES - Pure White Background */}
			<section className="py-24 px-6 w-full relative overflow-hidden bg-white border-b border-slate-100">
				<div className="max-w-[1320px] mx-auto relative z-10">
					<div className="text-center mb-20">
						<span className="inline-flex items-center gap-1.5 text-xs font-black tracking-widest uppercase text-emerald-600 bg-[#ECFFF5] px-4.5 py-2 rounded-full mb-4 border border-emerald-200">
							THE LAUNCHVEDA ADVANTAGE
						</span>
						<GsapTextReveal as="h2" variant="heading" className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 mb-4">Why Founders Choose LaunchVeda</GsapTextReveal>
					</div>

					<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
						{whyChooseUs.map((card, idx) => (
							<div
								key={idx}
								className="bg-white border border-slate-200 p-7 hover:border-emerald-400 transition-all duration-300 hover:bg-[#F9FFFC] flex flex-col justify-between rounded-2xl shadow-sm hover:shadow-[0_12px_25px_rgba(16,185,129,0.05)] hover:-translate-y-1"
							>
								<div>
									<div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 mb-5 border border-emerald-100">
										<CheckCircle2 className="w-5.5 h-5.5 text-emerald-500" />
									</div>
									<h3 className="text-lg font-bold text-slate-900 mb-3">
										{card.title}
									</h3>
									<GsapTextReveal as="p" variant="subheading" className="text-slate-600 text-sm leading-relaxed font-semibold">{card.desc}</GsapTextReveal>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* SECTION 8: FAQ - Pure White Background */}
			<section className="py-24 max-sm:py-8 w-full relative overflow-hidden bg-white border-b border-slate-100">
				<div className="max-w-[850px] mx-auto px-6 relative z-10">
					<div className="text-center mb-16">
						<span className="inline-flex items-center gap-1.5 text-xs font-black tracking-widest uppercase text-indigo-600 bg-[#F7F8FF] px-4.5 py-2 rounded-full mb-4 border border-indigo-100">
							QUESTIONS & ANSWERS
						</span>
						<GsapTextReveal as="h2" variant="heading" className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 mb-4">LaunchVeda Services — FAQs</GsapTextReveal>
						<GsapTextReveal as="p" variant="subheading" className="text-slate-600 text-base font-semibold">Find answers to the most common questions
							about working with our launch stack.</GsapTextReveal>
					</div>

					<div className="space-y-4">
						{faqsList.map((faq, idx) => {
							const isOpen = activeFaq === idx;
							return (
								<div
									key={idx}
									className="bg-white border border-slate-200 rounded-xl overflow-hidden transition-all duration-300 hover:border-indigo-400 shadow-sm"
								>
									<div
										style={{ display: "none" }}
										className="faq-seo-metadata"
										data-question={faq.q}
										data-answer={faq.a}
									/>
									<button
										onClick={() => toggleFaq(idx)}
										className="w-full flex items-center justify-between p-5.5 text-left font-black text-slate-800 hover:text-slate-900 transition-colors"
									>
										<span className="text-base sm:text-lg pr-4">
											{faq.q}
										</span>
										<ChevronDown
											className={`w-5.5 h-5.5 text-slate-400 transition-transform flex-shrink-0 ${
												isOpen
													? "rotate-180 text-indigo-500"
													: ""
											}`}
										/>
									</button>

									<AnimatePresence initial={false}>
										{isOpen && (
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
												transition={{
													duration: 0.2,
												}}
											>
												<div className="p-5.5 pt-0 border-t border-slate-100 text-slate-600 text-sm sm:text-base leading-relaxed font-semibold">
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

			{/* SECTION 9: FINAL CTA - Multi-color premium gradient overlay card (white text) */}
			<section className="py-24 px-6 w-full bg-white">
				<div className="max-w-[1320px] mx-auto">
					<div className="relative rounded-3xl p-[2px] bg-gradient-to-r from-[#FFA07A] via-[#8B5CF6] to-[#3B82F6] shadow-[0_25px_60px_rgba(139,92,246,0.12)]">
						<div className="relative rounded-[22px] bg-white p-8 sm:p-20 text-center overflow-hidden">
							{/* Optional subtle grid */}
							<div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

							<div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
								<GsapTextReveal as="h2" variant="heading" className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 mb-6 leading-tight">Ready to Build Your Launch Stack?</GsapTextReveal>

								<GsapTextReveal as="p" variant="subheading" className="text-slate-600 text-base sm:text-xl mb-10 leading-relaxed font-semibold max-w-2xl">Share your product idea and
									LaunchVeda will help you understand
									which services you need to move
									from idea to a market-ready brand.</GsapTextReveal>

								<Link
									href="/contact"
									className="inline-flex items-center justify-center h-[58px] px-10 rounded-full font-black text-white bg-gradient-to-r from-blue-800 via-blue-700 to-blue-600 hover:shadow-[0_12px_30px_rgba(139,92,246,0.35)] transition-all duration-300 hover:-translate-y-0.5 text-base mb-8 max-sm:text-sm max-sm:px-4"
								>
									Build My Launch Roadmap
									<ArrowRight className="w-5 h-5 ml-2.5" />
								</Link>

								<p className="text-slate-500 text-xs sm:text-sm font-black tracking-widest uppercase">
									Free roadmap review <br />
									Category-specific guidance <br />{" "}
									No launch confusion
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* FOOTER */}
			<LaunchFooterSection />
		</div>
	);
}
