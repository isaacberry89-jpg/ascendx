"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { products } from "@/lib/products";
import { ProductBottle } from "@/components/ui/ProductBottle";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { formatPrice } from "@/lib/utils";

export function ProductSpotlight() {
  const product = products[0]; // Core Protein — flagship
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const bottleY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [80, -80]);
  const bottleScale = useTransform(scrollYProgress, [0, 0.5, 1], reduce ? [1, 1, 1] : [0.9, 1.05, 1]);

  const calloutPositions = [
    { top: "6%", left: "-6%" },
    { top: "24%", right: "-8%" },
    { top: "52%", left: "-10%" },
    { top: "70%", right: "-6%" },
    { top: "90%", left: "6%" },
  ];

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-24 lg:py-32"
      style={{
        background: `linear-gradient(180deg, #F5F1E8, ${product.accent}12, #F5F1E8)`,
      }}
      aria-label={`Product spotlight: ${product.name}`}
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:px-12">
        {/* Bottle with floating callouts */}
        <div className="relative order-2 mx-auto h-[420px] w-full max-w-md lg:order-1 lg:h-[560px]">
          <div
            className="absolute inset-0 rounded-full blur-3xl"
            style={{ background: `radial-gradient(circle, ${product.accent}33, transparent 65%)` }}
            aria-hidden
          />
          <motion.div
            style={{ y: bottleY, scale: bottleScale }}
            className="relative flex h-full items-center justify-center"
          >
            <motion.div
              className="h-[92%] drop-shadow-2xl"
              animate={reduce ? {} : { rotate: [-1.5, 1.5, -1.5] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            >
              <ProductBottle
                name={product.name}
                tagline={product.tagline}
                accent={product.accent}
                accentDeep={product.accentDeep}
              />
            </motion.div>
          </motion.div>

          {product.floatingCallouts.map((callout, i) => (
            <motion.div
              key={callout}
              className="absolute z-10 rounded-pill border border-charcoal/10 bg-white/90 px-4 py-2.5 text-sm font-semibold text-charcoal shadow-soft backdrop-blur"
              style={calloutPositions[i]}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.span
                className="flex items-center gap-2"
                animate={reduce ? {} : { y: [0, -6, 0] }}
                transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: "easeInOut" }}
              >
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ background: product.accent }}
                  aria-hidden
                />
                {callout}
              </motion.span>
            </motion.div>
          ))}
        </div>

        {/* Copy */}
        <div className="order-1 lg:order-2">
          <Reveal>
            <Eyebrow>Flagship Formula</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-display text-fluid-h2 font-semibold text-charcoal">
              {product.name}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-2 text-lg font-medium text-ember">{product.tagline}</p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-5 text-lg leading-relaxed text-stone">
              {product.purpose}
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <ul className="mt-8 space-y-3">
              {product.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 text-charcoal">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ember/15">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path d="M5 12.5l4 4L19 7" stroke="#1C6B5B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-[0.98rem]">{benefit}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <ButtonLink href={`/products/${product.slug}`} size="lg">
                Shop {product.name} — {formatPrice(product.price)}
              </ButtonLink>
              <Link
                href="/learn/reading-a-supplement-label"
                className="text-sm font-semibold text-charcoal underline underline-offset-4 hover:text-ember"
              >
                See the full formula
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
