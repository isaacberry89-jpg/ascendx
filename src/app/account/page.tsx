import type { Metadata } from "next";
import { Section, Eyebrow } from "@/components/ui/Section";

export const metadata: Metadata = { title: "Account" };

export default function AccountPage() {
  return (
    <Section className="pb-24 pt-32">
      <div className="mx-auto max-w-md">
        <Eyebrow>Account</Eyebrow>
        <h1 className="mt-4 font-display text-4xl font-semibold text-charcoal">
          Sign in
        </h1>
        <p className="mt-3 text-stone">
          Manage your orders, subscriptions, and account details.
        </p>

        <form className="mt-8 space-y-5 rounded-card border border-charcoal/10 bg-white p-8 shadow-soft">
          <div>
            <label htmlFor="acct-email" className="mb-2 block text-sm font-semibold text-charcoal">
              Email
            </label>
            <input
              id="acct-email"
              type="email"
              className="w-full rounded-xl border border-charcoal/15 bg-ivory px-4 py-3.5 focus:border-ember focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="acct-pass" className="mb-2 block text-sm font-semibold text-charcoal">
              Password
            </label>
            <input
              id="acct-pass"
              type="password"
              className="w-full rounded-xl border border-charcoal/15 bg-ivory px-4 py-3.5 focus:border-ember focus:outline-none"
            />
          </div>
          <button
            type="button"
            className="w-full rounded-pill bg-charcoal px-6 py-4 font-semibold text-ivory transition-colors hover:bg-ember"
          >
            Sign In
          </button>
          <p className="text-center text-sm text-stone">
            New here?{" "}
            <span className="font-semibold text-ember underline">Create an account</span>
          </p>
        </form>
      </div>
    </Section>
  );
}
