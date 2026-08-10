"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import type { Product } from "@/lib/types";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/ui/ProductCard";
import { StarRating } from "@/components/ui/StarRating";
import { ProductBottle } from "@/components/ui/ProductBottle";
import { Section } from "@/components/ui/Section";
import { useCart } from "@/components/cart/CartProvider";
import { formatPrice } from "@/lib/utils";

export function ProductDetails({ product }: { product: Product }) {
  const related = products
    .filter((p) => p.slug !== product.slug && p.goals.some((g) => product.goals.includes(g)))
    .slice(0, 3);

  return (
    <>
      {/* Benefits band */}
      <Section className="border-t border-charcoal/10 py-16">
        <h2 className="mb-8 font-display text-3xl font-semibold text-charcoal">
          Why you&apos;ll love it
        </h2>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {product.benefits.map((b) => (
            <div
              key={b}
              className="flex items-start gap-4 rounded-card border border-charcoal/10 bg-white p-6 shadow-soft"
            >
              <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ember/15">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M5 12.5l4 4L19 7" stroke="#C6743B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <p className="text-[1.02rem] text-charcoal">{b}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Accordion sections */}
      <Section className="py-8">
        <div className="mx-auto max-w-3xl">
          <Accordion title="How To Use" defaultOpen>
            <ol className="space-y-3">
              {product.howToUse.map((step, i) => (
                <li key={i} className="flex gap-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-charcoal text-sm font-semibold text-ivory">
                    {i + 1}
                  </span>
                  <span className="pt-0.5 text-charcoal">{step}</span>
                </li>
              ))}
            </ol>
          </Accordion>

          <Accordion title="Supplement Facts">
            <div className="overflow-hidden rounded-xl border-2 border-charcoal">
              <div className="border-b-4 border-charcoal bg-white px-4 py-3">
                <p className="font-display text-xl font-bold text-charcoal">
                  Supplement Facts
                </p>
                <p className="text-sm text-stone">
                  {product.servings} servings per container
                </p>
              </div>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-charcoal">
                    <th className="px-4 py-2 text-left font-semibold text-charcoal">
                      Amount Per Serving
                    </th>
                    <th className="px-4 py-2 text-right font-semibold text-charcoal">
                      % DV
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {product.supplementFacts.map((fact) => (
                    <tr key={fact.label} className="border-b border-charcoal/15">
                      <td className="px-4 py-2.5 text-charcoal">
                        <span className="font-medium">{fact.label}</span>{" "}
                        <span className="text-stone">{fact.amount}</span>
                      </td>
                      <td className="px-4 py-2.5 text-right text-charcoal">
                        {fact.dv ?? "—"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Accordion>

          <Accordion title="Ingredients">
            <div className="space-y-4">
              {product.ingredients.map((ing) => (
                <div key={ing.name} className="rounded-xl bg-white p-5 shadow-soft">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-charcoal">{ing.name}</p>
                    <span className="text-sm font-semibold text-ember">{ing.amount}</span>
                  </div>
                  <p className="mt-1 text-sm text-stone">{ing.what}</p>
                </div>
              ))}
            </div>
          </Accordion>

          <Accordion title="Why We Made It">
            <p className="text-[1.05rem] leading-relaxed text-charcoal">
              {product.whyWeMadeIt}
            </p>
          </Accordion>

          <Accordion title="FAQ">
            <div className="space-y-4">
              {product.faqs.map((faq) => (
                <div key={faq.q}>
                  <p className="font-semibold text-charcoal">{faq.q}</p>
                  <p className="mt-1 text-stone">{faq.a}</p>
                </div>
              ))}
            </div>
          </Accordion>
        </div>
      </Section>

      {/* Frequently bought together */}
      {related.length >= 2 && (
        <FrequentlyBoughtTogether product={product} related={related.slice(0, 2)} />
      )}

      {/* Reviews */}
      <Section className="border-t border-charcoal/10 py-16">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="font-display text-3xl font-semibold text-charcoal">
            Customer Reviews
          </h2>
          <div className="flex items-center gap-3">
            <StarRating rating={product.rating} size="md" />
            <span className="text-sm text-stone">
              {product.rating.toFixed(1)} · {product.reviewCount.toLocaleString()} reviews
            </span>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
          {sampleReviews(product).map((r, i) => (
            <div key={i} className="rounded-card border border-charcoal/10 bg-white p-6 shadow-soft">
              <div className="flex items-center justify-between">
                <StarRating rating={r.rating} />
                <span className="inline-flex items-center gap-1 text-xs font-medium text-sage">
                  ✓ Verified Buyer
                </span>
              </div>
              <p className="mt-3 font-semibold text-charcoal">{r.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-stone">{r.body}</p>
              <p className="mt-4 text-xs text-stone">— {r.name}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Related products */}
      {related.length > 0 && (
        <Section className="border-t border-charcoal/10 py-16">
          <h2 className="mb-8 font-display text-3xl font-semibold text-charcoal">
            Pairs well with
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </Section>
      )}
    </>
  );
}

function Accordion({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-charcoal/10">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="font-display text-xl font-semibold text-charcoal">{title}</span>
        <span
          className={`flex h-8 w-8 items-center justify-center rounded-full border border-charcoal/20 text-lg transition-transform ${
            open ? "rotate-45" : ""
          }`}
          aria-hidden
        >
          +
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-6">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function FrequentlyBoughtTogether({
  product,
  related,
}: {
  product: Product;
  related: Product[];
}) {
  const { addItem, openCart } = useCart();
  const all = [product, ...related];
  const total = all.reduce((sum, p) => sum + p.price, 0);
  const bundlePrice = total * 0.9;

  const addAll = () => {
    all.forEach((p, i) => addItem(p, { flavor: p.flavors[0], open: i === all.length - 1 }));
    openCart();
  };

  return (
    <Section className="border-t border-charcoal/10 py-16">
      <div className="rounded-card border border-charcoal/10 bg-white p-8 shadow-soft">
        <h2 className="mb-6 font-display text-2xl font-semibold text-charcoal">
          Frequently bought together
        </h2>
        <div className="flex flex-col items-center gap-6 lg:flex-row lg:justify-between">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {all.map((p, i) => (
              <div key={p.slug} className="flex items-center gap-3">
                <Link href={`/products/${p.slug}`} className="group text-center">
                  <div
                    className="h-28 w-24 overflow-hidden rounded-xl"
                    style={{
                      background: `radial-gradient(120% 120% at 50% 15%, ${p.accent}22, transparent 60%), #F4F0E8`,
                    }}
                  >
                    <div className="flex h-full items-center justify-center p-2 transition-transform group-hover:scale-105">
                      <ProductBottle
                        name={p.name}
                        accent={p.accent}
                        accentDeep={p.accentDeep}
                        showLabel={false}
                      />
                    </div>
                  </div>
                  <p className="mt-2 w-24 truncate text-xs font-medium text-charcoal">
                    {p.name}
                  </p>
                </Link>
                {i < all.length - 1 && (
                  <span className="text-2xl text-stone" aria-hidden>
                    +
                  </span>
                )}
              </div>
            ))}
          </div>
          <div className="text-center lg:text-right">
            <p className="text-sm text-stone">
              Total: <span className="line-through">{formatPrice(total)}</span>
            </p>
            <p className="font-display text-2xl font-semibold text-charcoal">
              {formatPrice(bundlePrice)}{" "}
              <span className="text-sm font-normal text-sage">Save 10%</span>
            </p>
            <button
              onClick={addAll}
              className="mt-3 rounded-pill bg-charcoal px-6 py-3.5 text-sm font-semibold text-ivory transition-colors hover:bg-ember"
            >
              Add All 3 to Cart
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
}

function sampleReviews(product: Product) {
  return [
    {
      rating: 5,
      title: "Exactly what I was looking for",
      body: `${product.name} has become a staple in my routine. Clean, effective, and it does what it says.`,
      name: "Jennifer L.",
    },
    {
      rating: 5,
      title: "Quality you can taste",
      body: "You can tell this is a premium product. Mixes well and no weird aftertaste. Will reorder.",
      name: "Michael S.",
    },
    {
      rating: 4,
      title: "Great value",
      body: "Happy with the transparency on the label and the results so far. Shipping was fast too.",
      name: "Andrea P.",
    },
    {
      rating: 5,
      title: "Highly recommend",
      body: `I was hesitant at first but ${product.name} won me over. My whole family uses it now.`,
      name: "Thomas R.",
    },
  ];
}
