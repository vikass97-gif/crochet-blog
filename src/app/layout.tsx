import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { SiteNavigation } from "@/components/site-navigation";
import { getSiteUrl, siteConfig } from "@/lib/site-config";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: getSiteUrl(),
  title: { default: "Crochet Patterns & Free Beginner Guides | Loop & Stitch", template: "%s | Loop & Stitch" },
  description: siteConfig.description,
  applicationName: siteConfig.name,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <header id="top" className="site-header"><div className="header-inner container">
      <Link className="brand" href="/" aria-label="Loop and Stitch home">loop<span>&</span>stitch<small>THE CROCHET JOURNAL</small></Link>
      <Suspense fallback={<nav aria-label="Main navigation"><Link href="/shop">Pattern collection</Link><Link href="/blog">Free guides</Link><Link href="/about">Our approach</Link></nav>}><SiteNavigation /></Suspense>
    </div></header>
    {children}
    <footer className="site-footer">
      <div className="container footer-columns">
        <div className="footer-brand"><Link className="brand" href="/">loop<span>&</span>stitch</Link><p>A slower moment.<br />Something made by you.</p><a className="footer-contact" href="mailto:info@velioratv.com">info@velioratv.com</a></div>
        <nav className="footer-column" aria-labelledby="footer-explore"><h2 id="footer-explore">Explore</h2><Link href="/shop">Pattern collection</Link><Link href="/about">Our approach</Link><Link href="/blog">The journal</Link></nav>
        <nav className="footer-column" aria-labelledby="footer-learn"><h2 id="footer-learn">Learn crochet</h2><Link href="/blog/how-to-crochet-for-beginners">Beginner guide</Link><Link href="/blog/your-first-crochet-toolkit">Your first toolkit</Link><Link href="/blog/how-to-read-a-crochet-pattern">Reading patterns</Link><Link href="/blog/choosing-your-first-crochet-project">First projects</Link></nav>

      </div>
      <div className="footer-bottom"><div className="container footer-bottom-inner">
        <p className="footer-signature">Loop & Stitch <span>Guides use US crochet terms.</span></p>
        <nav className="footer-policy-links" aria-label="Legal information"><Link href="/legal/legal-notice">Legal notice</Link><Link href="/legal/privacy">Privacy</Link><Link href="/legal/cookies">Cookies</Link><Link href="/legal/terms">Terms</Link><Link href="/legal/digital-delivery-refunds">Delivery & refunds</Link></nav>
        <a className="footer-top-link" href="#top" aria-label="Back to top">↑</a>
      </div></div>
    </footer>
  </body></html>;
}
