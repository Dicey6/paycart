import Image from "next/image";
import Link from "next/link";

export function LogoMark({ size = 34 }: { size?: number }) {
  return (
    <div
      className="flex items-center justify-center rounded-md border border-white/15 bg-white shrink-0 overflow-hidden"
      style={{ width: size, height: size }}
    >
      <Image
        src="/veyapay-logo.jpg"
        alt="VeyaPay"
        width={size}
        height={size}
        className="w-full h-full object-cover object-left"
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
      <div className="relative h-11 w-[132px] overflow-hidden rounded-md border border-white/10 bg-white">
        <Image
          src="/veyapay-logo.jpg"
          alt="VeyaPay: smart digital payments"
          fill
          sizes="132px"
          className="object-contain"
          priority
        />
      </div>
    </Link>
  );
}
