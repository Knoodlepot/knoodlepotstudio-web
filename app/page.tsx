import ThemeToggle from "@/components/ThemeToggle";
import AppCard from "@/components/AppCard";
import { apps, sections, statusOrder } from "@/lib/apps";

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

/* Instagram SVG icon */
function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
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
            <a
              href="https://www.instagram.com/knoodlepot_studio/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              style={{ color: "var(--text-muted)", display: "flex", alignItems: "center" }}
            >
              <InstagramIcon />
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

      {/* ── Apps by Section ── */}
      <div
        id="apps"
        style={{
          padding: "4rem 1.5rem",
          maxWidth: "1100px",
          margin: "0 auto",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "4rem",
        }}
      >
        <div style={{ textAlign: "center" }}>
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

        {sections.map((section) => {
          const sectionApps = apps
            .filter((a) => a.category === section.id)
            .sort((a, b) => statusOrder[a.status] - statusOrder[b.status]);

          return (
            <div key={section.id}>
              {/* Section header */}
              <div style={{ marginBottom: "1.75rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.4rem" }}>
                  <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
                  <h3
                    style={{
                      fontFamily: "var(--font-cinzel)",
                      fontSize: "0.8rem",
                      letterSpacing: "0.25em",
                      textTransform: "uppercase",
                      color: "var(--gold)",
                      margin: 0,
                      flexShrink: 0,
                    }}
                  >
                    {section.label}
                  </h3>
                  <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontStyle: "italic",
                    fontSize: "0.8rem",
                    color: "var(--text-muted)",
                    textAlign: "center",
                    margin: 0,
                  }}
                >
                  {section.tagline}
                </p>
              </div>

              {/* Section grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                  gap: "1.25rem",
                }}
              >
                {sectionApps.map((app) => (
                  <AppCard key={app.name} app={app} />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Beta Testers ── */}
      <section
        style={{
          padding: "3rem 1.5rem",
          maxWidth: "720px",
          margin: "0 auto",
          width: "100%",
          textAlign: "center",
        }}
      >
        <a
          href="https://betatribe.app/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <div
            style={{
              border: "1px solid var(--border)",
              borderRadius: "8px",
              padding: "1.75rem 2rem",
              background: "var(--surface)",
              display: "flex",
              flexDirection: "column",
              gap: "0.6rem",
              alignItems: "center",
              transition: "border-color 0.2s",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-cinzel)",
                fontSize: "0.65rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--gold)",
                margin: 0,
              }}
            >
              Beta Testers
            </p>
            <p
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "1.05rem",
                color: "var(--text)",
                margin: 0,
              }}
            >
              Help shape our apps before they launch
            </p>
            <p
              style={{
                fontFamily: "var(--font-playfair)",
                fontStyle: "italic",
                fontSize: "0.875rem",
                color: "var(--text-muted)",
                margin: 0,
              }}
            >
              Join our community of testers on BetaTribe →
            </p>
          </div>
        </a>
      </section>

      {/* ── About ── */}
      <section
        id="about"
        style={{
          padding: "5rem 1.5rem",
          borderTop: "1px solid var(--border)",
          maxWidth: "720px",
          margin: "0 auto",
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
            gap: "0.75rem",
            alignItems: "center",
          }}
        >
          {/* Social links */}
          <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
            <a
              href="https://www.instagram.com/knoodlepot_studio/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-cinzel)",
                fontSize: "0.7rem",
                letterSpacing: "0.08em",
                color: "var(--text-muted)",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
              }}
            >
              <InstagramIcon /> Instagram
            </a>
            <a
              href="https://betatribe.app/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-cinzel)",
                fontSize: "0.7rem",
                letterSpacing: "0.08em",
                color: "var(--text-muted)",
                textDecoration: "none",
              }}
            >
              BetaTribe
            </a>
          </div>

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
