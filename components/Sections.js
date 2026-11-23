// Reusable page sections. Each page composes these.
import Link from "next/link";
import Share from "./Share";
import Lightbox from "./Lightbox";
import { Car, RoadStrip, TrafficLight, Sign, Speedo, Route, LPlate } from "./Drive";
import { img, brand, stats, packages, lessons, why, facts, faqs, reviews, steps } from "./data";
const trust = ["Mirror · Signal · Manoeuvre", "Free pickup & drop-off", "Dual-control automatic", "7 days a week", "Test-route practice", "Patient 1-on-1 lessons", "Flexible packages"];

const d = i => ({ "--d": `${i * 0.08}s` }); // stagger delay for scroll reveal
const Head = ({ eb, t, s, c }) => (
  <div className={`head rv ${c ? "c" : ""}`}><span className="eyebrow">{eb}</span><h2>{t}</h2>{s && <p className="sub">{s}</p>}</div>
);

export function Hero() {
  return (<>
    <section className="hero"><div className="pattern" /><div className="blob b1" /><div className="blob b2" />
      <div className="wrap">
        <div>
          <span className="pill a-up"><span className="dot" />Now booking lessons in {brand.city}</span>
          <h1 className="words">{["Driving", "lessons", "across"].map((w, i) => <span key={w} style={{ "--i": i }}>{w} </span>)}<span style={{ "--i": 3 }} className="tg-p">{brand.city} </span><span style={{ "--i": 4 }} className="tg-a">& surrounds</span></h1>
          <p className="sub a-up d2">Patient, 1-on-1 lessons in a dual-control automatic. Free pickup and drop-off from home, work or school — 7 days a week.</p>
          <div className="btns a-up d3">
            <Link href="/book" className="btn btn-a shine">Book Your First Lesson <span className="arr">→</span></Link>
            <a href="tel:0400000000" className="btn btn-o">📞 {brand.phone}</a>
          </div>
        </div>
        <div className="hero-img a-scale d2" data-tilt>
          <img src={img("learnercar", 900, 900)} alt="Learner vehicle" />
          <div className="float f1"><b><span data-count="5.0">5.0</span> ★</b>Google rating</div>
          <div className="sticker"><LPlate size={64} /></div>
          <div className="mirror"><img src={img("road4", 300, 140)} alt="" /></div>
          <div className="float f2"><b data-count="98" data-suffix="%">98%</b>first-time pass*</div>
        </div>
      </div>
      <RoadStrip />
    </section>
    <div className="wrap stats">{stats.map(([b, s], i) => { const m = b.match(/^(\$?)(\d+)$/);
      return <div className="stat rv" style={d(i)} key={s}><Speedo pct={[.55, .25, .9, .7][i]} /><b {...(m ? { "data-count": m[2], "data-prefix": m[1] } : {})}>{b}</b><small>{s}</small></div>; })}</div>
    <div className="marquee" aria-hidden><div>{[0, 1].map(k => <span key={k}>{trust.map(t => <em key={t}><i className="mk" />{t}</em>)}</span>)}</div></div>
  </>);
}

export function Packages({ all }) {
  return (<section id="packages"><div className="wrap">
    <Head eb="Packages" t={<>Booking a package is <span className="tg-a">more beneficial</span> than just one lesson</>} s="Bundle your hours, save money, and progress faster with a plan built for your goal." />
    <div className="grid g4">{packages.map((p, i) => (
      <div className="card rv" style={d(i)} key={p.h + p.t}>
        <div className="media"><img loading="lazy" src={img(p.s)} alt="" /><span className="badge">{p.h}</span>{p.pop && <span className="badge pop">★ Popular</span>}</div>
        <div className="pad"><h3>{p.t}</h3><p className="sub" style={{ fontSize: ".92rem" }}>{p.d}</p>
          <div className="price" style={{ marginTop: 12 }}>{p.p} <small style={{ fontSize: ".8rem", color: "var(--muted)", fontWeight: 500 }}>full course</small></div>
          {all && <ul className="ticks sm">{p.f.map(x => <li key={x}>{x}</li>)}</ul>}
          <div className="acts"><Link href="/book" className="btn btn-p btn-sm">Book now <span className="arr">→</span></Link><a href={brand.whatsapp} className="btn btn-w btn-sm">💬 Enquire on WhatsApp</a></div>
        </div>
      </div>))}
    </div>
    {!all && <div className="rv" style={{ textAlign: "center", marginTop: 36 }}><Link href="/packages" className="link">Compare every package <span className="arr">→</span></Link></div>}
  </div></section>);
}

export function Lessons() {
  return (<section className="alt"><div className="wrap">
    <Head eb="Lessons" t="Three kinds of lesson" s="Wherever you are on your driving journey, there's a lesson designed for you." />
    <div className="grid g3">{lessons.map((l, i) => (
      <Link href={"/" + l.slug} className="card rv" style={d(i)} key={l.slug}>
        <div className="media"><img loading="lazy" src={img(l.s)} alt="" /><span className="on-img">{l.t}</span></div>
        <div className="pad"><p className="sub" style={{ fontSize: ".95rem" }}>{l.d}</p><span className="link">Learn more <span className="arr">→</span></span></div>
      </Link>))}
    </div>
  </div></section>);
}

export function About() {
  return (<section><div className="wrap split">
    <div className="rv"><span className="eyebrow">About us</span><h2>Built so you drive with <span className="tg-p">total confidence.</span></h2>
      <p className="sub">Placeholder paragraph about your instructor, teaching approach and values. Replace with your own story.</p>
      <ul className="ticks"><li>Calm, patient instruction</li><li>Lessons tailored to your pace</li><li>Feedback after every session</li></ul>
      <div className="btns"><Link href="/book" className="btn btn-a">See available times <span className="arr">→</span></Link><Link href="/contact" className="btn btn-o">Talk to an instructor first</Link></div>
    </div>
    <div className="pics"><img loading="lazy" className="rv" src={img("instructor", 500, 700)} alt="" /><img loading="lazy" className="rv" style={d(2)} src={img("steering", 500, 700)} alt="" /></div>
  </div></section>);
}

export function Why() {
  return (<section className="dark"><Route /><div className="orb" /><div className="wrap" style={{ position: "relative" }}>
    <Head c eb="Why choose us" t="Built around your safety, paced around your confidence." />
    <div className="grid g3">{why.map((w, i) => <div className="card pad rv" style={{ ...d(i), padding: 28 }} key={w.t}><Sign shape={["diamond", "circle", "octagon"][i]}>{w.i}</Sign><h3>{w.t}</h3><p>{w.d}</p></div>)}</div>
  </div></section>);
}

export function Facts() {
  return (<section><div className="wrap">
    <Head eb="Quick facts" t={`${brand.full} at a glance`} />
    <div className="tbl rv">{facts.map(([k, v]) => <div key={k}><b>{k}</b><span>{v}</span></div>)}</div>
  </div></section>);
}

export function Faq() {
  return (<section className="alt"><div className="wrap">
    <Head c eb="FAQ" t="Common questions about driving lessons" s="Can't find what you're looking for? Give us a call." />
    <div className="faq">{faqs.map(([q, a], i) => <details className="rv" style={d(i)} key={q}><summary>{q}<span className="pm" /></summary><p>{a}</p></details>)}</div>
  </div></section>);
}

const G = () => (<svg className="gicon" viewBox="0 0 24 24" aria-label="Google"><path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.4h6.5a5.6 5.6 0 0 1-2.4 3.6v3h3.9c2.2-2.1 3.5-5.1 3.5-8.7z"/><path fill="#34A853" d="M12 24c3.2 0 6-1.1 8-2.9l-3.9-3c-1.1.7-2.5 1.2-4.1 1.2-3.1 0-5.8-2.1-6.7-5H1.3v3.1A12 12 0 0 0 12 24z"/><path fill="#FBBC05" d="M5.3 14.3a7.2 7.2 0 0 1 0-4.6V6.6H1.3a12 12 0 0 0 0 10.8z"/><path fill="#EA4335" d="M12 4.8c1.8 0 3.3.6 4.6 1.8l3.4-3.4A12 12 0 0 0 1.3 6.6l4 3.1c.9-2.8 3.6-4.9 6.7-4.9z"/></svg>);

export function Reviews() {
  return (<section className="reviews"><div className="wrap">
    <div className="rev-head">
      <div className="rv"><span className="eyebrow">Reviews</span><h2>Loved by learners across the region.</h2><p className="sub">Real words from real learners — many now proudly on their P plates.</p></div>
      <div className="rating rv" style={d(1)}>
        <div className="big">5.0</div>
        <div><div className="stars">★★★★★</div><small>Based on <b>XX</b> Google reviews</small></div>
        <G />
      </div>
    </div>
    <div className="masonry">{reviews.map(([n, t, tag, passed], i) => (
      <figure className={`rcard rv ${i === 0 ? "feat" : ""}`} style={d(i % 3)} key={n}>
        <div className="rtop"><span className="stars">★★★★★</span><G /></div>
        <blockquote>{t}</blockquote>
        <figcaption>
          <span className="av" style={{ "--h": i * 55 }}>{n.split(" ").map(x => x[0]).join("")}</span>
          <div><b>{n}</b><small>{tag}</small></div>
          {passed && <span className="pplate" title="Passed their test"><i>P</i>Passed</span>}
        </figcaption>
      </figure>))}
    </div>
    <div className="rv" style={{ textAlign: "center", marginTop: 40 }}><a href="#" className="btn btn-o"><G /> See all reviews on Google <span className="arr">→</span></a></div>
  </div></section>);
}

export function Steps() {
  return (<section className="alt"><div className="wrap">
    <Head c eb="How it works" t="From booking to behind the wheel." />
    <div className="grid g3 steps">{steps.map(([t, s], i) => <div className="card step rv" style={d(i)} key={t}><TrafficLight on={i} /><div><span className="stepno">Step {i + 1}</span><h3>{t}</h3><p className="sub" style={{ fontSize: ".95rem" }}>{s}</p></div></div>)}</div>
  </div></section>);
}

export function Gallery({ count = 8, more = true }) {
  const imgs = Array.from({ length: count }, (_, i) => img("road" + i, 600, 600));
  return (<section><div className="wrap">
    <Head eb="Gallery" t="Moments from the road." s="Happy learners, new licences and proud first drives." />
    <Lightbox images={imgs} />
    {more && <div className="rv" style={{ textAlign: "center", marginTop: 32 }}><Link href="/gallery" className="btn btn-o">View full gallery <span className="arr">→</span></Link></div>}
  </div></section>);
}

export function Cta() {
  return (<section><div className="wrap"><div className="cta rv"><div className="checker" /><div className="orb" /><div className="cta-car"><Car w={150} /></div>
    <div style={{ position: "relative" }}><h2>Ready to start <span className="tg-a">driving?</span></h2>
      <p className="sub">Lock in a time that suits you — it takes less than a minute.</p>
      <div className="btns"><Link href="/book" className="btn btn-a shine">Reserve Your Time Slot <span className="arr">→</span></Link><Link href="/contact" className="btn btn-g">Talk to us first</Link></div></div>
  </div></div></section>);
}

export function PageHero({ t, s, crumb }) {
  return (<section className="phero"><div className="pattern" style={{ opacity: .4 }} /><div className="orb" /><div className="wrap" style={{ position: "relative" }}>
    <div className="crumbs a-up"><Link href="/">Home</Link> / {crumb || t}</div>
    <h1 className="a-up d1">{t}</h1>{s && <p className="sub a-up d2">{s}</p>}
    <Share />
  </div></section>);
}
