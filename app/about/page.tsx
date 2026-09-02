import type { Metadata } from "next";
import Link from "next/link";
import {
  IconBuild,
  IconChat,
  IconDesign,
  IconDesktop,
  IconGit,
  IconGlobe,
  IconHandoff,
  IconLedger,
  IconMobile,
  IconScope,
  IconShield,
  IconTruck,
  IconUsers,
  IconWeb,
} from "@/components/Icons";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "OI Digitals is a software house. We design and ship web, mobile, desktop, and AI software for teams worldwide.",
};

const points = [
  {
    icon: IconGlobe,
    title: "Worldwide delivery",
    body: "We design and ship for teams anywhere. One studio. One point of contact.",
    tone: "from-cyan-500/30 to-blue-600/10 text-cyan-300 border-cyan-400/20",
  },
  {
    icon: IconGit,
    title: "A repository from the first commit",
    body: "Every project is private. We work on branches, review changes, and keep a history you can read.",
    tone: "from-violet-500/30 to-cyan-500/10 text-violet-300 border-violet-400/20",
  },
  {
    icon: IconUsers,
    title: "You own the work",
    body: "At handoff you receive the repository and the accounts. We do not keep your customer data to reuse later.",
    tone: "from-emerald-500/30 to-cyan-500/10 text-emerald-300 border-emerald-400/20",
  },
];

const services = [
  {
    title: "AI",
    body: "Company assistants trained on a catalog, rules, and the workflow staff already use.",
    icon: IconChat,
    tone: "from-violet-500/25 to-cyan-500/10 text-violet-300",
  },
  {
    title: "Web",
    body: "Product sites, company sites, portals, and the systems that keep them current.",
    icon: IconWeb,
    tone: "from-cyan-500/25 to-blue-600/10 text-cyan-300",
  },
  {
    title: "Mobile",
    body: "iOS and Android products that people open in the field, every day.",
    icon: IconMobile,
    tone: "from-emerald-500/25 to-cyan-500/10 text-emerald-300",
  },
  {
    title: "Desktop",
    body: "Software for entries, ledgers, filters, and reports that leave as files the desk can keep.",
    icon: IconDesktop,
    tone: "from-amber-500/25 to-orange-500/10 text-amber-300",
  },
  {
    title: "Design",
    body: "Brand, pages, and product interface first. Then the build that matches what you approved.",
    icon: IconDesign,
    tone: "from-rose-500/25 to-violet-500/10 text-rose-300",
  },
];

const steps = [
  {
    icon: IconScope,
    title: "1. Brief",
    body: "What the software should do, who uses it, and when you need a first working version.",
    tone: "from-cyan-500/30 to-blue-600/10 text-cyan-300 border-cyan-400/20",
  },
  {
    icon: IconBuild,
    title: "2. First slice",
    body: "A private repository from day one. You get a demo you can click, not a slide.",
    tone: "from-violet-500/30 to-cyan-500/10 text-violet-300 border-violet-400/20",
  },
  {
    icon: IconGit,
    title: "3. Review",
    body: "Work lands on branches. Weekly demos come from the same repository that will ship.",
    tone: "from-amber-500/30 to-orange-500/10 text-amber-300 border-amber-400/20",
  },
  {
    icon: IconHandoff,
    title: "4. Handoff",
    body: "You receive the repository and the accounts. The work is yours.",
    tone: "from-emerald-500/30 to-cyan-500/10 text-emerald-300 border-emerald-400/20",
  },
];

const industries = [
  {
    title: "Logistics and field work",
    body: "Load boards, driver networks, and company sites. Phones in the yard. Browsers at the desk.",
    icon: IconTruck,
    tone: "from-cyan-500/30 to-blue-600/10 text-cyan-300 border-cyan-400/20",
  },
  {
    title: "Compliance and billing",
    body: "Onboarding, filings, and invoicing that has to be right the first time.",
    icon: IconShield,
    tone: "from-amber-500/30 to-orange-500/10 text-amber-300 border-amber-400/20",
  },
  {
    title: "Operations",
    body: "Purchase, sale, ledgers, and bank on the web and on the desktop.",
    icon: IconLedger,
    tone: "from-violet-500/30 to-cyan-500/10 text-violet-300 border-violet-400/20",
  },
  {
    title: "Sites and assistants",
    body: "Public sites and chatbots trained on a company catalog so visitors get an answer without waiting.",
    icon: IconChat,
    tone: "from-emerald-500/30 to-cyan-500/10 text-emerald-300 border-emerald-400/20",
  },
];

export default function AboutPage() {
  return (
    <div
      className="relative min-h-screen overflow-hidden bg-[#09090b]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(9, 9, 11, 0.92), rgba(9, 9, 11, 0.92)), linear-gradient(rgba(37, 99, 235, 0.18), rgba(9, 9, 11, 0.18)), url('/photos/desktop.jpg')",
        backgroundAttachment: "fixed",
        backgroundPosition: "center top",
        backgroundSize: "cover",
      }}
    >
      <section className="relative overflow-hidden border-b border-white/[0.08]">
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
        <div className="relative mx-auto flex max-w-5xl flex-col items-center px-5 pb-8 pt-10 text-center sm:px-6 sm:pb-10 sm:pt-16">
          <h1 className="max-w-5xl text-4xl font-medium tracking-tight text-white sm:text-6xl sm:leading-[1.08]">
            A software house for teams <span className="oi-shimmer-text">anywhere.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-8 text-zinc-300 sm:text-[17px]">
        OI Digitals designs and ships mobile apps, websites, platforms,
        desktop software, and company assistants. We have delivered that
        work worldwide.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-[16px] leading-relaxed text-zinc-500">
        One studio. One repository from the first commit. A first working
        version you can click. You own the work at handoff.
          </p>
          <div className="mt-8 h-px w-full max-w-3xl bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-5 pb-14 pt-4 sm:px-6 sm:pb-20 sm:pt-6">

      <div className="mt-14 grid gap-5 sm:grid-cols-3">
        {points.map((point) => {
          const Icon = point.icon;
          return (
            <article
              key={point.title}
              className={`oi-card rounded-2xl border bg-gradient-to-br p-6 ${point.tone}`}
            >
              <span className="flex size-10 items-center justify-center rounded-xl bg-white/10">
                <Icon className="size-5" />
              </span>
              <h2 className="mt-5 text-lg text-white">{point.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                {point.body}
              </p>
            </article>
          );
        })}
      </div>

      <section className="mt-20">
        <h2 className="text-center text-[11px] uppercase tracking-[0.22em] text-cyan-300">
          The studio
        </h2>
        <div className="mx-auto mt-5 max-w-2xl space-y-4 text-center text-[16px] leading-relaxed text-zinc-400">
          <p>
            OI Digitals is a software house. We take a brief, design the
            interface, and build the product in a private Git repository.
            The same people who scoped the work ship it.
          </p>
          <p>
            Delivery is worldwide. Remote developers work with the studio
            on one repository, so you have one point of contact and one
            history you can read.
          </p>
          <p>
            We start with a slice people can open. After the first users
            try that slice, we add what they actually need. We do not
            grow a backlog of slides.
          </p>
        </div>
      </section>

      <section className="mt-20">
        <h2 className="text-center text-[11px] uppercase tracking-[0.22em] text-violet-300">
          What we build
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-[16px] leading-relaxed text-zinc-400">
          Mobile, web, desktop, design, and AI. Most briefs mix more than
          one. We design the interface, then we build the product.
        </p>
        <ul className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-5">
          {services.map((item) => {
            const Icon = item.icon;
            return (
              <li
                key={item.title}
                className={`oi-card rounded-2xl border border-white/10 bg-gradient-to-br p-4 sm:p-5 ${item.tone}`}
              >
                <Icon className="size-5 sm:size-6" />
                <p className="mt-3 text-sm text-white">{item.title}</p>
                <p className="mt-1.5 text-[13px] leading-relaxed text-zinc-400 sm:text-sm">
                  {item.body}
                </p>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="mt-20">
        <h2 className="text-center text-[11px] uppercase tracking-[0.22em] text-amber-300">
          Who this is for
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-[16px] leading-relaxed text-zinc-400">
          Teams that need a product in the field, a site the market can
          trust, or an operations system the desk can live in.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {industries.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className={`oi-card rounded-2xl border bg-gradient-to-br p-6 ${item.tone}`}
              >
                <span className="flex size-10 items-center justify-center rounded-xl bg-white/10">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-4 text-lg text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                  {item.body}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mt-20">
        <h2 className="text-center text-[11px] uppercase tracking-[0.22em] text-cyan-300">
          How a project runs
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-[16px] leading-relaxed text-zinc-400">
          We read a brief the same working day when we can. Then we reply
          with questions, a scope, and a first demo date. Work starts after
          you agree that scope in writing.
        </p>
        <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <li
                key={step.title}
                className={`oi-card rounded-2xl border bg-gradient-to-br p-5 ${step.tone}`}
              >
                <span className="flex size-10 items-center justify-center rounded-xl bg-white/10">
                  <Icon className="size-5" />
                </span>
                <p className="mt-4 text-sm text-white">{step.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {step.body}
                </p>
              </li>
            );
          })}
        </ol>
      </section>

      <section className="mt-20">
        <h2 className="text-center text-[11px] uppercase tracking-[0.22em] text-emerald-300">
          Work we can show
        </h2>
        <div className="mx-auto mt-5 max-w-2xl space-y-4 text-center text-[16px] leading-relaxed text-zinc-400">
          <p>
            Some clients allow screens on this site. Those projects are on{" "}
            <Link href="/work" className="text-cyan-300 hover:text-white">
              Work
            </Link>
            . Other engagements stay off the public page.
          </p>
          <p>
            Named work includes ShipperDock, TrackIFTA, TruckerWire,
            TruckStation, BizBill.pk, FMCSAReady, Abdul Ghani Sons, GTS
            Dispatch, Family Birds, CutStudio, Meridian Assist, YZ
            Enterprises, Omer International, and Imaginers Technologies.
          </p>
          <p>
            Each name on Work opens the case study: what shipped, who it
            is for, and the screens we have permission to show. We do not
            publish another company&apos;s source, admin, or customer data.
          </p>
        </div>
      </section>

      <section className="mt-20">
        <h2 className="text-center text-[11px] uppercase tracking-[0.22em] text-violet-300">
          Ownership and privacy
        </h2>
        <div className="mx-auto mt-5 max-w-2xl space-y-4 text-center text-[16px] leading-relaxed text-zinc-400">
          <p>
            Software we build for a company belongs to that company. The
            repository and accounts move to you at handoff. We do not keep
            your customer data to reuse later.
          </p>
          <p>
            Enquiries sent through the contact form or to {SITE.email} stay
            private. We will not add your project to Work unless you ask
            in writing. The full policy is on{" "}
            <Link href="/privacy" className="text-cyan-300 hover:text-white">
              Privacy
            </Link>
            .
          </p>
        </div>
      </section>

      <div className="mt-16 rounded-2xl border border-white/10 bg-gradient-to-r from-cyan-500/10 via-violet-500/10 to-amber-400/10 px-6 py-8 sm:flex sm:items-center sm:justify-between">
        <div>
          <p className="text-white">Ready to start?</p>
          <p className="mt-2 text-sm text-zinc-400">
            Tell us what to build. We deliver worldwide.
          </p>
          <p className="mt-2 text-sm text-cyan-300">{SITE.email}</p>
        </div>
        <Link
          href="/contact"
          className="mt-5 inline-block rounded-full bg-gradient-to-r from-cyan-400 to-violet-400 px-5 py-2.5 text-sm font-medium text-zinc-950 hover:opacity-90 sm:mt-0"
        >
          Contact
        </Link>
      </div>
    </div>
    </div>
  );
}
