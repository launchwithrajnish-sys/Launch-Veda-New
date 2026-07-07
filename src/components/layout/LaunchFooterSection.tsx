"use client";

import React from "react";
import { motion } from "motion/react";
import {
	ArrowRight,
	Box,
	Tag,
	Users,
	MapPin,
	Mail,
	Phone,
	Rocket,
} from "lucide-react";
import GsapTextReveal from "../ui/GsapTextReveal";

const SocialIcon = ({
	href,
	ariaLabel,
	children,
}: {
	href: string;
	ariaLabel: string;
	children: React.ReactNode;
}) => (
	<a
		href={href}
		target="_blank"
		rel="noopener noreferrer"
		aria-label={ariaLabel}
		className="w-10 h-10 rounded-xl bg-white border border-slate-100/80 shadow-[0_4px_10px_rgba(0,0,0,0.03)] flex items-center justify-center hover:-translate-y-1 hover:shadow-[0_8px_16px_rgba(99,102,241,0.08)] transition-all duration-300"
	>
		{children}
	</a>
);

export const LaunchFooterSection: React.FC = () => {
	const [mounted, setMounted] = React.useState(false);

	React.useEffect(() => {
		setMounted(true);
	}, []);

	return (
		<footer
			id="launch-footer"
			className="relative w-full bg-[#f8fafc] text-slate-900 pt-20 pb-8 px-4 sm:px-6 lg:px-8 border-t border-slate-200 overflow-hidden font-sans"
		>
			{/* Background World Map & Glowing Gradients */}
			<div className="absolute inset-0 pointer-events-none z-0">
				<div className="absolute inset-0 bg-gradient-to-br from-white via-[#f8fafc] to-[#f1f5f9]" />

				{/* Soft glowing ambient lights with motion */}
				<motion.div
					animate={{
						opacity: [0.3, 0.6, 0.3],
						scale: [1, 1.05, 1],
					}}
					transition={{
						duration: 8,
						repeat: Infinity,
						ease: "easeInOut",
					}}
					className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full bg-indigo-100/40 blur-[120px]"
				/>
				<motion.div
					animate={{
						opacity: [0.2, 0.5, 0.2],
						scale: [1, 1.1, 1],
					}}
					transition={{
						duration: 10,
						repeat: Infinity,
						ease: "easeInOut",
						delay: 2,
					}}
					className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-fuchsia-100/30 blur-[100px]"
				/>
				<motion.div
					animate={{
						opacity: [0.4, 0.7, 0.4],
						scale: [1, 1.05, 1],
					}}
					transition={{
						duration: 12,
						repeat: Infinity,
						ease: "easeInOut",
						delay: 4,
					}}
					className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-50/50 blur-[100px]"
				/>

				{/* Floating Particles */}
				{mounted &&
					Array.from({ length: 24 }).map((_, i) => (
						<motion.div
							key={`particle-${i}`}
							className="absolute rounded-full bg-indigo-400/30"
							style={{
								width: Math.random() * 4 + 2 + "px",
								height: Math.random() * 4 + 2 + "px",
								left: Math.random() * 100 + "%",
								top: Math.random() * 100 + "%",
							}}
							animate={{
								y: [0, Math.random() * -80 - 40],
								x: [0, (Math.random() - 0.5) * 40],
								opacity: [0, 0.8, 0],
							}}
							transition={{
								duration: Math.random() * 4 + 4,
								repeat: Infinity,
								ease: "linear",
								delay: Math.random() * 5,
							}}
						/>
					))}

				{/* Orbit Lines */}
				<svg
					className="absolute top-[-10%] right-[-5%] w-[1000px] h-[1000px] opacity-30"
					viewBox="0 0 1000 1000"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<circle
						cx="800"
						cy="200"
						r="600"
						stroke="url(#paint0_linear)"
						strokeWidth="1"
						strokeDasharray="4 6"
					/>
					<circle
						cx="800"
						cy="200"
						r="450"
						stroke="url(#paint1_linear)"
						strokeWidth="1"
					/>
					<circle
						cx="800"
						cy="200"
						r="300"
						stroke="url(#paint2_linear)"
						strokeWidth="1"
					/>

					{/* Glowing Dots */}
					<circle cx="200" cy="200" r="4" fill="#818cf8" />
					<circle
						cx="200"
						cy="200"
						r="12"
						fill="#818cf8"
						fillOpacity="0.2"
					/>

					<circle cx="350" cy="200" r="3" fill="#c084fc" />
					<circle
						cx="350"
						cy="200"
						r="10"
						fill="#c084fc"
						fillOpacity="0.2"
					/>

					<circle cx="500" cy="500" r="3" fill="#3b82f6" />
					<circle
						cx="500"
						cy="500"
						r="10"
						fill="#3b82f6"
						fillOpacity="0.2"
					/>

					<defs>
						<linearGradient
							id="paint0_linear"
							x1="200"
							y1="200"
							x2="800"
							y2="800"
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="#6366f1" />
							<stop
								offset="1"
								stopColor="#a855f7"
								stopOpacity="0"
							/>
						</linearGradient>
						<linearGradient
							id="paint1_linear"
							x1="350"
							y1="200"
							x2="800"
							y2="650"
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="#c084fc" />
							<stop
								offset="1"
								stopColor="#3b82f6"
								stopOpacity="0"
							/>
						</linearGradient>
						<linearGradient
							id="paint2_linear"
							x1="500"
							y1="200"
							x2="800"
							y2="500"
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="#3b82f6" />
							<stop
								offset="1"
								stopColor="#6366f1"
								stopOpacity="0"
							/>
						</linearGradient>
					</defs>
				</svg>

				{/* Dotted Map Pattern (Simulated with CSS radial-gradient) */}
				<div
					className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:24px_24px] mask-image:linear-gradient(to_bottom,white,transparent)"
					style={{
						WebkitMaskImage:
							"radial-gradient(ellipse at center, black 30%, transparent 70%)",
					}}
				/>
			</div>

			<div className="relative w-full max-w-[1240px] mx-auto z-10 flex flex-col gap-16">
				{/* Top Area: Brand & Floating Card */}
				<div className="flex flex-col lg:flex-row justify-between items-center lg:items-center gap-10">
					{/* Brand Info & Socials */}
					<div className="flex flex-col items-center lg:items-start gap-6 max-w-md w-full text-center lg:text-left">
						<div className="flex items-center gap-2">
							<img
								src="/logo-full.png"
								alt="logo-full"
								width={288}
								height={78}
								className="w-72"
							/>
						</div>

						<GsapTextReveal
							as="p"
							variant="text"
							className="text-slate-600 text-[15px] font-medium leading-relaxed"
						>
							Launch Veda is India’s No.1 Product Launch
							Company helping founders launch Perfume, Cosmetic,
							Ayurveda, and Nutraceutical brands with
							end-to-end execution support.
						</GsapTextReveal>

						<div className="grid grid-cols-4 gap-3 w-fit sm:flex sm:items-center sm:flex-wrap">
							<SocialIcon
								href="https://www.instagram.com/launchveda.in/"
								ariaLabel="LaunchVeda Instagram"
							>
								<svg
									width="20"
									height="20"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="text-pink-500"
								>
									<rect
										x="2"
										y="2"
										width="20"
										height="20"
										rx="5"
										ry="5"
									></rect>
									<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
									<line
										x1="17.5"
										y1="6.5"
										x2="17.51"
										y2="6.5"
									></line>
								</svg>
							</SocialIcon>
							<SocialIcon
								href="https://www.facebook.com/people/LaunchVeda-Indias-Best-Product-Launch-Solution/61590478586919/"
								ariaLabel="LaunchVeda Facebook"
							>
								<svg
									width="20"
									height="20"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="text-blue-600"
								>
									<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
								</svg>
							</SocialIcon>
							<SocialIcon
								href="https://in.linkedin.com/launchveda"
								ariaLabel="LaunchVeda LinkedIn"
							>
								<svg
									width="20"
									height="20"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="text-sky-600"
								>
									<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
									<rect
										x="2"
										y="9"
										width="4"
										height="12"
									></rect>
									<circle
										cx="4"
										cy="4"
										r="2"
									></circle>
								</svg>
							</SocialIcon>
							<SocialIcon
								href="https://x.com/launchveda"
								ariaLabel="LaunchVeda X"
							>
								<svg
									width="18"
									height="18"
									viewBox="0 0 24 24"
									fill="currentColor"
									className="text-slate-800"
								>
									<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
								</svg>
							</SocialIcon>
							<SocialIcon
								href="https://www.threads.com/@launchveda"
								ariaLabel="LaunchVeda Threads"
							>
								<svg
									width="18"
									height="18"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="text-slate-800"
								>
									<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
									<path d="M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C13.882 8 15.4593 9.30062 15.8906 11.0851" />
								</svg>
							</SocialIcon>
							<SocialIcon
								href="https://in.pinterest.com/launchveda"
								ariaLabel="LaunchVeda Pinterest"
							>
								<svg
									width="20"
									height="20"
									viewBox="0 0 24 24"
									fill="currentColor"
									className="text-red-600"
								>
									<path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.367 18.624 0 12.017 0z" />
								</svg>
							</SocialIcon>
							<SocialIcon
								href="https://www.behance.net/launchveda"
								ariaLabel="LaunchVeda Behance"
							>
								<svg
									width="22"
									height="22"
									viewBox="0 0 24 24"
									fill="currentColor"
									className="text-blue-500"
								>
									<path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-15.144h6.616c2.596 0 4.714.877 4.714 3.96 0 1.954-1.196 3.018-2.257 3.424 1.341.258 2.766 1.455 2.766 3.864 0 3.327-2.463 3.896-5.373 3.896zm-3.864-12.784v4.44h2.511c1.233 0 2.18-.328 2.18-2.203 0-1.733-.949-2.237-2.145-2.237h-2.546zm0 6.64v4.619h2.898c1.554 0 2.502-.456 2.502-2.33 0-2.03-1.04-2.289-2.585-2.289h-2.815z" />
								</svg>
							</SocialIcon>
							<SocialIcon
								href="https://www.youtube.com/@LaunchVeda"
								ariaLabel="LaunchVeda YouTube"
							>
								<svg
									width="22"
									height="22"
									viewBox="0 0 24 24"
									fill="currentColor"
									className="text-red-600"
								>
									<path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
								</svg>
							</SocialIcon>
						</div>
					</div>

					{/* Floating Mini Card */}
					<div className="flex-shrink-0 bg-white/70 backdrop-blur-xl border border-white p-5 rounded-[24px] shadow-[0_20px_40px_-15px_rgba(99,102,241,0.15)] flex items-center gap-4 min-w-[280px] mx-auto lg:mx-0">
						<div className="w-12 h-12 rounded-full border border-indigo-100 bg-indigo-50/50 flex items-center justify-center flex-shrink-0">
							<Rocket className="w-5 h-5 text-indigo-500" />
						</div>
						<p className="text-slate-700 font-semibold text-[14px] leading-snug">
							Building tomorrow's
							<br />
							brands, today.
						</p>
					</div>
				</div>

				{/* Middle Area: Links & Contact */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
					{/* Link Columns */}
					<div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
						{/* Services */}
						<div className="space-y-6 order-1">
							<div className="flex items-center gap-2 mb-2">
								<div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center">
									<Box className="w-4 h-4 text-indigo-600" />
								</div>
								<h4 className="text-slate-900 font-bold text-[15px]">
									Services
								</h4>
							</div>
							<ul className="space-y-3.5">
								{[
									{
										label: "Brand Strategy",
										href: "/services/brand-strategy",
									},
									{
										label: "Product Formulation",
										href: "/services/product-formulation",
									},
									{
										label: "Manufacturing Support",
										href: "/services/manufacturing-support",
									},
								].map((link) => (
									<li key={link.label}>
										<a
											href={link.href}
											className="text-slate-600 hover:text-indigo-600 font-medium text-[14px] flex items-center gap-1.5 transition-colors group"
										>
											<ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-indigo-500" />
											<span className="group-hover:translate-x-1 transition-transform duration-300">
												{link.label}
											</span>
										</a>
									</li>
								))}
							</ul>
						</div>

						{/* Categories */}
						<div className="space-y-6 order-3 col-span-2">
							<div className="flex items-center gap-2 mb-2">
								<div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center">
									<Tag className="w-4 h-4 text-indigo-600" />
								</div>
								<h4 className="text-slate-900 font-bold text-[15px]">
									Categories
								</h4>
							</div>
							<ul className="space-y-3.5">
								{[
									{
										label: "Perfume Brand Launch",
										href: "/perfume-brand-launch",
									},
									{
										label: "Ayurveda Brand Launch",
										href: "/ayurveda-brand-launch",
									},
									{
										label: "Cosmetic Brand Launch",
										href: "/cosmetic-brand-launch",
									},
									{
										label: "Nutraceutical Brand Launch",
										href: "/nutraceutical-brand-launch",
									},
								].map((link) => (
									<li key={link.label}>
										<a
											href={link.href}
											className="text-slate-600 hover:text-indigo-600 font-medium text-[14px] flex items-center gap-1.5 transition-colors group"
										>
											<ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-indigo-500" />
											<span className="group-hover:translate-x-1 transition-transform duration-300">
												{link.label}
											</span>
										</a>
									</li>
								))}
							</ul>
						</div>

						{/* Company */}
						<div className="space-y-6 order-2">
							<div className="flex items-center gap-2 mb-2">
								<div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center">
									<Users className="w-4 h-4 text-indigo-600" />
								</div>
								<h4 className="text-slate-900 font-bold text-[15px]">
									Company
								</h4>
							</div>
							<ul className="space-y-3.5">
								{[
									{ label: "About", href: "/about" },
									{
										label: "Process",
										href: "/process",
									},
									{
										label: "Contact",
										href: "/contact",
									},
								].map((link) => (
									<li key={link.label}>
										<a
											href={link.href}
											className="text-slate-600 hover:text-indigo-600 font-medium text-[14px] flex items-center gap-1.5 transition-colors group"
										>
											<ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-indigo-500" />
											<span className="group-hover:translate-x-1 transition-transform duration-300">
												{link.label}
											</span>
										</a>
									</li>
								))}
							</ul>
						</div>
					</div>

					{/* Contact Details */}
					<div className="lg:col-span-4 flex flex-col justify-start lg:items-end">
						<div className="space-y-5 lg:pr-8">
							<div className="flex items-center gap-4">
								<div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
									<Mail className="w-4 h-4" />
								</div>
								<a
									href="mailto:support@launchveda.com"
									className="text-slate-700 font-medium text-[14px] hover:text-blue-600 transition-colors"
								>
									support@launchveda.com
								</a>
							</div>
							<div className="flex items-start gap-4">
								<div className="w-10 h-10 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 flex-shrink-0 mt-0.5">
									<MapPin className="w-4 h-4" />
								</div>
								<a
									href="https://maps.app.goo.gl/GHhdqJZHcLLQa3R37"
									target="_blank"
									rel="noopener noreferrer"
									className="text-slate-700 font-medium text-[14px] leading-relaxed hover:text-indigo-600 transition-colors"
								>
									Tower T3, 221, 2nd Floor, Golden I,
									Greater Noida West, Uttar Pradesh –
									201308, India
								</a>
							</div>
						</div>
					</div>
				</div>

				{/* Bottom Bar */}
				<div
					className="
        
        border-t border-slate-200/80 flex flex-col md:flex-row items-center justify-between gap-4"
				>
					<p className="text-slate-500 font-medium text-[13px]">
						LaunchVeda — A unit of Banega Brand Co.
					</p>

					<p className="text-slate-500 font-medium text-[13px]">
						© 2024 LaunchVeda. All rights reserved.
					</p>

					<div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-3 text-[13px] text-slate-500 font-medium md:justify-end">
						<a
							href="/privacy-policy"
							className="hover:text-indigo-600 transition-colors"
						>
							Privacy Policy
						</a>
						<span className="text-slate-300">|</span>
						<a
							href="/terms-of-service"
							className="hover:text-indigo-600 transition-colors"
						>
							Terms & Conditions
						</a>
						<span className="text-slate-300">|</span>
						<a
							href="/sitemap.xml"
							className="hover:text-indigo-600 transition-colors"
						>
							Sitemap
						</a>
					</div>
				</div>
			</div>

			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@graph": [
							{
								"@type": "Organization",
								"@id": "https://launchveda.com/#organization",
								name: "LaunchVeda",
								legalName:
									"LaunchVeda — A unit of Banega Brand Co.",
								url: "https://launchveda.com",
								logo: "https://launchveda.com/logo-full.png",
								description:
									"LaunchVeda helps founders launch Perfume, Ayurveda, Cosmetic, Nutraceutical and D2C product brands in India with strategy, formulation direction, manufacturing support, packaging, compliance, website, marketplace and growth execution.",
								email: "support@launchveda.com",
								telephone: "+918796300199",
								areaServed: {
									"@type": "Country",
									name: "India",
								},
								knowsAbout: [
									"Product launch strategy",
									"Brand strategy",
									"Product formulation",
									"Manufacturing support",
									"Packaging and labeling",
									"Marketplace launch",
									"advanced growth marketing",
								],
								sameAs: [
									"https://www.facebook.com/people/LaunchVeda-Indias-Best-Product-Launch-Solution/61590478586919/",
									"https://www.instagram.com/launchveda.in/",
									"https://in.linkedin.com/launchveda",
									"https://x.com/launchveda",
									"https://www.threads.com/@launchveda",
									"https://in.pinterest.com/launchveda",
									"https://www.behance.net/launchveda",
									"https://www.youtube.com/@LaunchVeda",
								],
							},
							{
								"@type": "LocalBusiness",
								"@id": "https://launchveda.com/#localbusiness",
								name: "LaunchVeda",
								url: "https://launchveda.com",
								image: "https://launchveda.com/background_image.png",
								email: "support@launchveda.com",
								telephone: "+918796300199",
								parentOrganization: {
									"@id": "https://launchveda.com/#organization",
								},
								address: {
									"@type": "PostalAddress",
									streetAddress:
										"Tower T3, 221, 2nd Floor, Golden I, Noida Extension",
									addressLocality:
										"Greater Noida West",
									addressRegion: "Uttar Pradesh",
									postalCode: "201308",
									addressCountry: "IN",
								},
							},
						],
					}),
				}}
			/>
		</footer>
	);
};

export default LaunchFooterSection;
