export const siteConfig = {
  name: "Loop & Stitch",
  description:
    "Learn crochet with clear beginner guides, practical yarn advice, and inspiration for your first handmade projects.",
  language: "en",
};

export function getSiteUrl(): URL | undefined {
  const value = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (!value) return undefined;

  const url = new URL(value);

  if (!["http:", "https:"].includes(url.protocol)) {
    throw new Error(
      "NEXT_PUBLIC_SITE_URL must start with http:// or https://"
    );
  }

  return new URL(url.origin);
}
