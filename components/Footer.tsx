
import { Logo } from "@/components/Logo";
import { SITE } from "@/lib/site";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="no-print border-t border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:py-14">

        {/* Main footer */}
        <div className="grid gap-10 text-center sm:grid-cols-2 sm:text-left lg:grid-cols-[1.5fr_0.8fr_0.8fr_1fr] lg:gap-12">

          {/* Brand */}
          <div className="flex flex-col items-center sm:items-start">
            <Logo compact />

            <p className="mt-5 max-w-sm text-sm leading-7 text-zinc-400">
              OI Digitals designs and develops web applications, mobile
              products, desktop software, AI solutions, and digital
              experiences for businesses with practical requirements.
            </p>

            

            
          </div>

          {/* Pages */}
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
              Explore
            </p>

            <ul className="mt-5 space-y-3 text-sm text-zinc-400">
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

          {/* Company */}
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
              Company
            </p>

            <ul className="mt-5 space-y-3 text-sm text-zinc-400">
              <li>
                <Link href="/about" className="oi-footer-link">
                  About OI Digitals
                </Link>
              </li>

              <li>
                <Link href="/privacy" className="oi-footer-link">
                  Client privacy
                </Link>
              </li>

              <li>
                <a
                  href="/oi-digitals-work.pdf"
                  className="oi-footer-link"
                >
                  Work list (PDF)
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
              Get in touch
            </p>

           <div className="mt-5 flex flex-col items-center gap-3 text-sm sm:items-start">
  <a
    href={`mailto:${SITE.email}`}
    className="oi-footer-link text-white"
  >
    {SITE.email}
  </a>

  <a
    href={SITE.whatsapp}
    target="_blank"
    rel="noreferrer"
    className="oi-footer-link text-zinc-400"
  >
    WhatsApp
  </a>

  <Link
    href="/contact"
    className="oi-footer-link text-zinc-500"
  >
    Contact details →
  </Link>
</div>

            
          </div>
        </div>

        
          
        </div>
      

      {/* Copyright */}
      <div className="border-t border-white/[0.06]">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-2 px-5 py-5 text-center text-xs text-zinc-600 sm:flex-row sm:gap-4 sm:px-6">
          <p>
            © {new Date().getFullYear()} OI Digitals. All rights reserved.
          </p>

          <span className="hidden text-zinc-800 sm:inline">•</span>

          <p>{SITE.domain}</p>
        </div>
      </div>
    </footer>
  );
}