"use client";

import Link from "next/link";
import { articles } from "@/lib/journal";
import { Section, Eyebrow } from "@/components/ui/Section";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";

export function CoreJournal() {
  const featured = articles.slice(0, 3);

  return (
    <Section className="py-20 lg:py-28">
      <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <div className="max-w-xl">
          <Reveal>
            <Eyebrow>The Core Journal</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-display text-fluid-h2 font-semibold text-charcoal">
              Nutrition, made clear.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-lg text-stone">
              Honest, research-backed guidance to help you make better decisions —
              no hype, no fear-mongering.
            </p>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <ButtonLink href="/learn" variant="secondary">
            Read The Journal
          </ButtonLink>
        </Reveal>
      </div>

      <Stagger className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {featured.map((article) => (
          <StaggerItem key={article.slug}>
            <Link
              href={`/learn/${article.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-card border border-charcoal/10 bg-white shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember"
            >
              <div
                className="relative h-44 overflow-hidden"
                style={{
                  background: `linear-gradient(150deg, ${article.accent}, ${article.accent}88)`,
                }}
              >
                <div
                  className="absolute inset-0 opacity-40"
                  style={{
                    background:
                      "radial-gradient(120% 100% at 80% 0%, rgba(255,255,255,0.3), transparent 55%)",
                  }}
                  aria-hidden
                />
                <span className="absolute bottom-4 left-4 rounded-pill bg-white/90 px-3 py-1 text-xs font-semibold text-charcoal">
                  {article.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl font-semibold leading-snug text-charcoal transition-colors group-hover:text-ember">
                  {article.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-stone">
                  {article.excerpt}
                </p>
                <div className="mt-5 flex items-center justify-between text-xs text-stone">
                  <span>{article.readTime}</span>
                  <span className="font-semibold text-ember transition-transform group-hover:translate-x-1">
                    Read →
                  </span>
                </div>
              </div>
            </Link>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
