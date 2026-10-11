// Post-build step for the static export.
//
// `next build` with `output: "export"` writes segment prefetch payloads as nested folders
// (out/about/__next.about/__PAGE__.txt), but the client router requests the dotted form
// (out/about/__next.about.__PAGE__.txt). Without this step those prefetches 404 on a plain
// static host and log console errors. This copies each payload to the dotted name as well.
import fs from "node:fs";
import path from "node:path";

const OUT = path.resolve("out");
let copied = 0;

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name.startsWith("__next.")) flatten(full, dir);
      else walk(full);
    }
  }
}

function flatten(segmentDir, parent) {
  const prefix = path.basename(segmentDir);
  const stack = [[segmentDir, prefix]];
  while (stack.length) {
    const [dir, name] = stack.pop();
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      const dotted = `${name}.${entry.name}`;
      if (entry.isDirectory()) stack.push([full, dotted]);
      else {
        fs.copyFileSync(full, path.join(parent, dotted));
        copied += 1;
      }
    }
  }
}

walk(OUT);
console.log(`flatten-segments: wrote ${copied} prefetch payloads`);
