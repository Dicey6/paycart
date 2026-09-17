"use client";

import Image from "next/image";
import { Snowflake } from "lucide-react";

function formatCardNumber(digits: string) {
  return digits.replace(/(.{4})/g, "$1  ").trim();
}

function maskCardNumber(last4: string) {
  return `••••  ••••  ••••  ${last4}`;
}

export function VirtualCard({
  revealed = false,
  frozen = false,
  size = "default",
  holderName = "",
  cardNumber = "4821901622474821",
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
    size === "large" ? "aspect-[1.586/1] w-full max-w-[260px]" : "aspect-[1.586/1] w-full max-w-[220px]";
  const name = holderName?.trim() ? holderName.trim().toUpperCase() : "YOUR NAME";
  const last4 = cardNumber.slice(-4);
  const yy = expiryYear % 100;
  const expiry = `${String(expiryMonth).padStart(2, "0")}/${String(yy).padStart(2, "0")}`;

  return (
    <div
      className={`relative ${dims} rounded-xl p-3.5 flex flex-col justify-between overflow-hidden select-none ${
        frozen ? "grayscale" : ""
      }`}
      style={{
        background: "linear-gradient(155deg, #060B14 0%, #0E2C52 55%, #1B5FD9 100%)",
      }}
    >
      <div className="flex items-start justify-between relative z-10">
        <div className="flex items-center gap-1.5">
          <div className="w-5 h-5 rounded-sm bg-white/95 flex items-center justify-center overflow-hidden">
            <Image src="/veyapay-logo.jpg" alt="" width={20} height={20} className="w-full h-full object-cover object-left" />
          </div>
          <span className="text-white font-semibold text-xs tracking-tight">VeyaPay</span>
        </div>
        {frozen ? (
          <span className="flex items-center gap-1 text-[9px] font-medium text-white/70 bg-white/10 px-1.5 py-0.5 rounded-sm">
            <Snowflake className="w-2.5 h-2.5" /> Frozen
          </span>
        ) : (
          <span className="text-[9px] font-medium text-white/60">ARC · USDC</span>
        )}
      </div>

      <div className="relative z-10 space-y-2">
        <div className="h-5 w-7 rounded-[3px] bg-gradient-to-br from-white/60 to-white/20 border border-white/30" />
        <div className="text-white text-xs tracking-[0.12em] font-medium">
          {revealed ? formatCardNumber(cardNumber) : maskCardNumber(last4)}
        </div>
        <div className="flex items-end justify-between">
          <div>
            <div className="text-white/40 text-[8px] uppercase tracking-wide mb-0.5">Card holder</div>
            <div className="text-white text-[11px] font-medium truncate max-w-[120px]">{name}</div>
          </div>
          <div className="text-right">
            <div className="text-white/40 text-[8px] uppercase tracking-wide mb-0.5">Valid thru</div>
            <div className="text-white text-[11px] font-medium">{expiry}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
