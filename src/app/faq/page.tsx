import type { Metadata } from "next";
import { Section, Eyebrow } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers to common questions about Total Core Nutrition products, shipping, subscriptions, and returns.",
};

const faqs = [
  {
    q: "Are your products third-party tested?",
    a: "Yes. Every batch is tested by an independent lab for purity, potency, and label accuracy. We believe you deserve to know exactly what's in what you take.",
  },
  {
    q: "Do you use proprietary blends?",
    a: "Never. Every ingredient and its exact dose is printed clearly on the label, so you always know what you're getting.",
  },
  {
    q: "How does Subscribe & Save work?",
    a: "Choose a delivery schedule (30, 45, or 60 days) and save 15% on every order plus free U.S. shipping. You can skip, pause, or cancel anytime in your account with no fees.",
  },
  {
    q: "When will my order arrive?",
    a: "Orders ship within 1–2 business days and typically arrive within 3–5 business days. Orders over $75 ship free within the U.S.",
  },
  {
    q: "What is your return policy?",
    a: "We stand behind our products with a 30-day money-back guarantee. If you're not satisfied, contact us for a full refund — even on opened products.",
  },
  {
    q: "Are your products suitable for older adults?",
    a: "Absolutely. Our formulas are designed to be approachable and effective for everyone from their 20s through their 60s and beyond. As always, consult your physician before starting any supplement, especially if you take medication.",
  },
  {
    q: "Are your products safe during pregnancy?",
    a: "If you are pregnant, nursing, or have a medical condition, please consult your healthcare provider before using any dietary supplement.",
  },
];

export default function FAQPage() {
  return (
    <Section className="pb-24 pt-32">
      <div className="mx-auto max-w-2xl">
        <Eyebrow>Support</Eyebrow>
        <h1 className="mt-4 font-display text-fluid-display font-semibold text-charcoal">
          Frequently asked questions.
        </h1>

        <dl className="mt-12 space-y-8">
          {faqs.map((faq) => (
            <div key={faq.q} className="border-b border-charcoal/10 pb-8">
              <dt className="font-display text-xl font-semibold text-charcoal">
                {faq.q}
              </dt>
              <dd className="mt-3 leading-relaxed text-stone">{faq.a}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-12 rounded-card bg-ivory-200 p-8 text-center">
          <p className="font-display text-xl font-semibold text-charcoal">
            Still have a question?
          </p>
          <p className="mt-2 text-stone">
            Our team is happy to help. Reach us at{" "}
            <a href="mailto:hello@totalcorenutrition.com" className="font-semibold text-ember underline">
              hello@totalcorenutrition.com
            </a>
          </p>
        </div>
      </div>
    </Section>
  );
}
