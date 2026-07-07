"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
	Phone,
	Mail,
	MapPin,
	MessageCircle,
	Check,
	ChevronDown,
	Sparkles,
	Rocket,
	ShieldCheck,
	Layers,
	Target,
	TrendingUp,
	ArrowRight,
	Bot,
	MailCheck,
	HelpCircle,
	Map,
} from "lucide-react";
import SEOManager from "../../components/seo/SEOManager";
import Navbar from "../../components/layout/Navbar";
import LaunchFooterSection from "../../components/layout/LaunchFooterSection";

interface FAQItem {
	question: string;
	answer: string;
}

const FAQS_DATA: FAQItem[] = [
	{
		question: "Can I contact Launch Veda if I only have an idea?",
		answer: "Yes. You can contact us even if you are at the idea stage. Our team can help you understand category selection, product planning, budget, and launch roadmap.",
	},
	{
		question: "Which categories does Launch Veda support?",
		answer: "Launch Veda supports Perfume, Cosmetic, Ayurveda, and Nutraceutical brand launches with end-to-end execution support.",
	},
	{
		question: "Do you help with manufacturer selection?",
		answer: "Yes. We help you connect with suitable manufacturers based on your product category, budget, MOQ, and launch requirement.",
	},
	{
		question: "Do you provide branding and website support?",
		answer: "Yes. We support brand identity, packaging direction, website development, marketplace listing, social media, and launch marketing.",
	},
	{
		question: "How soon will your team respond?",
		answer: "Our team usually responds during working hours. For faster communication, WhatsApp is recommended.",
	},
];

export default function ContactPage() {
	// Form state
	const [formData, setFormData] = useState({
		fullName: "",
		email: "",
		phoneNumber: "",
		category: "Cosmetic / Skincare Brand",
		stage: "I only have an idea",
		budget: "₹10–25 Lakh",
		message: "",
	});

	const [errors, setErrors] = useState({
		fullName: "",
		email: "",
		phoneNumber: "",
	});

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitSuccess, setSubmitSuccess] = useState(false);
	const [submitError, setSubmitError] = useState("");

	// FAQ state
	const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(0);

	// Form validation
	const validateForm = () => {
		let valid = true;
		const newErrors = { fullName: "", email: "", phoneNumber: "" };

		if (!formData.fullName.trim()) {
			newErrors.fullName = "Full name is required";
			valid = false;
		}

		if (!formData.email.trim()) {
			newErrors.email = "Email address is required";
			valid = false;
		} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
			newErrors.email = "Please enter a valid email";
			valid = false;
		}

		if (!formData.phoneNumber.trim()) {
			newErrors.phoneNumber = "Phone/WhatsApp number is required";
			valid = false;
		} else if (!/^[0-9+\s-]{8,15}$/.test(formData.phoneNumber.replace(/\s+/g, ""))) {
			newErrors.phoneNumber = "Please enter a valid phone number";
			valid = false;
		}

		setErrors(newErrors);
		return valid;
	};

	// Form submit
	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!validateForm()) return;

		setIsSubmitting(true);
		setSubmitError("");

		try {
			const res = await fetch("/api/launch-roadmap-lead", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					fullName: formData.fullName,
					email: formData.email,
					phoneNumber: formData.phoneNumber,
					category: formData.category,
					stage: formData.stage,
					budget: formData.budget,
					message: formData.message,
				}),
			});

			if (res.ok) {
				setSubmitSuccess(true);
				setFormData({
					fullName: "",
					email: "",
					phoneNumber: "",
					category: "Cosmetic / Skincare Brand",
					stage: "I only have an idea",
					budget: "₹10–25 Lakh",
					message: "",
				});
			} else {
				const errData = await res.json();
				setSubmitError(errData.error || "Something went wrong. Please try again.");
			}
		} catch (err) {
			setSubmitError("Failed to submit roadmap. Please check your connection.");
		} finally {
			setIsSubmitting(false);
		}
	};

	// Helpers
	const scrollToForm = () => {
		const el = document.getElementById("consultation-form-section");
		if (el) {
			el.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	};

	const discussCategory = (categoryName: string) => {
		setFormData((prev) => ({ ...prev, category: categoryName }));
		scrollToForm();
	};

	return (
		<div className="bg-slate-50 min-h-screen flex flex-col font-sans selection:bg-purple-200 text-slate-800">
			<SEOManager
				title="Contact Launch Veda | India’s No.1 Product Launch Company"
				description="Contact Launch Veda for end-to-end product launch support in India. Get expert guidance for Perfume, Cosmetic, Ayurveda, and Nutraceutical brand launches."
				canonical="https://launchveda.com/contact"
				breadcrumb={[
					{ name: "Home", item: "https://launchveda.com" },
					{ name: "Contact", item: "https://launchveda.com/contact" },
				]}
			/>

			{/* Brand Header */}
			<div className="bg-[#061033] w-full relative z-50">
				<Navbar />
			</div>

			<main className="flex-grow overflow-x-hidden">
				{/* ====================================================
				    SECTION 1 — HERO BANNER
				    ==================================================== */}
				<section className="relative pt-[140px] pb-20 px-6 sm:px-12 md:px-16 max-w-[1380px] mx-auto w-full">
					{/* Soft ambient background vector */}
					<div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-purple-500/5 to-indigo-500/5 blur-[120px] pointer-events-none rounded-full" />

					<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
						{/* Left column info */}
						<div className="lg:col-span-7 space-y-6 text-left">
							{/* Contact Pill */}
							<div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-purple-200 bg-purple-50 text-[11px] font-[800] uppercase tracking-wider text-purple-700 shadow-sm">
								<Sparkles className="w-3.5 h-3.5 text-purple-600 animate-pulse" />
								<span>CONTACT LAUNCH VEDA</span>
							</div>

							<h1 className="text-[#07152B] font-[900] text-4xl sm:text-5xl lg:text-6xl leading-[1.08] tracking-[-0.04em] whitespace-pre-line">
								Contact India’s No.1{"\n"}
								<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
									Product Launch Company
								</span>
							</h1>

							<p className="text-slate-600 font-medium text-base sm:text-lg leading-relaxed max-w-[620px]">
								Have an idea for a Perfume, Cosmetic, Ayurveda, or Nutraceutical brand? Connect with Launch Veda and get a clear roadmap to move from idea to market-ready product brand.
							</p>

							{/* CTA Rows */}
							<div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
								<button
									onClick={scrollToForm}
									className="w-full sm:w-auto h-[54px] px-8 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-sm tracking-wide shadow-[0_12px_28px_rgba(124,58,237,0.18)] hover:-translate-y-0.5 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
								>
									<span>Book Launch Consultation</span>
									<ArrowRight className="w-4 h-4" />
								</button>
								<a
									href="https://wa.me/918796300199?text=Hi%20LaunchVeda,%20I%20want%20to%20discuss%20my%20brand%20launch%20idea."
									target="_blank"
									rel="noopener noreferrer"
									className="w-full sm:w-auto h-[54px] px-8 rounded-xl border border-slate-200 bg-white hover:border-purple-300 text-slate-700 font-bold text-sm tracking-wide shadow-sm hover:shadow flex items-center justify-center gap-2 transition-all cursor-pointer"
								>
									<MessageCircle className="w-4 h-4 text-emerald-500 fill-emerald-500" />
									<span>WhatsApp Us</span>
								</a>
							</div>
						</div>

						{/* Right column Floating Card */}
						<div className="lg:col-span-5">
							<motion.div
								initial={{ opacity: 0, y: 30 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
								className="w-full rounded-[32px] border border-white bg-white/70 backdrop-blur-xl p-8 shadow-[0_24px_70px_rgba(32,18,58,0.06),inset_0_1px_0_rgba(255,255,255,1)] text-left space-y-6"
							>
								<div>
									<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-[10px] font-extrabold uppercase tracking-widest text-purple-600 mb-3">
										Consultation
									</div>
									<h2 className="text-[#07152B] font-[900] text-2xl tracking-tight leading-tight">
										Launch Consultation
									</h2>
									<p className="text-slate-500 font-semibold text-xs mt-1">
										For founders, startups & businesses
									</p>
								</div>

								{/* Highlights */}
								<div className="space-y-4">
									{[
										"Product launch guidance",
										"Manufacturer & formulation support",
										"Branding & digital launch",
										"Marketplace & marketing roadmap",
									].map((hl, i) => (
										<div key={i} className="flex items-center gap-3">
											<div className="w-6 h-6 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
												<Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" />
											</div>
											<span className="text-slate-600 text-sm font-semibold tracking-tight">
												{hl}
											</span>
										</div>
									))}
								</div>

								{/* Mini Action Button */}
								<button
									onClick={scrollToForm}
									className="w-full h-12 rounded-xl bg-slate-900 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-purple-700 transition-colors shadow-md cursor-pointer"
								>
									<span>Start Your Launch Journey</span>
									<Rocket className="w-4 h-4 text-purple-300" />
								</button>
							</motion.div>
						</div>
					</div>
				</section>

				{/* ====================================================
				    SECTION 2 — CONTACT OPTIONS CARDS
				    ==================================================== */}
				<section className="py-20 bg-white border-y border-slate-200/60 px-6 sm:px-12 md:px-16 max-w-[1380px] mx-auto w-full">
					<div className="text-center space-y-3 max-w-[700px] mx-auto mb-16">
						<h2 className="text-[#07152B] font-[900] text-3xl sm:text-4xl tracking-tight leading-tight">
							Connect With Our Launch Team
						</h2>
						<p className="text-slate-500 font-medium text-sm sm:text-base leading-relaxed">
							Choose the easiest way to reach us. Our team will review your requirement and guide you with the next step.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						{/* Card 1: Call/WhatsApp */}
						<div className="rounded-[24px] border border-slate-100 bg-slate-50 p-6 flex flex-col justify-between items-start text-left hover:-translate-y-1.5 hover:shadow-xl hover:border-purple-200 transition-all duration-300 group">
							<div className="space-y-4 w-full">
								<div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
									<Phone className="w-5 h-5 stroke-[2.2]" />
								</div>
								<div>
									<h3 className="text-[#07152B] font-extrabold text-lg">Call / WhatsApp</h3>
									<p className="text-slate-500 font-semibold text-xs mt-1.5 leading-relaxed">
										Speak directly with our team for quick discussion about your product launch requirement.
									</p>
								</div>
								<p className="text-[#07152B] font-[900] text-lg select-all">
									+91-8796300199
								</p>
							</div>
							<a
								href="https://wa.me/918796300199?text=Hi%20LaunchVeda,%20I%20want%20to%20discuss%20my%20brand%20launch%20idea."
								target="_blank"
								rel="noopener noreferrer"
								className="w-full h-11 rounded-lg border border-slate-200 bg-white hover:border-emerald-300 text-slate-700 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 mt-6 transition-all cursor-pointer shadow-sm"
							>
								<MessageCircle className="w-4 h-4 text-emerald-500 fill-emerald-500" />
								<span>Chat on WhatsApp</span>
							</a>
						</div>

						{/* Card 2: Email */}
						<div className="rounded-[24px] border border-slate-100 bg-slate-50 p-6 flex flex-col justify-between items-start text-left hover:-translate-y-1.5 hover:shadow-xl hover:border-purple-200 transition-all duration-300 group">
							<div className="space-y-4 w-full">
								<div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600">
									<Mail className="w-5 h-5 stroke-[2.2]" />
								</div>
								<div>
									<h3 className="text-[#07152B] font-extrabold text-lg">Email Us</h3>
									<p className="text-slate-500 font-semibold text-xs mt-1.5 leading-relaxed">
										Send your brand idea, business requirement, or proposal-related query to our official email.
									</p>
								</div>
								<a href="mailto:support@launchveda.com" className="text-purple-600 font-[900] text-base hover:underline block break-all">
									support@launchveda.com
								</a>
							</div>
							<a
								href="mailto:support@launchveda.com"
								className="w-full h-11 rounded-lg border border-slate-200 bg-white hover:border-purple-300 text-slate-700 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 mt-6 transition-all cursor-pointer shadow-sm"
							>
								<Mail className="w-4 h-4 text-purple-500" />
								<span>Send Email</span>
							</a>
						</div>

						{/* Card 3: Address */}
						<div className="rounded-[24px] border border-slate-100 bg-slate-50 p-6 flex flex-col justify-between items-start text-left hover:-translate-y-1.5 hover:shadow-xl hover:border-purple-200 transition-all duration-300 group">
							<div className="space-y-4 w-full">
								<div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600">
									<MapPin className="w-5 h-5 stroke-[2.2]" />
								</div>
								<div>
									<h3 className="text-[#07152B] font-extrabold text-lg">Visit Our Office</h3>
									<p className="text-slate-500 font-semibold text-xs mt-1.5 leading-relaxed">
										Meet our team at Launch Veda office for detailed consultation and project discussion.
									</p>
								</div>
								<p className="text-slate-700 font-medium text-xs leading-relaxed">
									Tower T3, 221, 2nd Floor, Golden I, Noida Extension, Greater Noida West, Uttar Pradesh 201308, India
								</p>
							</div>
							<a
								href="https://maps.app.goo.gl/GHhdqJZHcLLQa3R37"
								target="_blank"
								rel="noopener noreferrer"
								className="w-full h-11 rounded-lg border border-slate-200 bg-white hover:border-orange-300 text-slate-700 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 mt-6 transition-all cursor-pointer shadow-sm"
							>
								<Map className="w-4 h-4 text-orange-500" />
								<span>Get Direction</span>
							</a>
						</div>
					</div>
				</section>

				{/* ====================================================
				    SECTION 3 — CONSULTATION FORM & SUMMARY
				    ==================================================== */}
				<section id="consultation-form-section" className="py-20 px-6 sm:px-12 md:px-16 max-w-[1380px] mx-auto w-full scroll-mt-24">
					<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
						{/* Left Form */}
						<div className="lg:col-span-7 text-left space-y-8">
							<div className="space-y-2">
								<h2 className="text-[#07152B] font-[900] text-3xl tracking-tight leading-tight">
									Submit Your Brand Requirement
								</h2>
								<p className="text-slate-500 font-medium text-sm sm:text-base leading-relaxed">
									Tell us about your idea, category, budget, and current stage. This helps our team understand your requirement and prepare a better launch approach for you.
								</p>
							</div>

							<form onSubmit={handleSubmit} className="space-y-5 bg-white p-6 sm:p-8 rounded-[28px] border border-slate-100 shadow-[0_15px_45px_rgba(0,0,0,0.03)]">
								<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
									{/* Name */}
									<div className="space-y-1.5">
										<label className="text-slate-700 font-extrabold text-xs uppercase tracking-wider">Full Name</label>
										<div className="relative">
											<input
												type="text"
												placeholder="Enter your full name"
												value={formData.fullName}
												onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
												className={`w-full h-12 px-4 rounded-xl border bg-slate-50 font-medium text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all ${
													errors.fullName ? "border-red-400 focus:ring-red-400" : "border-slate-200"
												}`}
											/>
										</div>
										{errors.fullName && <p className="text-red-500 text-xs font-semibold">{errors.fullName}</p>}
									</div>

									{/* Phone */}
									<div className="space-y-1.5">
										<label className="text-slate-700 font-extrabold text-xs uppercase tracking-wider">Phone Number</label>
										<input
											type="tel"
											placeholder="Enter your WhatsApp number"
											value={formData.phoneNumber}
											onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
											className={`w-full h-12 px-4 rounded-xl border bg-slate-50 font-medium text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all ${
												errors.phoneNumber ? "border-red-400 focus:ring-red-400" : "border-slate-200"
											}`}
										/>
										{errors.phoneNumber && <p className="text-red-500 text-xs font-semibold">{errors.phoneNumber}</p>}
									</div>
								</div>

								{/* Email */}
								<div className="space-y-1.5">
									<label className="text-slate-700 font-extrabold text-xs uppercase tracking-wider">Email Address</label>
									<input
										type="email"
										placeholder="Enter your email address"
										value={formData.email}
										onChange={(e) => setFormData({ ...formData, email: e.target.value })}
										className={`w-full h-12 px-4 rounded-xl border bg-slate-50 font-medium text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all ${
											errors.email ? "border-red-400 focus:ring-red-400" : "border-slate-200"
										}`}
									/>
									{errors.email && <p className="text-red-500 text-xs font-semibold">{errors.email}</p>}
								</div>

								<div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
									{/* Category */}
									<div className="space-y-1.5">
										<label className="text-slate-700 font-extrabold text-xs uppercase tracking-wider">Brand Category</label>
										<div className="relative">
											<select
												value={formData.category}
												onChange={(e) => setFormData({ ...formData, category: e.target.value })}
												className="w-full h-12 px-3 rounded-xl border border-slate-200 bg-slate-50 font-semibold text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all cursor-pointer"
											>
												<option value="Perfume Brand">Perfume Brand</option>
												<option value="Cosmetic / Skincare Brand">Cosmetic / Skincare Brand</option>
												<option value="Ayurveda Brand">Ayurveda Brand</option>
												<option value="Nutraceutical Brand">Nutraceutical Brand</option>
												<option value="Other">Other</option>
											</select>
										</div>
									</div>

									{/* Stage */}
									<div className="space-y-1.5">
										<label className="text-slate-700 font-extrabold text-xs uppercase tracking-wider">Current Stage</label>
										<select
											value={formData.stage}
											onChange={(e) => setFormData({ ...formData, stage: e.target.value })}
											className="w-full h-12 px-3 rounded-xl border border-slate-200 bg-slate-50 font-semibold text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all cursor-pointer"
										>
											<option value="I only have an idea">I only have an idea</option>
											<option value="I need product planning">I need product planning</option>
											<option value="I need manufacturer support">I need manufacturer support</option>
											<option value="I need branding & packaging">I need branding & packaging</option>
											<option value="I need website & marketing">I need website & marketing</option>
											<option value="Product is ready, need launch support">Product is ready, need launch support</option>
										</select>
									</div>

									{/* Budget */}
									<div className="space-y-1.5">
										<label className="text-slate-700 font-extrabold text-xs uppercase tracking-wider">Estimated Budget</label>
										<select
											value={formData.budget}
											onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
											className="w-full h-12 px-3 rounded-xl border border-slate-200 bg-slate-50 font-semibold text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all cursor-pointer"
										>
											<option value="Below ₹5 Lakh">Below ₹5 Lakh</option>
											<option value="₹5–10 Lakh">₹5–10 Lakh</option>
											<option value="₹10–25 Lakh">₹10–25 Lakh</option>
											<option value="₹25 Lakh+">₹25 Lakh+</option>
										</select>
									</div>
								</div>

								{/* Message */}
								<div className="space-y-1.5">
									<label className="text-slate-700 font-extrabold text-xs uppercase tracking-wider">Message</label>
									<textarea
										rows={4}
										placeholder="Tell us about your brand idea, product category, requirement, and timeline."
										value={formData.message}
										onChange={(e) => setFormData({ ...formData, message: e.target.value })}
										className="w-full p-4 rounded-xl border border-slate-200 bg-slate-50 font-medium text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all resize-y"
									/>
								</div>

								{/* Error Notification */}
								{submitError && (
									<div className="p-4 rounded-xl bg-red-50 border border-red-100 text-red-700 text-xs font-semibold">
										{submitError}
									</div>
								)}

								{/* Submit Button */}
								<button
									type="submit"
									disabled={isSubmitting}
									className="w-full h-[54px] rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-sm tracking-wide shadow-md transition-all hover:brightness-105 active:scale-98 disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
								>
									{isSubmitting ? (
										<span>Submitting...</span>
									) : (
										<>
											<span>Submit My Launch Requirement</span>
											<ArrowRight className="w-4.5 h-4.5 stroke-[2.5]" />
										</>
									)}
								</button>
							</form>

							{/* Success Modal Overlay */}
							<AnimatePresence>
								{submitSuccess && (
									<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
										<motion.div
											initial={{ scale: 0.95, opacity: 0 }}
											animate={{ scale: 1, opacity: 1 }}
											exit={{ scale: 0.95, opacity: 0 }}
											className="bg-white rounded-[32px] p-8 max-w-md w-full text-center space-y-6 shadow-2xl border border-slate-100"
										>
											<div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mx-auto">
												<MailCheck className="w-8 h-8 stroke-[2]" />
											</div>
											<div className="space-y-2">
												<h3 className="text-[#07152B] font-[900] text-2xl tracking-tight leading-tight">Requirement Received!</h3>
												<p className="text-slate-500 font-semibold text-xs leading-relaxed">
													Thank you for sharing your brand launch vision with Launch Veda. Our team is already reviewing your requirement.
												</p>
											</div>
											<div className="p-4 rounded-2xl bg-purple-50/60 border border-purple-100/50 text-[11px] font-semibold text-purple-700 leading-relaxed text-left">
												📋 <strong>Next steps:</strong> We will evaluate your budget range, target category and current stage, and connect with you on a consultation call within 24 working hours.
											</div>
											<button
												onClick={() => setSubmitSuccess(false)}
												className="w-full h-12 rounded-xl bg-slate-900 text-white font-bold text-xs uppercase tracking-wider hover:bg-purple-600 transition-colors"
											>
												Got It, Thanks
											</button>
										</motion.div>
									</div>
								)}
							</AnimatePresence>
						</div>

						{/* Right side explanation */}
						<div className="lg:col-span-5 space-y-6">
							<div className="bg-white border border-slate-100 rounded-[28px] p-6 sm:p-8 shadow-[0_15px_45px_rgba(0,0,0,0.03)] text-left space-y-6">
								<h3 className="text-[#07152B] font-[900] text-xl tracking-tight leading-none">
									What Happens After You Submit?
								</h3>

								{/* Steps Timeline */}
								<div className="space-y-6 relative">
									{/* Vertical connector line */}
									<div className="absolute left-4 top-2 bottom-2 w-[1.5px] bg-slate-100" />

									{[
										"Our team reviews your brand requirement",
										"We understand your category, budget, and launch stage",
										"You receive a clear consultation call",
										"We suggest the right launch roadmap",
										"You can start execution with Launch Veda",
									].map((step, idx) => (
										<div key={idx} className="flex items-start gap-4 relative z-10">
											<div className="w-8 h-8 rounded-full bg-purple-50 border border-purple-100 flex items-center justify-center shrink-0 text-purple-600 font-extrabold text-[12px]">
												{idx + 1}
											</div>
											<p className="text-slate-600 text-[13px] font-bold leading-relaxed pt-1.5">
												{step}
											</p>
										</div>
									))}
								</div>

								{/* Muted Tip Strip */}
								<div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-100/50 text-[11px] font-semibold text-amber-800 leading-relaxed">
									💡 <strong>Urgent queries:</strong> WhatsApp is the fastest way to connect with our team.
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* ====================================================
				    SECTION 4 — WHY CONTACT LAUNCH VEDA (6 Cards)
				    ==================================================== */}
				<section className="py-20 bg-white border-y border-slate-200/60 px-6 sm:px-12 md:px-16 max-w-[1380px] mx-auto w-full">
					<div className="text-center space-y-3 max-w-[700px] mx-auto mb-16">
						<h2 className="text-[#07152B] font-[900] text-3xl sm:text-4xl tracking-tight leading-tight">
							Why Founders Choose Launch Veda
						</h2>
						<p className="text-slate-500 font-medium text-sm sm:text-base leading-relaxed">
							Launching a brand needs more than one service. You need the right strategy, right product, right compliance, right digital presence, and the right growth system.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{[
							{
								title: "End-to-End Launch Support",
								desc: "From idea to market-ready brand, we help you manage the complete launch journey.",
								icon: <Layers className="w-5 h-5 text-purple-600" />,
								bg: "bg-purple-50",
								border: "border-purple-100",
							},
							{
								title: "Right Manufacturer Selection",
								desc: "We help you connect with suitable manufacturers based on category, budget, MOQ, and product goals.",
								icon: <Target className="w-5 h-5 text-blue-600" />,
								bg: "bg-blue-50",
								border: "border-blue-100",
							},
							{
								title: "Product Formulation Guidance",
								desc: "Get support for sampling, formulation direction, product planning, and category selection.",
								icon: <Sparkles className="w-5 h-5 text-pink-600" />,
								bg: "bg-pink-50",
								border: "border-pink-100",
							},
							{
								title: "Branding & Packaging",
								desc: "Build a strong brand identity with logo, packaging, positioning, and visual communication.",
								icon: <ShieldCheck className="w-5 h-5 text-orange-600" />,
								bg: "bg-orange-50",
								border: "border-orange-100",
							},
							{
								title: "Compliance & Documentation",
								desc: "Get guidance for required legal, label, and category-specific compliance support.",
								icon: <Bot className="w-5 h-5 text-emerald-600" />,
								bg: "bg-emerald-50",
								border: "border-emerald-100",
							},
							{
								title: "Website, Marketplace & Growth",
								desc: "Launch your brand digitally with website, e-commerce listing, content, ads, and growth planning.",
								icon: <TrendingUp className="w-5 h-5 text-sky-600" />,
								bg: "bg-sky-50",
								border: "border-sky-100",
							},
						].map((card, index) => (
							<div
								key={index}
								className="rounded-2xl border border-slate-100 bg-slate-50 p-6 text-left space-y-4 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
							>
								<div className={`w-10 h-10 rounded-xl ${card.bg} border ${card.border} flex items-center justify-center`}>
									{card.icon}
								</div>
								<div className="space-y-1.5">
									<h4 className="text-slate-900 font-extrabold text-base tracking-tight">
										{card.title}
									</h4>
									<p className="text-slate-500 font-semibold text-xs leading-relaxed">
										{card.desc}
									</p>
								</div>
							</div>
						))}
					</div>
				</section>

				{/* ====================================================
				    SECTION 5 — CATEGORY HELP SECTION (4 Cards)
				    ==================================================== */}
				<section className="py-20 px-6 sm:px-12 md:px-16 max-w-[1380px] mx-auto w-full">
					<div className="text-center space-y-3 max-w-[700px] mx-auto mb-16">
						<h2 className="text-[#07152B] font-[900] text-3xl sm:text-4xl tracking-tight leading-tight">
							What Type of Brand Do You Want to Launch?
						</h2>
						<p className="text-slate-500 font-medium text-sm sm:text-base leading-relaxed">
							Choose your category and connect with our team for a focused launch discussion.
						</p>
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
						{[
							{
								id: "Perfume Brand",
								title: "Perfume Brand Launch",
								desc: "For founders who want to launch fragrance, deodorant, attar, luxury perfume, or mass perfume brands.",
								color: "from-pink-500 to-rose-500",
							},
							{
								id: "Cosmetic / Skincare Brand",
								title: "Cosmetic Brand Launch",
								desc: "For skincare, haircare, beauty, personal care, serum, sunscreen, moisturizer, and face wash brands.",
								color: "from-purple-500 to-indigo-500",
							},
							{
								id: "Ayurveda Brand",
								title: "Ayurveda Brand Launch",
								desc: "For herbal, wellness, Ayurvedic, juice, capsule, oil, churna, and classical or modern Ayurveda brands.",
								color: "from-green-500 to-emerald-500",
							},
							{
								id: "Nutraceutical Brand",
								title: "Nutraceutical Brand Launch",
								desc: "For supplement, protein, collagen, glutathione, wellness, gummies, and health product brands.",
								color: "from-amber-500 to-orange-500",
							},
						].map((cat, index) => (
							<div
								key={index}
								className="rounded-2xl border border-slate-100 bg-white p-6 flex flex-col justify-between items-start text-left hover:-translate-y-1 hover:shadow-md hover:border-purple-200 transition-all duration-300"
							>
								<div className="space-y-3.5">
									<div className={`h-[5px] w-12 rounded bg-gradient-to-r ${cat.color}`} />
									<h4 className="text-slate-900 font-extrabold text-base tracking-tight">
										{cat.title}
									</h4>
									<p className="text-slate-500 font-semibold text-xs leading-relaxed">
										{cat.desc}
									</p>
								</div>
								<button
									onClick={() => discussCategory(cat.id)}
									className="text-purple-600 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 mt-6 hover:text-indigo-600 cursor-pointer group"
								>
									<span>Discuss This Category</span>
									<ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
								</button>
							</div>
						))}
					</div>
				</section>

				{/* ====================================================
				    SECTION 6 — OFFICE LOCATION SECTION
				    ==================================================== */}
				<section className="py-20 bg-white border-y border-slate-200/60 px-6 sm:px-12 md:px-16 max-w-[1380px] mx-auto w-full">
					<div className="text-center space-y-3 max-w-[700px] mx-auto mb-16">
						<h2 className="text-[#07152B] font-[900] text-3xl sm:text-4xl tracking-tight leading-tight">
							Visit Launch Veda
						</h2>
						<p className="text-slate-500 font-medium text-sm sm:text-base leading-relaxed">
							Meet our team for a detailed product launch discussion and execution roadmap.
						</p>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-50 border border-slate-100 rounded-[32px] p-6 sm:p-8 lg:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.02)] overflow-hidden">
						{/* Location Details left/top */}
						<div className="lg:col-span-5 text-left space-y-6">
							<div className="space-y-4">
								<div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600">
									<MapPin className="w-6 h-6 stroke-[2.2]" />
								</div>
								<div className="space-y-2">
									<h3 className="text-[#07152B] font-extrabold text-xl tracking-tight">Main Office</h3>
									<p className="text-slate-600 font-medium text-sm leading-relaxed max-w-[340px]">
										Tower T3, 221, 2nd Floor, Golden I, Noida Extension, Greater Noida West, Uttar Pradesh 201308, India
									</p>
								</div>
							</div>

							<a
								href="https://maps.app.goo.gl/GHhdqJZHcLLQa3R37"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex h-12 px-6 rounded-xl bg-slate-900 text-white font-bold text-xs uppercase tracking-wider items-center justify-center gap-2 hover:bg-purple-600 transition-colors shadow-md cursor-pointer"
							>
								<Map className="w-4 h-4 text-orange-400" />
								<span>Get Direction</span>
							</a>
						</div>

						{/* Map iframe right/bottom */}
						<div className="lg:col-span-7 h-[300px] sm:h-[380px] w-full rounded-2xl overflow-hidden border border-slate-200/60 shadow-sm relative">
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.27641716748!2d77.43274537613618!3d28.591483285942438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef933c1b31f3%3A0x48f5d76fc56b1388!2sGOLDEN%20I!5e0!3m2!1sen!2sin!4v1783145767936!5m2!1sen!2sin"
								width="100%"
								height="100%"
								style={{ border: 0 }}
								allowFullScreen={false}
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
								title="LaunchVeda Location Map at Golden I"
								className="absolute inset-0"
							/>
						</div>
					</div>
				</section>

				{/* ====================================================
				    SECTION 7 — FAQ SECTION (Accordion)
				    ==================================================== */}
				<section className="py-20 px-6 sm:px-12 md:px-16 max-w-[850px] mx-auto w-full">
					<div className="text-center space-y-3 mb-16">
						<h2 className="text-[#07152B] font-[900] text-3xl sm:text-4xl tracking-tight leading-tight">
							Frequently Asked Questions
						</h2>
						<p className="text-slate-500 font-medium text-sm sm:text-base leading-relaxed">
							Find responses to typical queries from founders.
						</p>
					</div>

					<div className="space-y-4">
						{FAQS_DATA.map((faq, idx) => {
							const isOpen = activeFaqIndex === idx;
							return (
								<div key={idx} className="w-full text-left">
									{/* AEO Schema detection marker */}
									<div
										style={{ display: "none" }}
										className="faq-seo-metadata"
										data-question={faq.question}
										data-answer={faq.answer}
									/>

									<div
										onClick={() => setActiveFaqIndex(isOpen ? null : idx)}
										className={`relative rounded-2xl border transition-all duration-300 overflow-hidden cursor-pointer ${
											isOpen
												? "bg-white border-purple-200 shadow-md"
												: "bg-white border-slate-200/80 shadow-sm hover:border-slate-300"
										}`}
									>
										{/* Active left indicator bar */}
										{isOpen && (
											<div className="absolute left-0 top-0 bottom-0 w-[4px] bg-purple-600" />
										)}

										<div className="p-5 flex items-start justify-between gap-4 select-none">
											<div className="flex items-center gap-3">
												<HelpCircle className={`w-5 h-5 shrink-0 ${isOpen ? "text-purple-600" : "text-slate-400"}`} />
												<h3 className="font-extrabold text-[#07152B] text-[15px] tracking-tight leading-snug">
													{faq.question}
												</h3>
											</div>
											<ChevronDown
												className={`w-4 h-4 shrink-0 transition-transform duration-300 mt-1 ${
													isOpen ? "rotate-180 text-purple-600" : "text-slate-400"
												}`}
											/>
										</div>

										<AnimatePresence initial={false}>
											{isOpen && (
												<motion.div
													initial={{ height: 0, opacity: 0 }}
													animate={{ height: "auto", opacity: 1 }}
													exit={{ height: 0, opacity: 0 }}
													transition={{ duration: 0.25, ease: "easeInOut" }}
													className="overflow-hidden"
												>
													<div className="px-5 pb-5 pl-[36px]">
														<p className="text-[13px] leading-relaxed font-semibold text-slate-600">
															{faq.answer}
														</p>
													</div>
												</motion.div>
											)}
										</AnimatePresence>
									</div>
								</div>
							);
						})}
					</div>
				</section>

				{/* ====================================================
				    SECTION 8 — FINAL CTA
				    ==================================================== */}
				<section className="py-20 bg-gradient-to-br from-[#061033] to-[#0A1D54] text-white text-center relative overflow-hidden">
					<div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
					<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-purple-500/10 blur-[100px] pointer-events-none" />

					<div className="relative z-10 max-w-[800px] mx-auto px-6 space-y-6">
						<h2 className="font-[900] text-3xl sm:text-5xl tracking-tight leading-[1.1]">
							Ready to Turn Your Idea Into a Brand?
						</h2>
						<p className="text-purple-100/80 font-medium text-sm sm:text-base leading-relaxed max-w-[600px] mx-auto">
							Share your requirement with Launch Veda and take the first step toward building a market-ready product brand.
						</p>

						<div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4 select-none">
							<button
								onClick={scrollToForm}
								className="w-full sm:w-auto h-[54px] px-8 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-bold text-sm tracking-wide shadow-md hover:-translate-y-0.5 active:scale-95 transition-all cursor-pointer"
							>
								Submit Requirement
							</button>
							<a
								href="https://wa.me/918796300199?text=Hi%20LaunchVeda,%20I%20want%20to%20discuss%20my%20brand%20launch%20idea."
								target="_blank"
								rel="noopener noreferrer"
								className="w-full sm:w-auto h-[54px] px-8 rounded-xl bg-white/[0.08] hover:bg-white/[0.12] border border-white/10 text-white font-bold text-sm tracking-wide transition-all cursor-pointer flex items-center justify-center gap-2"
							>
								<MessageCircle className="w-4 h-4 text-emerald-400 fill-emerald-400" />
								<span>WhatsApp Launch Team</span>
							</a>
						</div>
					</div>
				</section>
			</main>

			{/* Brand Footer Strip */}
			<div className="bg-[#061033] w-full text-white/50 py-6 border-t border-white/5">
				<div className="max-w-[1380px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-bold uppercase tracking-wider text-center select-none">
					<div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
						<span className="flex items-center gap-1.5 text-white/70">
							<Mail className="w-3.5 h-3.5" />
							<a href="mailto:support@launchveda.com" className="hover:text-purple-300">support@launchveda.com</a>
						</span>
						<span className="flex items-center gap-1.5 text-white/70">
							<Phone className="w-3.5 h-3.5" />
							<a href="tel:+918796300199" className="hover:text-purple-300">+91-8796300199</a>
						</span>
					</div>
					<span className="text-white/70">
						<a href="http://www.launchveda.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300">www.launchveda.com</a>
					</span>
				</div>
			</div>

			<div className="bg-[#061033] w-full">
				<LaunchFooterSection />
			</div>
		</div>
	);
}
