export interface Article {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  readTime: string;
  accent: string;
}

export const articles: Article[] = [
  {
    slug: "how-much-protein-do-you-really-need",
    title: "How Much Protein Do You Really Need?",
    category: "Protein",
    excerpt:
      "A practical, no-hype look at daily protein targets for different goals, ages, and activity levels.",
    readTime: "6 min read",
    accent: "#C6743B",
  },
  {
    slug: "building-a-nutrition-foundation",
    title: "Building a Nutrition Foundation That Lasts",
    category: "Nutrition",
    excerpt:
      "Forget crash diets. Here's how to build sustainable habits that support your body for the long run.",
    readTime: "8 min read",
    accent: "#4C6B5B",
  },
  {
    slug: "the-science-of-recovery",
    title: "The Science of Recovery: Why Rest Builds Results",
    category: "Recovery",
    excerpt:
      "Progress happens between workouts. Understand how sleep, protein, and hydration drive real recovery.",
    readTime: "7 min read",
    accent: "#6A7B8C",
  },
  {
    slug: "weight-management-without-the-gimmicks",
    title: "Weight Management Without the Gimmicks",
    category: "Weight Management",
    excerpt:
      "An honest guide to body composition — what actually matters, and what to ignore.",
    readTime: "9 min read",
    accent: "#9E5324",
  },
  {
    slug: "staying-strong-after-50",
    title: "Staying Strong After 50",
    category: "Healthy Aging",
    excerpt:
      "Protecting muscle, bone, and energy as you age is simpler than you think. Start with these fundamentals.",
    readTime: "6 min read",
    accent: "#B99A5B",
  },
  {
    slug: "reading-a-supplement-label",
    title: "How to Actually Read a Supplement Label",
    category: "Ingredients",
    excerpt:
      "Proprietary blends, fillers, and dosing — learn to spot quality and avoid marketing traps.",
    readTime: "5 min read",
    accent: "#7E6B8F",
  },
];
