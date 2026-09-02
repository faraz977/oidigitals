import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { IconChat, IconMail, IconPhone, IconPin } from "@/components/Icons";
import { SITE } from "@/lib/site";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project with OI Digitals. Email, phone, or WhatsApp from Karachi.",
};

const details = [
  {
    icon: IconMail,
    label: "Email",
    value: SITE.email,
    href: `mailto:${SITE.email}?subject=Project%20enquiry`,
    tone: "from-cyan-500/20 to-blue-600/10 text-cyan-300",
  },
  {
    icon: IconPhone,
    label: "Phone",
    value: SITE.phone,
    href: SITE.phoneHref,
    tone: "from-emerald-500/20 to-cyan-500/10 text-emerald-300",
  },
  {
    icon: IconChat,
    label: "WhatsApp",
    value: "Message the studio",
    href: SITE.whatsapp,
    tone: "from-violet-500/20 to-cyan-500/10 text-violet-300",
  },
];

export default function ContactPage() {
  return (
    <div
      className="relative min-h-screen overflow-hidden bg-[#09090b]"
      style={{
        backgroundImage:
          "radial-gradient(ellipse 58% 46% at 50% 0%, rgba(37, 99, 235, 0.16), transparent 82%)",
        backgroundAttachment: "fixed",
      }}
    >
      <section className="relative overflow-hidden border-b border-white/[0.08]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-35"
          style={{ backgroundImage: "url('/photos/contact.jpg')" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#09090b]/35 via-[#09090b]/25 to-[#09090b]/70"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.13]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
            maskImage: "linear-gradient(to bottom, black, transparent 82%)",
          }}
        />
        <div className="relative mx-auto flex max-w-5xl flex-col items-center px-5 pb-4 pt-10 text-center sm:px-6 sm:pb-6 sm:pt-16">
          <h1 className="max-w-4xl text-4xl font-medium tracking-tight text-white sm:text-6xl sm:leading-[1.08]">
            Tell us what to <span className="oi-shimmer-text">build.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-8 text-zinc-300 sm:text-[17px]">
        What the software should do, who uses it, and when you need a first
        working version. We reply with a scope and a date.
          </p>
          <div className="mt-8 h-px w-full max-w-3xl bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-5 pb-14 pt-2 sm:px-6 sm:pb-20 sm:pt-4">

      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        {details.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noreferrer" : undefined}
              className={`oi-card rounded-2xl border border-white/10 bg-gradient-to-br p-5 text-center ${item.tone}`}
            >
              <Icon className="mx-auto size-5" />
              <p className="mt-4 text-xs uppercase tracking-[0.2em] text-zinc-500">
                {item.label}
              </p>
              <p className="mt-2 text-sm text-white">{item.value}</p>
            </a>
          );
        })}
      </div>

      <div className="oi-card mt-3 rounded-2xl border border-white/10 bg-gradient-to-br from-amber-500/15 to-orange-500/5 p-5 text-center">
        <div className="flex flex-col items-center gap-2">
          <IconPin className="size-5 text-amber-300" />
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
              Studio
            </p>
            <p className="mt-2 text-sm text-white">{SITE.city}</p>
            <p className="mt-1 text-sm text-zinc-400">{SITE.remote}.</p>
          </div>
        </div>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">
            What happens next
          </p>
          <ol className="mt-5 list-none space-y-4 text-sm leading-relaxed text-zinc-400">
            <li className="oi-card rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <span className="text-cyan-300">1.</span> We read the brief the
              same working day when we can.
            </li>
            <li className="oi-card rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <span className="text-violet-300">2.</span> We reply with
              questions, a scope, and a first demo date.
            </li>
            <li className="oi-card rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <span className="text-amber-300">3.</span> Work starts in a
              private Git repository after you agree that scope in writing.
            </li>
            <li className="oi-card rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <span className="text-emerald-300">4.</span> You see a first
              working version early and review progress through regular demos.
            </li>
            <li className="oi-card rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <span className="text-cyan-300">5.</span> At handoff, you own
              the repository, accounts, and completed work.
            </li>
          </ol>
          <p className="mt-6 text-sm text-zinc-500">
            Prefer to review work first?{" "}
            <Link href="/work" className="text-cyan-300 hover:text-white">
              See the work
            </Link>
          </p>
        </div>
        <ContactForm />
      </div>
      </div>
    </div>
  );
}
