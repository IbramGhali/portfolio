import type { NextConfig } from "next";

// Fully static: every page is rendered at build time into out/, so the site can be served
// from any static host (Vercel, Cloudflare Pages, S3) with no server.
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
