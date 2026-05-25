"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Github, Linkedin, Mail, Download, ArrowDown } from "lucide-react";
import GlitchText from "@/components/ui/GlitchText";
import TerminalWindow from "@/components/ui/TerminalWindow";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import TechBadge from "@/components/ui/TechBadge";
import {
  CV_URL,
  SITE,
  PROFESSIONAL_SUMMARY,
  HERO_STATS,
  HERO_TECH,
  TYPEWRITER_ROLES,
} from "@/lib/constants";
import { fadeInUp, easeOut } from "@/lib/motion";

function CodeParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const chars = "01{}<>/;constletfn";
    let animationId = 0;
    const particles: {
      x: number;
      y: number;
      speed: number;
      char: string;
      opacity: number;
    }[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: 0.2 + Math.random() * 0.5,
        char: chars[Math.floor(Math.random() * chars.length)],
        opacity: 0.05 + Math.random() * 0.15,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.font = "12px monospace";
      particles.forEach((p) => {
        p.y -= p.speed;
        if (p.y < 0) {
          p.y = canvas.height;
          p.x = Math.random() * canvas.width;
        }
        ctx.fillStyle = `rgba(0, 255, 148, ${p.opacity})`;
        ctx.fillText(p.char, p.x, p.y);
      });
      animationId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full opacity-60"
      aria-hidden
    />
  );
}

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="hero-grid relative flex min-h-screen flex-col justify-center overflow-hidden pt-20 scanlines"
    >
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(0,255,148,0.12) 0%, transparent 70%)",
        }}
        aria-hidden
      />
      <CodeParticles />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={easeOut}
          >
            <div className="mb-6 inline-flex items-center gap-2 border border-accent/30 bg-accent/5 px-3 py-1.5 font-mono text-xs text-accent">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Available for opportunities
            </div>

            <p className="mb-2 font-mono text-sm text-muted">Hello, I&apos;m</p>
            <GlitchText
              text="SHAIKH SAMEER"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
            />

            <div className="mt-4 font-mono text-lg text-accent-blue sm:text-xl">
              <TypeAnimation
                sequence={TYPEWRITER_ROLES.flatMap((role) => [
                  role,
                  2000,
                ])}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                deletionSpeed={40}
              />
            </div>

            <p className="mt-6 max-w-xl font-mono text-sm leading-relaxed text-muted sm:text-base">
              {PROFESSIONAL_SUMMARY}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {HERO_TECH.map((tech, i) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.08 }}
                >
                  <TechBadge label={tech} />
                </motion.div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={CV_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-accent bg-accent/10 px-5 py-2.5 font-mono text-sm text-accent transition-all hover:bg-accent/20 hover:glow-accent"
              >
                <Download size={16} />
                Download CV ↓
              </a>
              <button
                type="button"
                onClick={() => scrollTo("projects")}
                className="inline-flex items-center gap-2 border border-white/20 px-5 py-2.5 font-mono text-sm text-white transition-colors hover:border-accent/50 hover:text-accent"
              >
                View Projects →
              </button>
            </div>

            <div className="mt-8 flex gap-5">
              <a
                href={SITE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted transition-colors hover:text-accent"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted transition-colors hover:text-accent"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="text-muted transition-colors hover:text-accent"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </motion.div>

          <TerminalWindow />
        </div>

        <div className="mt-16 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {HERO_STATS.map((stat) => (
            <AnimatedCounter
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      >
        <ArrowDown className="text-accent/50" size={24} />
      </motion.div>
    </section>
  );
}
