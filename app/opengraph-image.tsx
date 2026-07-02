import { ImageResponse } from "next/og";
import { business } from "@/lib/business";

export const alt = `${business.name} — Ginásio em Penafiel`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Réplica do logo oficial: moldura quadrada amarela, "GO / TO GYM" a branco
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 70,
          background: "#000000",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: 380,
            height: 380,
            border: "22px solid #f2f200",
          }}
        >
          <div style={{ fontSize: 128, fontWeight: 800, lineHeight: 1 }}>GO</div>
          <div
            style={{
              fontSize: 44,
              fontWeight: 700,
              letterSpacing: 10,
              marginTop: 12,
            }}
          >
            TO GYM
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 560 }}>
          <div style={{ fontSize: 46, fontWeight: 800, color: "#f2f200" }}>
            {business.claim}
          </div>
          <div style={{ fontSize: 30, color: "#d4d4d8", marginTop: 28 }}>
            {business.address.full}
          </div>
          <div style={{ fontSize: 30, color: "#a1a1aa", marginTop: 12 }}>
            {business.phone.display}
          </div>
        </div>
      </div>
    ),
    size
  );
}
