"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { IconWhatsApp } from "@/components/Icons";
import { replyTo } from "@/lib/chat";
import { SITE } from "@/lib/site";

type Msg = { from: "bot" | "user"; text: string };

const seed: Msg[] = [
  {
    from: "bot",
    text: "Hi. I am OI Chatbot. Ask about the studio, contact details, our work, or a general question. WhatsApp is one tap away if you want a person.",
  },
];

export function ChatShowcase({ compact = false }: { compact?: boolean }) {
  const [messages, setMessages] = useState<Msg[]>(seed);
  const [value, setValue] = useState("");
  const [pending, setPending] = useState(false);
  const pane = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = pane.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [messages, pending]);

  useEffect(() => {
    const el = pane.current;
    if (!el) return;

    const shouldPassToPage = (deltaY: number) => {
      const noOverflow = el.scrollHeight <= el.clientHeight + 1;
      if (noOverflow) return true;
      const atTop = el.scrollTop <= 0;
      const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 1;
      return (deltaY > 0 && atBottom) || (deltaY < 0 && atTop);
    };

    const scrollPage = (deltaY: number) => {
      window.scrollTo({ top: window.scrollY + deltaY, behavior: "instant" });
    };

    const onWheel = (e: WheelEvent) => {
      if (!shouldPassToPage(e.deltaY)) return;
      e.preventDefault();
      scrollPage(e.deltaY);
    };

    let touchY = 0;
    const onTouchStart = (e: TouchEvent) => {
      touchY = e.touches[0]?.clientY ?? 0;
    };
    const onTouchMove = (e: TouchEvent) => {
      const y = e.touches[0]?.clientY ?? 0;
      const deltaY = touchY - y;
      if (!shouldPassToPage(deltaY)) return;
      e.preventDefault();
      scrollPage(deltaY);
      touchY = y;
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchmove", onTouchMove, { passive: false });
    return () => {
      el.removeEventListener("wheel", onWheel);
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
    };
  }, []);

  async function send() {
    const text = value.trim();
    if (!text || pending) return;
    setValue("");
    setPending(true);
    setMessages((m) => [...m, { from: "user", text }]);
    const reply = await replyTo(text);
    setMessages((m) => [...m, { from: "bot", text: reply }]);
    setPending(false);
  }

  return (
    <div
      className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-[#1a1240] to-[#0b1020] shadow-[0_0_80px_rgba(167,139,250,0.18)]"
      style={{ overflowAnchor: "none" }}
    >
      <div className="flex items-center gap-3 border-b border-white/10 px-5 py-4">
        <span className="relative flex size-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-400 to-cyan-400 text-sm font-semibold text-zinc-950">
          OI
          <span className="absolute -bottom-0.5 -right-0.5 size-2.5 rounded-full border-2 border-[#1a1240] bg-emerald-400" />
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-sm text-white">OI Chatbot</p>
          <p className="text-xs text-violet-200/70">Studio helper on this site</p>
        </div>
        <a
          href={SITE.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full bg-[#22c55e] px-3 py-1.5 text-xs font-medium text-zinc-950 hover:bg-[#16a34a]"
        >
          <IconWhatsApp className="size-3.5" />
          WhatsApp
        </a>
      </div>
      <div
        ref={pane}
        className={`flex flex-col gap-3 overflow-y-auto overscroll-none px-5 py-5 ${compact ? "h-[220px]" : "h-[280px] sm:h-[320px]"}`}
      >
        {messages.map((msg, i) => (
          <div
            key={`${i}-${msg.from}`}
            className={msg.from === "user" ? "flex justify-end" : "flex justify-start"}
          >
            <p
              className={
                msg.from === "user"
                  ? "max-w-[85%] rounded-2xl rounded-br-md bg-gradient-to-r from-cyan-400 to-violet-400 px-4 py-2.5 text-sm text-zinc-950"
                  : "max-w-[85%] rounded-2xl rounded-bl-md bg-white/10 px-4 py-2.5 text-sm leading-relaxed text-zinc-100"
              }
            >
              {msg.text}
            </p>
          </div>
        ))}
        {pending ? (
          <p className="max-w-[40%] rounded-2xl rounded-bl-md bg-white/10 px-4 py-2.5 text-sm text-zinc-400">
            …
          </p>
        ) : null}
      </div>
      <form
        className="flex gap-2 border-t border-white/10 p-4"
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          send();
        }}
      >
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Ask OI Chatbot…"
          className="min-w-0 flex-1 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white outline-none placeholder:text-zinc-500 focus:border-violet-300/40"
        />
        <button
          type="submit"
          disabled={pending}
          className="rounded-full bg-gradient-to-r from-cyan-400 to-violet-400 px-4 py-2.5 text-sm font-medium text-zinc-950 disabled:opacity-60"
        >
          Send
        </button>
      </form>
    </div>
  );
}
