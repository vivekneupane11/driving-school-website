import Link from "next/link";
import { Logo } from "./Header";
import { brand, lessons, guides, areas, legal, socials } from "./data";
import Newsletter from "./Newsletter";
import { RoadStrip } from "./Drive";

const cols = {
  Lessons: [...lessons.map(l => [l.t, "/" + l.slug]), ["Packages", "/packages"], ["Book a lesson", "/book"]],
  Guides: [...guides.map(g => [g.t, "/" + g.slug]), ["FAQ", "/faq"]],
  "Areas We Cover": areas.map(a => [a.n, "/" + a.slug]),
  "Get in Touch": [[brand.phone, "tel:0400000000"], [brand.email, `mailto:${brand.email}`], ["Contact us", "/contact"]],
};

export default function Footer() {
  return (<footer><RoadStrip reverse flat /><div className="wrap">
    <div className="fgrid">
      <div><Logo /><p style={{ marginTop: 16, maxWidth: 300 }}>Placeholder tagline — patient, professional driving lessons in {brand.city}.</p>
        <h4 style={{ marginTop: 24 }}>Join our newsletter</h4><Newsletter />
        <div className="soc">{socials.map(([n, h, i]) => <a key={n} href={h} aria-label={n} target="_blank" rel="noopener noreferrer">{i}</a>)}</div></div>
      {Object.entries(cols).map(([h, items]) => <div key={h}><h4>{h}</h4><ul>{items.map(([t, href]) => <li key={t}><Link href={href}>{t}</Link></li>)}</ul></div>)}
    </div>
    <div className="fbot"><span>© {new Date().getFullYear()} {brand.full}. All rights reserved.</span>
      <nav>{legal.map(l => <Link key={l.slug} href={"/" + l.slug}>{l.t}</Link>)}</nav></div>
  </div></footer>);
}
