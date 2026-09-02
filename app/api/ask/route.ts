import { NextResponse } from "next/server";

const UA = "OIDigitalsChat/1.0 (hello@oidigitals.net)";

function topicOf(raw: string) {
  return raw
    .replace(/[?!.,]/g, " ")
    .replace(
      /^(please\s+)?(what|who|where|when|why|how|which|tell me|explain|define|describe)(\s+(is|are|was|were|does|do|did|can|the|a|an))*\s+/i,
      "",
    )
    .replace(/\s+/g, " ")
    .trim();
}

async function wikiSearch(query: string) {
  const url = new URL("https://en.wikipedia.org/w/api.php");
  url.searchParams.set("action", "query");
  url.searchParams.set("list", "search");
  url.searchParams.set("srsearch", query);
  url.searchParams.set("srlimit", "5");
  url.searchParams.set("format", "json");
  const res = await fetch(url, {
    headers: { "User-Agent": UA },
    next: { revalidate: 1800 },
  });
  if (!res.ok) return [];
  const data = (await res.json()) as {
    query?: { search?: { title: string }[] };
  };
  return data.query?.search?.map((row) => row.title) ?? [];
}

async function wikiSummary(title: string) {
  const res = await fetch(
    `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`,
    { headers: { "User-Agent": UA }, next: { revalidate: 1800 } },
  );
  if (!res.ok) return null;
  const data = (await res.json()) as {
    extract?: string;
    type?: string;
    title?: string;
  };
  if (!data.extract || data.type === "disambiguation") return null;
  return data.extract.split("\n")[0]?.slice(0, 480) ?? null;
}

async function duck(query: string) {
  const url = new URL("https://api.duckduckgo.com/");
  url.searchParams.set("q", query);
  url.searchParams.set("format", "json");
  url.searchParams.set("no_html", "1");
  url.searchParams.set("skip_disambig", "1");
  const res = await fetch(url, {
    headers: { "User-Agent": UA },
    next: { revalidate: 1800 },
  });
  if (!res.ok) return null;
  const data = (await res.json()) as {
    AbstractText?: string;
    RelatedTopics?: { Text?: string }[];
  };
  if (data.AbstractText) return data.AbstractText.slice(0, 480);
  const related = data.RelatedTopics?.find((row) => row.Text)?.Text;
  return related ? related.slice(0, 480) : null;
}

export async function GET(req: Request) {
  const raw = new URL(req.url).searchParams.get("q")?.trim() ?? "";
  if (raw.length < 2 || raw.length > 160) {
    return NextResponse.json({ text: null });
  }

  if (
    /\b(hire|hiring|whatsapp|oidigitals|shipperdock|contact us|phone number|nazimabad|karachi)\b/i.test(
      raw,
    )
  ) {
    return NextResponse.json({ text: null });
  }

  if (
    /^(how to|how do|how can|how would|create|make|build)\b/i.test(raw) ||
    /\b(create|make|build)\b.+\b(software|app|website)\b/i.test(raw)
  ) {
    return NextResponse.json({ text: null });
  }

  const topic = topicOf(raw);
  const words = topic.split(" ").filter(Boolean);
  if (
    !topic ||
    words.length > 4 ||
    /^(to|create|make|build|how)$/i.test(words[0] ?? "")
  ) {
    return NextResponse.json({ text: null });
  }
  const queries = Array.from(
    new Set(
      [
        topic,
        `${topic} programming`,
        topic.toLowerCase() === "python"
          ? "Python (programming language)"
          : "",
        topic.toLowerCase() === "java" ? "Java (programming language)" : "",
      ].filter(Boolean),
    ),
  );

  try {
    for (const query of queries) {
      const titles = await wikiSearch(query);
      for (const title of titles) {
        const extract = await wikiSummary(title);
        if (extract) return NextResponse.json({ text: extract });
      }
    }
    const instant = await duck(topic);
    if (instant) return NextResponse.json({ text: instant });
  } catch {
    /* fall through */
  }

  return NextResponse.json({ text: null });
}
