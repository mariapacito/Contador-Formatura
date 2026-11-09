import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        baby: "#FFC0CB",
        pastel: "#FFD6E7",
        bubble: "#FF9EC7",
        lilac: "#EBD8FF",
        plum: "#3A1B4F",
        night: "#1E1030",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 40px -10px rgba(255, 158, 199, 0.55)",
        glow: "0 0 30px 4px rgba(255, 158, 199, 0.45)",
      },
      keyframes: {
        shimmer: {
          "0%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(220%)" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.3", transform: "scale(0.85)" },
          "50%": { opacity: "1", transform: "scale(1.15)" },
        },
      },
      animation: {
        shimmer: "shimmer 4.5s ease-in-out infinite",
        twinkle: "twinkle 2.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
