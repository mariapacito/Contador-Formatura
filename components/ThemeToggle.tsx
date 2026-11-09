"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const STORAGE_KEY = "contador-theme";

/** Alterna entre o tema rosa claro e o tema rosa/lilás escuro. */
export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  // Lê a preferência salva (ou a do sistema) ao montar.
  useEffect(() => {
    let saved: string | null = null;
    try {
      saved = localStorage.getItem(STORAGE_KEY);
    } catch {
      /* armazenamento indisponível */
    }
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDark(saved ? saved === "dark" : prefersDark);
  }, []);

  // Aplica a classe `dark` no <html>.
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    try {
      localStorage.setItem(STORAGE_KEY, dark ? "dark" : "light");
    } catch {
      /* ignora */
    }
  }, [dark]);

  return (
    <button
      type="button"
      onClick={() => setDark((d) => !d)}
      aria-label={dark ? "Ativar tema claro" : "Ativar tema escuro"}
      className="glass fixed right-4 top-4 z-20 flex h-12 w-12 items-center justify-center rounded-full transition-transform hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-bubble"
    >
      {dark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}
