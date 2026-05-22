import React from "react";

export const metadata = { title: "Cookie Notice — Knoodlepot Studio" };

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
  table: { width: "100%", borderCollapse: "collapse" as const, marginTop: 12 },
  th: { textAlign: "left" as const, borderBottom: "2px solid #e0d9cf", paddingBottom: 8, color: "#004225", fontSize: 13 },
  td: { borderBottom: "1px solid #e0d9cf", padding: "8px 0", fontSize: 14, verticalAlign: "top" as const, color: "#888" },
};

export default function CookieNotice() {
  return (
    <main style={styles.page}>
      <a href="/" style={styles.back}>← Knoodlepot Studio</a>
      <div style={styles.container}>
        <h1 style={styles.title}>Cookie Notice</h1>
        <p style={styles.subtitle}>Knoodlepot Studio — knoodlepotstudio.com</p>
        <p style={styles.updated}>Last updated: 20 May 2026</p>

        <section style={styles.section}>
          <h2 style={styles.heading}>What this notice covers</h2>
          <p>
            This notice explains the cookies and similar technologies used on the Knoodlepot
            Studio website at knoodlepotstudio.com. It complements our{" "}
            <a href="/privacy" style={styles.link}>Privacy Policy</a> and is provided under the
            Privacy and Electronic Communications Regulations 2003 (PECR) and the UK General
            Data Protection Regulation.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.heading}>The short version</h2>
          <p>
            This website sets <strong>no cookies</strong> of its own — no tracking, no
            analytics, no advertising. The only data recorded about your visit is in
            Vercel&apos;s standard server logs: your IP address, browser type, the page you
            requested, and the time. This is not a cookie; it is how every website on the
            internet operates at a basic level.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.heading}>Cookies used by this website</h2>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Cookie</th>
                <th style={styles.th}>Purpose</th>
                <th style={styles.th}>Type</th>
                <th style={styles.th}>Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={styles.td}><em>None</em></td>
                <td style={styles.td}>—</td>
                <td style={styles.td}>—</td>
                <td style={styles.td}>—</td>
              </tr>
            </tbody>
          </table>
          <p style={{ marginTop: 16 }}>
            This website sets no cookies of its own. If this ever changes, we will update this
            notice and, where required by PECR, ask for your consent before any non-essential
            cookies are set.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.heading}>What our hosting provider logs</h2>
          <p>
            The website is hosted by Vercel Inc. (340 S Lemon Ave #4133, Walnut, CA 91789,
            USA). Vercel keeps standard server logs of incoming requests, which include:
          </p>
          <ul style={styles.list}>
            <li>Your IP address</li>
            <li>The city and country derived from your IP (not your precise location)</li>
            <li>Your browser type and operating system</li>
            <li>The page you requested and the referring page, if any</li>
            <li>The date and time of the request</li>
          </ul>
          <p style={{ marginTop: 12 }}>
            These logs are kept for approximately 30 days for the purposes of operating the
            website, security, and diagnosing technical issues. We rely on legitimate interests
            (UK GDPR Article 6(1)(f)) for this processing.{" "}
            <a href="https://vercel.com/legal/privacy-policy" style={styles.link}>
              Vercel Privacy Policy
            </a>
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.heading}>How to control cookies in your browser</h2>
          <p>
            Even though this site sets no cookies, you may wish to manage cookies on the wider
            web. Most browsers let you see, block, or clear cookies in their settings under
            &quot;Privacy&quot;, &quot;Site settings&quot;, or &quot;Cookies&quot;. The ICO
            maintains a clear guide at{" "}
            <a href="https://ico.org.uk/your-data-matters/online/cookies" style={styles.link}>
              ico.org.uk/your-data-matters/online/cookies
            </a>.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.heading}>Changes to this notice</h2>
          <p>
            If we ever start using cookies — for example, if we add analytics or a contact form
            — we will update this notice and, where required by PECR, show a consent banner
            before any non-essential cookies are set.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.heading}>Contact</h2>
          <p>
            Knoodlepot Studio<br />
            <a href="mailto:knoodlepot@knoodlepotstudio.com" style={styles.link}>
              knoodlepot@knoodlepotstudio.com
            </a>
          </p>
          <p style={{ marginTop: 12 }}>
            ICO registration: <strong>ZC143302</strong> —{" "}
            <a href="https://ico.org.uk/ESDWebPages/Search" style={styles.link}>
              verify at ico.org.uk
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}
