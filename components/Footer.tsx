"use client";

import { motion } from "framer-motion";
import { FOOTER_MESSAGE } from "@/lib/config";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.9, duration: 0.8 }}
      className="glass rounded-full px-6 py-3 text-center text-sm font-medium sm:text-base"
    >
      {FOOTER_MESSAGE}
    </motion.footer>
  );
}
