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

/* Facebook SVG icon */
function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.513c-1.491 0-1.956.93-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
    </svg>
  );
}

/* LinkedIn SVG icon */
function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

/* GitHub SVG icon */
function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
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
            Knoodlepot Studio
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
            <a
              href="https://www.facebook.com/profile.php?id=61589830114090&locale=en_GB"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              style={{ color: "var(--text-muted)", display: "flex", alignItems: "center" }}
            >
              <FacebookIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/daniel-grommes-0726a140b"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              style={{ color: "var(--text-muted)", display: "flex", alignItems: "center" }}
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://github.com/Knoodlepot"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              style={{ color: "var(--text-muted)", display: "flex", alignItems: "center" }}
            >
              <GitHubIcon />
            </a>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          width: "100%",
          padding: "2rem 1.5rem",
          textAlign: "center",
          display: "flex",
          flexDirection: "column" as const,
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-cinzel)",
            fontSize: "0.7rem",
            letterSpacing: "0.25em",
            textTransform: "uppercase" as const,
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
          Knoodlepot Studio
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
          Knoodlepot Studio is an independent one-person studio based in the United Kingdom,
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

      {/* ── Great Communities ── */}
      <section
        style={{
          borderTop: "1px solid var(--border)",
          padding: "3rem 1.5rem",
          maxWidth: "720px",
          margin: "0 auto",
          width: "100%",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-cinzel)",
            fontSize: "0.65rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase" as const,
            color: "var(--gold)",
            marginBottom: "1.5rem",
          }}
        >
          Great Communities
        </p>
        <div style={{ display: "flex", flexWrap: "wrap" as const, justifyContent: "center", gap: "0.75rem" }}>
          {/* BetaTribe */}
          <a
            href="https://betatribe.app/join?ref=knoodlepotstudios"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <div
              style={{
                border: "1px solid var(--border)",
                borderRadius: "6px",
                padding: "1rem",
                background: "var(--surface)",
                display: "flex",
                flexDirection: "column" as const,
                gap: "0.4rem",
                textAlign: "left",
              }}
            >
              <p style={{ fontFamily: "var(--font-cinzel)", fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase" as const, color: "var(--gold)", margin: 0 }}>
                Beta Testers
              </p>
              <p style={{ fontFamily: "var(--font-playfair)", fontSize: "0.85rem", color: "var(--text)", margin: 0, lineHeight: 1.5 }}>
                Help shape our apps before they launch
              </p>
              <p style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic", fontSize: "0.75rem", color: "var(--text-muted)", margin: 0 }}>
                Join us on BetaTribe →
              </p>
            </div>
          </a>
          {/* LaunchIgniter */}
          <a
            href="https://launchigniter.com/product/greenman?ref=badge-greenman"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid var(--border)",
              borderRadius: "6px",
              padding: "1rem",
              background: "var(--surface)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://launchigniter.com/api/badge/greenman?theme=dark"
              alt="Featured on LaunchIgniter"
              width={212}
              height={55}
              style={{ display: "block", maxWidth: "100%", height: "auto" }}
            />
          </a>
        </div>
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
              href="https://www.facebook.com/profile.php?id=61589830114090&locale=en_GB"
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
              <FacebookIcon /> Facebook
            </a>
            <a
              href="https://www.linkedin.com/in/daniel-grommes-0726a140b"
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
              <LinkedInIcon /> LinkedIn
            </a>
            <a
              href="https://github.com/Knoodlepot"
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
              <GitHubIcon /> GitHub
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
            © 2026 Knoodlepot Studio · UK Sole Trader
          </p>
        </div>
      </footer>

    </div>
  );
}
