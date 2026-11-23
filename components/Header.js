"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, brand } from "./data";
import { LPlate } from "./Drive";

export function Logo() {
  return <Link href="/" className="logo"><LPlate /><span>Drive<b>Right</b></span></Link>;
}

export default function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  // shadow once scrolled; slide away when scrolling down, back when scrolling up
  useEffect(() => {
    let last = window.scrollY;
    const f = () => { const y = window.scrollY; setScrolled(y > 10); setHidden(y > 400 && y > last); last = y; };
    f(); window.addEventListener("scroll", f, { passive: true }); return () => window.removeEventListener("scroll", f);
  }, []);
  useEffect(() => setOpen(false), [path]);
  const links = nav.map(([n, h]) => <Link key={h} href={h} className={path === h ? "on" : ""}>{n}</Link>);
  return (<>
    <div className="topbar"><div className="wrap">
      <span>📞 <a href="tel:0400000000">{brand.phone}</a> · ✉️ <a href={`mailto:${brand.email}`}>{brand.email}</a></span>
      <span>Open 7 days · Free pickup</span>
    </div></div>
    <header className={`hdr ${scrolled ? "s" : ""} ${hidden && !open ? "hide" : ""}`}>
      <div className="wrap">
        <Logo />
        <nav className="links">{links}</nav>
        <Link href="/book" className="btn btn-a btn-sm">Book Now <span className="arr">→</span></Link>
        <button className="burger" aria-label="Menu" onClick={() => setOpen(!open)}>{open ? "✕" : "☰"}</button>
      </div>
      {open && <nav className="mnav">{links}<Link href="/book" className="btn btn-a">Book Now</Link></nav>}
    </header>
  </>);
}
