import { ImageResponse } from "next/og";
import { business } from "@/lib/business";

export const alt = `${business.name} — Ginásio em Penafiel`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0a0a0c 55%, #16180d 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 110,
            fontWeight: 800,
            letterSpacing: "-2px",
            display: "flex",
          }}
        >
          GO&nbsp;<span style={{ color: "#c8f24a" }}>TO</span>&nbsp;GYM
        </div>
        <div style={{ fontSize: 38, color: "#d4d4d8", marginTop: 16 }}>
          {business.claim}
        </div>
        <div style={{ fontSize: 28, color: "#a1a1aa", marginTop: 40 }}>
          {`${business.address.full} · ${business.phone.display}`}
        </div>
      </div>
    ),
    size
  );
}
