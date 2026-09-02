import { Logo } from "@/components/Logo";
import { SITE } from "@/lib/site";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent no-print">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 sm:grid-cols-2 sm:px-6 sm:py-12 lg:grid-cols-4 lg:gap-10">
        <div>
          <Logo compact />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-zinc-500">
            {SITE.tagline}
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
            Pages
          </p>
          <ul className="mt-4 space-y-2 text-sm text-zinc-400">
            <li>
              <Link href="/" className="oi-footer-link">
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" className="oi-footer-link">
                Services
              </Link>
            </li>
            <li>
              <Link href="/work" className="oi-footer-link">
                Work
              </Link>
            </li>
            <li>
              <Link href="/about" className="oi-footer-link">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="oi-footer-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
            Company
          </p>
          <ul className="mt-4 space-y-2 text-sm text-zinc-400">
            <li>
              <Link href="/privacy" className="oi-footer-link">
                Client privacy
              </Link>
            </li>
            <li>
              <a href="/oi-digitals-work.pdf" className="oi-footer-link">
                Work list (PDF)
              </a>
            </li>
            <li>
              <Link href="/about" className="oi-footer-link">
                About the studio
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
            Contact
          </p>
          <a
            href={`mailto:${SITE.email}`}
            className="oi-footer-link mt-4 block text-sm text-white"
          >
            {SITE.email}
          </a>
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="oi-footer-link mt-2 block text-sm text-zinc-400"
          >
            WhatsApp
          </a>
          <Link href="/contact" className="oi-footer-link mt-4 block text-sm text-zinc-500">
            Studio details
          </Link>
        </div>
      </div>
      <div className="border-t border-zinc-800">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-1 px-5 py-4 text-center text-xs text-zinc-600 sm:flex-row sm:gap-4 sm:px-6">
          <p>© {new Date().getFullYear()} OI Digitals. All rights reserved.</p>
          <p>{SITE.domain}</p>
        </div>
      </div>
    </footer>
  );
}
