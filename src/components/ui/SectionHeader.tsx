"use client";

import { motion } from "framer-motion";
import { fadeInUp, easeOut, viewportOnce } from "@/lib/motion";

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  className?: string;
};

export default function SectionHeader({
  title,
  subtitle,
  className = "",
}: SectionHeaderProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeInUp}
      transition={easeOut}
      className={`mb-12 md:mb-16 ${className}`}
    >
      <h2 className="font-mono text-sm text-accent md:text-base">{title}</h2>
      {subtitle && (
        <p className="mt-2 max-w-2xl font-mono text-sm text-muted/80">
          {subtitle}
        </p>
      )}
      <div className="mt-4 h-px w-full max-w-xs bg-gradient-to-r from-accent/60 to-transparent" />
    </motion.div>
  );
}
