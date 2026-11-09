"use client";

import { motion } from "framer-motion";
import { CalendarHeart, Clock, Hourglass, Timer } from "lucide-react";
import CountdownCard from "@/components/CountdownCard";
import { useCountdown } from "@/hooks/useCountdown";
import { FINISH_MESSAGE, TARGET_DATE } from "@/lib/config";

const targetMs = TARGET_DATE.getTime();

export default function Countdown() {
  const timeLeft = useCountdown(targetMs);

  // Antes da montagem: mantém o espaço reservado para não pular o layout.
  if (!timeLeft) {
    return <div className="h-48" aria-hidden />;
  }

  // Chegou a data final: mensagem especial.
  if (timeLeft.total === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 12 }}
        className="glass rounded-3xl px-8 py-12 text-center shadow-glow"
        role="status"
      >
        <p className="text-3xl font-bold sm:text-5xl">{FINISH_MESSAGE}</p>
      </motion.div>
    );
  }

  const items = [
    { label: "Dias", value: timeLeft.days, icon: CalendarHeart },
    { label: "Horas", value: timeLeft.hours, icon: Clock },
    { label: "Minutos", value: timeLeft.minutes, icon: Hourglass },
    { label: "Segundos", value: timeLeft.seconds, icon: Timer },
  ];

  return (
    <section
      aria-label="Tempo restante até a formatura"
      className="grid w-full grid-cols-2 gap-4 py-10 sm:gap-6 md:grid-cols-4"
    >
      {items.map((item, i) => (
        <CountdownCard key={item.label} index={i} {...item} />
      ))}
    </section>
  );
}
