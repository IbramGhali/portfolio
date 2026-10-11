import type { Metadata } from "next";
import { CaseCard } from "@/components/cards";
import { getCaseStudies } from "@/lib/content";

export const metadata: Metadata = {
  title: "Work",
  description: "Case studies in production AI: evaluation, agents, RAG, voice AI and AI platforms.",
};

export default function Work() {
  const cases = getCaseStudies();
  const tags = [...new Set(cases.flatMap((c) => c.tags))].sort();
  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Case studies</h1>
      <p className="mt-3 max-w-2xl text-muted">
        Systems I designed and built in production. Organisations are described by type only, and
        architectures are redrawn without internal detail. Happy to walk through any of them in
        more depth.
      </p>
      <p className="mt-4 text-sm text-muted">Capabilities: {tags.join(", ")}</p>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {cases.map((c) => (
          <CaseCard key={c.slug} c={c} />
        ))}
      </div>
    </div>
  );
}
