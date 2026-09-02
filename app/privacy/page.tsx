import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "How OI Digitals treats client names, source code, and data on the public site.",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-24">
      <p className="text-[11px] uppercase tracking-[0.28em] text-zinc-500">
        Policy
      </p>
      <h1 className="mt-4 text-4xl font-medium tracking-tight text-white">
        Client privacy
      </h1>
      <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-zinc-400">
        <p>
          This site shows software we have shipped. Named products appear
          when we have the right to show them. Client work is described by
          what we built. We do not publish another company&apos;s source,
          admin panel, or customer data.
        </p>
        <div>
          <h2 className="text-sm font-medium text-white">What we publish</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>Products we own, with live links and screens we created.</li>
            <li>
              Client work by what we built. Legal names stay off this site
              unless we have written permission.
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-medium text-white">What we never publish</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>Client repositories, credentials, or databases.</li>
            <li>Unreleased screens from a private engagement.</li>
            <li>End-user data, invoices, or login details from a client system.</li>
          </ul>
        </div>
        <p>
          Enquiries sent through the contact form or to hello@oidigitals.net
          stay private. We do not sell or publish them.
        </p>
        <p>
          Your project is treated the same. We will not add it to{" "}
          <Link href="/work" className="text-zinc-200 hover:text-white">
            Work
          </Link>{" "}
          unless you ask in writing.
        </p>
      </div>
    </div>
  );
}
