"use client";
// Click any gallery image to open it full-screen. ←/→ to browse, Esc to close.
import { useEffect, useState } from "react";
export default function Lightbox({ images }) {
  const [i, setI] = useState(-1);
  const n = images.length, open = i >= 0;
  useEffect(() => {
    if (!open) return;
    const k = e => { if (e.key === "Escape") setI(-1); if (e.key === "ArrowRight") setI(x => (x + 1) % n); if (e.key === "ArrowLeft") setI(x => (x - 1 + n) % n); };
    addEventListener("keydown", k); document.body.style.overflow = "hidden";
    return () => { removeEventListener("keydown", k); document.body.style.overflow = ""; };
  }, [open, n]);
  return (<>
    <div className="gal">{images.map((src, k) => (
      <button className="rv" style={{ "--d": `${(k % 4) * .08}s` }} key={src} onClick={() => setI(k)} aria-label={`Open image ${k + 1}`}>
        <img src={src} alt="" loading="lazy" /><span className="zoom">⤢</span></button>))}
    </div>
    {open && <div className="lb" role="dialog" aria-modal="true" onClick={() => setI(-1)}>
      <img key={i} src={images[i].replace(/w=\d+&h=\d+/, "w=1600&h=1100")} alt="" onClick={e => e.stopPropagation()} />
      <button className="lb-x" aria-label="Close">✕</button>
      <button className="lb-n l" aria-label="Previous" onClick={e => { e.stopPropagation(); setI((i - 1 + n) % n); }}>‹</button>
      <button className="lb-n r" aria-label="Next" onClick={e => { e.stopPropagation(); setI((i + 1) % n); }}>›</button>
      <span className="lb-c">{i + 1} / {n}</span>
    </div>}
  </>);
}
