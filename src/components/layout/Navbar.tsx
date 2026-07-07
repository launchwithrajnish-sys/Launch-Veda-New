"use client";

import {
	motion,
	AnimatePresence,
	useScroll,
	useMotionValueEvent,
} from "motion/react";
import { Phone, Mail, Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
	const [isHidden, setIsHidden] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const pathname = usePathname();

	const { scrollY } = useScroll();

	useMotionValueEvent(scrollY, "change", () => {
		// Keep navbar visible at all times (fixed positioning only)
		setIsHidden(false);
	});

	const containerVariants = {
		hidden: { opacity: 0, y: -50 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
				ease: [0.22, 1, 0.36, 1],
			},
		},
		hiddenScroll: {
			opacity: 0,
			y: -120,
			transition: {
				duration: 0.35,
				ease: [0.22, 1, 0.36, 1],
			},
		},
	} as const;

	const linkHoverVariants = {
		hover: { scale: 1.05, opacity: 1, transition: { duration: 0.2 } },
	} as const;

	const btnHoverVariants = {
		hover: {
			y: -2,
			boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
			transition: { duration: 0.2, ease: "easeOut" },
		},
	} as const;

	const handleCtaClick = () => {
		setIsMenuOpen(false);
		const element = document.getElementById("launch-plan-form");
		if (element) {
			element.scrollIntoView({ behavior: "smooth", block: "start" });
		} else {
			window.location.href = "/#launch-plan-form";
		}
	};

	const navLinks = [
		{ name: "Home", href: "/" },
		{ name: "Services", href: "/services" },
		{ name: "Process", href: "/process" },
		{ name: "About Us", href: "/about" },
		{ name: "Contact", href: "/contact" },
	];

	return (
		<>
			<motion.header
				id="navbar-container"
				className="w-full max-w-[1380px] mx-auto pt-3 sm:pt-4 px-4 sm:px-8 lg:px-12 z-50 fixed top-0 left-0 right-0 will-change-transform"
				initial="hidden"
				animate={isHidden ? "hiddenScroll" : "visible"}
				variants={containerVariants}
			>
				<div
					id="navbar-inner"
					style={{
						backgroundColor: "rgba(18, 30, 80, 0.45)",
						border: "1px solid rgba(255, 255, 255, 0.18)",
						boxShadow: "0 10px 32px rgba(0, 0, 0, 0.12)",
					}}
					className="w-full h-[58px] px-6 rounded-[22px] flex items-center justify-between backdrop-blur-md"
				>
					{/* Left: Brand Logo */}
					<a
						href="/"
						id="brand-logo"
						className="flex items-center gap-2.5 cursor-pointer"
					>
						<div
							id="logo-icon-container"
							className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-sm relative overflow-hidden"
						>
							<img
								src="/icon-small.png"
								alt="logo"
								width={32}
								height={32}
							/>
						</div>
						<div
							id="logo-text"
							className="flex items-center justify-center select-none"
						>
							<img
								src="/logo-white.png"
								alt="logo-text"
								width={96}
								height={25}
								className="w-24"
							/>
						</div>
					</a>

					{/* Center Nav Links */}
					<nav
						id="nav-links"
						className="hidden md:flex items-center gap-8"
					>
						{navLinks.map((link) => {
							const isActive = pathname === link.href;
							return (
								<motion.a
									key={link.name}
									id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, "")}`}
									href={link.href}
									className={`text-sm font-semibold transition-opacity py-1 relative ${
										isActive
											? "text-white opacity-100 underline decoration-white underline-offset-8 decoration-2"
											: "text-white hover:opacity-100 opacity-85"
									}`}
									whileHover="hover"
									variants={linkHoverVariants}
								>
									{link.name}
								</motion.a>
							);
						})}
					</nav>

					{/* Right Actions */}
					<div
						id="nav-actions"
						className="flex items-center gap-2 sm:gap-3"
					>
						<motion.a
							id="nav-get-launch"
							href="/contact"
							className="hidden sm:flex h-[38px] px-4 sm:px-5 bg-white text-[#121e50] font-bold text-xs sm:text-sm rounded-full items-center justify-center cursor-pointer hover:bg-slate-50 transition-colors"
							whileHover="hover"
							variants={btnHoverVariants}
						>
							Get Launch
						</motion.a>

						<motion.a
							id="nav-phone-btn"
							href="tel:+918796300199"
							className="hidden sm:flex w-[38px] h-[38px] bg-white rounded-full items-center justify-center cursor-pointer text-[#121e50]"
							whileHover="hover"
							variants={btnHoverVariants}
						>
							<Phone
								className="w-4 h-4 text-[#121e50]"
								strokeWidth={2.5}
							/>
						</motion.a>

						<motion.a
							id="nav-mail-btn"
							href="mailto:support@launchveda.com"
							className="hidden sm:flex w-[38px] h-[38px] bg-white rounded-full items-center justify-center cursor-pointer text-[#121e50]"
							whileHover="hover"
							variants={btnHoverVariants}
						>
							<Mail
								className="w-4 h-4 text-[#121e50]"
								strokeWidth={2.5}
							/>
						</motion.a>

						{/* Mobile Menu Button */}
						<button
							id="nav-mobile-toggle"
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className="w-[38px] h-[38px] rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white cursor-pointer md:hidden hover:bg-white/20 transition-colors"
							aria-label="Toggle navigation menu"
						>
							{isMenuOpen ? (
								<X className="w-5 h-5" />
							) : (
								<Menu className="w-5 h-5" />
							)}
						</button>
					</div>
				</div>
			</motion.header>

			{/* Mobile Drawer Overlay */}
			<AnimatePresence>
				{isMenuOpen && (
					<motion.div
						id="mobile-drawer-overlay"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.2 }}
						className="fixed inset-0 bg-[#061033]/90 backdrop-blur-lg z-40 md:hidden flex flex-col justify-center px-6"
					>
						{/* Marquee keyframes */}
						<style>{`
              @keyframes nav-marquee {
                from { transform: translateX(0); }
                to   { transform: translateX(-50%); }
              }
              .nav-marquee-track {
                animation: nav-marquee 16s linear infinite;
                will-change: transform;
              }
            `}</style>

						<div className="flex flex-col gap-6 text-center">
							{navLinks.map((link, idx) => {
								const isActive = pathname === link.href;
								return (
									<motion.a
										key={link.name}
										href={link.href}
										id={`mobile-nav-link-${link.name.toLowerCase().replace(/\s+/g, "")}`}
										initial={{
											opacity: 0,
											y: 15,
										}}
										animate={{ opacity: 1, y: 0 }}
										transition={{
											delay: idx * 0.05 + 0.1,
											duration: 0.4,
										}}
										onClick={() =>
											setIsMenuOpen(false)
										}
										className={`text-2xl font-bold tracking-tight py-2 border-b border-white/10 ${
											isActive
												? "text-white underline decoration-white underline-offset-8 decoration-2"
												: "text-white opacity-85"
										}`}
									>
										{link.name}
									</motion.a>
								);
							})}

							<motion.div
								initial={{ opacity: 0, y: 15 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{
									delay:
										navLinks.length * 0.05 + 0.1,
									duration: 0.4,
								}}
								className="mt-5 mx-auto w-full max-w-[340px] rounded-[24px] border border-white/12 bg-white/[0.08] p-3 shadow-[0_20px_55px_rgba(0,0,0,0.24)] backdrop-blur-xl"
							>
								<a
									id="mobile-nav-get-launch"
									href="/contact"
									onClick={() => setIsMenuOpen(false)}
									style={{
										background:
											"linear-gradient(135deg, #D71912 0%, #FF8A00 100%)",
									}}
									className="h-[54px] w-full rounded-[18px] text-white font-extrabold text-[15px] flex items-center justify-center cursor-pointer shadow-[0_16px_32px_rgba(215,25,18,0.28)] transition-all duration-200 active:scale-[0.98]"
								>
									Get Launch
								</a>
								<div className="mt-3 grid grid-cols-2 gap-2.5">
									<a
										id="mobile-nav-phone-btn"
										href="tel:+918796300199"
										onClick={() => setIsMenuOpen(false)}
										className="h-[58px] rounded-[16px] border border-white/10 bg-white/[0.12] text-white flex items-center gap-3 px-3 text-left cursor-pointer shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] transition-all duration-200 active:scale-[0.98]"
										aria-label="Call LaunchVeda"
									>
										<span className="w-9 h-9 rounded-full bg-white text-[#121e50] flex items-center justify-center shrink-0">
											<Phone
												className="w-4 h-4 text-[#121e50]"
												strokeWidth={2.5}
											/>
										</span>
										<span className="min-w-0">
											<span className="block text-[9px] uppercase tracking-[0.14em] text-white/45 font-extrabold leading-none">
												Call
											</span>
											<span className="block text-[12px] font-bold text-white leading-tight mt-1">
												Expert
											</span>
										</span>
									</a>
									<a
										id="mobile-nav-mail-btn"
										href="mailto:support@launchveda.com"
										onClick={() => setIsMenuOpen(false)}
										className="h-[58px] rounded-[16px] border border-white/10 bg-white/[0.12] text-white flex items-center gap-3 px-3 text-left cursor-pointer shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] transition-all duration-200 active:scale-[0.98]"
										aria-label="Email LaunchVeda"
									>
										<span className="w-9 h-9 rounded-full bg-white text-[#121e50] flex items-center justify-center shrink-0">
											<Mail
												className="w-4 h-4 text-[#121e50]"
												strokeWidth={2.5}
											/>
										</span>
										<span className="min-w-0">
											<span className="block text-[9px] uppercase tracking-[0.14em] text-white/45 font-extrabold leading-none">
												Email
											</span>
											<span className="block text-[12px] font-bold text-white leading-tight mt-1">
												Support
											</span>
										</span>
									</a>
								</div>
							</motion.div>
						</div>

						{/* Marquee strip — bottom of overlay */}
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.35, duration: 0.5 }}
							className="absolute bottom-10 left-0 right-0 overflow-hidden select-none"
							style={{
								borderTop:
									"1px solid rgba(255,255,255,0.08)",
								paddingTop: "14px",
							}}
						>
							{/* Fade edges */}
							<div className="absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-[#061033] to-transparent z-10 pointer-events-none" />
							<div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-[#061033] to-transparent z-10 pointer-events-none" />
							<div className="nav-marquee-track flex items-center gap-0 w-max">
								{[
									{ name: "Perfume" },
									{ name: "Cosmetics & Skincare" },
									{ name: "Modern Ayurveda" },
									{ name: "Nutraceuticals" },
									{ name: "Perfume" },
									{ name: "Cosmetics & Skincare" },
									{ name: "Modern Ayurveda" },
									{ name: "Nutraceuticals" },
								].map((cat, idx) => (
									<div
										key={idx}
										className="flex items-center gap-4 px-5 shrink-0"
									>
										<span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-white/50 whitespace-nowrap">
											{cat.name}
										</span>
										<span className="w-1.5 h-1.5 rounded-full bg-red-500/70 shrink-0" />
									</div>
								))}
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
