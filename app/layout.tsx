import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { SITE } from "@/lib/site";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: `${SITE.name}, ${SITE.role}`, template: `%s | ${SITE.name}` },
  description: `${SITE.positioning} ${SITE.summary}`,
  openGraph: { title: `${SITE.name}, ${SITE.role}`, description: SITE.summary, type: "website" },
};

const NAV = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="flex min-h-screen flex-col">
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:p-3">
          Skip to content
        </a>
        <header className="border-b border-line bg-surface/80 backdrop-blur">
          <nav
            aria-label="Main"
            className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-4"
          >
            <Link href="/" className="font-semibold tracking-tight">
              {SITE.name}
            </Link>
            <ul className="flex gap-5 text-sm text-muted">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-text">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        <main id="main" className="flex-1">
          {children}
        </main>
        <footer className="border-t border-line">
          <div className="mx-auto flex max-w-5xl flex-wrap justify-between gap-3 px-4 py-6 text-sm text-muted">
            <span>
              {SITE.name}, {SITE.location}
            </span>
            <span className="flex gap-4">
              <a href={SITE.github} className="hover:text-text">GitHub</a>
              <a href={SITE.linkedin} className="hover:text-text">LinkedIn</a>
            </span>
          </div>
        </footer>
      </body>
    </html>
  );
}
