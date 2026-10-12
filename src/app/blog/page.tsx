import Link from "next/link";
import { posts } from "@/lib/posts";
import { PostCard } from "@/components/post-card";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("The Crochet Journal: Beginner Guides & Inspiration", "Explore beginner crochet guides: choose yarn and hooks, learn to read patterns, and find a manageable first project.", "/blog");

export default function BlogPage() {
  return <main id="main-content" className="container blog-page"><nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">Journal</span></nav><header className="blog-heading"><p className="eyebrow">NOTES FROM THE YARN BASKET</p><h1>The crochet <em>journal.</em></h1><p className="muted">Practical guidance, fresh inspiration, and a starting point for every curious maker.</p></header><div className="card-grid">{posts.map((post, index) => <PostCard key={post.slug} post={post} index={index} />)}</div><aside className="terminology-note"><strong>A note on terminology</strong><p>Our guides use US crochet terms. New to patterns? <Link href="/blog/how-to-read-a-crochet-pattern">Learn how US and UK terms differ →</Link></p></aside></main>;
}
