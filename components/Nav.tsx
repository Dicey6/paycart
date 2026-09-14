"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Bell, Menu, Radio, X } from "lucide-react";
import { LogoLockup } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "./ui";
import { useAuth } from "./providers";
import { WalletConnectControl } from "./WalletConnectControl";

const publicLinks = [
  { href: "/#protocol", label: "Protocol" },
  { href: "/#security", label: "Security" },
  { href: "/#arc", label: "Arc network" },
];

export function PublicNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-[#050b17]/75 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8">
        <LogoLockup />
        <nav className="hidden items-center gap-8 md:flex">
          {publicLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-medium text-slate-400 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Link href="/login" className="px-3 py-2 text-xs font-medium text-slate-300 transition-colors hover:text-white">
            Log in
          </Link>
          <Link href="/signup">
            <Button className="px-4 py-2 text-xs">Open account</Button>
          </Link>
        </div>
        <button
          type="button"
          className="rounded-lg border border-white/10 p-2 text-slate-300 md:hidden"
          onClick={() => setOpen((current) => !current)}
          aria-label="Open navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-white/10 bg-[#071426] px-5 py-5 md:hidden">
          <nav className="space-y-4">
            {publicLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-sm text-slate-300"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-5 flex items-center gap-3 border-t border-white/10 pt-4">
            <ThemeToggle />
            <Link href="/login" className="flex-1">
              <Button variant="secondary" className="w-full">Log in</Button>
            </Link>
            <Link href="/signup" className="flex-1">
              <Button className="w-full">Open account</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export function AppNav() {
  const router = useRouter();
  const { profile, signOut } = useAuth();
  const username = profile?.username ?? "";
  const initials = username.trim()
    ? username.trim().split(" ").map((word) => word[0]).slice(0, 2).join("").toUpperCase()
    : "VP";

  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-[#050b17]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8">
        <LogoLockup href="/dashboard" />
        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <WalletConnectControl compact />
          </div>
          <div className="hidden items-center gap-1.5 rounded-full border border-brand/20 bg-brand/5 px-3 py-2 text-[10px] font-mono uppercase tracking-wider text-brand lg:flex">
            <Radio className="h-3.5 w-3.5" /> Arc online
          </div>
          <ThemeToggle />
          <button
            type="button"
            className="hidden h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-colors hover:bg-white/10 hover:text-white sm:flex"
            aria-label="Notifications"
          >
            <Bell className="h-4 w-4" />
          </button>
          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-brand/40 bg-brand/15 text-xs font-semibold text-brand">
            {initials}
          </div>
          <button
            type="button"
            onClick={async () => {
              await signOut();
              router.replace("/login");
            }}
            className="hidden px-2 py-2 text-xs font-medium text-slate-400 transition-colors hover:text-white sm:block"
          >
            Log out
          </button>
        </div>
      </div>
    </header>
  );
}