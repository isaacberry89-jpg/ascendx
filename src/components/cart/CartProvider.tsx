"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
  useEffect,
  type ReactNode,
} from "react";
import type { Product } from "@/lib/types";

export interface CartItem {
  slug: string;
  name: string;
  flavor: string;
  price: number;
  subscriptionPrice: number;
  subscribe: boolean;
  quantity: number;
  accent: string;
  accentDeep: string;
}

interface CartContextValue {
  items: CartItem[];
  isOpen: boolean;
  count: number;
  subtotal: number;
  openCart: () => void;
  closeCart: () => void;
  addItem: (
    product: Pick<
      Product,
      "slug" | "name" | "price" | "subscriptionPrice" | "accent" | "accentDeep"
    >,
    opts?: { flavor?: string; subscribe?: boolean; quantity?: number; open?: boolean }
  ) => void;
  removeItem: (slug: string, flavor: string) => void;
  updateQuantity: (slug: string, flavor: string, quantity: number) => void;
  toggleSubscribe: (slug: string, flavor: string) => void;
}

const CartContext = createContext<CartContextValue | null>(null);

const STORAGE_KEY = "tcn-cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch {
      /* ignore */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* ignore */
    }
  }, [items, hydrated]);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const addItem: CartContextValue["addItem"] = useCallback((product, opts = {}) => {
    const flavor = opts.flavor ?? "Default";
    const quantity = opts.quantity ?? 1;
    const subscribe = opts.subscribe ?? false;
    setItems((prev) => {
      const idx = prev.findIndex(
        (i) => i.slug === product.slug && i.flavor === flavor
      );
      if (idx >= 0) {
        const next = [...prev];
        next[idx] = { ...next[idx], quantity: next[idx].quantity + quantity, subscribe };
        return next;
      }
      return [
        ...prev,
        {
          slug: product.slug,
          name: product.name,
          flavor,
          price: product.price,
          subscriptionPrice: product.subscriptionPrice,
          subscribe,
          quantity,
          accent: product.accent,
          accentDeep: product.accentDeep,
        },
      ];
    });
    if (opts.open !== false) setIsOpen(true);
  }, []);

  const removeItem = useCallback((slug: string, flavor: string) => {
    setItems((prev) => prev.filter((i) => !(i.slug === slug && i.flavor === flavor)));
  }, []);

  const updateQuantity = useCallback(
    (slug: string, flavor: string, quantity: number) => {
      setItems((prev) =>
        quantity <= 0
          ? prev.filter((i) => !(i.slug === slug && i.flavor === flavor))
          : prev.map((i) =>
              i.slug === slug && i.flavor === flavor ? { ...i, quantity } : i
            )
      );
    },
    []
  );

  const toggleSubscribe = useCallback((slug: string, flavor: string) => {
    setItems((prev) =>
      prev.map((i) =>
        i.slug === slug && i.flavor === flavor ? { ...i, subscribe: !i.subscribe } : i
      )
    );
  }, []);

  const count = useMemo(
    () => items.reduce((sum, i) => sum + i.quantity, 0),
    [items]
  );

  const subtotal = useMemo(
    () =>
      items.reduce(
        (sum, i) => sum + (i.subscribe ? i.subscriptionPrice : i.price) * i.quantity,
        0
      ),
    [items]
  );

  const value: CartContextValue = {
    items,
    isOpen,
    count,
    subtotal,
    openCart,
    closeCart,
    addItem,
    removeItem,
    updateQuantity,
    toggleSubscribe,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
