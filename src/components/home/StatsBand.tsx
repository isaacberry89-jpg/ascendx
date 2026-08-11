"use client";

import { motion, useReducedMotion } from "framer-motion";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Reveal } from "@/components/ui/Reveal";

const stats = [
  { value: 50, suffix: "k+", label: "Happy customers" },
  { value: 4.8, suffix: "★", decimals: 1, label: "Average rating" },
  { value: 100, suffix: "%", label: "Transparent labels" },
  { value: 30, suffix: "-day", label: "Money-back guarantee" },
];

export function StatsBand() {
  const reduce = useReducedMotion();

  return (
    <section
      className="relative overflow-hidden bg-charcoal py-16 text-ivory lg:py-20"
      aria-label="By the numbers"
    >
      <div className="grain pointer-events-none absolute inset-0" aria-hidden />
      {/* Slowly drifting gradient */}
      <motion.div
        className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-ember/15 blur-3xl"
        animate={reduce ? {} : { x: [0, 60, 0], y: [0, 40, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />
      <motion.div
        className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-sage/15 blur-3xl"
        animate={reduce ? {} : { x: [0, -50, 0], y: [0, -30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-2 gap-8 px-5 sm:px-8 lg:grid-cols-4 lg:px-12">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08} className="text-center">
            <p className="font-display text-5xl font-semibold text-ember-light lg:text-6xl">
              <AnimatedCounter
                value={s.value}
                suffix={s.suffix}
                decimals={s.decimals ?? 0}
              />
            </p>
            <p className="mt-2 text-sm text-stone-light">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
