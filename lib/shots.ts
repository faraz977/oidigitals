import { readFileSync, readdirSync, statSync } from "fs";
import { join } from "path";
import type { WorkItem } from "@/lib/work";

function pngSize(abs: string): { w: number; h: number } | null {
  try {
    const buf = readFileSync(abs);
    if (buf.toString("ascii", 1, 4) !== "PNG") return null;
    return { w: buf.readUInt32BE(16), h: buf.readUInt32BE(20) };
  } catch {
    return null;
  }
}

/** Phone if the file name says phone, or the image is taller than it is wide. */
export function shotKind(src: string): "phone" | "web" {
  const file = (src.split("/").pop() ?? src).toLowerCase();
  if (file.includes("phone")) return "phone";
  if (file.includes("web") || file.includes("desk")) return "web";
  const abs = join(process.cwd(), "public", src.replace(/^\//, ""));
  const size = pngSize(abs);
  if (size && size.h / size.w > 1.35) return "phone";
  return "web";
}

/**
 * Drop new screenshots in public/work/{slug}/
 *   phone-01.png  → phone frame (9 / 19.5)
 *   web-01.png    → browser frame (16 / 10)
 *   desk-01.png   → desktop frame (16 / 10)
 *   any other image → web frame
 * Then add or update the matching entry in lib/work.ts.
 */
export function folderShots(slug: string): string[] {
  const dir = join(process.cwd(), "public/work", slug);
  try {
    if (!statSync(dir).isDirectory()) return [];
  } catch {
    return [];
  }
  return readdirSync(dir)
    .filter((file) => /\.(png|jpe?g|webp)$/i.test(file))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((file) => `/work/${slug}/${file}`);
}

export function galleryFor(item: WorkItem): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const src of [...(item.gallery ?? []), ...folderShots(item.slug)]) {
    if (seen.has(src)) continue;
    seen.add(src);
    out.push(src);
  }
  return out;
}
