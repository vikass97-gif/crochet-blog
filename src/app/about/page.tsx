import Image from "next/image";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Our Approach to Handmade Crochet", "Meet the idea behind Loop & Stitch: free crochet learning guides and a growing collection of crochet PDF pattern ideas.", "/about");

export default function AboutPage() {
  return <main id="main-content" className="container blog-page">
    <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">Our approach</span></nav>
    <section className="about-layout"><div><p className="eyebrow">THE IDEA BEHIND LOOP & STITCH</p><h1>A little yarn.<br /><em>Endless possibilities.</em></h1><p className="article-intro">A place to learn the basics, explore handmade projects, and find inspiration for something made by you.</p><p className="about-copy">We are developing a crochet PDF pattern collection, with flowers, bags, granny squares, coasters, and small storage baskets. While those PDFs are in preparation, our free journal offers practical guidance on tools, patterns, first projects, and beginner stitches.</p><Link className="button" href="/blog/how-to-crochet-for-beginners">Start with the free guide ↗</Link></div><div className="about-image"><Image src="/images/collection/crochet-basket.webp" alt="Handmade crochet basket with colourful yarn on a wooden stool" width={1400} height={2100} sizes="(max-width:800px) 90vw, 500px" /></div></section>
    <section className="approach-grid" aria-label="Our approach"><article><p className="eyebrow">01 · LEARN</p><h2>Make a clear start.</h2><p>Our guides explain the materials, terminology, and small decisions behind your first stitches. Use them at your own pace and return to the steps you need.</p><Link className="text-link" href="/blog">Explore free guides →</Link></article><article><p className="eyebrow">02 · EXPLORE</p><h2>Follow your curiosity.</h2><p>Our collection previews show the first ideas we are developing. Stock photographs illustrate the inspiration; final designs and pattern details will be confirmed before sale.</p><Link className="text-link" href="/shop">See the collection →</Link></article><article><p className="eyebrow">03 · PREPARE</p><h2>Know what you’re making.</h2><p>Final listings will describe the PDF contents, terminology, required techniques, materials, and dimensions, so you can choose a project with useful information in hand.</p></article></section>
  </main>;
}
