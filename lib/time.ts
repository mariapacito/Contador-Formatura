export interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  /** Milissegundos restantes (nunca negativo). */
  total: number;
}

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

/** Calcula quanto falta entre `now` e a data-alvo. */
export function getTimeLeft(targetMs: number, now: number = Date.now()): TimeLeft {
  const total = Math.max(targetMs - now, 0);

  return {
    days: Math.floor(total / DAY),
    hours: Math.floor((total % DAY) / HOUR),
    minutes: Math.floor((total % HOUR) / MINUTE),
    seconds: Math.floor((total % MINUTE) / SECOND),
    total,
  };
}

/** Garante dois dígitos (ex.: 7 -> "07"). */
export const pad = (n: number) => String(n).padStart(2, "0");
