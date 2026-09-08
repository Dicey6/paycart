"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

/* --------------------------------- Theme --------------------------------- */

type Theme = "light" | "dark";

const ThemeContext = createContext<{
  theme: Theme;
  toggle: () => void;
}>({ theme: "light", toggle: () => {} });

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem("paycart-theme");
    if (stored === "dark" || stored === "light") setTheme(stored);
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    document.documentElement.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("paycart-theme", theme);
  }, [theme, hydrated]);

  return (
    <ThemeContext.Provider
      value={{ theme, toggle: () => setTheme((t) => (t === "dark" ? "light" : "dark")) }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

/* ---------------------------------- User ---------------------------------- */

const UserContext = createContext<{
  username: string;
  setUsername: (name: string) => void;
}>({ username: "", setUsername: () => {} });

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [username, setUsernameState] = useState("");

  useEffect(() => {
    const stored = window.localStorage.getItem("paycart-username");
    if (stored) setUsernameState(stored);
  }, []);

  const setUsername = (name: string) => {
    setUsernameState(name);
    window.localStorage.setItem("paycart-username", name);
  };

  return (
    <UserContext.Provider value={{ username, setUsername }}>{children}</UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <UserProvider>{children}</UserProvider>
    </ThemeProvider>
  );
}
