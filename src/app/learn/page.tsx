import type { Metadata } from "next";
import Link from "next/link";
import { articles } from "@/lib/journal";
import { Section, Eyebrow } from "@/components/ui/Section";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "The Core Journal",
  description:
    "Honest, research-backed guidance on protein, nutrition, recovery, weight management, healthy aging, and ingredients.",
};

export default function LearnPage() {
  return (
    <Section className="pb-24 pt-32">
      <div className="mb-12 max-w-2xl">
        <Reveal>
          <Eyebrow>The Core Journal</Eyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="mt-4 font-display text-fluid-display font-semibold text-charcoal">
            Nutrition, made clear.
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 text-xl leading-relaxed text-stone">
            No hype, no fear-mongering — just useful, honest guidance to help you
            make better decisions about your health.
          </p>
        </Reveal>
      </div>

      <Stagger className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <StaggerItem key={article.slug}>
            <Link
              href={`/learn/${article.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-card border border-charcoal/10 bg-white shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift"
            >
              <div
                className="relative h-48"
                style={{ background: `linear-gradient(150deg, ${article.accent}, ${article.accent}88)` }}
              >
                <span className="absolute bottom-4 left-4 rounded-pill bg-white/90 px-3 py-1 text-xs font-semibold text-charcoal">
                  {article.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h2 className="font-display text-xl font-semibold leading-snug text-charcoal transition-colors group-hover:text-ember">
                  {article.title}
                </h2>
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
