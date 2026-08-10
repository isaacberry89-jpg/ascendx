import { cn } from "@/lib/utils";

interface ProductBottleProps {
  name: string;
  tagline?: string;
  accent: string;
  accentDeep: string;
  className?: string;
  showLabel?: boolean;
}

/**
 * A self-contained, premium supplement tub rendered as SVG.
 * No external image assets required — art is generated from brand colors.
 */
export function ProductBottle({
  name,
  tagline,
  accent,
  accentDeep,
  className,
  showLabel = true,
}: ProductBottleProps) {
  const uid = name.replace(/\s+/g, "-").toLowerCase();
  return (
    <svg
      viewBox="0 0 240 300"
      className={cn("h-full w-full", className)}
      role="img"
      aria-label={`${name} product`}
    >
      <defs>
        <linearGradient id={`body-${uid}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={accent} />
          <stop offset="55%" stopColor={accentDeep} />
          <stop offset="100%" stopColor="#141417" />
        </linearGradient>
        <linearGradient id={`lid-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2A2A30" />
          <stop offset="100%" stopColor="#16161A" />
        </linearGradient>
        <linearGradient id={`shine-${uid}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="45%" stopColor="#ffffff" stopOpacity="0.28" />
          <stop offset="55%" stopColor="#ffffff" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <radialGradient id={`glow-${uid}`} cx="0.5" cy="0.4" r="0.7">
          <stop offset="0%" stopColor={accent} stopOpacity="0.5" />
          <stop offset="100%" stopColor={accent} stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* ambient glow */}
      <ellipse cx="120" cy="150" rx="120" ry="150" fill={`url(#glow-${uid})`} />

      {/* lid */}
      <rect x="66" y="34" width="108" height="30" rx="8" fill={`url(#lid-${uid})`} />
      <rect x="66" y="52" width="108" height="8" rx="3" fill="#000" opacity="0.25" />

      {/* body */}
      <rect
        x="58"
        y="62"
        width="124"
        height="196"
        rx="20"
        fill={`url(#body-${uid})`}
      />
      {/* soft top highlight */}
      <rect x="58" y="62" width="124" height="60" rx="20" fill="#fff" opacity="0.06" />

      {/* label plate */}
      {showLabel && (
        <>
          <rect
            x="72"
            y="120"
            width="96"
            height="104"
            rx="10"
            fill="#F7F4EE"
            opacity="0.96"
          />
          <rect x="72" y="120" width="96" height="26" rx="10" fill={accentDeep} />
          <rect x="72" y="138" width="96" height="8" fill={accentDeep} />
          <text
            x="120"
            y="137"
            textAnchor="middle"
            fontSize="9"
            fontWeight="700"
            letterSpacing="1.5"
            fill="#F7F4EE"
            fontFamily="system-ui, sans-serif"
          >
            TOTAL CORE
          </text>
          <text
            x="120"
            y="170"
            textAnchor="middle"
            fontSize="13"
            fontWeight="800"
            fill="#16161A"
            fontFamily="Georgia, serif"
          >
            {name.replace("Core ", "")}
          </text>
          {tagline && (
            <text
              x="120"
              y="188"
              textAnchor="middle"
              fontSize="6.5"
              letterSpacing="0.5"
              fill="#8A867C"
              fontFamily="system-ui, sans-serif"
            >
              {tagline.toUpperCase()}
            </text>
          )}
          <line x1="88" y1="200" x2="152" y2="200" stroke={accent} strokeWidth="2" />
          <text
            x="120"
            y="214"
            textAnchor="middle"
            fontSize="6"
            letterSpacing="1"
            fill="#8A867C"
            fontFamily="system-ui, sans-serif"
          >
            DIETARY SUPPLEMENT
          </text>
        </>
      )}

      {/* moving shine */}
      <rect x="58" y="62" width="124" height="196" rx="20" fill={`url(#shine-${uid})`} />
    </svg>
  );
}
