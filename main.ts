// gta6-meme-x-01 entry for @wibumetal — "Leonida Daily" (Node 22, stdlib only).
// The judged artifact is the X post named in POST.json; this program's only
// job is to deliver POST.json from the bot directory to the output directory
// where the gate reads it.
//
// Local check:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR || "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

mkdirSync(outputDir, { recursive: true });

try {
  copyFileSync(join(botDir, "POST.json"), join(outputDir, "POST.json"));
} catch (error) {
  const message = error instanceof Error ? error.message : String(error);
  console.error(`Could not copy POST.json from ${botDir}: ${message}`);
  process.exit(1);
}
