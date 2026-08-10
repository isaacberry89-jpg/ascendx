import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm ivory / off-white base
        ivory: {
          DEFAULT: "#F7F4EE",
          50: "#FCFBF7",
          100: "#F7F4EE",
          200: "#EFEAE0",
          300: "#E4DCCC",
        },
        // Deep charcoal / near-black
        charcoal: {
          DEFAULT: "#16161A",
          800: "#1F1F24",
          700: "#2A2A30",
          600: "#3A3A42",
        },
        // Muted warm gray
        stone: {
          DEFAULT: "#8A867C",
          light: "#B7B2A6",
        },
        // Premium energetic accent — muted amber/bronze
        ember: {
          DEFAULT: "#C6743B",
          light: "#E0975C",
          dark: "#9E5324",
        },
        // Secondary calm accent — deep sage / eucalyptus
        sage: {
          DEFAULT: "#4C6B5B",
          light: "#7D9C89",
        },
        // Metallic accent
        brass: "#B99A5B",
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
