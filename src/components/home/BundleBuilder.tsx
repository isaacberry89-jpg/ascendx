"use client";

import { useState, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { products } from "@/lib/products";
import { Section, Eyebrow } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ProductBottle } from "@/components/ui/ProductBottle";
import { useCart } from "@/components/cart/CartProvider";
import { formatPrice } from "@/lib/utils";

const goalOptions = [
  { id: "lose-weight", label: "Lose Weight", slugs: ["core-burn", "core-protein", "core-greens"] },
  { id: "build-muscle", label: "Build Muscle", slugs: ["core-protein", "core-recover", "core-vitality"] },
  { id: "feel-better", label: "Feel Better", slugs: ["core-greens", "core-vitality", "core-sleep"] },
  { id: "increase-energy", label: "Increase Energy", slugs: ["core-energy", "core-vitality", "core-greens"] },
  { id: "improve-recovery", label: "Improve Recovery", slugs: ["core-recover", "core-sleep", "core-protein"] },
];

const BUNDLE_DISCOUNT = 0.15;

export function BundleBuilder() {
  const [selected, setSelected] = useState(goalOptions[1].id);
  const { addItem, openCart } = useCart();

  const recommended = useMemo(() => {
    const goal = goalOptions.find((g) => g.id === selected)!;
    return goal.slugs
      .map((slug) => products.find((p) => p.slug === slug))
      .filter(Boolean) as typeof products;
  }, [selected]);

  const total = recommended.reduce((sum, p) => sum + p.price, 0);
  const bundlePrice = total * (1 - BUNDLE_DISCOUNT);
  const savings = total - bundlePrice;

  const addBundle = () => {
    recommended.forEach((p, i) =>
      addItem(p, { flavor: p.flavors[0], open: i === recommended.length - 1 })
    );
    openCart();
  };

  return (
    <Section className="py-20 lg:py-28">
      <div
        className="overflow-hidden rounded-[2rem] p-8 sm:p-12 lg:p-16"
        style={{
          background:
            "linear-gradient(155deg, #0E2823, #143A31 60%, #1E4A3E)",
        }}
      >
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          {/* Selector */}
          <div>
            <Reveal>
              <Eyebrow className="text-ember-light">Build Your Core</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 font-display text-fluid-h2 font-semibold text-ivory">
                Tell us your goal. We&apos;ll build the routine.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 text-lg text-stone-light">
                Pick what matters most right now and get a hand-matched bundle —
                with an automatic <strong className="text-ember-light">15% Bundle &amp; Save</strong>{" "}
                discount.
              </p>
            </Reveal>

            <div className="mt-8">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-stone-light">
                My Goal
              </p>
              <div className="flex flex-wrap gap-3">
                {goalOptions.map((goal) => (
                  <button
                    key={goal.id}
                    onClick={() => setSelected(goal.id)}
                    aria-pressed={selected === goal.id}
                    className={`rounded-pill px-5 py-3 text-sm font-semibold transition-all ${
                      selected === goal.id
                        ? "bg-ember text-ivory shadow-lift"
                        : "border border-white/15 bg-white/5 text-ivory/80 hover:border-white/40"
                    }`}
                  >
                    {goal.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Recommendation */}
          <div className="rounded-card bg-ivory p-6 shadow-lift sm:p-8">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold uppercase tracking-wider text-stone">
                Your recommended bundle
              </p>
              <span className="rounded-pill bg-sage/15 px-3 py-1 text-xs font-semibold text-sage">
                Save 15%
              </span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={selected}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="mt-5 flex items-end justify-center gap-2"
              >
                {recommended.map((p, i) => (
                  <div
                    key={p.slug}
                    className="w-1/3"
                    style={{ transform: `translateY(${i === 1 ? -12 : 0}px)` }}
                  >
                    <div
                      className="aspect-[4/5] overflow-hidden rounded-xl"
                      style={{
                        background: `radial-gradient(120% 120% at 50% 15%, ${p.accent}22, transparent 60%), #F4F0E8`,
                      }}
                    >
                      <div className="flex h-full items-center justify-center p-2">
                        <ProductBottle
                          name={p.name}
                          accent={p.accent}
                          accentDeep={p.accentDeep}
                          showLabel={false}
                        />
                      </div>
                    </div>
                    <p className="mt-2 text-center text-xs font-semibold text-charcoal">
                      {p.name}
                    </p>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>

            <div className="mt-6 space-y-2 border-t border-charcoal/10 pt-5">
              <div className="flex items-center justify-between text-sm text-stone">
                <span>Individually</span>
                <span className="line-through">{formatPrice(total)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-charcoal">Bundle price</span>
                <span className="font-display text-2xl font-semibold text-charcoal">
                  {formatPrice(bundlePrice)}
                </span>
              </div>
              <p className="text-sm font-semibold text-sage">
                You save {formatPrice(savings)}
              </p>
            </div>

            <button
              onClick={addBundle}
              className="mt-5 w-full rounded-pill bg-charcoal px-6 py-4 text-base font-semibold text-ivory transition-colors hover:bg-ember"
            >
              Add Bundle to Cart
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
}
