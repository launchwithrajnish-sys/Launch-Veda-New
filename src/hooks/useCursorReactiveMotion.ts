import { useEffect, useRef } from "react";

export interface MotionConfig {
	tiltStrength?: number;
	parallaxAmount?: number;
	baseScale?: number;
	hoverScale?: number;
	lerpFactor?: number;
}

export function useCursorReactiveMotion(config: MotionConfig = {}) {
	const containerRef = useRef<HTMLDivElement>(null);
	const videoRef = useRef<HTMLVideoElement>(null);

	const {
		tiltStrength = 6,
		parallaxAmount = 20,
		baseScale = 1.05,
		hoverScale = 1.07,
		lerpFactor = 0.08,
	} = config;

	useEffect(() => {
		if (typeof window === "undefined") return;

		let targetX = 0;
		let targetY = 0;
		let currentX = 0;
		let currentY = 0;
		let isHovered = false;

		const heroCanvas = document.getElementById("hero-canvas");
		if (!heroCanvas) return;

		const handleMouseMove = (e: MouseEvent) => {
			const rect = heroCanvas.getBoundingClientRect();
			
			// Compute coordinates normalized between -1 and 1 relative to hero boundaries
			const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
			const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;

			targetX = Math.max(-1, Math.min(1, x));
			targetY = Math.max(-1, Math.min(1, y));
			isHovered = true;
		};

		const handleMouseLeave = () => {
			targetX = 0;
			targetY = 0;
			isHovered = false;
		};

		heroCanvas.addEventListener("mousemove", handleMouseMove);
		heroCanvas.addEventListener("mouseleave", handleMouseLeave);

		let animationFrameId: number;

		const updateMotion = () => {
			// Cinematic Lerping / Interpolation
			currentX += (targetX - currentX) * lerpFactor;
			currentY += (targetY - currentY) * lerpFactor;

			const container = containerRef.current;
			const video = videoRef.current;

			if (container && video) {
				const rotateY = currentX * tiltStrength;
				const rotateX = -currentY * tiltStrength;

				const moveX = currentX * parallaxAmount;
				const moveY = currentY * parallaxAmount;

				const currentScale = baseScale + (isHovered ? (hoverScale - baseScale) * Math.abs(currentX) : 0);

				// Set 3D rotation matrix
				container.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`;
				
				// Translate inner video to create layered parallax depth
				video.style.transform = `translate3d(${moveX}px, ${moveY}px, 0) scale(${currentScale})`;
			}

			animationFrameId = requestAnimationFrame(updateMotion);
		};

		updateMotion();

		return () => {
			heroCanvas.removeEventListener("mousemove", handleMouseMove);
			heroCanvas.removeEventListener("mouseleave", handleMouseLeave);
			cancelAnimationFrame(animationFrameId);
		};
	}, [tiltStrength, parallaxAmount, baseScale, hoverScale, lerpFactor]);

	return { containerRef, videoRef };
}
