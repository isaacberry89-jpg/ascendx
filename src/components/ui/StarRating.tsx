import { cn } from "@/lib/utils";

export function StarRating({
  rating,
  count,
  size = "sm",
  className,
}: {
  rating: number;
  count?: number;
  size?: "sm" | "md";
  className?: string;
}) {
  const dim = size === "md" ? "h-5 w-5" : "h-4 w-4";
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div
        className="flex"
        role="img"
        aria-label={`Rated ${rating} out of 5 stars`}
      >
        {[0, 1, 2, 3, 4].map((i) => {
          const fill = Math.max(0, Math.min(1, rating - i));
          return (
            <span key={i} className={cn("relative", dim)}>
              <Star className={cn(dim, "absolute inset-0 text-charcoal/15")} />
              <span
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${fill * 100}%` }}
              >
                <Star className={cn(dim, "text-ember")} />
              </span>
            </span>
          );
        })}
      </div>
      {count !== undefined && (
        <span className="text-sm text-stone">
          {rating.toFixed(1)}{" "}
          <span className="text-stone/70">({count.toLocaleString()})</span>
        </span>
      )}
    </div>
  );
}

function Star({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 2.5l2.9 6.1 6.6.9-4.8 4.6 1.2 6.6L12 18.4 6.1 21.3l1.2-6.6L2.5 9.5l6.6-.9z" />
    </svg>
  );
}
