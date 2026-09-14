"use client";

import { useEffect } from "react";
import { ChevronRight, CreditCard, Wallet } from "lucide-react";
import { useRouter } from "next/navigation";
import { AppNav } from "@/components/Nav";
import { VirtualCard } from "@/components/VirtualCard";
import { Badge, Button, Card } from "@/components/ui";
import { useAuth } from "@/components/providers";
import { WalletConnectControl } from "@/components/WalletConnectControl";

function BalanceRow({
  symbol,
  network,
  amount,
  tone,
}: {
  symbol: string;
  network: string;
  amount: string;
  tone: "green" | "violet";
}) {
  return (
    <div className="flex items-center justify-between py-3">
      <div className="flex items-center gap-3">
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
            tone === "green"
              ? "bg-brand/10 text-brand-dark dark:text-brand"
              : "bg-violet-500/10 text-violet-500"
          }`}
        >
          {symbol.slice(0, 1)}
        </div>
        <div>
          <div className="text-sm font-medium text-neutral-900 dark:text-neutral-50">{symbol}</div>
          <div className="text-xs text-neutral-500 dark:text-neutral-400">{network}</div>
        </div>
      </div>
      <div className="text-sm font-semibold text-neutral-900 dark:text-neutral-50">{amount}</div>
    </div>
  );
}

export default function DashboardPage() {
  const router = useRouter();
  const { session, profile, loading } = useAuth();
  const username = profile?.username ?? "";
  const firstName = username.trim() ? username.trim().split(" ")[0] : "there";

  useEffect(() => {
    if (!loading && !session) router.replace("/login");
  }, [loading, router, session]);

  if (loading || !session) {
    return (
      <div className="min-h-screen flex items-center justify-center px-5">
       <p className="text-sm text-slate-500 dark:text-slate-400">Loading your VeyaPay account…</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-10">
      <AppNav />
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-8 space-y-6">
        <div>
          <div className="eyebrow">VEYA / DASHBOARD</div>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white">Welcome, {firstName}</h1>
          <p className="mt-2 text-sm text-slate-400">
            Connect your Arc wallet to fund your VeyaPay balance with USDC.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          <Card className="md:col-span-2 p-6">
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm text-slate-400">Available balance</span>
              <Badge tone="cyan">USDC · ARC</Badge>
            </div>
            <div className="mb-6 text-4xl font-semibold tracking-tight text-white">0.00 <span className="text-lg text-brand">USDC</span></div>
            <div className="divide-y divide-white/10">
              <BalanceRow symbol="USDC" network="Arc Blockchain" amount="0.00" tone="green" />
            </div>
            <div className="flex gap-3 mt-5">
              <div className="flex-1">
                <WalletConnectControl />
              </div>
              <Button variant="secondary" className="flex-1">
                <CreditCard className="w-4 h-4" /> View virtual card
              </Button>
            </div>
          </Card>

          <Card className="p-6 flex flex-col items-center">
              <span className="eyebrow mb-4 self-start">
              VEYAPAY CARD
            </span>
            <VirtualCard holderName={username} />
            <button className="text-sm font-medium mt-4 self-start text-brand-dark dark:text-brand flex items-center gap-1">
              Manage card <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </Card>
        </div>

        <Card padded={false}>
          <div className="flex items-center justify-between px-5 pt-5 pb-1">
            <h3 className="text-base font-semibold text-white">Arc activity</h3>
          </div>
          <div className="flex flex-col items-center text-center py-14 px-6">
             <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 bg-brand/10 border border-brand/20">
               <Wallet className="w-5 h-5 text-brand" />
            </div>
             <h3 className="text-base font-semibold mb-1.5 text-white">No Arc activity yet</h3>
             <p className="text-sm max-w-xs mb-5 text-slate-400">
               Connect an Arc wallet to see USDC funding and payment activity here.
            </p>
             <WalletConnectControl />
          </div>
        </Card>
      </div>
    </div>
  );
}
