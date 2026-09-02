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
    title: "AI Solutions",
    body: "Intelligent assistants and AI powered systems designed around your business knowledge, operational processes, and customer experiences.",
    icon: IconChat,
    tone: "from-violet-500/25 to-cyan-500/10 text-violet-300",
  },
  {
    title: "Web Platforms",
    body: "Enterprise websites, digital platforms, customer portals, and scalable web applications engineered for performance and long term growth.",
    icon: IconWeb,
    tone: "from-cyan-500/25 to-blue-600/10 text-cyan-300",
  },
  {
    title: "Mobile Applications",
    body: "High performance mobile applications for iOS and Android that connect customers, employees, and business operations.",
    icon: IconMobile,
    tone: "from-emerald-500/25 to-cyan-500/10 text-emerald-300",
  },
  {
    title: "Business Software",
    body: "Purpose built software for operations, data management, financial workflows, reporting, and complex business processes.",
    icon: IconDesktop,
    tone: "from-amber-500/25 to-orange-500/10 text-amber-300",
  },
  {
    title: "Product Design",
    body: "Strategic product design and digital experiences that align user needs, business objectives, and a consistent visual identity.",
    icon: IconDesign,
    tone: "from-rose-500/25 to-violet-500/10 text-rose-300",
  },
];

const steps = [
  {
    icon: IconScope,
    title: "1. Discovery",
    body: "We define your business objectives, user requirements, technical landscape, and product strategy before development begins.",
    tone: "from-cyan-500/30 to-blue-600/10 text-cyan-300 border-cyan-400/20",
  },
  {
    icon: IconBuild,
    title: "2. Product Development",
    body: "Our engineering team establishes the architecture and develops a functional product foundation within a secure private repository.",
    tone: "from-violet-500/30 to-cyan-500/10 text-violet-300 border-violet-400/20",
  },
  {
    icon: IconGit,
    title: "3. Engineering & Validation",
    body: "Continuous development, technical reviews, testing, and stakeholder feedback keep the product aligned with business and technical requirements.",
    tone: "from-amber-500/30 to-orange-500/10 text-amber-300 border-amber-400/20",
  },
  {
    icon: IconHandoff,
    title: "4. Deployment & Handoff",
    body: "We deliver the complete source code, project infrastructure, documentation, and associated accounts with full ownership transferred to your organization.",
    tone: "from-emerald-500/30 to-cyan-500/10 text-emerald-300 border-emerald-400/20",
  },
];

const industries = [
  {
    title: "Logistics and Transportation",
    body: "Technology platforms for logistics operations, fleet management, load coordination, driver networks, and field teams.",
    icon: IconTruck,
    tone: "from-cyan-500/30 to-blue-600/10 text-cyan-300 border-cyan-400/20",
  },
  {
    title: "Compliance and Financial Operations",
    body: "Structured digital systems for onboarding, documentation, compliance workflows, invoicing, and financial operations.",
    icon: IconShield,
    tone: "from-amber-500/30 to-orange-500/10 text-amber-300 border-amber-400/20",
  },
  {
    title: "Business Operations",
    body: "Integrated software for procurement, sales, accounting, reporting, reconciliation, and operational management.",
    icon: IconLedger,
    tone: "from-violet-500/30 to-cyan-500/10 text-violet-300 border-violet-400/20",
  },
  {
    title: "Digital Products and AI",
    body: "Customer facing digital products and intelligent AI systems that improve engagement, access to information, and operational efficiency.",
    icon: IconChat,
    tone: "from-emerald-500/30 to-cyan-500/10 text-emerald-300 border-emerald-400/20",
  },
];

const principles = [
  {
    title: "Engineering with purpose",
    body: "We align technology decisions with business objectives, focusing on solutions that create measurable operational and commercial value.",
    icon: IconBuild,
    tone: "from-cyan-500/30 to-violet-500/10 text-cyan-300 border-cyan-400/20",
  },
  {
    title: "Complete ownership",
    body: "Your organization retains ownership of the source code, repository, infrastructure, and project accounts delivered as part of the engagement.",
    icon: IconHandoff,
    tone: "from-violet-500/30 to-fuchsia-500/10 text-violet-300 border-violet-400/20",
  },
  {
    title: "Global delivery",
    body: "A dedicated technology team providing consistent communication, engineering execution, and delivery for organizations worldwide.",
    icon: IconGlobe,
    tone: "from-emerald-500/30 to-cyan-500/10 text-emerald-300 border-emerald-400/20",
  },
];

const questions = [
  {
    q: "What organizations do you work with?",
    a: "We partner with startups, established businesses, and growing organizations that require digital products, enterprise applications, operational platforms, websites, mobile applications, and AI solutions.",
  },
  {
    q: "Who owns the source code?",
    a: "Your organization receives the complete source code and project repository. Related project accounts and infrastructure are also transferred as part of the final handoff.",
  },
  {
    q: "Can we review your previous work?",
    a: "Selected projects are available through our Work section. Some engagements remain confidential due to client requirements and contractual obligations.",
  },
  {
    q: "How can we initiate an engagement?",
    a: `Contact our team through the Contact page or reach us directly at ${SITE.email}. Share your objectives, project requirements, target users, and preferred timeline so we can understand how to support your initiative.`,
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
              Digital Engineering · Global Delivery
            </p>

            <h1 className="mt-4 max-w-xl text-[2rem] font-medium leading-[1.15] tracking-tight text-white sm:text-[3.2rem] sm:leading-[1.1]">
              Technology that{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-white to-violet-300 bg-clip-text text-transparent">
                moves business forward.
              </span>
            </h1>

            <p className="mt-5 max-w-lg text-[16px] leading-relaxed text-zinc-300 sm:text-[17px]">
              OI Digitals delivers digital products, enterprise applications,
              mobile experiences, intelligent AI solutions, and modern web
              platforms designed to solve complex business challenges.
            </p>

            <p className="mt-4 max-w-lg text-[16px] leading-relaxed text-zinc-400">
              From product strategy and experience design to engineering,
              deployment, and ongoing evolution, we bring the capabilities
              required to turn ambitious ideas into dependable digital
              solutions.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 text-sm">
              <Link
                href="/work"
                className="oi-shine rounded-full bg-gradient-to-r from-cyan-400 to-violet-400 px-6 py-2.5 text-zinc-950 transition hover:opacity-90"
              >
                Explore our work
              </Link>

              <Link
                href="/contact"
                className="rounded-full border border-white/20 bg-white/5 px-6 py-2.5 text-white hover:bg-white/10"
              >
                Discuss your project
              </Link>
            </div>

            <ul className="mt-8 flex flex-col gap-2 text-sm text-zinc-400">
              <li className="flex items-center gap-2">
                <IconGlobe className="size-4 text-cyan-300" />
                Global technology delivery
              </li>

              <li className="flex items-center gap-2">
                <IconUsers className="size-4 text-violet-300" />
                Dedicated engineering partnership
              </li>
            </ul>
          </div>

          <HeroVisual />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-20">
        <h2 className="text-center text-[11px] uppercase tracking-[0.22em] text-zinc-500">
          Digital capabilities
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-center text-[17px] leading-relaxed text-zinc-400">
          A multidisciplinary technology practice combining product strategy,
          design, software engineering, cloud technologies, data, automation,
          and artificial intelligence.
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
          Explore our capabilities
          <span aria-hidden>→</span>
        </Link>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-20">
          <Reveal>
            <h2 className="text-center text-[11px] uppercase tracking-[0.22em] text-violet-300">
              Technology services
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-center text-[17px] leading-relaxed text-zinc-300">
              Integrated capabilities for organizations building new digital
              products, modernizing existing systems, and creating more
              intelligent operations.
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
            View our full capabilities
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-20">
        <Reveal>
          <h2 className="text-center text-[11px] uppercase tracking-[0.22em] text-cyan-300">
            Engineering technology
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-center text-[17px] leading-relaxed text-zinc-400">
            Modern technologies selected for performance, scalability,
            maintainability, security, and the specific requirements of every
            solution we deliver.
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
          Explore our technology
          <span aria-hidden>→</span>
        </Link>
      </section>

      <QuoteCarousel />

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-20">
        <h2 className="text-center text-[11px] uppercase tracking-[0.22em] text-cyan-300">
          Our delivery approach
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-center text-[17px] leading-relaxed text-zinc-400">
          A structured delivery framework designed to maintain strategic
          alignment, engineering quality, transparency, and measurable
          progress throughout the engagement.
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
            Industry expertise
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-center text-[17px] leading-relaxed text-zinc-300">
            Technology solutions designed around the operational realities,
            customer expectations, and growth objectives of modern businesses.
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
          Built for long term partnership
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-center text-[17px] leading-relaxed text-zinc-300">
          We combine strategic thinking, product design, engineering
          excellence, and transparent delivery to create technology that
          continues to deliver value beyond launch.
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
            Experience our technology
          </h2>

          <p className="mt-4 max-w-2xl text-[17px] leading-relaxed text-zinc-400">
            Explore interactive examples that demonstrate how we approach
            intelligent interfaces and digital product experiences.
          </p>

          <div className="mt-10 grid items-start gap-6 lg:grid-cols-2">
            <ChatShowcase />
            <HomeGame />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-20">
        <h2 className="text-center text-[11px] uppercase tracking-[0.22em] text-cyan-300">
          Selected work
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-center text-[17px] leading-relaxed text-zinc-300">
          A selection of digital products, platforms, and technology
          solutions delivered for our clients.
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
          View our portfolio
          <span aria-hidden>→</span>
        </Link>
      </section>

      <section className="border-t border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-20">
          <h2 className="text-[11px] uppercase tracking-[0.22em] text-zinc-500">
            Frequently asked questions
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
            <p className="text-xl text-white">
              Let’s build what’s next.
            </p>

            <p className="mt-2 max-w-md text-sm leading-relaxed text-zinc-400">
              Share your business objectives and technology requirements with
              our team. We will help define the right path forward.
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
              Contact our team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

// import Link from "next/link";
// import { ChatShowcase } from "@/components/ChatShowcase";
// import { HeroVisual } from "@/components/HeroVisual";
// import { HomeGame } from "@/components/HomeGame";
// import { QuoteCarousel } from "@/components/QuoteCarousel";
// import { Reveal } from "@/components/Reveal";
// import { SERVICES, TECH_STACK } from "@/lib/services";
// import {
//   IconBuild,
//   IconChat,
//   IconDesign,
//   IconDesktop,
//   IconGit,
//   IconGlobe,
//   IconHandoff,
//   IconLedger,
//   IconMobile,
//   IconScope,
//   IconShield,
//   IconTruck,
//   IconUsers,
//   IconWeb,
// } from "@/components/Icons";
// import { SITE } from "@/lib/site";
// import { workList, workSurface, type WorkItem } from "@/lib/work";

// const services = [
//   {
//     title: "AI Solutions",
//     body: "Intelligent assistants and AI powered systems designed around your business knowledge, operational processes, and customer experiences.",
//     icon: IconChat,
//     tone: "from-violet-500/20 to-cyan-500/[0.04] text-violet-300",
//   },
//   {
//     title: "Web Platforms",
//     body: "Enterprise websites, digital platforms, customer portals, and scalable web applications engineered for performance and long term growth.",
//     icon: IconWeb,
//     tone: "from-cyan-500/20 to-blue-600/[0.04] text-cyan-300",
//   },
//   {
//     title: "Mobile Applications",
//     body: "High performance mobile applications for iOS and Android that connect customers, employees, and business operations.",
//     icon: IconMobile,
//     tone: "from-emerald-500/20 to-cyan-500/[0.04] text-emerald-300",
//   },
//   {
//     title: "Business Software",
//     body: "Purpose built software for operations, data management, financial workflows, reporting, and complex business processes.",
//     icon: IconDesktop,
//     tone: "from-amber-500/20 to-orange-500/[0.04] text-amber-300",
//   },
//   {
//     title: "Product Design",
//     body: "Strategic product design and digital experiences that align user needs, business objectives, and a consistent visual identity.",
//     icon: IconDesign,
//     tone: "from-rose-500/20 to-violet-500/[0.04] text-rose-300",
//   },
// ];

// const steps = [
//   {
//     icon: IconScope,
//     title: "1. Discovery",
//     body: "We define your business objectives, user requirements, technical landscape, and product strategy before development begins.",
//     tone: "from-cyan-500/20 to-blue-600/[0.04] text-cyan-300",
//   },
//   {
//     icon: IconBuild,
//     title: "2. Product Development",
//     body: "Our engineering team establishes the architecture and develops a functional product foundation within a secure private repository.",
//     tone: "from-violet-500/20 to-cyan-500/[0.04] text-violet-300",
//   },
//   {
//     icon: IconGit,
//     title: "3. Engineering & Validation",
//     body: "Continuous development, technical reviews, testing, and stakeholder feedback keep the product aligned with business and technical requirements.",
//     tone: "from-amber-500/20 to-orange-500/[0.04] text-amber-300",
//   },
//   {
//     icon: IconHandoff,
//     title: "4. Deployment & Handoff",
//     body: "We deliver the complete source code, project infrastructure, documentation, and associated accounts with full ownership transferred to your organization.",
//     tone: "from-emerald-500/20 to-cyan-500/[0.04] text-emerald-300",
//   },
// ];

// const industries = [
//   {
//     title: "Logistics and Transportation",
//     body: "Technology platforms for logistics operations, fleet management, load coordination, driver networks, and field teams.",
//     icon: IconTruck,
//     tone: "from-cyan-500/20 to-blue-600/[0.04] text-cyan-300",
//   },
//   {
//     title: "Compliance and Financial Operations",
//     body: "Structured digital systems for onboarding, documentation, compliance workflows, invoicing, and financial operations.",
//     icon: IconShield,
//     tone: "from-amber-500/20 to-orange-500/[0.04] text-amber-300",
//   },
//   {
//     title: "Business Operations",
//     body: "Integrated software for procurement, sales, accounting, reporting, reconciliation, and operational management.",
//     icon: IconLedger,
//     tone: "from-violet-500/20 to-cyan-500/[0.04] text-violet-300",
//   },
//   {
//     title: "Digital Products and AI",
//     body: "Customer facing digital products and intelligent AI systems that improve engagement, access to information, and operational efficiency.",
//     icon: IconChat,
//     tone: "from-emerald-500/20 to-cyan-500/[0.04] text-emerald-300",
//   },
// ];

// const principles = [
//   {
//     title: "Engineering with purpose",
//     body: "We align technology decisions with business objectives, focusing on solutions that create measurable operational and commercial value.",
//     icon: IconBuild,
//     tone: "from-cyan-500/20 to-violet-500/[0.04] text-cyan-300",
//   },
//   {
//     title: "Complete ownership",
//     body: "Your organization retains ownership of the source code, repository, infrastructure, and project accounts delivered as part of the engagement.",
//     icon: IconHandoff,
//     tone: "from-violet-500/20 to-fuchsia-500/[0.04] text-violet-300",
//   },
//   {
//     title: "Global delivery",
//     body: "A dedicated technology team providing consistent communication, engineering execution, and delivery for organizations worldwide.",
//     icon: IconGlobe,
//     tone: "from-emerald-500/20 to-cyan-500/[0.04] text-emerald-300",
//   },
// ];

// const questions = [
//   {
//     q: "What organizations do you work with?",
//     a: "We partner with startups, established businesses, and growing organizations that require digital products, enterprise applications, operational platforms, websites, mobile applications, and AI solutions.",
//   },
//   {
//     q: "Who owns the source code?",
//     a: "Your organization receives the complete source code and project repository. Related project accounts and infrastructure are also transferred as part of the final handoff.",
//   },
//   {
//     q: "Can we review your previous work?",
//     a: "Selected projects are available through our Work section. Some engagements remain confidential due to client requirements and contractual obligations.",
//   },
//   {
//     q: "How can we initiate an engagement?",
//     a: `Contact our team through the Contact page or reach us directly at ${SITE.email}. Share your objectives, project requirements, target users, and preferred timeline so we can understand how to support your initiative.`,
//   },
// ];

// function workCardTone(item: WorkItem) {
//   if (item.slug === "family-birds") {
//     return {
//       card: "from-rose-500/20 to-emerald-500/[0.04] border-rose-400/20 hover:border-rose-300/45",
//       role: "text-rose-300",
//     };
//   }

//   if (item.kind === "tool") {
//     return {
//       card: "from-amber-500/20 to-orange-500/[0.04] border-amber-400/20 hover:border-amber-300/45",
//       role: "text-amber-300",
//     };
//   }

//   if (item.slug === "meridian-assist" || item.scope.includes("AI")) {
//     return {
//       card: "from-violet-500/20 to-cyan-500/[0.04] border-violet-400/20 hover:border-violet-300/45",
//       role: "text-violet-300",
//     };
//   }

//   if (workSurface(item) === "app") {
//     return {
//       card: "from-emerald-500/20 to-cyan-500/[0.04] border-emerald-400/20 hover:border-emerald-300/45",
//       role: "text-emerald-300",
//     };
//   }

//   return {
//     card: "from-cyan-500/20 to-blue-600/[0.04] border-cyan-400/20 hover:border-cyan-300/45",
//     role: "text-cyan-300",
//   };
// }

// function SectionHeading({
//   eyebrow,
//   title,
//   description,
//   accent = "cyan",
// }: {
//   eyebrow: string;
//   title: React.ReactNode;
//   description?: string;
//   accent?: "cyan" | "violet" | "zinc";
// }) {
//   const accentClass =
//     accent === "violet"
//       ? "text-violet-300"
//       : accent === "zinc"
//         ? "text-zinc-400"
//         : "text-cyan-300";

//   return (
//     <div className="mx-auto max-w-3xl text-center">
//       <div
//         className={`inline-flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.3em] ${accentClass}`}
//       >
//         <span className="h-px w-8 bg-current opacity-60" />
//         {eyebrow}
//         <span className="h-px w-8 bg-current opacity-60" />
//       </div>

//       <h2 className="mt-5 text-3xl font-medium leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.7rem]">
//         {title}
//       </h2>

//       {description && (
//         <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-zinc-300 sm:text-base">
//           {description}
//         </p>
//       )}
//     </div>
//   );
// }

// export default function HomePage() {
//   const projects = workList();

//   return (
//     <div
//       className="relative overflow-hidden bg-[#09090b]"
//       style={{
//         backgroundImage:
//           "linear-gradient(rgba(9, 9, 11, 0.95), rgba(9, 9, 11, 0.92)), linear-gradient(rgba(37, 99, 235, 0.18), rgba(9, 9, 11, 0.18)), url('/photos/scope.jpg')",
//         backgroundAttachment: "fixed",
//         backgroundPosition: "center top",
//         backgroundSize: "cover",
//       }}
//     >
//       {/* =========================================================
//           HERO
//       ========================================================== */}

//       <section className="relative overflow-hidden">
//         <div
//           aria-hidden
//           className="pointer-events-none absolute -left-24 top-0 size-[28rem] rounded-full bg-cyan-400/20 blur-3xl"
//         />

//         <div
//           aria-hidden
//           className="pointer-events-none absolute -right-16 top-24 size-[22rem] rounded-full bg-violet-500/25 blur-3xl"
//         />

//         <div
//           aria-hidden
//           className="pointer-events-none absolute bottom-0 left-1/3 size-[18rem] rounded-full bg-amber-400/10 blur-3xl"
//         />

//         <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-12 sm:px-6 sm:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:pb-24">
//           <div>
//             <p className="text-[11px] uppercase tracking-[0.28em] text-cyan-300">
//               Digital Engineering · Global Delivery
//             </p>

//             <h1 className="mt-4 max-w-xl text-[2rem] font-medium leading-[1.15] tracking-tight text-white sm:text-[3.2rem] sm:leading-[1.1]">
//               Technology that{" "}
//               <span className="bg-gradient-to-r from-cyan-300 via-white to-violet-300 bg-clip-text text-transparent">
//                 moves business forward.
//               </span>
//             </h1>

//             <p className="mt-5 max-w-lg text-[16px] leading-relaxed text-zinc-300 sm:text-[17px]">
//               OI Digitals delivers digital products, enterprise applications,
//               mobile experiences, intelligent AI solutions, and modern web
//               platforms designed to solve complex business challenges.
//             </p>

//             <p className="mt-4 max-w-lg text-[16px] leading-relaxed text-zinc-400">
//               From product strategy and experience design to engineering,
//               deployment, and ongoing evolution, we bring the capabilities
//               required to turn ambitious ideas into dependable digital
//               solutions.
//             </p>

//             <div className="mt-8 flex flex-wrap gap-3 text-sm">
//               <Link
//                 href="/work"
//                 className="oi-shine rounded-md bg-gradient-to-r from-cyan-400 to-violet-400 px-6 py-3 font-medium text-zinc-950 transition duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-400/10"
//               >
//                 Explore our work
//               </Link>

//               <Link
//                 href="/contact"
//                 className="rounded-md border border-white/20 bg-white/5 px-6 py-3 text-white transition duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10"
//               >
//                 Discuss your project
//               </Link>
//             </div>

//             <ul className="mt-8 flex flex-col gap-2 text-sm text-zinc-400">
//               <li className="flex items-center gap-2">
//                 <IconGlobe className="size-4 text-cyan-300" />
//                 Global technology delivery
//               </li>

//               <li className="flex items-center gap-2">
//                 <IconUsers className="size-4 text-violet-300" />
//                 Dedicated engineering partnership
//               </li>
//             </ul>
//           </div>

//           <HeroVisual />
//         </div>
//       </section>

//       {/* =========================================================
//           CAPABILITIES
//       ========================================================== */}

//       <section className="relative border-y border-white/[0.07] bg-[#09090b]/85">
//         <div
//           aria-hidden
//           className="pointer-events-none absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] [background-size:48px_48px]"
//         />

//         <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-6 sm:py-24 lg:py-28">
//           <Reveal>
//             <SectionHeading
//               eyebrow="Digital capabilities"
//               title={
//                 <>
//                   One technology partner.
//                   <span className="block text-zinc-400">
//                     Multiple ways to build.
//                   </span>
//                 </>
//               }
//               description="A multidisciplinary technology practice combining product strategy, design, software engineering, cloud technologies, data, automation, and artificial intelligence."
//             />
//           </Reveal>

//           <div className="mx-auto mt-14 max-w-5xl">
//             <div className="grid overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] sm:grid-cols-2 lg:grid-cols-5">
//               {services.map((item, index) => {
//                 const Icon = item.icon;

//                 return (
//                   <article
//                     key={item.title}
//                     className={`group relative min-h-[245px] overflow-hidden border-b border-white/10 bg-gradient-to-br p-6 transition duration-500 hover:bg-white/[0.045] sm:border-r last:border-r-0 sm:nth-[2n]:border-r-0 lg:border-b-0 lg:border-r lg:last:border-r-0 ${item.tone}`}
//                   >
//                     <div className="absolute inset-0 bg-[#09090b]/30 transition-opacity duration-500 group-hover:bg-transparent" />

//                     <div className="relative flex h-full flex-col">
//                       <div className="flex items-center justify-between">
//                         <span className="text-[10px] tracking-[0.2em] text-white/30">
//                           0{index + 1}
//                         </span>

//                         <span className="flex size-9 items-center justify-center rounded-xl border border-white/10 bg-black/20">
//                           <Icon className="size-4" />
//                         </span>
//                       </div>

//                       <div className="mt-auto">
//                         <h3 className="text-[15px] font-medium text-white">
//                           {item.title}
//                         </h3>

//                         <p className="mt-3 text-[12px] leading-6 text-zinc-300">
//                           {item.body}
//                         </p>
//                       </div>
//                     </div>
//                   </article>
//                 );
//               })}
//             </div>
//           </div>

//           <div className="mt-8 text-center">
//             <Link
//               href="/services"
//               className="group inline-flex items-center gap-2 text-sm font-medium text-zinc-300 transition hover:text-white"
//             >
//               Explore our capabilities
//               <span className="transition-transform group-hover:translate-x-1">
//                 →
//               </span>
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           SERVICES
//       ========================================================== */}

//       <section className="relative">
//         <div className="mx-auto max-w-6xl px-5 py-20 sm:px-6 sm:py-24 lg:py-28">
//           <Reveal>
//             <SectionHeading
//               eyebrow="Technology services"
//               accent="violet"
//               title={
//                 <>
//                   From first idea to
//                   <span className="text-zinc-400"> production reality.</span>
//                 </>
//               }
//               description="Integrated capabilities for organizations building new digital products, modernizing existing systems, and creating more intelligent operations."
//             />
//           </Reveal>

//           <div className="mt-14 grid gap-4 md:grid-cols-2">
//             {SERVICES.slice(0, 6).map((service, index) => {
//               const Icon = service.icon;

//               return (
//                 <article
//                   key={service.slug}
//                   className={`group relative overflow-hidden rounded-3xl border bg-gradient-to-br p-7 transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:shadow-2xl hover:shadow-black/20 ${service.tone}`}
//                 >
//                   <div className="absolute inset-0 bg-[#09090b]/45 transition-colors duration-500 group-hover:bg-[#09090b]/25" />

//                   <div className="absolute -right-20 -top-20 size-56 rounded-full bg-white/[0.04] blur-3xl transition-transform duration-700 group-hover:scale-125" />

//                   <div className="relative flex min-h-[240px] flex-col">
//                     <div className="flex items-start justify-between">
//                       <div className="flex size-12 items-center justify-center rounded-2xl border border-white/10 bg-black/30">
//                         <Icon className="size-5" />
//                       </div>

//                       <span className="text-5xl font-light text-white/[0.045]">
//                         0{index + 1}
//                       </span>
//                     </div>

//                     <div className="mt-auto">
//                       <h3 className="text-xl font-medium text-white">
//                         {service.title}
//                       </h3>

//                       <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-300">
//                         {service.body}
//                       </p>

//                       <div className="mt-5 flex flex-wrap gap-1.5">
//                         {service.tags.map((tag) => (
//                           <span
//                             key={tag}
//                             className="rounded-md border border-white/10 bg-black/25 px-2.5 py-1 text-[10px] text-zinc-300"
//                           >
//                             {tag}
//                           </span>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </article>
//               );
//             })}
//           </div>

//           <div className="mt-9 text-center">
//             <Link
//               href="/services"
//               className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-cyan-400 to-violet-400 px-6 py-3 text-sm font-medium text-zinc-950 transition duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-400/10"
//             >
//               View our full capabilities
//               <span>→</span>
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           TECHNOLOGY
//       ========================================================== */}

//       <section className="relative border-y border-white/[0.07] bg-[#09090b]/85">
//         <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-6 sm:py-24 lg:py-28">
//           <Reveal>
//             <SectionHeading
//               eyebrow="Engineering technology"
//               title={
//                 <>
//                   Modern tools.
//                   <span className="block text-zinc-400">
//                     Thoughtful engineering.
//                   </span>
//                 </>
//               }
//               description="Modern technologies selected for performance, scalability, maintainability, security, and the specific requirements of every solution we deliver."
//             />
//           </Reveal>

//           <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
//             {TECH_STACK.map((category, index) => {
//               const Icon = category.icon;

//               return (
//                 <article
//                   key={category.title}
//                   className={`group relative overflow-hidden rounded-2xl border bg-gradient-to-br p-6 transition-all duration-500 hover:-translate-y-1 hover:border-white/20 ${category.tone}`}
//                 >
//                   <div className="absolute inset-0 bg-[#09090b]/45 transition-colors duration-500 group-hover:bg-[#09090b]/25" />

//                   <div className="relative">
//                     <div className="flex items-center justify-between">
//                       <span className="flex size-11 items-center justify-center rounded-xl border border-white/10 bg-black/25">
//                         <Icon className="size-5" />
//                       </span>

//                       <span className="text-[10px] tracking-[0.2em] text-white/30">
//                         0{index + 1}
//                       </span>
//                     </div>

//                     <h3 className="mt-6 text-base font-medium text-white">
//                       {category.title}
//                     </h3>

//                     <ul className="mt-5 flex flex-wrap gap-2">
//                       {category.tags.slice(0, 4).map((tag) => (
//                         <li
//                           key={tag}
//                           className="rounded-md border border-white/10 bg-black/25 px-2.5 py-1 text-[10px] text-zinc-300"
//                         >
//                           {tag}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </article>
//               );
//             })}
//           </div>

//           <div className="mt-8 text-center">
//             <Link
//               href="/services"
//               className="group inline-flex items-center gap-2 text-sm font-medium text-zinc-300 transition hover:text-white"
//             >
//               Explore our technology
//               <span className="transition-transform group-hover:translate-x-1">
//                 →
//               </span>
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           QUOTE
//       ========================================================== */}

//       <QuoteCarousel />

//       {/* =========================================================
//           DELIVERY APPROACH
//       ========================================================== */}

//       <section className="relative">
//         <div className="mx-auto max-w-6xl px-5 py-20 sm:px-6 sm:py-24 lg:py-28">
//           <Reveal>
//             <SectionHeading
//               eyebrow="Our delivery approach"
//               title={
//                 <>
//                   Structured delivery.
//                   <span className="block text-zinc-400">
//                     Visible progress.
//                   </span>
//                 </>
//               }
//               description="A structured delivery framework designed to maintain strategic alignment, engineering quality, transparency, and measurable progress throughout the engagement."
//             />
//           </Reveal>

//           <div className="relative mx-auto mt-14 max-w-5xl">
//             <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-cyan-400/30 via-violet-400/25 to-emerald-400/30 lg:block" />

//             <div className="space-y-5">
//               {steps.map((step, index) => {
//                 const Icon = step.icon;

//                 return (
//                   <div
//                     key={step.title}
//                     className={`group relative overflow-hidden rounded-3xl border bg-gradient-to-br p-6 transition-all duration-500 hover:-translate-y-1 hover:border-white/20 sm:p-8 lg:w-[calc(50%-2rem)] ${
//                       index % 2 === 0
//                         ? "lg:mr-auto"
//                         : "lg:ml-auto"
//                     } ${step.tone}`}
//                   >
//                     <div className="absolute inset-0 bg-[#09090b]/45 transition-colors duration-500 group-hover:bg-[#09090b]/25" />

//                     <div className="relative">
//                       <div className="flex items-center justify-between">
//                         <span className="flex size-11 items-center justify-center rounded-xl border border-white/10 bg-black/25">
//                           <Icon className="size-5" />
//                         </span>

//                         <span className="text-4xl font-light text-white/[0.05]">
//                           0{index + 1}
//                         </span>
//                       </div>

//                       <h3 className="mt-7 text-lg font-medium text-white">
//                         {step.title}
//                       </h3>

//                       <p className="mt-3 text-sm leading-6 text-zinc-300">
//                         {step.body}
//                       </p>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           INDUSTRIES
//       ========================================================== */}

//       <section className="relative overflow-hidden border-y border-white/[0.07] bg-[#09090b]/85">
//         <div
//           aria-hidden
//           className="pointer-events-none absolute left-1/4 top-0 size-96 rounded-full bg-cyan-400/10 blur-3xl"
//         />

//         <div
//           aria-hidden
//           className="pointer-events-none absolute right-1/4 bottom-0 size-96 rounded-full bg-violet-500/10 blur-3xl"
//         />

//         <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-6 sm:py-24 lg:py-28">
//           <Reveal>
//             <SectionHeading
//               eyebrow="Industry expertise"
//               title={
//                 <>
//                   Technology built around
//                   <span className="block text-zinc-400">
//                     real business operations.
//                   </span>
//                 </>
//               }
//               description="Technology solutions designed around the operational realities, customer expectations, and growth objectives of modern businesses."
//             />
//           </Reveal>

//           <div className="mt-14 grid gap-4 sm:grid-cols-2">
//             {industries.map((item, index) => {
//               const Icon = item.icon;

//               return (
//                 <article
//                   key={item.title}
//                   className={`group relative min-h-[250px] overflow-hidden rounded-3xl border bg-gradient-to-br p-7 transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:shadow-2xl hover:shadow-black/20 ${item.tone}`}
//                 >
//                   <div className="absolute inset-0 bg-[#09090b]/40 transition-colors duration-500 group-hover:bg-[#09090b]/25" />

//                   <span className="absolute right-7 top-4 text-7xl font-light text-white/[0.04]">
//                     0{index + 1}
//                   </span>

//                   <div className="relative flex h-full flex-col">
//                     <span className="flex size-11 items-center justify-center rounded-xl border border-white/10 bg-black/25">
//                       <Icon className="size-5" />
//                     </span>

//                     <div className="mt-auto">
//                       <h3 className="text-xl font-medium text-white">
//                         {item.title}
//                       </h3>

//                       <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-300">
//                         {item.body}
//                       </p>
//                     </div>
//                   </div>
//                 </article>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           PARTNERSHIP
//       ========================================================== */}

//       <section className="relative">
//         <div className="mx-auto max-w-6xl px-5 py-20 sm:px-6 sm:py-24 lg:py-28">
//           <Reveal>
//             <SectionHeading
//               eyebrow="Built for long term partnership"
//               accent="violet"
//               title={
//                 <>
//                   Beyond delivery.
//                   <span className="text-zinc-400"> Built to last.</span>
//                 </>
//               }
//               description="We combine strategic thinking, product design, engineering excellence, and transparent delivery to create technology that continues to deliver value beyond launch."
//             />
//           </Reveal>

//           <div className="mt-14 grid gap-4 lg:grid-cols-3">
//             {principles.map((item, index) => {
//               const Icon = item.icon;

//               return (
//                 <article
//                   key={item.title}
//                   className={`group relative min-h-[270px] overflow-hidden rounded-3xl border bg-gradient-to-br p-8 transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:shadow-2xl hover:shadow-black/20 ${item.tone}`}
//                 >
//                   <div className="absolute inset-0 bg-[#09090b]/45 transition-colors duration-500 group-hover:bg-[#09090b]/25" />

//                   <span className="absolute right-6 top-3 text-7xl font-light text-white/[0.04]">
//                     0{index + 1}
//                   </span>

//                   <div className="relative flex h-full flex-col">
//                     <span className="flex size-12 items-center justify-center rounded-2xl border border-white/10 bg-black/25">
//                       <Icon className="size-5" />
//                     </span>

//                     <div className="mt-auto">
//                       <h3 className="text-xl font-medium text-white">
//                         {item.title}
//                       </h3>

//                       <p className="mt-3 text-sm leading-6 text-zinc-300">
//                         {item.body}
//                       </p>
//                     </div>
//                   </div>
//                 </article>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           INTERACTIVE EXPERIENCE
//       ========================================================== */}

//       <section className="relative overflow-hidden border-y border-white/10 bg-gradient-to-b from-violet-950/25 via-transparent to-transparent">
//         <div className="mx-auto max-w-6xl px-5 py-20 sm:px-6 sm:py-24 lg:py-28">
//           <Reveal>
//             <SectionHeading
//               eyebrow="Experience our technology"
//               accent="violet"
//               title={
//                 <>
//                   See how ideas become
//                   <span className="text-zinc-400"> experiences.</span>
//                 </>
//               }
//               description="Explore interactive examples that demonstrate how we approach intelligent interfaces and digital product experiences."
//             />
//           </Reveal>

//           <div className="mt-14 grid gap-6 lg:grid-cols-2">
//             <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-black/30 p-1 shadow-2xl shadow-black/30 backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-violet-400/25">
//               <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-violet-500/[0.08] to-cyan-500/[0.03] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
//               <div className="relative">
//                 <ChatShowcase />
//               </div>
//             </div>

//             <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-black/30 p-1 shadow-2xl shadow-black/30 backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-cyan-400/25">
//               <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-500/[0.08] to-emerald-500/[0.03] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
//               <div className="relative">
//                 <HomeGame />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           SELECTED WORK
//       ========================================================== */}

//       <section className="relative">
//         <div className="mx-auto max-w-6xl px-5 py-20 sm:px-6 sm:py-24 lg:py-28">
//           <Reveal>
//             <SectionHeading
//               eyebrow="Selected work"
//               title={
//                 <>
//                   Products that
//                   <span className="text-zinc-400"> solve real problems.</span>
//                 </>
//               }
//               description="A selection of digital products, platforms, and technology solutions delivered for our clients."
//             />
//           </Reveal>

//           <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
//             {projects.map((item, index) => {
//               const tone = workCardTone(item);

//               return (
//                 <Link
//                   key={item.slug}
//                   href={`/work/${item.slug}`}
//                   className={`group relative min-h-[260px] overflow-hidden rounded-3xl border bg-gradient-to-br p-7 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/20 ${tone.card}`}
//                 >
//                   <div className="absolute inset-0 bg-[#09090b]/40 transition-colors duration-500 group-hover:bg-[#09090b]/25" />

//                   <span className="absolute right-6 top-3 text-7xl font-light text-white/[0.04]">
//                     0{index + 1}
//                   </span>

//                   <div className="relative flex h-full flex-col">
//                     <p
//                       className={`text-[10px] font-medium uppercase tracking-[0.2em] ${tone.role}`}
//                     >
//                       {item.role}
//                     </p>

//                     <h3 className="mt-4 text-xl font-medium text-white">
//                       {item.name}
//                     </h3>

//                     <p className="mt-3 text-sm leading-6 text-zinc-300">
//                       {item.oneLiner}
//                     </p>

//                     <span className="mt-auto flex items-center gap-2 pt-8 text-sm text-zinc-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white">
//                       View project
//                       <span>→</span>
//                     </span>
//                   </div>
//                 </Link>
//               );
//             })}
//           </div>

//           <div className="mt-9 text-center">
//             <Link
//               href="/work"
//               className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-cyan-400 to-violet-400 px-6 py-3 text-sm font-medium text-zinc-950 transition duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-400/10"
//             >
//               View our portfolio
//               <span>→</span>
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           FAQ
//       ========================================================== */}

//       <section className="relative border-y border-white/[0.07] bg-[#09090b]/90">
//         <div className="mx-auto max-w-5xl px-5 py-20 sm:px-6 sm:py-24 lg:py-28">
//           <Reveal>
//             <SectionHeading
//               eyebrow="Frequently asked questions"
//               accent="zinc"
//               title={
//                 <>
//                   Before we
//                   <span className="text-zinc-400"> build together.</span>
//                 </>
//               }
//             />
//           </Reveal>

//           <div className="mx-auto mt-14 max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025]">
//             {questions.map((item, index) => (
//               <div
//                 key={item.q}
//                 className="group border-b border-white/10 px-6 py-7 transition-colors duration-300 last:border-b-0 hover:bg-white/[0.025] sm:px-8 sm:py-8"
//               >
//                 <div className="flex gap-5">
//                   <span className="pt-1 text-[10px] font-medium tracking-[0.2em] text-cyan-300/60">
//                     0{index + 1}
//                   </span>

//                   <div className="flex-1">
//                     <h3 className="text-base font-medium text-white transition-colors group-hover:text-cyan-100 sm:text-lg">
//                       {item.q}
//                     </h3>

//                     <p className="mt-3 max-w-3xl text-sm leading-6 text-zinc-300">
//                       {item.a}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           FINAL CTA
//       ========================================================== */}

//       <section className="relative overflow-hidden">
//         <div
//           aria-hidden
//           className="pointer-events-none absolute left-1/4 top-1/2 size-96 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-3xl"
//         />

//         <div
//           aria-hidden
//           className="pointer-events-none absolute right-1/4 top-1/2 size-96 -translate-y-1/2 rounded-full bg-violet-500/10 blur-3xl"
//         />

//         <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-6 sm:py-28">
//           <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-500/10 via-white/[0.025] to-violet-500/10 px-7 py-12 text-center shadow-2xl shadow-black/30 backdrop-blur-xl sm:px-12 sm:py-16 lg:px-20 lg:py-20">
//             <div
//               aria-hidden
//               className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] [background-size:36px_36px]"
//             />

//             <div className="relative mx-auto max-w-3xl">
//               <span className="inline-flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.3em] text-cyan-300">
//                 <span className="h-px w-8 bg-cyan-400/60" />
//                 Start a conversation
//                 <span className="h-px w-8 bg-cyan-400/60" />
//               </span>

//               <h2 className="mt-6 text-3xl font-medium tracking-tight text-white sm:text-5xl">
//                 Let’s build what’s next.
//               </h2>

//               <p className="mx-auto mt-5 max-w-xl text-[15px] leading-7 text-zinc-300 sm:text-base">
//                 Share your business objectives and technology requirements
//                 with our team. We will help define the right path forward.
//               </p>

//               <div className="mt-8 flex flex-wrap justify-center gap-3">
//                 <a
//                   href={`mailto:${SITE.email}`}
//                   className="oi-shine rounded-md bg-white px-7 py-3.5 text-sm font-medium text-zinc-950 transition duration-300 hover:-translate-y-0.5 hover:bg-zinc-200 hover:shadow-lg hover:shadow-white/10"
//                 >
//                   {SITE.email}
//                 </a>

//                 <Link
//                   href="/contact"
//                   className="rounded-md border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10"
//                 >
//                   Contact our team
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
