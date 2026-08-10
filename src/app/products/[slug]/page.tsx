import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { products, getProduct } from "@/lib/products";
import { Section } from "@/components/ui/Section";
import { ProductBuyPanel } from "@/components/product/ProductBuyPanel";
import { ProductDetails } from "@/components/product/ProductDetails";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const product = getProduct(params.slug);
  if (!product) return { title: "Product Not Found" };
  return {
    title: `${product.name} — ${product.tagline}`,
    description: product.purpose,
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProduct(params.slug);
  if (!product) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.purpose,
    brand: { "@type": "Brand", name: "Total Core Nutrition" },
    category: product.category,
    offers: {
      "@type": "Offer",
      price: product.price.toFixed(2),
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: product.rating,
      reviewCount: product.reviewCount,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Section className="pt-28">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-stone">
          <ol className="flex items-center gap-2">
            <li>
              <Link href="/" className="hover:text-charcoal">
                Home
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link href="/shop" className="hover:text-charcoal">
                Shop
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-charcoal">{product.name}</li>
          </ol>
        </nav>

        <ProductBuyPanel product={product} />
      </Section>

      <ProductDetails product={product} />
    </>
  );
}
