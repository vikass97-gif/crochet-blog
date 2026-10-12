import Link from "next/link";

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
        <video controls playsInline preload="none" width="1920" height="1080" poster="/videos/crochet-introduction-v2-poster.jpg" aria-label="Loop and Stitch crochet introduction">
          <source src="/videos/crochet-introduction-v2.mp4" type="video/mp4" />
          <track kind="captions" src="/videos/crochet-introduction-v2-en.vtt" srcLang="en" label="English" />
          Your browser does not support this video. <a href="/videos/crochet-introduction-v2.mp4">Open the video.</a>
        </video>

      </figure>
      <div className="video-follow-up">

        <Link className="text-link" href="/blog/how-to-crochet-for-beginners">Learn your first stitches <span aria-hidden="true">→</span></Link>
      </div>
    </section>
  );
}
