export const siteConfig = {
  name: "Loop & Stitch",
  description:
    "Explore crochet inspiration, free beginner guides, and our upcoming PDF pattern collection, starting with flowers and growing into more handmade projects.",
  language: "en",
  url: "https://crochet-blog-26tq.vercel.app",
};

export function getSiteUrl(): URL {
  const value = process.env.NEXT_PUBLIC_SITE_URL?.trim() || siteConfig.url;

  const url = new URL(value);

  if (!["http:", "https:"].includes(url.protocol)) {
    throw new Error(
      "NEXT_PUBLIC_SITE_URL must start with http:// or https://"
    );
  }

  return new URL(url.origin);
}
