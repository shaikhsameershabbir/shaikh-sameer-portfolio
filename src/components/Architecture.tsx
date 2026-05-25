"use client";

import { motion } from "framer-motion";
import { Server, Workflow, Shield, Zap } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { ARCHITECTURE_PILLARS } from "@/lib/constants";
import { fadeInUp, staggerContainer, easeOut, viewportOnce } from "@/lib/motion";

const iconMap = {
  server: Server,
  workflow: Workflow,
  shield: Shield,
  zap: Zap,
} as const;

export default function Architecture() {
  return (
    <section id="architecture" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader title="// architecture & engineering" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid grid-cols-1 gap-4 md:grid-cols-2"
        >
          {ARCHITECTURE_PILLARS.map((pillar) => {
            const Icon = iconMap[pillar.icon];
            return (
              <motion.div
                key={pillar.title}
                variants={fadeInUp}
                transition={easeOut}
                className="glass-card glow-accent-hover border border-white/10 p-6 md:p-8"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center border border-accent/30 bg-accent/5">
                  <Icon className="text-accent" size={24} />
                </div>
                <h3 className="font-display text-xl font-bold text-white">
                  {pillar.title}
                </h3>
                <ul className="mt-4 space-y-2">
                  {pillar.bullets.map((b) => (
                    <li key={b} className="font-mono text-xs text-muted">
                      {b}
                    </li>
                  ))}
                </ul>
                {pillar.metric && (
                  <p className="mt-4 border border-accent/30 bg-accent/5 px-3 py-2 font-mono text-xs text-accent">
                    &quot;{pillar.metric}&quot;
                  </p>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
