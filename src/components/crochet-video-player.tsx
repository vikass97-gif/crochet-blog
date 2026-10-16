"use client";

import Image from "next/image";
import { useState } from "react";

export function CrochetVideoPlayer() {
  const [playing, setPlaying] = useState(false);

  if (playing) return <video controls autoPlay playsInline preload="metadata" width="1920" height="1080" aria-label="Loop and Stitch crochet introduction">
    <source src="/videos/crochet-introduction-v2.mp4" type="video/mp4" />
    <track kind="captions" src="/videos/crochet-introduction-v2-en.vtt" srcLang="en" label="English" />
    Your browser does not support this video. <a href="/videos/crochet-introduction-v2.mp4">Open the video.</a>
  </video>;

  return <button className="video-preview" type="button" onClick={() => setPlaying(true)} aria-label="Play the crochet introduction video">
    <Image src="/videos/crochet-introduction-v2-poster.webp" alt="" fill sizes="(max-width:1334px) 90vw, 1200px" />
    <span className="video-play-label"><span aria-hidden="true">▶</span> Play film</span>
  </button>;
}
