"use client";

import { useEffect, useState } from "react";

type GlitchTextProps = {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "span";
};

export default function GlitchText({
  text,
  className = "",
  as: Tag = "h1",
}: GlitchTextProps) {
  const [glitching, setGlitching] = useState(true);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      setGlitching(false);
      return;
    }

    const initial = setTimeout(() => setGlitching(false), 500);
    const interval = setInterval(() => {
      setGlitching(true);
      setTimeout(() => setGlitching(false), 400);
    }, 8000);

    return () => {
      clearTimeout(initial);
      clearInterval(interval);
    };
  }, []);

  return (
    <Tag
      className={`font-display font-bold uppercase tracking-tight text-white ${glitching ? "glitch-active" : ""} ${className}`}
    >
      {text}
    </Tag>
  );
}
