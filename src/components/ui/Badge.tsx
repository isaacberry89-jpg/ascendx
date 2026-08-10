import { cn } from "@/lib/utils";
import type { Badge as BadgeType } from "@/lib/types";

const styles: Record<string, string> = {
  "Best Seller": "bg-ember text-ivory",
  New: "bg-sage text-ivory",
  "Daily Essential": "bg-charcoal text-ivory",
  Performance: "bg-brass text-charcoal",
  "Customer Favorite": "bg-ivory-300 text-charcoal border border-charcoal/15",
};

export function Badge({
  label,
  className,
}: {
  label: BadgeType | string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-pill px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-wider",
        styles[label] ?? "bg-charcoal text-ivory",
        className
      )}
    >
      {label}
    </span>
  );
}
