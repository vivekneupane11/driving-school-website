import { brand } from "@/components/data";
export default function manifest() {
  return { name: brand.full, short_name: brand.name, start_url: "/", display: "standalone", background_color: "#f9fafc", theme_color: "#0b2b5f",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }, { src: "/apple-icon", sizes: "180x180", type: "image/png" }] };
}
