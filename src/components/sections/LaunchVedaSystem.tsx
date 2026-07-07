"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import GsapTextReveal from "../ui/GsapTextReveal";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRouter } from "next/navigation";

if (typeof window !== "undefined") {
	gsap.registerPlugin(ScrollTrigger);
}

interface CardItem {
	step: string;
	title: string;
	description: string;
	keyPoints: string[];
	image: string;
}

const CARDS_DATA: CardItem[] = [
	{
		step: "01 / 05",
		title: "Category & Market Direction",
		description:
			"We identify the right category, competitor gap, pricing logic and product positioning before development starts.",
		keyPoints: [
			"Market Gap",
			"Category Selection",
			"Pricing Direction",
			"Launch Feasibility",
		],
		image: "/SEC3-1.webp",
	},
	{
		step: "02 / 05",
		title: "Formulation & Sampling",
		description:
			"Define the formula direction, coordinate development, manage samples and align quality with the launch vision.",
		keyPoints: [
			"Formula Direction",
			"Sampling",
			"Texture",
			"Quality Check",
		],
		image: "/SEC3-2.webp",
	},
	{
		step: "03 / 05",
		title: "Brand Identity & Packaging",
		description:
			"We shape your brand name, visual identity, packaging language and product presentation for market acceptance.",
		keyPoints: [
			"Brand Naming",
			"Visual Identity",
			"Packaging Direction",
			"Label System",
		],
		image: "/SEC3-3.webp",
	},
	{
		step: "04 / 05",
		title: "Manufacturing & Compliance",
		description:
			"We connect you with the right manufacturing direction and guide documentation, claims and compliance basics.",
		keyPoints: [
			"Manufacturer Match",
			"MOQ Planning",
			"Documentation",
			"Compliance Direction",
		],
		image: "/SEC3-4.webp",
	},
	{
		step: "05 / 05",
		title: "Launch & Growth System",
		description:
			"We prepare your website, marketplace listing, content system, ads direction and automation for a smooth launch.",
		keyPoints: [
			"Website",
			"Marketplace",
			"Content Engine",
			"Growth Setup",
		],
		image: "/SEC3-5.webp",
	},
];

const cardRevealVariants = {
	hidden: { opacity: 0, y: 34, scale: 0.985 },
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: {
			duration: 0.72,
			ease: [0.22, 1, 0.36, 1],
		},
	},
} as const;

// ── Premium per-letter animated heading ──────────────────────────────────
const HEADING_LINE_1 = "One Structured Path From Idea";
const HEADING_LINE_2 = "To Market-Ready Brand.";

function LaunchSystemHeading() {
	const headingRef = useRef<HTMLHeadingElement>(null);

	useEffect(() => {
		const heading = headingRef.current;
		if (!heading || typeof window === "undefined") return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

		const chars = gsap.utils.toArray<HTMLElement>(
			".lsh-char",
			heading,
		);

		gsap.set(chars, {
			autoAlpha: 0,
			y: 40,
			rotateX: -80,
			filter: "blur(8px)",
			transformOrigin: "50% 100%",
		});

		const ctx = gsap.context(() => {
			gsap.to(chars, {
				autoAlpha: 1,
				y: 0,
				rotateX: 0,
				filter: "blur(0px)",
				duration: 0.72,
				ease: "back.out(1.5)",
				stagger: {
					each: 0.022,
					from: "start",
					ease: "power2.inOut",
				},
				scrollTrigger: {
					trigger: heading,
					start: "top 84%",
					once: true,
				},
			});
		}, heading);

		return () => ctx.revert();
	}, []);

	const renderLetters = (text: string, lineKey: string) =>
		text.split(" ").map((word, wIdx) => (
			<span
				key={`${lineKey}-w${wIdx}`}
				className="lsh-word"
				style={{ display: "inline-block", whiteSpace: "nowrap", marginRight: "0.22em", perspective: "600px" }}
			>
				{word.split("").map((char, cIdx) => (
					<span
						key={`${lineKey}-w${wIdx}-c${cIdx}`}
						className="lsh-char"
						style={{ display: "inline-block", willChange: "transform, opacity, filter" }}
					>
						{char}
					</span>
				))}
			</span>
		));

	return (
		<h2
			ref={headingRef}
			aria-label={`${HEADING_LINE_1} ${HEADING_LINE_2}`}
			className="text-[#0F172A] font-bold tracking-tighter text-center"
			style={{
				fontSize: "clamp(36px, 5vw, 72px)",
				lineHeight: "0.96",
				letterSpacing: "-0.05em",
			}}
		>
			<span className="block" aria-hidden="true">
				{renderLetters(HEADING_LINE_1, "l1")}
			</span>
			<br className="hidden sm:hidden" />
			<span className="block mt-[0.08em]" aria-hidden="true">
				{renderLetters(HEADING_LINE_2, "l2")}
			</span>
		</h2>
	);
}
// ─────────────────────────────────────────────────────────────────────────────

export default function LaunchVedaSystem() {
	const router = useRouter();
	const [activeCard, setActiveCard] = useState(0);
	const [isMobile, setIsMobile] = useState(false);
	const [revealedCards, setRevealedCards] = useState<Set<number>>(
		() => new Set(),
	);

	const handleCardClick = () => {
		router.push("/process");
	};

	useEffect(() => {
		if (typeof window === "undefined") return;

		const handleResize = () => {
			const mobile = window.innerWidth < 768;
			setIsMobile(mobile);
			if (mobile) {
				setActiveCard(0);
			}
		};

		// Initialize state
		handleResize();

		window.addEventListener("resize", handleResize);

		const observerOptions = {
			root: null,
			threshold: 0.15,
			rootMargin: "-10% 0px -30% 0px",
		};

		const handleIntersect = (entries: IntersectionObserverEntry[]) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					const indexAttr =
						entry.target.getAttribute("data-index");
					if (indexAttr !== null) {
						const index = parseInt(indexAttr, 10);
						setActiveCard(index);
						setRevealedCards((prev) => {
							if (prev.has(index)) return prev;
							const next = new Set(prev);
							next.add(index);
							return next;
						});
					}
				}
			});
		};

		const observer = new IntersectionObserver(
			handleIntersect,
			observerOptions,
		);
		const cardElements = document.querySelectorAll(".launch-system-card");
		cardElements.forEach((el) => observer.observe(el));

		return () => {
			window.removeEventListener("resize", handleResize);
			cardElements.forEach((el) => observer.unobserve(el));
			observer.disconnect();
		};
	}, []);

	return (
		<section
			id="launchveda-system"
			className="relative w-full pt-[120px] pb-[80px] overflow-visible"
		>
			{/* Subtle premium grain noise overlay */}
			<div className="grain-overlay" />

			{/* Dynamic Style Tags for smooth, non-glitchy CSS sticky stacking & customized active backgrounds */}
			<style>{`
        #launchveda-system {
          position: relative;
          overflow: visible;
          padding-top: 120px;
          padding-bottom: 80px;
          color: #1E293B;
          background: #FFFFFF !important;
        }

        .grain-overlay {
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0.12;
          mix-blend-mode: overlay;
          background-color: transparent;
          z-index: 1;
        }

        .launch-system-cards {
          width: 100%;
          max-width: 1380px;
          margin: 0 auto;
          position: relative;
          box-sizing: border-box;
          padding-left: 1rem;
          padding-right: 1rem;
          padding-bottom: 80px;
          z-index: 10;
        }

        @media (min-width: 640px) {
          .launch-system-cards {
            padding-left: 2rem;
            padding-right: 2rem;
          }
        }

        @media (min-width: 1024px) {
          .launch-system-cards {
            padding-left: 3rem;
            padding-right: 3rem;
          }
        }

        .launch-system-card {
          position: sticky;
          top: clamp(80px, 12vh, 120px);
          height: clamp(450px, 64vh, 560px);
          margin-bottom: clamp(16vh, 22vh, 28vh);
          border-radius: 34px;
          overflow: hidden;
          isolation: isolate;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transform: translateZ(0);
          backface-visibility: hidden;
          will-change: transform;
          contain: paint;
          opacity: 1;
          cursor: pointer;
          transition:
            transform 0.5s cubic-bezier(0.22, 1, 0.36, 1),
            opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1),
            background 0.4s ease,
            border-color 0.45s ease,
            box-shadow 0.45s ease;
          box-shadow: none;
        }

        .launch-system-card::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 0;
          border-radius: inherit;
          pointer-events: none;
        }

        /* Outstanding luxury deep dark gradient backgrounds with rich colorful underflows */
        .launch-system-card:nth-child(1)::before {
          background: linear-gradient(135deg, #581c87 0%, #2e0854 50%, #150229 100%);
        }
        .launch-system-card:nth-child(2)::before {
          background: linear-gradient(135deg, #991b1b 0%, #580c0c 50%, #260202 100%);
        }
        .launch-system-card:nth-child(3)::before {
          background: linear-gradient(135deg, #0369a1 0%, #07476b 50%, #022033 100%);
        }
        .launch-system-card:nth-child(4)::before {
          background: linear-gradient(135deg, #065f46 0%, #043e2e 50%, #011f16 100%);
        }
        .launch-system-card:nth-child(5)::before {
          background: linear-gradient(135deg, #1e3a8a 0%, #172352 50%, #0a112e 100%);
        }

        .launch-system-card > * {
          position: relative;
          z-index: 1;
        }

        .card-content,
        .card-visual {
          position: relative;
          z-index: 2;
        }

        .launch-system-card:nth-child(1) { z-index: 11; }
        .launch-system-card:nth-child(2) { z-index: 12; }
        .launch-system-card:nth-child(3) { z-index: 13; }
        .launch-system-card:nth-child(4) { z-index: 14; }
        .launch-system-card:nth-child(5) { z-index: 15; }

        .launch-system-card:last-child {
          margin-bottom: 0;
        }

        /* Active shadow control - deep luxury dark-mode shadow glow on light page */
        .launch-system-card.is-active {
          box-shadow:
            0 35px 80px rgba(0, 0, 0, 0.45),
            0 2px 12px rgba(99, 102, 241, 0.15),
            inset 0 1px 1px rgba(255, 255, 255, 0.15);
        }

        .launch-system-card.is-active:nth-child(1) { border-color: rgba(168, 85, 247, 0.35); }
        .launch-system-card.is-active:nth-child(2) { border-color: rgba(244, 63, 94, 0.35); }
        .launch-system-card.is-active:nth-child(3) { border-color: rgba(14, 165, 233, 0.35); }
        .launch-system-card.is-active:nth-child(4) { border-color: rgba(16, 185, 129, 0.35); }
        .launch-system-card.is-active:nth-child(5) { border-color: rgba(99, 102, 241, 0.35); }

        .launch-system-card:not(.is-active) {
          box-shadow: none;
        }

        .launch-system-card-inner {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
          padding: 24px;
          height: 100%;
          width: 100%;
        }

        @media (min-width: 1024px) {
          .launch-system-card {
            width: 100%;
            aspect-ratio: 1980 / 1080;
            height: auto !important;
            max-height: 72vh;
          }
          .launch-system-card-inner {
            grid-template-columns: 1fr 520px;
            padding: 44px;
          }
          .card-visual {
            width: 520px !important;
            height: 100% !important;
            max-height: calc(72vh - 88px);
            justify-self: end;
          }
          .launch-system-cards::after {
            height: calc(100vh - clamp(80px, 12vh, 120px) - 72vh + 120px) !important;
          }
        }

        /* Step Pill */
        .step-pill {
          display: inline-block;
          padding: 6px 14px;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          font-family: inherit;
          font-size: 11px;
          font-weight: 700;
          color: #A5B4FC;
          margin-bottom: 20px;
          letter-spacing: -0.01em;
        }

        /* Card Content Text Styling - High contrast white titles & crisp description on dark backgrounds */
        .launch-system-card-title {
          font-size: clamp(24px, 3.2vw, 36px);
          font-weight: 700;
          color: #FFFFFF !important;
          letter-spacing: -0.03em;
          line-height: 1.2;
          margin-bottom: 16px;
        }

        .launch-system-card-desc {
          color: rgba(255, 255, 255, 0.76) !important;
          font-size: clamp(14px, 1.8vw, 15px);
          line-height: 1.6;
          margin-bottom: 24px;
          font-weight: 500;
        }

        /* Keypoint Chip with dark theme glassmorphism */
        .keypoint-chip {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 14px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: rgba(255, 255, 255, 0.92) !important;
          border-radius: 12px;
          transition: all 0.3s ease;
          cursor: default;
        }

        .keypoint-chip:hover {
          background: rgba(255, 255, 255, 0.09);
          border-color: rgba(255, 255, 255, 0.18);
        }

        .chip-dot {
          width: 6px;
          height: 6px;
          border-radius: 9999px;
          background-color: #38BDF8; /* Glowing celestial cyan indicator */
        }

        /* Arrow Button */
        .arrow-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: #FFFFFF;
          transition: all 0.3s ease;
        }

        .arrow-btn:hover {
          background: rgba(255, 255, 255, 0.16);
          border-color: rgba(255, 255, 255, 0.25);
          transform: translateX(4px);
        }

        .card-visual {
          position: relative;
          border-radius: 28px;
          overflow: hidden;
          height: 100%;
          width: 100%;
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .card-visual img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          filter: none;
          transition: transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .launch-system-card:hover .card-visual img {
          transform: scale(1.04);
        }

        .launch-system-cards::after {
          content: "";
          display: block;
          height: calc(100vh - clamp(80px, 12vh, 120px) - clamp(450px, 64vh, 560px) + 120px);
        }

        @media (max-width: 1023px) {
          .launch-system-card {
            height: auto;
            min-height: 620px;
            margin-bottom: 20vh;
            top: 88px;
          }
          .launch-system-card-inner {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .card-visual {
            height: 280px;
            min-height: 280px;
          }
        }

        @media (max-width: 767px) {
          #launchveda-system {
            padding-top: 20px;
            padding-bottom: 72px;
          }

          .launch-system-card {
            position: relative;
            top: auto;
            height: auto;
            min-height: auto;
            margin: 24px !important;
            box-shadow: 0 16px 40px rgba(0, 0, 0, 0.35) !important;
            background: transparent !important;
            border-color: rgba(255, 255, 255, 0.08) !important;
          }

          .launch-system-card-inner {
            padding: 24px;
            gap: 24px;
          }

          .launch-system-cards {
            padding-bottom: 0px !important;
          }

          .launch-system-cards::after {
            display: none !important;
          }

          .card-visual {
            display: none !important;
          }
        }
      `}</style>

			<div className="w-full relative z-10">
				{/* HEADER */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{
						duration: 0.8,
						ease: [0.22, 1, 0.36, 1],
					}}
					className="mx-auto w-full max-w-[1200px] px-6 text-center mb-[72px]"
				>
					<GsapTextReveal
						as="span"
						variant="label"
						className="text-[#FF2B1F] font-semibold uppercase text-xs tracking-[0.25em] block mb-4"
					>
						OUR LAUNCH SYSTEM
					</GsapTextReveal>
					<LaunchSystemHeading />
					<GsapTextReveal
						as="p"
						variant="subheading"
						className="font-medium leading-relaxed max-w-[760px] text-lg mt-6 mx-auto text-slate-500"
					>
						From category direction to formulation, packaging,
						manufacturing, compliance, website, marketplace
						listing and growth — LaunchVeda builds a complete
						launch roadmap for ambitious founders.
					</GsapTextReveal>
				</motion.div>

				{/* CARDS WRAPPER */}
				<div className="launch-system-cards">
					{CARDS_DATA.map((card, i) => {
						const diff = activeCard - i;
						const scale =
							!isMobile && diff > 0 ? 1 - diff * 0.03 : 1;
						const translateY =
							!isMobile && diff > 0 ? -diff * 20 : 0;
						const opacity =
							!isMobile && diff > 0
								? Math.max(0.4, 1 - diff * 0.15)
								: 1;

						return (
							<div
								key={i}
								data-index={i}
								className={`launch-system-card ${activeCard === i ? "is-active" : ""} ${revealedCards.has(i) ? "has-revealed" : ""}`}
								style={{
									transform: `translate3d(0, ${translateY}px, 0) scale(${scale})`,
									opacity: opacity,
									transformOrigin: "center top",
								}}
								onClick={handleCardClick}
							>
								<motion.div
									className="launch-system-card-inner"
									variants={cardRevealVariants}
									initial="hidden"
									whileInView="visible"
									viewport={{
										once: true,
										amount: isMobile ? 0.24 : 0.36,
										margin: "-80px",
									}}
								>
									{/* LEFT CONTENT */}
									<div className="card-content flex flex-col justify-between text-left h-full py-1">
										<div>
											{/* Step number in small muted pill */}
											<div className="step-pill">
												{card.step}
											</div>

											{/* Large title */}
											<GsapTextReveal
												as="h3"
												variant="heading"
												className="launch-system-card-title"
											>
												{card.title}
											</GsapTextReveal>

											{/* Description */}
											<GsapTextReveal
												as="p"
												variant="text"
												className="launch-system-card-desc"
											>
												{card.description}
											</GsapTextReveal>

											{/* 4 key point chips */}
											<div className="grid grid-cols-2 gap-3 max-w-[480px]">
												{card.keyPoints.map(
													(
														pt,
														index,
													) => (
														<div
															key={
																index
															}
															className="keypoint-chip"
														>
															<div className="chip-dot" />
															<span className="text-[12px] font-semibold tracking-wide">
																{
																	pt
																}
															</span>
														</div>
													),
												)}
											</div>
										</div>

										{/* Bottom left circular arrow button */}
										<div className="pt-6 sm:pt-4 max-sm:hidden">
											<button className="arrow-btn">
												<ArrowRight className="w-5 h-5 stroke-[2]" />
											</button>
										</div>
									</div>

									{/* RIGHT VISUAL */}
									<div className="card-visual">
										<img
											src={card.image}
											alt={card.title}
											referrerPolicy="no-referrer"
											loading="lazy"
											decoding="async"
										/>
									</div>
								</motion.div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
