"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Section, Eyebrow } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

const cadences = [
  { days: 30, label: "Every 30 days", note: "Most popular", save: "15%" },
  { days: 45, label: "Every 45 days", note: "Balanced", save: "15%" },
  { days: 60, label: "Every 60 days", note: "Stock up", save: "15%" },
];

const perks = [
  "Save 15% on every order, always",
  "Free U.S. shipping on subscriptions",
  "Skip, pause, or cancel anytime — no fees",
  "Never run out of your routine",
];

export function Subscription() {
  const [selected, setSelected] = useState(30);

  return (
    <Section className="py-20 lg:py-28">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <Reveal>
            <Eyebrow>Subscribe &amp; Save</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-display text-fluid-h2 font-semibold text-charcoal">
              Your routine. Delivered.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-lg text-stone">
              Consistency is where results come from. Set your schedule, save 15%
              automatically, and stay in full control — pause or cancel any time.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <ul className="mt-8 space-y-3">
              {perks.map((perk) => (
                <li key={perk} className="flex items-start gap-3 text-charcoal">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sage/15">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path d="M5 12.5l4 4L19 7" stroke="#4F8A6E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span>{perk}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="rounded-card border border-charcoal/10 bg-white p-8 shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-wider text-stone">
              Choose your delivery schedule
            </p>
            <div className="mt-5 space-y-3">
              {cadences.map((c) => (
                <button
                  key={c.days}
                  onClick={() => setSelected(c.days)}
                  aria-pressed={selected === c.days}
                  className={`flex w-full items-center justify-between rounded-card border-2 p-5 text-left transition-all ${
                    selected === c.days
                      ? "border-ember bg-ember/[0.04]"
                      : "border-charcoal/10 hover:border-charcoal/30"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`flex h-6 w-6 items-center justify-center rounded-full border-2 ${
                        selected === c.days ? "border-ember" : "border-charcoal/30"
                      }`}
                      aria-hidden
                    >
                      {selected === c.days && (
                        <motion.span
                          layoutId="sub-dot"
                          className="h-3 w-3 rounded-full bg-ember"
                        />
                      )}
                    </span>
                    <div>
                      <p className="font-semibold text-charcoal">{c.label}</p>
                      <p className="text-sm text-stone">{c.note}</p>
                    </div>
                  </div>
                  <span className="rounded-pill bg-sage/15 px-3 py-1 text-sm font-semibold text-sage">
                    Save {c.save}
                  </span>
                </button>
              ))}
            </div>

            <button className="mt-6 w-full rounded-pill bg-charcoal px-6 py-4 text-base font-semibold text-ivory transition-colors hover:bg-ember">
              Start My Subscription
            </button>
            <p className="mt-3 text-center text-xs text-stone">
              No commitment. Cancel or change anytime in your account.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
