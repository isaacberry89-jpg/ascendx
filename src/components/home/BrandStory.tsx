"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";

const pillars = [
  { word: "Nutrition", copy: "Whole-body nourishment that fits real, everyday life.", color: "#CBA255" },
  { word: "Performance", copy: "Clean energy and support for the way you move.", color: "#D08A4C" },
  { word: "Recovery", copy: "The rest and repair where real progress is made.", color: "#5FA8AC" },
  { word: "Metabolism", copy: "Balanced support for a healthy, capable body.", color: "#4E9481" },
  { word: "Longevity", copy: "Strength and vitality that carry you through the decades.", color: "#C08A66" },
  { word: "Wellness", copy: "Feeling good, consistently — not just occasionally.", color: "#9784B3" },
];

export function BrandStory() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={ref}
      className="relative bg-charcoal text-ivory"
      style={{ height: reduce ? "auto" : `${pillars.length * 90}vh` }}
      aria-label="Your health is bigger than one goal"
    >
      <div className="grain pointer-events-none absolute inset-0" aria-hidden />
      <div
        className={
          reduce
            ? "relative py-20"
            : "sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden"
        }
      >
        {/* Animated background hue */}
        {!reduce && <BackgroundHue progress={scrollYProgress} />}

        <div className="relative mx-auto w-full max-w-5xl px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 text-xs font-semibold uppercase tracking-[0.25em] text-ember-light"
          >
            The Total Core Philosophy
          </motion.p>

          <h2 className="mx-auto max-w-3xl font-display text-fluid-display font-semibold leading-tight text-balance">
            Your health is bigger than one goal.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-stone-light">
            We don&apos;t build products around temporary trends. We build them
            around the entire body — because everything is connected.
          </p>

          {reduce ? (
            <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {pillars.map((p) => (
                <div
                  key={p.word}
                  className="rounded-card border border-white/10 bg-white/[0.03] p-5"
                >
                  <p
                    className="font-display text-2xl font-semibold"
                    style={{ color: p.color }}
                  >
                    {p.word}
                  </p>
                  <p className="mt-2 text-sm text-stone-light">{p.copy}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="relative mt-16 h-40">
              {pillars.map((pillar, i) => (
                <PillarWord
                  key={pillar.word}
                  pillar={pillar}
                  index={i}
                  total={pillars.length}
                  progress={scrollYProgress}
                />
              ))}
            </div>
          )}
        </div>

        {!reduce && (
          <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 gap-2">
            {pillars.map((_, i) => (
              <ProgressDot key={i} index={i} total={pillars.length} progress={scrollYProgress} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function PillarWord({
  pillar,
  index,
  total,
  progress,
}: {
  pillar: (typeof pillars)[number];
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const start = index / total;
  const mid = (index + 0.5) / total;
  const end = (index + 1) / total;

  const opacity = useTransform(
    progress,
    [start - 0.02, start + 0.04, end - 0.04, end + 0.02],
    [0, 1, 1, 0]
  );
  const y = useTransform(progress, [start, mid, end], [40, 0, -40]);
  const scale = useTransform(progress, [start, mid, end], [0.92, 1, 0.92]);

  return (
    <motion.div
      style={{ opacity, y, scale }}
      className="absolute inset-0 flex flex-col items-center justify-center"
    >
      <span
        className="font-display text-6xl font-semibold sm:text-8xl"
        style={{ color: pillar.color }}
      >
        {pillar.word}
      </span>
      <span className="mt-4 max-w-md text-base text-stone-light">{pillar.copy}</span>
    </motion.div>
  );
}

function ProgressDot({
  index,
  total,
  progress,
}: {
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const start = index / total;
  const end = (index + 1) / total;
  const opacity = useTransform(progress, [start - 0.01, start, end, end + 0.01], [0.3, 1, 1, 0.3]);
  const width = useTransform(progress, [start, end], ["8px", "8px"]);
  return (
    <motion.span
      style={{ opacity, width }}
      className="h-2 w-2 rounded-full bg-ember"
    />
  );
}

function BackgroundHue({ progress }: { progress: MotionValue<number> }) {
  const background = useTransform(
    progress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [
      "radial-gradient(60% 60% at 50% 50%, rgba(190,154,58,0.18), transparent 70%)",
      "radial-gradient(60% 60% at 50% 50%, rgba(192,106,44,0.18), transparent 70%)",
      "radial-gradient(60% 60% at 50% 50%, rgba(43,110,116,0.20), transparent 70%)",
      "radial-gradient(60% 60% at 50% 50%, rgba(31,107,87,0.20), transparent 70%)",
      "radial-gradient(60% 60% at 50% 50%, rgba(176,122,85,0.18), transparent 70%)",
      "radial-gradient(60% 60% at 50% 50%, rgba(94,74,120,0.18), transparent 70%)",
    ]
  );
  return <motion.div style={{ background }} className="absolute inset-0" aria-hidden />;
}
