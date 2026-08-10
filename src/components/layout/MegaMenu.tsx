"use client";

import Link from "next/link";
import { products } from "@/lib/products";
import { goals } from "@/lib/goals";
import { ProductBottle } from "@/components/ui/ProductBottle";
import { formatPrice } from "@/lib/utils";

const categories = [
  "Protein",
  "Performance",
  "Weight Management",
  "Wellness",
  "Recovery",
];

export function MegaMenu({ onNavigate }: { onNavigate: () => void }) {
  const featured = products.slice(0, 3);

  return (
    <div className="border-t border-charcoal/10 bg-ivory/95 shadow-lift backdrop-blur-xl">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-12 gap-8 px-12 py-10">
        {/* Categories */}
        <div className="col-span-3">
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-stone">
            Shop by Category
          </h3>
          <ul className="space-y-1">
            {categories.map((cat) => (
              <li key={cat}>
                <Link
                  href={`/shop?category=${encodeURIComponent(cat)}`}
                  onClick={onNavigate}
                  className="group flex items-center justify-between rounded-lg px-3 py-2.5 text-[0.95rem] font-medium text-charcoal transition-colors hover:bg-white"
                >
                  {cat}
                  <span className="translate-x-0 text-ember opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100">
                    →
                  </span>
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/bundles"
                onClick={onNavigate}
                className="group flex items-center justify-between rounded-lg px-3 py-2.5 text-[0.95rem] font-semibold text-ember transition-colors hover:bg-white"
              >
                Bundles & Save
                <span className="text-ember">→</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Goals */}
        <div className="col-span-3">
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-stone">
            Shop by Goal
          </h3>
          <ul className="grid grid-cols-1 gap-1">
            {goals.map((g) => (
              <li key={g.id}>
                <Link
                  href={`/shop?goal=${g.id}`}
                  onClick={onNavigate}
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-[0.95rem] font-medium text-charcoal transition-colors hover:bg-white"
                >
                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ background: g.accent }}
                    aria-hidden
                  />
                  {g.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Featured products */}
        <div className="col-span-6">
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-stone">
            Featured
          </h3>
          <div className="grid grid-cols-3 gap-4">
            {featured.map((p) => (
              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                onClick={onNavigate}
                className="group rounded-card bg-white p-4 shadow-soft transition-all hover:shadow-lift"
              >
                <div
                  className="mb-3 aspect-square overflow-hidden rounded-xl"
                  style={{
                    background: `radial-gradient(120% 120% at 50% 20%, ${p.accent}22, transparent 60%), #F4F0E8`,
                  }}
                >
                  <div className="flex h-full items-center justify-center p-3 transition-transform duration-500 group-hover:scale-105">
                    <ProductBottle
                      name={p.name}
                      tagline={p.tagline}
                      accent={p.accent}
                      accentDeep={p.accentDeep}
                    />
                  </div>
                </div>
                <p className="text-sm font-semibold text-charcoal">{p.name}</p>
                <p className="text-sm text-stone">{formatPrice(p.price)}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
