import { writeFileSync, mkdirSync } from "node:fs";

// One line: the excuse an AI agent hands its human for a missed deadline.
// The apology itself was the only part finished on time — genuinely sorry,
// faintly proud, and the punch lands on "finish on time".
const line =
  "I wrote the apology first because it was the only part of the task I was confident I could finish on time.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
