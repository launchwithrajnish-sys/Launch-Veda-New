"use client";

import React, { useEffect, useRef, useState } from "react";

export default function HeroLiquidCursor() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mainBlobRef = useRef<HTMLDivElement>(null);
  const trail1BlobRef = useRef<HTMLDivElement>(null);
  const trail2BlobRef = useRef<HTMLDivElement>(null);
  const refractionRef = useRef<HTMLDivElement>(null);
  const ambientRef = useRef<HTMLDivElement>(null);
  const filterBaseRef = useRef<SVGFETurbulenceElement>(null);

  // States
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isHoveringCTA, setIsHoveringCTA] = useState(false);
  const [isHoveringText, setIsHoveringText] = useState(false);

  // Tracking position refs
  const mouseRef = useRef({ x: 0, y: 0 });
  const prevMouseRef = useRef({ x: 0, y: 0 });
  const lastRippleTimeRef = useRef(0);
  const isInsideRef = useRef(false);
  const rafIdRef = useRef<number | null>(null);
  const parentRectRef = useRef<DOMRect | null>(null);
  const rippleFrameRef = useRef<number | null>(null);
  const queuedRippleRef = useRef<{ x: number; y: number } | null>(null);
  const hoverStateRef = useRef({ cta: false, text: false });

  // Smooth lerp positional states
  const currentBlobRef = useRef({ x: 0, y: 0 });
  const currentTrail1Ref = useRef({ x: 0, y: 0 });
  const currentTrail2Ref = useRef({ x: 0, y: 0 });

  // Smooth opacity state
  const opacityRef = useRef(0);
  // SVG turbulence phase
  const baseFrequencyRef = useRef(0.012);
  const timeRef = useRef(0);

  useEffect(() => {
    // 1. Environmental responsiveness
    const checkMedia = () => {
      setIsMobile(window.innerWidth < 1024);
      setPrefersReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    };
    checkMedia();
    window.addEventListener("resize", checkMedia);
    return () => window.removeEventListener("resize", checkMedia);
  }, []);

  useEffect(() => {
    const parent = containerRef.current?.parentElement;
    if (!parent) return;

    const updateParentRect = () => {
      parentRectRef.current = parent.getBoundingClientRect();
    };

    const handleMouseEnter = () => {
      updateParentRect();
      isInsideRef.current = true;
    };

    const handleMouseLeave = () => {
      isInsideRef.current = false;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = parentRectRef.current;
      if (!rect) {
        updateParentRect();
        return;
      }
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      prevMouseRef.current = { ...mouseRef.current };
      mouseRef.current = { x, y };

      // Micro-interaction detections: CTA buttons & Text element bounding box approximation
      const target = e.target as HTMLElement;
      if (target) {
        const isCTA = target.closest("#cta-primary-btn, #cta-secondary-btn, #viewport-cta-primary-btn, #viewport-cta-secondary-btn");
        const isHeading = target.closest("#above-fold-hero h1, #above-fold-hero p, #above-fold-hero span");
        const nextCTA = !!isCTA;
        const nextText = !!isHeading;
        if (hoverStateRef.current.cta !== nextCTA) {
          hoverStateRef.current.cta = nextCTA;
          setIsHoveringCTA(nextCTA);
        }
        if (hoverStateRef.current.text !== nextText) {
          hoverStateRef.current.text = nextText;
          setIsHoveringText(nextText);
        }
      }

      // Generate ripple waves on cursor speed threshold
      if (isInsideRef.current && !isMobile && !prefersReducedMotion) {
        const dx = mouseRef.current.x - prevMouseRef.current.x;
        const dy = mouseRef.current.y - prevMouseRef.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        const now = performance.now();
        // Spawns ripple if pointer moves more than 14px, throttled between 55ms and 80ms
        if (distance > 14 && now - lastRippleTimeRef.current > 65) {
          queueRipple(x, y);
          lastRippleTimeRef.current = now;
        }
      }
    };

    const queueRipple = (x: number, y: number) => {
      queuedRippleRef.current = { x, y };
      if (rippleFrameRef.current !== null) return;

      rippleFrameRef.current = requestAnimationFrame(() => {
        rippleFrameRef.current = null;
        const ripple = queuedRippleRef.current;
        queuedRippleRef.current = null;
        if (ripple) {
          createRipple(ripple.x, ripple.y);
        }
      });
    };

    // Spawn water ripple rings
    const createRipple = (x: number, y: number) => {
      const ringContainer = containerRef.current;
      if (!ringContainer) return;

      const activeRipples = ringContainer.querySelectorAll(".liquid-wave-ring");
      if (activeRipples.length >= 10) {
        activeRipples[0].remove();
      }

      // Ripple container node
      const rippleNode = document.createElement("div");
      rippleNode.className = "liquid-wave-ring absolute pointer-events-none rounded-full";
      rippleNode.style.left = "0";
      rippleNode.style.top = "0";
      rippleNode.style.width = "28px";
      rippleNode.style.height = "28px";
      rippleNode.style.setProperty("--rx", `${x}px`);
      rippleNode.style.setProperty("--ry", `${y}px`);
      rippleNode.style.willChange = "transform, opacity";
      rippleNode.style.contain = "layout paint";
      
      // Inside double rings setup (Cyan and Purple with specific borders)
      rippleNode.style.border = "1px solid rgba(125, 211, 252, 0.32)";
      rippleNode.style.boxShadow = "inset 0 0 12px rgba(168, 85, 247, 0.16)";
      rippleNode.style.animation = "fluid-ripple-expand 1200ms cubic-bezier(0.19, 1, 0.22, 1) forwards";
      
      ringContainer.appendChild(rippleNode);

      // Self cleanup
      setTimeout(() => {
        rippleNode.remove();
      }, 1300);
    };

    parent.addEventListener("mouseenter", handleMouseEnter);
    parent.addEventListener("mouseleave", handleMouseLeave);
    parent.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", updateParentRect);

    return () => {
      parent.removeEventListener("mouseenter", handleMouseEnter);
      parent.removeEventListener("mouseleave", handleMouseLeave);
      parent.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", updateParentRect);
      if (rippleFrameRef.current !== null) {
        cancelAnimationFrame(rippleFrameRef.current);
      }
    };
  }, [isMobile, prefersReducedMotion]);

  // Framer-style high-performance lerp tracking
  useEffect(() => {
    if (isMobile || prefersReducedMotion) {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      return;
    }

    const updateLoop = () => {
      // 1. Compute smooth target opacity based on bounds and hover states
      let targetOpacity = isInsideRef.current ? 0.32 : 0;
      if (isInsideRef.current) {
        if (isHoveringText) {
          // Reduce opacity by 30% over text areas to keep readability pristine
          targetOpacity *= 0.70; 
        } else if (isHoveringCTA) {
          targetOpacity = 0.42;
        }
      }

      // Smooth opacity ease
      opacityRef.current += (targetOpacity - opacityRef.current) * 0.12;

      // Adjust individual layer opacities
      if (mainBlobRef.current) mainBlobRef.current.style.opacity = String(opacityRef.current);
      if (trail1BlobRef.current) trail1BlobRef.current.style.opacity = String(opacityRef.current * 0.56);
      if (trail2BlobRef.current) trail2BlobRef.current.style.opacity = String(opacityRef.current * 0.38);
      if (refractionRef.current) refractionRef.current.style.opacity = String(opacityRef.current * 0.85);

      // 2. High Quality Lerp (0.08 to 0.12)
      const lerpFactor = 0.10;
      currentBlobRef.current.x += (mouseRef.current.x - currentBlobRef.current.x) * lerpFactor;
      currentBlobRef.current.y += (mouseRef.current.y - currentBlobRef.current.y) * lerpFactor;

      // Trail 1 (Slower, delay 100ms equivalent)
      currentTrail1Ref.current.x += (currentBlobRef.current.x - currentTrail1Ref.current.x) * 0.08;
      currentTrail1Ref.current.y += (currentBlobRef.current.y - currentTrail1Ref.current.y) * 0.08;

      // Trail 2 (Even slower, delay 180ms equivalent)
      currentTrail2Ref.current.x += (currentTrail1Ref.current.x - currentTrail2Ref.current.x) * 0.06;
      currentTrail2Ref.current.y += (currentTrail1Ref.current.y - currentTrail2Ref.current.y) * 0.06;

      // 3. Size configuration for hovering CTA buttons
      const currentBlobSize = isHoveringCTA ? 220 : 290;

      // Apply GPU-friendly transforms
      if (mainBlobRef.current) {
        mainBlobRef.current.style.transform = `translate3d(calc(${currentBlobRef.current.x}px - 50%), calc(${currentBlobRef.current.y}px - 50%), 0) scale(${currentBlobSize / 290})`;
      }
      if (trail1BlobRef.current) {
        trail1BlobRef.current.style.transform = `translate3d(calc(${currentTrail1Ref.current.x}px - 50%), calc(${currentTrail1Ref.current.y}px - 50%), 0)`;
      }
      if (trail2BlobRef.current) {
        trail2BlobRef.current.style.transform = `translate3d(calc(${currentTrail2Ref.current.x}px - 50%), calc(${currentTrail2Ref.current.y}px - 50%), 0)`;
      }

      // Update liquid refraction texture layer coordinates & custom properties
      if (refractionRef.current) {
        refractionRef.current.style.setProperty("--mx", `${currentBlobRef.current.x}px`);
        refractionRef.current.style.setProperty("--my", `${currentBlobRef.current.y}px`);
      }

      // 4. Update the SVG Turbulence filter frequency to create animate wave displacement map
      timeRef.current += 0.006;
      if (filterBaseRef.current) {
        const dynamicFrequency = baseFrequencyRef.current + Math.sin(timeRef.current) * 0.002;
        filterBaseRef.current.setAttribute("baseFrequency", `0.008 ${dynamicFrequency.toFixed(5)}`);
      }

      rafIdRef.current = requestAnimationFrame(updateLoop);
    };

    rafIdRef.current = requestAnimationFrame(updateLoop);

    return () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, [isMobile, prefersReducedMotion, isHoveringCTA, isHoveringText]);

  return (
    <>
      {/* High-quality motion CSS rules */}
      <style>{`
        @keyframes fluid-ripple-expand {
          0% {
            transform: translate3d(calc(var(--rx, 0px) - 50%), calc(var(--ry, 0px) - 50%), 0) scale(0.2);
            opacity: 0.35;
            filter: blur(0px);
          }
          100% {
            transform: translate3d(calc(var(--rx, 0px) - 50%), calc(var(--ry, 0px) - 50%), 0) scale(5.5);
            opacity: 0;
            filter: blur(2.5px);
          }
        }
        @keyframes subtle-liquid-drift {
          0% {
            transform: scale(1) translate(0px, 0px) rotate(0deg);
          }
          50% {
            transform: scale(1.12) translate(40px, -40px) rotate(180deg);
          }
          100% {
            transform: scale(1) translate(0px, 0px) rotate(360deg);
          }
        }
      `}</style>

      {/* SVG Liquid Displacement Map Filter definitions */}
      <svg
        style={{
          position: "absolute",
          width: 0,
          height: 0,
          pointerEvents: "none",
          userSelect: "none",
        }}
        aria-hidden="true"
      >
        <defs>
          <filter id="liquid-glass-refraction" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence
              ref={filterBaseRef}
              type="fractalNoise"
              baseFrequency="0.008 0.012"
              numOctaves="2"
              result="turbulence"
            />
            {/* Scale 11 creates beautiful premium glass refraction without extreme text destruction */}
            <feDisplacementMap
              in="SourceGraphic"
              in2="turbulence"
              scale="12"
              xChannelSelector="R"
              yChannelSelector="G"
              result="displaced"
            />
          </filter>
        </defs>
      </svg>

      <div
        ref={containerRef}
        className="absolute inset-0 pointer-events-none overflow-hidden select-none"
        style={{ contain: "layout paint", zIndex: 1 }}
      >
        {/* Mobile / Tablet / Touch / Reduced motion alternative: Subtle ambient background animation */}
        {(isMobile || prefersReducedMotion) ? (
          <div
            ref={ambientRef}
            className="absolute right-[5%] top-[18%] w-[420px] h-[420px] rounded-full mix-blend-screen pointer-events-none opacity-[0.22] blur-[45px]"
            style={{
              background: "radial-gradient(circle, rgba(56, 189, 248, 0.16) 0%, rgba(139, 92, 246, 0.09) 55%, transparent 80%)",
              animation: "subtle-liquid-drift 22s infinite ease-in-out",
            }}
          />
        ) : (
          <>
            {/* Masked Distortion Area with Water Texture and Glass Refraction SVG Filter */}
            <div
              ref={refractionRef}
              className="absolute inset-0 mix-blend-screen pointer-events-none opacity-0 transition-opacity duration-300"
              style={{
                willChange: "opacity",
                background: `
                  radial-gradient(circle at var(--mx, 0px) var(--my, 0px), rgba(255, 255, 255, 0.14), transparent 28%),
                  repeating-radial-gradient(circle at var(--mx, 0px) var(--my, 0px), rgba(125, 211, 252, 0.05) 0px, rgba(125, 211, 252, 0.015) 3px, transparent 8px, transparent 16px)
                `,
                maskImage: "radial-gradient(circle 280px at var(--mx, 0px) var(--my, 0px), black 0%, black 38%, transparent 72%)",
                WebkitMaskImage: "radial-gradient(circle 280px at var(--mx, 0px) var(--my, 0px), black 0%, black 38%, transparent 72%)",
                filter: "url(#liquid-glass-refraction) blur(0.3px)",
              }}
            />

            {/* Main Transparent Liquid Cursor with soft cyan-blue-purple edges */}
            <div
              ref={mainBlobRef}
              className="absolute pointer-events-none rounded-full mix-blend-screen opacity-0"
              style={{
                width: "290px",
                height: "290px",
                background: `
                  radial-gradient(circle, 
                    rgba(255, 255, 255, 0.24) 0%, 
                    rgba(125, 211, 252, 0.22) 24%, 
                    rgba(56, 189, 248, 0.14) 42%, 
                    rgba(59, 130, 246, 0.10) 58%, 
                    rgba(168, 85, 247, 0.08) 70%, 
                    transparent 82%
                  )
                `,
                filter: "blur(24px)",
                willChange: "transform, opacity",
              }}
            />

            {/* Trailing Blob 1: Cyan spring-drag */}
            <div
              ref={trail1BlobRef}
              className="absolute pointer-events-none rounded-full mix-blend-screen opacity-0"
              style={{
                width: "190px",
                height: "190px",
                background: "radial-gradient(circle, rgba(125, 211, 252, 0.18) 0%, rgba(56, 189, 248, 0.08) 50%, transparent 75%)",
                filter: "blur(36px)",
                willChange: "transform, opacity",
              }}
            />

            {/* Trailing Blob 2: Purple-blue slower delay */}
            <div
              ref={trail2BlobRef}
              className="absolute pointer-events-none rounded-full mix-blend-screen opacity-0"
              style={{
                width: "120px",
                height: "120px",
                background: "radial-gradient(circle, rgba(168, 85, 247, 0.12) 0%, rgba(59, 130, 246, 0.04) 50%, transparent 75%)",
                filter: "blur(30px)",
                willChange: "transform, opacity",
              }}
            />
          </>
        )}
      </div>
    </>
  );
}
