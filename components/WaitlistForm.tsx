"use client";

const colours = {
  navyLight: "#132240",
  gold: "#C8A951",
  goldDim: "rgba(200, 169, 81, 0.7)",
  cream: "#F5F0E6",
};

const s = {
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
  btn: {
    display: "inline-block",
    fontFamily: "var(--font-cinzel), serif",
    fontSize: "0.8rem",
    letterSpacing: "0.1em",
    textTransform: "uppercase" as const,
    color: "#0A1628",
    backgroundColor: colours.gold,
    padding: "0.75rem 2rem",
    borderRadius: 4,
    textDecoration: "none",
    border: "none",
    cursor: "pointer",
    fontWeight: 600,
  } as React.CSSProperties,
  microcopy: {
    fontFamily: "var(--font-inter), system-ui, sans-serif",
    fontSize: "0.82rem",
    lineHeight: 1.6,
    color: "rgba(245, 240, 230, 0.45)",
    maxWidth: 420,
    marginTop: "0.75rem",
  } as React.CSSProperties,
};

export default function WaitlistForm() {
  return (
    <>
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
        <button type="submit" style={s.btn}>
          Notify me
        </button>
      </form>

      <p style={s.microcopy}>
        We don&apos;t need your name, your cycle, or anything else. Just an
        email address. We&apos;ll send one message when Selene is live, then
        nothing more.
      </p>
    </>
  );
}
