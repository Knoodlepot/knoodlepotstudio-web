import { App, statusLabel, statusColour } from "@/lib/apps";

interface AppCardProps {
  app: App;
}

export default function AppCard({ app }: AppCardProps) {
  return (
    <div
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "8px",
        padding: "1.5rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.6rem",
        transition: "border-color 0.2s",
      }}
      className="app-card"
    >
      {/* Status badge */}
      <span
        style={{
          display: "inline-block",
          fontSize: "0.65rem",
          fontFamily: "var(--font-cinzel)",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: statusColour[app.status],
          background: `${statusColour[app.status]}22`,
          border: `1px solid ${statusColour[app.status]}44`,
          borderRadius: "4px",
          padding: "2px 8px",
          alignSelf: "flex-start",
        }}
      >
        {statusLabel[app.status]}
      </span>

      {/* Name */}
      <h3
        style={{
          fontFamily: "var(--font-playfair)",
          fontSize: "1.2rem",
          fontWeight: 600,
          color: "var(--gold)",
          margin: 0,
        }}
      >
        {app.name}
      </h3>

      {/* Tagline */}
      <p
        style={{
          fontFamily: "var(--font-playfair)",
          fontStyle: "italic",
          fontSize: "0.85rem",
          color: "var(--text-muted)",
          margin: 0,
        }}
      >
        {app.tagline}
      </p>

      {/* Description */}
      <p
        style={{
          fontSize: "0.875rem",
          color: "var(--text)",
          lineHeight: 1.6,
          margin: 0,
          flexGrow: 1,
        }}
      >
        {app.description}
      </p>

      {/* Footer row */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "0.25rem",
        }}
      >
        <span
          style={{
            fontSize: "0.7rem",
            color: "var(--text-muted)",
            fontFamily: "var(--font-cinzel)",
            letterSpacing: "0.05em",
          }}
        >
          {app.platform}
        </span>

        {app.link && (
          <a
            href={app.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "0.75rem",
              color: "var(--gold)",
              textDecoration: "none",
              fontFamily: "var(--font-cinzel)",
              letterSpacing: "0.05em",
              borderBottom: "1px solid var(--gold)",
              paddingBottom: "1px",
            }}
          >
            {app.linkLabel ?? "View →"}
          </a>
        )}
      </div>

      {/* Product Hunt badge */}
      {app.productHuntPostId && app.productHuntSlug && (
        <div style={{ marginTop: "0.75rem" }}>
          <a
            href={`https://www.producthunt.com/products/${app.productHuntSlug}?utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-${app.productHuntSlug}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt={`${app.name} | Product Hunt`}
              src={`https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=${app.productHuntPostId}&theme=dark`}
              width={200}
              height={43}
              style={{ display: "block" }}
            />
          </a>
        </div>
      )}
    </div>
  );
}
