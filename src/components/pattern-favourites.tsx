"use client";

import { useState, useSyncExternalStore } from "react";
import { patterns } from "@/lib/patterns";

const storageKey = "loop-stitch-saved-patterns";
function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener("saved-patterns-change", callback);
  return () => { window.removeEventListener("storage", callback); window.removeEventListener("saved-patterns-change", callback); };
}
function snapshot() { try { return localStorage.getItem(storageKey) || "[]"; } catch { return "[]"; } }
function parseSaved(value: string): string[] {
  try {
    const parsed: unknown = JSON.parse(value);
    return Array.isArray(parsed) ? [...new Set(parsed.filter((item): item is string => typeof item === "string" && patterns.some(pattern => pattern.slug === item)))] : [];
  } catch { return []; }
}
export function useSavedPatterns() {
  const stored = useSyncExternalStore(subscribe, snapshot, () => "[]");
  const saved = parseSaved(stored);
  const [storageError, setStorageError] = useState(false);
  function toggleSaved(slug: string) {
    const current = parseSaved(snapshot());
    const next = current.includes(slug) ? current.filter(item => item !== slug) : [...current, slug];
    try { localStorage.setItem(storageKey, JSON.stringify(next)); window.dispatchEvent(new Event("saved-patterns-change")); setStorageError(false); } catch { setStorageError(true); }
  }
  return { saved, toggleSaved, storageError };
}
export function SavePatternButton({ slug, title }: { slug: string; title: string }) {
  const { saved, toggleSaved, storageError } = useSavedPatterns();
  const isSaved = saved.includes(slug);
  return <div className="product-save"><button className="save-detail" type="button" aria-pressed={isSaved} aria-label={`${isSaved ? "Saved to your favourites. Remove" : "Save for later:"} ${title}`} onClick={() => toggleSaved(slug)}><span aria-hidden="true">{isSaved ? "♥" : "♡"}</span> {isSaved ? "Saved to your favourites" : "Save for later"}</button><p className="save-note" role="status">{storageError ? "Your browser could not save this favourite. Please check your browser storage settings." : "Favourites are stored on this browser."}</p></div>;
}
