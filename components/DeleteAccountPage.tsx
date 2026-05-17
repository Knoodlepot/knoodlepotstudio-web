import React from "react";

const styles: Record<string, React.CSSProperties> = {
  page: { backgroundColor: "#FAF7F2", minHeight: "100vh", fontFamily: "Georgia, serif", color: "#1a1a1a" },
  back: { display: "block", padding: "16px 24px", fontSize: 13, color: "#C4993A", textDecoration: "none", maxWidth: 720, margin: "0 auto" },
  container: { maxWidth: 720, margin: "0 auto", padding: "16px 24px 80px" },
  title: { fontSize: 36, fontWeight: "bold", color: "#004225", marginBottom: 8 },
  subtitle: { fontSize: 14, color: "#666", marginBottom: 4 },
  rule: { fontSize: 13, color: "#999", marginBottom: 40, borderBottom: "1px solid #e0d9cf", paddingBottom: 24 },
  section: { marginBottom: 32 },
  heading: { fontSize: 18, fontWeight: "bold", color: "#004225", marginBottom: 12 },
  list: { paddingLeft: 20, lineHeight: 1.8 },
  link: { color: "#C4993A" },
  callout: {
    background: "#f0ebe1",
    border: "1px solid #d9cfc0",
    borderLeft: "4px solid #004225",
    borderRadius: "4px",
    padding: "16px 20px",
    marginBottom: 32,
    fontSize: 15,
    lineHeight: 1.7,
  },
  emailBtn: {
    display: "inline-block",
    background: "#004225",
    color: "#FAF7F2",
    fontFamily: "Georgia, serif",
    fontSize: 14,
    textDecoration: "none",
    padding: "10px 20px",
    borderRadius: "4px",
    marginTop: 8,
  },
};

export function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>{title}</h2>
      {children}
    </section>
  );
}

export function DeleteAccountPage({
  appName,
  children,
}: {
  appName: string;
  children: React.ReactNode;
}) {
  return (
    <main style={styles.page}>
      <a href="/" style={styles.back}>← Knoodlepot Studio</a>
      <div style={styles.container}>
        <h1 style={styles.title}>Delete Your Account</h1>
        <p style={styles.subtitle}>{appName} — Knoodlepot Studio</p>
        <p style={styles.rule}>&nbsp;</p>
        {children}
      </div>
    </main>
  );
}

export { styles };
