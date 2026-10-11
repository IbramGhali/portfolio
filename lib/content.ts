// Case studies are Markdown files with frontmatter in content/case-studies. They are read and
// rendered at build time; nothing is fetched at runtime.
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

export type Metric = { value: string; label: string };
export type Step = { label: string; note?: string };

export type CaseStudy = {
  slug: string;
  title: string;
  order: number;
  outcome: string;
  tags: string[];
  org: string;
  role: string;
  period: string;
  repo?: string;
  metrics: Metric[];
  diagram: Step[];
  html: string;
};

const DIR = path.join(process.cwd(), "content", "case-studies");

export function getCaseStudies(): CaseStudy[] {
  return fs
    .readdirSync(DIR)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
    .map((file) => {
      const { data, content } = matter(fs.readFileSync(path.join(DIR, file), "utf8"));
      return {
        slug: String(data.slug),
        title: String(data.title),
        order: Number(data.order ?? 99),
        outcome: String(data.outcome),
        tags: (data.tags as string[]) ?? [],
        org: String(data.org),
        role: String(data.role),
        period: String(data.period ?? ""),
        repo: data.repo ? String(data.repo) : undefined,
        metrics: (data.metrics as Metric[]) ?? [],
        diagram: (data.diagram as Step[]) ?? [],
        html: marked.parse(content, { async: false }) as string,
      };
    })
    .sort((a, b) => a.order - b.order);
}

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return getCaseStudies().find((c) => c.slug === slug);
}
