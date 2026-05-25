"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import TechBadge from "@/components/ui/TechBadge";
import { SKILLS } from "@/lib/constants";
import { fadeInUp, staggerContainer, easeOut, viewportOnce } from "@/lib/motion";

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader title="// skills & expertise" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[minmax(140px,auto)]"
        >
          {SKILLS.map((skill) => (
            <motion.div
              key={skill.category}
              variants={fadeInUp}
              transition={easeOut}
              className={`glass-card glow-accent-hover group p-5 transition-all duration-300 hover:-translate-y-1 ${skill.span} ${"featured" in skill && skill.featured ? "lg:min-h-[320px]" : ""}`}
            >
              <h3 className="mb-4 font-mono text-sm text-accent/80">
                {`/* ${skill.category} */`}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <TechBadge
                    key={item}
                    label={item}
                    className="group-hover:border-accent group-hover:text-accent"
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
