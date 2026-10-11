// Content gate: the site cannot ship while any claim still needs Ibram's confirmation, or if
// any page uses an em dash or mentions a previous employer by name.
import fs from "node:fs";
import path from "node:path";

const ROOTS = ["content", "app", "lib", "components"];
const BLOCKED = [
  { pattern: /\[confirm[^\]]*\]/i, why: "unconfirmed claim" },
  { pattern: /—/, why: "em dash" },
  {
    pattern: /learning online|viva energy|easira|next level account|\bBAS\b|\bXero\b/i,
    why: "employer, product or vendor name",
  },
];

const problems = [];
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (/\.(mdx?|tsx?|css)$/.test(entry.name)) {
      fs.readFileSync(full, "utf8").split("\n").forEach((line, i) => {
        for (const rule of BLOCKED) {
          if (rule.pattern.test(line)) problems.push(`${full}:${i + 1}: ${rule.why}: ${line.trim().slice(0, 90)}`);
        }
      });
    }
  }
}

ROOTS.filter((r) => fs.existsSync(r)).forEach(walk);
if (problems.length) {
  console.error(`check-content: ${problems.length} problem(s)\n` + problems.join("\n"));
  process.exit(1);
}
console.log("check-content: ok");
