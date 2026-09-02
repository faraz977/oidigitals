import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import {
  getWork,
  splitGallery,
  workList,
  workSurface,
  type WorkItem,
} from "@/lib/work";

export const metadata: Metadata = {
  title: "Work print",
  robots: { index: false },
};

function PrintGroup({
  title,
  shots,
  phone = false,
}: {
  title: string;
  shots: string[];
  phone?: boolean;
}) {
  if (shots.length === 0) return null;
  return (
    <div className="mt-3">
      <p className="mb-2 text-[10px] uppercase tracking-[0.18em] text-slate-500">
        {title}
      </p>
      <div
        className={
          phone ? "flex flex-wrap gap-2" : "grid grid-cols-3 gap-2"
        }
      >
        {shots.map((src) => (
          <img
            key={src}
            src={src}
            alt=""
            className={
              phone
                ? "h-48 w-auto rounded-lg border border-slate-200 bg-slate-50 object-contain"
                : "w-full rounded-lg border border-slate-200 bg-slate-50 object-contain"
            }
          />
        ))}
      </div>
    </div>
  );
}

function PrintPics({ item }: { item: WorkItem }) {
  const { phones, webs, desks } = splitGallery(item.gallery);

  if (phones.length || webs.length || desks.length) {
    return (
      <div className="mt-3">
        <PrintGroup title="Phone" shots={phones} phone />
        <PrintGroup title="Web app" shots={webs} />
        <PrintGroup title="Desktop app" shots={desks} />
      </div>
    );
  }

  if (item.logo) {
    return (
      <div className="mt-4 flex h-40 w-full max-w-sm items-center justify-center rounded-xl border border-slate-200 bg-slate-50 px-8">
        <img
          src={item.logo}
          alt={item.name}
          className="max-h-20 w-auto max-w-[80%] object-contain"
        />
      </div>
    );
  }

  return null;
}

function PrintBlock({ item }: { item: WorkItem }) {
  const story = item.story?.length ? item.story : [item.oneLiner];

  return (
    <section className="mt-8 border-t border-slate-200 pt-5">
      <p className="text-[10px] uppercase tracking-[0.2em] text-blue-700">
        {item.role}
      </p>
      <h3 className="mt-1 text-lg font-semibold text-slate-900">{item.name}</h3>
      <div className="mt-2 space-y-2 text-[13px] leading-relaxed text-slate-700">
        {story.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
      <p className="mt-2 text-[11px] text-slate-500">
        {item.scope.join(" · ")}
        {item.live ? ` · ${item.live.replace(/^https?:\/\//, "")}` : ""}
      </p>
      <PrintPics item={item} />
    </section>
  );
}

export default function WorkPrintPage() {
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
    <div className="mx-auto max-w-3xl bg-white px-8 py-10 text-slate-900 print:max-w-none">
      <style>{`
        @page { size: letter; margin: 12mm; }
        img { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      `}</style>
      <p className="text-xs uppercase tracking-[0.3em] text-blue-700">
        OI Digitals · {SITE.domain}/work
      </p>
      <h1 className="mt-2 text-3xl font-semibold">
        Some of our projects clients allowed us to show.
      </h1>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">
        Not every engagement can go on a public site. These are the apps,
        websites, and systems we have permission to put here, with screens and
        the story of what shipped.
      </p>
      <p className="mt-2 text-xs text-slate-500">
        Software · AI · Apps · Design · {SITE.email}
      </p>

      <h2 className="mt-10 text-xs uppercase tracking-[0.2em] text-blue-700">
        Apps
      </h2>
      {apps.map((item) => (
        <PrintBlock key={item.slug} item={item} />
      ))}

      <h2 className="mt-10 text-xs uppercase tracking-[0.2em] text-blue-700">
        Websites and web apps
      </h2>
      {sites.map((item) => (
        <PrintBlock key={item.slug} item={item} />
      ))}

      {chatbot ? (
        <>
          <h2 className="mt-10 text-xs uppercase tracking-[0.2em] text-blue-700">
            Client chatbot
          </h2>
          <PrintBlock item={chatbot} />
        </>
      ) : null}

      <h2 className="mt-10 text-xs uppercase tracking-[0.2em] text-blue-700">
        Tools
      </h2>
      {tools.map((item) => (
        <PrintBlock key={item.slug} item={item} />
      ))}

      <p className="mt-10 text-xs text-slate-500">
        Client repositories, admin panels, and customer data stay off this
        list. {SITE.email}
      </p>
    </div>
  );
}
