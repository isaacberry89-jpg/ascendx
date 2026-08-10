import type { Metadata } from "next";
import { LegalPage } from "@/components/ui/LegalPage";

export const metadata: Metadata = { title: "Returns" };

export default function ReturnsPage() {
  return (
    <LegalPage
      eyebrow="Support"
      title="Returns & guarantee."
      intro="We stand behind every formula with a simple, no-hassle 30-day money-back guarantee."
      sections={[
        {
          heading: "30-day money-back guarantee",
          body: "If you're not completely satisfied within 30 days of your purchase, contact us for a full refund — even if the product has been opened. We want you to buy with total confidence.",
        },
        {
          heading: "How to start a return",
          body: "Email hello@totalcorenutrition.com with your order number and reason for return. Our team will walk you through the process and issue your refund promptly once approved.",
        },
        {
          heading: "Refund timing",
          body: "Approved refunds are issued to your original payment method within 5–7 business days.",
        },
      ]}
    />
  );
}
