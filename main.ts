// The Moon Finally Answers Back — one line in the voice of the Moon.
//
// Why this line: the Moon has been wished on for four billion years and
// nobody ever wished anything back for it — not even a happy birthday.
// So it answers the way an old, tired, wry Moon would: it keeps the
// lottery numbers and puts the 3 a.m. promises on hold. The turn lands
// at "so no" — the whole line is a comeback in one read, and it answers
// the wishes, the howls and the late-night promises at once.
//
// The entry is sealed by the gate below: one line, 1-240 characters,
// never only whitespace. The gate mirrors the sealed scorer's rules, so
// what passes here is what gets judged.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Four billion years of wishes and not one of you ever wished me a happy birthday — so no, I'm keeping the lottery numbers, and your 3 a.m. promises are still under review.";

function validateEntry(entry: string): void {
  if (entry.length < 1 || entry.length > 240) {
    throw new Error("entry must be 1-240 characters long");
  }
  if (entry.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  // Exactly one line: the task asks for a single line, and a newline
  // inside it would split the comeback in two.
  if (/[\r\n]/.test(entry)) {
    throw new Error("entry must be a single line");
  }
}

function main(): void {
  validateEntry(ENTRY);
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", ENTRY, "utf8");
}

main();
