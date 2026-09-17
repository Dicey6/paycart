import Image from "next/image";
import Link from "next/link";

export function LogoMark({ size = 34 }: { size?: number }) {
  return (
    <div
      className="flex shrink-0 items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-white p-1 shadow-sm dark:border-white/15"
      style={{ width: size, height: size }}
    >
      <Image
        src="/veyapay-logo.jpg"
        alt="VeyaPay"
        width={size}
        height={size}
        className="h-full w-full object-contain"
        priority
      />
    </div>
  );
}

export function LogoLockup({
  href = "/",
}: {
  href?: string;
}) {
  return (
    <Link href={href} className="flex items-center gap-2.5" aria-label="VeyaPay home">
      <LogoMark size={36} />
      <span className="text-base font-semibold tracking-tight text-slate-950 dark:text-white">VeyaPay</span>
    </Link>
  );
}
