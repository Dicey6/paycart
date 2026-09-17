import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Providers } from "@/components/providers";

export const metadata: Metadata = {
  title: "VeyaPay: Smart digital payments on Arc",
  description:
    "VeyaPay turns USDC on Arc Blockchain into a smarter way to pay online.",
  icons: {
    icon: "/veyapay-logo.jpg",
    apple: "/veyapay-logo.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased bg-[#f7f9fc] dark:bg-[#05070a] text-slate-950 dark:text-slate-50">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
