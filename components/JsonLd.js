// Structured data for search engines (WebSite, DrivingSchool + services, FAQPage).
import { brand, siteUrl, packages, faqs, areas } from "./data";
export default function JsonLd() {
  const data = [
    { "@context": "https://schema.org", "@type": "WebSite", name: brand.full, url: siteUrl },
    { "@context": "https://schema.org", "@type": "DrivingSchool", name: brand.full, url: siteUrl, telephone: brand.phone, email: brand.email,
      areaServed: areas.map(a => ({ "@type": "City", name: a.n })),
      makesOffer: packages.map(p => ({ "@type": "Offer", name: `${p.h} ${p.t}`, itemOffered: { "@type": "Service", name: p.t, description: p.d } })) },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) },
  ];
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
