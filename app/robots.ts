import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/work/print", "/api/"],
    },
    sitemap: "https://oidigitals.net/sitemap.xml",
  };
}
