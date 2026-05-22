import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Selene — Private Period Tracking",
  description:
    "A period tracker that cannot share your data. On-device only. No accounts. No servers. No cloud.",
  openGraph: {
    title: "Selene — Private Period Tracking",
    description:
      "A period tracker that cannot share your data — not because we promise, but because the architecture makes it impossible.",
    url: "https://knoodlepotstudio.com/selene",
    siteName: "Knoodlepot Studio",
    type: "website",
  },
};

const colours = {
  navy: "#0A1628",
  navyLight: "#132240",
  gold: "#C8A951",
  goldDim: "rgba(200, 169, 81, 0.7)",
  cream: "#F5F0E6",
  creamMuted: "rgba(245, 240, 230, 0.65)",
  white: "#FFFFFF",
};

const s = {
  page: {
    backgroundColor: colours.navy,
    color: colours.cream,
    minHeight: "100vh",
    fontFamily: "var(--font-inter), system-ui, sans-serif",
    WebkitFontSmoothing: "antialiased" as const,
  },
  section: {
    maxWidth: 720,
    margin: "0 auto",
    padding: "5rem 1.5rem",
  } as React.CSSProperties,
  sectionAlt: {
    maxWidth: 720,
    margin: "0 auto",
    padding: "5rem 1.5rem",
    backgroundColor: colours.navyLight,
    borderTop: `1px solid ${colours.goldDim}`,
    borderBottom: `1px solid ${colours.goldDim}`,
  } as React.CSSProperties,
  overline: {
    fontFamily: "var(--font-cinzel), serif",
    fontSize: "0.7rem",
    letterSpacing: "0.22em",
    textTransform: "uppercase" as const,
    color: colours.gold,
    marginBottom: "1rem",
  },
  heading: {
    fontFamily: "var(--font-cinzel), serif",
    fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
    fontWeight: 600,
    letterSpacing: "0.04em",
    lineHeight: 1.25,
    color: colours.white,
    marginBottom: "1rem",
  },
  headingLg: {
    fontFamily: "var(--font-cinzel), serif",
    fontSize: "clamp(2rem, 6vw, 3rem)",
    fontWeight: 700,
    letterSpacing: "0.04em",
    lineHeight: 1.15,
    color: colours.white,
    marginBottom: "1.25rem",
  } as React.CSSProperties,
  body: {
    fontFamily: "var(--font-inter), system-ui, sans-serif",
    fontSize: "1.05rem",
    lineHeight: 1.75,
    color: colours.creamMuted,
  },
  subhead: {
    fontFamily: "var(--font-playfair), Georgia, serif",
    fontStyle: "italic" as const,
    fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
    lineHeight: 1.65,
    color: colours.creamMuted,
  } as React.CSSProperties,
  card: {
    backgroundColor: colours.navy,
    border: `1px solid ${colours.goldDim}`,
    borderRadius: 6,
    padding: "1.5rem",
  } as React.CSSProperties,
  cardHeading: {
    fontFamily: "var(--font-cinzel), serif",
    fontSize: "0.85rem",
    letterSpacing: "0.1em",
    textTransform: "uppercase" as const,
    color: colours.gold,
    marginBottom: "0.5rem",
  } as React.CSSProperties,
  ctaBtn: {
    display: "inline-block",
    fontFamily: "var(--font-cinzel), serif",
    fontSize: "0.8rem",
    letterSpacing: "0.1em",
    textTransform: "uppercase" as const,
    color: colours.navy,
    backgroundColor: colours.gold,
    padding: "0.75rem 2rem",
    borderRadius: 4,
    textDecoration: "none",
    border: "none",
    cursor: "pointer",
    fontWeight: 600,
  } as React.CSSProperties,
  rule: {
    height: 1,
    backgroundColor: colours.goldDim,
    border: "none",
    margin: "2.5rem 0",
  } as React.CSSProperties,
  footer: {
    maxWidth: 720,
    margin: "0 auto",
    padding: "2.5rem 1.5rem 3rem",
    textAlign: "center" as const,
    borderTop: `1px solid ${colours.goldDim}`,
  },
  footerText: {
    fontFamily: "var(--font-inter), system-ui, sans-serif",
    fontSize: "0.8rem",
    color: colours.creamMuted,
    lineHeight: 1.7,
  },
  navLink: {
    fontFamily: "var(--font-cinzel), serif",
    fontSize: "0.7rem",
    letterSpacing: "0.1em",
    color: colours.gold,
    textDecoration: "none",
  } as React.CSSProperties,
  input: {
    fontFamily: "var(--font-inter), system-ui, sans-serif",
    fontSize: "1rem",
    padding: "0.7rem 1rem",
    borderRadius: 4,
    border: `1px solid ${colours.goldDim}`,
    backgroundColor: colours.navyLight,
    color: colours.cream,
    outline: "none",
    width: "100%",
    boxSizing: "border-box" as const,
    maxWidth: 360,
    marginBottom: "0.75rem",
    display: "block",
  } as React.CSSProperties,
  microcopy: {
    fontFamily: "var(--font-inter), system-ui, sans-serif",
    fontSize: "0.82rem",
    lineHeight: 1.6,
    color: "rgba(245, 240, 230, 0.45)",
    maxWidth: 420,
    marginTop: "0.75rem",
  } as React.CSSProperties,
  timelineDot: {
    width: 10,
    height: 10,
    borderRadius: "50%",
    backgroundColor: colours.gold,
    flexShrink: 0,
    marginTop: "0.4rem",
  } as React.CSSProperties,
  timelineLine: {
    width: 1,
    backgroundColor: colours.goldDim,
    flexShrink: 0,
    alignSelf: "stretch" as const,
  } as React.CSSProperties,
};

export default function SelenePage() {
  return (
    <div style={s.page}>

      {/* ── Hero ── */}
      <section
        style={{
          maxWidth: 720,
          margin: "0 auto",
          padding: "6rem 1.5rem 5rem",
          textAlign: "left" as const,
        }}
      >
        <p style={s.overline}>Selene</p>
        <h1 style={s.headingLg}>
          Your body knows. Your phone should keep it to itself.
        </h1>
        <p style={{ ...s.subhead, maxWidth: 540, marginBottom: "2rem" }}>
          A period tracker that cannot share your data — not because we
          promise, but because the architecture makes it impossible.
        </p>
        <a href="#waitlist" style={s.ctaBtn}>
          Get notified at launch
        </a>
      </section>

      {/* ── Privacy guarantee ── */}
      <section style={s.sectionAlt}>
        <p style={s.overline}>Privacy</p>
        <h2 style={s.heading}>We say cannot, not won&apos;t.</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1.25rem",
            marginTop: "2rem",
          }}
        >
          <div style={s.card}>
            <h3 style={s.cardHeading}>On-device only</h3>
            <p style={{ ...s.body, fontSize: "0.95rem" }}>
              No accounts. No servers. No cloud. Data stays encrypted in
              Android Keystore, on your phone alone.
            </p>
          </div>
          <div style={s.card}>
            <h3 style={s.cardHeading}>AES-256 encryption</h3>
            <p style={{ ...s.body, fontSize: "0.95rem" }}>
              All data encrypted at rest. The same standard used by banks
              and governments.
            </p>
          </div>
          <div style={s.card}>
            <h3 style={s.cardHeading}>Zero third-party access</h3>
            <p style={{ ...s.body, fontSize: "0.95rem" }}>
              No analytics SDK. No advertising SDK. No tracking SDK.
              Nothing phones home.
            </p>
          </div>
        </div>
      </section>

      {/* ── Clinical credibility ── */}
      <section style={s.section}>
        <p style={s.overline}>Clinical frameworks</p>
        <h2 style={s.heading}>Built to NHS and NICE clinical frameworks.</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "1rem",
            marginTop: "2rem",
          }}
        >
          {[
            {
              label: "PBAC",
              desc: "Pictorial Blood Assessment Chart — heavy menstrual bleeding scoring",
            },
            {
              label: "PMDD",
              desc: "Premenstrual Dysphoric Disorder — DSM-5 diagnostic criteria",
            },
            {
              label: "NICE NG73",
              desc: "Endometriosis — diagnosis and management guideline",
            },
            {
              label: "PCOS",
              desc: "Updated May 2026 — Rotterdam diagnostic criteria",
            },
          ].map((fw) => (
            <div key={fw.label} style={s.card}>
              <h3 style={s.cardHeading}>{fw.label}</h3>
              <p style={{ ...s.body, fontSize: "0.88rem" }}>{fw.desc}</p>
            </div>
          ))}
        </div>

        <p style={{ ...s.body, marginTop: "2rem" }}>
          When a threshold is met, Selene surfaces a quiet prompt — not an
          alert. Just enough to start a conversation with your GP.
        </p>

        <div
          style={{
            ...s.card,
            marginTop: "2rem",
            borderColor: colours.gold,
            backgroundColor: colours.navyLight,
          }}
        >
          <h3 style={{ ...s.cardHeading, color: colours.white }}>
            GP Summary
          </h3>
          <p style={{ ...s.body, fontSize: "0.95rem", color: colours.cream }}>
            One tap generates a clinician-ready summary of your relevant
            data — cycle history, symptom patterns, framework flags. Ready
            for your appointment.
          </p>
        </div>
      </section>

      {/* ── Story ── */}
      <section style={s.sectionAlt}>
        <p style={s.overline}>Why Selene exists</p>
        <h2 style={s.heading}>
          Cambridge called for this. Flo proved why.
        </h2>

        <div
          style={{
            display: "flex",
            flexDirection: "column" as const,
            gap: "0",
            marginTop: "2rem",
          }}
        >
          {[
            {
              year: "2021",
              body: "FTC finds Flo shared intimate health data with Facebook and Google without consent. Millions of users&apos; period and pregnancy data was sent to third parties they never agreed to.",
            },
            {
              year: "2025",
              body: "Cambridge University researchers publish a call for a privacy-first period app — no accounts, on-device processing only. The specification is clear: data never leaves the phone.",
            },
            {
              year: "2026",
              body: "Selene. Built to the Cambridge specification. Every design decision traces back to those two words: on-device only.",
            },
          ].map((item, i) => (
            <div
              key={item.year}
              style={{
                display: "flex",
                gap: "1rem",
                paddingBottom: i < 2 ? "1.5rem" : 0,
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column" as const,
                  alignItems: "center",
                  gap: 0,
                }}
              >
                <div style={s.timelineDot} />
                {i < 2 && <div style={s.timelineLine} />}
              </div>
              <div>
                <p
                  style={{
                    ...s.cardHeading,
                    marginBottom: "0.25rem",
                    fontSize: "0.75rem",
                  }}
                >
                  {item.year}
                </p>
                <p style={{ ...s.body, fontSize: "0.92rem" }}>{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Features ── */}
      <section style={s.section}>
        <p style={s.overline}>Features</p>
        <h2 style={s.heading}>What Selene does.</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "1rem",
            marginTop: "2rem",
          }}
        >
          {[
            "Cycle tracking with clinical intelligence",
            "Symptom and mood logging",
            "NHS/NICE framework mapping",
            "GP Summary export",
            "One-off £3.99 — no subscription ever",
            "Dark, calm design — no pink, no pastels",
          ].map((feat) => (
            <div key={feat} style={s.card}>
              <p style={{ ...s.body, fontSize: "0.9rem", margin: 0 }}>
                {feat}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Email waitlist ── */}
      <section id="waitlist" style={s.sectionAlt}>
        <p style={s.overline}>Launch</p>
        <h2 style={s.heading}>Be the first to know when Selene launches.</h2>

        {/* TODO: replace with chairman's Mailchimp form action URL */}
        <form
          action="#"
          method="POST"
          style={{ marginTop: "1.5rem" }}
          onSubmit={(e) => e.preventDefault()}
        >
          <label htmlFor="email" style={{ display: "none" }}>
            Email address
          </label>
          <input
            id="email"
            type="email"
            name="EMAIL"
            placeholder="your@email.com"
            required
            style={s.input}
            aria-label="Email address for launch notification"
          />
          <button type="submit" style={s.ctaBtn}>
            Notify me
          </button>
        </form>

        <p style={s.microcopy}>
          We don&apos;t need your name, your cycle, or anything else. Just an
          email address. We&apos;ll send one message when Selene is live, then
          nothing more.
        </p>
      </section>

      {/* ── Footer ── */}
      <footer style={s.footer}>
        <p style={s.footerText}>© Knoodlepot Studio</p>
        <p style={s.footerText}>Built in the United Kingdom</p>
        <p style={{ ...s.footerText, fontSize: "0.75rem" }}>
          Selene is an Android app. iOS coming later.
        </p>
        <p style={{ ...s.footerText, fontSize: "0.72rem", marginTop: "1rem" }}>
          Selene collects nothing. This landing page uses no tracking or
          analytics.
        </p>
        <div
          style={{
            display: "flex",
            gap: "1.5rem",
            justifyContent: "center",
            marginTop: "1.25rem",
          }}
        >
          <a href="/selene/privacy" style={s.navLink}>
            Privacy Policy
          </a>
          <a href="/selene/terms" style={s.navLink}>
            Terms of Service
          </a>
        </div>
      </footer>
    </div>
  );
}
