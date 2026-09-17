"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "./providers";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-300 transition-all duration-150 ease-snap hover:bg-white/10 hover:text-white active:scale-90"
    >
      {theme === "dark" ? (
          <Sun className="h-4 w-4 text-brand" />
      ) : (
          <Moon className="h-4 w-4 text-brand" />
      )}
    </button>
  );
}
