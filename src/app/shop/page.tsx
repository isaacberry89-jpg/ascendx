import { Suspense } from "react";
import type { Metadata } from "next";
import { Section, Eyebrow } from "@/components/ui/Section";
import { ShopClient } from "@/components/shop/ShopClient";

export const metadata: Metadata = {
  title: "Shop All Nutrition",
  description:
    "Premium, third-party tested supplements for performance, recovery, wellness, and everyday nutrition.",
};

export default function ShopPage() {
  return (
    <Section className="pb-24 pt-32">
      <div className="mb-10 max-w-2xl">
        <Eyebrow>Shop Nutrition</Eyebrow>
        <h1 className="mt-4 font-display text-fluid-h2 font-semibold text-charcoal">
          Find your formula.
        </h1>
        <p className="mt-4 text-lg text-stone">
          Every product is transparently formulated, third-party tested, and
          built to fit real life. Filter by category or goal to get started.
        </p>
      </div>

      <Suspense fallback={<div className="py-20 text-center text-stone">Loading…</div>}>
        <ShopClient />
      </Suspense>
    </Section>
  );
}
