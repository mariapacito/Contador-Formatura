"use client";

import { motion } from "framer-motion";
import { Flower2, Heart, Sparkle, Star } from "lucide-react";
import { useEffect, useState } from "react";

interface Item {
  id: number;
  left: number; // % horizontal
  size: number;
  duration: number;
  delay: number;
  drift: number;
}

/** Gera valores aleatórios (só no cliente, para não quebrar a hidratação). */
function makeItems(count: number, minSize: number, maxSize: number): Item[] {
  return Array.from({ length: count }, (_, id) => ({
    id,
    left: Math.random() * 100,
    size: minSize + Math.random() * (maxSize - minSize),
    duration: 12 + Math.random() * 14,
    delay: -Math.random() * 20,
    drift: (Math.random() - 0.5) * 80,
  }));
}

const DECOR = [Star, Flower2, Sparkle];

export default function Background() {
  const [particles, setParticles] = useState<Item[]>([]);
  const [hearts, setHearts] = useState<Item[]>([]);
  const [decor, setDecor] = useState<Item[]>([]);

  useEffect(() => {
    setParticles(makeItems(30, 4, 10));
    setHearts(makeItems(12, 18, 36));
    setDecor(makeItems(9, 16, 26));
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      {/* bolhas de luz desfocadas */}
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-bubble/40 blur-3xl" />
      <div className="absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-lilac/70 blur-3xl dark:bg-purple-500/30" />

      {/* partículas rosas subindo */}
      {particles.map((p) => (
        <motion.span
          key={`p-${p.id}`}
          className="absolute rounded-full bg-bubble/70"
          style={{ left: `${p.left}%`, width: p.size, height: p.size, bottom: -20 }}
          animate={{ y: [0, -1100], x: [0, p.drift], opacity: [0, 0.9, 0] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "linear" }}
        />
      ))}

      {/* corações flutuando */}
      {hearts.map((h) => (
        <motion.span
          key={`h-${h.id}`}
          className="absolute text-bubble/60"
          style={{ left: `${h.left}%`, bottom: -40 }}
          animate={{ y: [0, -1100], x: [0, h.drift, 0], rotate: [-12, 12, -12], opacity: [0, 0.8, 0] }}
          transition={{ duration: h.duration + 6, delay: h.delay, repeat: Infinity, ease: "easeInOut" }}
        >
          <Heart size={h.size} fill="currentColor" />
        </motion.span>
      ))}

      {/* estrelas, flores e brilhos piscando */}
      {decor.map((d) => {
        const Icon = DECOR[d.id % DECOR.length];
        return (
          <span
            key={`d-${d.id}`}
            className="absolute animate-twinkle text-white/80 dark:text-lilac/70"
            style={{
              left: `${d.left}%`,
              top: `${(d.id * 37) % 95}%`,
              animationDelay: `${d.id * 0.4}s`,
            }}
          >
            <Icon size={d.size} fill="currentColor" />
          </span>
        );
      })}
    </div>
  );
}
