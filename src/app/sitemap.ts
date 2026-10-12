import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-config";
import { posts } from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  if (!siteUrl) return [];
  return ["/", "/blog", ...posts.map(post => `/blog/${post.slug}`)].map(path => ({ url: new URL(path, siteUrl).href }));
}
