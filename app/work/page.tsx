
import type { Metadata } from "next";
import { CaseStudy } from "@/components/CaseStudy";
import { getWork, workList, workSurface } from "@/lib/work";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Explore selected applications, websites, platforms, AI solutions, and business systems delivered by OI Digitals.",
};

export default function WorkPage() {
  const items = workList();

  const apps = items.filter(
    (item) => workSurface(item) === "app" && item.kind !== "tool",
  );

  const sites = items.filter(
    (item) =>
      workSurface(item) === "web" &&
      item.kind !== "tool" &&
      item.slug !== "meridian-assist",
  );

  const chatbot = getWork("meridian-assist");

  const tools = items.filter((item) => item.kind === "tool");

  return (
    <div
      className="relative min-h-screen overflow-hidden bg-[#09090b]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(9, 9, 11, 0.92), rgba(9, 9, 11, 0.92)), linear-gradient(rgba(37, 99, 235, 0.18), rgba(9, 9, 11, 0.18)), url('/photos/work.jpg')",
        backgroundAttachment: "fixed",
        backgroundPosition: "center top",
        backgroundSize: "cover",
      }}
    >
      {/* HERO */}

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

        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-[-16rem] size-[42rem] -translate-x-1/2 rounded-full bg-blue-500/[0.10] blur-[120px]"
        />

        <div className="relative mx-auto max-w-5xl px-5 pb-12 pt-12 text-center sm:px-6 sm:pb-14 sm:pt-18">
          <p className="text-[11px] uppercase tracking-[0.28em] text-cyan-300">
            Selected work
          </p>

          <h1 className="mx-auto mt-5 max-w-4xl text-4xl font-medium tracking-tight text-white sm:text-6xl sm:leading-[1.08]">
            Products shaped around{" "}
            <span className="oi-shimmer-text">real requirements.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-8 text-zinc-300 sm:text-[17px]">
            A selection of applications, websites, platforms, AI solutions,
            and business systems delivered across different industries and
            operational needs.
          </p>

          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-zinc-500">
            Every project shown here is included with permission. Where a
            project can be discussed publicly, we focus on the problem,
            product, implementation, and experience delivered.
          </p>

          <div className="mt-12 h-px w-full max-w-3xl bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
        </div>
      </section>

      {/* WORK */}

      <div className="mx-auto max-w-6xl px-5 pb-16 pt-6 sm:px-6 sm:pb-24 sm:pt-8">

        {/* APPLICATIONS */}

        <section>
          <div className="mb-8 border-b border-white/10 pb-5">
            <p className="text-[11px] uppercase tracking-[0.22em] text-cyan-300">
              01 · Applications
            </p>

            <div className="mt-3 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
              <h2 className="text-2xl font-medium tracking-tight text-white sm:text-3xl">
                Digital products built for everyday use.
              </h2>

              <p className="max-w-md text-sm leading-6 text-zinc-500 sm:text-right">
                Mobile and application experiences designed around customers,
                teams, workflows, and operational requirements.
              </p>
            </div>
          </div>

          {apps.map((item, i) => (
            <CaseStudy
              key={item.slug}
              item={item}
              reverse={i % 2 === 1}
            />
          ))}
        </section>

        {/* WEBSITES */}

        <section className="mt-20">
          <div className="mb-8 border-b border-white/10 pb-5">
            <p className="text-[11px] uppercase tracking-[0.22em] text-violet-300">
              02 · Web
            </p>

            <div className="mt-3 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
              <h2 className="text-2xl font-medium tracking-tight text-white sm:text-3xl">
                Websites and platforms with a purpose.
              </h2>

              <p className="max-w-md text-sm leading-6 text-zinc-500 sm:text-right">
                Public-facing experiences and browser-based systems built to
                communicate, serve customers, and support business operations.
              </p>
            </div>
          </div>

          {sites.map((item, i) => (
            <CaseStudy
              key={item.slug}
              item={item}
              reverse={i % 2 === 1}
            />
          ))}
        </section>

        {/* AI */}

        {chatbot ? (
          <section className="mt-20">
            <div className="mb-8 border-b border-white/10 pb-5">
              <p className="text-[11px] uppercase tracking-[0.22em] text-emerald-300">
                03 · Artificial intelligence
              </p>

              <div className="mt-3 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
                <h2 className="text-2xl font-medium tracking-tight text-white sm:text-3xl">
                  Intelligent experiences connected to business knowledge.
                </h2>

                <p className="max-w-md text-sm leading-6 text-zinc-500 sm:text-right">
                  AI experiences designed to make information easier to access,
                  understand, and use within a real business context.
                </p>
              </div>
            </div>

            <CaseStudy item={chatbot} />
          </section>
        ) : null}

        {/* TOOLS */}

        <section className="mt-20">
          <div className="mb-8 border-b border-white/10 pb-5">
            <p className="text-[11px] uppercase tracking-[0.22em] text-amber-300">
              04 · Tools & systems
            </p>

            <div className="mt-3 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
              <h2 className="text-2xl font-medium tracking-tight text-white sm:text-3xl">
                Software that supports the work behind the scenes.
              </h2>

              <p className="max-w-md text-sm leading-6 text-zinc-500 sm:text-right">
                Purpose-built tools and internal systems developed to organize
                information, automate repetitive work, and improve operational
                workflows.
              </p>
            </div>
          </div>

          {tools.map((item, i) => (
            <CaseStudy
              key={item.slug}
              item={item}
              reverse={i % 2 === 1}
            />
          ))}
        </section>

        {/* CLOSING NOTE */}

        <section className="mt-20 border border-white/10 bg-white/[0.02] px-6 py-8 sm:px-8">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
            <div>
              <p className="text-sm font-medium text-white">
                Every engagement is different.
              </p>

              <p className="mt-2 max-w-2xl text-sm leading-7 text-zinc-500">
                The projects above represent only the work we have permission
                to present. Private repositories, administrative interfaces,
                customer data, and confidential engagements remain outside
                the public portfolio.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
