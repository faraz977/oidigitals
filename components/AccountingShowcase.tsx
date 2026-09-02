import { WebShot } from "@/components/Shots";

const webs = [
  { src: "/work/acct-web-purchase.png", label: "Purchase portal" },
  { src: "/work/acct-web-ledger-v2.png", label: "Customer ledger" },
  { src: "/work/acct-web-bank.png", label: "Bank and cash" },
] as const;

const desks = [
  { src: "/work/acct-desk-entry.png", label: "Desktop entry" },
  { src: "/work/acct-desk-balances.png", label: "Opening balances" },
  { src: "/work/acct-desk-report.png", label: "Desktop report" },
] as const;

export function AccountingShowcase() {
  return (
    <div className="space-y-8">
      <div>
        <p className="mb-3 text-[11px] uppercase tracking-[0.2em] text-orange-300">
          Web app
        </p>
        <div className="grid gap-4 sm:grid-cols-3">
          {webs.map((mod) => (
            <figure key={mod.src}>
              <WebShot src={mod.src} alt={mod.label} />
              <figcaption className="mt-2 text-xs text-zinc-500">{mod.label}</figcaption>
            </figure>
          ))}
        </div>
      </div>
      <div>
        <p className="mb-3 text-[11px] uppercase tracking-[0.2em] text-amber-300">
          Desktop app
        </p>
        <div className="grid gap-4 sm:grid-cols-3">
          {desks.map((mod) => (
            <figure key={mod.src}>
              <WebShot src={mod.src} alt={mod.label} desk />
              <figcaption className="mt-2 text-xs text-zinc-500">{mod.label}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
}
