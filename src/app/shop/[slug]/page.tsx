import { Suspense } from "react";
import Image from "next/image";
import { SavePatternButton } from "@/components/pattern-favourites";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPattern, patterns } from "@/lib/patterns";
import { pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return patterns.map(pattern => ({ slug: pattern.slug })); }
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const pattern = getPattern(slug);
  if (!pattern) notFound();
  return { ...pageMetadata(`${pattern.title} — Collection Preview`, pattern.description, `/shop/${slug}`), robots: { index: false, follow: true } };
}
export default function PatternPage({ params }: Props) {
  return <main id="main-content" className="container blog-page"><Suspense fallback={<div className="blog-heading" role="status"><p className="eyebrow">THE PATTERN COLLECTION</p><p>Loading the pattern preview…</p></div>}><PatternDetails params={params} /></Suspense></main>;
}
async function PatternDetails({ params }: Props) {
  const { slug } = await params;
  const pattern = getPattern(slug);
  if (!pattern) notFound();
  return <>
    <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/shop">Pattern shop</Link><span aria-hidden="true">/</span><span aria-current="page">{pattern.title}</span></nav>
    <div className="product-layout"><figure className="product-photo"><Image src={pattern.image} alt={pattern.alt} width={1400} height={2100} sizes="(max-width:800px) 90vw, 600px" /><figcaption>Inspiration photo by <a href={pattern.credit.url}>{pattern.credit.name} / Pexels</a>. Final pattern design to be confirmed.</figcaption></figure>
      <div className="product-info"><p className="eyebrow">{pattern.category} · COLLECTION PREVIEW</p><h1>{pattern.title}</h1><p className="article-intro">{pattern.description}</p><dl className="product-facts"><div><dt>Proposed level</dt><dd>{pattern.level}</dd></div><div><dt>Planned format</dt><dd>Digital PDF pattern</dd></div><div><dt>Planned language</dt><dd>English · US terms</dd></div><div><dt>Availability</dt><dd>In preparation</dd></div></dl><div className="product-availability"><strong>Coming soon</strong><p>The PDF, final specifications, and price are not available yet.</p></div><Link className="button" href="/blog/how-to-crochet-for-beginners">Practise with our free guide ↗</Link><SavePatternButton slug={pattern.slug} title={pattern.title} /></div>
    </div>
    <section className="product-content"><div><p className="eyebrow">THE MAKING</p><h2>Explore the <em>concept.</em></h2><p>These details describe the planned direction. The final pattern will be tested and its specifications confirmed before it is offered for sale.</p></div><div className="article-faq"><details open><summary>Skills to explore</summary><ul>{pattern.skills.map(skill => <li key={skill}>{skill}</li>)}</ul></details><details><summary>Proposed materials</summary><ul>{pattern.materials.map(material => <li key={material}>{material}</li>)}</ul><p>Yarn quantities, hook size, gauge, and finished dimensions will be provided with the final pattern.</p></details><details><summary>Planned PDF contents</summary><ul>{pattern.plannedContents.map(item => <li key={item}>{item}</li>)}</ul></details><details><summary>What is included in a digital pattern?</summary><p>A digital pattern provides instructions to make an item yourself. The final listing will confirm its contents. Physical supplies and finished objects are not included.</p></details></div></section>
    <Link className="text-link" href="/shop">← Back to the collection</Link>
  </>;
}
