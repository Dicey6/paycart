# VeyaPay

A futuristic USDC payment interface for Arc Blockchain with account access and public wallet-connection initiation, built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

## Pages

- `/`: VeyaPay landing page (Arc + USDC protocol, security, and product overview)
- `/signup`: Create an account with email verification (username entered here shows up on your virtual card)
- `/login`: Log in with a verified Supabase account
- `/dashboard`: Dashboard with balance, virtual card, and connect-wallet CTA

The blue/black light-dark theme persists in the browser. Authentication and profile data come from Supabase; the app does not use localStorage as an auth source.

## Run locally

```bash
pnpm install
pnpm build
```

Configure Supabase before using the auth flows:

1. Create a Supabase project.
2. Run [`supabase/schema.sql`](./supabase/schema.sql) in the Supabase SQL editor.
3. Run [`supabase/cards.sql`](./supabase/cards.sql) next: it adds the `cards` table and provisions a virtual card automatically on signup.
4. Set `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
5. Add the app's `/auth/callback` URL to Supabase Auth URL configuration.

The wallet button only requests a public address from an injected Arc-compatible EVM provider. Funding, transactions, verification, and treasury transfers remain out of scope. Card numbers are generated server-side with a valid Luhn check digit for display purposes; they are not connected to a card network and cannot be charged.
