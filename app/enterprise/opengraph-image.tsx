// Auto-generated Open Graph share card for /enterprise. Quiet Luxury register:
// ivory ground, Cormorant Garamond Light headline with italic brass accent,
// brass hairline marks, mono-caps brand strip at the bottom.
//
// Fonts loaded at render time from Google Fonts via the CSS API. If the fetch
// fails for any reason, the OG falls back to Satori's default sans (Noto) and
// still renders — the aesthetic degrades but the share card still ships.

import { ImageResponse } from "next/og";

export const alt =
  "Detach and Reset — An operating brief for PE-backed roofing platforms";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const COLORS = {
  ivory: "#F8F3E8",
  ink: "#1A1612",
  brass: "#9C7B3F",
  muted: "#4A4338",
};

async function loadGoogleFont(
  family: string,
  weight: number,
  italic: boolean = false,
): Promise<ArrayBuffer | null> {
  try {
    const url = `https://fonts.googleapis.com/css2?family=${family.replace(/ /g, "+")}:ital,wght@${italic ? "1" : "0"},${weight}&display=swap`;
    const cssRes = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
      },
    });
    if (!cssRes.ok) return null;
    const css = await cssRes.text();
    const fontUrl = css.match(/src: url\((https:[^)]+)\) format\(/)?.[1];
    if (!fontUrl) return null;
    const fontRes = await fetch(fontUrl);
    if (!fontRes.ok) return null;
    return await fontRes.arrayBuffer();
  } catch {
    return null;
  }
}

export default async function Image() {
  const [cormorantLight, cormorantItalic] = await Promise.all([
    loadGoogleFont("Cormorant Garamond", 300, false),
    loadGoogleFont("Cormorant Garamond", 300, true),
  ]);

  const fonts: Array<{
    name: string;
    data: ArrayBuffer;
    weight: 300;
    style: "normal" | "italic";
  }> = [];
  if (cormorantLight)
    fonts.push({
      name: "Cormorant",
      data: cormorantLight,
      weight: 300,
      style: "normal",
    });
  if (cormorantItalic)
    fonts.push({
      name: "Cormorant",
      data: cormorantItalic,
      weight: 300,
      style: "italic",
    });

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: COLORS.ivory,
          display: "flex",
          flexDirection: "column",
          fontFamily: "Cormorant, serif",
          padding: "84px 96px",
          position: "relative",
        }}
      >
        {/* Top eyebrow */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            fontFamily: "sans-serif",
            fontSize: 16,
            letterSpacing: "0.42em",
            textTransform: "uppercase",
            color: COLORS.brass,
          }}
        >
          An Operating Brief
        </div>

        {/* Brass hairline */}
        <div
          style={{
            display: "flex",
            width: 32,
            height: 1,
            background: COLORS.brass,
            margin: "36px auto 0",
          }}
        />

        {/* Spacer to push headline to center */}
        <div style={{ flex: 1, display: "flex" }} />

        {/* Headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: COLORS.ink,
            fontFamily: "Cormorant, serif",
            fontWeight: 300,
            fontSize: 108,
            lineHeight: 1.04,
            letterSpacing: "-0.03em",
            textAlign: "center",
          }}
        >
          <div style={{ display: "flex" }}>The solar problem,</div>
          <div style={{ display: "flex", marginTop: 8 }}>
            <span
              style={{
                color: COLORS.brass,
                fontStyle: "italic",
                fontWeight: 400,
                marginRight: 24,
              }}
            >
              solved
            </span>
            <span>at portfolio scale.</span>
          </div>
        </div>

        {/* Lede */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: 36,
            fontFamily: "sans-serif",
            fontWeight: 300,
            fontSize: 22,
            lineHeight: 1.55,
            color: COLORS.muted,
            textAlign: "center",
            maxWidth: 760,
            margin: "36px auto 0",
          }}
        >
          A single operating partnership for solar detach &amp; reset across every portfolio company — Florida and 14 other states, manufacturer-aligned, fully insured.
        </div>

        {/* Spacer to bottom */}
        <div style={{ flex: 1, display: "flex" }} />

        {/* Bottom rule + brand strip */}
        <div
          style={{
            display: "flex",
            width: "100%",
            height: 1,
            background: "rgba(26,22,18,0.22)",
            margin: "0 0 24px",
          }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              fontFamily: "Cormorant, serif",
              fontStyle: "italic",
              fontWeight: 300,
              fontSize: 26,
              color: COLORS.ink,
            }}
          >
            Detach &amp; Reset
          </div>
          <div
            style={{
              display: "flex",
              fontFamily: "sans-serif",
              fontSize: 13,
              letterSpacing: "0.42em",
              textTransform: "uppercase",
              color: COLORS.muted,
              fontWeight: 400,
            }}
          >
            A 4i Energy Partners Co.
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: fonts.length > 0 ? fonts : undefined,
    },
  );
}
