import type { Metadata } from "next";
import { LegalPage } from "@/components/ui/LegalPage";

export const metadata: Metadata = { title: "Shipping" };

export default function ShippingPage() {
  return (
    <LegalPage
      eyebrow="Support"
      title="Shipping."
      intro="Fast, reliable U.S. shipping on every order — free when you spend $75 or more."
      sections={[
        {
          heading: "Processing & delivery",
          body: "Orders are processed and shipped within 1–2 business days. Standard delivery typically takes 3–5 business days depending on your location. You'll receive tracking as soon as your order ships.",
        },
        {
          heading: "Free shipping",
          body: "Enjoy free standard shipping on all U.S. orders over $75. Subscriptions always ship free, regardless of order size.",
        },
        {
          heading: "Where we ship",
          body: "We currently ship to all 50 U.S. states. International shipping is coming soon — join our newsletter to be the first to know.",
        },
      ]}
    />
  );
}
