export type Badge =
  | "Best Seller"
  | "New"
  | "Daily Essential"
  | "Performance"
  | "Customer Favorite";

export type GoalId =
  | "build-recover"
  | "energy-performance"
  | "weight-management"
  | "daily-wellness"
  | "healthy-aging"
  | "digestive-health";

export interface Ingredient {
  name: string;
  amount: string;
  what: string;
  why: string;
  purpose: string;
}

export interface SupplementFact {
  label: string;
  amount: string;
  dv?: string;
}

export interface ProductReview {
  id: string;
  name: string;
  rating: number;
  title: string;
  body: string;
  verified: boolean;
  date: string;
}

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  purpose: string;
  category: string;
  goals: GoalId[];
  badges: Badge[];
  price: number;
  subscriptionPrice: number;
  servings: number;
  rating: number;
  reviewCount: number;
  flavors: string[];
  // Visual identity for the generated bottle art
  accent: string;
  accentDeep: string;
  benefits: string[];
  floatingCallouts: string[];
  howToUse: string[];
  whyWeMadeIt: string;
  ingredients: Ingredient[];
  supplementFacts: SupplementFact[];
  faqs: { q: string; a: string }[];
}
