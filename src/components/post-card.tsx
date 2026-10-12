import Link from "next/link";
import Image from "next/image";
import { guideImages } from "@/lib/guide-images";
import { posts, getPostWordCount } from "@/lib/posts";

export function readingMinutes(post: (typeof posts)[number]) {
  return Math.max(1, Math.ceil(getPostWordCount(post) / 200));
}



export function PostCard({ post, index }: { post: (typeof posts)[number]; index: number }) {
  const image = guideImages[post.slug];
  return (
    <article className="journal-card">
      {image ? <Link className="card-image" href={`/blog/${post.slug}`} aria-label={`Read ${post.title}`}><Image src={image.src} alt={image.alt} style={{ objectPosition: image.position }} fill sizes="(max-width: 800px) 90vw, (max-width: 1334px) 45vw, 600px" /><span className="image-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span></Link> : <div className={`card-art card-art-${index % 3}`} aria-hidden="true"><span className="thread-ring" /><span className="article-number">0{index + 1}</span><span className="card-art-label">THE BEGINNER SERIES</span></div>}
      <div className="card-body"><p className="eyebrow">{post.category}</p><h3><Link href={`/blog/${post.slug}`}>{post.title}</Link></h3><p className="muted">{post.description}</p><div className="card-bottom"><span>{readingMinutes(post)} min read</span><Link className="article-link" href={`/blog/${post.slug}`}>Read guide <span aria-hidden="true">↗</span></Link></div></div>
    </article>
  );
}
