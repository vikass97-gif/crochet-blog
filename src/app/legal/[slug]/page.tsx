import { Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { legalPages, getLegalPage } from "@/lib/legal";
import { pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return legalPages.map(page => ({ slug: page.slug })); }
export async function generateMetadata({ params }: Props) {
  const { slug } = await params; const page = getLegalPage(slug); if (!page) notFound();
  return { ...pageMetadata(page.title, page.description, `/legal/${slug}`), robots: { index: false, follow: true } };
}
export default function LegalPage({ params }: Props) {
  return <main id="main-content" className="container blog-page legal-page"><Suspense fallback={<p role="status">Loading information…</p>}><LegalContent params={params} /></Suspense></main>;
}
async function LegalContent({ params }: Props) {
  const { slug } = await params; const page = getLegalPage(slug); if (!page) notFound();
  return <><nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/legal">Legal & privacy</Link><span aria-hidden="true">/</span><span aria-current="page">{page.title}</span></nav><header className="blog-heading"><p className="eyebrow">LEGAL & PRIVACY</p><h1>{page.title}</h1><p className="muted">{page.description}</p></header><p className="legal-draft">Draft — pending publisher information and service configuration. This page is not a final sales policy.</p><article className="legal-content">{page.sections.map(section => <section className="article-section" key={section.heading}><h2>{section.heading}</h2><p>{section.text}</p></section>)}</article><p className="legal-contact">Questions? <a href="mailto:info@velioratv.com">info@velioratv.com</a></p><Link className="text-link" href="/legal">← All legal information</Link></>;
}
