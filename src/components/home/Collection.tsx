"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { products } from "@/lib/products";
import { ProductBottle } from "@/components/ui/ProductBottle";
import { Eyebrow } from "@/components/ui/Section";
import { StarRating } from "@/components/ui/StarRating";
import { formatPrice } from "@/lib/utils";

export function Collection() {
  const reduce = useReducedMotion();
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const pinned = isDesktop && !reduce;

  return pinned ? <PinnedTrack /> : <FallbackRow />;
}

function PinnedTrack() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Move the track from 0 to the overflow width (cards - viewport)
  const x = useTransform(scrollYProgress, [0, 1], ["2%", "-72%"]);
  const bg = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["#F5F1E8", "#EFE9DC", "#F5F1E8"]
  );

  return (
    <section
      ref={ref}
      className="relative h-[320vh]"
      aria-label="The full collection"
    >
      <motion.div
        style={{ background: bg }}
        className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden"
      >
        <div className="mx-auto mb-10 w-full max-w-7xl px-12">
          <div className="flex items-end justify-between">
            <div className="max-w-xl">
              <Eyebrow>The Full Collection</Eyebrow>
              <h2 className="mt-4 font-display text-fluid-h2 font-semibold text-charcoal">
                Eight formulas. One standard.
              </h2>
            </div>
            <p className="hidden text-sm text-stone lg:block">
              Scroll to explore →
            </p>
          </div>
        </div>

        <motion.div style={{ x }} className="flex gap-6 px-12 will-change-transform">
          {products.map((product) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="group relative flex h-[52vh] w-[380px] shrink-0 flex-col overflow-hidden rounded-card bg-white shadow-soft transition-shadow duration-500 hover:shadow-lift"
            >
              <div
                className="relative flex-1 overflow-hidden"
                style={{
                  background: `radial-gradient(120% 100% at 50% 10%, ${product.accent}26, transparent 60%), #F4F0E8`,
                }}
              >
                <div className="flex h-full items-center justify-center p-10 transition-transform duration-700 group-hover:scale-105">
                  <div className="h-full drop-shadow-2xl">
                    <ProductBottle
                      name={product.name}
                      tagline={product.tagline}
                      accent={product.accent}
                      accentDeep={product.accentDeep}
                    />
                  </div>
                </div>
                <span className="absolute left-5 top-5 rounded-pill bg-charcoal/80 px-3 py-1 text-xs font-semibold text-ivory backdrop-blur">
                  {product.category}
                </span>
              </div>
              <div className="flex items-center justify-between p-6">
                <div>
                  <h3 className="font-display text-xl font-semibold text-charcoal">
                    {product.name}
                  </h3>
                  <div className="mt-1">
                    <StarRating rating={product.rating} />
                  </div>
                </div>
                <span className="font-display text-lg font-semibold text-charcoal">
                  {formatPrice(product.price)}
                </span>
              </div>
            </Link>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

function FallbackRow() {
  return (
    <section className="py-20" aria-label="The full collection">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mb-8 max-w-xl">
          <Eyebrow>The Full Collection</Eyebrow>
          <h2 className="mt-4 font-display text-fluid-h2 font-semibold text-charcoal">
            Eight formulas. One standard.
          </h2>
        </div>
      </div>
      <div className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 sm:px-8 lg:px-12">
        {products.map((product) => (
          <Link
            key={product.slug}
            href={`/products/${product.slug}`}
            className="flex w-[75vw] shrink-0 snap-start flex-col overflow-hidden rounded-card bg-white shadow-soft sm:w-[320px]"
          >
            <div
              className="aspect-[4/5] overflow-hidden"
              style={{
                background: `radial-gradient(120% 100% at 50% 10%, ${product.accent}26, transparent 60%), #F4F0E8`,
              }}
            >
              <div className="flex h-full items-center justify-center p-8">
                <ProductBottle
                  name={product.name}
                  tagline={product.tagline}
                  accent={product.accent}
                  accentDeep={product.accentDeep}
                />
              </div>
            </div>
            <div className="flex items-center justify-between p-5">
              <div>
                <h3 className="font-display text-lg font-semibold text-charcoal">
                  {product.name}
                </h3>
                <StarRating rating={product.rating} />
              </div>
              <span className="font-semibold text-charcoal">
                {formatPrice(product.price)}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
