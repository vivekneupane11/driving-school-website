"use client";
// Site-wide micro-interactions. All respect prefers-reduced-motion.
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Car } from "./Drive";

export default function Effects() {
  const path = usePathname();
  const [top, setTop] = useState(false);

  useEffect(() => {
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const bar = document.querySelector(".progress"), pcar = document.querySelector(".pcar");

    // scroll progress bar + back-to-top visibility
    const onScroll = () => {
      const y = scrollY, max = document.documentElement.scrollHeight - innerHeight;
      const pr = max > 0 ? y / max : 0;
      if (bar) bar.style.transform = `scaleX(${pr})`;
      if (pcar) pcar.style.left = `calc(${pr * 100}% - ${pr * 34}px)`;
      setTop(y > 800);
    };
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });

    // cursor spotlight on cards + subtle 3D tilt on [data-tilt]
    const onMove = e => {
      const c = e.target.closest?.(".card, .stat");
      if (c) { const r = c.getBoundingClientRect(); c.style.setProperty("--mx", `${e.clientX - r.left}px`); c.style.setProperty("--my", `${e.clientY - r.top}px`); }
      if (!reduce) document.querySelectorAll("[data-tilt]").forEach(t => {
        const r = t.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
        if (Math.abs(x) < 1 && Math.abs(y) < 1) t.style.transform = `perspective(1000px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg)`;
        else t.style.transform = "";
      });
    };
    addEventListener("pointermove", onMove, { passive: true });

    // count-up numbers: <b data-count="98" data-prefix="" data-suffix="%">
    const io = new IntersectionObserver(es => es.forEach(en => {
      if (!en.isIntersecting) return;
      const el = en.target, end = parseFloat(el.dataset.count), dec = (el.dataset.count.split(".")[1] || "").length, t0 = performance.now(), dur = reduce ? 0 : 1400;
      const step = now => { const p = Math.min(1, (now - t0) / (dur || 1)), v = end * (1 - Math.pow(1 - p, 3));
        el.textContent = (el.dataset.prefix || "") + v.toFixed(dec) + (el.dataset.suffix || ""); if (p < 1) requestAnimationFrame(step); };
      requestAnimationFrame(step); io.unobserve(el);
    }), { threshold: .6 });
    document.querySelectorAll("[data-count]").forEach(el => io.observe(el));

    // image load shimmer: mark images loaded
    document.querySelectorAll("main img").forEach(img => {
      const done = () => img.classList.add("loaded");
      img.complete ? done() : img.addEventListener("load", done, { once: true });
    });

    return () => { removeEventListener("scroll", onScroll); removeEventListener("pointermove", onMove); io.disconnect(); };
  }, [path]);

  return (<>
    <div className="progress" aria-hidden /><div className="pcar" aria-hidden><Car w={34} /></div>
    <button className={`totop ${top ? "on" : ""}`} aria-label="Back to top" onClick={() => scrollTo({ top: 0, behavior: "smooth" })}>↑</button>
  </>);
}
