"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TERMINAL_LINES } from "@/lib/constants";

export default function TerminalWindow() {
  const [visibleLines, setVisibleLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      setVisibleLines([...TERMINAL_LINES]);
      return;
    }

    if (lineIndex >= TERMINAL_LINES.length) return;

    const line = TERMINAL_LINES[lineIndex];
    const delay = line.startsWith("$") ? 80 : 35;

    const timer = setTimeout(() => {
      if (charIndex < line.length) {
        setCurrentLine(line.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      } else {
        setVisibleLines((prev) => [...prev, line]);
        setCurrentLine("");
        setCharIndex(0);
        setLineIndex((i) => i + 1);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [lineIndex, charIndex]);

  const allDone = lineIndex >= TERMINAL_LINES.length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="glass-card glow-accent-hover overflow-hidden border border-white/10"
    >
      <div className="flex items-center gap-2 border-b border-white/10 bg-black/60 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-accent/80" />
        <span className="ml-2 font-mono text-xs text-muted/60">
          sameer@portfolio — bash
        </span>
      </div>
      <div className="min-h-[220px] space-y-2 p-4 font-mono text-xs leading-relaxed sm:text-sm">
        {visibleLines.map((line) => (
          <p
            key={line}
            className={
              line.startsWith("$")
                ? "text-accent-blue"
                : line.includes("✓")
                  ? "text-accent"
                  : "text-muted"
            }
          >
            {line}
          </p>
        ))}
        {!allDone && currentLine && (
          <p
            className={
              TERMINAL_LINES[lineIndex]?.startsWith("$")
                ? "text-accent-blue"
                : "text-muted"
            }
          >
            {currentLine}
            <span className="animate-blink text-accent">▋</span>
          </p>
        )}
        {allDone && (
          <p className="text-muted/50">
            <span className="text-accent">▋</span>
          </p>
        )}
      </div>
    </motion.div>
  );
}
