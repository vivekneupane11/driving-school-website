import { PageHero, Steps } from "@/components/Sections";
import { brand, packages, img } from "@/components/data";
export const metadata = { title: "Book a lesson" };
// NOTE: form is UI only. Wire to a backend/form service later; validate input server-side
// and avoid storing personal data without a retention policy.
export default function P() {
  return (<><PageHero t="Book a lesson" s="Pick a package and a time — we'll confirm within the hour." />
    <section><div className="wrap split" style={{ alignItems: "start" }}>
      <form className="form card rv" style={{ padding: 32 }}>
        <div className="row2"><label>Name<input placeholder="Your name" /></label><label>Phone<input placeholder="0400 000 000" /></label></div>
        <label>Email<input type="email" placeholder="you@example.com" /></label>
        <div className="row2"><label>Package<select>{packages.map(p => <option key={p.h + p.t}>{p.h} — {p.t}</option>)}<option>Single lesson</option></select></label><label>Preferred date<input type="date" /></label></div>
        <label>Message<textarea rows="4" placeholder="Anything we should know?" /></label>
        <button type="button" className="btn btn-a">Request booking →</button>
      </form>
      <div className="rv" style={{ "--d": ".1s" }}>
        <span className="eyebrow">Get in touch</span><h2>We'd love to hear from you</h2>
        <ul className="ticks"><li>📞 {brand.phone}</li><li>✉️ {brand.email}</li><li>📍 {brand.city}</li><li>🕒 7 days a week</li></ul>
        <img src={img("road1", 800, 500)} alt="" style={{ borderRadius: 20, marginTop: 28 }} />
      </div>
    </div></section>
    <Steps /></>);
}
