import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-32">
      <p className="text-[11px] uppercase tracking-[0.28em] text-zinc-500">
        404
      </p>
      <h1 className="mt-4 text-4xl font-medium tracking-tight text-white">
        This page is not here.
      </h1>
      <p className="mt-5 text-[15px] leading-relaxed text-zinc-400">
        The link may be old, or the page was never published.
      </p>
      <div className="mt-10 flex flex-wrap gap-8 text-sm">
        <Link href="/" className="text-white hover:text-zinc-300">
          Home
        </Link>
        <Link href="/work" className="text-zinc-500 hover:text-white">
          Work
        </Link>
        <Link href="/contact" className="text-zinc-500 hover:text-white">
          Contact
        </Link>
      </div>
    </div>
  );
}
