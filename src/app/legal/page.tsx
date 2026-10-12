import Link from "next/link";
import { legalPages } from "@/lib/legal";
import { pageMetadata } from "@/lib/seo";

export const metadata = { ...pageMetadata("Legal & Privacy Information", "Legal, privacy, browser storage, and future digital sales information for Loop & Stitch.", "/legal"), robots: { index: false, follow: true } };
export default function LegalIndex() {
  return <main id="main-content" className="container blog-page legal-page"><header className="blog-heading"><p className="eyebrow">LEGAL & PRIVACY</p><h1>Clear information.<br /><em>A thoughtful approach.</em></h1><p className="muted">Information about the website and preparation for future PDF sales.</p></header><p className="legal-draft">Draft pages — publisher details and policies must be completed before sales begin.</p><div className="legal-grid">{legalPages.map(page => <Link className="legal-card" href={`/legal/${page.slug}`} key={page.slug}><h2>{page.title}</h2><p>{page.description}</p><span aria-hidden="true">→</span></Link>)}</div></main>;
}
