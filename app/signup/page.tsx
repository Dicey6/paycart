"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { LogoLockup } from "@/components/Logo";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button, Field, Input } from "@/components/ui";
import { useUser } from "@/components/providers";

export default function SignupPage() {
  const router = useRouter();
  const { setUsername } = useUser();
  const [draft, setDraft] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!draft.trim()) {
      setError("Enter a username — it'll appear on your card.");
      return;
    }
    if (password !== confirm) {
      setError("Passwords don't match.");
      return;
    }
    setError("");
    setUsername(draft.trim());
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="max-w-6xl mx-auto w-full px-5 sm:px-8 h-16 flex items-center justify-between">
        <LogoLockup />
        <ThemeToggle />
      </div>
      <div className="flex-1 flex items-center justify-center px-5 py-10">
        <div className="w-full max-w-sm">
          <h1 className="text-2xl font-semibold tracking-tight mb-1.5">Create your account</h1>
          <p className="text-sm mb-7 text-neutral-500 dark:text-neutral-400">
            Set up PayCart in a couple of minutes.
          </p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <Field label="Username" hint="This is how you'll appear on your virtual card.">
              <Input
                type="text"
                placeholder="Ren Uchiha"
                value={draft}
                maxLength={24}
                onChange={(e) => setDraft(e.target.value)}
              />
            </Field>
            <Field label="Email">
              <Input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Field>
            <Field label="Password" hint="Use at least 8 characters.">
              <Input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={8}
              />
            </Field>
            <Field label="Confirm password">
              <Input
                type="password"
                placeholder="••••••••"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                required
              />
            </Field>

            {error && <p className="text-xs text-red-500">{error}</p>}

            <Button className="w-full py-3" type="submit">
              Create account
            </Button>
            <p className="text-xs text-center text-neutral-400 dark:text-neutral-500">
              By continuing you agree to PayCart&apos;s Terms and Privacy Policy.
            </p>
          </form>

          <div className="mt-6 text-center text-sm text-neutral-500 dark:text-neutral-400">
            Already have an account?{" "}
            <Link href="/dashboard" className="text-brand-dark dark:text-brand font-medium">
              Log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
