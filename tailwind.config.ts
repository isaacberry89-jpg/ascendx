import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm parchment / ivory base — approachable exotic warmth
        ivory: {
          DEFAULT: "#F5F1E8",
          50: "#FBFAF4",
          100: "#F5F1E8",
          200: "#ECE5D6",
          300: "#DCD3BE",
        },
        // Deep emerald ink — botanical + clinical authority (used for dark
        // sections and body text)
        charcoal: {
          DEFAULT: "#0E2823",
          800: "#143A31",
          700: "#1E4A3E",
          600: "#2E5F4F",
        },
        // Muted green-taupe for secondary text (darkened for readability)
        stone: {
          DEFAULT: "#6C6F63",
          light: "#A6A497",
        },
        // Signature accent — deep clinical teal-emerald (authority + jewel)
        ember: {
          DEFAULT: "#1C6B5B",
          light: "#2F8D77",
          dark: "#124E42",
        },
        // Natural / success accent — jade eucalyptus
        sage: {
          DEFAULT: "#4F8A6E",
          light: "#8FBCA4",
        },
        // Exotic metallic — antique gold
        brass: "#BE9A3A",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "10xl": ["9rem", { lineHeight: "0.9", letterSpacing: "-0.03em" }],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      borderRadius: {
        card: "1.25rem",
        pill: "999px",
      },
      boxShadow: {
        soft: "0 20px 60px -20px rgba(22, 22, 26, 0.18)",
        lift: "0 30px 80px -24px rgba(22, 22, 26, 0.28)",
        inset: "inset 0 1px 0 0 rgba(255,255,255,0.06)",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 8s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
