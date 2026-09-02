import Link from "next/link";
import { AccountingShowcase } from "@/components/AccountingShowcase";
import type { WorkItem } from "@/lib/work";
import { kindLabel, splitGallery, workSurface } from "@/lib/work";
import { LogoTile } from "@/components/Cover";
import { ShotRow } from "@/components/Shots";
import { Reveal } from "@/components/Reveal";

function panelTone(item: WorkItem) {
  if (item.slug === "meridian-assist") {
    return "from-violet-500/[0.12] via-white/[0.03] to-cyan-500/[0.04]";
  }
  if (item.slug === "accounting-ops" || item.kind === "tool") {
    return "from-amber-500/[0.10] via-white/[0.03] to-orange-500/[0.04]";
  }
  if (workSurface(item) === "web") {
    return "from-cyan-500/[0.11] via-white/[0.03] to-blue-500/[0.04]";
  }
  return "from-emerald-500/[0.10] via-white/[0.03] to-cyan-500/[0.04]";
}

function LiveLink({ href }: { href: string }) {
  return (
    
    <a  href={href}
      target="_blank"
      rel="noreferrer"
      className="oi-underline inline-flex items-center gap-1.5 text-cyan-300 hover:text-white"
    >
      {href.replace(/^https?:\/\//, "")}
      <span aria-hidden className="text-xs">↗</span>
    </a>
  );
}

export function CaseStudy({
  item,
  reverse = false,
}: {
  item: WorkItem;
  reverse?: boolean;
}) {
  const { phones, webs, desks } = splitGallery(item.gallery);
  const hasShots = phones.length > 0 || webs.length > 0 || desks.length > 0;
  const story = item.story?.length ? item.story : [item.oneLiner];
  const tone = panelTone(item);

  return (
    <article className={`group mt-8 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br ${tone} p-4 sm:mt-10 sm:p-6 lg:p-8`}>
      <div className="grid items-start gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
        <Reveal className={reverse ? "lg:order-2" : undefined}>
          <p className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 px-3 py-1 text-[11px] uppercase tracking-[0.22em] font-semibold text-cyan-200 shadow-lg shadow-cyan-500/20">
            {kindLabel(item)}
          </p>
          <h2 className="mt-4 bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-400 bg-clip-text text-3xl font-medium tracking-tight text-transparent transition-colors duration-300 group-hover:from-cyan-200 group-hover:via-blue-200 group-hover:to-purple-300">
            {item.name}
          </h2>
          <p className="mt-1 text-sm text-violet-300">{item.role}</p>
          <div className="mt-5 max-w-none space-y-3 pr-0 text-[15px] leading-relaxed text-zinc-400 lg:pr-4">
            {story.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <ul className="mt-5 flex flex-wrap gap-1.5">
            {item.scope.map((part) => (
              <li
                key={part}
                className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-zinc-400"
              >
                {part}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap items-center gap-5 text-sm">
            <Link
              href={`/work/${item.slug}`}
              className="oi-underline inline-flex items-center gap-1.5 text-white transition hover:text-zinc-200"
            >
              Full case study
              <span
                aria-hidden
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
            {item.live ? <LiveLink href={item.live} /> : null}
          </div>
        </Reveal>

        <Reveal
          className={`oi-card rounded-2xl p-0 ${reverse ? "lg:order-1" : ""}`}
          delay={120}
        >
          {item.slug === "accounting-ops" ? (
            <AccountingShowcase />
          ) : hasShots ? (
            <ShotRow
              phones={phones}
              webs={webs}
              desks={desks}
              name={item.name}
              preview
              maxWebShots={item.slug === "bizbill" ? 1 : undefined}
            />
          ) : item.logo ? (
            <LogoTile src={item.logo} alt={item.name} />
          ) : null}
        </Reveal>
      </div>
    </article>
  );
}