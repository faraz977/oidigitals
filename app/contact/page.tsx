
import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { IconChat, IconMail, IconPhone, IconPin } from "@/components/Icons";
import { SITE } from "@/lib/site";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a conversation with OI Digitals about your next digital product, application, platform, or AI solution.",
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
          <p className="mb-5 text-[11px] uppercase tracking-[0.24em] text-cyan-300">
            Start a conversation
          </p>

          <h1 className="max-w-4xl text-4xl font-medium tracking-tight text-white sm:text-6xl sm:leading-[1.08]">
            Have an idea? Let&apos;s{" "}
            <span className="oi-shimmer-text">make it real.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-8 text-zinc-300 sm:text-[17px]">
            Tell us what you are trying to build, who it is for, and what
            success looks like. We&apos;ll review the requirements and come
            back with a practical direction for the project.
          </p>

          <div className="mt-8 h-px w-full max-w-3xl bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-5 pb-14 pt-2 sm:px-6 sm:pb-20 sm:pt-4">

        {/* Contact details */}
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {details.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                className={`oi-card rounded-2xl border border-white/10 bg-gradient-to-br p-5 text-center transition-transform duration-300 hover:-translate-y-1 ${item.tone}`}
              >
                <Icon className="mx-auto size-5" />

                <p className="mt-4 text-xs uppercase tracking-[0.2em] text-zinc-500">
                  {item.label}
                </p>

                <p className="mt-2 text-sm text-white">
                  {item.value}
                </p>
              </a>
            );
          })}
        </div>

        {/* Location */}
        <div className="oi-card mt-3 rounded-2xl border border-white/10 bg-gradient-to-br from-amber-500/15 to-orange-500/5 p-5 text-center">
          <div className="flex flex-col items-center gap-2">
            <IconPin className="size-5 text-amber-300" />

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                Based in
              </p>

              <p className="mt-2 text-sm text-white">
                {SITE.city}
              </p>

              <p className="mt-1 text-sm text-zinc-400">
                {SITE.remote}.
              </p>
            </div>
          </div>
        </div>

        {/* Main contact area */}
        <div className="mt-10 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">

          {/* Process */}
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">
              What to expect
            </p>

            <h2 className="mt-3 text-2xl font-medium tracking-tight text-white">
              A clear start to the project.
            </h2>

            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-zinc-500">
              The first conversation is about understanding the product,
              not committing you to a predefined solution.
            </p>

            <ol className="mt-6 list-none space-y-4 text-sm leading-relaxed text-zinc-400">
              <li className="oi-card rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-left">
                <span className="mr-2 text-cyan-300">01</span>
                Share the product idea, business requirement, or problem you
                want to solve.
              </li>

              <li className="oi-card rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-left">
                <span className="mr-2 text-violet-300">02</span>
                We review the information and clarify the important
                requirements, users, and technical considerations.
              </li>

              <li className="oi-card rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-left">
                <span className="mr-2 text-amber-300">03</span>
                You receive a practical scope and a proposed direction for
                the first working version.
              </li>

              <li className="oi-card rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-left">
                <span className="mr-2 text-emerald-300">04</span>
                Once the scope is agreed, development begins with the
                project structure and repository in place.
              </li>

              <li className="oi-card rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-left">
                <span className="mr-2 text-cyan-300">05</span>
                Progress is reviewed through working builds and regular
                feedback as the product takes shape.
              </li>
            </ol>

            <p className="mt-6 text-sm text-zinc-500">
              Want to understand our capabilities first?{" "}
              <Link
                href="/services"
                className="text-cyan-300 transition-colors hover:text-white"
              >
                Explore our services
              </Link>
              .
            </p>
          </div>

          <ContactForm />
        </div>

        {/* Bottom note */}
        <div className="mt-16 border-t border-white/[0.08] pt-8 text-center">
          <p className="text-sm leading-relaxed text-zinc-500">
            Prefer to see what we have already delivered?{" "}
            <Link
              href="/work"
              className="text-cyan-300 transition-colors hover:text-white"
            >
              Explore selected work
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
