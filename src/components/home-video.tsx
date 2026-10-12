import Link from "next/link";

export function HomeVideo() {
  return (
    <section id="crochet-film" className="container home-video-section" aria-labelledby="home-video-heading">
      <div className="home-journal-heading">
        <div>
          <p className="eyebrow">A MOMENT OF MAKING</p>
          <h2 id="home-video-heading">Watch the rhythm.<br /><em>Find your inspiration.</em></h2>
        </div>
        <p className="video-intro">A 30-second glimpse into the joy of crochet. Press play, then start your own journey.</p>
      </div>
      <figure className="home-video-figure">
        <video controls playsInline preload="none" width="1280" height="720" poster="/videos/crochet-introduction-poster.jpg" aria-label="Loop and Stitch crochet introduction">
          <source src="/videos/crochet-introduction.mp4" type="video/mp4" />
          <track kind="captions" src="/videos/crochet-introduction-en.vtt" srcLang="en" label="English" />
          Your browser does not support this video. <a href="/videos/crochet-introduction.mp4">Open the video.</a>
        </video>

      </figure>
      <div className="video-follow-up">

        <Link className="text-link" href="/blog/how-to-crochet-for-beginners">Learn your first stitches <span aria-hidden="true">→</span></Link>
      </div>
    </section>
  );
}
