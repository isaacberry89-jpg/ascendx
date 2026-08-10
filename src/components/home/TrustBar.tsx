"use client";

const phrases = [
  "Formulated With Purpose",
  "Made For Everyday Performance",
  "Premium Ingredients",
  "Transparent Labels",
  "Quality You Can Trust",
  "Third-Party Tested",
];

export function TrustBar() {
  return (
    <section
      className="border-y border-charcoal/10 bg-charcoal py-5 text-ivory"
      aria-label="Brand values"
    >
      <div className="relative flex overflow-hidden">
        <div className="flex shrink-0 animate-marquee items-center gap-12 pr-12 motion-reduce:animate-none">
          {[...phrases, ...phrases].map((phrase, i) => (
            <div key={i} className="flex items-center gap-12">
              <span className="whitespace-nowrap font-display text-lg font-medium tracking-tight text-ivory/90">
                {phrase}
              </span>
              <span className="text-ember" aria-hidden>
                ✦
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
