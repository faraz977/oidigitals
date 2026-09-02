
import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { SITE } from "@/lib/site";
import {
  DELIVERY_PILLARS,
  ENGINEERING_FOUNDATIONS,
  PROCESS,
  SERVICES,
  TECH_STACK,
} from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "OI Digitals delivers enterprise software engineering, web and mobile applications, product design, AI solutions, automation, and scalable digital platforms.",
};

export default function ServicesPage() {
  return (
    <div
      className="relative overflow-hidden bg-[#080d16]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(8, 13, 22, 0.95), rgba(8, 13, 22, 0.95)), linear-gradient(rgba(34, 211, 238, 0.18), rgba(8, 13, 22, 0.18)), url('/photos/service.jpg')",
        backgroundAttachment: "fixed",
        backgroundPosition: "center top",
        backgroundSize: "cover",
      }}
    >
      {/* GLOBAL BACKGROUND */}

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="oi-orb-pulse absolute -left-40 top-20 size-[32rem] rounded-full bg-cyan-500/[0.10] blur-[120px]" />
        <div className="oi-orb-float absolute -right-40 top-[30rem] size-[32rem] rounded-full bg-blue-500/[0.10] blur-[120px]" />
        <div className="oi-orb-pulse absolute left-1/3 top-[75rem] size-[28rem] rounded-full bg-violet-500/[0.08] blur-[120px]" />
      </div>

      {/* HERO */}

      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
            maskImage: "linear-gradient(to bottom, black, transparent 85%)",
          }}
        />

        <div
          aria-hidden
          className="oi-orb-pulse pointer-events-none absolute left-1/2 top-[-12rem] size-[40rem] -translate-x-1/2 rounded-full bg-cyan-400/[0.13] blur-[110px]"
        />

        <div className="relative mx-auto flex max-w-6xl flex-col items-center px-5 pb-10 pt-10 text-center sm:px-6 sm:pb-14 sm:pt-16">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.28em] text-cyan-300">
              Digital Engineering and Product Development
            </p>

            <h1 className="mx-auto mt-5 max-w-4xl text-4xl font-medium tracking-tight text-white sm:text-6xl sm:leading-[1.08]">
              Technology built for{" "}
              <span className="oi-shimmer-text">
                ambitious businesses.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-8 text-zinc-300 sm:text-[17px]">
              We design, engineer, and deliver digital products that help
              organizations modernize operations, launch new capabilities,
              and create better experiences for their customers.
            </p>

            <p className="mx-auto mt-4 max-w-2xl text-[16px] leading-8 text-zinc-400 sm:text-[17px]">
              From web and mobile applications to intelligent AI systems,
              enterprise platforms, automation, and product design, our teams
              combine strategy, design, and engineering to turn complex
              requirements into dependable software.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-3 text-sm">
              <Link
                href="/contact"
                className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 font-semibold text-[#061018] shadow-[0_0_30px_rgba(34,211,238,0.15)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(34,211,238,0.30)]"
              >
                Discuss your project
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <Link
                href="/work"
                className="group flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.05] px-6 py-3 text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.09]"
              >
                Explore our work
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </Reveal>

          <div
            aria-hidden
            className="mt-16 h-px w-full max-w-3xl bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"
          />
        </div>
      </section>

      {/* DELIVERY PILLARS */}

      <section className="relative border-y border-white/[0.08] bg-white/[0.025]">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 sm:py-16">
          <div className="mb-10 text-center">
            <p className="text-[11px] uppercase tracking-[0.25em] text-cyan-300">
              Our approach
            </p>

            <h2 className="mt-4 text-3xl font-medium tracking-tight text-white sm:text-4xl">
              Built around your business objectives
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-[16px] leading-relaxed text-zinc-400">
              Every engagement is structured around clear objectives,
              measurable outcomes, transparent communication, and engineering
              practices designed for long term value.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-3">
            {DELIVERY_PILLARS.map((item, i) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={i * 90}>
                  <div className="group relative h-full overflow-hidden rounded-2xl border border-white/[0.10] bg-gradient-to-br from-white/[0.07] to-white/[0.025] p-6 shadow-[0_20px_50px_-35px_rgba(0,0,0,0.8)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/20 hover:bg-white/[0.08] hover:shadow-[0_20px_60px_-25px_rgba(34,211,238,0.12)]">
                    <div className="absolute -right-12 -top-12 size-28 rounded-full bg-cyan-400/[0.08] blur-2xl transition-all duration-500 group-hover:bg-cyan-400/[0.15]" />

                    <span className="relative flex size-11 items-center justify-center rounded-xl border border-cyan-400/10 bg-gradient-to-br from-cyan-400/15 to-blue-500/10 text-cyan-300 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                      <Icon className="size-5" />
                    </span>

                    <h3 className="relative mt-5 text-lg font-medium text-white">
                      {item.title}
                    </h3>

                    <p className="relative mt-2.5 text-sm leading-relaxed text-zinc-400">
                      {item.body}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* SERVICE CATALOG */}

      <section className="relative mx-auto max-w-6xl px-5 py-20 sm:px-6 sm:py-24">
        <Reveal>
          <div className="text-center">
            <p className="text-[11px] uppercase tracking-[0.25em] text-cyan-300">
              Our capabilities
            </p>

            <h2 className="mt-4 text-3xl font-medium tracking-tight text-white sm:text-4xl">
              Comprehensive digital solutions
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-[16px] leading-relaxed text-zinc-400">
              A comprehensive range of engineering, design, AI, automation,
              and digital product capabilities that can be tailored to your
              business requirements and growth objectives.
            </p>
          </div>
        </Reveal>

        <ul className="oi-stagger mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.slice(0, 6).map((service) => {
            const Icon = service.icon;

            return (
              <li
                key={service.slug}
                className={`oi-card group relative flex flex-col overflow-hidden rounded-2xl border bg-gradient-to-br p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_60px_-25px_rgba(34,211,238,0.18)] ${service.tone}`}
              >
                <div className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-cyan-400/[0.06] blur-3xl transition-all duration-500 group-hover:bg-cyan-400/[0.14]" />

                <span className="relative flex size-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.07] text-cyan-300 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:border-cyan-400/20">
                  <Icon className="size-5" />
                </span>

                <h3 className="relative mt-5 text-lg font-medium text-white">
                  {service.title}
                </h3>

                <p className="relative mt-2.5 flex-1 text-sm leading-relaxed text-zinc-400">
                  {service.body}
                </p>

                <ul className="relative mt-5 flex flex-wrap gap-1.5">
                  {service.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/[0.05] px-2.5 py-1 text-[11px] text-zinc-300 transition-colors duration-300 group-hover:border-white/15"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/contact?service=${service.slug}`}
                  className="oi-underline relative mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-white"
                >
                  Discuss this capability
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>

        <ul className="oi-stagger mt-5 flex flex-wrap justify-center gap-5">
          {SERVICES.slice(6).map((service) => {
            const Icon = service.icon;

            return (
              <li
                key={service.slug}
                className={`oi-card group relative flex w-full flex-col overflow-hidden rounded-2xl border bg-gradient-to-br p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_60px_-25px_rgba(34,211,238,0.18)] sm:w-auto lg:max-w-sm ${service.tone}`}
              >
                <div className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-cyan-400/[0.06] blur-3xl transition-all duration-500 group-hover:bg-cyan-400/[0.14]" />

                <span className="relative flex size-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.07] text-cyan-300 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:border-cyan-400/20">
                  <Icon className="size-5" />
                </span>

                <h3 className="relative mt-5 text-lg font-medium text-white">
                  {service.title}
                </h3>

                <p className="relative mt-2.5 flex-1 text-sm leading-relaxed text-zinc-400">
                  {service.body}
                </p>

                <ul className="relative mt-5 flex flex-wrap gap-1.5">
                  {service.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/[0.05] px-2.5 py-1 text-[11px] text-zinc-300 transition-colors duration-300 group-hover:border-white/15"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/contact?service=${service.slug}`}
                  className="oi-underline relative mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-white"
                >
                  Discuss this capability
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      {/* TECH STACK */}

      <section className="relative overflow-hidden border-y border-white/[0.08] bg-gradient-to-b from-blue-950/20 via-white/[0.02] to-transparent">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 size-[35rem] -translate-x-1/2 rounded-full bg-blue-500/[0.07] blur-[120px]"
        />

        <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-6 sm:py-24">
          <Reveal>
            <div className="text-center">
              <p className="text-[11px] uppercase tracking-[0.25em] text-violet-300">
                Technology
              </p>

              <h2 className="mt-4 text-3xl font-medium tracking-tight text-white sm:text-4xl">
                Modern technology. Proven engineering.
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-[16px] leading-relaxed text-zinc-300">
                We select technologies based on reliability, maintainability,
                performance, security, and long term business value. Our
                engineering capabilities span modern applications, cloud
                systems, AI, data platforms, and intelligent automation.
              </p>
            </div>
          </Reveal>

          <div className="oi-stagger mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {TECH_STACK.map((category) => {
              const Icon = category.icon;

              return (
                <article
                  key={category.title}
                  className={`oi-card group relative overflow-hidden rounded-2xl border bg-gradient-to-br p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 ${category.tone}`}
                >
                  <div className="absolute -bottom-16 -right-16 size-40 rounded-full bg-violet-400/[0.06] blur-3xl transition-all duration-500 group-hover:bg-violet-400/[0.14]" />

                  <span className="relative flex size-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.07] text-violet-300 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <Icon className="size-5" />
                  </span>

                  <h3 className="relative mt-5 text-lg font-medium text-white">
                    {category.title}
                  </h3>

                  <p className="relative mt-2.5 text-sm leading-relaxed text-zinc-400">
                    {category.body}
                  </p>

                  <ul className="relative mt-5 flex flex-wrap gap-1.5">
                    {category.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-[11px] text-zinc-300"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ENGINEERING FOUNDATIONS */}

      <section className="relative mx-auto max-w-6xl px-5 py-20 sm:px-6 sm:py-24">
        <Reveal>
          <div className="text-center">
            <p className="text-[11px] uppercase tracking-[0.25em] text-blue-300">
              Engineering standards
            </p>

            <h2 className="mt-4 text-3xl font-medium tracking-tight text-white sm:text-4xl">
              Engineered for reliability and scale
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-[16px] leading-relaxed text-zinc-400">
              Our engineering practices are designed to create software that
              remains reliable as usage, data, teams, and business requirements
              evolve.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {ENGINEERING_FOUNDATIONS.map((item, i) => {
            const Icon = item.icon;

            return (
              <Reveal key={item.title} delay={i * 90}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-white/[0.10] bg-gradient-to-br from-white/[0.06] to-white/[0.025] p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-blue-400/20 hover:shadow-[0_25px_60px_-25px_rgba(59,130,246,0.18)]">
                  <span className="flex size-11 items-center justify-center rounded-xl border border-blue-400/10 bg-gradient-to-br from-blue-400/15 to-cyan-400/10 text-blue-300 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <Icon className="size-5" />
                  </span>

                  <h3 className="mt-5 text-lg font-medium text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2.5 text-sm leading-relaxed text-zinc-400">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* PROCESS */}

      <section className="relative overflow-hidden border-t border-white/[0.08] bg-gradient-to-b from-violet-950/20 via-blue-950/10 to-transparent">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 size-[35rem] -translate-x-1/2 rounded-full bg-violet-500/[0.06] blur-[120px]"
        />

        <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-6 sm:py-24">
          <Reveal>
            <div className="text-center">
              <p className="text-[11px] uppercase tracking-[0.25em] text-cyan-300">
                Delivery process
              </p>

              <h2 className="mt-4 text-3xl font-medium tracking-tight text-white sm:text-4xl">
                A structured path from strategy to delivery
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-[16px] leading-relaxed text-zinc-300">
                A transparent delivery framework that brings business
                objectives, product design, engineering, testing, and
                continuous improvement together throughout the engagement.
              </p>
            </div>
          </Reveal>

          <ol className="oi-stagger mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PROCESS.map((step) => (
              <li
                key={step.number}
                className={`oi-card group relative overflow-hidden rounded-2xl border bg-gradient-to-br p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/20 ${step.tone}`}
              >
                <span
                  aria-hidden
                  className="absolute -right-2 -top-5 text-7xl font-semibold text-white/[0.04] transition-all duration-500 group-hover:text-cyan-300/[0.08]"
                >
                  {step.number}
                </span>

                <p className="relative text-[11px] uppercase tracking-[0.2em] text-cyan-300/70">
                  Phase {step.number}
                </p>

                <h3 className="relative mt-3 text-lg font-medium text-white">
                  {step.title}
                </h3>

                <p className="relative mt-2.5 text-sm leading-relaxed text-zinc-400">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CLOSING CTA */}

      <section className="relative overflow-hidden border-t border-white/[0.08]">
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-cyan-500/[0.08] via-violet-500/[0.10] to-blue-500/[0.08]"
        />

        <div
          aria-hidden
          className="oi-orb-pulse absolute left-1/2 top-1/2 size-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.08] blur-[100px]"
        />

        <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-7 px-5 py-20 text-center sm:px-6 sm:py-24">
          <div>
            <p className="text-2xl font-medium text-white sm:text-3xl">
              Have a technology initiative in mind?
            </p>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-zinc-400">
              Share your business objectives, technical requirements, or
              product vision with us. We will help define the right solution,
              technology approach, and delivery path.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 text-sm">
            <a
              href={`mailto:${SITE.email}`}
              className="rounded-xl bg-white px-5 py-3 font-medium text-zinc-950 transition-all duration-300 hover:-translate-y-1 hover:bg-zinc-200 hover:shadow-[0_10px_30px_-10px_rgba(255,255,255,0.3)]"
            >
              {SITE.email}
            </a>

            <Link
              href="/contact"
              className="rounded-xl border border-white/15 bg-white/[0.04] px-5 py-3 text-white transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.08]"
            >
              Start a conversation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
