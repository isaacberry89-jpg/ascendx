import { Section } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Section className="flex min-h-[70vh] flex-col items-center justify-center py-32 text-center">
      <p className="font-display text-8xl font-semibold gradient-text">404</p>
      <h1 className="mt-4 font-display text-3xl font-semibold text-charcoal">
        We couldn&apos;t find that page.
      </h1>
      <p className="mt-3 max-w-sm text-stone">
        The page you&apos;re looking for may have moved. Let&apos;s get you back on track.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <ButtonLink href="/">Back Home</ButtonLink>
        <ButtonLink href="/shop" variant="secondary">
          Shop Nutrition
        </ButtonLink>
      </div>
    </Section>
  );
}
