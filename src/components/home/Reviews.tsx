"use client";

import { useRef } from "react";
import { testimonials } from "@/lib/reviews";
import { Section, Eyebrow } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { StarRating } from "@/components/ui/StarRating";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

export function Reviews() {
  const scroller = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    scroller.current?.scrollBy({ left: dir * 380, behavior: "smooth" });
  };

  return (
    <Section className="py-20 lg:py-28">
      <div className="mb-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <div className="max-w-xl">
          <Reveal>
            <Eyebrow>Real Customers</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-display text-fluid-h2 font-semibold text-charcoal">
              Trusted by people like you.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-4 flex items-center gap-4">
              <StarRating rating={4.8} size="md" />
              <span className="text-sm text-stone">
                <AnimatedCounter value={4.8} decimals={1} /> average from{" "}
                <AnimatedCounter value={9800} />+ reviews
              </span>
            </div>
          </Reveal>
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => scroll(-1)}
            aria-label="Previous reviews"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-charcoal/20 text-charcoal transition-colors hover:border-charcoal hover:bg-charcoal hover:text-ivory"
          >
            ←
          </button>
          <button
            onClick={() => scroll(1)}
            aria-label="Next reviews"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-charcoal/20 text-charcoal transition-colors hover:border-charcoal hover:bg-charcoal hover:text-ivory"
          >
            →
          </button>
        </div>
      </div>

      <div
        ref={scroller}
        className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 sm:mx-0 sm:px-0"
        role="region"
        aria-label="Customer reviews carousel"
      >
        {testimonials.map((t) => (
          <article
            key={t.id}
            className="flex w-[85vw] shrink-0 snap-start flex-col rounded-card border border-charcoal/10 bg-white p-7 shadow-soft sm:w-[360px]"
          >
            <StarRating rating={t.rating} />
            <p className="mt-4 flex-1 text-[1.05rem] leading-relaxed text-charcoal">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div className="mt-6 flex items-center gap-3 border-t border-charcoal/10 pt-5">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-ivory-200 font-display text-lg font-semibold text-charcoal">
                {t.name.charAt(0)}
              </span>
              <div>
                <p className="font-semibold text-charcoal">{t.name}</p>
                <div className="flex items-center gap-1.5 text-xs text-stone">
                  {t.verified && (
                    <span className="inline-flex items-center gap-1 text-sage">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                        <path d="M12 2l2.4 1.8 3-.2 1 2.8 2.6 1.5-1 2.8 1 2.8-2.6 1.5-1 2.8-3-.2L12 22l-2.4-1.8-3 .2-1-2.8L3 14.3l1-2.8-1-2.8 2.6-1.5 1-2.8 3 .2z" />
                        <path d="M8.5 12l2.2 2.2 4.3-4.3" stroke="#F5F1E8" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      Verified Buyer
                    </span>
                  )}
                  <span aria-hidden>·</span>
                  <span>{t.product}</span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
