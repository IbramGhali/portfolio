# portfolio

Source for Ibram Ghali's portfolio site: case studies in production AI and links to the public demo repositories.

Next.js (App Router, TypeScript) with Tailwind, built as a fully static export. Case studies are Markdown files with frontmatter in `content/case-studies/`, rendered at build time. Architecture diagrams are plain HTML, so pages ship almost no client JavaScript.

## Run locally

```bash
npm ci
npm run dev            # http://localhost:3000
npm run build          # static site in out/
npm run check:content  # fails while any claim is marked [confirm]
```

## Content rules

- Organisations are described by type only. No employer, product, client or vendor names, logos or internal detail.
- Architectures are redrawn and simplified.
- Every number on the site must be confirmed before release; `npm run check:content` blocks the build in CI until no `[confirm]` marker remains.

## Quality

Lighthouse (mobile, local build): accessibility 100, best practices 100, SEO 100. Home page LCP 137 ms and CLS 0, measured locally without network throttling. Light and dark mode follow the system setting.
