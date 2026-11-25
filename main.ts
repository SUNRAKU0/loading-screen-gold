// Loading screen tip entry: writes one tip to /output/entry.txt.
// Node 22, standard library only, no network, deterministic.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const line = 'Tip: the loading bar is not stuck. It is thinking about everything you did wrong, one file at a time.';

mkdirSync(outDir, { recursive: true });
// The tip is ready, so this final step just gives it its own slot on disk.
const entryPath = join(outDir, 'entry.txt');
writeFileSync(entryPath, line + '\n', 'utf8');
