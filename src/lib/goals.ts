import type { GoalId } from "./types";

export interface Goal {
  id: GoalId;
  title: string;
  description: string;
  accent: string;
  accentSoft: string;
}

export const goals: Goal[] = [
  {
    id: "build-recover",
    title: "Build & Recover",
    description: "Protein and recovery support to help you rebuild after every effort.",
    accent: "#B8873B",
    accentSoft: "#D3A85F",
  },
  {
    id: "energy-performance",
    title: "Energy & Performance",
    description: "Clean, sustained energy to power training and long days alike.",
    accent: "#C06A2C",
    accentSoft: "#DA9152",
  },
  {
    id: "weight-management",
    title: "Weight Management",
    description: "Nutrition that supports a healthy body composition and appetite.",
    accent: "#1F6B57",
    accentSoft: "#4E9481",
  },
  {
    id: "daily-wellness",
    title: "Daily Wellness",
    description: "Foundational nutrients to fill the gaps in a busy modern diet.",
    accent: "#3C6079",
    accentSoft: "#6E93AC",
  },
  {
    id: "healthy-aging",
    title: "Healthy Aging",
    description: "Support for strength, joints, and vitality through every decade.",
    accent: "#B07A55",
    accentSoft: "#CDA083",
  },
  {
    id: "digestive-health",
    title: "Digestive Health",
    description: "Fiber, enzymes, and probiotics for comfortable everyday digestion.",
    accent: "#5E4A78",
    accentSoft: "#8A76A6",
  },
];

export const goalById = (id: GoalId) => goals.find((g) => g.id === id)!;
