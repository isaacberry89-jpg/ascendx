"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import type { Product } from "@/lib/types";
import { ProductBottle } from "@/components/ui/ProductBottle";
import { StarRating } from "@/components/ui/StarRating";
import { Badge } from "@/components/ui/Badge";
import { useCart } from "@/components/cart/CartProvider";
import { formatPrice } from "@/lib/utils";

export function ProductBuyPanel({ product }: { product: Product }) {
  const { addItem } = useCart();
  const reduce = useReducedMotion();
  const [flavor, setFlavor] = useState(product.flavors[0]);
  const [quantity, setQuantity] = useState(1);
  const [subscribe, setSubscribe] = useState(false);
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowSticky(window.scrollY > 620);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const unitPrice = subscribe ? product.subscriptionPrice : product.price;

  const handleAdd = () => {
    addItem(product, { flavor, subscribe, quantity });
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        {/* Gallery */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <div
            className="relative aspect-square overflow-hidden rounded-card shadow-soft"
            style={{
              background: `radial-gradient(120% 120% at 50% 15%, ${product.accent}26, transparent 60%), #F4F0E8`,
            }}
          >
            <div className="absolute left-5 top-5 z-10 flex gap-2">
              {product.badges.map((b) => (
                <Badge key={b} label={b} />
              ))}
            </div>
            <motion.div
              className="flex h-full items-center justify-center p-12"
              animate={reduce ? {} : { y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="h-full drop-shadow-2xl">
                <ProductBottle
                  name={product.name}
                  tagline={product.tagline}
                  accent={product.accent}
                  accentDeep={product.accentDeep}
                />
              </div>
            </motion.div>
          </div>

          {/* Thumbnails (decorative angles) */}
          <div className="mt-4 grid grid-cols-4 gap-3">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="aspect-square overflow-hidden rounded-xl border border-charcoal/10 bg-white p-3"
                style={{ opacity: i === 0 ? 1 : 0.6 }}
              >
                <div style={{ transform: `rotate(${i * 4 - 6}deg) scale(0.9)` }}>
                  <ProductBottle
                    name={product.name}
                    accent={product.accent}
                    accentDeep={product.accentDeep}
                    showLabel={i === 0}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Purchase info */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-ember">
            {product.category}
          </p>
          <h1 className="mt-2 font-display text-4xl font-semibold text-charcoal lg:text-5xl">
            {product.name}
          </h1>
          <div className="mt-3 flex items-center gap-3">
            <StarRating rating={product.rating} count={product.reviewCount} />
          </div>
          <p className="mt-4 text-lg leading-relaxed text-stone">{product.purpose}</p>

          {/* Flavor selector */}
          <div className="mt-8">
            <p className="mb-3 text-sm font-semibold text-charcoal">
              Flavor: <span className="font-normal text-stone">{flavor}</span>
            </p>
            <div className="flex flex-wrap gap-2">
              {product.flavors.map((f) => (
                <button
                  key={f}
                  onClick={() => setFlavor(f)}
                  aria-pressed={flavor === f}
                  className={`rounded-pill border-2 px-4 py-2.5 text-sm font-semibold transition-colors ${
                    flavor === f
                      ? "border-charcoal bg-charcoal text-ivory"
                      : "border-charcoal/15 text-charcoal hover:border-charcoal/40"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* Purchase option */}
          <div className="mt-8 space-y-3">
            <PurchaseOption
              active={!subscribe}
              onClick={() => setSubscribe(false)}
              title="One-Time Purchase"
              price={formatPrice(product.price)}
            />
            <PurchaseOption
              active={subscribe}
              onClick={() => setSubscribe(true)}
              title="Subscribe & Save 15%"
              subtitle="Delivered on your schedule · Cancel anytime"
              price={formatPrice(product.subscriptionPrice)}
              strike={formatPrice(product.price)}
              badge="Best value"
            />
          </div>

          {/* Quantity + add */}
          <div className="mt-8 flex items-center gap-4">
            <div className="flex items-center rounded-pill border border-charcoal/20">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                aria-label="Decrease quantity"
                className="flex h-14 w-12 items-center justify-center text-xl text-charcoal hover:text-ember"
              >
                −
              </button>
              <span className="w-8 text-center text-lg font-semibold tabular-nums">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                aria-label="Increase quantity"
                className="flex h-14 w-12 items-center justify-center text-xl text-charcoal hover:text-ember"
              >
                +
              </button>
            </div>
            <button
              onClick={handleAdd}
              className="flex-1 rounded-pill bg-charcoal px-8 py-4 text-base font-semibold text-ivory shadow-soft transition-all hover:-translate-y-0.5 hover:bg-ember hover:shadow-lift"
            >
              Add to Cart — {formatPrice(unitPrice * quantity)}
            </button>
          </div>

          <button className="mt-3 w-full rounded-pill border-2 border-charcoal/15 px-8 py-4 text-base font-semibold text-charcoal transition-colors hover:border-charcoal">
            Buy It Now
          </button>

          {/* Trust points */}
          <div className="mt-8 grid grid-cols-2 gap-4 border-t border-charcoal/10 pt-8">
            {[
              { icon: "🚚", label: "Free shipping over $75" },
              { icon: "🔬", label: "Third-party lab tested" },
              { icon: "↩️", label: "30-day money-back guarantee" },
              { icon: "🇺🇸", label: "Made in the USA" },
            ].map((t) => (
              <div key={t.label} className="flex items-center gap-3">
                <span className="text-xl" aria-hidden>
                  {t.icon}
                </span>
                <span className="text-sm text-charcoal">{t.label}</span>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm text-stone">
            <strong className="text-charcoal">Ships in 1–2 business days.</strong>{" "}
            {product.servings} servings per container.
          </p>
        </div>
      </div>

      {/* Sticky mobile add-to-cart bar */}
      <AnimatePresence>
        {showSticky && (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 bottom-0 z-40 border-t border-charcoal/10 bg-ivory/95 p-3 backdrop-blur-xl lg:hidden"
          >
            <div className="flex items-center gap-3">
              <div className="flex-1">
                <p className="text-sm font-semibold text-charcoal">{product.name}</p>
                <p className="text-xs text-stone">
                  {formatPrice(unitPrice)} · {flavor}
                </p>
              </div>
              <button
                onClick={handleAdd}
                className="rounded-pill bg-ember px-8 py-3.5 text-sm font-semibold text-ivory shadow-lift"
              >
                Add — {formatPrice(unitPrice * quantity)}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function PurchaseOption({
  active,
  onClick,
  title,
  subtitle,
  price,
  strike,
  badge,
}: {
  active: boolean;
  onClick: () => void;
  title: string;
  subtitle?: string;
  price: string;
  strike?: string;
  badge?: string;
}) {
  return (
    <button
      onClick={onClick}
      aria-pressed={active}
      className={`flex w-full items-center justify-between rounded-card border-2 p-5 text-left transition-all ${
        active ? "border-ember bg-ember/[0.04]" : "border-charcoal/10 hover:border-charcoal/30"
      }`}
    >
      <div className="flex items-center gap-4">
        <span
          className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 ${
            active ? "border-ember" : "border-charcoal/30"
          }`}
          aria-hidden
        >
          {active && <span className="h-3 w-3 rounded-full bg-ember" />}
        </span>
        <div>
          <div className="flex items-center gap-2">
            <p className="font-semibold text-charcoal">{title}</p>
            {badge && (
              <span className="rounded-pill bg-sage/15 px-2 py-0.5 text-[0.7rem] font-semibold text-sage">
                {badge}
              </span>
            )}
          </div>
          {subtitle && <p className="mt-0.5 text-xs text-stone">{subtitle}</p>}
        </div>
      </div>
      <div className="text-right">
        {strike && <span className="mr-2 text-sm text-stone line-through">{strike}</span>}
        <span className="font-semibold text-charcoal">{price}</span>
      </div>
    </button>
  );
}
