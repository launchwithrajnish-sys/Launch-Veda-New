"use client";

import { motion } from "motion/react";
import { Rocket } from "lucide-react";

export default function LaunchBadge() {
  const badgeVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.1, // Staggered loading
      },
    },
  } as const;

  return (
    <motion.div
      id="launch-badge"
      variants={badgeVariants}
      initial="hidden"
      animate="visible"
      style={{
        height: "38px",
        backgroundColor: "rgba(0, 30, 80, 0.3)",
        border: "1px solid rgba(80, 180, 255, 0.35)",
      }}
      className="inline-flex items-center gap-2 px-4 rounded-full text-white backdrop-blur-sm self-center sm:self-start justify-center cursor-default group"
    >
      <Rocket className="w-4 h-4 text-[#88CAFF] group-hover:animate-bounce transition-transform duration-300" />
      <span className="text-xs sm:text-sm font-semibold leading-none tracking-normal">
        India’s End-to-End Product Launch Partner
      </span>
    </motion.div>
  );
}
