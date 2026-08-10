"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import Link from "next/link";
import { useCart } from "./CartProvider";
import { ProductBottle } from "@/components/ui/ProductBottle";
import { formatPrice, FREE_SHIPPING_THRESHOLD } from "@/lib/utils";
import { products } from "@/lib/products";

export function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    subtotal,
    updateQuantity,
    removeItem,
    toggleSubscribe,
    addItem,
  } = useCart();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeCart();
    if (isOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, closeCart]);

  const remaining = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const progress = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);

  const recommendation = products.find(
    (p) => !items.some((i) => i.slug === p.slug)
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[80] bg-charcoal/40 backdrop-blur-sm"
            onClick={closeCart}
            aria-hidden
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-y-0 right-0 z-[90] flex w-full max-w-md flex-col bg-ivory shadow-lift"
            role="dialog"
            aria-modal="true"
            aria-label="Shopping cart"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-charcoal/10 px-6 py-5">
              <h2 className="font-display text-xl font-semibold">Your Cart</h2>
              <button
                onClick={closeCart}
                aria-label="Close cart"
                className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-charcoal/5"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            {/* Free shipping meter */}
            <div className="border-b border-charcoal/10 bg-white px-6 py-4">
              {remaining > 0 ? (
                <p className="text-sm text-charcoal">
                  You&apos;re{" "}
                  <strong className="font-semibold text-ember">
                    {formatPrice(remaining)}
                  </strong>{" "}
                  away from free shipping.
                </p>
              ) : (
                <p className="text-sm font-semibold text-sage">
                  🎉 You&apos;ve unlocked free U.S. shipping!
                </p>
              )}
              <div className="mt-2 h-2 overflow-hidden rounded-full bg-ivory-300">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-ember to-brass"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {items.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
                  <p className="text-lg font-medium text-charcoal">
                    Your cart is empty
                  </p>
                  <p className="max-w-xs text-sm text-stone">
                    Start with your goal and find the formula that fits your routine.
                  </p>
                  <Link
                    href="/shop"
                    onClick={closeCart}
                    className="rounded-pill bg-charcoal px-6 py-3 text-sm font-semibold text-ivory"
                  >
                    Shop Nutrition
                  </Link>
                </div>
              ) : (
                <ul className="space-y-4">
                  {items.map((item) => (
                    <li
                      key={`${item.slug}-${item.flavor}`}
                      className="flex gap-4 rounded-card bg-white p-3 shadow-soft"
                    >
                      <div
                        className="h-24 w-20 shrink-0 overflow-hidden rounded-xl"
                        style={{
                          background: `radial-gradient(120% 120% at 50% 20%, ${item.accent}22, transparent 60%), #F4F0E8`,
                        }}
                      >
                        <div className="flex h-full items-center justify-center p-2">
                          <ProductBottle
                            name={item.name}
                            accent={item.accent}
                            accentDeep={item.accentDeep}
                            showLabel={false}
                          />
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <p className="font-semibold leading-tight text-charcoal">
                              {item.name}
                            </p>
                            <p className="text-xs text-stone">{item.flavor}</p>
                          </div>
                          <button
                            onClick={() => removeItem(item.slug, item.flavor)}
                            aria-label={`Remove ${item.name}`}
                            className="text-stone hover:text-ember"
                          >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                              <path
                                d="M6 6l12 12M18 6L6 18"
                                stroke="currentColor"
                                strokeWidth="1.6"
                                strokeLinecap="round"
                              />
                            </svg>
                          </button>
                        </div>

                        <button
                          onClick={() => toggleSubscribe(item.slug, item.flavor)}
                          className={`mt-1 inline-flex w-fit items-center gap-1.5 rounded-pill px-2.5 py-1 text-[0.7rem] font-semibold transition-colors ${
                            item.subscribe
                              ? "bg-sage/15 text-sage"
                              : "bg-charcoal/5 text-stone hover:bg-charcoal/10"
                          }`}
                          aria-pressed={item.subscribe}
                        >
                          <span
                            className={`h-1.5 w-1.5 rounded-full ${
                              item.subscribe ? "bg-sage" : "bg-stone"
                            }`}
                          />
                          {item.subscribe ? "Subscribed · Save 15%" : "Subscribe & Save 15%"}
                        </button>

                        <div className="mt-auto flex items-center justify-between pt-2">
                          <div className="flex items-center rounded-pill border border-charcoal/15">
                            <button
                              onClick={() =>
                                updateQuantity(item.slug, item.flavor, item.quantity - 1)
                              }
                              aria-label="Decrease quantity"
                              className="flex h-8 w-8 items-center justify-center text-charcoal hover:text-ember"
                            >
                              −
                            </button>
                            <span className="w-6 text-center text-sm font-semibold tabular-nums">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(item.slug, item.flavor, item.quantity + 1)
                              }
                              aria-label="Increase quantity"
                              className="flex h-8 w-8 items-center justify-center text-charcoal hover:text-ember"
                            >
                              +
                            </button>
                          </div>
                          <span className="font-semibold text-charcoal">
                            {formatPrice(
                              (item.subscribe ? item.subscriptionPrice : item.price) *
                                item.quantity
                            )}
                          </span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}

              {/* Recommended add-on */}
              {items.length > 0 && recommendation && (
                <div className="mt-6 rounded-card border border-dashed border-charcoal/20 p-4">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-stone">
                    Pairs well with
                  </p>
                  <div className="flex items-center gap-3">
                    <div
                      className="h-16 w-14 shrink-0 overflow-hidden rounded-lg"
                      style={{
                        background: `radial-gradient(120% 120% at 50% 20%, ${recommendation.accent}22, transparent 60%), #F4F0E8`,
                      }}
                    >
                      <div className="flex h-full items-center justify-center p-1.5">
                        <ProductBottle
                          name={recommendation.name}
                          accent={recommendation.accent}
                          accentDeep={recommendation.accentDeep}
                          showLabel={false}
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-charcoal">
                        {recommendation.name}
                      </p>
                      <p className="text-xs text-stone">
                        {formatPrice(recommendation.price)}
                      </p>
                    </div>
                    <button
                      onClick={() =>
                        addItem(recommendation, {
                          flavor: recommendation.flavors[0],
                          open: false,
                        })
                      }
                      className="rounded-pill bg-charcoal px-4 py-2 text-xs font-semibold text-ivory hover:bg-ember"
                    >
                      Add
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-charcoal/10 bg-white px-6 py-5">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-sm text-stone">Subtotal</span>
                  <span className="font-display text-2xl font-semibold text-charcoal">
                    {formatPrice(subtotal)}
                  </span>
                </div>
                <button className="w-full rounded-pill bg-ember px-6 py-4 text-base font-semibold text-ivory shadow-lift transition-all hover:-translate-y-0.5 hover:bg-ember-dark">
                  Checkout — {formatPrice(subtotal)}
                </button>
                <p className="mt-3 text-center text-xs text-stone">
                  Taxes &amp; shipping calculated at checkout · 30-day guarantee
                </p>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
