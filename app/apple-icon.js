import { ImageResponse } from "next/og";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";
export default function Icon() {
  return new ImageResponse(<div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#fcd700", }}><div style={{ display: "flex", fontSize: 130, fontWeight: 900, color: "#111", lineHeight: 1 }}>L</div></div>, size);
}
