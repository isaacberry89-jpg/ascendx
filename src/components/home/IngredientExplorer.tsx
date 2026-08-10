"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { products } from "@/lib/products";
import { Section, Eyebrow } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ProductBottle } from "@/components/ui/ProductBottle";

export function IngredientExplorer() {
  const product = products[0];
  const ingredients = product.ingredients;
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const current = ingredients[active];

  return (
    <Section className="py-20 lg:py-28">
      <div className="mb-12 max-w-2xl">
        <Reveal>
          <Eyebrow>Ingredient Transparency</Eyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 font-display text-fluid-h2 font-semibold text-charcoal text-balance">
            Know exactly what&apos;s inside.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-4 text-lg text-stone">
            Tap any ingredient in {product.name} to see what it is, why we
            included it, and how much you get.
          </p>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
        {/* Orbit */}
        <div className="relative mx-auto aspect-square w-full max-w-md">
          <div
            className="absolute inset-0 rounded-full blur-3xl"
            style={{ background: `radial-gradient(circle, ${product.accent}22, transparent 65%)` }}
            aria-hidden
          />
          {/* Orbit rings */}
          <div className="absolute inset-[12%] rounded-full border border-charcoal/10" aria-hidden />
          <div className="absolute inset-[26%] rounded-full border border-charcoal/10" aria-hidden />

          {/* Center bottle */}
          <div className="absolute inset-[30%] flex items-center justify-center">
            <ProductBottle
              name={product.name}
              accent={product.accent}
              accentDeep={product.accentDeep}
              showLabel={false}
            />
          </div>

          {/* Ingredient nodes */}
          {ingredients.map((ing, i) => {
            const angle = (i / ingredients.length) * Math.PI * 2 - Math.PI / 2;
            const radius = 44; // percent
            const x = 50 + Math.cos(angle) * radius;
            const y = 50 + Math.sin(angle) * radius;
            const isActive = i === active;
            return (
              <motion.button
                key={ing.name}
                onClick={() => setActive(i)}
                className="absolute flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-center text-[0.7rem] font-semibold shadow-soft transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  width: 92,
                  height: 92,
                  background: isActive ? product.accent : "#FFFFFF",
                  color: isActive ? "#F7F4EE" : "#16161A",
                }}
                animate={reduce ? {} : { y: isActive ? 0 : [0, -5, 0] }}
                transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut" }}
                aria-pressed={isActive}
                aria-label={`View ${ing.name} details`}
              >
                <span className="px-2 leading-tight">{ing.name}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Detail panel */}
        <div className="rounded-card border border-charcoal/10 bg-white p-8 shadow-soft">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.name}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-display text-2xl font-semibold text-charcoal">
                  {current.name}
                </h3>
                <span
                  className="rounded-pill px-3 py-1 text-sm font-semibold text-ivory"
                  style={{ background: product.accent }}
                >
                  {current.amount}
                </span>
              </div>

              <dl className="mt-6 space-y-5">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-stone">
                    What it is
                  </dt>
                  <dd className="mt-1 text-charcoal">{current.what}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-stone">
                    Why it&apos;s included
                  </dt>
                  <dd className="mt-1 text-charcoal">{current.why}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-stone">
                    Its purpose
                  </dt>
                  <dd className="mt-1 font-medium text-ember">{current.purpose}</dd>
                </div>
              </dl>
            </motion.div>
          </AnimatePresence>

          <div className="mt-6 flex flex-wrap gap-2 border-t border-charcoal/10 pt-5">
            {ingredients.map((ing, i) => (
              <button
                key={ing.name}
                onClick={() => setActive(i)}
                className={`rounded-pill px-3 py-1.5 text-xs font-medium transition-colors ${
                  i === active
                    ? "bg-charcoal text-ivory"
                    : "bg-ivory-200 text-charcoal hover:bg-ivory-300"
                }`}
              >
                {ing.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
