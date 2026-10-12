import Link from "next/link";
import Image from "next/image";
import { posts, getPostWordCount } from "@/lib/posts";

export function readingMinutes(post: (typeof posts)[number]) {
  return Math.max(1, Math.ceil(getPostWordCount(post) / 200));
}

const guideImages: Record<string, { src: string; alt: string }> = {
  "your-first-crochet-toolkit": { src: "/images/blog/toolkit.webp", alt: "Crochet hook, yarn, scissors and stitch markers on linen" },
  "how-to-read-a-crochet-pattern": { src: "/images/blog/pattern.webp", alt: "Pattern notebook beside a crochet swatch and hook" },
  "choosing-your-first-crochet-project": { src: "/images/blog/project.webp", alt: "Small terracotta and sage crochet coasters with yarn" },
  "how-to-crochet-for-beginners": { src: "/images/blog/beginners.webp", alt: "Cream crochet practice swatch with a chain, hook and yarn" },
};

export function PostCard({ post, index }: { post: (typeof posts)[number]; index: number }) {
  const image = guideImages[post.slug];
  return (
    <article className="journal-card">
      {image ? <Link className="card-image" href={`/blog/${post.slug}`} aria-label={`Read ${post.title}`}><Image src={image.src} alt={image.alt} fill sizes="(max-width: 800px) 90vw, (max-width: 1334px) 45vw, 600px" /><span className="image-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span></Link> : <div className={`card-art card-art-${index % 3}`} aria-hidden="true"><span className="thread-ring" /><span className="article-number">0{index + 1}</span><span className="card-art-label">THE BEGINNER SERIES</span></div>}
      <div className="card-body"><p className="eyebrow">{post.category}</p><h3><Link href={`/blog/${post.slug}`}>{post.title}</Link></h3><p className="muted">{post.description}</p><div className="card-bottom"><span>{readingMinutes(post)} min read</span><Link className="article-link" href={`/blog/${post.slug}`}>Read guide <span aria-hidden="true">↗</span></Link></div></div>
    </article>
  );
}
