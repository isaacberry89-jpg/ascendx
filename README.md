# Total Core Nutrition

A premium e-commerce experience for **Total Core Nutrition** — a modern wellness
and performance supplement brand. Built to feel high-end, trustworthy, and
conversion-focused for customers from their 20s through their 60s.

> **Nutrition From The Core.** — Premium formulas designed to support
> performance, recovery, wellness, and everyday nutrition.

## Tech Stack

- **Next.js 14** (App Router) + **React 18**
- **TypeScript** (strict)
- **Tailwind CSS** — custom premium design system
- **Framer Motion** — scroll reveals, parallax, sticky storytelling, cursor
  interactions (all respecting `prefers-reduced-motion`)
- No external image assets — product art is generated as self-contained SVG

## Design System

- Warm ivory / off-white backgrounds with deep charcoal sections
- Muted, sophisticated accent palette (bronze/`ember`, brass, sage) — no neon
- Large premium serif display type (Fraunces) + highly readable sans (Inter)
- Rounded cards with subtle depth, generous spacing

## Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve production build
npm run lint
```

## Structure

```
src/
  app/                 # Routes (home, shop, products/[slug], learn, bundles, about, legal…)
  components/
    home/              # Homepage sections (Hero, BrandStory, ProductSpotlight, …)
    layout/            # Navbar, MegaMenu, MobileNav, Footer
    cart/              # CartProvider (context) + slide-out CartDrawer
    product/           # Product page buy panel + detail sections
    shop/              # Filterable shop grid
    marketing/         # Engagement-triggered email popup
    ui/                # Reusable primitives (Button, ProductCard, ProductBottle, …)
  lib/                 # Product catalog, goals, reviews, journal, types, utils
```

## Key Features

**Homepage** — cursor-reactive floating hero, scrolling trust bar, shop-by-goal
cards, featured products, cinematic sticky brand story, flagship product
spotlight with floating callouts, interactive ingredient explorer, review
carousel, goal-based bundle builder, subscription selector, and The Core
Journal.

**Commerce** — slide-out cart drawer with free-shipping progress meter,
subscribe & save, recommended add-ons; conversion-optimized product pages with
sticky mobile add-to-cart, frequently-bought-together, and structured data.

**Accessibility** — semantic HTML, ARIA labels, visible high-contrast focus
states, large touch targets, keyboard support, and full reduced-motion support.

## Connecting a Backend

Product and content data live in `src/lib/` as typed modules. The component
structure is modular so the catalog can be wired to Shopify, WooCommerce, or
another backend by swapping the data layer without touching the UI.

## Disclaimer

These statements have not been evaluated by the Food and Drug Administration.
Products are dietary supplements and are not intended to diagnose, treat, cure,
or prevent any disease. Sample content is for demonstration purposes.
