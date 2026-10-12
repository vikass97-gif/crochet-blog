import type { Metadata } from "next";
import Link from "next/link";
import { getSiteUrl, siteConfig } from "@/lib/site-config";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: getSiteUrl(),
  title: { default: "Learn Crochet, One Stitch at a Time | Loop & Stitch", template: "%s | Loop & Stitch" },
  description: siteConfig.description,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <header className="site-header"><div className="header-inner container">
      <Link className="brand" href="/" aria-label="Loop and Stitch home">loop<span>&</span>stitch<small>THE CROCHET JOURNAL</small></Link>
      <nav aria-label="Main navigation"><Link href="/blog">The journal</Link><Link href="/#start">Learn crochet</Link><Link className="nav-cta" href="/blog/how-to-crochet-for-beginners">Start here <span aria-hidden="true">↗</span></Link></nav>
    </div></header>
    {children}
    <footer className="site-footer"><div className="container footer-grid"><div><Link className="brand" href="/">loop<span>&</span>stitch</Link><p>A slower moment. Something made by you.</p></div><nav aria-label="Footer navigation"><Link href="/blog">All guides</Link><Link href="/blog/how-to-read-a-crochet-pattern">Reading patterns</Link><Link href="/blog/choosing-your-first-crochet-project">First projects</Link></nav></div><div className="container footer-note">Made for curious hands, wherever you call home. · Guides use US crochet terms.</div></footer>
  </body></html>;
}
