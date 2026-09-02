"use client";

import { FormEvent, useState } from "react";

const TYPES = [
  "Mobile app",
  "Web app or site",
  "Desktop software",
  "AI or chatbot",
  "Design only",
  "Not sure yet",
];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    if (data.website) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          company: data.company,
          projectType: data.projectType,
          message: data.message,
        }),
      });
      if (!res.ok) throw new Error("fail");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  const field =
    "mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-600 focus:border-cyan-300/40 focus:bg-white/[0.07]";

  if (status === "sent") {
    return (
      <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/10 to-violet-500/10 px-6 py-10 text-center">
        <p className="text-lg text-white">Thank you. We have the enquiry.</p>
        <p className="mt-3 text-sm leading-relaxed text-zinc-400">
          We will reply to the email you entered, usually within one working
          day. If it is urgent, write directly to{" "}
          <a href="mailto:hello@oidigitals.net" className="text-cyan-300 hover:text-white">
            hello@oidigitals.net
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="oi-card space-y-5 rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/[0.06] via-white/[0.03] to-violet-500/[0.04] p-5 text-center sm:p-7"
    >
      <p className="hidden">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </p>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm text-zinc-400">
          Name
          <input name="name" required className={field} />
        </label>
        <label className="block text-sm text-zinc-400">
          Email
          <input name="email" type="email" required className={field} />
        </label>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm text-zinc-400">
          Company
          <input name="company" className={field} />
        </label>
        <label className="block text-sm text-zinc-400">
          What do you need?
          <select name="projectType" className={field} defaultValue="Web app or site">
            {TYPES.map((t) => (
              <option key={t} className="bg-zinc-900">
                {t}
              </option>
            ))}
          </select>
        </label>
      </div>
      <label className="block text-sm text-zinc-400">
        Project
        <textarea
          name="message"
          required
          rows={5}
          placeholder="What should the software do, who will use it, and when do you need a first working version?"
          className={`${field} resize-none`}
        />
      </label>
      <p className="text-xs leading-relaxed text-zinc-600">
        Enquiries stay private.{" "}
        <a href="/privacy" className="text-zinc-400 hover:text-white">
          Privacy
        </a>
      </p>
      <button
        type="submit"
        disabled={status === "sending"}
        className="oi-shine mx-auto w-full rounded-xl bg-gradient-to-r from-cyan-400 to-violet-400 px-5 py-3 text-sm font-medium text-zinc-950 transition hover:opacity-90 disabled:opacity-50 sm:w-auto"
      >
        {status === "sending" ? "Sending..." : "Send enquiry"}
      </button>
      {status === "error" ? (
        <p className="text-sm text-rose-300">
          The form did not send. Email{" "}
          <a href="mailto:hello@oidigitals.net" className="underline">
            hello@oidigitals.net
          </a>{" "}
          instead.
        </p>
      ) : null}
    </form>
  );
}
