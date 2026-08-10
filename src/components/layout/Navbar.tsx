"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCart } from "@/components/cart/CartProvider";
import { MegaMenu } from "./MegaMenu";
import { MobileNav } from "./MobileNav";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Shop", href: "/shop", mega: true },
  { label: "Shop By Goal", href: "/shop#goals" },
  { label: "Best Sellers", href: "/shop?filter=best-sellers" },
  { label: "Bundles", href: "/bundles" },
  { label: "Learn", href: "/learn" },
  { label: "About", href: "/about" },
];

export function Navbar() {
  const { count, openCart } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-premium",
          scrolled
            ? "bg-ivory/85 shadow-[0_1px_0_0_rgba(22,22,26,0.08)] backdrop-blur-xl"
            : "bg-transparent"
        )}
        onMouseLeave={() => setMegaOpen(false)}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-12">
          {/* Mobile menu button */}
          <button
            className="flex h-11 w-11 items-center justify-center rounded-full text-charcoal lg:hidden"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(true)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M3 6h18M3 12h18M3 18h18"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </button>

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 lg:flex-none"
            aria-label="Total Core Nutrition home"
          >
            <Logo />
            <span className="hidden font-display text-lg font-semibold leading-none tracking-tight text-charcoal sm:flex sm:flex-col">
              <span className="text-[0.95rem]">TOTAL CORE</span>
              <span className="text-[0.7rem] font-normal tracking-[0.3em] text-stone">
                NUTRITION
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label="Primary"
          >
            {navLinks.map((link) =>
              link.mega ? (
                <button
                  key={link.href}
                  className="rounded-pill px-4 py-2 text-sm font-medium text-charcoal transition-colors hover:bg-charcoal/5"
                  onMouseEnter={() => setMegaOpen(true)}
                  onFocus={() => setMegaOpen(true)}
                  aria-expanded={megaOpen}
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-pill px-4 py-2 text-sm font-medium text-charcoal transition-colors hover:bg-charcoal/5"
                  onMouseEnter={() => setMegaOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-1">
            <button
              className="hidden h-11 w-11 items-center justify-center rounded-full text-charcoal transition-colors hover:bg-charcoal/5 sm:flex"
              aria-label="Search"
            >
              <SearchIcon />
            </button>
            <Link
              href="/account"
              className="hidden h-11 w-11 items-center justify-center rounded-full text-charcoal transition-colors hover:bg-charcoal/5 sm:flex"
              aria-label="Account"
            >
              <UserIcon />
            </Link>
            <button
              onClick={openCart}
              className="relative flex h-11 items-center gap-2 rounded-pill bg-charcoal px-4 text-ivory transition-colors hover:bg-charcoal-800"
              aria-label={`Cart, ${count} items`}
            >
              <CartIcon />
              <span className="text-sm font-semibold tabular-nums">{count}</span>
            </button>
          </div>
        </div>

        {/* Mega menu */}
        <AnimatePresence>
          {megaOpen && (
            <motion.div
              initial={{ opacity: 0, y: reduce ? 0 : -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: reduce ? 0 : -8 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-x-0 top-full hidden lg:block"
            >
              <MegaMenu onNavigate={() => setMegaOpen(false)} />
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <MobileNav
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        links={navLinks}
      />
    </>
  );
}

function Logo() {
  return (
    <svg width="38" height="38" viewBox="0 0 40 40" aria-hidden className="shrink-0">
      <circle cx="20" cy="20" r="19" fill="#16161A" />
      <circle cx="20" cy="20" r="12" fill="none" stroke="#C6743B" strokeWidth="2" />
      <circle cx="20" cy="20" r="5" fill="#C6743B" />
      <path
        d="M20 3 A17 17 0 0 1 37 20"
        fill="none"
        stroke="#B99A5B"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="21" height="21" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
      <path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg width="21" height="21" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M4 20c0-4 3.6-6 8-6s8 2 8 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 5h2l1.5 11.5a1.5 1.5 0 0 0 1.5 1.3h8a1.5 1.5 0 0 0 1.5-1.2L20 8H7"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
