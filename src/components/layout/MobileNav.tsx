"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { goals } from "@/lib/goals";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
  links: { label: string; href: string }[];
}

export function MobileNav({ open, onClose, links }: MobileNavProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-charcoal/40 backdrop-blur-sm lg:hidden"
            onClick={onClose}
            aria-hidden
          />
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-y-0 left-0 z-[70] flex w-[88%] max-w-sm flex-col bg-ivory shadow-lift lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
          >
            <div className="flex items-center justify-between border-b border-charcoal/10 px-6 py-5">
              <span className="font-display text-lg font-semibold">TOTAL CORE</span>
              <button
                onClick={onClose}
                aria-label="Close menu"
                className="flex h-11 w-11 items-center justify-center rounded-full hover:bg-charcoal/5"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-4 py-6" aria-label="Mobile">
              <ul className="space-y-1">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className="block rounded-xl px-4 py-4 text-lg font-medium text-charcoal transition-colors hover:bg-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-6 border-t border-charcoal/10 pt-6">
                <p className="mb-3 px-4 text-xs font-semibold uppercase tracking-[0.2em] text-stone">
                  Shop by Goal
                </p>
                <ul className="space-y-1">
                  {goals.map((g) => (
                    <li key={g.id}>
                      <Link
                        href={`/shop?goal=${g.id}`}
                        onClick={onClose}
                        className="flex items-center gap-3 rounded-xl px-4 py-3.5 text-base font-medium text-charcoal transition-colors hover:bg-white"
                      >
                        <span
                          className="h-3 w-3 rounded-full"
                          style={{ background: g.accent }}
                          aria-hidden
                        />
                        {g.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>

            <div className="border-t border-charcoal/10 p-4">
              <Link
                href="/account"
                onClick={onClose}
                className="flex w-full items-center justify-center rounded-pill bg-charcoal px-6 py-4 text-base font-semibold text-ivory"
              >
                Account & Orders
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
