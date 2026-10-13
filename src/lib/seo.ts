import type { Metadata } from "next";
import { guideImages } from "./guide-images";
import { getSiteUrl, siteConfig } from "./site-config";

export function pageMetadata(title: string, description: string, path: string, article = false): Metadata {
  const base = getSiteUrl();
  const url = base ? new URL(path, base).href : undefined;
  const covers: Record<string, { path: string; alt: string }> = {
    "/": { path: "/images/flowers/hero-pink-flower.webp", alt: "Pink crochet flower in a ceramic vase" },
    "/about": { path: "/images/collection/crochet-basket.webp", alt: "Handmade crochet basket and yarn" },
    "/shop": { path: "/images/collection/crochet-basket.webp", alt: "Crochet collection inspiration with yarn and a handmade basket" },
    "/shop/everyday-crochet-bag": { path: "/images/bags/everyday-bag.webp", alt: "Cream crochet bag inspiration" },
    "/shop/crochet-roses": { path: "/images/flowers/roses.webp", alt: "Crochet rose and bouquet inspiration" },
    "/shop/crochet-sunflowers": { path: "/images/flowers/sunflowers.webp", alt: "Crochet sunflower inspiration" },
    "/shop/crochet-flower-bouquet": { path: "/images/flowers/bouquet.webp", alt: "Pastel crochet bouquet inspiration" },
    "/blog/your-first-crochet-toolkit": { path: "/images/blog/toolkit.webp", alt: "A beginner crochet toolkit" },
    "/blog/how-to-read-a-crochet-pattern": { path: "/images/blog/pattern.webp", alt: "A crochet notebook, hook and swatch" },
    "/blog/choosing-your-first-crochet-project": { path: "/images/blog/project.webp", alt: "Small handmade crochet coasters" },
    "/blog/how-to-crochet-for-beginners": { path: "/images/blog/beginners.webp", alt: "A crochet practice rectangle" },
  };
  const guide = path.startsWith("/blog/") ? guideImages[path.slice("/blog/".length)] : undefined;
  const cover = (guide ? { path: guide.src, alt: guide.alt } : covers[path]) || { path: "/images/crochet.jpg", alt: "Yarn, crochet hook and a handmade swatch" };
  const images = [{ url: new URL(cover.path, base).href, alt: cover.alt }];
  return {
    title, description,
    alternates: url ? { canonical: url } : undefined,
    openGraph: { title, description, siteName: siteConfig.name, type: article ? "article" : "website", url, images },
    twitter: { card: "summary_large_image", title, description, images: images?.map(image => image.url) },
  };
}
