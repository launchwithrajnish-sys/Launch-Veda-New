"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import {
	ShieldCheck,
	Target,
	TrendingUp,
	ArrowRight,
	User,
	Mail,
	Box,
	Leaf,
	Stethoscope,
	Droplets,
	Lightbulb,
	Map,
	Wrench,
	Rocket,
	ShieldAlert,
	FileCheck,
	ClipboardList,
	ChevronDown,
	Tag,
} from "lucide-react";
import GsapTextReveal from "../ui/GsapTextReveal";

const InteractiveParticles = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		let particles: any[] = [];
		let animationFrameId: number;
		let resizeFrameId: number | null = null;
		let scrollFrameId: number | null = null;
		let mouse = { x: -1000, y: -1000 };
		const canvasRect = { left: 0, top: 0 };

		const cacheCanvasPosition = () => {
			const rect = canvas.getBoundingClientRect();
			canvasRect.left = rect.left;
			canvasRect.top = rect.top;
		};

		const resize = (width: number, height: number) => {
			const nextWidth = Math.max(1, Math.round(width));
			const nextHeight = Math.max(1, Math.round(height));
			if (canvas.width === nextWidth && canvas.height === nextHeight) {
				cacheCanvasPosition();
				return;
			}
			canvas.width = nextWidth;
			canvas.height = nextHeight;
			cacheCanvasPosition();
			initParticles();
		};

		const scheduleResize = () => {
			if (resizeFrameId !== null) return;
			resizeFrameId = window.requestAnimationFrame(() => {
				resizeFrameId = null;
				const parent = canvas.parentElement;
				if (parent) {
					resize(parent.clientWidth, parent.clientHeight);
				}
			});
		};

		const schedulePositionCache = () => {
			if (scrollFrameId !== null) return;
			scrollFrameId = window.requestAnimationFrame(() => {
				scrollFrameId = null;
				cacheCanvasPosition();
			});
		};

		const syncInitialSize = () => {
			const parent = canvas.parentElement;
			if (parent) {
				resize(parent.clientWidth, parent.clientHeight);
			}
		};

		const resizeObserver =
			typeof ResizeObserver !== "undefined"
				? new ResizeObserver((entries) => {
						const entry = entries[0];
						if (!entry) return;
						const { width, height } = entry.contentRect;
						resize(width, height);
					})
				: null;

		if (canvas.parentElement && resizeObserver) {
			resizeObserver.observe(canvas.parentElement);
		}

		window.addEventListener("resize", scheduleResize);
		window.addEventListener("scroll", schedulePositionCache, {
			passive: true,
		});

		const handleMouseMove = (e: MouseEvent) => {
			mouse.x = e.clientX - canvasRect.left;
			mouse.y = e.clientY - canvasRect.top;
		};

		const handleMouseLeave = () => {
			mouse.x = -1000;
			mouse.y = -1000;
		};

		window.addEventListener("mousemove", handleMouseMove);
		window.addEventListener("mouseout", handleMouseLeave);

		const initParticles = () => {
			particles = [];
			const numParticles = Math.min(
				Math.floor((canvas.width * canvas.height) / 12000),
				80,
			);
			for (let i = 0; i < numParticles; i++) {
				particles.push({
					x: Math.random() * canvas.width,
					y: Math.random() * canvas.height,
					size: Math.random() * 2 + 1,
					vx: (Math.random() - 0.5) * 0.4,
					vy: (Math.random() - 0.5) * 0.4,
					baseAlpha: Math.random() * 0.5 + 0.2,
				});
			}
		};

		const draw = () => {
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			for (let i = 0; i < particles.length; i++) {
				let p = particles[i];

				p.x += p.vx;
				p.y += p.vy;

				if (p.x < 0) p.x = canvas.width;
				if (p.x > canvas.width) p.x = 0;
				if (p.y < 0) p.y = canvas.height;
				if (p.y > canvas.height) p.y = 0;

				const dx = mouse.x - p.x;
				const dy = mouse.y - p.y;
				const distance = Math.sqrt(dx * dx + dy * dy);
				const maxDist = 150;

				if (distance < maxDist) {
					const force = (maxDist - distance) / maxDist;
					p.x -= (dx / distance) * force * 3;
					p.y -= (dy / distance) * force * 3;
				}

				ctx.beginPath();
				ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
				ctx.fillStyle = `rgba(139, 92, 246, ${p.baseAlpha})`;
				ctx.shadowBlur = 12;
				ctx.shadowColor = "rgba(139, 92, 246, 0.8)";
				ctx.fill();
			}

			animationFrameId = requestAnimationFrame(draw);
		};

		syncInitialSize();
		draw();

		return () => {
			resizeObserver?.disconnect();
			window.removeEventListener("resize", scheduleResize);
			window.removeEventListener("scroll", schedulePositionCache);
			window.removeEventListener("mousemove", handleMouseMove);
			window.removeEventListener("mouseout", handleMouseLeave);
			if (resizeFrameId !== null) cancelAnimationFrame(resizeFrameId);
			if (scrollFrameId !== null) cancelAnimationFrame(scrollFrameId);
			cancelAnimationFrame(animationFrameId);
		};
	}, []);

	return (
		<canvas
			ref={canvasRef}
			className="absolute inset-0 pointer-events-none z-0"
		/>
	);
};

export const LaunchInquiryFormSection: React.FC = () => {
	const [formData, setFormData] = useState({
		fullName: "",
		email: "",
		brandName: "",
		category: "Cosmetics",
		stage: "Planning",
	});
	const [errors, setErrors] = useState({ fullName: "", email: "" });
	const [submitError, setSubmitError] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);

	const categories = [
		{
			id: "Cosmetics",
			label: "Cosmetics",
			icon: <Box className="w-3.5 h-3.5" />,
		},
		{
			id: "Nutraceuticals",
			label: "Nutraceuticals",
			icon: <Leaf className="w-3.5 h-3.5" />,
		},
		{
			id: "Ayurveda",
			label: "Ayurveda",
			icon: <Leaf className="w-3.5 h-3.5" />,
		},
		{
			id: "Perfumes",
			label: "Perfumes",
			icon: <Droplets className="w-3.5 h-3.5" />,
		},
	];

	const stages = [
		{
			id: "Idea",
			label: "Idea",
			desc: "Just exploring",
			icon: <Lightbulb className="w-3.5 h-3.5" />,
		},
		{
			id: "Planning",
			label: "Planning",
			desc: "1-3 months",
			icon: <Map className="w-3.5 h-3.5" />,
		},
		{
			id: "Development",
			label: "Development",
			desc: "3-6 months",
			icon: <Wrench className="w-3.5 h-3.5" />,
		},
		{
			id: "Launch Ready",
			label: "Launch Ready",
			desc: "0-3 months",
			icon: <Rocket className="w-3.5 h-3.5" />,
		},
	];

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		let newErrors = { fullName: "", email: "" };
		let hasError = false;
		setSubmitError("");

		if (!formData.fullName.trim()) {
			newErrors.fullName = "Full Name is required";
			hasError = true;
		}
		if (!formData.email.trim()) {
			newErrors.email = "Email is required";
			hasError = true;
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
			newErrors.email = "Please enter a valid email";
			hasError = true;
		}

		setErrors(newErrors);

		if (!hasError) {
			setIsSubmitting(true);
			try {
				const response = await fetch("/api/launch-roadmap-lead", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(formData),
				});

				if (!response.ok) {
					throw new Error("Failed to submit form");
				}

				setIsSubmitting(false);
				setIsSuccess(true);
			} catch (err) {
				setIsSubmitting(false);
				setSubmitError(
					"Something went wrong. Please try again or email us at support@launchveda.com",
				);
			}
		}
	};

	const handleReset = () => {
		setFormData({
			fullName: "",
			email: "",
			brandName: "",
			category: "Cosmetics",
			stage: "Idea",
		});
		setErrors({ fullName: "", email: "" });
		setSubmitError("");
		setIsSuccess(false);
	};

	return (
		<section
			id="launch-plan-form"
			className="relative w-full max-sm:py-10 py-20 lg:py-28 overflow-hidden font-sans"
		>
			{/* Immersive Background: Light to Dark Transition */}
			<div className="absolute inset-0 z-0">
				<div className="absolute inset-0 bg-[#f1f5f9]" />

				{/* Interactive Particles Layer */}
				<InteractiveParticles />

				{/* Soft glowing ambient lights */}
				<div className="absolute top-[30%] left-[10%] w-[500px] h-[500px] rounded-full bg-indigo-200/50 blur-[120px] pointer-events-none" />
				<div className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] rounded-full bg-blue-200/50 blur-[150px] pointer-events-none" />

				{/* Curved Orbit Lines */}
				<svg
					className="absolute top-[20%] left-[30%] w-[800px] h-[800px] pointer-events-none opacity-40"
					viewBox="0 0 800 800"
					fill="none"
				>
					<path
						d="M 0,400 C 300,400 400,300 400,0"
						stroke="url(#paint0_linear)"
						strokeWidth="1.5"
						strokeDasharray="4 4"
					/>
					<circle cx="200" cy="330" r="4" fill="#818cf8" />
					<circle
						cx="200"
						cy="330"
						r="12"
						fill="#818cf8"
						fillOpacity="0.3"
					/>
					<circle cx="330" cy="200" r="4" fill="#c084fc" />
					<circle
						cx="330"
						cy="200"
						r="12"
						fill="#c084fc"
						fillOpacity="0.3"
					/>
					<defs>
						<linearGradient
							id="paint0_linear"
							x1="0"
							y1="400"
							x2="400"
							y2="0"
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="#6366f1" />
							<stop
								offset="1"
								stopColor="#a855f7"
								stopOpacity="0"
							/>
						</linearGradient>
					</defs>
				</svg>
			</div>

			<div className="relative w-full max-w-[1380px] mx-auto px-4 sm:px-8 lg:px-12 z-10">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
					{/* LEFT COLUMN */}
					<div className="flex flex-col pt-8">
						{/* Pill */}
						<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#2146B5]/20 bg-[#2146B5]/5 backdrop-blur-sm text-[10px] font-bold text-[#2146B5] tracking-widest uppercase mb-8 w-fit shadow-sm max-sm:mx-auto">
							<span className="w-3 h-3 text-[#2146B5]">
								⚛
							</span>
							LAUNCH PLATFORM PROTOCOL v6.0
						</div>

						{/* Headline */}
						<GsapTextReveal
							as="h2"
							variant="heading"
							className="text-3xl sm:text-5xl lg:text-[52px] font-extrabold tracking-tight leading-[1.1] mb-6 max-sm:text-center"
						>
							<span className="text-slate-900 block">
								Launch with{" "}
								<span className="text-[#2146B5] mt-1">
									Clarity.
								</span>
							</span>

							<span className="text-slate-900 block">
								Grow with{" "}
								<span className="text-[#2146B5] mt-1">
									Confidence.
								</span>
							</span>
						</GsapTextReveal>

						{/* Paragraph */}
						<GsapTextReveal
							as="p"
							variant="subheading"
							className="text-slate-600 text-[15px] sm:text-base leading-relaxed mb-12 max-sm:mb-0 max-w-md font-medium text-center"
						>
							We turn complexity into a predictable
							roadmap. Get expert-led compliance, category
							strategy, and go-to-market planning —
							tailored to your product and marketplace.
						</GsapTextReveal>

						{/* Feature Cards */}
						<div className="space-y-4 pr-0 lg:pr-12 max-sm:hidden">
							{[
								{
									icon: (
										<ShieldCheck className="w-5 h-5 text-blue-600" />
									),
									title: "Compliance Done Right",
									desc: "CDSCO guidance, regulatory mapping & documentation support.",
									bg: "from-blue-50 to-white",
								},
								{
									icon: (
										<Target className="w-5 h-5 text-violet-600" />
									),
									title: "Category-focused Strategy",
									desc: "Custom market & competitor insights that de-risk your launch.",
									bg: "from-violet-50 to-white",
								},
								{
									icon: (
										<TrendingUp className="w-5 h-5 text-cyan-600" />
									),
									title: "Go-to-Market Execution",
									desc: "Sourcing, branding, channels & marketplace readiness — all in one plan.",
									bg: "from-cyan-50 to-white",
								},
							].map((card, idx) => (
								<div
									key={idx}
									className="group flex items-center justify-between p-5 rounded-2xl border border-slate-200 bg-white/80 backdrop-blur-xl hover:bg-white hover:border-slate-300 transition-all duration-300 shadow-[0_8px_30px_rgba(15,23,42,0.04)] cursor-pointer"
								>
									<div className="flex items-center gap-4">
										<div
											className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.bg} border border-slate-100 flex items-center justify-center shadow-sm`}
										>
											{card.icon}
										</div>
										<div>
											<h4 className="text-slate-900 text-[15px] font-bold tracking-tight mb-0.5">
												{card.title}
											</h4>
											<p className="text-slate-500 text-[13px] leading-snug">
												{card.desc}
											</p>
										</div>
									</div>
									<ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all" />
								</div>
							))}
						</div>
					</div>

					{/* RIGHT COLUMN */}
					<div className="flex flex-col gap-4">
						{/* Form Card */}
						<div className="relative w-full rounded-[24px] border border-blue-500 bg-white p-7 sm:p-9 shadow-[0_20px_60px_-15px_rgba(37,99,235,0.22)] ring-4 ring-blue-100/70 backdrop-blur-2xl">
							<div className="absolute inset-0 rounded-[24px] border border-blue-200/60 pointer-events-none" />

							<GsapTextReveal
								as="h3"
								variant="heading"
								className="text-slate-900 font-bold text-2xl sm:text-[28px] tracking-tight mb-2"
							>
								Get Your Launch Roadmap
							</GsapTextReveal>
							<GsapTextReveal
								as="p"
								variant="text"
								className="text-slate-500 text-[14px] leading-relaxed mb-8"
							>
								Tell us about your product and goals.
								We'll build a custom roadmap tailored
								for you.
							</GsapTextReveal>

							{isSuccess ? (
								<div className="flex flex-col items-center text-center space-y-6 py-8 animate-in fade-in zoom-in duration-500">
									<div className="w-16 h-16 rounded-full bg-emerald-50 border-2 border-emerald-100 flex items-center justify-center mb-2 shadow-sm">
										<span className="text-2xl">
											✅
										</span>
									</div>
									<div>
										<h3 className="text-slate-900 font-bold text-[22px] tracking-tight mb-2">
											Thank you!
										</h3>
										<p className="text-slate-600 text-[15px] leading-relaxed max-w-sm mx-auto font-medium">
											We will get back to you
											within 24 hours.
										</p>
										<p className="text-slate-500 text-[13px] mt-3 max-w-[280px] mx-auto">
											Your launch roadmap
											request has been received
											by the LaunchVeda team.
										</p>
									</div>

									<div className="w-full flex flex-col gap-3 mt-4">
										<button
											onClick={handleReset}
											className="w-full h-12 rounded-xl font-bold text-[14px] text-white flex items-center justify-center gap-2 transition-all duration-300 shadow-[0_10px_25px_rgba(99,102,241,0.3)] hover:shadow-[0_15px_35px_rgba(99,102,241,0.4)] hover:-translate-y-0.5"
											style={{
												background:
													"linear-gradient(135deg, #1E40AF, #3B82F6)",
											}}
										>
											Submit Another Request
										</button>
									</div>
								</div>
							) : (
								<form
									className="space-y-4"
									onSubmit={handleSubmit}
								>
									{submitError && (
										<div className="p-3 text-[13px] text-red-600 bg-red-50 border border-red-100 rounded-xl font-medium">
											{submitError}
										</div>
									)}
									{/* Row 1: Full Name & Work Email */}
									<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
										<div className="space-y-1.5">
											<label className="text-[12px] font-semibold text-slate-700">
												Full Name
											</label>
											<div className="relative">
												<input
													type="text"
													placeholder="John Doe"
													value={
														formData.fullName
													}
													onChange={(
														e,
													) =>
														setFormData(
															{
																...formData,
																fullName:
																	e
																		.target
																		.value,
															},
														)
													}
													className={`w-full h-11 bg-slate-50/50 border ${errors.fullName ? "border-red-400 focus:ring-red-500 focus:border-red-500" : "border-slate-200 focus:border-indigo-500 focus:ring-indigo-500"} rounded-xl pl-10 pr-4 text-[13px] text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-1 transition-all focus:bg-white`}
												/>
												<User
													className={`absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 ${errors.fullName ? "text-red-400" : "text-slate-400"}`}
												/>
											</div>
											{errors.fullName && (
												<p className="text-[11px] text-red-500 font-medium pl-1">
													{
														errors.fullName
													}
												</p>
											)}
										</div>

										<div className="space-y-1.5">
											<label className="text-[12px] font-semibold text-slate-700">
												Work Email
											</label>
											<div className="relative">
												<input
													type="email"
													placeholder="john@yourbrand.com"
													value={
														formData.email
													}
													onChange={(
														e,
													) =>
														setFormData(
															{
																...formData,
																email: e
																	.target
																	.value,
															},
														)
													}
													className={`w-full h-11 bg-slate-50/50 border ${errors.email ? "border-red-400 focus:ring-red-500 focus:border-red-500" : "border-slate-200 focus:border-indigo-500 focus:ring-indigo-500"} rounded-xl pl-10 pr-4 text-[13px] text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-1 transition-all focus:bg-white`}
												/>
												<Mail
													className={`absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 ${errors.email ? "text-red-400" : "text-slate-400"}`}
												/>
											</div>
											{errors.email && (
												<p className="text-[11px] text-red-500 font-medium pl-1">
													{errors.email}
												</p>
											)}
										</div>
									</div>

									{/* Row 2: Product Name & Category Dropdown */}
									<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
										<div className="space-y-1.5">
											<label className="text-[12px] font-semibold text-slate-700">
												Product / Brand Name
												(Optional)
											</label>
											<div className="relative">
												<input
													type="text"
													placeholder="e.g. Aura Botanics"
													value={
														formData.brandName
													}
													onChange={(
														e,
													) =>
														setFormData(
															{
																...formData,
																brandName:
																	e
																		.target
																		.value,
															},
														)
													}
													className="w-full h-11 bg-slate-50/50 border border-slate-200 rounded-xl pl-10 pr-4 text-[13px] text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all focus:bg-white"
												/>
												<Box className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
											</div>
										</div>

										<div className="space-y-1.5">
											<label className="text-[12px] font-semibold text-slate-700">
												Target Category
											</label>
											<div className="relative">
												<select
													value={
														formData.category
													}
													onChange={(
														e,
													) =>
														setFormData(
															{
																...formData,
																category:
																	e
																		.target
																		.value,
															},
														)
													}
													className="w-full h-11 bg-slate-50/50 border border-slate-200 rounded-xl pl-10 pr-10 text-[13px] text-slate-900 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all focus:bg-white appearance-none cursor-pointer font-semibold"
												>
													{categories.map(
														(cat) => (
															<option
																key={
																	cat.id
																}
																value={
																	cat.id
																}
															>
																{
																	cat.label
																}
															</option>
														),
													)}
												</select>
												<Tag className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
												<ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
											</div>
										</div>
									</div>

									{/* Row 3: Launch Stage Dropdown */}
									<div className="space-y-1.5">
										<label className="text-[12px] font-semibold text-slate-700">
											Where are you in your
											launch?
										</label>
										<div className="relative">
											<select
												value={
													formData.stage
												}
												onChange={(e) =>
													setFormData({
														...formData,
														stage: e
															.target
															.value,
													})
												}
												className="w-full h-11 bg-slate-50/50 border border-slate-200 rounded-xl pl-10 pr-10 text-[13px] text-slate-900 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all focus:bg-white appearance-none cursor-pointer font-semibold"
											>
												{stages.map(
													(stage) => (
														<option
															key={
																stage.id
															}
															value={
																stage.id
															}
														>
															{
																stage.label
															}{" "}
															(
															{
																stage.desc
															}
															)
														</option>
													),
												)}
											</select>
											<Rocket className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
											<ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
										</div>
									</div>

									{/* Submit CTA */}
									<div className="pt-2">
										<button
											type="submit"
											disabled={isSubmitting}
											className="w-full h-12 rounded-xl font-bold text-[14px] text-white flex items-center justify-center gap-2 transition-all duration-300 shadow-[0_10px_25px_rgba(99,102,241,0.3)] hover:shadow-[0_15px_35px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:shadow-[0_10px_25px_rgba(99,102,241,0.3)]"
											style={{
												background:
													"linear-gradient(135deg, #1E40AF, #3B82F6)",
											}}
										>
											{isSubmitting ? (
												<span className="flex items-center gap-2">
													<svg
														className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
														xmlns="http://www.w3.org/2000/svg"
														fill="none"
														viewBox="0 0 24 24"
													>
														<circle
															className="opacity-25"
															cx="12"
															cy="12"
															r="10"
															stroke="currentColor"
															strokeWidth="4"
														></circle>
														<path
															className="opacity-75"
															fill="currentColor"
															d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
														></path>
													</svg>
													Submitting your
													request...
												</span>
											) : (
												<>
													<span>
														Request My
														Launch
														Roadmap
													</span>
													<ArrowRight className="w-4 h-4" />
												</>
											)}
										</button>
										<div className="text-center mt-4">
											<p className="text-[11px] text-slate-500 font-medium tracking-wide">
												Free roadmap &bull;
												No commitment &bull;
												Expert support
											</p>
										</div>
									</div>
								</form>
							)}
						</div>

						{/* Bottom Trust Strip */}
						<div className="flex flex-col sm:flex-row items-center justify-between p-4 sm:p-5 rounded-[20px] border border-slate-200 bg-white/80 backdrop-blur-xl shadow-sm gap-4 max-sm:hidden">
							<div className="flex items-center gap-3">
								<div className="w-10 h-10 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center">
									<ShieldAlert className="w-5 h-5 text-indigo-600" />
								</div>
								<span className="text-slate-700 text-[13px] font-semibold leading-tight max-w-[80px]">
									Compliance
									<br />
									Support
								</span>
							</div>
							<div className="hidden sm:block w-px h-10 bg-slate-200" />
							<div className="flex items-center gap-3">
								<div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center">
									<FileCheck className="w-5 h-5 text-blue-600" />
								</div>
								<span className="text-slate-700 text-[13px] font-semibold leading-tight max-w-[90px]">
									Manufacturer
									<br />
									Guidance
								</span>
							</div>
							<div className="hidden sm:block w-px h-10 bg-slate-200" />
							<div className="flex items-center gap-3">
								<div className="w-10 h-10 rounded-lg bg-violet-50 border border-violet-100 flex items-center justify-center">
									<ClipboardList className="w-5 h-5 text-violet-600" />
								</div>
								<span className="text-slate-700 text-[13px] font-semibold leading-tight max-w-[80px]">
									Roadmap
									<br />
									Review
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default LaunchInquiryFormSection;
