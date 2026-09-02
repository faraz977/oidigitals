import { IconWhatsApp } from "@/components/Icons";
import { SITE } from "@/lib/site";

export function WhatsAppWidget() {
  return (
    <a
      href={SITE.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label={`WhatsApp ${SITE.phone}`}
      className="fixed bottom-4 right-4 z-50 flex items-center gap-2.5 rounded-full border border-white/10 bg-zinc-950/90 py-2 pl-2 pr-4 text-sm text-white shadow-[0_12px_40px_-12px_rgba(37,211,102,0.55)] backdrop-blur no-print hover:border-[#25D366]/40 hover:bg-zinc-900 sm:bottom-6 sm:right-6"
    >
      <span className="flex size-10 items-center justify-center rounded-full bg-[#25D366] text-zinc-950">
        <IconWhatsApp className="size-5" />
      </span>
      WhatsApp
    </a>
  );
}
