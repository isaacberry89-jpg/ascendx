"use client";

import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { products } from "@/lib/products";
import { goals } from "@/lib/goals";
import { ProductCard } from "@/components/ui/ProductCard";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import type { GoalId } from "@/lib/types";

const categories = ["All", "Protein", "Performance", "Weight Management", "Wellness", "Recovery"];

export function ShopClient() {
  const params = useSearchParams();
  const [category, setCategory] = useState("All");
  const [goal, setGoal] = useState<GoalId | "all">("all");
  const [bestOnly, setBestOnly] = useState(false);

  useEffect(() => {
    const c = params.get("category");
    const g = params.get("goal");
    const f = params.get("filter");
    if (c && categories.includes(c)) setCategory(c);
    if (g) setGoal(g as GoalId);
    if (f === "best-sellers") setBestOnly(true);
  }, [params]);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (category !== "All" && p.category !== category) return false;
      if (goal !== "all" && !p.goals.includes(goal)) return false;
      if (bestOnly && !p.badges.includes("Best Seller")) return false;
      return true;
    });
  }, [category, goal, bestOnly]);

  return (
    <>
      {/* Filters */}
      <div className="sticky top-[72px] z-30 -mx-5 mb-10 border-y border-charcoal/10 bg-ivory/90 px-5 py-4 backdrop-blur-xl sm:mx-0 sm:rounded-card sm:border sm:px-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                aria-pressed={category === c}
                className={`rounded-pill px-4 py-2.5 text-sm font-semibold transition-colors ${
                  category === c
                    ? "bg-charcoal text-ivory"
                    : "bg-white text-charcoal hover:bg-ivory-200"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <label htmlFor="goal-filter" className="text-sm font-medium text-stone">
              Goal
            </label>
            <select
              id="goal-filter"
              value={goal}
              onChange={(e) => setGoal(e.target.value as GoalId | "all")}
              className="rounded-pill border border-charcoal/15 bg-white px-4 py-2.5 text-sm font-medium text-charcoal focus:border-ember focus:outline-none"
            >
              <option value="all">All goals</option>
              {goals.map((g) => (
                <option key={g.id} value={g.id}>
                  {g.title}
                </option>
              ))}
            </select>
            <button
              onClick={() => setBestOnly((b) => !b)}
              aria-pressed={bestOnly}
              className={`rounded-pill px-4 py-2.5 text-sm font-semibold transition-colors ${
                bestOnly ? "bg-ember text-ivory" : "bg-white text-charcoal hover:bg-ivory-200"
              }`}
            >
              Best Sellers
            </button>
          </div>
        </div>
      </div>

      <p className="mb-6 text-sm text-stone">
        {filtered.length} {filtered.length === 1 ? "product" : "products"}
      </p>

      {filtered.length === 0 ? (
        <div className="rounded-card border border-charcoal/10 bg-white py-20 text-center">
          <p className="text-lg font-medium text-charcoal">No products match those filters.</p>
          <button
            onClick={() => {
              setCategory("All");
              setGoal("all");
              setBestOnly(false);
            }}
            className="mt-4 rounded-pill bg-charcoal px-6 py-3 text-sm font-semibold text-ivory"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <Stagger className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product) => (
            <StaggerItem key={product.slug}>
              <ProductCard product={product} />
            </StaggerItem>
          ))}
        </Stagger>
      )}
    </>
  );
}
