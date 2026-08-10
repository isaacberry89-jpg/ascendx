import type { Metadata } from "next";
import { LegalPage } from "@/components/ui/LegalPage";

export const metadata: Metadata = { title: "Wholesale" };

export default function WholesalePage() {
  return (
    <LegalPage
      eyebrow="Partners"
      title="Wholesale & partnerships."
      intro="Interested in carrying Total Core Nutrition in your gym, studio, clinic, or store? We'd love to talk."
      sections={[
        {
          heading: "Why partner with us",
          body: "Premium, transparent formulas your customers can trust, competitive wholesale pricing, and marketing support to help you sell with confidence.",
        },
        {
          heading: "Get in touch",
          body: "Email wholesale@totalcorenutrition.com with a bit about your business and we'll send over our wholesale catalog and pricing.",
        },
      ]}
    />
  );
}
