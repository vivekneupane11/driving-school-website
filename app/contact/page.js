import { PageHero, Steps } from "@/components/Sections";
import { brand, packages, mapQuery } from "@/components/data";
export const metadata = { title: "Contact us" };
// NOTE: form is UI only. Wire to a backend/form service later; validate input server-side
// and avoid storing personal data without a retention policy.
export default function P() {
  return (<><PageHero t="Contact us" s="Questions? We're happy to help." />
    <section><div className="wrap split" style={{ alignItems: "start" }}>
      <form className="form card rv" style={{ padding: 32 }}>
        <div className="row2"><label>Name<input placeholder="Your name" /></label><label>Phone<input placeholder="0400 000 000" /></label></div>
        <label>Email<input type="email" placeholder="you@example.com" /></label>
        
        <label>Message<textarea rows="4" placeholder="Anything we should know?" /></label>
        <button type="button" className="btn btn-a">Send message →</button>
      </form>
      <div className="rv" style={{ "--d": ".1s" }}>
        <span className="eyebrow">Get in touch</span><h2>We'd love to hear from you</h2>
        <ul className="ticks"><li>📞 {brand.phone}</li><li>✉️ {brand.email}</li><li>📍 {brand.city}</li><li>🕒 7 days a week</li></ul>
        <iframe className="map" title="Map" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src={`https://maps.google.com/maps?q=${encodeURIComponent(mapQuery)}&z=13&output=embed`} />
      </div>
    </div></section>
    <Steps /></>);
}
