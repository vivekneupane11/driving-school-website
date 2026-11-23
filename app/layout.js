import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Toaster from "@/components/Toaster";
import Effects from "@/components/Effects";
import { brand, siteUrl, img } from "@/components/data";

const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });
const display = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-display" });
const desc = "Placeholder description — patient 1-on-1 driving lessons with free pickup.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: brand.full, template: `%s | ${brand.name}` },
  description: desc,
  alternates: { canonical: "./" }, // resolves per route
  openGraph: { type: "website", siteName: brand.full, title: brand.full, description: desc, url: "./", images: [{ url: img("og", 1200, 630), width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", title: brand.full, description: desc, images: [img("og", 1200, 630)] },
};
export const viewport = { themeColor: [{ media: "(prefers-color-scheme: light)", color: "#f9fafc" }, { media: "(prefers-color-scheme: dark)", color: "#02040d" }] };

export default function RootLayout({ children }) {
  return (<html lang="en" className={`${sans.variable} ${display.variable}`}><body>
    <a href="#main" className="skip">Skip to content</a>
    <Header /><main id="main">{children}</main><Footer /><Reveal /><Toaster /><Effects />
    <a href={brand.whatsapp} className="wa" aria-label="Chat with us on WhatsApp">💬</a>
  </body></html>);
}
