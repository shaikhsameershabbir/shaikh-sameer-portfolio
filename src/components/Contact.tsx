"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { SITE } from "@/lib/constants";
import { fadeInLeft, fadeInRight, easeOut, viewportOnce } from "@/lib/motion";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (form: FormData) => {
    const next: Record<string, string> = {};
    const name = (form.get("name") as string)?.trim();
    const email = (form.get("email") as string)?.trim();
    const message = (form.get("message") as string)?.trim();
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name) next.name = "Name is required";
    if (!email) next.email = "Email is required";
    else if (!emailRe.test(email)) next.email = "Enter a valid email";
    if (!message) next.message = "Message is required";
    return next;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const validation = validate(form);
    setErrors(validation);
    if (Object.keys(validation).length > 0) return;

    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("success");
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader title="// let's build something" />

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeInLeft}
            transition={easeOut}
            className="glass-card border border-white/10 p-6 font-mono text-sm md:p-8"
          >
            <p className="text-accent-blue">$ contact --info</p>
            <div className="mt-6 space-y-3 text-muted">
              <p>
                <span className="text-accent">&gt; </span>email{" "}
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-white hover:text-accent"
                >
                  {SITE.email}
                </a>
              </p>
              <p>
                <span className="text-accent">&gt; </span>phone{" "}
                <a href={`tel:${SITE.phone}`} className="text-white hover:text-accent">
                  {SITE.phone}
                </a>
              </p>
              <p>
                <span className="text-accent">&gt; </span>location{" "}
                {SITE.location}
              </p>
              <p>
                <span className="text-accent">&gt; </span>github{" "}
                <a
                  href={SITE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-accent"
                >
                  github.com/shaikhsameershabbir
                </a>
              </p>
              <p>
                <span className="text-accent">&gt; </span>linkedin{" "}
                <a
                  href={SITE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-accent"
                >
                  linkedin.com/in/shaikh-sameer07
                </a>
              </p>
              <p>
                <span className="text-accent">&gt; </span>status{" "}
                <span className="text-accent">● Available for opportunities</span>
              </p>
            </div>
          </motion.div>

          <motion.form
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeInRight}
            transition={easeOut}
            onSubmit={handleSubmit}
            className="glass-card space-y-5 border border-white/10 p-6 md:p-8"
            noValidate
          >
            <div>
              <label htmlFor="name" className="font-mono text-xs text-accent/80">
                {"// name"}
              </label>
              <input
                id="name"
                name="name"
                className="mt-2 w-full border border-accent/40 bg-black/60 px-4 py-3 font-mono text-sm text-white outline-none focus:border-accent"
                placeholder="Your name"
              />
              {errors.name && (
                <p className="mt-1 font-mono text-xs text-red-400">{errors.name}</p>
              )}
            </div>
            <div>
              <label htmlFor="email" className="font-mono text-xs text-accent/80">
                {"// email"}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="mt-2 w-full border border-accent/40 bg-black/60 px-4 py-3 font-mono text-sm text-white outline-none focus:border-accent"
                placeholder="you@company.com"
              />
              {errors.email && (
                <p className="mt-1 font-mono text-xs text-red-400">{errors.email}</p>
              )}
            </div>
            <div>
              <label htmlFor="message" className="font-mono text-xs text-accent/80">
                {"// message"}
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="mt-2 w-full resize-none border border-accent/40 bg-black/60 px-4 py-3 font-mono text-sm text-white outline-none focus:border-accent"
                placeholder="Tell me about the role or project..."
              />
              {errors.message && (
                <p className="mt-1 font-mono text-xs text-red-400">
                  {errors.message}
                </p>
              )}
            </div>

            {status === "success" && (
              <p className="font-mono text-sm text-accent">
                &gt; Message sent ✓
              </p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="flex w-full items-center justify-center gap-2 border border-accent bg-accent/10 py-3 font-mono text-sm text-accent transition-all hover:bg-accent/20 hover:shadow-[0_0_24px_rgba(0,255,148,0.2)] disabled:opacity-50"
            >
              {status === "sending" ? (
                <>
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                    className="inline-block h-4 w-4 border-2 border-accent/30 border-t-accent"
                  />
                  sending...
                </>
              ) : (
                <>
                  <Send size={16} />
                  submit --send
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
