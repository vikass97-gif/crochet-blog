import Link from "next/link";
import { CrochetVideoPlayer } from "./crochet-video-player";

export function HomeVideo() {
  return (
    <section id="crochet-film" className="container home-video-section" aria-labelledby="home-video-heading">
      <div className="home-journal-heading">
        <div>
          <p className="eyebrow">A MOMENT OF MAKING</p>
          <h2 id="home-video-heading">Watch the rhythm.<br /><em>Find your inspiration.</em></h2>
        </div>
        <p className="video-intro">From the first strand to the next stitch. A short film celebrating the joy of making something your own.</p>
      </div>
      <figure className="home-video-figure">
        <CrochetVideoPlayer />

      </figure>
      <div className="video-follow-up">

        <Link className="text-link" href="/blog/how-to-crochet-for-beginners">Learn your first stitches <span aria-hidden="true">→</span></Link>
      </div>
    </section>
  );
}
