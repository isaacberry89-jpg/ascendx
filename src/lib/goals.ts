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
    accent: "#C6743B",
    accentSoft: "#E0975C",
  },
  {
    id: "energy-performance",
    title: "Energy & Performance",
    description: "Clean, sustained energy to power training and long days alike.",
    accent: "#B99A5B",
    accentSoft: "#D6BC85",
  },
  {
    id: "weight-management",
    title: "Weight Management",
    description: "Nutrition that supports a healthy body composition and appetite.",
    accent: "#4C6B5B",
    accentSoft: "#7D9C89",
  },
  {
    id: "daily-wellness",
    title: "Daily Wellness",
    description: "Foundational nutrients to fill the gaps in a busy modern diet.",
    accent: "#6A7B8C",
    accentSoft: "#9AAAB9",
  },
  {
    id: "healthy-aging",
    title: "Healthy Aging",
    description: "Support for strength, joints, and vitality through every decade.",
    accent: "#9E5324",
    accentSoft: "#C6743B",
  },
  {
    id: "digestive-health",
    title: "Digestive Health",
    description: "Fiber, enzymes, and probiotics for comfortable everyday digestion.",
    accent: "#7E6B8F",
    accentSoft: "#A896B7",
  },
];

export const goalById = (id: GoalId) => goals.find((g) => g.id === id)!;
