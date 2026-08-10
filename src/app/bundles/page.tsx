import type { Metadata } from "next";
import { Section, Eyebrow } from "@/components/ui/Section";
import { BundleBuilder } from "@/components/home/BundleBuilder";
import { Subscription } from "@/components/home/Subscription";

export const metadata: Metadata = {
  title: "Bundles — Build Your Core",
  description:
    "Tell us your goal and get a hand-matched supplement bundle with automatic savings.",
};

export default function BundlesPage() {
  return (
    <>
      <Section className="pt-32">
        <div className="max-w-2xl">
          <Eyebrow>Bundles &amp; Save</Eyebrow>
          <h1 className="mt-4 font-display text-fluid-display font-semibold text-charcoal text-balance">
            Build Your Core.
          </h1>
          <p className="mt-6 text-xl leading-relaxed text-stone">
            The right products work better together. Choose your goal and we&apos;ll
            recommend a routine — with an automatic bundle discount.
          </p>
        </div>
      </Section>
      <BundleBuilder />
      <Subscription />
    </>
  );
}
