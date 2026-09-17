"use client";

import React from "react";

export function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost" | "danger";
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-md font-medium text-sm px-4 py-2.5 transition-colors duration-150 ease-snap disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]";
  const variants: Record<string, string> = {
    primary: "bg-brand hover:bg-brand-light text-ink-950",
    secondary:
      "bg-white/80 hover:bg-white text-slate-950 border border-slate-300 dark:bg-white/[0.06] dark:hover:bg-white/[0.1] dark:text-slate-50 dark:border-white/15",
    ghost:
      "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/[0.08]",
    danger:
      "bg-red-50 text-red-600 hover:bg-red-100 border border-red-200 dark:bg-red-500/10 dark:text-red-400 dark:hover:bg-red-500/20 dark:border-red-900",
  };
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}

export function Card({
  children,
  className = "",
  padded = true,
}: {
  children: React.ReactNode;
  className?: string;
  padded?: boolean;
}) {
  return (
    <div
      className={`panel rounded-lg ${
        padded ? "p-5" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}

export function Badge({
  children,
  tone = "neutral",
}: {
  children: React.ReactNode;
  tone?: "neutral" | "green" | "amber" | "blue";
}) {
  const tones: Record<string, string> = {
    neutral:
      "bg-slate-100 text-slate-600 dark:bg-white/[0.08] dark:text-slate-300",
    green: "bg-brand/10 text-brand-dark dark:text-brand",
    amber: "bg-amber-500/10 text-amber-500",
    blue: "bg-blue-500/10 text-blue-600 dark:text-blue-300",
  };
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-xs font-medium px-2 py-1 rounded-md ${tones[tone]}`}
    >
      {children}
    </span>
  );
}

export function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block text-sm font-medium mb-1.5 text-slate-900 dark:text-slate-50">
        {label}
      </span>
      {children}
      {hint && (
        <span className="block text-xs mt-1.5 text-slate-500 dark:text-slate-400">
          {hint}
        </span>
      )}
    </label>
  );
}

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  const { className = "", ...rest } = props;
  return (
    <input
      className={`w-full rounded-md border px-3.5 py-2.5 text-sm outline-none transition-colors duration-150
      bg-white/80 border-slate-300 text-slate-900 placeholder-slate-400
      dark:bg-white/[0.06] dark:border-white/15 dark:text-slate-50 dark:placeholder-slate-500
      focus:ring-2 focus:ring-brand/40 focus:border-brand ${className}`}
      {...rest}
    />
  );
}
