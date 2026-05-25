import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#050505",
        accent: "#00FF94",
        "accent-blue": "#00D4FF",
        muted: "#C8C8C8",
        surface: "rgba(255,255,255,0.03)",
        "border-subtle": "rgba(255,255,255,0.08)",
      },
      fontFamily: {
        display: ["var(--font-syne)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      animation: {
        blink: "blink 1s step-end infinite",
        "pulse-slow": "pulse 3s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        glitch: "glitch 0.4s ease-in-out",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glitch: {
          "0%, 100%": { textShadow: "none", transform: "none" },
          "20%": {
            textShadow: "-2px 0 #00FF94, 2px 0 #FF0066",
            transform: "translateX(-1px)",
          },
          "40%": {
            textShadow: "2px 0 #00D4FF, -2px 0 #FF0066",
            transform: "translateX(1px)",
          },
          "60%": { textShadow: "none", transform: "none" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
