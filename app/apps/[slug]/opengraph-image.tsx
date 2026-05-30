import { ImageResponse } from "next/og";
import { apps } from "@/lib/apps";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/* Pre-render an image for every known app slug at build time */
export async function generateStaticParams() {
  return apps.map((app) => ({ slug: app.slug }));
}

const statusLabel: Record<string, string> = {
  live: "Available Now",
  "in-development": "In Development",
  "coming-soon": "Coming Soon",
};

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const app = apps.find((a) => a.slug === slug);

  /* Fallback image if slug is unknown */
  if (!app) {
    return new ImageResponse(
      (
        <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#0d0b09" }}>
          <p style={{ color: "#c9a84c", fontSize: 32, display: "flex" }}>Knoodlepot Studio</p>
        </div>
      ),
      { ...size }
    );
  }

  const label = statusLabel[app.status] ?? "";

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
          padding: "60px 100px",
          position: "relative",
        }}
      >
        {/* Corner decorations */}
        <div style={{ position: "absolute", top: 32, left: 40, width: 60, height: 60, borderTop: "1px solid #c9a84c44", borderLeft: "1px solid #c9a84c44", display: "flex" }} />
        <div style={{ position: "absolute", top: 32, right: 40, width: 60, height: 60, borderTop: "1px solid #c9a84c44", borderRight: "1px solid #c9a84c44", display: "flex" }} />
        <div style={{ position: "absolute", bottom: 32, left: 40, width: 60, height: 60, borderBottom: "1px solid #c9a84c44", borderLeft: "1px solid #c9a84c44", display: "flex" }} />
        <div style={{ position: "absolute", bottom: 32, right: 40, width: 60, height: 60, borderBottom: "1px solid #c9a84c44", borderRight: "1px solid #c9a84c44", display: "flex" }} />

        {/* Studio name — small, top */}
        <p style={{ color: "#c9a84c", fontSize: 18, letterSpacing: "0.3em", textTransform: "uppercase", margin: "0 0 32px", opacity: 0.7, display: "flex" }}>
          Knoodlepot Studio
        </p>

        {/* App name */}
        <h1 style={{ color: "#f5f0e8", fontSize: 96, fontWeight: 700, margin: "0 0 16px", textAlign: "center", lineHeight: 1.05, display: "flex" }}>
          {app.name}
        </h1>

        {/* Gold rule */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, margin: "20px 0" }}>
          <div style={{ width: 60, height: 1, background: "#c9a84c", opacity: 0.5, display: "flex" }} />
          <div style={{ width: 7, height: 7, background: "#c9a84c", transform: "rotate(45deg)", opacity: 0.8, display: "flex" }} />
          <div style={{ width: 60, height: 1, background: "#c9a84c", opacity: 0.5, display: "flex" }} />
        </div>

        {/* Tagline */}
        <p style={{ color: "#a09070", fontSize: 32, margin: "0 0 36px", textAlign: "center", lineHeight: 1.5, display: "flex" }}>
          {app.tagline}
        </p>

        {/* Status badge */}
        <div style={{ display: "flex", alignItems: "center", border: "1px solid #c9a84c55", borderRadius: 4, padding: "6px 16px" }}>
          <p style={{ color: "#c9a84c", fontSize: 16, letterSpacing: "0.2em", textTransform: "uppercase", margin: 0, display: "flex" }}>
            {label}
          </p>
        </div>
      </div>
    ),
    { ...size }
  );
}
