"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { href: "/shop", label: "Pattern collection" },
  { href: "/blog", label: "Free guides" },
  { href: "/about", label: "Our approach" },
];

export function SiteNavigation() {
  const pathname = usePathname();
  function links() {
    return <>{items.map(item => <Link key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : pathname.startsWith(`${item.href}/`) ? "location" : undefined} onClick={event => event.currentTarget.closest("details")?.removeAttribute("open")}>{item.label}</Link>)}<Link className="nav-cta" href="/blog/how-to-crochet-for-beginners" onClick={event => event.currentTarget.closest("details")?.removeAttribute("open")}>Start learning <span aria-hidden="true">↗</span></Link></>;
  }
  return <>
    <nav className="desktop-navigation" aria-label="Main navigation">{links()}</nav>
    <details className="mobile-navigation" onKeyDown={event => { if (event.key === "Escape") { event.currentTarget.removeAttribute("open"); event.currentTarget.querySelector("summary")?.focus(); } }}>
      <summary>Menu <span aria-hidden="true">☰</span></summary>
      <nav aria-label="Mobile navigation">{links()}</nav>
    </details>
  </>;
}
