export const SITE = {
  name: "Ibram Ghali",
  role: "Senior AI Engineer",
  location: "Melbourne, Australia",
  positioning: "I design, ship and govern production AI.",
  summary:
    "LLM pipelines, AI agents, RAG assistants and the evaluation and controls that make them safe to rely on.",
  github: "https://github.com/IbramGhali",
  linkedin: "https://www.linkedin.com/in/ibramghali",
  url: "https://ibramghali.vercel.app",
};

export type Repo = { name: string; summary: string; result: string; tags: string[] };

// Public repositories: rebuilds of production patterns on synthetic data.
export const REPOS: Repo[] = [
  {
    name: "llm-compliance-judge",
    summary: "Two-stage LLM judge with verbatim-evidence checks, a human review queue and a CI regression gate.",
    result: "Golden-set macro F1 0.89, kappa 0.90",
    tags: ["Evaluation"],
  },
  {
    name: "tax-statement-engine",
    summary: "Deterministic figures, cross-source validation with a blocking gate, and one grounded LLM call.",
    result: "720 of 720 figures exact against ground truth",
    tags: ["Platform", "Data"],
  },
  {
    name: "rag-slack-assistant",
    summary: "Policy Q&A in Slack with citations checked in code and refusals below an evidence threshold.",
    result: "92% answer accuracy, 10 of 10 unanswerable refused",
    tags: ["RAG"],
  },
  {
    name: "voice-ai-receptionist",
    summary: "Vapi voice agent with tool-calling webhooks that enforce bookings, identity and escalation.",
    result: "30 of 30 simulated calls, 0 hallucinated bookings",
    tags: ["Voice AI", "Agents"],
  },
  {
    name: "llm-gateway",
    summary: "One API across Claude, GPT and Gemini with team budgets, redaction before logging and fallbacks.",
    result: "About 1 ms overhead, 0 PII leaks",
    tags: ["Platform"],
  },
];

export const HEADLINES = [
  { value: "6", label: "departments on one internal AI platform I led" },
  { value: "3 to 1", label: "compliance workflows consolidated into one LLM pipeline" },
  { value: "~1,100", label: "tests behind a multi-tenant tax statement SaaS I architected" },
];
