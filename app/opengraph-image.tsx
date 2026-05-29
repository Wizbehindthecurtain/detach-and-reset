// Auto-generated Open Graph share card. Next.js renders this at request time
// (per the app/opengraph-image file convention) and serves the result as
// /opengraph-image. 1200×630 is the standard OG canvas — same image is reused
// for Twitter via the auto-fallback from app/twitter-image when that file is
// absent.
//
// Constraints worth knowing about for ImageResponse / Satori:
//   - Only flexbox layout (no CSS grid, no float).
//   - Limited CSS — no `opacity`; use rgba/hex for transparency.
//   - Custom fonts require fetching a .ttf and passing as ArrayBuffer in the
//     `fonts` option. We're using system-ui here for v1 to keep the
//     generator zero-dependency; the brand recognition lands via color +
//     composition + the "REMOVAL & RE-INSTALL" safety-orange punch.

import { ImageResponse } from "next/og";

export const alt =
  "Removal and Re-Install — Florida's solar removal & re-install crew for roofers.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#0B1E3F",
          display: "flex",
          flexDirection: "column",
          padding: "70px 80px",
          fontFamily:
            "system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
          position: "relative",
        }}
      >
        {/* Subtle vertical hairline pattern — implemented as a stack of thin
            transparent divs to fake the blueprint-grid feel. ImageResponse
            doesn't support repeating-linear-gradient reliably. */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "100%",
            height: "1px",
            background:
              "linear-gradient(90deg, rgba(255,106,19,0) 0%, rgba(255,106,19,0.6) 60%, rgba(255,106,19,0.1) 100%)",
            display: "flex",
          }}
        />

        {/* Eyebrow — mono caps in safety orange */}
        <div
          style={{
            display: "flex",
            fontSize: 22,
            color: "#FF6A13",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            fontWeight: 500,
          }}
        >
          ▌ Florida solar R&R · for roofers
        </div>

        {/* Push the H1 down */}
        <div style={{ flex: 1, display: "flex" }} />

        {/* H1 — three lines, "REMOVAL & RE-INSTALL" punched in orange */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 110,
            fontWeight: 900,
            color: "#F5F2EC",
            lineHeight: 0.95,
            letterSpacing: "-0.025em",
            textTransform: "uppercase",
          }}
        >
          <div style={{ display: "flex" }}>Florida&apos;s solar</div>
          <div style={{ display: "flex", color: "#FF6A13" }}>
            removal &amp; re-install
          </div>
          <div style={{ display: "flex" }}>crew for roofers.</div>
        </div>

        {/* Bottom spec line — wordmark + license recap */}
        <div
          style={{
            display: "flex",
            marginTop: 56,
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 20,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "rgba(245, 242, 236, 0.7)",
            fontWeight: 600,
          }}
        >
          <span style={{ display: "flex" }}>Removal and Re-Install</span>
          <span style={{ display: "flex" }}>FL · EC13013240 · Insured</span>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
