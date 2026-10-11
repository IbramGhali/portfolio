import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch about senior, lead and architect roles in AI engineering.",
};

export default function Contact() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>
      <p className="mt-4 leading-7 text-muted">
        I am interested in senior, lead and architect roles in AI engineering, and in
        conversations about putting AI into production responsibly. The quickest way to reach me
        is LinkedIn.
      </p>
      <ul className="mt-8 space-y-3">
        <li>
          <a href={SITE.linkedin} className="font-medium text-brand hover:underline">
            LinkedIn: in/ibramghali
          </a>
        </li>
        <li>
          <a href={SITE.github} className="font-medium text-brand hover:underline">
            GitHub: IbramGhali
          </a>
        </li>
      </ul>
    </div>
  );
}
