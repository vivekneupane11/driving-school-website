// Driving-themed graphics (pure SVG/CSS, no images): L-plate, car, road, traffic light, road signs, speedometer.

export function LPlate({ size = 38 }) {
  return (<svg className="lplate" width={size} height={size} viewBox="0 0 40 40" aria-hidden>
    <rect x="1" y="1" width="38" height="38" rx="7" fill="#fcd700" stroke="#111" strokeWidth="2" />
    <path d="M14 9v19h13v-5h-8V9z" fill="#111" />
  </svg>);
}

// Side-view hatchback with spinning wheels. `color` sets body colour.
export function Car({ color = "var(--accent)", className = "", w = 120 }) {
  return (<svg className={`car ${className}`} width={w} viewBox="0 0 120 56" aria-hidden>
    <path d="M8 38c0-6 3-10 10-11l14-12c3-3 7-4 11-4h28c5 0 9 2 12 6l9 10c9 1 20 4 20 11v4c0 2-2 4-4 4H12c-2 0-4-2-4-4z" fill={color} />
    <path d="M36 27l10-10c2-2 4-2 6-2h10v12zM66 15h6c3 0 6 1 8 4l6 8H66z" fill="#cfe8ff" opacity=".9" />
    <rect x="58" y="31" width="7" height="2" rx="1" fill="#0006" />
    <rect x="22" y="22" width="12" height="12" rx="2" fill="#fcd700" stroke="#111" /><path d="M26 25v6h5v-2h-3v-4z" fill="#111" />
    <circle cx="108" cy="37" r="3" fill="#fff6c2" />
    {[30, 92].map(x => <g key={x} className="wheel" style={{ transformOrigin: `${x}px 46px` }}>
      <circle cx={x} cy="46" r="9" fill="#111" /><circle cx={x} cy="46" r="4" fill="#aaa" />
      <path d={`M${x} 38v16M${x - 8} 46h16`} stroke="#555" strokeWidth="1.5" /></g>)}
  </svg>);
}

// Asphalt strip with animated centre line and a car driving across.
export function RoadStrip({ reverse = false, flat = false }) {
  return (<div className={`roadstrip ${flat ? "flat" : ""}`} aria-hidden>
    <div className="lane" />
    <div className={`driver ${reverse ? "rev" : ""}`}><Car w={90} color={reverse ? "#38a3d9" : "var(--accent)"} /></div>
  </div>);
}

// Traffic light. `on` = 0 red, 1 amber, 2 green.
export function TrafficLight({ on = 0 }) {
  return (<div className="tlight" aria-hidden>{["r", "a", "g"].map((c, i) => <i key={c} className={`${c} ${i === on ? "on" : ""}`} />)}</div>);
}

// Road-sign shaped icon holder. shape: diamond | circle | octagon | shield
export function Sign({ shape = "diamond", children }) {
  return <div className={`sign ${shape}`} aria-hidden><span>{children}</span></div>;
}

// Semicircle speedometer; needle sweeps to `pct` (0–1) when parent .rv gets .in
export function Speedo({ pct = .7 }) {
  const ticks = Array.from({ length: 11 }, (_, i) => { const a = Math.PI * (1 - i / 10); return [50 + 38 * Math.cos(a), 50 - 38 * Math.sin(a), 50 + 44 * Math.cos(a), 50 - 44 * Math.sin(a)]; });
  return (<svg className="speedo" viewBox="0 0 100 56" aria-hidden style={{ "--deg": `${pct * 180 - 90}deg` }}>
    <path d="M6 50a44 44 0 0 1 88 0" fill="none" stroke="var(--border)" strokeWidth="6" strokeLinecap="round" />
    <path className="arc" d="M6 50a44 44 0 0 1 88 0" fill="none" stroke="url(#sg)" strokeWidth="6" strokeLinecap="round" pathLength="100" style={{ "--pct": pct * 100 }} />
    <defs><linearGradient id="sg"><stop offset="0" stopColor="#22c55e" /><stop offset=".6" stopColor="#fcab00" /><stop offset="1" stopColor="#ef4444" /></linearGradient></defs>
    {ticks.map(([a, b, c, d], i) => <line key={i} x1={a} y1={b} x2={c} y2={d} stroke="var(--muted)" strokeWidth={i % 5 ? .8 : 1.6} />)}
    <g className="needle"><path d="M50 50L50 14" stroke="var(--fg)" strokeWidth="2.4" strokeLinecap="round" /></g>
    <circle cx="50" cy="50" r="4" fill="var(--fg)" />
  </svg>);
}

// Winding dashed route line (decorative, for section backgrounds)
export function Route({ className = "" }) {
  return (<svg className={`route ${className}`} viewBox="0 0 400 800" preserveAspectRatio="none" aria-hidden>
    <path d="M200 0C80 120 320 220 200 340S60 560 200 660 260 760 200 800" fill="none" />
  </svg>);
}
