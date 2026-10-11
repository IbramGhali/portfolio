import Link from "next/link";
import type { CaseStudy, Metric, Step } from "@/lib/content";
import type { Repo } from "@/lib/site";
import { SITE } from "@/lib/site";

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full bg-accent-soft px-2.5 py-0.5 text-xs font-medium text-accent">
      {children}
    </span>
  );
}

export function Metrics({ items }: { items: Metric[] }) {
  return (
    <dl className="grid gap-4 sm:grid-cols-3">
      {items.map((m) => (
        <div key={m.label} className="rounded-xl border border-line bg-surface p-4">
          <dt className="sr-only">{m.label}</dt>
          <dd>
            <span className="block text-2xl font-semibold tracking-tight text-brand">{m.value}</span>
            <span className="mt-1 block text-sm text-muted">{m.label}</span>
          </dd>
        </div>
      ))}
    </dl>
  );
}

/** Architecture as an ordered flow. Plain HTML: readable, accessible, no client JavaScript. */
export function Flow({ steps }: { steps: Step[] }) {
  return (
    <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3" aria-label="Architecture flow">
      {steps.map((s, i) => (
        <li
          key={s.label}
          className="relative rounded-xl border border-line bg-surface p-4"
        >
          <span className="text-xs font-semibold text-accent">Step {i + 1}</span>
          <span className="mt-1 block font-medium">{s.label}</span>
          {s.note ? <span className="mt-1 block text-sm text-muted">{s.note}</span> : null}
        </li>
      ))}
    </ol>
  );
}

export function CaseCard({ c }: { c: CaseStudy }) {
  return (
    <article className="flex flex-col rounded-2xl border border-line bg-surface p-6 transition hover:border-brand">
      <div className="flex flex-wrap gap-2">
        {c.tags.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>
      <h3 className="mt-4 text-lg font-semibold tracking-tight">
        <Link href={`/work/${c.slug}`} className="after:absolute after:inset-0 relative">
          {c.title}
        </Link>
      </h3>
      <p className="mt-2 text-sm leading-6 text-muted">{c.outcome}</p>
      <p className="mt-4 text-xs text-muted">{c.org}</p>
    </article>
  );
}

export function RepoCard({ r }: { r: Repo }) {
  return (
    <article className="rounded-2xl border border-line bg-surface p-5">
      <h3 className="font-mono text-sm font-semibold">
        <a href={`${SITE.github}/${r.name}`} className="hover:text-brand">
          {r.name}
        </a>
      </h3>
      <p className="mt-2 text-sm leading-6 text-muted">{r.summary}</p>
      <p className="mt-3 text-sm font-medium text-accent">{r.result}</p>
    </article>
  );
}
