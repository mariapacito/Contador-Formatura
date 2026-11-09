"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { TITLE } from "@/lib/config";

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="flex flex-col items-center gap-3 text-center"
    >
      <motion.div
        animate={{ rotate: [-6, 6, -6] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="glass flex h-20 w-20 items-center justify-center rounded-full text-5xl"
        aria-hidden
      >
        🎀
      </motion.div>

      <h1 className="max-w-xl text-3xl font-bold leading-tight sm:text-5xl">
        {TITLE}
      </h1>

      <p className="flex items-center gap-2 text-sm text-bubble sm:text-base">
        <Sparkles size={16} aria-hidden /> o final do semestre está chegando{" "}
        <Sparkles size={16} aria-hidden />
      </p>
    </motion.header>
  );
}
