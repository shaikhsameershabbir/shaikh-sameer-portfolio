"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import { ABOUT_BULLETS, PROFESSIONAL_SUMMARY, EDUCATION } from "@/lib/constants";
import {
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  easeOut,
  viewportOnce,
} from "@/lib/motion";

function SystemGraphic() {
  return (
    <svg
      viewBox="0 0 400 400"
      className="h-full w-full max-w-md text-accent"
      aria-hidden
    >
      <circle
        cx="200"
        cy="200"
        r="140"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.2"
      />
      <circle
        cx="200"
        cy="200"
        r="100"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.35"
      />
      <circle
        cx="200"
        cy="200"
        r="60"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.5"
      />
      <line
        x1="200"
        y1="60"
        x2="200"
        y2="340"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.3"
      />
      <line
        x1="60"
        y1="200"
        x2="340"
        y2="200"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.3"
      />
      <circle cx="200" cy="60" r="8" fill="currentColor" opacity="0.8" />
      <circle cx="340" cy="200" r="8" fill="#00D4FF" opacity="0.8" />
      <circle cx="200" cy="340" r="8" fill="currentColor" opacity="0.6" />
      <circle cx="60" cy="200" r="8" fill="#00D4FF" opacity="0.6" />
      <circle cx="200" cy="200" r="12" fill="currentColor" />
      <path
        d="M 200 140 L 280 200 L 200 260 L 120 200 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.4"
      />
    </svg>
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader title="// about" />

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeInLeft}
            transition={easeOut}
            className="order-2 flex justify-center lg:order-1"
          >
            <SystemGraphic />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="order-1 space-y-6 lg:order-2"
          >
            <motion.div variants={fadeInRight} transition={easeOut}>
              <h3 className="font-display text-2xl font-bold text-white md:text-3xl">
                About
              </h3>
              <p className="mt-2 font-mono text-sm text-accent">
                Professional Summary
              </p>
              <div className="mt-2 font-mono text-xs text-muted/50">
                ─────────────────────────
              </div>
            </motion.div>

            <motion.p
              variants={fadeInRight}
              transition={easeOut}
              className="font-mono text-sm leading-relaxed text-muted md:text-base"
            >
              {PROFESSIONAL_SUMMARY}
            </motion.p>

            <motion.div
              variants={fadeInRight}
              transition={easeOut}
              className="border border-white/10 bg-white/[0.02] p-4 font-mono text-sm"
            >
              <p className="text-accent/80">{`/* education */`}</p>
              <p className="mt-2 text-white">{EDUCATION.degree}</p>
              <p className="text-muted">{EDUCATION.university}</p>
              <p className="text-muted/70">
                {EDUCATION.location} · Graduated {EDUCATION.graduated}
              </p>
            </motion.div>

            <motion.ul
              variants={staggerContainer}
              className="space-y-3"
            >
              {ABOUT_BULLETS.map((bullet) => (
                <motion.li
                  key={bullet}
                  variants={fadeInRight}
                  transition={easeOut}
                  className="flex gap-2 font-mono text-sm text-muted"
                >
                  <span className="text-accent shrink-0">&gt;</span>
                  {bullet}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
