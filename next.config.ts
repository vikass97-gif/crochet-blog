import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  headers() {
    return [
      { url: "/downloads/little-rose-v0.2-draft.pdf", filename: "Little-Rose-v0.2-DRAFT.pdf" },
      { url: "/downloads/little-rose-v0.3-review.pdf", filename: "Little-Rose-v0.3-REVIEW.pdf" },
    ].map(({ url, filename }) => ({
      source: url,
      headers: [
        { key: "X-Robots-Tag", value: "noindex" },
        { key: "Content-Disposition", value: `attachment; filename="${filename}"` },
      ],
    }));
  },
  cacheComponents: true,
  partialPrefetching: true,
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
