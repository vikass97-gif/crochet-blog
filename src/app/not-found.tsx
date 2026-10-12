import Link from "next/link";

export default function NotFound() {
  return <main id="main-content" className="container not-found-page"><p className="eyebrow">404 · A LOOSE END</p><h1>This page hasn’t<br /><em>bloomed here.</em></h1><p>The link may have changed, or the page may not exist. Let’s get you back to something worth making.</p><div className="hero-actions"><Link className="button" href="/">Back to home →</Link><Link className="text-link" href="/shop">Explore flower patterns</Link></div></main>;
}
