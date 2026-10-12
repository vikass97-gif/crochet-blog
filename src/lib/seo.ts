import type { Metadata } from "next";
import { getSiteUrl, siteConfig } from "./site-config";

export function pageMetadata(title: string, description: string, path: string, article = false): Metadata {
  const base = getSiteUrl();
  const url = base ? new URL(path, base).href : undefined;
  const images = base ? [{ url: new URL("/images/crochet.jpg", base).href, alt: "Yarn, crochet hook and a handmade swatch" }] : undefined;
  return {
    title, description,
    alternates: url ? { canonical: url } : undefined,
    openGraph: { title, description, siteName: siteConfig.name, type: article ? "article" : "website", url, images },
    twitter: { card: "summary_large_image", title, description, images: images?.map(image => image.url) },
  };
}
