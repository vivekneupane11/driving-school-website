// Generic page for lessons, areas, guides and legal pages — slugs come from data.js.
import { notFound } from "next/navigation";
import { PageHero, Packages, Why, Faq, Cta, About } from "@/components/Sections";
import { lessons, areas, guides, legal, brand } from "@/components/data";

const all = [...lessons.map(x => ({ ...x, k: "lesson" })), ...areas.map(x => ({ ...x, k: "area" })), ...guides.map(x => ({ ...x, k: "guide" })), ...legal.map(x => ({ ...x, k: "legal" }))];
export const dynamicParams = false;
export function generateStaticParams() { return all.map(x => ({ slug: x.slug })); }
export async function generateMetadata({ params }) { const { slug } = await params; const p = all.find(x => x.slug === slug); return { title: p?.t }; }

export default async function P({ params }) {
  const { slug } = await params;
  const p = all.find(x => x.slug === slug);
  if (!p) notFound();
  const text = (
    <section><div className="wrap prose rv">
      {["Overview", "What to expect", "Next steps"].map(h => <div key={h}><h2>{h}</h2><p>Placeholder content for “{p.t}”. Replace with your own copy for this page.</p></div>)}
    </div></section>);
  if (p.k === "legal" || p.k === "guide") return <><PageHero t={p.t} s={`Last updated: placeholder · ${brand.full}`} />{text}{p.k === "guide" && <Cta />}</>;
  return <><PageHero t={p.t} s={p.d || `Free pickup and 1-on-1 lessons in ${p.n}.`} />{text}<About /><Packages /><Why /><Faq /><Cta /></>;
}
