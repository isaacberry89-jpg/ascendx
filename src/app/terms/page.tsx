import type { Metadata } from "next";
import { LegalPage } from "@/components/ui/LegalPage";

export const metadata: Metadata = { title: "Terms of Service" };

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of service."
      intro="These terms govern your use of the Total Core Nutrition website and the purchase of our products. This is sample content for demonstration purposes."
      sections={[
        {
          heading: "Use of our site",
          body: "By using this site, you agree to use it lawfully and not to misuse its content or functionality. All content, branding, and design are the property of Total Core Nutrition.",
        },
        {
          heading: "Products & pricing",
          body: "We strive for accuracy in product descriptions and pricing, but errors may occur. We reserve the right to correct any errors and to update pricing at any time.",
        },
        {
          heading: "Health disclaimer",
          body: "Our products are dietary supplements and are not intended to diagnose, treat, cure, or prevent any disease. Statements have not been evaluated by the FDA. Consult your physician before use.",
        },
        {
          heading: "Limitation of liability",
          body: "Total Core Nutrition is not liable for any indirect or consequential damages arising from the use of our products or website, to the fullest extent permitted by law.",
        },
      ]}
    />
  );
}
