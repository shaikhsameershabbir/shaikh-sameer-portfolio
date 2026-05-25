"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";
import { CV_URL, NAV_SECTIONS } from "@/lib/constants";

const navLinks = [...NAV_SECTIONS];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("about");
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();
  const navHeight = useTransform(scrollY, [0, 120], [64, 52]);
  const navPadding = useTransform(scrollY, [0, 120], [0, 4]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    navLinks.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <motion.header
      style={{ height: navHeight, paddingTop: navPadding }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-bg/80 backdrop-blur-md"
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-mono text-sm text-accent transition-opacity hover:opacity-80 sm:text-base"
        >
          <span className="text-muted">&gt; </span>
          sameer_
          <span className="animate-blink text-accent">▋</span>
        </button>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((id) => (
            <button
              key={id}
              type="button"
              onClick={() => scrollTo(id)}
              className={`px-3 py-2 font-mono text-xs lowercase transition-colors ${
                activeSection === id
                  ? "text-accent"
                  : "text-muted/70 hover:text-white"
              }`}
            >
              {id}
            </button>
          ))}
          <a
            href={CV_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 border border-accent/40 px-3 py-1.5 font-mono text-xs text-accent transition-all hover:glow-accent hover:bg-accent/5"
          >
            CV ↗
          </a>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <a
            href={CV_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-accent/40 px-2 py-1 font-mono text-xs text-accent"
          >
            CV ↗
          </a>
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 text-muted"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-white/5 bg-bg/95 md:hidden"
          >
            <div className="space-y-1 px-4 py-4">
              {navLinks.map((id, i) => (
                <motion.button
                  key={id}
                  type="button"
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => scrollTo(id)}
                  className={`block w-full py-3 text-left font-mono text-sm lowercase ${
                    activeSection === id ? "text-accent" : "text-muted"
                  }`}
                >
                  {id}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
