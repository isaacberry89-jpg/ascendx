"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";

export function EmailCapture() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <section className="py-20 lg:py-28" aria-label="Join our newsletter">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <div
          className="relative overflow-hidden rounded-[2rem] px-6 py-16 text-center sm:px-12 lg:py-20"
          style={{
            background:
              "radial-gradient(90% 120% at 50% 0%, rgba(190,154,58,0.22), transparent 60%), radial-gradient(70% 90% at 15% 100%, rgba(47,141,119,0.20), transparent 60%), linear-gradient(160deg, #143A31, #0E2823)",
          }}
        >
          <div className="grain pointer-events-none absolute inset-0" aria-hidden />
          <motion.div
            className="pointer-events-none absolute -left-20 top-10 h-64 w-64 rounded-full bg-ember/20 blur-3xl"
            animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden
          />
          <div className="relative mx-auto max-w-xl">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-ember-light">
                Join The Core
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 font-display text-fluid-display font-semibold text-ivory text-balance">
                Better nutrition, in your inbox.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mx-auto mt-4 max-w-md text-lg text-stone-light">
                Nutrition tips, product launches, and member-only offers. Join and
                get 10% off your first order.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              {sent ? (
                <p className="mx-auto mt-8 max-w-md rounded-pill bg-sage/20 px-6 py-4 font-medium text-sage-light">
                  Welcome to The Core. Your 10% code is on its way.
                </p>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (email) setSent(true);
                  }}
                  className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
                >
                  <label htmlFor="capture-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="capture-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 rounded-pill border border-white/15 bg-white/10 px-6 py-4 text-ivory placeholder:text-stone-light focus:border-ember focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="rounded-pill bg-ember px-8 py-4 font-semibold text-ivory transition-colors hover:bg-ember-light"
                  >
                    Join
                  </button>
                </form>
              )}
            </Reveal>
            <p className="mt-4 text-xs text-stone-light">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
