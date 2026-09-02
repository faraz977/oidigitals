#!/usr/bin/env node
import { spawnSync } from "node:child_process";
import { mkdirSync } from "node:fs";
import path from "node:path";

const chrome =
  process.env.CHROME_PATH ||
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const out = path.resolve("public/oi-digitals-work.pdf");
const url = process.env.PDF_URL || "http://localhost:3000/work/print";

mkdirSync("public", { recursive: true });

const result = spawnSync(
  chrome,
  [
    "--headless=new",
    "--disable-gpu",
    "--no-pdf-header-footer",
    "--virtual-time-budget=60000",
    "--run-all-compositor-stages-before-draw",
    `--print-to-pdf=${out}`,
    url,
  ],
  { stdio: "inherit" },
);

if (result.status !== 0) {
  console.error("PDF failed. Is the site running? npm run dev");
  process.exit(result.status ?? 1);
}

console.log("Wrote", out);
