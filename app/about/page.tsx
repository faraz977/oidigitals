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
    "Learn how OI Digitals approaches digital product development, from discovery and design to engineering, delivery, and handoff.",
};

const points = [
  {
    icon: IconGlobe,
    title: "Built for distributed teams",
    body: "We work with clients across locations and time zones, keeping communication direct, structured, and easy to follow.",
    tone: "from-cyan-500/30 to-blue-600/10 text-cyan-300 border-cyan-400/20",
  },
  {
    icon: IconGit,
    title: "Structured from day one",
    body: "Projects begin with a private repository, clear version control, and an implementation history that remains visible throughout development.",
    tone: "from-violet-500/30 to-cyan-500/10 text-violet-300 border-violet-400/20",
  },
  {
    icon: IconUsers,
    title: "Built for client ownership",
    body: "The product, repository, and relevant accounts are transferred to the client at handoff. Your product remains yours.",
    tone: "from-emerald-500/30 to-cyan-500/10 text-emerald-300 border-emerald-400/20",
  },
];

const services = [
  {
    title: "AI Solutions",
    body: "Intelligent assistants and AI powered systems designed around your business knowledge, operational processes, and customer experiences.",
    icon: IconChat,
    tone: "from-violet-500/25 to-cyan-500/10 text-violet-300",
  },
  {
    title: "Web Applications",
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
    title: "Desktop Software",
    body: "Purpose built software for operations, data management, financial workflows, reporting, and complex business processes.",
    icon: IconDesktop,
    tone: "from-amber-500/25 to-orange-500/10 text-amber-300",
  },
  {
    title: "Product & UI Design",
    body: "Strategic product design and digital experiences that align user needs, business objectives, and a consistent visual identity.",
    icon: IconDesign,
    tone: "from-rose-500/25 to-violet-500/10 text-rose-300",
  },
];

const steps = [
  {
    icon: IconScope,
    title: "1. Understand",
    body: "We establish what needs to be built, who will use it, the core requirements, and what a useful first version should contain.",
    tone: "from-cyan-500/30 to-blue-600/10 text-cyan-300 border-cyan-400/20",
  },
  {
    icon: IconBuild,
    title: "2. Build the first version",
    body: "Development starts in a private repository with a focused first implementation that can be reviewed and tested.",
    tone: "from-violet-500/30 to-cyan-500/10 text-violet-300 border-violet-400/20",
  },
  {
    icon: IconGit,
    title: "3. Refine through feedback",
    body: "Progress is reviewed against the agreed scope. Feedback is incorporated through structured development and iteration.",
    tone: "from-amber-500/30 to-orange-500/10 text-amber-300 border-amber-400/20",
  },
  {
    icon: IconHandoff,
    title: "4. Deliver & hand over",
    body: "The completed product, repository, and relevant project access are prepared for the client's continued ownership.",
    tone: "from-emerald-500/30 to-cyan-500/10 text-emerald-300 border-emerald-400/20",
  },
];

const industries = [
  {
    title: "Logistics & field operations",
    body: "Technology platforms for logistics operations, fleet management, load coordination, driver networks, and field teams.",
    icon: IconTruck,
    tone: "from-cyan-500/30 to-blue-600/10 text-cyan-300 border-cyan-400/20",
  },
  {
    title: "Compliance & billing",
    body: "Structured digital systems for onboarding, documentation, compliance workflows, invoicing, and financial operations.",
    icon: IconShield,
    tone: "from-amber-500/30 to-orange-500/10 text-amber-300 border-amber-400/20",
  },
  {
    title: "Business operations",
    body: "Integrated software for procurement, sales, accounting, reporting, reconciliation, and operational management.",
    icon: IconLedger,
    tone: "from-violet-500/30 to-cyan-500/10 text-violet-300 border-violet-400/20",
  },
  {
    title: "Websites & AI experiences",
    body: "Customer facing digital products and intelligent AI systems that improve engagement, access to information, and operational efficiency.",
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
          <p className="mb-5 text-[11px] uppercase tracking-[0.24em] text-cyan-300">
            About OI Digitals
          </p>

          <h1 className="max-w-5xl text-4xl font-medium tracking-tight text-white sm:text-6xl sm:leading-[1.08]">
            Turning business requirements into{" "}
            <span className="oi-shimmer-text">working products.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-8 text-zinc-300 sm:text-[17px]">
            OI Digitals designs and develops web applications, mobile
            products, desktop software, AI solutions, and digital experiences
            for businesses with practical requirements.
          </p>

          <p className="mx-auto mt-4 max-w-2xl text-[16px] leading-relaxed text-zinc-500">
            We combine product thinking, interface design, and engineering to
            move an idea from an initial brief to something people can
            actually use.
          </p>

          <div className="mt-8 h-px w-full max-w-3xl bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-5 pb-14 pt-4 sm:px-6 sm:pb-20 sm:pt-6">

        {/* Principles */}
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

                <h2 className="mt-5 text-lg text-white">
                  {point.title}
                </h2>

                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {point.body}
                </p>
              </article>
            );
          })}
        </div>

        {/* Studio */}
        <section className="mt-20">
          <h2 className="text-center text-[11px] uppercase tracking-[0.22em] text-cyan-300">
            How we work
          </h2>

          <div className="mx-auto mt-5 max-w-2xl space-y-4 text-center text-[16px] leading-relaxed text-zinc-400">
            <p>
              Good software starts with understanding the problem behind the
              request. We look at the users, workflows, constraints, and
              desired outcome before deciding what should be built.
            </p>

            <p>
              From there, design and engineering move together. Interfaces are
              shaped around the actual product, while the implementation is
              structured to support the requirements that matter.
            </p>

            <p>
              Our focus is practical delivery: establish a clear direction,
              produce a working version, review it, and improve it through
              real feedback rather than designing the entire product in theory.
            </p>
          </div>
        </section>

        {/* Capabilities */}
        <section className="mt-20">
          <h2 className="text-center text-[11px] uppercase tracking-[0.22em] text-violet-300">
            What we build
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-center text-[16px] leading-relaxed text-zinc-400">
            Different products require different combinations of design,
            application development, data, automation, and AI. We bring those
            capabilities together around the product being built.
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

                  <p className="mt-3 text-sm text-white">
                    {item.title}
                  </p>

                  <p className="mt-1.5 text-[13px] leading-relaxed text-zinc-400 sm:text-sm">
                    {item.body}
                  </p>
                </li>
              );
            })}
          </ul>
        </section>

        {/* Industries */}
        <section className="mt-20">
          <h2 className="text-center text-[11px] uppercase tracking-[0.22em] text-amber-300">
            Where we add value
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-center text-[16px] leading-relaxed text-zinc-400">
            Our work is shaped by the operational context behind the product,
            from field teams and logistics networks to business systems and
            customer-facing digital experiences.
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

                  <h3 className="mt-4 text-lg text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                    {item.body}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        {/* Process */}
        <section className="mt-20">
          <h2 className="text-center text-[11px] uppercase tracking-[0.22em] text-cyan-300">
            From brief to delivery
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-center text-[16px] leading-relaxed text-zinc-400">
            A clear process keeps decisions visible and gives the product
            something concrete to improve at every stage.
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

                  <p className="mt-4 text-sm text-white">
                    {step.title}
                  </p>

                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    {step.body}
                  </p>
                </li>
              );
            })}
          </ol>
        </section>

        {/* Selected work */}
        <section className="mt-20">
          <h2 className="text-center text-[11px] uppercase tracking-[0.22em] text-emerald-300">
            Selected work
          </h2>

          <div className="mx-auto mt-5 max-w-2xl space-y-4 text-center text-[16px] leading-relaxed text-zinc-400">
            <p>
              Some of the products we have delivered can be explored on our{" "}
              <Link
                href="/work"
                className="text-cyan-300 transition-colors hover:text-white"
              >
                Work
              </Link>{" "}
              page.
            </p>

            <p>
              Our experience includes logistics platforms, compliance and
              billing systems, business applications, mobile products,
              websites, AI assistants, and purpose-built internal tools.
            </p>

            <p>
              Public case studies only include work that we have permission to
              show. Client source code, private systems, administrative
              interfaces, and customer information remain confidential.
            </p>
          </div>
        </section>

        {/* Ownership */}
        <section className="mt-20">
          <h2 className="text-center text-[11px] uppercase tracking-[0.22em] text-violet-300">
            Ownership & privacy
          </h2>

          <div className="mx-auto mt-5 max-w-2xl space-y-4 text-center text-[16px] leading-relaxed text-zinc-400">
            <p>
              We build products for the organizations that commission them.
              At handoff, the relevant repository and project accounts are
              transferred so the client can continue managing the product.
            </p>

            <p>
              Information shared with us during a project is treated as
              project information, not public marketing material. We do not
              publish a project on our Work page without permission.
            </p>

            <p>
              Enquiries sent through the contact form or to {SITE.email} are
              handled privately. You can read the full policy on{" "}
              <Link
                href="/privacy"
                className="text-cyan-300 transition-colors hover:text-white"
              >
                Privacy
              </Link>
              .
            </p>
          </div>
        </section>

        {/* CTA */}
        <div className="mt-16 rounded-2xl border border-white/10 bg-gradient-to-r from-cyan-500/10 via-violet-500/10 to-amber-400/10 px-6 py-8 sm:flex sm:items-center sm:justify-between">
          <div>
            <p className="text-white">
              Have a product in mind?
            </p>

            <p className="mt-2 text-sm text-zinc-400">
              Bring us the requirements. We can help turn them into a
              practical digital product.
            </p>

            <p className="mt-2 text-sm text-cyan-300">
              {SITE.email}
            </p>
          </div>

          <Link
            href="/contact"
            className="mt-5 inline-block rounded-full bg-gradient-to-r from-cyan-400 to-violet-400 px-5 py-2.5 text-sm font-medium text-zinc-950 transition-opacity hover:opacity-90 sm:mt-0"
          >
            Start a conversation
          </Link>
        </div>
      </div>
    </div>
  );
}