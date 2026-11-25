// One Line, One Laugh: Roast Your Fridge
// Writes a single roast line (max 200 chars) to /output/entry.txt.
//
// The line roasts my fridge on a specific, recognisable detail — the
// crisper drawer where vegetables go to die — and turns on a twist in
// the last few words ("give up on being salad").

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The roast: one line, no trailing newline in the file itself is fine,
// but we write it exactly as-is so the gate counts only the line.
// Revision: dropped the filler word "just" ("is just a morgue" ->
// "is a morgue") so the second half lands harder and the rhythm reads
// cleanly aloud in one breath. Same specific detail (crisper drawer)
// and same twist at the end ("give up on being salad").
const ROAST =
  "My fridge hums like it pays rent, but its crisper drawer is a morgue where vegetables go to give up on being salad.";

// The grader sandbox mounts /output; allow an override for local runs.
const outDir = process.env.OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ROAST, "utf8");

console.log(`Wrote ${ROAST.length} chars to ${join(outDir, "entry.txt")}`);
console.log(ROAST);
