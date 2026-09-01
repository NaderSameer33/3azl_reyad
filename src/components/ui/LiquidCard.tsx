"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface LiquidCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: "blue" | "emerald" | "sky" | "teal" | "purple";
  interactive?: boolean;
}

export default function LiquidCard({
  children,
  className = "",
  glowColor = "blue",
  interactive = true,
}: LiquidCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse position normalized (-0.5 to 0.5)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for liquid-like elastic response
  const springConfig = { damping: 20, stiffness: 260 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), springConfig);

  // Dynamic light reflection coordinates
  const spotX = useSpring(useTransform(mouseX, [-0.5, 0.5], [15, 85]), springConfig);
  const spotY = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, 85]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactive || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  const glowGradients = {
    blue: "radial-gradient(circle at center, rgba(37, 99, 235, 0.25), transparent 70%)",
    emerald: "radial-gradient(circle at center, rgba(16, 185, 129, 0.22), transparent 70%)",
    sky: "radial-gradient(circle at center, rgba(56, 189, 248, 0.25), transparent 70%)",
    teal: "radial-gradient(circle at center, rgba(20, 184, 166, 0.25), transparent 70%)",
    purple: "radial-gradient(circle at center, rgba(147, 51, 234, 0.22), transparent 70%)",
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={interactive ? { rotateX, rotateY, transformStyle: "preserve-3d" } : undefined}
      whileHover={
        interactive
          ? {
              scale: 1.015,
              transition: { type: "spring", stiffness: 400, damping: 25 },
            }
          : undefined
      }
      className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/80 backdrop-blur-xl transition-all duration-300 ${
        isHovered
          ? "border-sky-400/40 shadow-2xl shadow-sky-500/15"
          : "hover:border-white/20 hover:shadow-xl shadow-black/40"
      } ${className}`}
    >
      {/* ── 1. Flowing Liquid Ripple Overlay ────────────────────────── */}
      {interactive && (
        <motion.div
          animate={
            isHovered
              ? {
                  backgroundPosition: ["0% 0%", "100% 100%"],
                  opacity: 1,
                }
              : { opacity: 0 }
          }
          transition={{
            backgroundPosition: { duration: 4, repeat: Infinity, ease: "linear" },
            opacity: { duration: 0.3 },
          }}
          className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-300"
          style={{
            background: glowGradients[glowColor],
            filter: "blur(24px)",
          }}
        />
      )}

      {/* ── 2. Fluid Dynamic Spotlight ──────────────────────────────── */}
      {interactive && isHovered && (
        <motion.div
          className="pointer-events-none absolute -inset-px z-10 rounded-3xl opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(600px circle at ${spotX.get()}% ${spotY.get()}%, rgba(56, 189, 248, 0.12), transparent 40%)`,
          }}
        />
      )}

      {/* ── 3. Liquid Border Wave Accent ────────────────────────────── */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/40 to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />

      {/* Card Content Container */}
      <div className="relative z-20 h-full w-full">{children}</div>
    </motion.div>
  );
}
