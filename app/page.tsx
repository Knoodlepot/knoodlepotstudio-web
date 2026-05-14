import ThemeToggle from "@/components/ThemeToggle";
import AppCard from "@/components/AppCard";
import { apps } from "@/lib/apps";

/* Decorative SVG flourish */
function GoldRule() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "1rem", width: "100%", maxWidth: "480px", margin: "0 auto" }}>
      <div style={{ flex: 1, height: "1px", background: "var(--gold)", opacity: 0.4 }} />
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0 }}>
        <path d="M9 1 L10.2 6.8 L16 8 L10.2 9.2 L9 15 L7.8 9.2 L2 8 L7.8 6.8 Z" fill="var(--gold)" opacity="0.7" />
      </svg>
      <div style={{ flex: 1, height: "1px", background: "var(--gold)", opacity: 0.4 }} />
    </div>
  );
}

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>

      {/* ── Navigation ── */}
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: "var(--nav-bg)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid var(--border)",
          padding: "0 1.5rem",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            height: "56px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-cinzel)",
              fontSize: "0.95rem",
              letterSpacing: "0.12em",
              color: "var(--gold)",
              textTransform: "uppercase",
            }}
          >
            Knoodlepot Studios
          </span>

          <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
            <a
              href="#apps"
              style={{
                fontSize: "0.8rem",
                fontFamily: "var(--font-cinzel)",
                letterSpacing: "0.08em",
                color: "var(--text-muted)",
                textDecoration: "none",
              }}
            >
              Apps
            </a>
            <a
              href="#about"
              style={{
                fontSize: "0.8rem",
                fontFamily: "var(--font-cinzel)",
                letterSpacing: "0.08em",
                color: "var(--text-muted)",
                textDecoration: "none",
              }}
            >
              About
            </a>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section
        style={{
          padding: "6rem 1.5rem 5rem",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.5rem",
        }}
      >
        {/* Overline */}
        <p
          style={{
            fontFamily: "var(--font-cinzel)",
            fontSize: "0.7rem",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "var(--gold)",
            margin: 0,
          }}
        >
          Independent Studio
        </p>

        {/* Main heading */}
        <h1
          style={{
            fontFamily: "var(--font-cinzel)",
            fontSize: "clamp(2rem, 6vw, 3.75rem)",
            fontWeight: 700,
            letterSpacing: "0.08em",
            lineHeight: 1.15,
            color: "var(--text)",
            margin: 0,
            maxWidth: "720px",
          }}
        >
          Knoodlepot Studios
        </h1>

        {/* Tagline */}
        <p
          style={{
            fontFamily: "var(--font-playfair)",
            fontStyle: "italic",
            fontSize: "clamp(1rem, 2.5vw, 1.35rem)",
            color: "var(--text-muted)",
            margin: 0,
            maxWidth: "540px",
            lineHeight: 1.6,
          }}
        >
          Apps steeped in myth, lore, and Victorian wonder
        </p>

        <GoldRule />

        {/* CTA */}
        <a
          href="#apps"
          style={{
            fontFamily: "var(--font-cinzel)",
            fontSize: "0.75rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--bg)",
            background: "var(--gold)",
            padding: "0.65rem 1.75rem",
            borderRadius: "4px",
            textDecoration: "none",
            marginTop: "0.5rem",
          }}
        >
          Explore the Collection
        </a>
      </section>

      {/* ── Apps Grid ── */}
      <section
        id="apps"
        style={{
          padding: "4rem 1.5rem",
          maxWidth: "1100px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h2
            style={{
              fontFamily: "var(--font-cinzel)",
              fontSize: "clamp(1.1rem, 3vw, 1.5rem)",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--text)",
              marginBottom: "0.75rem",
            }}
          >
            The Collection
          </h2>
          <p
            style={{
              fontFamily: "var(--font-playfair)",
              fontStyle: "italic",
              color: "var(--text-muted)",
              fontSize: "0.95rem",
            }}
          >
            Each app is a world unto itself
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {apps.map((app) => (
            <AppCard key={app.name} app={app} />
          ))}
        </div>
      </section>

      {/* ── About ── */}
      <section
        id="about"
        style={{
          padding: "5rem 1.5rem",
          borderTop: "1px solid var(--border)",
          maxWidth: "720px",
          margin: "2rem auto 0",
          width: "100%",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-cinzel)",
            fontSize: "1rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--gold)",
            marginBottom: "1.5rem",
          }}
        >
          About the Studio
        </h2>
        <p
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "1.05rem",
            lineHeight: 1.85,
            color: "var(--text)",
            marginBottom: "1.25rem",
          }}
        >
          Knoodlepot Studios is an independent one-person studio based in the United Kingdom,
          building mobile and web apps with a love of Victorian aesthetics, mythology, folklore,
          and the natural world.
        </p>
        <p
          style={{
            fontFamily: "var(--font-playfair)",
            fontStyle: "italic",
            fontSize: "0.95rem",
            lineHeight: 1.8,
            color: "var(--text-muted)",
          }}
        >
          Every app is crafted with care — designed to feel different from the ordinary,
          rooted in history, and worth your time.
        </p>
      </section>

      {/* ── Footer ── */}
      <footer
        style={{
          marginTop: "auto",
          borderTop: "1px solid var(--border)",
          padding: "2rem 1.5rem",
          textAlign: "center",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            alignItems: "center",
          }}
        >
          <a
            href="mailto:knoodlepot@knoodlepotstudio.com"
            style={{
              fontFamily: "var(--font-cinzel)",
              fontSize: "0.75rem",
              letterSpacing: "0.06em",
              color: "var(--gold)",
              textDecoration: "none",
            }}
          >
            knoodlepot@knoodlepotstudio.com
          </a>
          <p
            style={{
              fontFamily: "var(--font-cinzel)",
              fontSize: "0.65rem",
              letterSpacing: "0.08em",
              color: "var(--text-muted)",
              margin: 0,
            }}
          >
            © 2026 Knoodlepot Studios · UK Sole Trader
          </p>
        </div>
      </footer>

    </div>
  );
}
