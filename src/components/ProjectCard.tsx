"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import TechBadge from "@/components/ui/TechBadge";
import { fadeInUp, easeOut } from "@/lib/motion";

type Project = {
  number: string;
  title: string;
  category: string;
  description: string;
  highlights: readonly string[];
  stack: readonly string[];
};

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("");

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y - rect.height / 2) / rect.height) * -8;
    const rotateY = ((x - rect.width / 2) / rect.width) * 8;
    setTransform(
      `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    );
  };

  const handleLeave = () => setTransform("perspective(800px) rotateX(0) rotateY(0)");

  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={fadeInUp}
      transition={{ ...easeOut, delay: index * 0.08 }}
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ transform }}
      className="glass-card glow-accent-hover group relative flex flex-col border border-white/10 p-6 transition-shadow duration-300"
    >
      <span className="pointer-events-none absolute right-4 top-2 font-display text-5xl font-bold text-white/[0.04]">
        {project.number}
      </span>

      <p className="font-mono text-[10px] uppercase tracking-widest text-muted/60">
        {project.category}
      </p>
      <h3 className="mt-2 font-display text-lg font-bold text-white group-hover:text-accent">
        {project.title}
      </h3>
      <p className="mt-3 line-clamp-2 font-mono text-xs leading-relaxed text-muted">
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.highlights.map((h) => (
          <span
            key={h}
            className="border border-accent/20 bg-accent/5 px-2 py-0.5 font-mono text-[10px] text-accent/90"
          >
            {h.length > 48 ? `${h.slice(0, 48)}…` : h}
          </span>
        ))}
      </div>

      <div className="mt-auto pt-5">
        <div className="mb-4 flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <TechBadge key={s} label={s} className="text-[10px] py-0.5" />
          ))}
        </div>
        <div className="flex gap-3">
          <button
            type="button"
            className="font-mono text-xs text-muted transition-colors hover:text-accent"
          >
            [Details →]
          </button>
        </div>
      </div>
    </motion.article>
  );
}
