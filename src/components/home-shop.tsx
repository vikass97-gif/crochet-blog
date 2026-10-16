"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { patterns } from "@/lib/patterns";

const collectionCategory = (category: string) =>
  ["Roses", "Sunflowers", "Bouquets"].includes(category) ? "Flowers" : category;

export function HomeShop() {
  const [category, setCategory] = useState("All projects");
  const categories = ["All projects", ...new Set(patterns.map(pattern => collectionCategory(pattern.category)))];
  const matching = [...patterns].reverse().filter(pattern => category === "All projects" || collectionCategory(pattern.category) === category);
  const featured = matching.slice(0, 4);

  return <section id="home-shop" className="container home-shop" aria-labelledby="home-shop-heading">
    <div className="home-journal-heading"><div><p className="eyebrow">THE PATTERN SHOP</p><h2 id="home-shop-heading">Find your next<br /><em>handmade favourite.</em></h2></div><Link className="text-link" href="/shop">View the full collection <span aria-hidden="true">↗</span></Link></div>
    <p className="home-shop-intro">Thoughtful projects for creative hands. Explore the collection and choose something that feels like you.</p>
    <div className="home-shop-toolbar"><div className="filter-pills" role="group" aria-label="Browse project categories">{categories.map(item => <button type="button" key={item} aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</button>)}</div><p className="home-shop-count" role="status">{featured.length} {featured.length === 1 ? "project" : "projects"}{matching.length > featured.length ? " featured" : ""}</p></div>
    <div className="home-shop-grid">{featured.map(pattern => <article className="journal-card pattern-card" key={pattern.slug}>
      <div className="pattern-cover"><Link className="card-image" href={`/shop/${pattern.slug}`} aria-label={`Discover ${pattern.title}`}><Image src={pattern.image} alt={pattern.alt} fill sizes="(max-width:600px) 90vw, (max-width:1100px) calc(45vw - 12px), (max-width:1334px) calc(22.5vw - 18px), 282px" /></Link><span className="pattern-badge">{pattern.draftDownload ? "Free draft" : "Coming soon"}</span></div>
      <div className="card-body"><p className="eyebrow">{collectionCategory(pattern.category)} · PDF pattern</p><h3><Link href={`/shop/${pattern.slug}`}>{pattern.title}</Link></h3><p className="home-shop-level">{pattern.level}</p><div className="card-bottom"><Link className="article-link" href={`/shop/${pattern.slug}`}>View project <span aria-hidden="true">↗</span></Link></div></div>
    </article>)}</div>
    <div className="home-shop-bottom"><p>A new idea. A little yarn. Something made by you.</p><Link className="button" href="/shop">Explore the shop <span aria-hidden="true">↗</span></Link></div>
  </section>;
}
