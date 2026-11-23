import { siteUrl, pagePaths, lessons, areas, guides, legal } from "@/components/data";
export default function sitemap() {
  const slugs = [...lessons, ...areas, ...guides, ...legal].map(x => "/" + x.slug);
  return [...pagePaths, ...slugs].map(p => ({ url: siteUrl + p, lastModified: new Date(), priority: p === "/" ? 1 : 0.7 }));
}
