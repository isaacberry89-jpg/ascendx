"use client";

import { motion, useReducedMotion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { ButtonLink } from "@/components/ui/Button";
import { ProductBottle } from "@/components/ui/ProductBottle";
import { products } from "@/lib/products";

const trustPoints = [
  "Premium Ingredients",
  "Third-Party Tested",
  "Transparent Formulas",
  "Fast U.S. Shipping",
];

const heroProducts = [products[0], products[2], products[1]];

export function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18 });
  const sy = useSpring(my, { stiffness: 60, damping: 18 });

  const handleMouse = (e: React.MouseEvent) => {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mx.set((e.clientX - rect.left - rect.width / 2) / rect.width);
    my.set((e.clientY - rect.top - rect.height / 2) / rect.height);
  };

  return (
    <section
      ref={ref}
      onMouseMove={handleMouse}
      className="relative min-h-[100svh] overflow-hidden pt-28 lg:pt-24"
      aria-label="Hero"
    >
      {/* Background wash */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(80% 60% at 70% 10%, rgba(28,107,91,0.16), transparent 55%), radial-gradient(60% 50% at 10% 90%, rgba(190,154,58,0.14), transparent 60%), #F5F1E8",
        }}
        aria-hidden
      />
      <div className="grain pointer-events-none absolute inset-0" aria-hidden />

      <div className="relative mx-auto grid min-h-[calc(100svh-7rem)] w-full max-w-7xl grid-cols-1 items-center gap-8 px-5 pb-16 sm:px-8 lg:grid-cols-12 lg:px-12">
        {/* Copy */}
        <div className="lg:col-span-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 rounded-pill border border-charcoal/10 bg-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-charcoal backdrop-blur"
          >
            <span className="h-2 w-2 rounded-full bg-ember" aria-hidden />
            Premium Wellness &amp; Performance
          </motion.div>

          <h1 className="mt-6 font-display text-fluid-hero font-semibold text-charcoal">
            <RevealWord delay={0.05}>Nutrition</RevealWord>{" "}
            <RevealWord delay={0.13}>From</RevealWord>{" "}
            <RevealWord delay={0.21}>The</RevealWord>{" "}
            <span className="gradient-text">
              <RevealWord delay={0.29}>Core.</RevealWord>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-6 max-w-md text-lg leading-relaxed text-stone"
          >
            Premium formulas designed to support performance, recovery, wellness,
            and everyday nutrition — for every body, at every age.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <ButtonLink href="/shop" size="lg">
              Shop Nutrition
            </ButtonLink>
            <ButtonLink href="/bundles" variant="secondary" size="lg">
              Find Your Formula
            </ButtonLink>
          </motion.div>

          {/* Trust points */}
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-10 grid max-w-md grid-cols-2 gap-x-6 gap-y-3"
          >
            {trustPoints.map((point) => (
              <li key={point} className="flex items-center gap-2 text-sm text-charcoal">
                <CheckIcon />
                {point}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Floating products */}
        <div className="relative h-[380px] sm:h-[460px] lg:col-span-6 lg:h-[600px]">
          {heroProducts.map((product, i) => {
            const positions = [
              { left: "38%", top: "8%", size: 320, depth: 1 },
              { left: "6%", top: "42%", size: 210, depth: 1.8 },
              { left: "62%", top: "50%", size: 230, depth: 2.4 },
            ];
            const pos = positions[i];
            return (
              <FloatingProduct
                key={product.slug}
                product={product}
                pos={pos}
                sx={sx}
                sy={sy}
                index={i}
                reduce={!!reduce}
              />
            );
          })}

          {/* Floating stat chip */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="absolute bottom-2 left-2 rounded-card border border-charcoal/10 bg-white/80 px-5 py-3 shadow-soft backdrop-blur"
          >
            <p className="font-display text-2xl font-semibold text-charcoal">50k+</p>
            <p className="text-xs text-stone">Happy customers</p>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-stone lg:flex">
        <span className="text-[0.7rem] uppercase tracking-[0.2em]">Scroll</span>
        <motion.span
          animate={reduce ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="block h-8 w-px bg-stone/50"
        />
      </div>
    </section>
  );
}

function FloatingProduct({
  product,
  pos,
  sx,
  sy,
  index,
  reduce,
}: {
  product: (typeof products)[number];
  pos: { left: string; top: string; size: number; depth: number };
  sx: ReturnType<typeof useSpring>;
  sy: ReturnType<typeof useSpring>;
  index: number;
  reduce: boolean;
}) {
  const x = useTransform(sx, (v) => v * 40 * pos.depth);
  const y = useTransform(sy, (v) => v * 40 * pos.depth);

  return (
    <motion.div
      className="absolute"
      style={{
        left: pos.left,
        top: pos.top,
        width: pos.size,
        height: pos.size,
        x: reduce ? 0 : x,
        y: reduce ? 0 : y,
        zIndex: 10 - index,
      }}
      initial={{ opacity: 0, y: 40, rotate: -4 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 0.9, delay: 0.3 + index * 0.15, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="h-full w-full drop-shadow-2xl"
        animate={reduce ? {} : { y: [0, -14, 0] }}
        transition={{ duration: 5 + index, repeat: Infinity, ease: "easeInOut" }}
      >
        <ProductBottle
          name={product.name}
          tagline={product.tagline}
          accent={product.accent}
          accentDeep={product.accentDeep}
        />
      </motion.div>
    </motion.div>
  );
}

function RevealWord({ children, delay }: { children: string; delay: number }) {
  return (
    <span className="inline-block overflow-hidden align-bottom">
      <motion.span
        className="inline-block"
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.span>
    </span>
  );
}

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden className="shrink-0">
      <circle cx="12" cy="12" r="10" fill="#4F8A6E" opacity="0.16" />
      <path
        d="M8 12.5l2.5 2.5L16 9"
        stroke="#3F7B60"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
