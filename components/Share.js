"use client";
import { toast } from "./Toaster";
export default function Share() {
  const url = () => window.location.href;
  // Clipboard API first; fall back to execCommand for browsers/iframes that block it.
  const fallback = t => { const a = document.createElement("textarea"); a.value = t; a.style.position = "fixed"; a.style.opacity = "0"; document.body.appendChild(a); a.select(); const ok = document.execCommand("copy"); a.remove(); return ok; };
  const copy = async () => { const u = url(); let ok = false; try { await navigator.clipboard.writeText(u); ok = true; } catch { ok = fallback(u); } ok ? toast("Link copied to clipboard") : toast("Couldn't copy link", "err"); };
  const share = async () => { if (navigator.share) { try { await navigator.share({ title: document.title, url: url() }); } catch {} } else copy(); };
  return (<div className="share a-up d3"><span>Share this page</span>
    <button onClick={share} className="btn btn-g btn-sm">↗ Share</button>
    <button onClick={copy} className="btn btn-g btn-sm">🔗 Copy link</button></div>);
}
