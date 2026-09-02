import Link from "next/link";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-2.5 whitespace-nowrap"
      aria-label="OI Digitals"
    >
      <span
        className={
          compact
            ? "text-[2rem] font-semibold leading-none tracking-tight text-[#4ea3ff]"
            : "text-[2.55rem] font-semibold leading-none tracking-tight text-[#4ea3ff]"
        }
      >
        OI
      </span>
      <span
        className={
          compact
            ? "relative top-px text-[0.8rem] font-medium leading-none tracking-[0.3em] text-zinc-200"
            : "relative top-px text-[0.92rem] font-medium leading-none tracking-[0.3em] text-zinc-200"
        }
      >
        DIGITALS
      </span>
    </Link>
  );
}
