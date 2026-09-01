"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  from?: number;
  to: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
}

export default function AnimatedCounter({
  from = 0,
  to,
  duration = 2,
  prefix = "",
  suffix = "",
  decimals = 0,
  className = "",
}: AnimatedCounterProps) {
  const [count, setCount] = useState<number>(from);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!inView) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const updateCounter = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

      // Ease out cubic function for smooth decelerating animation
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = from + (to - from) * easeOut;

      setCount(current);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateCounter);
      } else {
        setCount(to);
      }
    };

    animationFrameId = requestAnimationFrame(updateCounter);

    return () => cancelAnimationFrame(animationFrameId);
  }, [inView, from, to, duration]);

  const formatted = decimals > 0
    ? count.toFixed(decimals)
    : Math.floor(count).toLocaleString("en-US");

  return (
    <span ref={ref} className={`inline-block font-mono tracking-tight ${className}`}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
