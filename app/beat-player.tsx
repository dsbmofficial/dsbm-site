"use client";

import { useEffect, useRef, useState } from "react";

type BeatPlayerProps = { src: string; title: string };

export default function BeatPlayer({ src, title }: BeatPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => () => audioRef.current?.pause(), []);

  async function togglePlayback() {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      await audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  }

  return <>
    <audio ref={audioRef} preload="metadata" src={src} onEnded={() => setIsPlaying(false)} />
    <button className={isPlaying ? "is-playing" : undefined} onClick={togglePlayback} aria-label={`${isPlaying ? "Pause" : "Play"} ${title}`} aria-pressed={isPlaying}>
      {isPlaying ? "Ⅱ" : "▶"}
    </button>
  </>;
}
