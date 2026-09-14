import type { ElementType } from "react";
import Link from "next/link";
import {
  Activity,
  ArrowUpRight,
  Check,
  CircleDollarSign,
  CreditCard,
  Eye,
  Fingerprint,
  Globe,
  KeyRound,
  Lock,
  Shield,
  Sparkles,
  Zap,
  Wallet,
} from "lucide-react";
import { PublicNav } from "@/components/Nav";
import { VirtualCard } from "@/components/VirtualCard";
import { Badge, Button, Card } from "@/components/ui";

function FeatureCard({
  icon: Icon,
  title,
  body,
}: {
  icon: ElementType;
  title: string;
  body: string;
}) {
  return (
    <div className="glass-panel rounded-2xl p-5 transition-transform duration-300 hover:-translate-y-1">
      <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl border border-brand/20 bg-brand/10">
        <Icon className="h-4 w-4 text-brand" />
      </div>
      <h3 className="mb-2 text-sm font-semibold text-white">{title}</h3>
      <p className="text-sm leading-relaxed text-slate-400">{body}</p>
    </div>
  );
}

function ProtocolStep({ number, title, body }: { number: string; title: string; body: string }) {
  return (
    <div className="group relative border-l border-white/10 pb-8 pl-6 last:pb-0">
      <div className="absolute -left-[5px] top-0 h-2.5 w-2.5 rounded-full border-2 border-[#071426] bg-brand shadow-[0_0_16px_rgba(82,185,255,0.85)]" />
      <div className="mb-2 font-mono text-[10px] tracking-[0.2em] text-brand/70">{number}</div>
      <h3 className="mb-1 text-base font-semibold text-white">{title}</h3>
      <p className="max-w-sm text-sm leading-relaxed text-slate-400">{body}</p>
    </div>
  );
}

const securityRows: Array<[ElementType, string, string]> = [
  [KeyRound, "Private keys", "Never requested"],
  [Eye, "Card details", "Masked by default"],
  [Globe, "Network", "Arc Blockchain"],
];

export default function HomePage() {
  return (
    <div className="min-h-screen overflow-hidden">
      <PublicNav />

      <main>
        <section className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 pt-16 sm:px-8 sm:pt-24 lg:grid-cols-[1.05fr_0.95fr] lg:pb-28">
          <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-blue-500/20 blur-[120px]" />
          <div className="relative z-10">
            <Badge tone="cyan">
              <Sparkles className="h-3 w-3" /> Arc native · USDC ready
            </Badge>
            <h1 className="mt-7 max-w-3xl text-5xl font-semibold leading-[0.98] tracking-[-0.06em] text-white sm:text-7xl">
              The payment layer for the{" "}
              <span className="bg-gradient-to-r from-brand-light via-brand to-blue-500 bg-clip-text text-transparent">
                next network.
              </span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
              VeyaPay turns USDC on Arc Blockchain into a faster, smarter way to move through the
              digital economy—with a virtual card built for the way you already live online.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link href="/signup">
                <Button className="px-5 py-3">Open your VeyaPay account <ArrowUpRight className="h-4 w-4" /></Button>
              </Link>
              <Link href="/login">
                <Button variant="secondary" className="px-5 py-3">
                  <Wallet className="h-4 w-4" /> Connect to Arc
                </Button>
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-white/10 pt-5 text-xs text-slate-500">
              <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-brand shadow-[0_0_12px_#52B9FF]" /> USDC native</span>
              <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-brand shadow-[0_0_12px_#52B9FF]" /> Arc Blockchain</span>
              <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-brand shadow-[0_0_12px_#52B9FF]" /> Wallet controlled</span>
            </div>
          </div>

          <div className="relative flex min-h-[410px] items-center justify-center lg:justify-end">
            <div className="tech-grid absolute inset-4 rounded-[2rem] border border-brand/10 opacity-50 [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]" />
            <div className="absolute h-72 w-72 rounded-full border border-brand/15 shadow-[0_0_100px_rgba(39,136,255,0.24)]" />
            <div className="absolute h-56 w-56 rounded-full border border-dashed border-cyan-300/20" />
            <div className="absolute right-6 top-3 rounded-lg border border-brand/20 bg-[#071426]/80 px-3 py-2 font-mono text-[10px] text-brand backdrop-blur">
              ARC / MAINNET <span className="ml-2 text-emerald-300">● LIVE</span>
            </div>
            <div className="relative z-10 rotate-[-4deg] transition-transform duration-500 hover:rotate-0">
              <VirtualCard size="large" holderName="ALEX RIVERA" />
            </div>
            <div className="absolute bottom-5 left-3 z-20 glass-panel rounded-xl px-4 py-3 shadow-2xl sm:left-10">
              <div className="mb-1 flex items-center gap-2 text-[10px] font-mono uppercase tracking-wider text-slate-500">
                <Activity className="h-3 w-3 text-brand" /> Settlement rail
              </div>
              <div className="text-sm font-semibold text-white">USDC on Arc</div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.025]">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 py-8 sm:grid-cols-3 sm:px-8">
            {[
              ["01", "ONE ASSET", "USDC"],
              ["02", "ONE NETWORK", "ARC"],
              ["03", "ONE CARD", "VEYA"],
            ].map(([number, label, value]) => (
              <div key={number} className="flex items-center gap-4">
                <span className="font-mono text-xs text-brand">{number}</span>
                <div className="h-8 w-px bg-white/10" />
                <div>
                  <div className="font-mono text-[9px] tracking-[0.2em] text-slate-500">{label}</div>
                  <div className="mt-1 text-sm font-semibold tracking-wider text-white">{value}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="protocol" className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <div className="eyebrow">The VeyaPay protocol</div>
              <h2 className="mt-4 max-w-md text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Built for the gap between onchain and everyday.
              </h2>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-slate-400">
                Keep your USDC on Arc. Connect your wallet. VeyaPay gives you the payment interface
                to use it in the places that matter.
              </p>
            </div>
            <div className="grid gap-2 sm:grid-cols-2">
              <ProtocolStep number="01" title="Connect" body="Link a compatible Arc wallet without sharing keys or seed phrases." />
              <ProtocolStep number="02" title="Fund" body="Use USDC as the single, stable source for your VeyaPay balance." />
              <ProtocolStep number="03" title="Issue" body="Generate a private virtual card designed for digital checkout." />
              <ProtocolStep number="04" title="Move" body="Pay online while keeping your funds in your own wallet until you choose to spend." />
            </div>
          </div>
        </section>

        <section id="arc" className="border-y border-white/10 bg-[#061222]/80">
          <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
            <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <div className="eyebrow">Why VeyaPay</div>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  A sharper interface for a faster chain.
                </h2>
              </div>
              <Badge tone="blue"><CircleDollarSign className="h-3 w-3" /> USDC on Arc</Badge>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <FeatureCard icon={CircleDollarSign} title="USDC native" body="A focused payment experience built around one clear, stable unit of account." />
              <FeatureCard icon={Zap} title="Arc speed" body="Designed for the low-latency settlement experience Arc makes possible." />
              <FeatureCard icon={Wallet} title="Wallet first" body="Your wallet stays in control. VeyaPay only asks for a public connection." />
              <FeatureCard icon={Lock} title="Private by default" body="Card details stay masked and sensitive actions stay deliberate." />
              <FeatureCard icon={Fingerprint} title="Supabase Auth" body="Account access is protected by persistent sessions and verified email." />
              <FeatureCard icon={CreditCard} title="Ready to spend" body="A virtual card interface that takes onchain value into daily digital life." />
            </div>
          </div>
        </section>

        <section id="security" className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="eyebrow">Security by design</div>
              <h2 className="mt-4 max-w-lg text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                The interface is futuristic. The control stays yours.
              </h2>
              <p className="mt-5 max-w-lg text-sm leading-relaxed text-slate-400">
                VeyaPay connects to the tools you already trust without requesting private keys,
                seed phrases, or unnecessary permissions.
              </p>
              <div className="mt-8 space-y-3 text-sm text-slate-300">
                {[
                  "Public wallet connection only",
                  "USDC and Arc centered by design",
                  "Verified account sessions through Supabase",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand/10 text-brand">
                      <Check className="h-3 w-3" />
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <Card className="tech-grid relative overflow-hidden p-7">
              <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-blue-500/20 blur-3xl" />
              <div className="relative">
                <div className="flex items-center justify-between border-b border-white/10 pb-5">
                  <span className="flex items-center gap-2 text-sm font-semibold text-white"><Shield className="h-4 w-4 text-brand" /> Trust layer</span>
                  <span className="font-mono text-[10px] text-emerald-300">VERIFIED</span>
                </div>
                <div className="space-y-5 pt-6">
                  {securityRows.map(([Icon, label, value]) => (
                    <div key={label} className="flex items-center justify-between">
                      <span className="flex items-center gap-3 text-sm text-slate-400">
                        <Icon className="h-4 w-4 text-brand" /> {label}
                      </span>
                      <span className="font-mono text-xs text-white">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#030712]">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-end sm:justify-between sm:px-8">
          <div>
            <div className="mb-4"><span className="eyebrow">VeyaPay</span></div>
            <p className="max-w-sm text-sm leading-relaxed text-slate-500">
              Smart digital payments powered by USDC on Arc Blockchain.
            </p>
          </div>
          <div className="text-left text-xs text-slate-600 sm:text-right">
            <div>ARC / USDC / VEYA</div>
            <div className="mt-2">© 2026 VeyaPay. In active development.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}