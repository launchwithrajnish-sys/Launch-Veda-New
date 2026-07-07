// "use client";

// import { useEffect } from "react";

// const CONTENT_ROOT_SELECTOR = "body";

// const TEXT_SELECTOR = [
// 	`${CONTENT_ROOT_SELECTOR} h1`,
// 	`${CONTENT_ROOT_SELECTOR} h2`,
// 	`${CONTENT_ROOT_SELECTOR} h3`,
// 	`${CONTENT_ROOT_SELECTOR} h4`,
// 	`${CONTENT_ROOT_SELECTOR} h5`,
// 	`${CONTENT_ROOT_SELECTOR} h6`,
// 	`${CONTENT_ROOT_SELECTOR} p`,
// 	`${CONTENT_ROOT_SELECTOR} .subheading`,
// 	`${CONTENT_ROOT_SELECTOR} [id*='heading']`,
// 	`${CONTENT_ROOT_SELECTOR} [id*='subheading']`,
// 	`${CONTENT_ROOT_SELECTOR} [class*='heading']`,
// 	`${CONTENT_ROOT_SELECTOR} [class*='title']`,
// 	`${CONTENT_ROOT_SELECTOR} [class*='subtitle']`,
// 	`${CONTENT_ROOT_SELECTOR} [class*='desc']`,
// 	`${CONTENT_ROOT_SELECTOR} [class*='eyebrow']`,
// 	`${CONTENT_ROOT_SELECTOR} [class*='tracking-'][class*='uppercase']`,
// 	`${CONTENT_ROOT_SELECTOR} [class*='leading-'][class*='text-']`,
// 	`${CONTENT_ROOT_SELECTOR} [class*='font-'][class*='text-']`,
// ].join(",");

// const CARD_SELECTOR = [
// 	`${CONTENT_ROOT_SELECTOR} article`,
// 	`${CONTENT_ROOT_SELECTOR} [class*='rounded'][class*='border']`,
// 	`${CONTENT_ROOT_SELECTOR} [class*='rounded'][class*='shadow']`,
// 	`${CONTENT_ROOT_SELECTOR} .launch-system-card`,
// 	`${CONTENT_ROOT_SELECTOR} .eco-category-card`,
// 	`${CONTENT_ROOT_SELECTOR} .product-card`,
// 	`${CONTENT_ROOT_SELECTOR} .compliance-card`,
// 	`${CONTENT_ROOT_SELECTOR} .founder-card`,
// 	`${CONTENT_ROOT_SELECTOR} .ai-growth-card`,
// 	`${CONTENT_ROOT_SELECTOR} .marketplace-card`,
// ].join(",");

// const EXCLUDED_SELECTOR = [
// 	"[data-no-reveal]",
// 	"header",
// 	"nav",
// 	"footer",
// 	"script",
// 	"style",
// 	"button",
// 	"a",
// 	"input",
// 	"select",
// 	"textarea",
// 	"option",
// 	"svg",
// ].join(",");

// const EXCLUDED_ANCESTOR_SELECTOR = [
// 	"[data-no-reveal]",
// 	"header",
// 	"nav",
// 	"footer",
// 	"button",
// 	"a",
// 	"input",
// 	"select",
// 	"textarea",
// ].join(",");

// function isUsableText(element: Element) {
// 	if (
// 		element.matches(EXCLUDED_SELECTOR) ||
// 		element.closest(EXCLUDED_ANCESTOR_SELECTOR) ||
// 		element.classList.contains("lv-reveal-text")
// 	) {
// 		return false;
// 	}

// 	const text = element.textContent?.replace(/\s+/g, " ").trim() ?? "";
// 	if (text.length < 3) {
// 		return false;
// 	}

// 	const isHeading = element.matches("h1, h2, h3, h4, h5, h6");
// 	if (!isHeading && element.children.length > 5) {
// 		return false;
// 	}

// 	const rect = element.getBoundingClientRect();
// 	return rect.width >= 24 && rect.height >= 8;
// }

// function isUsableCard(element: Element) {
// 	if (
// 		element.matches(EXCLUDED_SELECTOR) ||
// 		element.closest(EXCLUDED_ANCESTOR_SELECTOR)
// 	) {
// 		return false;
// 	}

// 	const rect = element.getBoundingClientRect();
// 	return rect.width >= 120 && rect.height >= 72;
// }

// export default function RevealOnScroll() {
// 	useEffect(() => {
// 		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
// 			return;
// 		}

// 		const textElements = Array.from(document.querySelectorAll(TEXT_SELECTOR)).filter(
// 			isUsableText,
// 		);

// 		const cardElements = Array.from(document.querySelectorAll(CARD_SELECTOR)).filter(
// 			(element) =>
// 				isUsableCard(element) &&
// 				!element.classList.contains("lv-reveal-card"),
// 		);

// 		textElements.forEach((element, index) => {
// 			element.classList.add("lv-reveal-text");
// 			(element as HTMLElement).style.setProperty(
// 				"--lv-reveal-delay",
// 				`${Math.min((index % 4) * 35, 105)}ms`,
// 			);
// 		});
// 		cardElements.forEach((element, index) => {
// 			element.classList.add("lv-reveal-card");
// 			(element as HTMLElement).style.setProperty(
// 				"--lv-reveal-delay",
// 				`${Math.min((index % 3) * 55, 110)}ms`,
// 			);
// 		});

// 		const observer = new IntersectionObserver(
// 			(entries) => {
// 				entries.forEach((entry) => {
// 					if (!entry.isIntersecting) return;

// 					entry.target.classList.add("lv-reveal-visible");
// 					observer.unobserve(entry.target);
// 				});
// 			},
// 			{
// 				threshold: 0.16,
// 				rootMargin: "0px 0px -10% 0px",
// 			},
// 		);

// 		[...textElements, ...cardElements].forEach((element) => observer.observe(element));

// 		return () => observer.disconnect();
// 	}, []);

// 	return null;
// }
