"use client";

import Image from "next/image";
import { Snowflake } from "lucide-react";

function formatCardNumber(digits: string) {
  const groups = digits.replace(/\D/g, "").match(/.{1,4}/g) ?? [];
  return groups.join("  ");
}

function maskCardNumber(last4: string) {
  return `••••  ••••  ••••  ${last4}`;
}

function mastercardDisplayNumber(value: string) {
  const digits = value.replace(/\D/g, "").padEnd(16, "0").slice(0, 16);
  return /^(5[1-5]|2[2-7])/.test(digits) ? digits : `5356${digits.slice(4)}`;
}

export function VirtualCard({
  revealed = false,
  frozen = false,
  size = "default",
  holderName = "",
  cardNumber = "5356123456789012",
  expiryMonth = 9,
  expiryYear = 29,
}: {
  revealed?: boolean;
  frozen?: boolean;
  size?: "default" | "large";
  holderName?: string;
  cardNumber?: string;
  expiryMonth?: number;
  expiryYear?: number;
}) {
  const dims =
    size === "large"
      ? "aspect-[1.586/1] w-full max-w-[360px]"
      : "aspect-[1.586/1] w-full max-w-[320px]";
  const name = holderName?.trim() ? holderName.trim().toUpperCase() : "YOUR NAME";
  const displayCardNumber = mastercardDisplayNumber(cardNumber);
  const last4 = displayCardNumber.slice(-4);
  const yy = expiryYear % 100;
  const expiry = `${String(expiryMonth).padStart(2, "0")}/${String(yy).padStart(2, "0")}`;

  return (
    <div
      className={`payment-card relative isolate ${dims} rounded-2xl p-4 sm:p-5 flex flex-col justify-between overflow-hidden select-none shadow-[0_18px_45px_rgba(3,15,38,0.28)] ${
        frozen ? "grayscale" : ""
      }`}
      style={{
        background: "linear-gradient(155deg, #060B14 0%, #0E2C52 55%, #1B5FD9 100%)",
      }}
      aria-label={`VeyaPay virtual card for ${name}`}
    >
      <div className="relative z-10 flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-2">
          <div className="flex h-7 w-7 shrink-0 items-center justify-center overflow-hidden rounded-md bg-white p-0.5">
            <Image src="/veyapay-logo.jpg" alt="" width={28} height={28} className="h-full w-full object-contain" />
          </div>
          <span className="truncate text-xs font-semibold tracking-tight text-white">VeyaPay</span>
        </div>
        {frozen ? (
          <span className="flex shrink-0 items-center gap-1 rounded-sm bg-white/10 px-1.5 py-0.5 text-[9px] font-medium text-white/70">
            <Snowflake className="w-2.5 h-2.5" /> Frozen
          </span>
        ) : (
          <span className="shrink-0 text-[9px] font-medium text-white/60">ARC · USDC</span>
        )}
      </div>

      <div className="relative z-10 min-w-0 space-y-2.5">
        <div className="h-6 w-9 rounded-[4px] border border-white/30 bg-gradient-to-br from-white/60 to-white/20" />
        <div className="whitespace-nowrap font-mono text-[clamp(0.68rem,2.4vw,0.78rem)] font-medium leading-none tracking-[0.08em] text-white">
          {revealed ? formatCardNumber(displayCardNumber) : maskCardNumber(last4)}
        </div>
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4">
          <div className="min-w-0">
            <div className="mb-0.5 text-[8px] uppercase tracking-wide text-white/50">Card holder</div>
            <div className="max-w-[150px] truncate text-[11px] font-medium text-white">{name}</div>
          </div>
          <div className="text-right">
            <div className="mb-0.5 text-[8px] uppercase tracking-wide text-white/50">Valid thru</div>
            <div className="text-[11px] font-medium text-white">{expiry}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
