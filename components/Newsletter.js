"use client";
// UI only — connect to your email provider via a server route later. Validate server-side too.
import { useState } from "react";
import { toast } from "./Toaster";
export default function Newsletter() {
  const [v, setV] = useState("");
  const submit = e => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) return toast("Please enter a valid email", "err");
    setV(""); toast("Thanks! You're on the list.");
  };
  return (<form className="news" onSubmit={submit}>
    <input type="email" value={v} onChange={e => setV(e.target.value)} placeholder="Your email" aria-label="Email address" maxLength={254} required />
    <button type="submit" aria-label="Subscribe">→</button></form>);
}
