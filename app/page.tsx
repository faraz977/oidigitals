import Link from "next/link";
import { ChatShowcase } from "@/components/ChatShowcase";
import { HeroVisual } from "@/components/HeroVisual";
import { HomeGame } from "@/components/HomeGame";
import { QuoteCarousel } from "@/components/QuoteCarousel";
import { Reveal } from "@/components/Reveal";
import { SERVICES, TECH_STACK } from "@/lib/services";
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
import { workList, workSurface, type WorkItem } from "@/lib/work";

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

const principles = [
  {
    title: "Ship a slice, then grow it",
    body: "You see working software early. After people use that slice, we add what they actually need.",
    icon: IconBuild,
    tone: "from-cyan-500/30 to-violet-500/10 text-cyan-300 border-cyan-400/20",
  },
  {
    title: "You own the work",
    body: "The repository and accounts move to you at handoff. Software we build for a company belongs to that company.",
    icon: IconHandoff,
    tone: "from-violet-500/30 to-fuchsia-500/10 text-violet-300 border-violet-400/20",
  },
  {
    title: "One studio, worldwide",
    body: "One point of contact. One repository. Delivery for teams anywhere, not a chain of vendors.",
    icon: IconGlobe,
    tone: "from-emerald-500/30 to-cyan-500/10 text-emerald-300 border-emerald-400/20",
  },
];

const questions = [
  {
    q: "Who do you work with?",
    a: "Companies that need software in people's hands: products, sites, operations tools, and assistants. We deliver worldwide.",
  },
  {
    q: "Do we receive the source?",
    a: "Yes. The project is a private repository from the first commit. At handoff you receive the repository and the accounts.",
  },
  {
    q: "Can you show prior work?",
    a: "Some clients allow screens on this site. Those projects are on Work. Other engagements stay off the public page.",
  },
  {
    q: "How do we start?",
    a: `Send a brief on Contact or write ${SITE.email}. Tell us what to build, who will use it, and when you need a first version.`,
  },
];

function workCardTone(item: WorkItem) {
  if (item.slug === "family-birds") {
    return {
      card: "from-rose-500/25 to-emerald-500/10 border-rose-400/25 hover:border-rose-300/45",
      role: "text-rose-300",
    };
  }
  if (item.kind === "tool") {
    return {
      card: "from-amber-500/25 to-orange-500/10 border-amber-400/20 hover:border-amber-300/45",
      role: "text-amber-300",
    };
  }
  if (item.slug === "meridian-assist" || item.scope.includes("AI")) {
    return {
      card: "from-violet-500/25 to-cyan-500/10 border-violet-400/20 hover:border-violet-300/45",
      role: "text-violet-300",
    };
  }
  if (workSurface(item) === "app") {
    return {
      card: "from-emerald-500/25 to-cyan-500/10 border-emerald-400/20 hover:border-emerald-300/45",
      role: "text-emerald-300",
    };
  }
  return {
    card: "from-cyan-500/25 to-blue-600/10 border-cyan-400/20 hover:border-cyan-300/45",
    role: "text-cyan-300",
  };
}

export default function HomePage() {
  const projects = workList();

  return (
    <div
      className="relative overflow-hidden bg-[#09090b]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(9, 9, 11, 0.95), rgba(9, 9, 11, 0.92)), linear-gradient(rgba(37, 99, 235, 0.18), rgba(9, 9, 11, 0.18)), url('/photos/scope.jpg')",
        backgroundAttachment: "fixed",
        backgroundPosition: "center top",
        backgroundSize: "cover",
      }}
    >
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-24 top-0 size-[28rem] rounded-full bg-cyan-400/20 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 top-24 size-[22rem] rounded-full bg-violet-500/25 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-0 left-1/3 size-[18rem] rounded-full bg-amber-400/10 blur-3xl"
        />
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-12 sm:px-6 sm:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:pb-24">
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-cyan-300">
              Software house · Worldwide
            </p>
            <h1 className="mt-4 max-w-xl text-[2rem] font-medium leading-[1.15] tracking-tight text-white sm:text-[3.2rem] sm:leading-[1.1]">
              Software people{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-white to-violet-300 bg-clip-text text-transparent">
                actually open.
              </span>
            </h1>
            <p className="mt-5 max-w-lg text-[16px] leading-relaxed text-zinc-300 sm:text-[17px]">
              OI Digitals designs and ships mobile apps, websites, platforms,
              desktop software, and company assistants. We have delivered for
              teams worldwide.
            </p>
            <p className="mt-4 max-w-lg text-[16px] leading-relaxed text-zinc-400">
              A first working version you can click. A private repository from
              day one. You own the work at handoff.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm">
              <Link
                href="/work"
                className="oi-shine rounded-full bg-gradient-to-r from-cyan-400 to-violet-400 px-6 py-2.5 text-zinc-950 transition hover:opacity-90"
              >
                See the work
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-white/20 bg-white/5 px-6 py-2.5 text-white hover:bg-white/10"
              >
                Start a project
              </Link>
            </div>
            <ul className="mt-8 flex flex-col gap-2 text-sm text-zinc-400">
              <li className="flex items-center gap-2">
                <IconGlobe className="size-4 text-cyan-300" />
                Delivery worldwide
              </li>
              <li className="flex items-center gap-2">
                <IconUsers className="size-4 text-violet-300" />
                One studio. One repository.
              </li>
            </ul>
          </div>
          <HeroVisual />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-20">
        <h2 className="text-center text-[11px] uppercase tracking-[0.22em] text-zinc-500">
          What we build
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-[17px] leading-relaxed text-zinc-400">
          Mobile, web, desktop, design, and AI. Most briefs mix more than one.
          We design the interface, then we build the product.
        </p>
        <ul className="oi-stagger mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-5">
          {services.map((item) => {
            const Icon = item.icon;
            return (
              <li
                key={item.title}
                className={`oi-card group rounded-2xl border border-white/10 bg-gradient-to-br p-4 sm:p-5 ${item.tone}`}
              >
                <Icon className="size-5 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 sm:size-6" />
                <p className="mt-3 text-sm text-white">{item.title}</p>
                <p className="mt-1.5 text-[13px] leading-relaxed text-zinc-400 sm:text-sm">
                  {item.body}
                </p>
              </li>
            );
          })}
        </ul>
        <Link
          href="/services"
          className="oi-shine mx-auto mt-6 flex w-fit items-center gap-1.5 rounded-xl bg-gradient-to-r from-cyan-400 to-violet-400 px-4 py-2 text-sm font-medium text-zinc-950 transition hover:opacity-90"
        >
          Explore the full service catalog
          <span aria-hidden>→</span>
        </Link>
      </section>

      {/* Full service catalog teaser */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-20">
          <Reveal>
            <h2 className="text-center text-[11px] uppercase tracking-[0.22em] text-violet-300">
              The full catalog
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-[17px] leading-relaxed text-zinc-300">
              Twelve disciplines, one studio: apps, design, video, automation,
              and AI, each backed by a named tech stack.
            </p>
          </Reveal>
          <ul className="oi-stagger mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.slice(0, 6).map((service) => {
              const Icon = service.icon;
              return (
                <li
                  key={service.slug}
                  className={`oi-card group rounded-2xl border bg-gradient-to-br p-5 ${service.tone}`}
                >
                  <span className="flex size-10 items-center justify-center rounded-xl bg-white/10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-3 text-white">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    {service.body}
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-1.5">
                    {service.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-zinc-300"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </li>
              );
            })}
          </ul>
          <Link
            href="/services"
            className="oi-shine mx-auto mt-8 flex w-fit items-center gap-1.5 rounded-xl bg-gradient-to-r from-cyan-400 to-violet-400 px-5 py-2.5 text-sm text-zinc-950 transition hover:opacity-90"
          >
            View all services
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>

      {/* Tech stack teaser */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-20">
        <Reveal>
          <h2 className="text-center text-[11px] uppercase tracking-[0.22em] text-cyan-300">
            Tech stack
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-[17px] leading-relaxed text-zinc-400">
            Building systems where AI, software engineering, data, and
            real-world applications come together.
          </p>
        </Reveal>
        <ul className="oi-stagger mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TECH_STACK.map((category) => {
            const Icon = category.icon;
            return (
              <li
                key={category.title}
                className={`oi-card rounded-2xl border bg-gradient-to-br p-5 ${category.tone}`}
              >
                <span className="flex size-10 items-center justify-center rounded-xl bg-white/10">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-3 text-white">{category.title}</h3>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {category.tags.slice(0, 4).map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-white/10 bg-black/20 px-2 py-0.5 text-[11px] text-zinc-400"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
        <Link
          href="/services"
          className="oi-shine mx-auto mt-6 flex w-fit items-center gap-1.5 rounded-xl bg-gradient-to-r from-cyan-400 to-violet-400 px-4 py-2 text-sm text-zinc-950 transition hover:opacity-90"
        >
          See how each layer fits together
          <span aria-hidden>→</span>
        </Link>
      </section>

      <QuoteCarousel />

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-20">
        <h2 className="text-center text-[11px] uppercase tracking-[0.22em] text-cyan-300">
          How a project runs
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-[17px] leading-relaxed text-zinc-400">
          We start with a slice you can open, then we add what the first users
          actually need.
        </p>
        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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

      <section className="relative overflow-hidden border-y border-white/10">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-20 top-0 size-72 rounded-full bg-cyan-400/15 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 bottom-0 size-72 rounded-full bg-violet-500/15 blur-3xl"
        />
        <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-20">
          <h2 className="text-center text-[11px] uppercase tracking-[0.22em] text-cyan-300">
            Who this is for
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-[17px] leading-relaxed text-zinc-300">
            Teams that need a product in the field, a site the market can
            trust, or an operations system the desk can live in. We have
            delivered that work worldwide.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
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
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-20">
        <h2 className="text-center text-[11px] uppercase tracking-[0.22em] text-violet-300">
          How we work with you
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-[17px] leading-relaxed text-zinc-300">
          Clear ownership. A first version you can use. One studio from brief
          to handoff.
        </p>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {principles.map((item) => {
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

      <section className="border-y border-white/10 bg-gradient-to-b from-violet-950/30 to-transparent">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-20">
          <h2 className="text-[11px] uppercase tracking-[0.22em] text-zinc-500">
            Try the studio
          </h2>
          <p className="mt-4 max-w-2xl text-[17px] leading-relaxed text-zinc-400">
            Ask OI Chatbot a question, or play Dock Run in the browser.
          </p>
          <div className="mt-10 grid items-start gap-6 lg:grid-cols-2">
            <ChatShowcase />
            <HomeGame />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-20">
        <h2 className="text-center text-[11px] uppercase tracking-[0.22em] text-cyan-300">
          Work we can show
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-[17px] leading-relaxed text-zinc-300">
          Some of our projects clients allowed us to show. Each name opens the
          case study.
        </p>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((item) => {
            const tone = workCardTone(item);
            return (
              <li key={item.slug}>
                <Link
                  href={`/work/${item.slug}`}
                  className={`oi-card block rounded-2xl border bg-gradient-to-br px-4 py-4 ${tone.card}`}
                >
                  <p
                    className={`text-[11px] uppercase tracking-[0.18em] ${tone.role}`}
                  >
                    {item.role}
                  </p>
                  <p className="mt-1 text-sm text-white">{item.name}</p>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-zinc-400">
                    {item.oneLiner}
                  </p>
                </Link>
              </li>
            );
          })}
        </ul>
        <Link
          href="/work"
          className="oi-shine mx-auto mt-8 flex w-fit items-center gap-1.5 rounded-xl bg-gradient-to-r from-cyan-400 to-violet-400 px-5 py-2.5 text-sm text-zinc-950 transition hover:opacity-90"
        >
          Open the full work
          <span aria-hidden>→</span>
        </Link>
      </section>

      <section className="border-t border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-20">
          <h2 className="text-[11px] uppercase tracking-[0.22em] text-zinc-500">
            Questions
          </h2>
          <dl className="mt-10 grid gap-6 sm:grid-cols-2">
            {questions.map((item) => (
              <div
                key={item.q}
                className="oi-card rounded-2xl border border-white/10 p-6"
              >
                <dt className="text-sm text-white">{item.q}</dt>
                <dd className="mt-3 text-sm leading-relaxed text-zinc-400">
                  {item.a}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-t border-white/10 bg-gradient-to-r from-cyan-500/10 via-violet-500/10 to-amber-400/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-14 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:py-16">
          <div>
            <p className="text-xl text-white">Ready to start?</p>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-zinc-400">
              Tell us what to build. We deliver worldwide.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 text-sm">
            <a
              href={`mailto:${SITE.email}`}
              className="oi-shine rounded-full bg-white px-5 py-2.5 text-zinc-950 transition hover:bg-zinc-200"
            >
              {SITE.email}
            </a>
            <Link
              href="/contact"
              className="rounded-full border border-white/20 px-5 py-2.5 text-white hover:bg-white/10"
            >
              Contact
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
