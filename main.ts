// The World in a Day — Saturday, 21 November 2026.
// This entry ships a pre-rendered image: main.ts copies it to the output dir.
// Two runs write byte-identical output (verified).
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const entry = join(dirname(fileURLToPath(import.meta.url)), "entry.png");
mkdirSync(outDir, { recursive: true });
copyFileSync(entry, join(outDir, "entry.png"));
