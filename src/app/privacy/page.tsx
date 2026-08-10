import type { Metadata } from "next";
import { LegalPage } from "@/components/ui/LegalPage";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy policy."
      intro="Your trust matters. This policy explains what information we collect and how we use it. This is a sample policy for demonstration purposes."
      sections={[
        {
          heading: "Information we collect",
          body: "We collect information you provide directly — such as your name, email, shipping address, and order details — as well as standard analytics data to improve your experience on our site.",
        },
        {
          heading: "How we use it",
          body: "We use your information to process orders, provide support, send order updates, and (with your consent) share news and offers. We never sell your personal information.",
        },
        {
          heading: "Your choices",
          body: "You can unsubscribe from marketing emails at any time and request access to or deletion of your data by contacting hello@totalcorenutrition.com.",
        },
        {
          heading: "Security",
          body: "We use industry-standard measures to protect your data. Payment information is processed securely and never stored on our servers.",
        },
      ]}
    />
  );
}
