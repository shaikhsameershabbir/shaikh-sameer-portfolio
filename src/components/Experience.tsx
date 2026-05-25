"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import TechBadge from "@/components/ui/TechBadge";
import { EXPERIENCES } from "@/lib/constants";
import { easeOut, viewportOnce } from "@/lib/motion";

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 0.85], ["0%", "100%"]);

  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader title="// experience" />

        <div ref={containerRef} className="relative">
          <div
            ref={lineRef}
            className="absolute left-0 top-0 hidden h-full w-px md:block"
          >
            <div className="h-full w-px bg-white/10" />
            <motion.div
              className="absolute left-0 top-0 w-px origin-top bg-accent shadow-[0_0_8px_#00FF94]"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-10 md:pl-12">
            {EXPERIENCES.map((exp, i) => (
              <motion.article
                key={exp.company}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewportOnce}
                transition={{ ...easeOut, delay: i * 0.08 }}
                className="group relative"
              >
                <div className="absolute -left-12 top-6 hidden h-3 w-3 md:block">
                  <span
                    className={`block h-3 w-3 rounded-full ${exp.current ? "bg-accent shadow-[0_0_12px_#00FF94]" : "border border-accent/50 bg-bg"}`}
                  />
                </div>

                <div className="glass-card glow-accent-hover border border-white/10 p-6 transition-transform duration-300 hover:scale-[1.01] md:p-8">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="font-display text-xl font-bold text-white md:text-2xl">
                        {exp.company}
                      </h3>
                      <p className="mt-1 font-mono text-sm text-muted">
                        {exp.title}
                      </p>
                      <p className="mt-1 font-mono text-xs text-muted/60">
                        {exp.location}
                      </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="border border-white/15 px-2 py-1 font-mono text-xs text-muted">
                        {exp.duration}
                      </span>
                      {exp.current && (
                        <span className="font-mono text-xs text-accent">
                          ● CURRENT
                        </span>
                      )}
                    </div>
                  </div>

                  <ul className="mt-5 space-y-2">
                    {exp.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex gap-2 font-mono text-sm text-muted"
                      >
                        <span className="shrink-0 text-accent/80">→</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <TechBadge key={tag} label={tag} className="text-[10px]" />
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {inView && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="sr-only"
              aria-hidden
            />
          )}
        </div>
      </div>
    </section>
  );
}
