import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-config";

export default function robots(): MetadataRoute.Robots {
  const url = getSiteUrl();
  return { rules: { userAgent: "*", allow: "/" }, sitemap: url ? new URL("/sitemap.xml", url).href : undefined };
}
