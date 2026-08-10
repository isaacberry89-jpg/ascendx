export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  product: string;
  quote: string;
  verified: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Margaret R.",
    location: "Verified Buyer",
    rating: 5,
    product: "Core Protein",
    quote:
      "I'm 61 and finally found a protein that doesn't upset my stomach. It mixes clean and tastes like a treat. Part of my morning now.",
    verified: true,
  },
  {
    id: "t2",
    name: "David C.",
    location: "Verified Buyer",
    rating: 5,
    product: "Core Energy",
    quote:
      "Real, steady energy without the jitters or the 2pm crash I got from other pre-workouts. This is the first one I've repurchased.",
    verified: true,
  },
  {
    id: "t3",
    name: "Priya N.",
    location: "Verified Buyer",
    rating: 5,
    product: "Core Greens",
    quote:
      "As a busy mom I don't always eat perfectly. Core Greens is the easiest way I've found to fill the gaps, and the mint flavor is genuinely good.",
    verified: true,
  },
  {
    id: "t4",
    name: "James T.",
    location: "Verified Buyer",
    rating: 5,
    product: "Core Recover",
    quote:
      "I lift four days a week and recovery used to wreck me. Sipping this through my sessions has made a noticeable difference in how I feel the next day.",
    verified: true,
  },
  {
    id: "t5",
    name: "Susan M.",
    location: "Verified Buyer",
    rating: 5,
    product: "Core Vitality",
    quote:
      "I appreciate that I can actually read and understand the label. No mystery blends. My whole family takes it now.",
    verified: true,
  },
  {
    id: "t6",
    name: "Marcus B.",
    location: "Verified Buyer",
    rating: 4,
    product: "Core Collagen",
    quote:
      "Dissolves totally clear in my coffee — I forget it's even there. My knees have felt better on long runs after a couple months.",
    verified: true,
  },
  {
    id: "t7",
    name: "Elena V.",
    location: "Verified Buyer",
    rating: 5,
    product: "Core Sleep",
    quote:
      "Low-dose melatonin was exactly what I needed. I fall asleep easier and wake up clear-headed, not groggy. A gentle, honest formula.",
    verified: true,
  },
  {
    id: "t8",
    name: "Robert K.",
    location: "Verified Buyer",
    rating: 5,
    product: "Core Burn",
    quote:
      "No harsh stimulants, no crash. Combined with walking every day it's been a helpful part of my routine. Appreciate that it's not hype.",
    verified: true,
  },
];
