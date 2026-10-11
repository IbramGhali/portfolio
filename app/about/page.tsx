import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: "How I work on production AI, and what I have built.",
};

const PRINCIPLES = [
  {
    title: "Code for what is deterministic, models for judgement",
    body: "Figures, rules, permissions and bookings belong in tested code. Models do the work that needs language or judgement, and their output is checked before anyone relies on it.",
  },
  {
    title: "Measure before and after every change",
    body: "Golden sets, regression gates in CI and production telemetry, so a prompt or model change is a measured decision rather than a hope.",
  },
  {
    title: "Govern by design",
    body: "Human review where it matters, redaction before logging, budgets enforced centrally, and an audit trail of which prompt, rule and model produced each result.",
  },
  {
    title: "Ship, then operate",
    body: "Runbooks, alerts and cost visibility are part of the build, not an afterthought.",
  },
];

export default function About() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">About</h1>
      <div className="mt-6 space-y-4 leading-7 text-muted">
        <p>
          I am a {SITE.role.toLowerCase()} based in {SITE.location}. I design, build and run AI
          systems that organisations depend on: LLM pipelines that review thousands of calls a
          month, internal platforms that put AI in front of whole departments, agents that act
          within firm limits, and the evaluation that keeps them honest.
        </p>
        <p>
          Before AI engineering I worked in data analytics and automation, which is where the
          habit of measuring everything comes from.
        </p>
      </div>

      <h2 className="mt-12 text-xl font-semibold tracking-tight">How I work</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {PRINCIPLES.map((p) => (
          <section key={p.title} className="rounded-2xl border border-line bg-surface p-5">
            <h3 className="font-medium">{p.title}</h3>
            <p className="mt-2 text-sm leading-6 text-muted">{p.body}</p>
          </section>
        ))}
      </div>

      <h2 className="mt-12 text-xl font-semibold tracking-tight">Leadership and consulting</h2>
      <p className="mt-3 leading-7 text-muted">
        I have led engineering rebuilds and run AI-assisted engineering teams with written
        invariants and test gates.
      </p>
    </div>
  );
}
