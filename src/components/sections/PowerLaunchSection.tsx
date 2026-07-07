"use client";

import React, { useRef, useEffect } from "react";
import { motion } from "motion/react";
import { Sparkles, ArrowRight } from "lucide-react";
import GsapTextReveal from "../ui/GsapTextReveal";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
	gsap.registerPlugin(ScrollTrigger);
}

// ── Premium per-letter heading reveal ────────────────────────────────────────
const POWER_HEADING = "Curious What Else We Power-Launch?";

function PowerLaunchHeading() {
	const headingRef = useRef<HTMLHeadingElement>(null);

	useEffect(() => {
		const heading = headingRef.current;
		if (!heading || typeof window === "undefined") return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches)
			return;

		const chars = gsap.utils.toArray<HTMLElement>(
			".plh-char",
			heading,
		);
		const glow = heading.querySelector<HTMLElement>(".plh-glow");

		gsap.set(heading, { autoAlpha: 1 });
		gsap.set(chars, {
			autoAlpha: 0,
			yPercent: 88,
			rotateX: -72,
			rotateZ: 1.8,
			filter: "blur(10px)",
			color: "#f5d0fe",
			textShadow: "0 0 0 rgba(255,255,255,0)",
			transformOrigin: "50% 100%",
		});
		if (glow) {
			gsap.set(glow, {
				autoAlpha: 0,
				scaleX: 0.64,
				transformOrigin: "50% 50%",
			});
		}

		const ctx = gsap.context(() => {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: heading,
					start: "top 84%",
					once: true,
				},
			});

			tl.to(chars, {
				autoAlpha: 1,
				yPercent: 0,
				rotateX: 0,
				rotateZ: 0,
				filter: "blur(0px)",
				color: "#ffffff",
				textShadow:
					"0 0 20px rgba(244, 114, 182, 0.38), 0 0 44px rgba(168, 85, 247, 0.32)",
				duration: 0.86,
				ease: "back.out(1.42)",
				stagger: {
					each: 0.018,
					from: "start",
				},
			}).to(
				chars,
				{
					textShadow: "0 0 0 rgba(255,255,255,0)",
					duration: 0.7,
					ease: "power2.out",
					stagger: {
						each: 0.006,
						from: "start",
					},
				},
				"-=0.28",
			);

			if (glow) {
				tl.to(
					glow,
					{
						autoAlpha: 1,
						scaleX: 1,
						duration: 0.72,
						ease: "power3.out",
					},
					"-=0.64",
				).to(
					glow,
					{
						autoAlpha: 0.42,
						duration: 0.8,
						ease: "power2.out",
					},
					"-=0.2",
				);
			}

		}, heading);

		return () => ctx.revert();
	}, []);

	const renderLetters = () =>
		POWER_HEADING.split(" ").map((word, wordIndex, words) => (
			<span
				key={`${word}-${wordIndex}`}
				className="plh-word inline-block whitespace-nowrap"
				aria-hidden="true"
				style={{
					marginRight:
						wordIndex < words.length - 1 ? "0.24em" : 0,
					perspective: "700px",
				}}
			>
				{word.split("").map((char, charIndex) => (
					<span
						key={`${word}-${wordIndex}-${charIndex}`}
						className="plh-char inline-block will-change-[transform,opacity,filter]"
					>
						{char}
					</span>
				))}
			</span>
		));

	return (
		<h2
			ref={headingRef}
			aria-label={POWER_HEADING}
			className="relative text-white font-[900] text-4xl sm:text-5xl lg:text-6xl leading-[1.08] mb-6 max-w-[950px] mx-auto text-shadow-sm"
		>
			<span
				className="relative z-10 block"
				aria-hidden="true"
			>
				{renderLetters()}
			</span>
			<span className="plh-glow pointer-events-none absolute left-1/2 top-1/2 h-[0.18em] w-[88%] -translate-x-1/2 translate-y-[0.58em] rounded-full bg-gradient-to-r from-transparent via-pink-300/70 to-transparent blur-md" />
		</h2>
	);
}
// ─────────────────────────────────────────────────────────────────────────────

interface BrandItem {
	id: string;
	title: string;
	subtitle: string;
	imageUrl: string;
}

const BRAND_IMAGES: BrandItem[] = [
	{
		id: "cursca",
		title: "Samriddhi Cursca Juice",
		subtitle: "Juice",
		imageUrl: "/slider/1.webp",
	},
	{
		id: "natrathai",
		title: "Natrathai",
		subtitle: "Thai Spa",
		imageUrl: "/slider/2.webp",
	},
	{
		id: "calmiva",
		title: "Calmiva+",
		subtitle: "Anti-Anxiety Drops",
		imageUrl: "/slider/3.webp",
	},
	{
		id: "nomad obsidian",
		title: "Nomad Obsidian",
		subtitle: "Perfume",
		imageUrl: "/slider/4.webp",
	},
	{
		id: "nocturne bliss",
		title: "Nocturne Bliss",
		subtitle: "Perfume",
		imageUrl: "/slider/5.webp",
	},
	{
		id: "bloom surrender",
		title: "SOS bloom surrender",
		subtitle: "Perfume",
		imageUrl: "/slider/6.webp",
	},
	{
		id: "bloom surrender",
		title: "SOS Bloom Surrender",
		subtitle: "Perfume",
		imageUrl: "/slider/7.webp",
	},
	{
		id: "nomad noir",
		title: "SOS Nomad Noir",
		subtitle: "Perfume",
		imageUrl: "/slider/8.webp",
	},
	{
		id: "creme velours",
		title: "Elvare Paris Creme Velours",
		subtitle: "Perfume",
		imageUrl: "/slider/9.webp",
	},
	{
		id: "white oud",
		title: "SOS White Oud",
		subtitle: "Perfume",
		imageUrl: "/slider/10.webp",
	},
];

export const PowerLaunchSection: React.FC = () => {
	// We duplicate the array to achieve infinite scroll marquee effect smoothly
	const marqueeItems = [...BRAND_IMAGES, ...BRAND_IMAGES, ...BRAND_IMAGES];

	const [isMounted, setIsMounted] = React.useState(false);

	React.useEffect(() => {
		setIsMounted(true);
	}, []);

	// Moving particles config
	const particles = React.useMemo(() => {
		return Array.from({ length: 25 }).map((_, idx) => ({
			id: idx,
			size: Math.random() * 5 + 2, // 2px to 7px
			x: Math.random() * 100, // percentage
			y: Math.random() * 100, // percentage
			duration: Math.random() * 15 + 10, // 10s to 25s
			delay: Math.random() * -10, // negative delay so they start immediately at different points
		}));
	}, []);

	return (
		<section
			id="power-launch-showcase"
			className="relative w-full overflow-hidden bg-gradient-to-br from-[#2E1065] via-[#1E0B36] to-[#0B0214] py-20 lg:py-28 border-t border-purple-950/45"
		>
			{/* Moving Particles */}
			<div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
				{isMounted &&
					particles.map((p) => (
						<motion.div
							key={p.id}
							className="absolute rounded-full bg-white/65 blur-[0.5px]"
							style={{
								width: p.size,
								height: p.size,
								left: `${p.x}%`,
								top: `${p.y}%`,
							}}
							animate={{
								y: [0, -150, 0],
								x: [0, p.id % 2 === 0 ? 30 : -30, 0],
								opacity: [0.4, 0.95, 0.4],
							}}
							transition={{
								duration: p.duration,
								repeat: Infinity,
								delay: p.delay,
								ease: "easeInOut",
							}}
						/>
					))}
			</div>

			{/* Background Ambient Glows */}
			<div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
				<div className="absolute top-1/3 left-1/4 w-[50%] h-[50%] rounded-full bg-violet-600/10 filter blur-[120px] animate-pulse-slow" />
				<div className="absolute bottom-1/3 right-1/4 w-[45%] h-[45%] rounded-full bg-purple-500/10 filter blur-[120px]" />
				{/* Subtle grid backdrop overlay */}
				<div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]" />
			</div>

			<div className="relative mx-auto w-full max-w-[1380px] px-5 sm:px-12 z-10 text-center mb-16">
				{/* Eyebrow badge from the image */}
				<div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-pink-500/30 bg-pink-500/10 text-[11px] font-[800] uppercase tracking-wider text-pink-300 mb-5 shadow-sm">
					<Sparkles className="w-3.5 h-3.5 text-pink-300 animate-pulse" />
					<GsapTextReveal as="span" variant="label">
						BEHIND THE FORMULATIONS
					</GsapTextReveal>
				</div>

				{/* Main Heading */}
				<PowerLaunchHeading />

				{/* Subtitle text */}
				<GsapTextReveal
					as="p"
					variant="subheading"
					className="text-purple-100/80 font-medium text-[15px] sm:text-[17px] leading-relaxed max-w-[750px] mx-auto mb-10"
				>
					Explore the bespoke premium brand identities, clinical
					ayurvedic formulations, and ultra-high tactile
					packaging designs we engineer as your co-founders.
				</GsapTextReveal>

				{/* Premium CTA Button matching layout */}
				<div className="flex justify-center mb-16">
					<motion.button
						whileHover={{ y: -2, scale: 1.02 }}
						whileTap={{ scale: 0.98 }}
						onClick={() => {
							document.getElementById("launch-plan-form")?.scrollIntoView({
								behavior: "smooth",
								block: "start"
							});
						}}
						className="h-[52px] px-8 rounded-full bg-white text-slate-950 font-[800] text-xs sm:text-sm tracking-widest uppercase flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 cursor-pointer"
					>
						<span>LAUNCH YOUR CONCEPT</span>
						<div className="w-6 h-6 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 flex items-center justify-center text-white animate-bounce-horizontal">
							<ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
						</div>
					</motion.button>
				</div>
			</div>

			{/* INFINITE SCROLL CAROUSEL (Marquee with slow, premium pace) */}
			<div className="relative w-full overflow-hidden py-4 select-none mb-16">
				<div className="flex w-max">
					<motion.div
						className="flex gap-6 pr-6"
						animate={{ x: ["0%", "-33.333%"] }}
						transition={{
							ease: "linear",
							duration: 35,
							repeat: Infinity,
						}}
					>
						{marqueeItems.map((brand, idx) => (
							<div
								key={`${brand.id}-${idx}`}
								className="w-[280px] sm:w-[320px] h-[380px] sm:h-[440px] rounded-[24px] sm:rounded-[32px] overflow-hidden relative group shrink-0 shadow-xl border border-white/[0.08]"
							>
								{/* Image */}
								<img
									src={brand.imageUrl}
									alt={brand.title}
									className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
									referrerPolicy="no-referrer"
								/>



								{/* Premium floating brand info labels */}
								<div className="absolute bottom-6 left-6 right-6 text-left">
									<p className="text-[10px] font-extrabold uppercase tracking-widest text-orange-400 mb-1">
										{brand.subtitle}
									</p>
									<h4 className="text-white font-[800] text-lg sm:text-xl tracking-tight leading-none">
										{brand.title}
									</h4>
								</div>
							</div>
						))}
					</motion.div>
				</div>
			</div>

			{/* Horizontal Divider & Bottom 4-Column Feature list */}
			<div className="mx-auto w-full max-w-[1200px] px-5 sm:px-12 z-10 relative">
				<div className="w-full h-[1px] bg-white/[0.08] mb-12" />

				<div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-left">
					{/* Feature 01 */}
					<div className="flex flex-col items-center sm:items-start">
						<span className="text-[11px] font-black px-2.5 py-1 rounded bg-orange-500/10 border border-orange-500/20 text-orange-400 mb-4 tracking-wider uppercase">
							01
						</span>
						<h4 className="text-white font-[800] text-[15px] sm:text-[16px] tracking-tight leading-snug">
							Active Formulations
						</h4>
						<p className="text-purple-200/60 font-semibold text-[12px] mt-1.5 leading-relaxed">
							ISO cleanroom chemist alignment
						</p>
					</div>

					{/* Feature 02 */}
					<div className="flex flex-col items-center sm:items-start">
						<span className="text-[11px] font-black px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mb-4 tracking-wider uppercase">
							02
						</span>
						<h4 className="text-white font-[800] text-[15px] sm:text-[16px] tracking-tight leading-snug">
							Tactile Vesellation
						</h4>
						<p className="text-purple-200/60 font-semibold text-[12px] mt-1.5 leading-relaxed">
							Proprietary 3D mold CADs
						</p>
					</div>

					{/* Feature 03 */}
					<div className="flex flex-col items-center sm:items-start">
						<span className="text-[11px] font-black px-2.5 py-1 rounded bg-pink-500/10 border border-pink-500/20 text-pink-400 mb-4 tracking-wider uppercase">
							03
						</span>
						<h4 className="text-white font-[800] text-[15px] sm:text-[16px] tracking-tight leading-snug">
							Checkout Speedways
						</h4>
						<p className="text-purple-200/60 font-semibold text-[12px] mt-1.5 leading-relaxed">
							Headless commerce under 500ms
						</p>
					</div>

					{/* Feature 04 */}
					<div className="flex flex-col items-center sm:items-start">
						<span className="text-[11px] font-black px-2.5 py-1 rounded bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 mb-4 tracking-wider uppercase">
							04
						</span>
						<h4 className="text-white font-[800] text-[15px] sm:text-[16px] tracking-tight leading-snug">
							Exclusive MOQ Locks
						</h4>
						<p className="text-purple-200/60 font-semibold text-[12px] mt-1.5 leading-relaxed">
							Negotiated starting batch entries
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PowerLaunchSection;
