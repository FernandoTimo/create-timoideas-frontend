// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  // darkMode: "class", // 👈 Necesario para que se active con document.documentElement.classList
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
};

export default config;
