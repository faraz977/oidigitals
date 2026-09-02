import Fuse from "fuse.js";
import {
  ABOUT_US,
  EMAIL,
  KNOWLEDGE,
  PHONE,
  PROCESS,
  START,
  WHERE,
} from "@/lib/chat-knowledge";
import { SITE } from "@/lib/site";

const fuse = new Fuse(KNOWLEDGE, {
  includeScore: true,
  threshold: 0.38,
  ignoreLocation: true,
  keys: [
    { name: "q", weight: 0.7 },
    { name: "tags", weight: 0.3 },
  ],
});

const STUDIO =
  /\b(oi|digitals|studio|hire|hiring|brief|contact|whatsapp|shipperdock|trackifta|truckerwire|bizbill|fmcsaready|omer|yz enterprises|abdul|chatbot|dock run|source code|repository|quote|price|timeline|karachi|nazimabad)\b/i;

const DEFINE =
  /^(what|who|where|when|why|how|which|explain|define|describe|tell me)\b/i;

const TECH: Record<string, string> = {
  python:
    "Python is a programming language used for websites, data work, automation, and AI. Code is meant to be readable. We use it on scrapers, scripts, and backends when a brief needs that.",
  javascript:
    "JavaScript is the language of the web. Browsers run it, and servers can run it too. Most product sites and many apps we ship use it on the front end.",
  js: "JavaScript is the language of the web. Browsers run it, and servers can run it too.",
  typescript:
    "TypeScript is JavaScript with types. It catches mistakes before the app ships. We use it on most web and app work.",
  react:
    "React is a library for building screens as components. We use it for product sites, dashboards, and many mobile apps.",
  "next.js":
    "Next.js is a React framework for websites and web apps. Pages, APIs, and shipping live in one project.",
  "next js":
    "Next.js is a React framework for websites and web apps. Pages, APIs, and shipping live in one project.",
  html: "HTML is the structure of a web page. Headings, forms, and links are HTML. CSS and JavaScript sit on top of it.",
  css: "CSS is how a page looks. Layout, type, color, and motion. We write it with the interface, not as an afterthought.",
  api: "An API is how one system talks to another. Apps call APIs to log in, save records, or pull live data.",
  sql: "SQL is the language used to ask a database for rows. Reports, filters, and ledgers usually sit on top of it.",
};

function clean(text: string) {
  return text
    .toLowerCase()
    .replace(/[?!.,]/g, " ")
    .replace(/\b(\w+)\s+\1\b/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
}

function topicOf(q: string) {
  return q
    .replace(
      /^(please\s+)?(what|who|where|when|why|how|which|tell me|explain|define|describe)(\s+(is|are|was|were|does|do|did|can|to|the|a|an|your|oi|digitals))*\s+/,
      "",
    )
    .replace(/\s+/g, " ")
    .trim();
}

const BUILD =
  /\b(create|make|build|develop|ship|write|code)\b.{0,40}\b(software|app|apps|application|website|site|platform|system|product|program)\b/;

function facts(text: string): string | null {
  const q = text.toLowerCase();
  if (/\b(phone|mobile|cell|telephone|call you|whatsapp number)\b/.test(q)) {
    return PHONE;
  }
  if (/\bnumber\b/.test(q) && /\b(oi|digitals|studio|your|contact)\b/.test(q)) {
    return PHONE;
  }
  if (
    /\b(email|e-mail|mail)\b/.test(q) &&
    /\b(oi|digitals|studio|your|contact|hello|address|write)\b/.test(q)
  ) {
    return EMAIL;
  }
  if (/\bwhatsapp\b/.test(q) && !/\bchecker\b/.test(q)) {
    return `WhatsApp is ${SITE.phone}. Tap the green WhatsApp button on this chat.`;
  }
  if (
    /\b(where|location|address|office|city|karachi|nazimabad|pakistan|based)\b/.test(
      q,
    ) &&
    /\b(you|your|oi|digitals|studio|office|located|based)\b/.test(q)
  ) {
    return WHERE;
  }
  if (
    /\b(about us|about oi|who is oi|who are oi|company profile|tell me about (the )?(studio|company|oi))\b/.test(
      q,
    )
  ) {
    return ABOUT_US;
  }
  if (/\b(hire|hiring|start a project|begin a project|get in touch)\b/.test(q)) {
    return START;
  }
  if (BUILD.test(q)) return PROCESS;
  if (
    /^how (to|do i|can i|do we|can we|would i)\b/.test(q) &&
    /\b(software|app|website|project|product|brief|studio)\b/.test(q)
  ) {
    return PROCESS;
  }
  return null;
}

function localMatch(text: string): string | null {
  const q = clean(text);
  if (/^(hi|hello|hey|salam|assalam|yo)\b/.test(q)) {
    return "Hello. Ask about OI Digitals, a build, our work, or any general question.";
  }
  if (/^(ok|okay|cool|nice|great|good)\b/.test(q) && q.length < 16) {
    return "Good. What else do you want to know?";
  }
  if (/^(thanks|thank you|shukria|thx)\b/.test(q)) {
    return "You are welcome.";
  }
  const fact = facts(q);
  if (fact) return fact;
  const topic = topicOf(q);
  if (TECH[topic]) return TECH[topic];
  const hit = fuse.search(q)[0];
  const score = hit?.score ?? 1;
  if (hit && score < 0.32) return hit.item.a;
  if (STUDIO.test(q)) {
    if (hit && score < 0.48) return hit.item.a;
    if (/\b(phone|email|address|where|whatsapp|karachi)\b/.test(q)) {
      return ABOUT_US;
    }
    return START;
  }
  if (/^how (to|do i|can i|do we|can we)\b/.test(q)) {
    return PROCESS;
  }
  if (DEFINE.test(q)) return null;
  if (hit && score < 0.4) return hit.item.a;
  return null;
}

export async function replyTo(text: string): Promise<string> {
  const local = localMatch(text);
  if (local) return local;
  try {
    const res = await fetch(`/api/ask?q=${encodeURIComponent(text)}`);
    if (res.ok) {
      const data = (await res.json()) as { text?: string };
      if (data.text) return data.text;
    }
  } catch {
    /* fall through */
  }
  return "I could not find a clear answer for that. Ask another way, or send a brief on Contact if you want something built.";
}
