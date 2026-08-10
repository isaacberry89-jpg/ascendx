import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Section({
  children,
  className,
  id,
  as: Tag = "section",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  as?: "section" | "div";
}) {
  return (
    <Tag id={id} className={cn("relative", className)}>
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        {children}
      </div>
    </Tag>
  );
}

export function Eyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-ember",
        className
      )}
    >
      <span className="h-px w-8 bg-ember/50" aria-hidden />
      {children}
    </span>
  );
}
