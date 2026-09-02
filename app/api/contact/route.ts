import { NextResponse } from "next/server";

/** Inbox that actually receives mail. Public site still shows hello@oidigitals.net. */
const INBOX =
  process.env.CONTACT_INBOX?.trim() || "faraz.online@hotmail.com";

export async function POST(req: Request) {
  let body: Record<string, string> = {};
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim();
  const message = String(body.message || "").trim();
  const company = String(body.company || "").trim();
  const projectType = String(body.projectType || "").trim();

  if (!name || !email || !message || !email.includes("@")) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const payload = {
    name,
    email,
    company,
    projectType,
    message,
    _replyto: email,
    _subject: `OI Digitals enquiry from ${name}`,
    _template: "table",
    _captcha: "false",
  };

  const res = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(INBOX)}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    return NextResponse.json({ ok: false }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
