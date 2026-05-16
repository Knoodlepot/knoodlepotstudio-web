import React from "react";

const styles: Record<string, React.CSSProperties> = {
  page: { backgroundColor: "#FAF7F2", minHeight: "100vh", fontFamily: "Georgia, serif", color: "#1a1a1a" },
  back: { display: "block", padding: "16px 24px", fontSize: 13, color: "#C4993A", textDecoration: "none", maxWidth: 720, margin: "0 auto" },
  container: { maxWidth: 720, margin: "0 auto", padding: "16px 24px 80px" },
  title: { fontSize: 36, fontWeight: "bold", color: "#004225", marginBottom: 8 },
  subtitle: { fontSize: 14, color: "#666", marginBottom: 4 },
  updated: { fontSize: 13, color: "#999", marginBottom: 40, borderBottom: "1px solid #e0d9cf", paddingBottom: 24 },
  section: { marginBottom: 32 },
  heading: { fontSize: 18, fontWeight: "bold", color: "#004225", marginBottom: 12 },
  list: { paddingLeft: 20, lineHeight: 1.8 },
  link: { color: "#C4993A" },
};

export function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>{title}</h2>
      {children}
    </section>
  );
}

export function PrivacyPage({
  appName,
  lastUpdated,
  children,
}: {
  appName: string;
  lastUpdated: string;
  children: React.ReactNode;
}) {
  return (
    <main style={styles.page}>
      <a href="/" style={styles.back}>← Knoodlepot Studios</a>
      <div style={styles.container}>
        <h1 style={styles.title}>Privacy Policy</h1>
        <p style={styles.subtitle}>{appName} — Knoodlepot Studios</p>
        <p style={styles.updated}>Last updated: {lastUpdated}</p>
        {children}
      </div>
    </main>
  );
}

export { styles };
