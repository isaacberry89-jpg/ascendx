"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { goals } from "@/lib/goals";
import { Section, Eyebrow } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function ShopByGoal() {
  const reduce = useReducedMotion();

  return (
    <Section id="goals" className="py-20 lg:py-28">
      <div className="mb-12 max-w-2xl">
        <Reveal>
          <Eyebrow>Start With Your Goal</Eyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 font-display text-fluid-h2 font-semibold text-charcoal text-balance">
            Nutrition built around your entire body.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-4 text-lg text-stone">
            Everyone starts somewhere different. Pick the goal that fits your life
            right now — we&apos;ll point you to the right formulas.
          </p>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {goals.map((goal, i) => (
          <Reveal key={goal.id} delay={i * 0.06}>
            <Link
              href={`/shop?goal=${goal.id}`}
              className="group relative flex h-full min-h-[220px] flex-col justify-between overflow-hidden rounded-card p-7 shadow-soft transition-shadow duration-500 hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember"
              style={{
                background: `linear-gradient(155deg, ${goal.accent}, ${goal.accentSoft})`,
              }}
            >
              {/* Decorative orb */}
              <motion.div
                className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/15 blur-xl"
                whileHover={reduce ? undefined : { scale: 1.3 }}
                transition={{ duration: 0.6 }}
                aria-hidden
              />
              <div
                className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background: `radial-gradient(120% 100% at 100% 0%, rgba(255,255,255,0.22), transparent 55%)`,
                }}
                aria-hidden
              />

              <div className="relative flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/20 text-lg backdrop-blur">
                  <GoalGlyph id={goal.id} />
                </span>
                <span className="text-2xl text-white/80 transition-transform duration-400 group-hover:translate-x-1">
                  →
                </span>
              </div>

              <div className="relative">
                <h3 className="font-display text-2xl font-semibold text-white">
                  {goal.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/85">
                  {goal.description}
                </p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function GoalGlyph({ id }: { id: string }) {
  const glyphs: Record<string, string> = {
    "build-recover": "💪",
    "energy-performance": "⚡",
    "weight-management": "⚖️",
    "daily-wellness": "🌿",
    "healthy-aging": "🌅",
    "digestive-health": "🍃",
  };
  return <span aria-hidden>{glyphs[id] ?? "◎"}</span>;
}
