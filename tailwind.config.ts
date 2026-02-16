import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#008FF0",
          black: "#000000",
          yellow: "#FABD05",
          light: "#F0F7FF"
        }
      },
      fontFamily: {
        body: ["var(--font-poppins)", "sans-serif"],
        title: ["Helvetica Neue", "Inter", "Arial", "sans-serif"]
      },
      boxShadow: {
        card: "0 24px 70px rgba(0,0,0,0.08)",
        soft: "0 8px 30px rgba(0, 143, 240, 0.15)"
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, #FFFFFF 0%, #F0F7FF 50%, #E8F4FD 100%)"
      }
    }
  },
  plugins: []
};

export default config;
