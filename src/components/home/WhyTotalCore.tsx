"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Section, Eyebrow } from "@/components/ui/Section";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

const cards = [
  {
    title: "Transparent Formulas",
    short: "Every ingredient, every dose — printed clearly on the label.",
    long: "No proprietary blends hiding what's inside. You see exactly what you're taking and how much, so you can make an informed choice.",
    icon: "◍",
  },
  {
    title: "Quality Ingredients",
    short: "Premium, well-researched sources you can actually pronounce.",
    long: "We source from trusted suppliers and test every batch through independent third-party labs for purity and potency.",
    icon: "✦",
  },
  {
    title: "Purposeful Dosing",
    short: "Effective amounts backed by research — not fairy dusting.",
    long: "Many brands add trendy ingredients in amounts too small to matter. We dose based on evidence, so each serving does something real.",
    icon: "◐",
  },
  {
    title: "No Unnecessary Fillers",
    short: "Clean formulas without artificial dyes or junk.",
    long: "No artificial colors, unnecessary fillers, or questionable additives. Just the ingredients that belong and nothing that doesn't.",
    icon: "◇",
  },
];

export function WhyTotalCore() {
  return (
    <Section className="py-20 lg:py-28">
      <div className="mb-12 max-w-2xl">
        <Reveal>
          <Eyebrow>Why Total Core</Eyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 font-display text-fluid-h2 font-semibold text-charcoal text-balance">
            What goes into your body matters.
          </h2>
        </Reveal>
      </div>

      <Stagger className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => (
          <StaggerItem key={card.title}>
            <FlipCard card={card} />
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

function FlipCard({ card }: { card: (typeof cards)[number] }) {
  const [open, setOpen] = useState(false);

  return (
    <button
      onClick={() => setOpen((o) => !o)}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      aria-expanded={open}
      className="group relative flex h-full min-h-[260px] w-full flex-col justify-between overflow-hidden rounded-card border border-charcoal/10 bg-white p-7 text-left shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: "radial-gradient(120% 100% at 0% 0%, rgba(28,107,91,0.09), transparent 60%)" }}
        aria-hidden
      />
      <span
        className="relative flex h-12 w-12 items-center justify-center rounded-full bg-ivory-200 text-xl text-ember"
        aria-hidden
      >
        {card.icon}
      </span>

      <div className="relative mt-6">
        <h3 className="font-display text-xl font-semibold text-charcoal">
          {card.title}
        </h3>
        <div className="relative mt-2 min-h-[72px]">
          <motion.p
            animate={{ opacity: open ? 0 : 1, y: open ? -6 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute text-sm leading-relaxed text-stone"
          >
            {card.short}
          </motion.p>
          <motion.p
            animate={{ opacity: open ? 1 : 0, y: open ? 0 : 6 }}
            transition={{ duration: 0.3 }}
            className="absolute text-sm leading-relaxed text-charcoal"
          >
            {card.long}
          </motion.p>
        </div>
        <span className="mt-3 inline-block text-xs font-semibold uppercase tracking-wider text-ember">
          {open ? "—" : "+ Learn more"}
        </span>
      </div>
    </button>
  );
}
