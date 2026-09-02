import type { ReactNode } from "react";

export function Cover({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <figure
      className={`overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 ${className}`}
    >
      <img src={src} alt={alt} className="aspect-[16/10] w-full object-cover" />
    </figure>
  );
}

export function LogoTile({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={`flex aspect-[16/10] items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] px-8 ${className}`}
    >
      <img src={src} alt={alt} className="max-h-16 w-auto max-w-[85%] object-contain" />
    </div>
  );
}

export function IconTile({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex aspect-[16/10] items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-[#4ea3ff] ${className}`}
    >
      {children}
    </div>
  );
}
