"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { pad } from "@/lib/time";

interface Props {
  label: string;
  value: number;
  icon: LucideIcon;
  index: number;
}

/** Card individual (dias, horas, minutos ou segundos). */
export default function CountdownCard({ label, value, icon: Icon, index }: Props) {
  const text = pad(value);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.15 * index, type: "spring", stiffness: 140, damping: 14 }}
      whileHover={{ y: -8, scale: 1.04 }}
      className="glass group relative flex flex-col items-center gap-2 overflow-hidden rounded-3xl px-4 py-6 sm:px-6 sm:py-8"
    >
      {/* brilho que passeia pelo card */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/60 to-transparent animate-shimmer"
        style={{ animationDelay: `${index * 0.6}s` }}
      />

      <Icon className="text-bubble" size={20} aria-hidden />

      {/* número com animação de troca */}
      <div className="relative h-16 w-full overflow-hidden text-center sm:h-24">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={text}
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-bubble to-[#b98cff] bg-clip-text text-5xl font-bold tabular-nums text-transparent sm:text-7xl"
          >
            {text}
          </motion.span>
        </AnimatePresence>
      </div>

      <span className="text-sm font-medium sm:text-base">{label}</span>
    </motion.div>
  );
}
