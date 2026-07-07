"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRouter } from "next/navigation";
import {
	Grid2x2,
	FlaskConical,
	Package,
	ShieldCheck,
	ShoppingCart,
	TrendingUp,
	Sparkles,
	Bot,
	MessageCircle,
	CalendarCheck,
	FileCheck,
	ArrowRight,
	ArrowUpRight,
	Check,
	ChevronRight,
} from "lucide-react";
import GsapTextReveal from "../ui/GsapTextReveal";

// Types and Interfaces
interface RoadmapStep {
	name: string;
	subtitle: string;
	icon: React.ElementType;
	bgGrad: string;
	borderColor: string;
	iconColor: string;
}

interface MarketplaceRow {
	platform: string;
	text: string;
	color: string;
	logoChar: string;
}

interface AutomationStep {
	title: string;
	text: string;
	icon: React.ElementType;
	colorClass: string;
	iconColor: string;
}

interface MetricItem {
	label: string;
	value: string;
}

const roadmapSteps: RoadmapStep[] = [
	{
		name: "Category",
		subtitle: "Opportunity scanning",
		icon: Grid2x2,
		bgGrad: "linear-gradient(135deg, #ECFDF5 0%, #D1FAE5 100%)",
		borderColor: "rgba(16, 185, 129, 0.2)",
		iconColor: "#059669",
	},
	{
		name: "Formula",
		subtitle: "Scientific formulation",
		icon: FlaskConical,
		bgGrad: "linear-gradient(135deg, #F7FEE7 0%, #ECFCCB 100%)",
		borderColor: "rgba(132, 204, 22, 0.2)",
		iconColor: "#65A30D",
	},
	{
		name: "Packaging",
		subtitle: "Design & cost optimization",
		icon: Package,
		bgGrad: "linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)",
		borderColor: "rgba(59, 130, 246, 0.2)",
		iconColor: "#2563EB",
	},
	{
		name: "Compliance",
		subtitle: "Regulatory readiness",
		icon: ShieldCheck,
		bgGrad: "linear-gradient(135deg, #F5F3FF 0%, #EDE9FE 100%)",
		borderColor: "rgba(139, 92, 246, 0.2)",
		iconColor: "#7C3AED",
	},
	{
		name: "Marketplace",
		subtitle: "Listing & content creation",
		icon: ShoppingCart,
		bgGrad: "linear-gradient(135deg, #FDF2F8 0%, #FCE7F3 100%)",
		borderColor: "rgba(236, 72, 153, 0.2)",
		iconColor: "#DB2777",
	},
	{
		name: "Growth",
		subtitle: "Launch, ads & scale insights",
		icon: TrendingUp,
		bgGrad: "linear-gradient(135deg, #FFF7ED 0%, #FFEDD5 100%)",
		borderColor: "rgba(249, 115, 22, 0.2)",
		iconColor: "#EA580C",
	},
];

const marketplaceRows: MarketplaceRow[] = [
	{
		platform: "Amazon",
		text: "Optimized title, bullets & description",
		color: "",
		logoChar: "",
	},
	{
		platform: "Nykaa",
		text: "Beauty-first benefits & keywords",
		color: "",
		logoChar: "",
	},
	{
		platform: "Flipkart",
		text: "Feature-led title & highlights",
		color: "",
		logoChar: "",
	},
	{
		platform: "Blinkit",
		text: "Quick-commerce optimized copy",
		color: "",
		logoChar: "",
	},
	{
		platform: "Instamart",
		text: "Short copy for high-intent buyers",
		color: "",
		logoChar: "",
	},
];

const getBrandIcon = (platform: string) => {
	switch (platform) {
		case "Amazon":
			return (
				<div className="w-8 h-8 rounded-lg bg-[#111111] flex items-center justify-center shadow-md shrink-0 border border-white/10">
					<svg
						className="w-5.5 h-5.5"
						viewBox="0 0 100 100"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<text
							x="32"
							y="58"
							fill="white"
							fontSize="50"
							fontWeight="900"
							fontFamily="system-ui, -apple-system, sans-serif"
						>
							a
						</text>
						<path
							d="M16,66 Q50,91 84,66"
							stroke="#FF9900"
							strokeWidth="7.5"
							strokeLinecap="round"
							fill="none"
						/>
						<path d="M72,67 L85,63 L80,77 Z" fill="#FF9900" />
					</svg>
				</div>
			);
		case "Nykaa":
			return (
				<div className="w-8 h-8 rounded-lg bg-[#E8005A] flex items-center justify-center shadow-md shrink-0 border border-pink-500/10">
					<svg
						className="w-6 h-6"
						viewBox="0 0 120 120"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<text
							x="50%"
							y="54%"
							dominantBaseline="middle"
							textAnchor="middle"
							fill="white"
							fontSize="24"
							fontWeight="900"
							letterSpacing="0.5"
							fontFamily="system-ui, -apple-system, sans-serif"
						>
							NYKAA
						</text>
					</svg>
				</div>
			);
		case "Flipkart":
			return (
				<div className="w-8 h-8 rounded-lg bg-[#2874F0] flex items-center justify-center shadow-md shrink-0 border border-blue-500/10">
					<svg
						className="w-[22px] h-[22px]"
						viewBox="0 0 100 100"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M25,35 L75,35 L82,85 C82,88 80,90 77,90 L23,90 C20,90 18,88 18,85 Z"
							fill="#FFE100"
						/>
						<path
							d="M40,35 C40,22 60,22 60,35"
							stroke="#FFE100"
							strokeWidth="6"
							fill="none"
						/>
						<path
							d="M35,55 L50,62 L72,48"
							stroke="#2874F0"
							strokeWidth="7"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M32,48 L42,50"
							stroke="#2874F0"
							strokeWidth="4"
							strokeLinecap="round"
						/>
					</svg>
				</div>
			);
		case "Blinkit":
			return (
				<div className="w-8 h-8 rounded-lg bg-[#FDF120] flex items-center justify-center shadow-md shrink-0 border border-yellow-400/10">
					<svg
						className="w-5.5 h-5.5"
						viewBox="0 0 100 100"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<text
							x="50%"
							y="53%"
							dominantBaseline="middle"
							textAnchor="middle"
							fill="#0C2B1E"
							fontSize="62"
							fontWeight="900"
							fontFamily="system-ui, -apple-system, sans-serif"
						>
							b
						</text>
					</svg>
				</div>
			);
		case "Instamart":
			return (
				<div className="w-8 h-8 rounded-lg bg-[#FF5E00] flex items-center justify-center shadow-md shrink-0 border border-orange-500/10">
					<svg
						className="w-5.5 h-5.5"
						viewBox="0 0 100 100"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M55,10 L25,55 L48,55 L40,90 L75,40 L50,40 Z"
							fill="white"
						/>
					</svg>
				</div>
			);
		default:
			return null;
	}
};

const automationSteps: AutomationStep[] = [
	{
		title: "Lead Capture",
		text: "Collect leads from ads & landing pages",
		icon: Bot,
		colorClass: "bg-blue-100/80 border-blue-200/60",
		iconColor: "#1D4ED8",
	},
	{
		title: "WhatsApp Follow-up",
		text: "Custom-tailored outreach & nurturing",
		icon: MessageCircle,
		colorClass: "bg-emerald-100/80 border-emerald-200/60",
		iconColor: "#047857",
	},
	{
		title: "Consultation",
		text: "Expert call booking & requirement map",
		icon: CalendarCheck,
		colorClass: "bg-amber-100/80 border-amber-200/60",
		iconColor: "#B45309",
	},
	{
		title: "Launch Plan",
		text: "Personalized brand launch roadmap",
		icon: FileCheck,
		colorClass: "bg-purple-100/80 border-purple-200/60",
		iconColor: "#6D28D9",
	},
];

const metrics: MetricItem[] = [
	{ label: "Engagement", value: "+18%" },
	{ label: "Reach", value: "+65%" },
	{ label: "Conversion", value: "+24%" },
	{ label: "Followers", value: "+26%" },
];

// ─── Dot that travels the chart path on a continuous rAF loop ────────────────
const CHART_PATH = "M 0 100 Q 30 50, 60 70 T 120 40 T 180 80 T 240 30 T 300 10";
const LOOP_DURATION = 3500; // ms per full pass

function TravellingDot() {
	const outerRef = useRef<SVGCircleElement>(null);
	const innerRef = useRef<SVGCircleElement>(null);
	const pathRef  = useRef<SVGPathElement | null>(null);
	const rafRef   = useRef<number | null>(null);
	const startRef = useRef<number | null>(null);

	useEffect(() => {
		// Build a detached path element to sample positions without mounting it
		const p = document.createElementNS("http://www.w3.org/2000/svg", "path");
		p.setAttribute("d", CHART_PATH);
		pathRef.current = p;

		const tick = (ts: number) => {
			if (!startRef.current) startRef.current = ts;
			const t = ((ts - startRef.current) % LOOP_DURATION) / LOOP_DURATION;
			const total = pathRef.current!.getTotalLength();
			const pt    = pathRef.current!.getPointAtLength(t * total);
			const x = String(pt.x);
			const y = String(pt.y);
			outerRef.current?.setAttribute("cx", x);
			outerRef.current?.setAttribute("cy", y);
			innerRef.current?.setAttribute("cx", x);
			innerRef.current?.setAttribute("cy", y);
			rafRef.current = requestAnimationFrame(tick);
		};
		rafRef.current = requestAnimationFrame(tick);
		return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
	}, []);

	return (
		<g>
			{/* Outer glow halo */}
			<circle ref={outerRef} cx="0" cy="100" r="10"
				fill="rgba(96,165,250,0.18)" />
			{/* Inner bright dot */}
			<circle ref={innerRef} cx="0" cy="100" r="4.5"
				fill="#60a5fa" stroke="white" strokeWidth="1.5"
				style={{ filter: "drop-shadow(0 0 5px rgba(96,165,250,0.9))" }} />
		</g>
	);
}

export default function LaunchIntelligenceSection() {
	const router = useRouter();
	const sectionRef = useRef<HTMLElement>(null);
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		const section = sectionRef.current;
		if (!section) return;

		const mm = gsap.matchMedia();
		const mobileQuery = window.matchMedia("(max-width: 767px)");
		const syncMobileState = () => setIsMobile(mobileQuery.matches);

		syncMobileState();
		mobileQuery.addEventListener("change", syncMobileState);

		mm.add("(max-width: 767px)", () => {
			const cards = gsap.utils.toArray<HTMLElement>(
				".launch-intelligence-mobile-card",
				section,
			);

			cards.forEach((card, index) => {
				const direction = index % 2 === 0 ? -1 : 1;

				gsap.fromTo(
					card,
					{
						autoAlpha: 0,
						x: direction * 56,
					},
					{
						autoAlpha: 1,
						x: 0,
						duration: 0.7,
						ease: "power2.out",
						scrollTrigger: {
							trigger: card,
							start: "top 88%",
							once: true,
						},
					},
				);
			});

			return () => {
				ScrollTrigger.getAll().forEach((trigger) => {
					if (
						trigger.trigger instanceof HTMLElement &&
						section.contains(trigger.trigger)
					) {
						trigger.kill();
					}
				});
			};
		});

		return () => {
			mobileQuery.removeEventListener("change", syncMobileState);
			mm.revert();
		};
	}, []);

	// Animation Variant definition
	const cardVariants = {
		hidden: { opacity: 0, y: 36, scale: 0.975 },
		visible: {
			opacity: 1,
			y: 0,
			scale: 1,
			transition: {
				duration: 0.8,
				ease: [0.22, 1, 0.36, 1],
			},
		},
	} as const;
	const mobileCardVariants = isMobile ? undefined : cardVariants;

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.12,
			},
		},
	};

	return (
		<section
			ref={sectionRef}
			id="launch-intelligence-section"
			className="relative w-full overflow-hidden"
		>
			{/* Subtle Ambient Decorative Gradient Glow Blobs */}
			<div
				className="absolute top-20 right-[15%] w-[450px] h-[450px] rounded-full bg-orange-200/25 blur-[130px] pointer-events-none animate-pulse"
				style={{ animationDuration: "8s" }}
			/>
			<div
				className="absolute top-1/2 left-[5%] w-[400px] h-[400px] rounded-full bg-blue-200/20 blur-[120px] pointer-events-none animate-pulse"
				style={{ animationDuration: "12s" }}
			/>
			<div
				className="absolute bottom-20 right-[10%] w-[420px] h-[420px] rounded-full bg-amber-300/20 blur-[130px] pointer-events-none animate-pulse"
				style={{ animationDuration: "10s" }}
			/>
			<div
				className="absolute top-[40%] left-[45%] w-[350px] h-[350px] rounded-full bg-indigo-200/15 blur-[120px] pointer-events-none animate-pulse"
				style={{ animationDuration: "14s" }}
			/>

			{/* Styled font import for Plus Jakarta Sans fallback matches visual requirements */}
			<style>{`
        /* fonts removed */
        
        @keyframes amberBluePulse {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
 
        #launch-intelligence-section {
          font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          background: linear-gradient(135deg, #FFF5EE 0%, #EEF4FF 25%, #FFFBF7 50%, #E3EDFF 75%, #FFE9D3 100%);
          background-size: 200% 200%;
          animation: amberBluePulse 20s ease-in-out infinite;
          padding-top: 120px;
          padding-bottom: 140px;
        }
      `}</style>

			{/* Main Container */}
			<div className="w-full max-w-[1380px] mx-auto px-6 lg:px-[72px] md:px-[56px] sm:px-10">
				{/* TOP CONTENT LAYOUT - Aligned Left with empty luxury margins on the right */}
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
					variants={containerVariants}
					className="flex flex-col items-start text-left mb-14"
				>
					{/* Eyebrow */}
					<GsapTextReveal
						as="span"
						variant="label"
						className="text-[14px] font-extrabold tracking-[0.16em] uppercase text-[#1E40AF] mb-5 block"
					>
						ADVANCED LAUNCH INTELLIGENCE
					</GsapTextReveal>

					{/* Main Heading */}
					<GsapTextReveal
						as="h2"
						variant="heading"
						className="font-extrabold text-[#07152B] leading-[0.96] tracking-[-0.055em] max-w-[820px] mb-6 text-[clamp(44px,5.4vw,84px)]"
					>
						Smarter Launch Decisions,
						<br />
						Built Into <br /> Every Brand.
					</GsapTextReveal>

					{/* Subheading */}
					<GsapTextReveal
						as="p"
						variant="subheading"
						className="text-[clamp(16px,1.4vw,22px)] font-medium leading-[1.48] tracking-[-0.02em] text-[#07152B]/85 max-w-[660px] mb-8"
					>
						From idea validation and content planning to
						marketplace listings, automation and launch
						growth, LaunchVeda uses advanced systems to
						make brand building faster, clearer and more
						structured.
					</GsapTextReveal>

					{/* Action Button */}
					<motion.button
						variants={{
							hidden: { opacity: 0, scale: 0.95 },
							visible: {
								opacity: 1,
								scale: 1,
								transition: { duration: 0.5 },
							},
						}}
						whileHover={{ y: -3, scale: 1.02 }}
						whileTap={{ scale: 0.98 }}
						onClick={() => router.push("/process")}
						className="group h-[54px] px-[28px] rounded-full text-white font-bold text-[16px] flex items-center justify-center gap-2 cursor-pointer shadow-[0_14px_34px_rgba(30,64,175,0.25)] transition-all duration-300"
						style={{
							background:
								"linear-gradient(135deg, #1E40AF, #3B82F6)",
						}}
					>
						<span>See the Brand Launch Stack</span>
						<ArrowRight className="w-[18px] h-[18px] stroke-[2.5] transform group-hover:translate-x-1.5 transition-transform duration-300" />
					</motion.button>
				</motion.div>

				{/* BENTO GRID DASHBOARD LAYOUT */}
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-80px" }}
					variants={containerVariants}
					className="flex flex-col lg:grid lg:grid-cols-[minmax(0,2fr)_minmax(360px,0.95fr)] gap-[22px] mt-12 w-full animate-fadeIn items-stretch"
				>
					{/* LEFT AREA: ROADMAP, TRACKER, COPY BUILDER */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-rows-[270px_370px] gap-[22px] h-full lg:min-h-full">
						{/* ==================================================== */}
						{/* CARD 1: BRAND LAUNCH ROADMAP */}
						{/* ==================================================== */}
						<motion.div
							variants={mobileCardVariants}
							whileHover={{ y: -6, scale: 1.01 }}
							className="launch-intelligence-mobile-card md:col-span-2 p-8 rounded-[28px] border border-white/10 shadow-[0_24px_70px_rgba(0,0,0,0.3)] backdrop-blur-md overflow-hidden relative transition-all duration-300 h-auto lg:h-[270px] flex flex-col justify-between"
							style={{
								background:
									"linear-gradient(135deg, #991b1b 0%, #450a0a 50%, #1a0505 100%)",
							}}
						>
							{/* Top row */}
							<div className="flex justify-between items-center mb-6">
								<h3 className="text-[19px] font-extrabold text-white">
									Algorithmic Launch Roadmap
								</h3>
								<span className="text-[10.5px] uppercase font-extrabold tracking-widest text-red-300 bg-red-950/40 border border-red-900/40 px-2.5 py-1 rounded-full shadow-sm hover:scale-105 transition-transform">
									Guided Journey
								</span>
							</div>

							{/* Nodes Row — auto-scrolling marquee */}
							<style>{`
                @keyframes roadmap-scroll {
                  0%   { transform: translateX(0); }
                  100% { transform: translateX(-50%); }
                }
                .roadmap-track {
                  animation: roadmap-scroll 14s linear infinite;
                  will-change: transform;
                }
                .roadmap-track-wrapper:hover .roadmap-track {
                  animation-play-state: paused;
                }
              `}</style>
							<div
								className="roadmap-track-wrapper relative w-full overflow-hidden mt-4"
								style={{
									maskImage:
										"linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
								}}
							>
								{/* Dotted connecting background line scrolls with track */}
								<div className="roadmap-track flex items-start gap-0">
									{[
										...roadmapSteps,
										...roadmapSteps,
									].map((step, idx) => (
										<div
											key={idx}
											className="relative flex flex-col items-center min-w-[110px] text-center z-10 cursor-pointer group px-2"
										>
											{/* Connector line segment */}
											{idx %
												roadmapSteps.length !==
												roadmapSteps.length -
													1 && (
												<div
													className="absolute top-[24px] left-[calc(50%+24px)] right-[-34px] h-[2px] opacity-40 pointer-events-none"
													style={{
														background:
															step.iconColor,
														borderRadius:
															"99px",
													}}
												/>
											)}
											{/* Node Circle */}
											<div
												className="w-12 h-12 rounded-full flex items-center justify-center shadow-md border group-hover:shadow-lg transition-all duration-300 group-hover:scale-110"
												style={{
													background:
														step.bgGrad,
													borderColor:
														step.borderColor,
												}}
											>
												<step.icon
													className="w-[20px] h-[20px] stroke-[2.2]"
													style={{
														color: step.iconColor,
													}}
												/>
											</div>

											{/* Text labels */}
											<span className="text-[12px] font-extrabold text-white/95 mt-3 block group-hover:text-red-300 transition-colors leading-tight">
												{step.name}
											</span>
											<span className="text-[10px] font-semibold text-white/55 max-w-[90px] leading-tight block mt-0.5">
												{step.subtitle}
											</span>
										</div>
									))}
								</div>
							</div>
						</motion.div>

						{/* ==================================================== */}
						{/* CARD 3: LAUNCH SIGNAL TRACKER */}
						{/* ==================================================== */}
						<motion.div
							variants={mobileCardVariants}
							whileHover={{ y: -6, scale: 1.01 }}
							className="launch-intelligence-mobile-card col-span-1 p-8 rounded-[28px] border border-white/10 shadow-[0_24px_70px_rgba(0,0,0,0.3)] backdrop-blur-md overflow-hidden relative flex flex-col justify-between transition-all duration-300 h-auto lg:h-[370px]"
							style={{
								background:
									"linear-gradient(135deg, #1e3a8a 0%, #1e293b 50%, #0f172a 100%)",
							}}
						>
							{/* Header */}
							<div className="flex justify-between items-start">
								<div className="space-y-0.5 text-left">
									<span className="text-[9px] uppercase font-extrabold tracking-widest text-blue-300 block">
										Insights Panel
									</span>
									<h3 className="text-[19px] font-extrabold text-white">
										Launch Signal Tracker
									</h3>
								</div>
								<span className="text-[11px] font-extrabold text-blue-300 bg-blue-950/40 border border-blue-900/40 px-2.5 py-0.5 rounded-full flex items-center gap-0.5">
									+65%{" "}
									<ArrowUpRight className="w-3 h-3 stroke-[3]" />
								</span>
							</div>

							{/* Sparkline line chart area (Animated SVG drawing effect styling) */}
							<div className="w-full h-[150px] relative mt-2">
								<svg
									className="w-full h-full overflow-visible"
									viewBox="0 0 300 130"
								>
									<defs>
										<linearGradient
											id="chartGlowGrad"
											x1="0"
											y1="0"
											x2="0"
											y2="1"
										>
											<stop
												offset="0%"
												stopColor="#3b82f6"
												stopOpacity="0.25"
											/>
											<stop
												offset="100%"
												stopColor="#3b82f6"
												stopOpacity="0.0"
											/>
										</linearGradient>
									</defs>

									{/* Simulated Grid Lines */}
									<line
										x1="0"
										y1="20"
										x2="300"
										y2="20"
										stroke="rgba(59, 130, 246, 0.12)"
										strokeWidth="1"
									/>
									<line
										x1="0"
										y1="55"
										x2="300"
										y2="55"
										stroke="rgba(59, 130, 246, 0.12)"
										strokeWidth="1"
									/>
									<line
										x1="0"
										y1="90"
										x2="300"
										y2="90"
										stroke="rgba(59, 130, 246, 0.12)"
										strokeWidth="1"
									/>
									<line
										x1="0"
										y1="125"
										x2="300"
										y2="125"
										stroke="rgba(59, 130, 246, 0.16)"
										strokeWidth="1"
									/>

									{/* Gradient Path Area Underneath Line */}
									<path
										d="M 0 100 Q 30 50, 60 70 T 120 40 T 180 80 T 240 30 T 300 10 L 300 130 L 0 130 Z"
										fill="url(#chartGlowGrad)"
									/>

									{/* Main Blue Chart Line */}
									<motion.path
										initial={{ pathLength: 0 }}
										whileInView={{
											pathLength: 1,
										}}
										viewport={{ once: true }}
										transition={{
											duration: 1.6,
											ease: "easeOut",
										}}
										d="M 0 100 Q 30 50, 60 70 T 120 40 T 180 80 T 240 30 T 300 10"
										fill="none"
										stroke="#3b82f6"
										strokeWidth="3.5"
										strokeLinecap="round"
									/>

									{/* Travelling Dot — loops along chart path */}
									<TravellingDot />
								</svg>
							</div>

							{/* Bottom metrics mini grid */}
							<div className="grid grid-cols-2 gap-2 mt-1">
								{metrics.map((item) => (
									<div
										key={item.label}
										className="bg-blue-950/30 border border-blue-900/40 p-2.5 rounded-xl flex items-center justify-between text-left hover:bg-blue-900/40 transition-colors shadow-[0_2px_8px_rgba(0,0,0,0.2)]"
									>
										<span className="text-[11.5px] font-bold text-white/80 tracking-tight">
											{item.label}
										</span>
										<span className="text-[12.5px] font-extrabold text-blue-300 flex items-center gap-0.5">
											{item.value}{" "}
											<span className="text-[9.5px]">
												↑
											</span>
										</span>
									</div>
								))}
							</div>
						</motion.div>

						{/* ==================================================== */}
						{/* CARD 4: MARKETPLACE COPY BUILDER */}
						{/* ==================================================== */}
						<motion.div
							variants={mobileCardVariants}
							whileHover={{ y: -6, scale: 1.01 }}
							className="launch-intelligence-mobile-card col-span-1 p-8 rounded-[28px] border border-white/10 shadow-[0_24px_70px_rgba(0,0,0,0.3)] backdrop-blur-md overflow-hidden relative flex flex-col justify-between transition-all duration-300 h-auto lg:h-[370px]"
							style={{
								background:
									"linear-gradient(135deg, #581c87 0%, #3b0764 50%, #1a0b2e 100%)",
							}}
						>
							{/* Header */}
							<div className="flex justify-between items-start">
								<div className="space-y-0.5 text-left">
									<span className="text-[9px] uppercase font-extrabold tracking-widest text-purple-300 block">
										Copy optimization
									</span>
									<h3 className="text-[19px] font-extrabold text-white">
										Marketplace Copy Builder
									</h3>
								</div>
								<span className="text-[9px] bg-purple-950/40 text-purple-300 border border-purple-900/40 px-2.5 py-1 rounded-full uppercase tracking-wider font-extrabold">
									Active
								</span>
							</div>

							{/* Stacked Marketplace list rows */}
							<motion.div
								className="space-y-2.5 mt-5 max-h-[250px] overflow-y-auto custom-scroll pr-1"
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true }}
								variants={{
									hidden: {},
									visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
								}}
							>
								{marketplaceRows.map((row) => (
									<motion.div
										key={row.platform}
										variants={{
											hidden:  { opacity: 0, y: 8 },
											visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
										}}
										whileHover={{ y: -2, backgroundColor: "#f8fafc" }}
										transition={{ duration: 0.18, ease: "easeOut" }}
										className="flex items-center justify-between bg-white border border-slate-100 p-2.5 rounded-xl outline-none group cursor-pointer shadow-sm"
									>
										<div className="flex items-center gap-3">
											{/* Platform Logo Badge */}
											<motion.div
												whileHover={{ scale: 1.1, rotate: -4 }}
												transition={{ type: "spring", stiffness: 400, damping: 18 }}
											>
												{getBrandIcon(row.platform)}
											</motion.div>

											<div className="space-y-0.5 text-left">
												<span className="text-[12px] font-extrabold text-slate-800">
													{row.platform}
												</span>
												<p className="text-[10px] text-slate-500 font-semibold">
													{row.text}
												</p>
											</div>
										</div>

										<ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-600 group-hover:translate-x-1 transition-all" />
									</motion.div>
								))}
							</motion.div>
						</motion.div>
					</div>

					{/* RIGHT AREA: BRAND CONCEPT PREVIEW, SALES AUTOMATION */}
					<div className="flex flex-col gap-[22px] h-full lg:min-h-full">
						{/* ==================================================== */}
						{/* CARD 2: BRAND CONCEPT PREVIEW */}
						{/* ==================================================== */}
						<motion.div
							variants={mobileCardVariants}
							whileHover={{ y: -6, scale: 1.01 }}
							className="launch-intelligence-mobile-card w-full p-8 rounded-[28px] border border-white/10 shadow-[0_24px_70px_rgba(0,0,0,0.3)] backdrop-blur-md overflow-hidden relative flex flex-col transition-all duration-300 h-[320px] lg:h-[390px] shrink-0"
							style={{
								backgroundImage:
									"linear-gradient(180deg, rgba(2, 6, 23, 0.28) 0%, rgba(2, 6, 23, 0.08) 45%, rgba(2, 6, 23, 0.26) 100%), url('/brand-concept.webp')",
								backgroundSize: "cover",
								backgroundPosition: "center",
							}}
						>
							{/* Header Content */}
							<div className="z-10 flex justify-between items-start">
								<div className="space-y-0.5 text-left">
									<span className="text-[9px] uppercase font-extrabold tracking-widest text-emerald-300 block">
										Visual Synthesis
									</span>
									<h3 className="text-[19px] font-extrabold text-white tracking-tight">
										Brand Concept Preview
									</h3>
								</div>
								<motion.div
									animate={{
										rotate: [0, 15, -15, 0],
									}}
									transition={{
										repeat: Infinity,
										duration: 4,
										ease: "easeInOut",
									}}
									className="w-8 h-8 rounded-full bg-amber-50 border border-amber-100 flex items-center justify-center shadow-sm shrink-0"
								>
									<Sparkles className="w-4 h-4 text-amber-500 fill-amber-500" />
								</motion.div>
							</div>
						</motion.div>

						{/* ==================================================== */}
						{/* CARD 5: SALES AUTOMATION */}
						{/* ==================================================== */}
						<motion.div
							initial={
								isMobile
									? false
									: { opacity: 0, y: 28, scale: 0.98 }
							}
							whileInView={
								isMobile
									? undefined
									: { opacity: 1, y: 0, scale: 1 }
							}
							viewport={{ once: true, margin: "-80px" }}
							transition={
								isMobile
									? undefined
									: {
											duration: 0.75,
											delay: 0.15,
											ease: [0.22, 1, 0.36, 1],
										}
							}
							whileHover={{ y: -6, scale: 1.01 }}
							className="launch-intelligence-mobile-card w-full p-8 rounded-[28px] border border-white/10 shadow-[0_24px_70px_rgba(0,0,0,0.3)] backdrop-blur-md overflow-hidden relative flex flex-col justify-between transition-all duration-300 flex-1 min-h-[250px] lg:h-auto"
							style={{
								background:
									"linear-gradient(135deg, #0284c7 0%, #0369a1 50%, #0c4a6e 100%)",
							}}
						>
							{/* Header */}
							<div className="flex justify-between items-start">
								<div className="space-y-0.5 text-left">
									<span className="text-[9px] uppercase font-extrabold tracking-widest text-sky-200 block">
										Automation
									</span>
									<h3 className="text-[19px] font-extrabold text-white">
										Sales Automation
									</h3>
								</div>
							</div>

							{/* List sequence container with connecting line */}
							<div className="relative space-y-3 pl-2.5 mt-4 h-full flex flex-col justify-center">
								{/* Vertical dotted line */}
								<div className="absolute left-[20px] top-[14px] bottom-[14px] w-[1px] border-l border-dashed border-sky-400/30 pointer-events-none" />

								{automationSteps.map((step) => (
									<div
										key={step.title}
										className="relative flex items-center gap-3 text-left hover:translate-x-0.5 transition-all group"
									>
										{/* Step Icon */}
										<div
											className={`w-[26px] h-[26px] rounded-lg border flex items-center justify-center shrink-0 shadow-sm transition-all duration-200 z-10 ${step.colorClass}`}
										>
											<step.icon
												className="w-3.5 h-3.5 stroke-[2.2]"
												style={{
													color: step.iconColor,
												}}
											/>
										</div>

										{/* Copy labels */}
										<div className="space-y-0.2">
											<span className="text-[11.5px] font-extrabold text-white/95 leading-none block group-hover:text-sky-200 transition-colors">
												{step.title}
											</span>
											<p className="text-[10px] text-white/60 font-semibold leading-none block">
												{step.text}
											</p>
										</div>
									</div>
								))}
							</div>
						</motion.div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
