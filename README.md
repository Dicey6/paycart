# PayCart

A stablecoin-funded virtual card concept UI, built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

## Pages

- `/` — Home / landing page (hero, narrative, supported funding, how it works, x402, security)
- `/signup` — Create an account (username entered here shows up on your virtual card)
- `/dashboard` — Dashboard with balance, virtual card, and connect-wallet CTA

Theme (light/dark) and the signed-up username persist in the browser via `localStorage` — there's no backend yet, this is UI-first as scoped.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Deploy to Vercel

**Option A — Vercel CLI**

```bash
npm install -g vercel
vercel
```

Follow the prompts (link or create a project, accept the defaults — Vercel auto-detects Next.js).

**Option B — Git + Vercel dashboard**

1. Push this folder to a new GitHub repo.
2. Go to https://vercel.com/new and import the repo.
3. Framework preset: Next.js (auto-detected). No environment variables are required for this UI-only build.
4. Deploy.

## Notes

- The ETH price ticker on the homepage calls the public CoinGecko API client-side. If that request is ever blocked (rate limit, offline), it falls back to a static reference price so the UI never breaks.
- Balances, transactions, and card numbers are placeholder/mock data — no real wallet, blockchain, or card infrastructure is connected yet.
- The codebase is structured (component boundaries, context providers) so Supabase auth and real wallet/card data can be wired in without a rewrite.
