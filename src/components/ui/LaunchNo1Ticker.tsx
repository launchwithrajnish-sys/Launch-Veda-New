"use client";

import React from "react";
import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

export const LaunchNo1Ticker: React.FC = () => {
  // We repeat the phrase multiple times to ensure continuous fill on all screen sizes
  const phrase = (
    <div className="flex items-center gap-12 sm:gap-16 shrink-0">
      <span className="text-slate-950 font-normal text-lg sm:text-xl md:text-[25px] tracking-[0.06em] whitespace-nowrap uppercase">
        <strong className="font-[950] text-slate-950">LAUNCH <span className="text-purple-600 font-[950]">VEDA</span></strong> — INDIA'S <span className="text-purple-600 font-extrabold">NO. 1</span> PRODUCT LAUNCH COMPANY
      </span>
      <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 shrink-0 animate-pulse" />
    </div>
  );

  // Render 8 instances for seamless marquee scrolling
  const list = Array.from({ length: 8 });

  return (
    <div className="w-full bg-white border-y border-slate-200/60 py-8 sm:py-12 overflow-hidden select-none relative z-20 shadow-[0_15px_40px_rgba(0,0,0,0.05)]">
      {/* Soft gradient masks on left and right for elegance */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <div className="flex w-max">
        <motion.div
          className="flex items-center gap-12 sm:gap-16 pr-12 sm:pr-16"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 20,
            repeat: Infinity,
          }}
        >
          {list.map((_, idx) => (
            <React.Fragment key={idx}>
              {phrase}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default LaunchNo1Ticker;
