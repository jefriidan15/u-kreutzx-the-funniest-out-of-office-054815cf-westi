// The Funniest Out-of-Office — @westi7460 entry.
// Writes one original out-of-office line to /output/entry.txt.
// One line, under 140 characters, no trailing newline. Deterministic output.
import { writeFileSync, mkdirSync } from "node:fs";

const ENTRY =
  "I'm out of the office until Monday. My cat is watching my inbox and has already marked three of your emails as spam out of spite.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
