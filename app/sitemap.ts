import type { MetadataRoute } from "next";
import { WORK } from "@/lib/work";

const site = "https://oidigitals.net";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/work", "/about", "/privacy", "/contact"].map((path) => ({
    url: `${site}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const work = WORK.map((item) => ({
    url: `${site}/work/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...pages, ...work];
}
