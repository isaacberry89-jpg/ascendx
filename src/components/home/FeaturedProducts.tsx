"use client";

import { featuredProducts } from "@/lib/products";
import { Section, Eyebrow } from "@/components/ui/Section";
import { ProductCard } from "@/components/ui/ProductCard";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";

export function FeaturedProducts() {
  const items = featuredProducts().slice(0, 4);

  return (
    <Section className="py-20 lg:py-28">
      <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <div className="max-w-xl">
          <Reveal>
            <Eyebrow>Customer Favorites</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-display text-fluid-h2 font-semibold text-charcoal">
              Formulas people come back for.
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <ButtonLink href="/shop" variant="secondary">
            View All Products
          </ButtonLink>
        </Reveal>
      </div>

      <Stagger className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((product) => (
          <StaggerItem key={product.slug}>
            <ProductCard product={product} />
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
