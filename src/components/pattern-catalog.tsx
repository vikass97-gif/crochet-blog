"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { patterns } from "@/lib/patterns";

import { useSavedPatterns } from "./pattern-favourites";

export function PatternCatalog() {
  const { saved, toggleSaved, storageError } = useSavedPatterns();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All patterns");
  const [level, setLevel] = useState("All levels");
  const [savedOnly, setSavedOnly] = useState(false);
  const [sort, setSort] = useState("Collection order");
  const filtered = patterns.filter(pattern =>
    `${pattern.title} ${pattern.category} ${pattern.description} ${pattern.skills.join(" ")}`.toLowerCase().includes(query.toLowerCase().trim()) &&
    (category === "All patterns" || pattern.category === category) &&
    (level === "All levels" || pattern.level === level) && (!savedOnly || saved.includes(pattern.slug))
  );
  if (sort === "Name A–Z") filtered.sort((a, b) => a.title.localeCompare(b.title));
  function reset() { setQuery(""); setCategory("All patterns"); setLevel("All levels"); setSavedOnly(false); setSort("Collection order"); }
  return <>
    <div className="shop-toolbar">
      <label className="shop-search">Search the collection<input type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Search a project, category, or technique…" /></label>
      <label>Experience level<select value={level} onChange={event => setLevel(event.target.value)}><option>All levels</option>{[...new Set(patterns.map(pattern => pattern.level))].map(item => <option key={item}>{item}</option>)}</select></label>
      <label>Sort by<select value={sort} onChange={event => setSort(event.target.value)}><option>Collection order</option><option>Name A–Z</option></select></label>
    </div>
    <div className="shop-filter-row"><div className="filter-pills" role="group" aria-label="Pattern category">{["All patterns", ...new Set(patterns.map(pattern => pattern.category))].map(item => <button key={item} type="button" aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</button>)}</div><button className="saved-filter" type="button" aria-pressed={savedOnly} onClick={() => setSavedOnly(!savedOnly)}>♡ Saved ({saved.length})</button></div>
    <div className="catalog-results"><p className="shop-count" role="status">{filtered.length} {filtered.length === 1 ? "concept" : "concepts"} to explore{savedOnly ? " · Saved on this browser" : ""}</p>{(query || category !== "All patterns" || level !== "All levels" || savedOnly) && <button className="clear-filters" type="button" onClick={reset}>Clear filters</button>}</div>
    {storageError && <p role="alert">Your browser could not save this favourite. Please allow local storage and try again.</p>}
    <div className="card-grid pattern-grid">{filtered.map(pattern => <article className="journal-card pattern-card" key={pattern.slug}>
      <div className="pattern-cover"><Link className="card-image" href={`/shop/${pattern.slug}`}><Image src={pattern.image} alt={pattern.alt} fill sizes="(max-width:800px) 90vw, (max-width:1334px) calc(30vw - 16px), 384px" /></Link><button className="save-pattern" type="button" aria-label={`${saved.includes(pattern.slug) ? "Unsave" : "Save"} ${pattern.title}`} aria-pressed={saved.includes(pattern.slug)} onClick={() => toggleSaved(pattern.slug)}>{saved.includes(pattern.slug) ? "♥" : "♡"}</button><span className="pattern-badge">Collection preview</span></div>
      <div className="card-body"><p className="eyebrow">{pattern.category} · {pattern.level}</p><h3><Link href={`/shop/${pattern.slug}`}>{pattern.title}</Link></h3><p className="muted">{pattern.description}</p><div className="card-bottom"><span>{pattern.draftDownload ? "Free draft available" : "PDF in preparation"}</span><Link className="article-link" href={`/shop/${pattern.slug}`}>Explore concept ↗</Link></div></div>
    </article>)}</div>
    {filtered.length === 0 && <div className="shop-empty"><h3>{savedOnly ? "No saved patterns match yet." : "No patterns match your search."}</h3><p>Try another keyword or reset your filters to explore the collection.</p><button className="button" onClick={reset} type="button">Reset filters</button></div>}
  </>;
}
