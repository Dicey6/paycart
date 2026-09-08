import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Providers } from "@/components/providers";

export const metadata: Metadata = {
  title: "PayCart — Your stablecoins. Your card. Your payment layer.",
  description:
    "PayCart is a Robinhood ecosystem payment point. Fund it with stablecoins, especially USDG on Robinhood Chain, and get a private virtual card issued instantly.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
