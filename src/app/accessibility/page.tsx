import type { Metadata } from "next";
import { LegalPage } from "@/components/ui/LegalPage";

export const metadata: Metadata = { title: "Accessibility" };

export default function AccessibilityPage() {
  return (
    <LegalPage
      eyebrow="Commitment"
      title="Accessibility."
      intro="We believe premium nutrition should be easy for everyone to shop — regardless of age, ability, or device."
      sections={[
        {
          heading: "Our approach",
          body: "Total Core Nutrition is committed to meeting WCAG 2.1 AA standards. We design with high color contrast, readable type sizes, large touch targets, clear navigation, and full keyboard support.",
        },
        {
          heading: "Motion & animation",
          body: "Our site respects your device's 'reduce motion' setting. If you prefer fewer animations, enabling that setting will automatically simplify the experience across the site.",
        },
        {
          heading: "Assistive technology",
          body: "We use semantic HTML, descriptive labels, and ARIA attributes so screen readers and other assistive tools can navigate our site effectively.",
        },
        {
          heading: "Feedback",
          body: "Accessibility is ongoing work. If you encounter any barrier, please email hello@totalcorenutrition.com and we'll address it as quickly as possible.",
        },
      ]}
    />
  );
}
