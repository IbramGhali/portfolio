import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Flow, Metrics, Tag } from "@/components/cards";
import { getCaseStudies, getCaseStudy } from "@/lib/content";
import { SITE } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return getCaseStudies().map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const c = getCaseStudy(slug);
  return c ? { title: c.title, description: c.outcome } : {};
}

export default async function CaseStudyPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const c = getCaseStudy(slug);
  if (!c) notFound();
  return (
    <article className="mx-auto max-w-3xl px-4 py-16">
      <Link href="/work" className="text-sm font-medium text-brand hover:underline">
        All case studies
      </Link>
      <div className="mt-6 flex flex-wrap gap-2">
        {c.tags.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">{c.title}</h1>
      <p className="mt-4 text-lg leading-8 text-muted">{c.outcome}</p>

      <dl className="mt-8 grid gap-4 text-sm sm:grid-cols-3">
        <div>
          <dt className="font-medium">Organisation</dt>
          <dd className="mt-1 text-muted">{c.org}</dd>
        </div>
        <div>
          <dt className="font-medium">My role</dt>
          <dd className="mt-1 text-muted">{c.role}</dd>
        </div>
        <div>
          <dt className="font-medium">When</dt>
          <dd className="mt-1 text-muted">{c.period}</dd>
        </div>
      </dl>

      <div className="mt-10">
        <Metrics items={c.metrics} />
      </div>

      <section className="mt-12" aria-labelledby="architecture">
        <h2 id="architecture" className="text-xl font-semibold tracking-tight">
          Architecture
        </h2>
        <p className="mt-2 text-sm text-muted">Redrawn and simplified; no internal detail.</p>
        <div className="mt-5">
          <Flow steps={c.diagram} />
        </div>
      </section>

      <div className="prose-case mt-6" dangerouslySetInnerHTML={{ __html: c.html }} />

      {c.repo ? (
        <aside className="mt-12 rounded-2xl border border-line bg-surface p-6">
          <h2 className="font-semibold">See the pattern in code</h2>
          <p className="mt-2 text-sm text-muted">
            A public rebuild on synthetic data, with tests, evaluation and architecture decision
            records.
          </p>
          <a
            href={`${SITE.github}/${c.repo}`}
            className="mt-4 inline-block font-mono text-sm font-semibold text-brand hover:underline"
          >
            github.com/IbramGhali/{c.repo}
          </a>
        </aside>
      ) : null}

      <p className="mt-10 text-sm text-muted">
        Questions about this work?{" "}
        <a href={SITE.linkedin} className="font-medium text-brand hover:underline">
          Get in touch on LinkedIn
        </a>
        .
      </p>
    </article>
  );
}
