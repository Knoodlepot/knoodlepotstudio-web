import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0d0b09",
          padding: "60px 80px",
          position: "relative",
        }}
      >
        {/* Corner decorations */}
        <div style={{ position: "absolute", top: 32, left: 40, width: 60, height: 60, borderTop: "1px solid #c9a84c44", borderLeft: "1px solid #c9a84c44", display: "flex" }} />
        <div style={{ position: "absolute", top: 32, right: 40, width: 60, height: 60, borderTop: "1px solid #c9a84c44", borderRight: "1px solid #c9a84c44", display: "flex" }} />
        <div style={{ position: "absolute", bottom: 32, left: 40, width: 60, height: 60, borderBottom: "1px solid #c9a84c44", borderLeft: "1px solid #c9a84c44", display: "flex" }} />
        <div style={{ position: "absolute", bottom: 32, right: 40, width: 60, height: 60, borderBottom: "1px solid #c9a84c44", borderRight: "1px solid #c9a84c44", display: "flex" }} />

        {/* Eyebrow */}
        <p style={{ color: "#c9a84c", fontSize: 20, letterSpacing: "0.35em", textTransform: "uppercase", margin: "0 0 24px", display: "flex" }}>
          Independent Studio
        </p>

        {/* Studio name */}
        <h1 style={{ color: "#f5f0e8", fontSize: 86, fontWeight: 700, margin: "0 0 28px", textAlign: "center", lineHeight: 1.1, display: "flex" }}>
          Knoodlepot Studio
        </h1>

        {/* Gold rule with diamond */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 28 }}>
          <div style={{ width: 80, height: 1, background: "#c9a84c", opacity: 0.5, display: "flex" }} />
          <div style={{ width: 8, height: 8, background: "#c9a84c", transform: "rotate(45deg)", opacity: 0.8, display: "flex" }} />
          <div style={{ width: 80, height: 1, background: "#c9a84c", opacity: 0.5, display: "flex" }} />
        </div>

        {/* Tagline */}
        <p style={{ color: "#a09070", fontSize: 30, margin: "0 0 40px", textAlign: "center", lineHeight: 1.5, display: "flex" }}>
          Apps steeped in myth, lore, and Victorian wonder
        </p>

        {/* URL */}
        <p style={{ color: "#c9a84c", fontSize: 18, letterSpacing: "0.15em", textTransform: "uppercase", margin: 0, opacity: 0.7, display: "flex" }}>
          knoodlepotstudio.com
        </p>
      </div>
    ),
    { ...size }
  );
}
