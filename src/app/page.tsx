import Image from "next/image";
import Link from "next/link";
import { posts } from "@/lib/posts";
import { PostCard } from "@/components/post-card";
import { JsonLd } from "@/components/json-ld";
import { pageMetadata } from "@/lib/seo";
import { getSiteUrl, siteConfig } from "@/lib/site-config";

export const metadata = pageMetadata("Learn Crochet, One Stitch at a Time", siteConfig.description, "/");

export default function Home() {
  const url = getSiteUrl();
  return <main id="main-content">
    {url && <JsonLd data={{ "@context": "https://schema.org", "@type": "WebSite", name: siteConfig.name, url: url.href, inLanguage: "en", description: siteConfig.description }} />}
    <section className="home-hero container">
      <div className="hero-copy"><p className="eyebrow"><span className="small-line" /> A LITTLE TIME. A LITTLE YARN.</p><h1>Learn crochet.<br />Make something<br /><em>beautiful.</em></h1><p className="hero-description">A home for your first stitches and your next big idea. Clear crochet guides, thoughtful advice, and a little inspiration to make it yours.</p><div className="hero-actions"><Link className="button" href="/blog/how-to-crochet-for-beginners">Begin your crochet journey <span aria-hidden="true">↗</span></Link><Link className="text-link" href="/blog">Explore the journal <span aria-hidden="true">→</span></Link></div><div className="hero-note"><span aria-hidden="true">✳</span> No perfect stitches required. Just a place to start.</div></div>
      <div className="hero-visual"><div className="hero-photo"><Image src="/images/crochet.jpg" alt="Red yarn, a cream crochet swatch, and a crochet hook" fill preload sizes="(max-width: 800px) 90vw, 48vw" /></div><div className="photo-caption"><span className="eyebrow">THE JOY OF MAKING</span><p>One stitch at a time.</p><span aria-hidden="true">↗</span></div><span className="photo-tag">YARN · CURIOSITY · POSSIBILITY</span></div>
    </section>
    <div className="values-strip"><div className="container"><span>Beginner-friendly guides</span><span aria-hidden="true">✳</span><span>Learn at your own pace</span><span aria-hidden="true">✳</span><span>Make with intention</span></div></div>
    <section id="start" className="learning-section container"><div><p className="eyebrow">YOUR FIRST CHAPTER</p><h2>A small start.<br /><em>Endless possibilities.</em></h2><p>You don’t need a cupboard full of yarn. Start with the essentials, get comfortable with the basics, and find a project that feels like you.</p><Link className="text-link" href="/blog/how-to-crochet-for-beginners">Let’s get you started <span aria-hidden="true">→</span></Link></div><ol>{posts.slice(0, 3).map((post, index) => <li key={post.slug}><span className="step-number">0{index + 1}</span><div><h3><Link href={`/blog/${post.slug}`}>{["Meet your materials", "Understand the instructions", "Find your first project"][index]}</Link></h3><p>{["A hook, some yarn, and the tools worth keeping close.", "Make sense of patterns, stitch counts, and US / UK terms.", "Choose something small, satisfying, and manageable."][index]}</p></div><Link className="step-arrow" href={`/blog/${post.slug}`} aria-label={post.title}>↗</Link></li>)}</ol></section>
    <section className="container home-journal"><div className="home-journal-heading"><div><p className="eyebrow">NOTES FROM THE YARN BASKET</p><h2>A little guidance.<br /><em>A lot of inspiration.</em></h2></div><Link className="text-link" href="/blog">View all guides <span aria-hidden="true">↗</span></Link></div><div className="card-grid">{posts.map((post, index) => <PostCard key={post.slug} post={post} index={index} />)}</div></section>
    <section className="closing-section container"><span aria-hidden="true">✳</span><p className="eyebrow">LESS SCROLLING. MORE MAKING.</p><h2>Your next creative chapter<br />starts with <em>one stitch.</em></h2><Link className="button" href="/blog/choosing-your-first-crochet-project">Find your first project <span aria-hidden="true">↗</span></Link></section>
  </main>;
}
