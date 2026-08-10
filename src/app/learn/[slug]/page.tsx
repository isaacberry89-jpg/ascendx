import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { articles } from "@/lib/journal";
import { Section } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) return { title: "Article Not Found" };
  return { title: article.title, description: article.excerpt };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) notFound();

  return (
    <article>
      <div
        className="pt-32"
        style={{ background: `linear-gradient(180deg, ${article.accent}18, transparent)` }}
      >
        <Section className="pb-12">
          <Link href="/learn" className="text-sm text-stone hover:text-charcoal">
            ← Back to The Core Journal
          </Link>
          <span
            className="mt-6 inline-block rounded-pill px-3 py-1 text-xs font-semibold text-ivory"
            style={{ background: article.accent }}
          >
            {article.category}
          </span>
          <h1 className="mt-4 max-w-3xl font-display text-fluid-display font-semibold text-charcoal text-balance">
            {article.title}
          </h1>
          <p className="mt-4 text-sm text-stone">{article.readTime} · Total Core Nutrition</p>
        </Section>
      </div>

      <Section className="py-12">
        <div className="mx-auto max-w-2xl space-y-6 text-lg leading-relaxed text-charcoal">
          <p className="text-xl font-medium">{article.excerpt}</p>
          <p>
            At Total Core Nutrition, we believe good information is the foundation
            of good health. This article is part of our ongoing commitment to
            transparency — helping you understand not just what to take, but why.
          </p>
          <h2 className="pt-4 font-display text-2xl font-semibold">The fundamentals</h2>
          <p>
            Nutrition doesn&apos;t have to be complicated. The most meaningful
            results come from consistent, sustainable habits rather than dramatic
            short-term changes. Focus on the basics — adequate protein, whole
            foods, hydration, movement, and sleep — and let supplements fill the
            gaps rather than carry the load.
          </p>
          <p>
            Whether your goal is losing weight, building muscle, or simply feeling
            better day to day, the same principles apply. Start where you are, be
            patient with the process, and choose products you can actually trust.
          </p>
          <h2 className="pt-4 font-display text-2xl font-semibold">What this means for you</h2>
          <p>
            Use this as a starting point, not a prescription. Everyone&apos;s body
            and circumstances are different, and it&apos;s always wise to consult a
            healthcare professional before making significant changes — especially
            if you have an existing condition or take medication.
          </p>
          <p className="rounded-card bg-ivory-200 p-6 text-base text-stone">
            <strong className="text-charcoal">A note on claims:</strong> Total Core
            Nutrition products are dietary supplements and are not intended to
            diagnose, treat, cure, or prevent any disease. Always pair them with a
            balanced diet and healthy lifestyle.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-2xl rounded-card border border-charcoal/10 bg-white p-8 text-center shadow-soft">
          <h3 className="font-display text-2xl font-semibold text-charcoal">
            Put it into practice.
          </h3>
          <p className="mt-2 text-stone">Find the formula that fits your goal.</p>
          <div className="mt-6">
            <ButtonLink href="/shop">Shop Nutrition</ButtonLink>
          </div>
        </div>
      </Section>
    </article>
  );
}
