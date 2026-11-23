"use client";
// Tiny toast system: call toast("message") from any client component.
import { useEffect, useState } from "react";
export const toast = (msg, type = "ok") => window.dispatchEvent(new CustomEvent("toast", { detail: { msg, type } }));
export default function Toaster() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const on = e => { const id = Date.now() + Math.random(); setItems(x => [...x, { id, ...e.detail }]); setTimeout(() => setItems(x => x.filter(i => i.id !== id)), 3200); };
    window.addEventListener("toast", on); return () => window.removeEventListener("toast", on);
  }, []);
  return <div className="toasts" role="status" aria-live="polite">{items.map(t => <div className={`toast ${t.type}`} key={t.id}><i>{t.type === "ok" ? "✓" : "!"}</i>{t.msg}</div>)}</div>;
}
