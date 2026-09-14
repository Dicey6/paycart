"use client";

import Image from "next/image";
import { Snowflake } from "lucide-react";

export function VirtualCard({
  revealed = false,
  frozen = false,
  size = "default",
  holderName = "",
}: {
  revealed?: boolean;
  frozen?: boolean;
  size?: "default" | "large";
  holderName?: string;
}) {
  const dims =
    size === "large" ? "aspect-[1.586/1] w-full max-w-[260px]" : "aspect-[1.586/1] w-full max-w-[220px]";
  const name = holderName?.trim() ? holderName.trim().toUpperCase() : "YOUR NAME";

  return (
    <div
      className={`relative ${dims} rounded-xl p-3.5 flex flex-col justify-between overflow-hidden select-none shadow-lg transition-transform ${
        frozen ? "grayscale" : ""
      }`}
      style={{
        background:
          "linear-gradient(135deg, #06152d 0%, #0b3b76 52%, #0a9fd2 100%)",
      }}
    >
      <div
        className="absolute -right-8 -top-8 w-28 h-28 rounded-full opacity-30"
          style={{ background: "radial-gradient(circle, #b8f2ff, transparent 70%)" }}
      />
        <div className="absolute -bottom-16 -left-12 h-36 w-36 rounded-full border border-white/20" />
        <div className="absolute bottom-4 right-5 h-12 w-12 rounded-full border border-white/20" />
      <div className="flex items-start justify-between relative z-10">
        <div className="flex items-center gap-1.5">
          <div className="w-5 h-5 rounded bg-white/95 flex items-center justify-center overflow-hidden">
              <Image src="/veyapay-logo.jpg" alt="" width={20} height={20} className="w-full h-full object-cover object-left" />
          </div>
            <span className="text-white font-semibold text-xs tracking-tight">VeyaPay</span>
        </div>
        {frozen ? (
          <span className="flex items-center gap-1 text-[9px] font-medium text-white/70 bg-white/10 px-1.5 py-0.5 rounded-full">
            <Snowflake className="w-2.5 h-2.5" /> Frozen
          </span>
        ) : (
          <span className="text-[9px] font-medium text-white/60">ARC • USDC</span>
        )}
      </div>

      <div className="relative z-10 space-y-2">
        <div className="text-white text-xs tracking-[0.12em] font-medium">
          {revealed ? "4821  9016  2247  4821" : "••••  ••••  ••••  4821"}
        </div>
        <div className="flex items-end justify-between">
          <div>
            <div className="text-white/40 text-[8px] uppercase tracking-wide mb-0.5">Card holder</div>
            <div className="text-white text-[11px] font-medium truncate max-w-[120px]">{name}</div>
          </div>
          <div className="text-right">
            <div className="text-white/40 text-[8px] uppercase tracking-wide mb-0.5">Valid thru</div>
            <div className="text-white text-[11px] font-medium">09/29</div>
          </div>
        </div>
      </div>
    </div>
  );
}
