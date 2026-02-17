import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#008FF0",
        "matte-black": "#050505",
        "accent-yellow": "#FABD05",
        "carbon-gray": "#0A0A0B",
        "industrial-gray": "#1A1A1C",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
        display: ["Helvetica Neue", "var(--font-inter)", "sans-serif"],
      },
      letterSpacing: {
        luxury: "0.35em",
        "tight-luxury": "0.05em",
      },
    },
  },
  plugins: [],
};

export default config;
