"use client";

import { useState } from "react";
import { Loader2, Wallet } from "lucide-react";
import { Button } from "@/components/ui";
import { useWallet } from "@/components/providers";

function shortenAddress(address: string) {
  return `${address.slice(0, 6)}…${address.slice(-4)}`;
}

export function WalletConnectControl({ compact = false }: { compact?: boolean }) {
  const { address, connectArc, disconnect } = useWallet();
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");

  const connect = async () => {
    setError("");
    setPending(true);
    try {
      await connectArc();
    } catch (connectionError) {
      setError(connectionError instanceof Error ? connectionError.message : "Arc wallet connection failed.");
    } finally {
      setPending(false);
    }
  };

  if (address) {
    return (
      <button
        type="button"
        onClick={disconnect}
        className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-2 rounded-md border border-brand/40 bg-brand/10 text-brand-dark dark:text-brand transition-colors duration-150 ease-snap hover:bg-brand/15 active:scale-[0.98]"
        title="Disconnect Arc wallet"
      >
        <Wallet className="w-3.5 h-3.5" />
        {shortenAddress(address)}
      </button>
    );
  }

  return (
    <div className="relative">
      <Button
        type="button"
        variant={compact ? "ghost" : "primary"}
        className={compact ? "text-xs px-3 py-2 rounded-md" : ""}
        onClick={() => void connect()}
        disabled={pending}
      >
        {pending ? <Loader2 className="w-4 h-4 animate-spin" /> : <Wallet className="w-4 h-4" />}
        {pending ? "Connecting…" : compact ? "Connect Arc" : "Connect Arc wallet"}
      </Button>
      {error && (
        <p className="absolute right-0 top-full z-40 mt-2 w-64 animate-fade-in rounded-md border border-red-400/20 bg-red-950/90 p-2 text-xs text-red-200">
          {error}
        </p>
      )}
    </div>
  );
}
