"use client";

import { useState } from "react";
import { Section, Eyebrow } from "@/components/ui/Section";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <Section className="pb-24 pt-32">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div>
          <Eyebrow>Contact</Eyebrow>
          <h1 className="mt-4 font-display text-fluid-display font-semibold text-charcoal">
            We&apos;re here to help.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-stone">
            Questions about a product, your order, or your routine? Our team
            responds within one business day.
          </p>
          <div className="mt-8 space-y-4 text-charcoal">
            <p>
              <span className="font-semibold">Email:</span>{" "}
              <a href="mailto:hello@totalcorenutrition.com" className="text-ember underline">
                hello@totalcorenutrition.com
              </a>
            </p>
            <p>
              <span className="font-semibold">Phone:</span> (800) 555-CORE
            </p>
            <p>
              <span className="font-semibold">Hours:</span> Mon–Fri, 9am–6pm ET
            </p>
          </div>
        </div>

        <div className="rounded-card border border-charcoal/10 bg-white p-8 shadow-soft">
          {sent ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <p className="font-display text-2xl font-semibold text-charcoal">
                Thanks for reaching out.
              </p>
              <p className="mt-2 text-stone">We&apos;ll be in touch within one business day.</p>
            </div>
          ) : (
            <form
              className="space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-semibold text-charcoal">
                  Name
                </label>
                <input
                  id="name"
                  required
                  className="w-full rounded-xl border border-charcoal/15 bg-ivory px-4 py-3.5 focus:border-ember focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-semibold text-charcoal">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  className="w-full rounded-xl border border-charcoal/15 bg-ivory px-4 py-3.5 focus:border-ember focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-semibold text-charcoal">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  className="w-full rounded-xl border border-charcoal/15 bg-ivory px-4 py-3.5 focus:border-ember focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-pill bg-charcoal px-6 py-4 font-semibold text-ivory transition-colors hover:bg-ember"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </Section>
  );
}
