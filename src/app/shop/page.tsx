import Link from "next/link";
import { PatternCatalog } from "@/components/pattern-catalog";
import { pageMetadata } from "@/lib/seo";

export const metadata = {
  ...pageMetadata("Crochet PDF Pattern Collection", "Explore the upcoming Loop & Stitch crochet PDF collection, with flower and bag concepts for your next handmade project.", "/shop"),
  robots: { index: false, follow: true },
};

export default function ShopPage() {
  return <main id="main-content" className="container blog-page shop-page">
    <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">Pattern shop</span></nav>
    <header className="blog-heading"><p className="eyebrow">THE CROCHET COLLECTION · COMING SOON</p><h1>Find your next project.<br /><em>Make it your own.</em></h1><p className="muted">Explore our first crochet PDF concepts and save your favourites. Discover flowers and everyday bags, with more handmade projects to come.</p></header>
    <div className="shop-status"><span aria-hidden="true">✳</span><p><strong>A collection in the making.</strong> These are previews of proposed patterns. A free, untested working draft is available for Little Crochet Roses; paid purchases are not open yet.</p></div>
    <section className="shop-category-intro" aria-labelledby="bags-heading"><p className="eyebrow">NEW DIRECTION · BAGS & ACCESSORIES</p><h2 id="bags-heading">A little texture.<br /><em>Everyday possibility.</em></h2><p>Explore our first bag concept and learn what to consider before choosing your yarn, handles, and lining.</p><div className="shop-category-links"><Link className="text-link" href="/shop/everyday-crochet-bag">Explore the bag concept ↗</Link><Link className="text-link" href="/blog/choosing-your-first-crochet-bag">Read the free bag guide →</Link></div></section>
    <PatternCatalog />
    <section className="shop-faq article-faq"><p className="eyebrow">BEFORE YOU MAKE</p><h2>A few things to <em>know.</em></h2><details><summary>Can I buy or download a PDF now?</summary><p>You can download a free working draft from the Little Crochet Roses page. Its instructions are untested and its dimensions are estimates. Paid purchases are not open; final pattern details and prices are still in preparation.</p></details><details><summary>Is this a physical product shop?</summary><p>The planned collection is for downloadable crochet instructions. Yarn, hooks, and finished crochet pieces are not included.</p></details><details><summary>Which terminology will the patterns use?</summary><p>The planned collection uses English and US crochet terminology. Each final listing will confirm its language and terminology before purchase.</p></details><details><summary>I am completely new to crochet. Where should I start?</summary><p><Link href="/blog/how-to-crochet-for-beginners">Read our free beginner guide</Link> to practise your first stitches before choosing a pattern.</p></details></section>
  </main>;
}
