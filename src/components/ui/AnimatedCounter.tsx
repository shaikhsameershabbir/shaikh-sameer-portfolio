"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

type AnimatedCounterProps = {
  value: number;
  suffix?: string;
  label: string;
  className?: string;
};

export default function AnimatedCounter({
  value,
  suffix = "",
  label,
  className = "",
}: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { stiffness: 60, damping: 20 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, motionValue, value]);

  useEffect(() => {
    const unsubscribe = spring.on("change", (v) => setDisplay(Math.round(v)));
    return unsubscribe;
  }, [spring]);

  return (
    <div
      ref={ref}
      className={`border border-white/10 bg-white/[0.03] p-5 text-center ${className}`}
    >
      <motion.span className="font-display text-3xl font-bold text-accent md:text-4xl">
        {display}
        {suffix}
      </motion.span>
      <p className="mt-1 font-mono text-xs uppercase tracking-widest text-muted/70">
        {label}
      </p>
    </div>
  );
}
