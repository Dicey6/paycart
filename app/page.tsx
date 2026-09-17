import type { ElementType } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  CircleDollarSign,
  CreditCard,
  Eye,
  Fingerprint,
  Globe,
  KeyRound,
  Lock,
  Radio,
  Wallet,
  Zap,
} from "lucide-react";
import { PublicNav } from "@/components/Nav";
import { VirtualCard } from "@/components/VirtualCard";
import { Badge, Button, Card } from "@/components/ui";
import { Reveal } from "@/components/Reveal";

function ProtocolStep({ number, title, body }: { number: string; title: string; body: string }) {
  return (
    <div className="relative border-l border-white/10 pb-8 pl-6 last:pb-0">
      <div className="absolute -left-[5px] top-1 h-2 w-2 rounded-full border-2 border-[#05070a] bg-brand" />
      <div className="mb-2 font-mono text-[10px] tracking-[0.2em] text-brand/70">{number}</div>
      <h3 className="mb-1 text-base font-semibold text-white">{title}</h3>
      <p className="max-w-sm text-sm leading-relaxed text-slate-400">{body}</p>
    </div>
  );
}

function SpecRow({
  index,
  icon: Icon,
  title,
  body,
}: {
  index: string;
  icon: ElementType;
  title: string;
  body: string;
}) {
  return (
    <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 border-b border-white/[0.06] py-5 sm:grid-cols-[3rem_12rem_1fr] sm:items-baseline sm:gap-x-6">
      <span className="font-mono text-xs text-slate-600">{index}</span>
      <span className="flex items-center gap-2 text-sm font-semibold text-white">
        <Icon className="h-3.5 w-3.5 text-brand" /> {title}
      </span>
      <p className="col-span-2 mt-1 max-w-xl text-sm leading-relaxed text-slate-400 sm:col-span-1 sm:mt-0">{body}</p>
    </div>
  );
}

const controlRows: Array<[ElementType, string, string]> = [
  [KeyRound, "Private keys", "Never requested"],
  [Eye, "Card details", "Masked by default"],
  [Globe, "Network", "Arc Blockchain"],
];

const specs: Array<[ElementType, string, string]> = [
  [CircleDollarSign, "Coinless settlement", "No wrapped token, no gas token, no synthetic dollar. The USDC that pays for your card is the same USDC that pays the network."],
  [Zap, "Arc speed", "Designed for the low-latency settlement experience Arc makes possible."],
  [Wallet, "Wallet first", "Your wallet stays in control. VeyaPay only asks for a public connection."],
  [Lock, "Private by default", "Card details stay masked and sensitive actions stay deliberate."],
  [Fingerprint, "Supabase Auth", "Account access is protected by persistent sessions and verified email."],
  [CreditCard, "Ready to spend", "A virtual card interface that takes onchain value into daily digital life."],
];

const cohort = [
  "BlackRock",
  "DTCC",
  "Mastercard",
  "Visa",
  "MoneyGram",
  "ICE Markets",
  "Galaxy",
  "SBI",
  "Standard Chartered",
  "Sumitomo",
];

export default function HomePage() {
  return (
    <div className="min-h-screen overflow-hidden">
      <PublicNav />

      <main>
        <section className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 pt-16 sm:px-8 sm:pt-24 lg:grid-cols-[1.05fr_0.95fr] lg:pb-28">
          <div className="relative z-10">
            <Reveal>
              <Badge tone="blue">
                <Radio className="h-3 w-3" /> Coinless settlement on Arc
              </Badge>
            </Reveal>
            <Reveal delay={60}>
              <h1 className="mt-7 max-w-2xl text-5xl font-semibold leading-[1.02] tracking-[-0.03em] text-white sm:text-6xl">
                Spend the USDC in your Arc wallet like a card.
              </h1>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
                No wrapped token, no gas token, no synthetic dollar. Fund your VeyaPay card in USDC,
                spend in USDC, and let Arc settle the difference.
              </p>
            </Reveal>
            <Reveal delay={180}>
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
            </Reveal>
            <Reveal delay={220}>
              <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-white/10 pt-5 text-xs text-slate-500">
                <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-brand" /> USDC native</span>
                <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-brand" /> Arc Blockchain</span>
                <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-brand" /> Wallet controlled</span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={140} className="relative flex min-h-[380px] items-center justify-center lg:justify-end">
            <div className="absolute right-6 top-3 rounded-md border border-brand/20 bg-[#0A0D12] px-3 py-2 font-mono text-[10px] text-brand">
              ARC / MAINNET <span className="ml-2 text-emerald-400">● LIVE</span>
            </div>
            <div className="relative z-10 rotate-[-3deg] transition-transform duration-150 ease-snap hover:rotate-0">
              <VirtualCard size="large" holderName="ALEX RIVERA" />
            </div>
            <div className="panel absolute bottom-5 left-3 z-20 rounded-md px-4 py-3 sm:left-10">
              <div className="mb-1 flex items-center gap-2 text-[10px] font-mono uppercase tracking-wider text-slate-500">
                Settlement rail
              </div>
              <div className="text-sm font-semibold text-white">USDC on Arc</div>
            </div>
          </Reveal>
        </section>

        <section className="border-y border-white/10 bg-white/[0.02]">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 py-8 sm:grid-cols-3 sm:px-8">
            {[
              ["01", "ONE ASSET", "USDC"],
              ["02", "ONE NETWORK", "ARC"],
              ["03", "ONE CARD", "VEYA"],
            ].map(([number, label, value], i) => (
              <Reveal key={number} delay={i * 60}>
                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs text-brand">{number}</span>
                  <div className="h-8 w-px bg-white/10" />
                  <div>
                    <div className="font-mono text-[9px] tracking-[0.2em] text-slate-500">{label}</div>
                    <div className="mt-1 text-sm font-semibold tracking-wider text-white">{value}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="protocol" className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal>
              <h2 className="max-w-md text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Built for the gap between onchain and everyday.
              </h2>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-slate-400">
                Keep your USDC on Arc. Connect your wallet. VeyaPay gives you the payment interface
                to use it in the places that matter.
              </p>
            </Reveal>
            <div className="grid gap-2 sm:grid-cols-2">
              <Reveal delay={0}><ProtocolStep number="01" title="Connect" body="Link a compatible Arc wallet without sharing keys or seed phrases." /></Reveal>
              <Reveal delay={60}><ProtocolStep number="02" title="Fund" body="Use USDC as the single, stable source for your VeyaPay balance." /></Reveal>
              <Reveal delay={120}><ProtocolStep number="03" title="Issue" body="Generate a private virtual card designed for digital checkout." /></Reveal>
              <Reveal delay={180}><ProtocolStep number="04" title="Move" body="Pay online while Arc finalizes instantly, with no window where the payment can still unwind." /></Reveal>
            </div>
          </div>
        </section>

        <section id="arc" className="border-y border-white/10 bg-[#0A0D12]">
          <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
            <Reveal>
              <div className="mb-6 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                <h2 className="max-w-lg text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  A sharper interface for a faster chain.
                </h2>
                <Badge tone="blue"><CircleDollarSign className="h-3 w-3" /> USDC on Arc</Badge>
              </div>
            </Reveal>
            <div className="border-t border-white/[0.06]">
              {specs.map(([Icon, title, body], i) => (
                <Reveal key={title} delay={Math.min(i * 40, 160)}>
                  <SpecRow index={String(i + 1).padStart(2, "0")} icon={Icon} title={title} body={body} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="cohort" className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <Reveal>
              <h2 className="max-w-lg text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                No antechamber. No reorg risk.
              </h2>
              <p className="mt-5 max-w-lg text-sm leading-relaxed text-slate-400">
                Before Arc, every transaction sat in a mempool where its outcome was still
                probabilistic: it could be reordered, front-run, or dropped before it settled.
                Arc's deterministic finality closes that waiting room. The moment a payment is
                submitted, it finalizes or it does not. There is no in-between state where a
                merchant ships against a payment that later reverses.
              </p>
              <div className="mt-8 space-y-3 text-sm text-slate-300">
                {controlRows.map(([Icon, label, value]) => (
                  <div key={label} className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                    <span className="flex items-center gap-3 text-slate-400">
                      <Icon className="h-4 w-4 text-brand" /> {label}
                    </span>
                    <span className="font-mono text-xs text-white">{value}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={100}>
              <Card className="p-0 overflow-hidden">
                <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
                  <div>
                    <div className="text-sm font-semibold text-white">The Cohort</div>
                    <div className="mt-0.5 text-xs text-slate-500">Arc's founding validator set</div>
                  </div>
                  <span className="font-mono text-[10px] text-slate-500">10 / 10</span>
                </div>
                <div className="grid grid-cols-2 divide-x divide-y divide-white/[0.06]">
                  {cohort.map((name) => (
                    <div key={name} className="px-6 py-3.5 text-sm text-slate-300">
                      {name}
                    </div>
                  ))}
                </div>
                <div className="border-t border-white/10 px-6 py-4 text-xs leading-relaxed text-slate-500">
                  A checkout protocol is only as trustworthy as what finalizes it. VeyaPay settles on
                  the same validator set that already clears the world's card and wire volume,
                  rather than an anonymous set of miners.
                </div>
              </Card>
            </Reveal>
          </div>
        </section>

        <section className="border-t border-white/10 bg-white/[0.02]">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
            <Reveal>
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-xl">
                  <Badge tone="neutral">Roadmap</Badge>
                  <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white">
                    Next: escrow for merchants.
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">
                    The Lock will hold a payment's USDC in a contract until a release condition is
                    met, whether that is delivery confirmation or a milestone signature. The
                    Watchers are whatever attests that the condition was met: a delivery API, a
                    signed proof, or a third-party attestor. Phase one is the trusted-cohort
                    finality live today; phase two opens VeyaPay's own fee-sharing layer to merchants
                    and liquidity providers as Arc opens its validator set.
                  </p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2 lg:w-80 lg:shrink-0">
                  <div className="panel rounded-lg p-4">
                    <div className="font-mono text-[10px] tracking-[0.16em] text-slate-500">PHASE 1</div>
                    <div className="mt-1.5 text-sm font-medium text-white">Trusted-cohort finality</div>
                    <div className="mt-1 text-xs text-brand">Live</div>
                  </div>
                  <div className="panel rounded-lg p-4">
                    <div className="font-mono text-[10px] tracking-[0.16em] text-slate-500">PHASE 2</div>
                    <div className="mt-1.5 text-sm font-medium text-white">Merchant escrow, The Lock</div>
                    <div className="mt-1 text-xs text-slate-500">Planned</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#05070a]">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-end sm:justify-between sm:px-8">
          <div>
            <div className="mb-3 text-sm font-semibold text-white">VeyaPay</div>
            <p className="max-w-sm text-sm leading-relaxed text-slate-500">
              Smart digital payments powered by USDC on Arc Blockchain.
            </p>
            <p className="mt-3 max-w-sm text-xs leading-relaxed text-slate-600">
              Veya, from via, the path a transaction takes, and vía fiduciae, trust made routable.
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
