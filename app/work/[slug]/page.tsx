import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AccountingShowcase } from "@/components/AccountingShowcase";
import { LogoTile } from "@/components/Cover";
import { Reveal } from "@/components/Reveal";
import { ShotRow } from "@/components/Shots";
import { SITE } from "@/lib/site";
import { WORK, getWork, kindLabel, splitGallery, workList } from "@/lib/work";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return WORK.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getWork(slug);
  if (!item) return { title: "Work" };
  return {
    title: item.name,
    description: item.oneLiner,
  };
}

export default async function WorkItemPage({ params }: Props) {
  const { slug } = await params;
  const item = getWork(slug);
  if (!item) notFound();

  const paragraphs = item.story?.length ? item.story : [item.oneLiner];
  const { phones, webs, desks } = splitGallery(item.gallery);
  const hasShots = phones.length > 0 || webs.length > 0 || desks.length > 0;

  const all = workList();
  const index = all.findIndex((entry) => entry.slug === item.slug);
  const related = all
    .filter((entry) => entry.slug !== item.slug)
    .slice(0, 3);

  return (
    <article className="relative">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div
          aria-hidden
          className="oi-orb-pulse pointer-events-none absolute -left-24 top-0 size-[24rem] rounded-full bg-cyan-400/15 blur-3xl"
        />
        <div
          aria-hidden
          className="oi-orb-float pointer-events-none absolute -right-16 top-10 size-[18rem] rounded-full bg-violet-500/20 blur-3xl"
        />
        <div className="relative mx-auto max-w-6xl px-5 pb-14 pt-8 sm:px-6 sm:pb-20 sm:pt-10">
          <nav className="flex items-center gap-2 text-sm text-zinc-500">
            <Link href="/work" className="hover:text-white">
              All work
            </Link>
            <span aria-hidden>/</span>
            <span className="text-zinc-400">{item.name}</span>
          </nav>

          <Reveal className="mt-8 text-center">
            <p className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-cyan-300">
              {kindLabel(item)}
            </p>
            <h1 className="mx-auto mt-4 max-w-4xl bg-gradient-to-r from-cyan-300 via-white to-violet-300 bg-clip-text text-4xl font-medium tracking-tight text-transparent sm:text-5xl">
              {item.name}
            </h1>
            <p className="mt-3 text-lg text-violet-300">{item.role}</p>
          </Reveal>

          <div className="mt-8 grid items-start gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
            <Reveal>
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-[16px] leading-relaxed text-zinc-300 backdrop-blur-sm sm:p-8">
                <p className="mb-5 text-[11px] uppercase tracking-[0.22em] text-cyan-300">
                  The project
                </p>
                <div className="space-y-4">
                  {paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm">
                <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-500">
                  Scope
                </p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                  {item.scope.join(" · ")}
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm">
                <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-500">
                  Stack
                </p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                  {item.stack}
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm">
                <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-500">
                  Live
                </p>
                {item.live ? (
                  <a
                    href={item.live}
                    target="_blank"
                    rel="noreferrer"
                    className="oi-underline mt-2 inline-flex items-center gap-1.5 text-sm text-cyan-300 hover:text-white"
                  >
                    {item.live.replace(/^https?:\/\//, "")}
                    <span aria-hidden className="text-xs">↗</span>
                  </a>
                ) : (
                  <p className="mt-2 text-sm text-zinc-500">
                    {item.confidential ? "Private engagement" : "Not public"}
                  </p>
                )}
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm">
                <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-500">
                  Delivery
                </p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                  Worldwide, from a private repository with clear ownership.
                </p>
              </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Gallery */}
      {item.slug === "accounting-ops" ? (
        <section className="border-t border-white/10 bg-white/[0.02]">
          <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 sm:py-16">
            <Reveal>
              <h2 className="text-center text-lg font-medium uppercase tracking-[0.22em] text-cyan-300 sm:text-xl">
                Product tour
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <div className="mt-8">
                <AccountingShowcase />
              </div>
            </Reveal>
          </div>
        </section>
      ) : hasShots ? (
        <section className="border-t border-white/10 bg-white/[0.02]">
          <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 sm:py-16">
            <Reveal>
              <h2 className="text-center text-lg font-medium uppercase tracking-[0.22em] text-cyan-300 sm:text-xl">
                Product tour
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <div className="mt-8">
                <ShotRow
                  phones={phones}
                  webs={webs}
                  desks={desks}
                  name={item.name}
                  caseStudy={true}
                />
              </div>
            </Reveal>
          </div>
        </section>
      ) : item.logo ? (
        <section className="border-t border-white/10 bg-white/[0.02]">
          <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 sm:py-16">
            <Reveal>
              <div className="max-w-md">
                <LogoTile src={item.logo} alt={item.name} />
              </div>
            </Reveal>
          </div>
        </section>
      ) : null}

      {/* Related work */}
      {related.length > 0 ? (
        <section className="mx-auto max-w-6xl px-5 py-14 sm:px-6 sm:py-16">
          <Reveal>
            <h2 className="text-center text-lg font-medium uppercase tracking-[0.22em] text-cyan-300 sm:text-xl">
              More work
            </h2>
          </Reveal>
          <ul className="oi-stagger mt-8 grid gap-4 sm:grid-cols-3">
            {related.map((entry) => (
              <li key={entry.slug}>
                <Link
                  href={`/work/${entry.slug}`}
                  className="oi-card block rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent px-4 py-4 hover:border-cyan-300/40"
                >
                  <p className="text-[11px] uppercase tracking-[0.18em] text-cyan-300/80">
                    {kindLabel(entry)}
                  </p>
                  <p className="mt-1 text-sm text-white">{entry.name}</p>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-zinc-400">
                    {entry.oneLiner}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {/* CTA */}
      <section className="border-t border-white/10 bg-gradient-to-r from-cyan-500/10 via-violet-500/10 to-amber-400/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-14 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:py-16">
          <div>
            <p className="text-xl text-white">Want something like this?</p>
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
              className="rounded-full border border-white/20 px-5 py-2.5 text-white transition hover:bg-white/10"
            >
              Contact
            </Link>
          </div>
        </div>
      </section>

      {/* Prev / next */}
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-8 text-sm text-zinc-500 sm:px-6">
        {index > 0 ? (
          <Link
            href={`/work/${all[index - 1].slug}`}
            className="hover:text-white"
          >
            ← {all[index - 1].name}
          </Link>
        ) : (
          <span />
        )}
        {index < all.length - 1 ? (
          <Link
            href={`/work/${all[index + 1].slug}`}
            className="hover:text-white"
          >
            {all[index + 1].name} →
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </article>
  );
}
