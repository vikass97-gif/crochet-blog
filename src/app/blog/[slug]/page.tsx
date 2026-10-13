import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { guideImages } from "@/lib/guide-images";
import { notFound } from "next/navigation";
import { getPost, posts, getPostBody, getPostWordCount } from "@/lib/posts";
import { PostCard, readingMinutes } from "@/components/post-card";
import { JsonLd } from "@/components/json-ld";
import { pageMetadata } from "@/lib/seo";
import { getSiteUrl, siteConfig } from "@/lib/site-config";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return posts.map(post => ({ slug: post.slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  return pageMetadata(post.title, post.description, `/blog/${post.slug}`, true);
}

export default function ArticlePage({ params }: Props) {
  return (
    <main id="main-content" className="container blog-page">
      <Suspense fallback={
        <div className="article-header" role="status" aria-live="polite">
          <p className="eyebrow">LOOP & STITCH JOURNAL</p>
          <p className="article-intro">Loading your crochet guide…</p>
        </div>
      }>
        <ArticleDetails params={params} />
      </Suspense>
    </main>
  );
}

async function ArticleDetails({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const base = getSiteUrl();
  const url = base ? new URL(`/blog/${post.slug}`, base).href : undefined;
  const cover = guideImages[post.slug];
  const techniqueSlugs = ["essential-crochet-stitches", "crochet-tension-and-gauge", "how-to-finish-crochet-projects"];
  const related = [...posts.filter(item => techniqueSlugs.includes(item.slug)), ...posts.filter(item => !techniqueSlugs.includes(item.slug))].filter(item => item.slug !== post.slug).slice(0, 3);
  return <>
    <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/blog">Journal</Link><span aria-hidden="true">/</span><span aria-current="page">{post.category}</span></nav>
    <JsonLd data={{ "@context": "https://schema.org", "@type": "BlogPosting", headline: post.title, description: post.description, image: cover ? new URL(cover.src, base).href : undefined, inLanguage: "en", mainEntityOfPage: url, publisher: { "@type": "Organization", name: siteConfig.name }, articleBody: getPostBody(post), wordCount: getPostWordCount(post) }} />
    {base && <JsonLd data={{ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: base.href }, { "@type": "ListItem", position: 2, name: "Journal", item: new URL("/blog", base).href }, { "@type": "ListItem", position: 3, name: post.title, item: url }] }} />}
    <header className="article-header"><p className="eyebrow">{post.category} · {readingMinutes(post)} MIN READ</p><h1>{post.title}</h1><p className="article-intro">{post.description}</p><p className="article-byline">Loop & Stitch journal · US crochet terminology</p></header>
    {cover && <div className="article-cover"><Image src={cover.src} alt={cover.alt} style={{ objectPosition: cover.position }} fill sizes="(max-width:800px) 90vw, (max-width:1000px) 90vw, 900px" /></div>}
    <div className="article-layout"><aside className="article-toc"><p className="eyebrow">IN THIS GUIDE</p><nav aria-label="Table of contents">{post.sections.map((section, index) => <a key={section.heading} href={`#section-${index + 1}`}><span>{String(index + 1).padStart(2, "0")}</span>{section.heading}</a>)}<a href="#frequently-asked-questions">Frequently asked questions</a><a href="#references">References & further reading</a></nav></aside><article className="article-content">{post.sections.map((section, index) => <section id={`section-${index + 1}`} className="article-section" key={section.heading}><h2>{section.heading}</h2>{section.text.split("\n\n").map((paragraph, i) => <p key={i}>{paragraph}</p>)}{section.image && <figure className="article-step-figure"><a href={section.image.src} target="_blank" rel="noopener noreferrer" aria-label={`View illustration: ${section.heading} (opens in a new tab)`}><Image src={section.image.src} alt={section.image.alt} width={section.image.width ?? 900} height={section.image.height ?? 400} sizes="(max-width:800px) 90vw, 740px" /></a><figcaption>{section.image.caption}</figcaption></figure>}</section>)}<section id="frequently-asked-questions" className="article-section article-faq"><h2>Frequently asked questions</h2>{post.faqs.map(item => <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}</section>
    <aside id="references" className="terminology-note article-references"><h2>References & further reading</h2><p>Use these references for terminology, material standards, and further demonstrations. The practice examples in this guide are explained in the article.</p><ul>{post.references.map(reference => <li key={reference.url}><a href={reference.url}>{reference.title}</a></li>)}</ul></aside>
    <div className="article-ending"><p>Keep learning, one stitch at a time.</p><Link className="text-link" href="/blog">Back to the journal →</Link></div></article></div>
    <section className="related-guides"><p className="eyebrow">YOUR NEXT CHAPTER</p><h2>Keep your curiosity <em>going.</em></h2><div className="card-grid">{related.map((item, index) => <PostCard key={item.slug} post={item} index={index} />)}</div></section>
  </>;
}
