import type { Metadata } from "next";
import { CaseStudy } from "@/components/CaseStudy";
import { getWork, workList, workSurface } from "@/lib/work";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Projects clients have allowed OI Digitals to show: apps, websites, and software.",
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
        <div className="relative mx-auto flex max-w-5xl flex-col items-center px-5 pb-8 pt-10 text-center sm:px-6 sm:pb-10 sm:pt-16">
          <h1 className="max-w-5xl text-4xl font-medium tracking-tight text-white sm:text-6xl sm:leading-[1.08]">
            Selected <span className="oi-shimmer-text">work</span> for the
            real world.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-8 text-zinc-300 sm:text-[17px]">
        Not every engagement can go on a public site. These are the apps,
        websites, and systems we have permission to put here, with screens and
        the story of what shipped.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-[16px] leading-relaxed text-zinc-500">
        Apps first, then websites and the web-and-desktop accounting
        system, then a company chatbot, then the tools. Each block is a
        case study, not a logo wall.
          </p>
          <div className="mt-16 h-px w-full max-w-3xl bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-5 pb-14 pt-4 sm:px-6 sm:pb-20 sm:pt-6">

      <section>
        <h2 className="mt-2 text-center text-[11px] uppercase tracking-[0.22em] text-zinc-500">
          Apps
        </h2>
        {apps.map((item, i) => (
          <CaseStudy key={item.slug} item={item} reverse={i % 2 === 1} />
        ))}
      </section>

      <section>
        <h2 className="mt-6 text-center text-[11px] uppercase tracking-[0.22em] text-zinc-500">
          Websites and web apps
        </h2>
        {sites.map((item, i) => (
          <CaseStudy key={item.slug} item={item} reverse={i % 2 === 1} />
        ))}
      </section>

      {chatbot ? (
        <section>
          <h2 className="mt-6 text-center text-[11px] uppercase tracking-[0.22em] text-zinc-500">
            Client chatbot
          </h2>
          <CaseStudy item={chatbot} />
        </section>
      ) : null}

      <section>
        <h2 className="mt-6 text-center text-[11px] uppercase tracking-[0.22em] text-zinc-500">
          Tools
        </h2>
        {tools.map((item, i) => (
          <CaseStudy key={item.slug} item={item} reverse={i % 2 === 1} />
        ))}
      </section>
      </div>
    </div>
  );
}
