import type { Metadata } from "next";
import { Section, Eyebrow } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { ButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About",
  description:
    "Total Core Nutrition creates premium, transparent supplements designed around your entire body — not temporary trends.",
};

const values = [
  {
    title: "Transparency first",
    body: "Every ingredient and dose is on the label. No proprietary blends, no hiding.",
  },
  {
    title: "Research, not hype",
    body: "We formulate based on evidence and dose ingredients at amounts that actually matter.",
  },
  {
    title: "For every body",
    body: "From your first workout to your seventies, our formulas are built to be approachable and effective.",
  },
  {
    title: "Tested and trusted",
    body: "Every batch is verified by independent third-party labs for purity and potency.",
  },
];

const stats = [
  { value: 50, suffix: "k+", label: "Customers served" },
  { value: 8, suffix: "", label: "Core formulas" },
  { value: 100, suffix: "%", label: "Transparent labels" },
  { value: 4.8, suffix: "★", label: "Average rating", decimals: 1 },
];

export default function AboutPage() {
  return (
    <>
      <Section className="pt-32">
        <div className="max-w-3xl">
          <Reveal>
            <Eyebrow>Our Story</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-4 font-display text-fluid-display font-semibold text-charcoal text-balance">
              Nutrition built around your entire body.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-xl leading-relaxed text-stone">
              Total Core Nutrition started with a simple frustration: supplements
              were either intimidating and over-hyped, or cheap and untrustworthy.
              We wanted something in between — premium, honest formulas that fit
              real life, whether you&apos;re chasing a personal record or simply
              trying to feel better every day.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* Stats */}
      <Section className="py-16">
        <div className="grid grid-cols-2 gap-6 rounded-[2rem] bg-charcoal p-10 text-ivory lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-4xl font-semibold text-ember-light lg:text-5xl">
                <AnimatedCounter value={s.value} suffix={s.suffix} decimals={s.decimals ?? 0} />
              </p>
              <p className="mt-2 text-sm text-stone-light">{s.label}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Values */}
      <Section className="py-16">
        <Reveal>
          <h2 className="mb-10 max-w-2xl font-display text-fluid-h2 font-semibold text-charcoal">
            What we believe.
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.05}>
              <div className="h-full rounded-card border border-charcoal/10 bg-white p-8 shadow-soft">
                <h3 className="font-display text-2xl font-semibold text-charcoal">
                  {v.title}
                </h3>
                <p className="mt-3 leading-relaxed text-stone">{v.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-20">
        <div className="rounded-[2rem] bg-ivory-200 p-12 text-center">
          <h2 className="font-display text-fluid-h2 font-semibold text-charcoal">
            Start with your goal.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-lg text-stone">
            Find the formula that fits where you are right now.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/shop" size="lg">
              Shop Nutrition
            </ButtonLink>
            <ButtonLink href="/bundles" variant="secondary" size="lg">
              Build Your Core
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
