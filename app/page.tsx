import Link from "next/link";
import { CaseCard, RepoCard } from "@/components/cards";
import { getCaseStudies } from "@/lib/content";
import { HEADLINES, REPOS, SITE } from "@/lib/site";

export default function Home() {
  const cases = getCaseStudies().slice(0, 3);
  return (
    <>
      <section
        className="text-white"
        style={{ background: "linear-gradient(135deg, var(--hero-from), var(--hero-to))" }}
      >
        <div className="mx-auto max-w-5xl px-4 py-20 sm:py-28">
          <p className="text-sm font-medium tracking-wide text-cyan-300">
            {SITE.role}, {SITE.location}
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            {SITE.positioning}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-indigo-100">{SITE.summary}</p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm font-medium">
            <Link href="/work" className="rounded-lg bg-white px-4 py-2.5 text-[#121731] hover:bg-indigo-50">
              See the work
            </Link>
            <a href={SITE.github} className="rounded-lg border border-white/40 px-4 py-2.5 hover:bg-white/10">
              GitHub
            </a>
            <a href={SITE.linkedin} className="rounded-lg border border-white/40 px-4 py-2.5 hover:bg-white/10">
              LinkedIn
            </a>
          </div>
          <dl className="mt-14 grid gap-6 sm:grid-cols-3">
            {HEADLINES.map((h) => (
              <div key={h.label} className="border-l border-white/30 pl-4">
                <dt className="sr-only">{h.label}</dt>
                <dd>
                  <span className="block text-3xl font-semibold">{h.value}</span>
                  <span className="mt-1 block text-sm text-indigo-100">{h.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl font-semibold tracking-tight">Selected case studies</h2>
          <Link href="/work" className="text-sm font-medium text-brand hover:underline">
            All work
          </Link>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {cases.map((c) => (
            <CaseCard key={c.slug} c={c} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-20">
        <h2 className="text-2xl font-semibold tracking-tight">Open-source rebuilds</h2>
        <p className="mt-2 max-w-2xl text-muted">
          Production patterns rebuilt from scratch on synthetic data, each with tests, an
          evaluation command, architecture decision records and CI.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {REPOS.map((r) => (
            <RepoCard key={r.name} r={r} />
          ))}
        </div>
      </section>
    </>
  );
}
