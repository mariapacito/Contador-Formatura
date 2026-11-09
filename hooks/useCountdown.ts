"use client";

import { useEffect, useState } from "react";
import { getTimeLeft, type TimeLeft } from "@/lib/time";

/**
 * Retorna o tempo restante, atualizado a cada segundo.
 * Começa como `null` para o HTML do servidor e do navegador coincidirem
 * (evita erro de hidratação) e é preenchido logo após a montagem.
 */
export function useCountdown(targetMs: number): TimeLeft | null {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    const tick = () => setTimeLeft(getTimeLeft(targetMs));
    tick();

    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [targetMs]);

  return timeLeft;
}
