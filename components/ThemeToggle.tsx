"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "./providers";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-all duration-150 ease-snap hover:bg-slate-100 hover:text-slate-950 active:scale-90 dark:border-white/10 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
    >
      {theme === "dark" ? (
          <Sun className="h-4 w-4 text-brand" />
      ) : (
          <Moon className="h-4 w-4 text-brand" />
      )}
    </button>
  );
}
