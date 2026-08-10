"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import type { Product } from "@/lib/types";
import { ProductBottle } from "./ProductBottle";
import { Badge } from "./Badge";
import { StarRating } from "./StarRating";
import { useCart } from "@/components/cart/CartProvider";
import { formatPrice } from "@/lib/utils";

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const reduce = useReducedMotion();
  const [added, setAdded] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem(product, { flavor: product.flavors[0] });
    setAdded(true);
    setTimeout(() => setAdded(false), 1400);
  };

  return (
    <motion.div
      whileHover={reduce ? undefined : { y: -8 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="group relative"
    >
      <Link
        href={`/products/${product.slug}`}
        className="block overflow-hidden rounded-card bg-white shadow-soft transition-shadow duration-500 hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember"
      >
        {/* Art panel */}
        <div
          className="relative aspect-[4/5] overflow-hidden"
          style={{
            background: `radial-gradient(120% 120% at 50% 15%, ${product.accent}22, transparent 60%), #F4F0E8`,
          }}
        >
          <div className="absolute left-4 top-4 z-10 flex flex-col gap-2">
            {product.badges.slice(0, 2).map((b) => (
              <Badge key={b} label={b} />
            ))}
          </div>

          <motion.div
            className="absolute inset-0 flex items-center justify-center p-8"
            whileHover={reduce ? undefined : { scale: 1.06, rotate: -1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="h-[85%] w-full drop-shadow-2xl">
              <ProductBottle
                name={product.name}
                tagline={product.tagline}
                accent={product.accent}
                accentDeep={product.accentDeep}
              />
            </div>
          </motion.div>

          {/* Quick add */}
          <div className="absolute inset-x-4 bottom-4 translate-y-3 opacity-0 transition-all duration-400 ease-premium group-hover:translate-y-0 group-hover:opacity-100">
            <button
              onClick={handleAdd}
              aria-label={`Quick add ${product.name} to cart`}
              className="w-full rounded-pill bg-charcoal px-5 py-3 text-sm font-semibold text-ivory shadow-lift transition-colors hover:bg-ember focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2"
            >
              {added ? "Added ✓" : `Quick Add — ${formatPrice(product.price)}`}
            </button>
          </div>
        </div>

        {/* Info */}
        <div className="space-y-2 p-5">
          <div className="flex items-center justify-between gap-3">
            <h3 className="font-display text-xl font-semibold text-charcoal">
              {product.name}
            </h3>
            <span className="text-lg font-semibold text-charcoal">
              {formatPrice(product.price)}
            </span>
          </div>
          <p className="line-clamp-1 text-sm text-stone">{product.tagline}</p>
          <div className="flex items-center justify-between gap-3 pt-1">
            <StarRating rating={product.rating} />
            <span className="text-xs text-stone">{product.flavors[0]}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
