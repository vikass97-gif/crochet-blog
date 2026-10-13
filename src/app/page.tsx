import Image from "next/image";
import { HomeVideo } from "@/components/home-video";
import Link from "next/link";
import { posts } from "@/lib/posts";
import { HomeShop } from "@/components/home-shop";
import { PostCard } from "@/components/post-card";
import { JsonLd } from "@/components/json-ld";
import { pageMetadata } from "@/lib/seo";
import { getSiteUrl, siteConfig } from "@/lib/site-config";

export const metadata = pageMetadata("Crochet Inspiration, Beginner Guides & Upcoming PDF Patterns", siteConfig.description, "/");

export default function Home() {
  const url = getSiteUrl();
  return <main id="main-content">
    {url && <JsonLd data={{ "@context": "https://schema.org", "@type": "WebSite", name: siteConfig.name, url: url.href, inLanguage: "en", description: siteConfig.description }} />}
    <section className="home-hero container">
      <div className="hero-copy"><p className="eyebrow"><span className="small-line" /> HANDMADE, ONE STITCH AT A TIME.</p><h1>Something lovely.<br /><em>Made by you.</em></h1><p className="hero-description">Discover the possibilities of crochet. Find inspiration, learn the basics with our free guides, and explore our upcoming collection of PDF patterns.</p><div className="hero-actions"><Link className="button" href="/shop">Explore the collection <span aria-hidden="true">↗</span></Link><Link className="text-link" href="/blog/how-to-crochet-for-beginners">Learn your first stitches <span aria-hidden="true">→</span></Link></div><div className="hero-note"><span aria-hidden="true">✳</span> Free guides to start today. PDF patterns coming soon.</div></div>
      <div className="hero-visual"><div className="hero-photo"><Image src="/images/flowers/hero-pink-flower.webp" alt="A delicate pink crochet flower with a green leaf in a white ceramic vase" fill preload sizes="(max-width: 800px) 90vw, 48vw" /></div><div className="photo-caption"><span className="eyebrow">THE JOY OF MAKING</span><p>A little yarn. A little joy.</p><span aria-hidden="true">↗</span></div><span className="photo-tag">YARN · CREATIVITY · POSSIBILITY</span></div>
    </section>
    <div className="values-strip"><div className="container"><span>Free beginner guides</span><span aria-hidden="true">✳</span><span>Crochet collection previews</span><span aria-hidden="true">✳</span><span>PDF patterns in preparation</span></div></div>
    <section id="pattern-collection" className="container shop-teaser collection-teaser" aria-labelledby="pattern-collection-heading">
      <div><p className="eyebrow">THE UPCOMING CROCHET COLLECTION</p><h2 id="pattern-collection-heading">A little yarn.<br /><em>So much to make.</em></h2><p>Flowers are just the beginning. We’re building a collection of crochet PDF patterns, with room for accessories, home décor, and more handmade ideas.</p><p>Explore the first previews and save your favourites while we prepare the collection.</p><Link className="button" href="/shop">Explore the collection <span aria-hidden="true">↗</span></Link><p className="collection-note">PDF patterns in preparation</p></div>
      <Link className="shop-teaser-image collection-photo" href="/shop"><Image src="/images/collection/crochet-basket.webp" alt="Cream handmade crochet basket filled with terracotta and grey yarn on a wooden stool" width={1400} height={2100} sizes="(max-width:800px) 90vw, 600px" /></Link>
    </section>
    <HomeShop />
    <section id="start" className="learning-section container"><div><p className="eyebrow">NEW TO CROCHET?</p><h2>Start with the basics.<br /><em>Build your confidence.</em></h2><p>Before your first project, get comfortable with a hook, a chain, and counting stitches. Our free guides help you build that foundation at your own pace.</p><Link className="text-link" href="/blog/how-to-crochet-for-beginners">Let’s get you started <span aria-hidden="true">→</span></Link></div><ol>{posts.slice(0, 3).map((post, index) => <li key={post.slug}><span className="step-number">0{index + 1}</span><div><h3><Link href={`/blog/${post.slug}`}>{["Meet your materials", "Understand the instructions", "Find your first project"][index]}</Link></h3><p>{["A hook, some yarn, and the tools worth keeping close.", "Make sense of patterns, stitch counts, and US / UK terms.", "Choose something small, satisfying, and manageable."][index]}</p></div><Link className="step-arrow" href={`/blog/${post.slug}`} aria-label={post.title}>↗</Link></li>)}</ol></section>
    <HomeVideo />
    <section className="container home-journal"><div className="home-journal-heading"><div><p className="eyebrow">NOTES FROM THE YARN BASKET</p><h2>A little guidance.<br /><em>A lot of inspiration.</em></h2></div><Link className="text-link" href="/blog">View all guides <span aria-hidden="true">↗</span></Link></div><div className="card-grid">{posts.map((post, index) => <PostCard key={post.slug} post={post} index={index} />)}</div></section>
    <section className="closing-section container"><span aria-hidden="true">✳</span><p className="eyebrow">YOUR NEXT HANDMADE CHAPTER</p><h2>Find a project<br />that feels like <em>you.</em></h2><Link className="button" href="/shop">Explore the upcoming patterns <span aria-hidden="true">↗</span></Link></section>
  </main>;
}
