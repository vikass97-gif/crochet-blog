import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  headers() {
    return [{
      source: "/downloads/little-rose-v0.2-draft.pdf",
      headers: [
        { key: "X-Robots-Tag", value: "noindex" },
        { key: "Content-Disposition", value: 'attachment; filename="Little-Rose-v0.2-DRAFT.pdf"' },
      ],
    }];
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
