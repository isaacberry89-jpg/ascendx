"use client";

import Link from "next/link";
import { useState } from "react";

const columns = [
  {
    title: "Shop",
    links: [
      { label: "All Products", href: "/shop" },
      { label: "Best Sellers", href: "/shop?filter=best-sellers" },
      { label: "Bundles", href: "/bundles" },
      { label: "Shop by Goal", href: "/shop#goals" },
    ],
  },
  {
    title: "Learn",
    links: [
      { label: "The Core Journal", href: "/learn" },
      { label: "About Us", href: "/about" },
      { label: "Ingredients", href: "/learn" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Contact", href: "/contact" },
      { label: "Shipping", href: "/shipping" },
      { label: "Returns", href: "/returns" },
      { label: "Account", href: "/account" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Accessibility", href: "/accessibility" },
      { label: "Wholesale", href: "/wholesale" },
    ],
  },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <footer className="relative overflow-hidden bg-charcoal text-ivory">
      <div className="grain pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Brand + newsletter */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5">
              <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden>
                <circle cx="20" cy="20" r="19" fill="#143A31" />
                <circle cx="20" cy="20" r="12" fill="none" stroke="#2F8D77" strokeWidth="2" />
                <circle cx="20" cy="20" r="5" fill="#BE9A3A" />
              </svg>
              <div className="font-display leading-none">
                <div className="text-lg font-semibold">TOTAL CORE</div>
                <div className="text-[0.7rem] tracking-[0.3em] text-stone-light">
                  NUTRITION
                </div>
              </div>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-stone-light">
              Nutrition built around your entire body. Premium formulas for
              performance, recovery, wellness, and everyday health.
            </p>

            <form
              className="mt-6"
              onSubmit={(e) => {
                e.preventDefault();
                if (email) setSent(true);
              }}
            >
              <label htmlFor="footer-email" className="mb-2 block text-sm font-medium">
                Join The Core
              </label>
              {sent ? (
                <p className="rounded-pill bg-sage/20 px-4 py-3 text-sm text-sage-light">
                  Thanks — check your inbox to confirm.
                </p>
              ) : (
                <div className="flex overflow-hidden rounded-pill border border-white/15 bg-white/5">
                  <input
                    id="footer-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    className="flex-1 bg-transparent px-4 py-3 text-sm text-ivory placeholder:text-stone-light focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="bg-ember px-5 text-sm font-semibold text-ivory transition-colors hover:bg-ember-dark"
                  >
                    Join
                  </button>
                </div>
              )}
            </form>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8">
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-stone-light">
                  {col.title}
                </h3>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-ivory/80 transition-colors hover:text-ember-light"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Social + disclaimer */}
        <div className="mt-14 border-t border-white/10 pt-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex gap-3">
              {["Instagram", "TikTok", "Facebook"].map((s) => (
                <a
                  key={s}
                  href="#"
                  aria-label={s}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-ivory/80 transition-colors hover:border-ember hover:text-ember-light"
                >
                  <SocialIcon name={s} />
                </a>
              ))}
            </div>
            <p className="text-sm text-stone-light">
              © {new Date().getFullYear()} Total Core Nutrition. All rights reserved.
            </p>
          </div>

          <div className="mt-8 rounded-card border border-white/10 bg-white/[0.03] p-5">
            <p className="text-xs leading-relaxed text-stone-light">
              <strong className="text-ivory/90">Disclaimer:</strong> These
              statements have not been evaluated by the Food and Drug
              Administration. This product is not intended to diagnose, treat,
              cure, or prevent any disease. Dietary supplements are not a
              substitute for a balanced diet. Consult your physician before
              beginning any supplement program, especially if you are pregnant,
              nursing, taking medication, or have a medical condition. Keep out
              of reach of children.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ name }: { name: string }) {
  if (name === "Instagram") {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
      </svg>
    );
  }
  if (name === "TikTok") {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M16 3c.3 2 1.5 3.4 3.5 3.7v2.5c-1.3 0-2.5-.4-3.5-1v5.6a5.3 5.3 0 1 1-5.3-5.3c.3 0 .6 0 .9.1v2.6a2.7 2.7 0 1 0 1.9 2.6V3H16z" />
      </svg>
    );
  }
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M14 9h3l.5-3H14V4.5c0-.8.3-1.5 1.5-1.5H17V.5C16.6.4 15.6.3 14.6.3 12.3.3 11 1.6 11 4v2H8v3h3v9h3V9z" />
    </svg>
  );
}
