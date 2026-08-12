"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const STORAGE_KEY = "tcn-popup-seen";

export function EmailPopup() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    let triggered = false;
    const trigger = () => {
      if (triggered) return;
      triggered = true;
      setOpen(true);
      sessionStorage.setItem(STORAGE_KEY, "1");
      cleanup();
    };

    // Trigger after meaningful scroll engagement (~45% of page)
    const onScroll = () => {
      const scrolled =
        window.scrollY / (document.body.scrollHeight - window.innerHeight);
      if (scrolled > 0.45) trigger();
    };

    // Exit intent (desktop)
    const onMouseOut = (e: MouseEvent) => {
      if (e.clientY <= 0) trigger();
    };

    const cleanup = () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("mouseout", onMouseOut);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("mouseout", onMouseOut);

    return cleanup;
  }, []);

  const close = () => setOpen(false);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-charcoal/50 backdrop-blur-sm"
            onClick={close}
            aria-hidden
          />
          <motion.div
            initial={{ opacity: 0, scale: reduce ? 1 : 0.95, y: reduce ? 0 : 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: reduce ? 1 : 0.97, y: reduce ? 0 : 10 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed left-1/2 top-1/2 z-[110] w-[92%] max-w-md -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-card bg-ivory shadow-lift"
            role="dialog"
            aria-modal="true"
            aria-labelledby="popup-title"
          >
            <button
              onClick={close}
              aria-label="Close"
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/70 text-charcoal hover:bg-white"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            <div
              className="h-28"
              style={{
                background:
                  "radial-gradient(120% 140% at 30% 0%, #2F8D77, #124E42 55%, #0E2823)",
              }}
            />
            <div className="px-8 pb-8 pt-6 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ember">
                Members get 10% off
              </p>
              <h2
                id="popup-title"
                className="mt-2 font-display text-3xl font-semibold text-charcoal"
              >
                Join The Core
              </h2>
              <p className="mx-auto mt-3 max-w-xs text-sm text-stone">
                Nutrition tips, product launches, and member-only offers. No spam
                — just useful, honest guidance.
              </p>

              {sent ? (
                <p className="mt-6 rounded-pill bg-sage/15 px-5 py-4 text-sm font-medium text-sage">
                  You&apos;re in. Your 10% code is on its way to your inbox.
                </p>
              ) : (
                <form
                  className="mt-6 space-y-3"
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (email) setSent(true);
                  }}
                >
                  <label htmlFor="popup-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="popup-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full rounded-pill border border-charcoal/15 bg-white px-5 py-4 text-center text-charcoal placeholder:text-stone focus:border-ember focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="w-full rounded-pill bg-charcoal px-6 py-4 text-base font-semibold text-ivory transition-colors hover:bg-ember"
                  >
                    Get My 10% Off
                  </button>
                </form>
              )}
              <button
                onClick={close}
                className="mt-4 text-xs text-stone underline underline-offset-2 hover:text-charcoal"
              >
                No thanks, I&apos;ll pay full price
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
