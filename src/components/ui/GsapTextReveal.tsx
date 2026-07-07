"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

type TextRevealVariant = "heading" | "subheading" | "text" | "label";

type GsapTextRevealProps<T extends React.ElementType> = {
	as?: T;
	variant?: TextRevealVariant;
	delay?: number;
	useScrollTrigger?: boolean;
	children: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "children">;

export default function GsapTextReveal<T extends React.ElementType = "span">({
	as,
	variant = "text",
	delay = 0,
	useScrollTrigger = true,
	children,
	...props
}: GsapTextRevealProps<T>) {
	const elementRef = useRef<HTMLElement | null>(null);
	const Component = (as || "span") as React.ElementType;

	useEffect(() => {
		const element = elementRef.current;
		if (!element || typeof window === "undefined") return;

		const reduceMotion = window.matchMedia(
			"(prefers-reduced-motion: reduce)",
		);
		if (reduceMotion.matches) return;

		const isHeading = variant === "heading";
		const isSubheading = variant === "subheading";
		const isLabel = variant === "label";
		let animation: gsap.core.Tween | null = null;
		let disposed = false;

		const createAnimation = () => {
			if (disposed) return;

			const animationConfig = {
				autoAlpha: 1,
				y: 0,
				clipPath: "inset(0 0 0% 0)",
				duration: isHeading ? 0.95 : isSubheading ? 0.8 : 0.68,
				delay,
				ease: isHeading ? "power3.out" : "power2.out",
				clearProps: "clipPath,transform,visibility,opacity",
				...(useScrollTrigger
					? {
							scrollTrigger: {
								trigger: element,
								start: "top 86%",
								once: true,
							},
						}
					: {}),
			};

			animation = gsap.fromTo(
				element,
				{
					autoAlpha: 0,
					y: isHeading
						? 42
						: isSubheading
							? 28
							: isLabel
								? 14
								: 22,
					clipPath: isHeading
						? "inset(0 0 100% 0)"
						: "inset(0 0 18% 0)",
				},
				animationConfig,
			);
		};

		if (useScrollTrigger) {
			import("gsap/ScrollTrigger").then(({ default: ScrollTrigger }) => {
				gsap.registerPlugin(ScrollTrigger);
				createAnimation();
			});
		} else {
			createAnimation();
		}

		return () => {
			disposed = true;
			animation?.scrollTrigger?.kill();
			animation?.kill();
		};
	}, [delay, useScrollTrigger, variant]);

	return (
		<Component
			ref={elementRef}
			{...props}
		>
			{children}
		</Component>
	);
}
