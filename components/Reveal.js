"use client";
// Adds .in to every .rv element when it scrolls into view (re-runs on route change).
import { usePathname } from "next/navigation";
import { useEffect } from "react";
export default function Reveal() {
  const path = usePathname();
  useEffect(() => {
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting || e.boundingClientRect.top < 0) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: .12, rootMargin: "0px 0px -40px 0px" });
    document.querySelectorAll(".rv:not(.in)").forEach(el => io.observe(el));
    return () => io.disconnect();
  }, [path]);
  return null;
}
