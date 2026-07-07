"use client";

import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import GsapTextReveal from "../ui/GsapTextReveal";

if (typeof window !== "undefined") {
	gsap.registerPlugin(ScrollTrigger);
}

interface CategoryItem {
	number: string;
	name: string;
	steps: string[];
	image: string;
	mobileImage: string;
	themeColor: string;
	mobilePosition: string;
	link: string;
}

const CATEGORIES_DATA: CategoryItem[] = [
	{
		number: "01",
		name: "Perfume",
		steps: [
			"Fragrance Direction",
			"Bottle",
			"Packaging",
			"Compliance",
			"Launch",
		],
		image: "/sec2-perfume.webp",
		mobileImage: "/p-1.png",
		themeColor: "#6DFFA6",
		mobilePosition: "70% center",
		link: "/perfume-brand-launch",
	},
	{
		number: "02",
		name: "Cosmetics & Skincare",
		steps: ["Formula", "Sampling", "Claims", "Packaging", "Marketplace"],
		image: "/sec2-cosmetics.webp",
		mobileImage: "/p-2.png",
		themeColor: "#9EFFC1",
		mobilePosition: "70% center",
		link: "/cosmetic-brand-launch",
	},
	{
		number: "03",
		name: "Modern Ayurveda",
		steps: [
			"Herbal Concept",
			"Manufacturer",
			"Certification",
			"Branding",
			"Sales",
		],
		image: "/sec2-Ayurveda.webp",
		mobileImage: "/p-3.png",
		themeColor: "#A6FFD2",
		mobilePosition: "60% center",
		link: "/ayurveda-brand-launch",
	},
	{
		number: "04",
		name: "Nutraceuticals",
		steps: ["Format", "Dosage", "Compliance", "Listing", "Growth"],
		image: "/sec2-nutra.webp",
		mobileImage: "/p-4.png",
		themeColor: "#6DFFA6",
		mobilePosition: "60% center",
		link: "/nutraceutical-brand-launch",
	},
];

function CardImage({
	src,
	mobilePosition,
}: {
	src: string;
	mobilePosition?: string;
}) {
	return (
		<img
			src={src}
			alt="Category background"
			style={
				{
					"--mobile-pos": mobilePosition || "center",
				} as React.CSSProperties
			}
			className="card-bg-image absolute inset-0 w-full h-full object-cover transition-transform duration-700 select-none pointer-events-none"
		/>
	);
}

export default function CategorySection() {
	const sectionRef = useRef<HTMLDivElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);
	const cardsRef = useRef<HTMLDivElement>(null);
	const categoryHeadingRef = useRef<HTMLHeadingElement>(null);

	const categoryHeadingLines = ["Choose the Category", "You Want to Launch."];

	useEffect(() => {
		const heading = categoryHeadingRef.current;
		if (!heading || typeof window === "undefined") return;

		const reduceMotion = window.matchMedia(
			"(prefers-reduced-motion: reduce)",
		);
		if (reduceMotion.matches) return;

		const ctx = gsap.context(() => {
			const chars = gsap.utils.toArray<HTMLElement>(
				".category-heading-char",
				heading,
			);

			gsap.set(chars, {
				autoAlpha: 0,
				y: 34,
				rotateX: -70,
				transformOrigin: "50% 100%",
			});

			gsap.to(chars, {
				autoAlpha: 1,
				y: 0,
				rotateX: 0,
				duration: 0.78,
				ease: "back.out(1.65)",
				stagger: {
					each: 0.018,
					from: "start",
					ease: "sine.inOut",
				},
				scrollTrigger: {
					trigger: heading,
					start: "top 82%",
					once: true,
				},
			});
		}, heading);

		return () => ctx.revert();
	}, []);

	useEffect(() => {
		const section = sectionRef.current;
		if (!section) return;

		// Use matchMedia so the guard is reliable across resizes and initial loads
		const desktopMQ = window.matchMedia("(min-width: 768px)");

		// Only run GSAP animation on desktop (>=768px)
		if (!desktopMQ.matches) return;

		let refreshFrame: number | null = null;
		const handleRefresh = () => {
			if (refreshFrame !== null) return;
			refreshFrame = window.requestAnimationFrame(() => {
				refreshFrame = null;
				ScrollTrigger.refresh();
			});
		};
		window.addEventListener("load", handleRefresh);
		window.addEventListener("resize", handleRefresh);
		document.fonts?.ready.then(() => ScrollTrigger.refresh());

		let ctx: ReturnType<typeof gsap.context> | null = null;

		const initTimeout = setTimeout(() => {
			ctx = gsap.context(() => {
				const q = gsap.utils.selector(section);
				const cards = q(".category-card");
				if (cards.length === 0) return;

				const images = q(".card-bg-image");

				// Set card 0 centered from the start
				gsap.set(cards[0], {
					xPercent: -50,
					yPercent: -50,
					opacity: 1,
					scale: 1,
					zIndex: cards.length,
				});
				// All other cards wait offscreen to the right
				for (let i = 1; i < cards.length; i++) {
					gsap.set(cards[i], {
						xPercent: 120,
						yPercent: -50,
						opacity: 0,
						scale: 0.98,
						zIndex: cards.length - i,
					});
				}

				gsap.set(images, { scale: 1.06 });

				const scrollStage = section.querySelector<HTMLElement>(
					".category-scroll-stage",
				);
				if (!scrollStage) return;

				const tl = gsap.timeline({
					scrollTrigger: {
						trigger: scrollStage,
						start: "top top",
						end: "+=3600",
						pin: true,
						scrub: 0.9,
						anticipatePin: 1,
						pinSpacing: true,
						invalidateOnRefresh: true,
						snap: {
							snapTo: (value: number) => {
								const stops = [0, 0.34, 0.67, 1.0];
								return stops.reduce((prev, curr) =>
									Math.abs(curr - value) <
									Math.abs(prev - value)
										? curr
										: prev,
								);
							},
							duration: { min: 0.22, max: 0.5 },
							delay: 0.04,
							ease: "power3.out",
						},
					},
				});

				// Keep the first card readable, then start the sequence quickly.
				tl.to({}, { duration: 0.12 }, "step0");

				// Card 0 → Card 1
				tl.to(
					cards[0],
					{
						xPercent: -155,
						yPercent: -50,
						opacity: 0,
						scale: 0.97,
						ease: "power2.inOut",
						duration: 1.2,
					},
					"step1",
				)
					.to(
						cards[1],
						{
							xPercent: -50,
							yPercent: -50,
							opacity: 1,
							scale: 1,
							ease: "power2.inOut",
							duration: 1.2,
						},
						"step1",
					)
					.to(
						images[1],
						{
							scale: 1.0,
							ease: "power2.inOut",
							duration: 1.2,
						},
						"step1",
					);

				// Card 1 → Card 2
				tl.to(
					cards[1],
					{
						xPercent: -155,
						yPercent: -50,
						opacity: 0,
						scale: 0.97,
						ease: "power2.inOut",
						duration: 1.2,
					},
					"step2",
				)
					.to(
						cards[2],
						{
							xPercent: -50,
							yPercent: -50,
							opacity: 1,
							scale: 1,
							ease: "power2.inOut",
							duration: 1.2,
						},
						"step2",
					)
					.to(
						images[2],
						{
							scale: 1.0,
							ease: "power2.inOut",
							duration: 1.2,
						},
						"step2",
					);

				// Card 2 → Card 3
				tl.to(
					cards[2],
					{
						xPercent: -155,
						yPercent: -50,
						opacity: 0,
						scale: 0.97,
						ease: "power2.inOut",
						duration: 1.2,
					},
					"step3",
				)
					.to(
						cards[3],
						{
							xPercent: -50,
							yPercent: -50,
							opacity: 1,
							scale: 1,
							ease: "power2.inOut",
							duration: 1.2,
						},
						"step3",
					)
					.to(
						images[3],
						{
							scale: 1.0,
							ease: "power2.inOut",
							duration: 1.2,
						},
						"step3",
					);
			}, section);

			ScrollTrigger.refresh();
		}, 100);

		return () => {
			clearTimeout(initTimeout);
			if (refreshFrame !== null) {
				window.cancelAnimationFrame(refreshFrame);
			}
			window.removeEventListener("load", handleRefresh);
			window.removeEventListener("resize", handleRefresh);
			// Only revert this component's context, not all ScrollTriggers
			if (ctx) ctx.revert();
		};
	}, []);

	return (
		<section
			id="category-explore-section"
			ref={sectionRef}
			className="category-section relative w-full overflow-hidden flex flex-col justify-start"
			style={{ background: "#ffffff" }}
		>
			<style>{`
        .category-scroll-stage {
          position: relative;
          height: 100vh;
          width: 100%;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .category-card-wrapper {
          width: 100%;
          max-width: 1236px;
          aspect-ratio: 1980 / 1080;
          height: auto;
          max-height: 72vh;
          position: relative;
        }

        .card-bg-image {
          object-position: center;
        }

        .category-heading-word {
          display: inline-block;
          white-space: nowrap;
          margin-right: 0.18em;
          perspective: 700px;
        }

        .category-heading-char {
          display: inline-block;
          will-change: transform, opacity;
        }

        @media (max-width: 768px) {
          /* Collapse the GSAP stage so it takes no space on mobile */
          .category-scroll-stage {
            height: 0 !important;
            min-height: 0 !important;
            overflow: hidden !important;
            display: none !important;
            padding: 0 !important;
          }
          .card-bg-image {
            object-position: var(--mobile-pos, center) !important;
          }
        }

        /*
         * .category-card positioning is fully owned by GSAP.
         * Only define non-transform layout properties here.
         * GSAP sets xPercent/yPercent which translate from left:50%/top:50%.
         */
        .category-card {
          position: absolute;
          /* left/top set inline per card so GSAP xPercent/yPercent works correctly */
          width: 100%;
          height: 100%;
          overflow: hidden;
          max-height: 72vh;
        }
      `}</style>

			{/* BACKGROUND MARQUEE */}
			<div className="absolute top-[20px] left-0 w-full overflow-hidden pointer-events-none select-none z-1 max-sm:hidden">
				<div
					style={{
						fontSize: "clamp(100px, 10vw, 180px)",
						fontWeight: 900,
						letterSpacing: "-0.07em",
						color: "rgba(6, 16, 51, 0.04)",
						animation: "marquee-slide 25s linear infinite",
					}}
					className="whitespace-nowrap flex w-max uppercase"
				>
					<span className="px-4">LAUNCHVEDA</span>
					<span className="px-4">LAUNCHVEDA</span>
					<span className="px-4">LAUNCHVEDA</span>
					<span className="px-4">LAUNCHVEDA</span>
				</div>
			</div>

			{/* TOP CONTENT — sits above the pinned stage */}
			<div
				ref={containerRef}
				className="relative mx-auto w-full max-w-[1380px] px-6 md:px-[72px] z-10 pt-12 pb-10 md:pt-20 md:pb-16 lg:pt-24 lg:pb-20"
			>
				<div className="grid grid-cols-1 xl:grid-cols-[1.08fr_0.92fr] gap-8 xl:gap-24 items-start">
					{/* Left */}
					<div className="flex flex-col items-center text-center xl:items-start xl:text-left">
						<GsapTextReveal
							as="span"
							variant="label"
							style={{
								fontSize: "13px",
								fontWeight: 800,
								letterSpacing: "0.16em",
							}}
							className="text-[#FF2B1F] uppercase mb-4"
						>
							Our Categories
						</GsapTextReveal>
						<h2
							ref={categoryHeadingRef}
							aria-label="Choose the Category You Want to Launch."
							style={{
								lineHeight: "0.96",
								letterSpacing: "-0.05em",
							}}
							className="text-[#0F172A] font-bold tracking-tighter text-[clamp(36px,5vw,72px)] max-w-[780px]"
						>
							{categoryHeadingLines.map((line, lineIndex) => (
								<span
									key={line}
									aria-hidden="true"
									className="block"
								>
									{line.split(" ").map((word) => (
										<span
											key={`${line}-${word}`}
											className="category-heading-word"
										>
											{word
												.split("")
												.map((char, charIndex) => (
													<span
														key={`${word}-${char}-${charIndex}`}
														className="category-heading-char"
													>
														{char}
													</span>
												))}
										</span>
									))}
									{lineIndex <
										categoryHeadingLines.length -
											1 && (
										<br className="hidden xl:inline" />
									)}
								</span>
							))}
						</h2>
					</div>

					{/* Right */}
					<div className="flex flex-col items-center text-center xl:items-start xl:text-left xl:pt-7">
						<GsapTextReveal
							as="p"
							variant="subheading"
							style={{
								fontSize: "clamp(15px, 1.22vw, 18px)",
								fontWeight: 500,
								lineHeight: "1.48",
								letterSpacing: "-0.02em",
							}}
							className="text-slate-500 max-w-[760px]"
						>
							LaunchVeda helps founders launch across
							Perfume, Cosmetics & Skincare, Modern
							Ayurveda, and Nutraceuticals with end-to-end
							support—from formulation and packaging to
							compliance, branding, and marketplace launch.
						</GsapTextReveal>
						<div className="flex flex-wrap gap-3 mt-6 xl:mt-4 justify-center xl:justify-start">
							<a
								href="/perfume-brand-launch"
								style={{
									height: "46px",
									borderRadius: "12px",
									background: "linear-gradient(135deg, #ec4899 0%, #be185d 100%)",
									color: "#ffffff",
									fontSize: "13.5px",
									fontWeight: 800,
								}}
								className="inline-flex items-center gap-1.5 px-5 cursor-pointer shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:brightness-105 active:scale-95 text-white"
							>
								<span>Perfume Launch</span>
								<ArrowRight className="w-4 h-4 stroke-[2.5]" />
							</a>
							<a
								href="/ayurveda-brand-launch"
								style={{
									height: "46px",
									borderRadius: "12px",
									background: "linear-gradient(135deg, #10b981 0%, #047857 100%)",
									color: "#ffffff",
									fontSize: "13.5px",
									fontWeight: 800,
								}}
								className="inline-flex items-center gap-1.5 px-5 cursor-pointer shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:brightness-105 active:scale-95 text-white"
							>
								<span>Ayurveda Launch</span>
								<ArrowRight className="w-4 h-4 stroke-[2.5]" />
							</a>
							<a
								href="/cosmetic-brand-launch"
								style={{
									height: "46px",
									borderRadius: "12px",
									background: "linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)",
									color: "#ffffff",
									fontSize: "13.5px",
									fontWeight: 800,
								}}
								className="inline-flex items-center gap-1.5 px-5 cursor-pointer shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:brightness-105 active:scale-95 text-white"
							>
								<span>Cosmetic Launch</span>
								<ArrowRight className="w-4 h-4 stroke-[2.5]" />
							</a>
							<a
								href="/nutraceutical-brand-launch"
								style={{
									height: "46px",
									borderRadius: "12px",
									background: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
									color: "#ffffff",
									fontSize: "13.5px",
									fontWeight: 800,
								}}
								className="inline-flex items-center gap-1.5 px-5 cursor-pointer shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:brightness-105 active:scale-95 text-white"
							>
								<span>Nutraceutical Launch</span>
								<ArrowRight className="w-4 h-4 stroke-[2.5]" />
							</a>
						</div>
					</div>
				</div>
			</div>

			{/* ─── MOBILE: 2×2 grid (no sticky animation) ─── */}
			<div className="md:hidden px-4 pb-10 grid grid-cols-2 gap-3 relative z-10">
				{CATEGORIES_DATA.map((item, index) => (
					<a
						key={index}
						href={item.link}
						className="relative overflow-hidden rounded-2xl block"
						style={{ aspectRatio: "4 / 5" }}
					>
						{/* Background image */}
						<CardImage
							src={item.mobileImage}
							mobilePosition={item.mobilePosition}
						/>

						{/* Gradient overlay */}
						<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-[1]" />

						{/* Card content */}
						<div className="absolute inset-0 z-10 p-4 flex flex-col justify-between text-left">
							<div className="flex flex-col items-start">
								<span
									style={{
										fontSize: "12px",
										fontWeight: 800,
										color: item.themeColor,
									}}
									className="mb-1 tracking-wider block"
								>
									{item.number}
								</span>
								<GsapTextReveal
									as="h3"
									variant="heading"
									style={{
										fontSize:
											"clamp(16px,4vw,22px)",
										fontWeight: 800,
										lineHeight: "1.1",
										letterSpacing: "-0.04em",
									}}
									className="text-white"
								>
									{item.name}
								</GsapTextReveal>
							</div>

							{/* Launch steps as mini pills */}
							{/* <div className="flex flex-wrap gap-1">
								{item.steps.map((step, stepIdx) => (
									<span
										key={stepIdx}
										className="text-[10px] font-bold text-white/90 px-2 py-0.5 rounded-full"
										style={{
											backgroundColor:
												"rgba(255,255,255,0.12)",
											border: "1px solid rgba(255,255,255,0.2)",
										}}
									>
										{step}
									</span>
								))}}
							</div> */}
						</div>

						{/* Arrow button */}
						<div className="absolute right-3 bottom-3 z-20">
							<button
								onClick={(e) => e.preventDefault()}
								style={{
									backgroundColor:
										"rgba(255,255,255,0.12)",
									borderColor:
										"rgba(255,255,255,0.2)",
								}}
								className="w-8 h-8 rounded-full flex items-center justify-center text-white border backdrop-blur-md"
							>
								<ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
							</button>
						</div>
					</a>
				))}
			</div>

			{/* ─── DESKTOP: GSAP pinned scroll stage ─── */}
			<div className="hidden md:block">
				<div className="category-scroll-stage">
					<div className="relative mx-auto w-full max-w-[1380px] px-6 md:px-[72px] flex items-center justify-center h-full">
						<div
							ref={cardsRef}
							className="category-card-wrapper relative"
							style={{
								aspectRatio: "1980 / 1080",
							}}
						>
							{CATEGORIES_DATA.map((item, index) => (
								<div
									key={index}
									style={{
										width: "100%",
										height: "100%",
										borderRadius: "28px",
										border: "1px solid rgba(255, 255, 255, 0.28)",
										// GSAP needs left/top set here so xPercent/yPercent
										// translates from the center of the wrapper correctly.
										left: "50%",
										top: "50%",
									}}
									className="category-card overflow-hidden"
								>
									{/* Background image */}
									<CardImage
										src={item.image}
										mobilePosition={
											item.mobilePosition
										}
									/>

									<div className="absolute inset-y-0 left-0 z-[1] w-[58%] bg-gradient-to-r from-black/62 via-black/28 to-transparent pointer-events-none" />

									{/* Card content */}
									<div className="absolute inset-0 z-10 p-6 sm:p-10 lg:p-[42px] lg:pl-[50px] flex flex-col justify-between text-left">
										<div className="flex flex-col items-start">
											<span
												style={{
													fontSize:
														"15px",
													fontWeight: 800,
													color: item.themeColor,
												}}
												className="mb-3 sm:mb-6 lg:mb-[28px] tracking-wider block"
											>
												{item.number}
											</span>
											<GsapTextReveal
												as="h3"
												variant="heading"
												style={{
													fontSize:
														"clamp(28px,3.8vw,56px)",
													fontWeight: 800,
													lineHeight:
														"0.95",
													letterSpacing:
														"-0.055em",
												}}
												className="text-white whitespace-pre-line"
											>
												{item.name}
											</GsapTextReveal>

											<div className="mt-8 flex flex-col items-start w-full">
												<span
													style={{
														fontSize:
															"13px",
														fontWeight: 800,
														letterSpacing:
															"0.14em",
													}}
													className="text-white/72 uppercase mb-3"
												>
													Launch Path
												</span>
												<div className="flex flex-col items-start gap-2">
													{item.steps.map(
														(
															step,
															stepIdx,
														) => (
															<div
																key={
																	stepIdx
																}
																style={{
																	backgroundColor:
																		"rgba(255,255,255,0.10)",
																	borderColor:
																		"rgba(255,255,255,0.22)",
																}}
																className="flex min-h-8 w-[180px] items-center gap-2 rounded-full border px-3 text-xs font-bold text-white backdrop-blur-[2px] lg:min-h-[36px] lg:w-[220px] lg:px-4 lg:text-sm"
															>
																<span className="h-2 w-2 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.85)] animate-pulse" />
																<span className="truncate">
																	{
																		step
																	}
																</span>
															</div>
														),
													)}
												</div>
											</div>
										</div>
									</div>

									{/* Action button */}
									<div className="absolute right-6 bottom-6 sm:right-10 sm:bottom-10 lg:right-[42px] lg:bottom-[42px] z-20">
										<a
											href={item.link}
											style={{
												backgroundColor:
													"rgba(255,255,255,0.12)",
												borderColor:
													"rgba(255,255,255,0.2)",
											}}
											className="w-12 h-12 rounded-full flex items-center justify-center text-white border backdrop-blur-md transition-transform duration-200 hover:scale-110 hover:bg-white hover:text-[#071621] cursor-pointer"
										>
											<ArrowRight className="w-5 h-5 stroke-[2.5]" />
										</a>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
