"use client";

import { motion } from "framer-motion";

export function SectionDivider() {
  return (
    <div
      className="mx-auto flex w-full max-w-7xl items-center gap-4 px-5 sm:px-8 lg:px-12"
      aria-hidden
    >
      <motion.span
        className="h-px flex-1 origin-right bg-gradient-to-l from-charcoal/20 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.span
        className="text-ember"
        initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
        whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        ✦
      </motion.span>
      <motion.span
        className="h-px flex-1 origin-left bg-gradient-to-r from-charcoal/20 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
}
