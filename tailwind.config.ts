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
        brand: {
          DEFAULT: "#3E8EFF",
          dark: "#1B5FD9",
          light: "#8FC1FF",
        },
        ink: {
          950: "#05070A",
          900: "#0A0D12",
          800: "#0E1015",
          700: "#14171D",
          600: "#1B1F27",
        },
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Inter",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      transitionTimingFunction: {
        snap: "cubic-bezier(0.2, 0, 0, 1)",
      },
      keyframes: {
        "menu-in": {
          "0%": { opacity: "0", transform: "translateY(-4px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "menu-in": "menu-in 150ms cubic-bezier(0.2, 0, 0, 1)",
        "fade-in": "fade-in 120ms ease-out",
      },
    },
  },
  plugins: [],
};

export default config;
