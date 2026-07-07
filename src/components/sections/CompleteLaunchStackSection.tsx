"use client";

import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useRouter } from "next/navigation";
import {
	ArrowRight,
	FlaskConical,
	Package,
	ShoppingCart,
	TrendingUp,
	Check,
	Award,
	Sparkles,
	Rocket,
} from "lucide-react";
import GsapTextReveal from "../ui/GsapTextReveal";

// Interface for Card Details
interface ServiceCard {
	id: string;
	number: string;
	category: string;
	title: string;
	description: string;
	bullets: string[];
	ctaText: string;
	gridSpan: string;
	heightClass: string;
	colorMood: string; // teal, aqua, amber, blue, pink, mint
	iconGradient: string;
	glowColor: string; // Shadow glow color on hover
	bulletColor: string; // Color for bullet check icon background
	icon: React.ComponentType<any>;
	image: string; // Placeholder paths
	fallbackGradient: string; // Gradient when image is loading / missing
	initialX: number; // For directional staggered reveals
	initialY: number; // For directional staggered reveals
}

interface CardProps {
	card: ServiceCard;
	isDesktop: boolean;
	sMouseX: any;
	sMouseY: any;
	index: number;
	onCardClick: () => void;
}

// Reusable Service Card Component
const ServiceCardComponent: React.FC<CardProps> = ({
	card,
	isDesktop,
	sMouseX,
	sMouseY,
	index,
	onCardClick,
}) => {
	// Parallax transforms based on current mouse coordinates
	const imageX = useTransform(
		sMouseX,
		[-0.5, 0.5],
		isDesktop ? [-8, 8] : [0, 0],
	);
	const imageY = useTransform(
		sMouseY,
		[-0.5, 0.5],
		isDesktop ? [-8, 8] : [0, 0],
	);

	const [imgError, setImgError] = React.useState(false);

	return (
		<motion.div
			variants={{
				hidden: {
					opacity: 0,
					x: card.initialX,
					y: card.initialY,
					scale: 0.965,
				},
				visible: {
					opacity: 1,
					x: 0,
					y: 0,
					scale: 1,
					transition: {
						duration: 0.85,
						ease: [0.22, 1, 0.36, 1],
						delay: index * 0.1,
					},
				},
			}}
			onClick={onCardClick}
			className={`${card.gridSpan} ${card.heightClass} group relative overflow-hidden rounded-[28px] border border-white/50 shadow-[0_24px_70px_rgba(20,48,86,0.16)] flex flex-col justify-between transition-all duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2 hover:scale-[1.012] hover:border-white/80 hover:shadow-[0_32px_80px_rgba(5,13,30,0.32)] cursor-pointer`}
		>
			{/* 1. Background Image Slots */}
			{/* Fallback Gradient Base */}
			<div
				className="absolute inset-0 z-0"
				style={{
					background: card.fallbackGradient,
				}}
			/>

			{/* Actual Image layer (Fits perfectly without borders) */}
			{!imgError && (
				<img
					src={card.image}
					alt={card.title}
					width={900}
					height={620}
					loading="lazy"
					decoding="async"
					onError={() => setImgError(true)}
					className="absolute inset-0 z-[1] w-full h-full object-cover"
				/>
			)}

			{/* Elegant category-specific fallback vector overlay graphics that display if image failed */}
			{imgError && (
				<div className="absolute inset-0 z-[1] flex items-center justify-center opacity-40 pointer-events-none overflow-hidden">
					{card.id === "card-01" && (
						<svg
							className="w-4/5 h-4/5 text-blue-400"
							viewBox="0 0 200 200"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<circle
								cx="100"
								cy="100"
								r="75"
								stroke="currentColor"
								strokeWidth="1"
								strokeDasharray="6 6"
							/>
							<circle
								cx="100"
								cy="100"
								r="50"
								stroke="currentColor"
								strokeWidth="2"
							/>
							<path
								d="M100 15 V185 M15 100 H185"
								stroke="currentColor"
								strokeWidth="0.5"
								strokeDasharray="3 3"
							/>
							<circle
								cx="100"
								cy="100"
								r="6"
								fill="currentColor"
							/>
							<path
								d="M45 45 L155 155 M45 155 L155 45"
								stroke="currentColor"
								strokeWidth="0.5"
								strokeDasharray="3 3"
							/>
						</svg>
					)}
					{card.id === "card-02" && (
						<svg
							className="w-4/5 h-4/5 text-teal-400"
							viewBox="0 0 200 200"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M80 40 H120 M100 40 V80 L60 150 H140 L100 80"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<circle
								cx="100"
								cy="115"
								r="8"
								stroke="currentColor"
								strokeWidth="1.5"
							/>
							<circle
								cx="85"
								cy="135"
								r="5"
								stroke="currentColor"
								strokeWidth="1.5"
							/>
							<circle
								cx="115"
								cy="130"
								r="6"
								stroke="currentColor"
								strokeWidth="1.5"
							/>
							<path
								d="M70 135 C80 125, 120 125, 130 135"
								stroke="currentColor"
								strokeWidth="1"
								strokeDasharray="3 3"
							/>
						</svg>
					)}
					{card.id === "card-03" && (
						<svg
							className="w-4/5 h-4/5 text-orange-400"
							viewBox="0 0 200 200"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M100 35 L165 65 L100 95 L35 65 Z"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinejoin="round"
							/>
							<path
								d="M35 65 V135 L100 165 V95"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinejoin="round"
							/>
							<path
								d="M165 65 V135 L100 165"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinejoin="round"
							/>
							<path
								d="M65 115 L100 130 L135 115"
								stroke="currentColor"
								strokeWidth="1"
								strokeDasharray="2 2"
							/>
						</svg>
					)}
					{card.id === "card-04" && (
						<svg
							className="w-4/5 h-4/5 text-indigo-400"
							viewBox="0 0 200 200"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<rect
								x="40"
								y="40"
								width="120"
								height="120"
								rx="16"
								stroke="currentColor"
								strokeWidth="2"
							/>
							<path
								d="M40 75 H160 M75 40 V160"
								stroke="currentColor"
								strokeWidth="1.5"
								strokeDasharray="4 4"
							/>
							<circle
								cx="100"
								cy="115"
								r="22"
								stroke="currentColor"
								strokeWidth="2"
							/>
						</svg>
					)}
					{card.id === "card-05" && (
						<svg
							className="w-4/5 h-4/5 text-pink-400"
							viewBox="0 0 200 200"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M35 155 L75 115 L110 135 L165 65"
								stroke="currentColor"
								strokeWidth="2.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M130 65 H165 V100"
								stroke="currentColor"
								strokeWidth="2.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<circle
								cx="75"
								cy="115"
								r="4"
								fill="currentColor"
							/>
							<circle
								cx="110"
								cy="135"
								r="4"
								fill="currentColor"
							/>
							<circle
								cx="165"
								cy="65"
								r="4"
								fill="currentColor"
							/>
						</svg>
					)}
					{card.id === "card-06" && (
						<svg
							className="w-4/5 h-4/5 text-emerald-400"
							viewBox="0 0 200 200"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M100 35 L165 145 H35 Z"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinejoin="round"
							/>
							<path
								d="M100 60 L145 135 H55 Z"
								stroke="currentColor"
								strokeWidth="1.5"
								strokeDasharray="4 4"
							/>
							<circle
								cx="100"
								cy="105"
								r="14"
								stroke="currentColor"
								strokeWidth="2.5"
							/>
						</svg>
					)}
				</div>
			)}

			{/* 2. Premium Dark Overlay Layers Removed for 100% Clear Visibility */}

			{/* SEO/AEO/GEO & Accessibility semantic content wrapper */}
			<div className="sr-only">
				<span>{card.number}</span>
				<span>{card.category}</span>
				<h3>{card.title}</h3>
				<p>{card.description}</p>
				<ul>
					{card.bullets.map((bullet, idx) => (
						<li key={idx}>{bullet}</li>
					))}
				</ul>
			</div>

			{/* 3. Re-rendered Real Content Layer */}
			<div className="relative z-10 p-6 sm:p-8 flex flex-col justify-end h-full text-left">
				{/* Lower portion: Launcher arrow */}
				<div className="flex justify-end items-center pt-2">
					{/* Visual Arrow indicator launcher */}
					<div
						style={{
							backgroundImage: card.iconGradient,
						}}
						className="w-10 h-10 rounded-full flex items-center justify-center text-white shadow-md transform group-hover:translate-x-1.5 group-hover:scale-105 transition-all duration-300"
					>
						<ArrowRight className="w-4.5 h-4.5 stroke-[2.5]" />
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export const CompleteLaunchStackSection: React.FC = () => {
	const router = useRouter();
	// Cursor coordinate tracking for parallax
	const mouseX = useMotionValue(0);
	const mouseY = useMotionValue(0);

	// Soft elastic spring smoothing
	const springConfig = { damping: 28, stiffness: 160 };
	const sMouseX = useSpring(mouseX, springConfig);
	const sMouseY = useSpring(mouseY, springConfig);

	// Track desktop screen states
	const [isDesktop, setIsDesktop] = React.useState(false);
	const gridBoundsRef = React.useRef<DOMRect | null>(null);

	React.useEffect(() => {
		const checkViewport = () => setIsDesktop(window.innerWidth >= 1280);
		checkViewport();
		window.addEventListener("resize", checkViewport);
		return () => window.removeEventListener("resize", checkViewport);
	}, []);

	const updateGridBounds = (target: HTMLElement) => {
		gridBoundsRef.current = target.getBoundingClientRect();
	};

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		if (!isDesktop) return;
		const { clientX, clientY, currentTarget } = e;
		const bounds = gridBoundsRef.current;
		if (!bounds) {
			updateGridBounds(currentTarget);
			return;
		}
		const { left, top, width, height } = bounds;

		// Convert to -0.5 to 0.5 grid coordinate offsets
		const xVal = (clientX - left) / width - 0.5;
		const yVal = (clientY - top) / height - 0.5;

		mouseX.set(xVal);
		mouseY.set(yVal);
	};

	const handleMouseLeave = () => {
		gridBoundsRef.current = null;
		mouseX.set(0);
		mouseY.set(0);
	};

	// Static arrays containing exact custom details of launch stack
	const cards: ServiceCard[] = [
		{
			id: "card-01",
			number: "01",
			category: "STRATEGY",
			title: "Brand Naming &\nPositioning",
			description:
				"Define a distinctive name, sharp positioning, product range, and brand story before you enter the market.",
			bullets: [
				"Naming",
				"Positioning",
				"Brand Architecture",
				"Visual Identity",
			],
			ctaText: "Launch Path 01",
			gridSpan: "col-span-12 md:col-span-12 xl:col-span-5",
			heightClass: "xl:h-[430px] md:h-[430px] h-[480px]",
			colorMood: "teal",
			iconGradient: "linear-gradient(135deg, #60A5FA, #7C3AED)",
			glowColor: "#60A5FA",
			bulletColor: "bg-blue-400",
			icon: Award,
			image: "/brand-naming-1.webp",
			fallbackGradient:
				"linear-gradient(135deg, #091322 0%, #030812 100%)",
			initialX: -30,
			initialY: 0,
		},
		{
			id: "card-02",
			number: "02",
			category: "PRODUCT",
			title: "Formulation &\nSampling",
			description:
				"Build your product direction with formulation guidance, sample coordination, texture alignment, and quality checks.",
			bullets: [
				"Product Formulation",
				"Active Research",
				"Sampling",
				"Quality Alignment",
			],
			ctaText: "Launch Path 02",
			gridSpan: "col-span-12 md:col-span-6 xl:col-span-3",
			heightClass: "xl:h-[430px] md:h-[430px] h-[480px]",
			colorMood: "aqua",
			iconGradient: "linear-gradient(135deg, #2DD4BF, #22C55E)",
			glowColor: "#2DD4BF",
			bulletColor: "bg-teal-400",
			icon: FlaskConical,
			image: "/formulation-2.webp",
			fallbackGradient:
				"linear-gradient(135deg, #051614 0%, #010a09 100%)",
			initialX: 0,
			initialY: 46,
		},
		{
			id: "card-03",
			number: "03",
			category: "COMPLIANCE",
			title: "Packaging &\nCompliance",
			description:
				"Prepare packaging, labeling, documents, certification guidance, and claim-safe communication for launch readiness.",
			bullets: [
				"Packaging Design",
				"Label Planning",
				"Documentation",
				"Certification",
			],
			ctaText: "Launch Path 03",
			gridSpan: "col-span-12 md:col-span-6 xl:col-span-4",
			heightClass: "xl:h-[430px] md:h-[430px] h-[480px]",
			colorMood: "amber",
			iconGradient: "linear-gradient(135deg, #FB923C, #F97316)",
			glowColor: "#FB923C",
			bulletColor: "bg-orange-400",
			icon: Package,
			image: "/packaging-3.webp",
			fallbackGradient:
				"linear-gradient(135deg, #211309 0%, #0a0603 100%)",
			initialX: 30,
			initialY: 0,
		},
		{
			id: "card-04",
			number: "04",
			category: "LAUNCH",
			title: "Website &\nMarketplace Launch",
			description:
				"Create your digital brand presence with website development, product pages, marketplace setup, and listing assets.",
			bullets: [
				"Brand Website",
				"Marketplace Setup",
				"Product Listings",
				"Store Optimization",
			],
			ctaText: "Launch Path 04",
			gridSpan: "col-span-12 md:col-span-6 xl:col-span-4",
			heightClass: "xl:h-[360px] md:h-[360px] h-[480px]",
			colorMood: "blue",
			iconGradient: "linear-gradient(135deg, #6366F1, #3B82F6)",
			glowColor: "#6366F1",
			bulletColor: "bg-indigo-400",
			icon: ShoppingCart,
			image: "/marketplace.webp",
			fallbackGradient:
				"linear-gradient(135deg, #070e24 0%, #02050c 100%)",
			initialX: -24,
			initialY: 0,
		},
		{
			id: "card-05",
			number: "05",
			category: "GROWTH",
			title: "Performance Marketing &\nInfluencer Growth",
			description:
				"Plan content, ads, influencer campaigns, and growth experiments that help your launch reach the right audience.",
			bullets: [
				"Paid Ads",
				"Creative Testing",
				"Influencer Briefs",
				"ROAS Optimization",
			],
			ctaText: "Launch Path 05",
			gridSpan: "col-span-12 md:col-span-6 xl:col-span-3",
			heightClass: "xl:h-[360px] md:h-[360px] h-[480px]",
			colorMood: "pink",
			iconGradient: "linear-gradient(135deg, #EC4899, #F43F5E)",
			glowColor: "#EC4899",
			bulletColor: "bg-pink-400",
			icon: TrendingUp,
			image: "/growth.webp",
			fallbackGradient:
				"linear-gradient(135deg, #230811 0%, #0c0205 100%)",
			initialX: 0,
			initialY: 50,
		},
		{
			id: "card-06",
			number: "06",
			category: "AUTOMATION",
			title: "Sales Automation &\nGrowth Scale",
			description:
				"Automate lead capture, WhatsApp follow-up, CRM flows, sales scripts, and advanced launch insights.",
			bullets: [
				"CRM Flow",
				"WhatsApp Automation",
				"Sales Scripts",
				"Data Insights",
			],
			ctaText: "Launch Path 06",
			gridSpan: "col-span-12 md:col-span-12 xl:col-span-5",
			heightClass: "xl:h-[360px] md:h-[360px] h-[480px]",
			colorMood: "mint",
			iconGradient: "linear-gradient(135deg, #34D399, #06B6D4)",
			glowColor: "#34D399",
			bulletColor: "bg-emerald-400",
			icon: Sparkles,
			image: "/automation.webp",
			fallbackGradient:
				"linear-gradient(135deg, #041619 0%, #010a0c 100%)",
			initialX: 30,
			initialY: 0,
		},
	];

	// Common transition fade variants
	const parentInview = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.12,
				delayChildren: 0.1,
			},
		},
	} as const;

	const textFadeIn = {
		hidden: { opacity: 0, y: 32 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
		},
	} as const;

	return (
		<motion.section
			id="complete-launch-stack-section"
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, margin: "-80px" }}
			variants={{
				hidden: { opacity: 0, y: 50 },
				visible: {
					opacity: 1,
					y: 0,
					transition: {
						duration: 0.9,
						ease: [0.22, 1, 0.36, 1],
						staggerChildren: 0.12,
					},
				},
			}}
			className="relative w-full overflow-hidden max-sm:hidden"
			onMouseMove={handleMouseMove}
			onMouseEnter={(event) => updateGridBounds(event.currentTarget)}
			onMouseLeave={handleMouseLeave}
			style={{
				background:
					"linear-gradient(135deg, #F8FBFF 0%, #EEF7FF 42%, #F7FFF8 72%, #FFF8F1 100%)",
			}}
		>
			{/* Three extremely subtle premium background radial glow spheres */}
			{/* 1. Pale blue top right */}
			<div className="absolute top-[-5%] right-[5%] w-[450px] h-[450px] rounded-full bg-blue-100/25 blur-[120px] pointer-events-none" />
			{/* 2. Pale lavender center */}
			<div className="absolute top-[40%] left-[30%] w-[500px] h-[500px] rounded-full bg-purple-100/20 blur-[130px] pointer-events-none" />
			{/* 3. Pale mint bottom left */}
			<div className="absolute bottom-[-5%] left-[5%] w-[450px] h-[450px] rounded-full bg-emerald-100/20 blur-[120px] pointer-events-none" />

			{/* Main Content envelope */}
			<div className="w-full max-w-[1380px] mx-auto px-6 sm:px-[72px] pt-[110px] pb-[140px] relative z-10">
				{/* Top Header Row with 2-Column layout */}
				<motion.div
					variants={parentInview}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
					className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] lg:gap-[80px] gap-8 items-start mb-[62px]"
				>
					{/* Left Column - Eyebrow & Large Heading */}
					<div className="space-y-4 text-left">
						<GsapTextReveal
							as="span"
							variant="label"
							className="text-[14px] font-extrabold tracking-[0.16em] uppercase text-[#386BFF] block"
						>
							LAUNCHVEDA SERVICES
						</GsapTextReveal>
						<GsapTextReveal
							as="h2"
							variant="heading"
							className="text-[clamp(56px,5vw,86px)] font-black leading-[0.94] tracking-[-0.06em] text-[#07152B] whitespace-pre-line"
						>
							Everything Your{"\n"}
							Brand Needs to{" "}
							<span
								style={{
									backgroundImage:
										"linear-gradient(90deg, #2563EB, #7C3AED)",
									WebkitBackgroundClip: "text",
									WebkitTextFillColor: "transparent",
								}}
								className="font-black"
							>
								Launch.
							</span>
						</GsapTextReveal>
					</div>

					{/* Right Column - Subheading & CTA button below */}
					<div className="flex flex-col items-start gap-6 text-left">
						<GsapTextReveal
							as="p"
							variant="subheading"
							className="text-[22px] leading-[1.42] font-semibold text-[#07152B]/70"
						>
							Launch Veda is positioned as India’s No.1
							Product Launch Company for founders who want
							to build real product brands, not just ideas.
							We bring together product strategy, formulation
							guidance, manufacturing coordination, branding,
							compliance, digital setup, marketplace launch,
							and growth marketing under one execution system.
						</GsapTextReveal>

						<motion.button
							variants={textFadeIn}
							whileHover={{
								y: -3,
								scale: 1.02,
								boxShadow:
									"0 10px 25px rgba(37, 99, 235, 0.25)",
							}}
							whileTap={{ scale: 0.98 }}
							onClick={() => router.push("/services")}
							className="group h-[52px] px-[26px] rounded-full text-white font-bold text-[15px] flex items-center justify-center gap-2 cursor-pointer shadow-md border border-transparent transition-all duration-300"
							style={{
								background:
									"linear-gradient(135deg, #1E40AF, #3B82F6)",
							}}
						>
							<span>Explore the Launch Stack</span>
							<ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
						</motion.button>
					</div>
				</motion.div>

				{/* CSS Bento grid matching exact sizes required */}
				<motion.div
					variants={parentInview}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-125px" }}
					className="grid grid-cols-12 gap-[22px]"
				>
					{cards.map((card, idx) => (
						<ServiceCardComponent
							key={card.id}
							card={card}
							isDesktop={isDesktop}
							sMouseX={sMouseX}
							sMouseY={sMouseY}
							index={idx}
							onCardClick={() => router.push("/services")}
						/>
					))}
				</motion.div>

				{/* Tagline pill wrapper at bottom */}
				<motion.div
					initial={{ opacity: 0, y: 15 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.82, duration: 0.72 }}
					className="flex justify-center mt-16"
				>
					<div className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white/70 border border-white backdrop-blur-md shadow-md text-slate-800 font-extrabold text-[12.5px] sm:text-[14px] leading-none tracking-tight">
						<Rocket className="w-4 h-4 text-[#386BFF] stroke-[2.5]" />
						<span>
							One Ecosystem. Six Core Services. Infinite
							Launch Possibilities.
						</span>
					</div>
				</motion.div>
			</div>
		</motion.section>
	);
};
