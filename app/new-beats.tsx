"use client";

import { useRef, useState } from "react";

const tracks = [
  { title: "If You Stayed", genre: "Soulful R&B / Hip-Hop", duration: "03:02", id: "iCDwGO0c14c" },
  { title: "Velvet Crown", genre: "Soulful Southern Hip-Hop", duration: "03:00", id: "QKYQY6bypuM" },
  { title: "2AM", genre: "R&B / Boom Bap", duration: "04:10", id: "xo3A8NdCYjk" },
];

export default function NewBeats() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [selected, setSelected] = useState<(typeof tracks)[number] | null>(null);
  return <>
    {tracks.map(track => <article className="beat-item" key={track.id}>
      <div className="beat-art" style={{ backgroundImage: `url(https://i.ytimg.com/vi/${track.id}/hqdefault.jpg)`, backgroundPosition: "center", filter: "none" }} />
      <div className="beat-details"><h3>{track.title}</h3><p>{track.genre}</p><div>
        <button aria-label={`Play ${track.title}`} onClick={() => { setSelected(track); dialog.current?.showModal(); }}>▶</button><span>{track.duration}</span>
      </div></div>
    </article>)}
    <dialog ref={dialog} onClose={() => setSelected(null)} style={{ width: "min(900px, 94vw)", padding: 20, background: "#111", color: "#fff", border: "1px solid #555" }}>
      <button onClick={() => dialog.current?.close()} aria-label="Close player" style={{ float: "right", padding: 12 }}>✕</button>
      {selected && <><h3>{selected.title}</h3><iframe title={selected.title} src={`https://www.youtube-nocookie.com/embed/${selected.id}?autoplay=1`} allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen style={{ width: "100%", aspectRatio: "16 / 9", border: 0 }} /><a href={`https://www.youtube.com/watch?v=${selected.id}`} target="_blank" rel="noopener noreferrer">Watch on YouTube ↗</a></>}
    </dialog>
  </>;
}
