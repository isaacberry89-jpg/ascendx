import { Section, Eyebrow } from "@/components/ui/Section";

export function LegalPage({
  eyebrow,
  title,
  intro,
  sections,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  sections: { heading: string; body: string }[];
}) {
  return (
    <Section className="pb-24 pt-32">
      <div className="mx-auto max-w-2xl">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-4 font-display text-fluid-display font-semibold text-charcoal">
          {title}
        </h1>
        <p className="mt-6 text-xl leading-relaxed text-stone">{intro}</p>

        <div className="mt-12 space-y-10">
          {sections.map((s) => (
            <div key={s.heading}>
              <h2 className="font-display text-2xl font-semibold text-charcoal">
                {s.heading}
              </h2>
              <p className="mt-3 leading-relaxed text-charcoal">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
