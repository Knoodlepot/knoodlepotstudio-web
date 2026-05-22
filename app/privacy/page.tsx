import { PrivacyPage, Section, styles } from "@/components/PrivacyPage";

export const metadata = { title: "Privacy Policy — Knoodlepot Studio" };

export default function StudioPrivacy() {
  return (
    <PrivacyPage appName="Knoodlepot Studio" lastUpdated="20 May 2026">
      <Section title="1. Who we are">
        <p>
          This Privacy Policy explains how Knoodlepot Studio (sole trader) collects, uses, and
          protects your personal data when you visit knoodlepotstudio.com.
        </p>
        <p style={{ marginTop: 12 }}>
          <strong>Data controller:</strong> Knoodlepot Studio (sole trader)<br />
          <strong>Email:</strong>{" "}
          <a href="mailto:knoodlepot@knoodlepotstudio.com" style={styles.link}>
            knoodlepot@knoodlepotstudio.com
          </a>
          <br />
          <strong>ICO registration:</strong> ZC143302 —{" "}
          <a href="https://ico.org.uk/ESDWebPages/Search" style={styles.link}>
            verify here
          </a>
        </p>
      </Section>

      <Section title="2. Your rights under UK GDPR">
        <p>
          You have the following rights regarding your personal data. Email us at{" "}
          <a href="mailto:knoodlepot@knoodlepotstudio.com" style={styles.link}>
            knoodlepot@knoodlepotstudio.com
          </a>{" "}
          to exercise any of them. We will respond within one calendar month.
        </p>
        <ul style={styles.list}>
          <li><strong>Access</strong> — ask for a copy of any personal data we hold about you.</li>
          <li><strong>Rectification</strong> — ask us to correct inaccurate data.</li>
          <li><strong>Erasure</strong> — ask us to delete your data.</li>
          <li><strong>Restriction</strong> — ask us to stop processing your data in certain circumstances.</li>
          <li><strong>Objection</strong> — object to processing based on legitimate interests.</li>
          <li>
            <strong>Complaint to the ICO</strong> — if you are not satisfied with our response:{" "}
            <a href="https://ico.org.uk/make-a-complaint" style={styles.link}>
              ico.org.uk/make-a-complaint
            </a>{" "}
            or 0303 123 1113.
          </li>
        </ul>
      </Section>

      <Section title="3. The plain-English summary">
        <p>
          This website is read-only. There is no account, no sign-in, and no contact form.
          When you visit, our hosting provider (Vercel) records standard technical information
          about your request — your IP address, browser type, and which pages you viewed — in
          server logs retained for approximately 30 days. We do not set cookies for tracking or
          advertising, and we do not sell data.
        </p>
      </Section>

      <Section title="4. What information we collect directly">
        <p>
          We collect no information directly from visitors to this website. There is no account
          system, no form, and no newsletter. If you email us, we keep the correspondence so we
          can respond and follow up.
        </p>
      </Section>

      <Section title="5. Hosting — Vercel">
        <p>
          This website is hosted by Vercel Inc. (340 S Lemon Ave #4133, Walnut, CA 91789, USA),
          acting as our data processor. When you visit any page, Vercel receives:
        </p>
        <ul style={styles.list}>
          <li>Your IP address</li>
          <li>The city and country derived from your IP (not your precise location)</li>
          <li>Your browser type and operating system</li>
          <li>The page you requested and the referring page, if any</li>
          <li>A timestamp of the request</li>
        </ul>
        <p style={{ marginTop: 12 }}>
          This is collected in standard server logs for the purpose of operating the website,
          security, and diagnosing technical issues. We rely on legitimate interests
          (Article 6(1)(f) UK GDPR) for this processing. Vercel retains these logs for
          approximately 30 days.
        </p>
        <p style={{ marginTop: 12 }}>
          Vercel stores data in the United States. Transfers from the UK are covered by the
          EU-US and UK-US Data Privacy Framework and Standard Contractual Clauses.{" "}
          <a href="https://vercel.com/legal/privacy-policy" style={styles.link}>
            Vercel Privacy Policy
          </a>
        </p>
      </Section>

      <Section title="6. Data we never collect or use">
        <p>We do not:</p>
        <ul style={styles.list}>
          <li>Sell, rent, or trade your personal data.</li>
          <li>Set cookies for tracking, analytics, or advertising.</li>
          <li>Use any third-party analytics or advertising scripts.</li>
          <li>Track you across other websites or apps.</li>
        </ul>
        <p style={{ marginTop: 12 }}>
          See our <a href="/cookies" style={styles.link}>Cookie Notice</a> for full detail
          (short version: no cookies set by us).
        </p>
      </Section>

      <Section title="7. How long we keep your data">
        <p>
          Vercel hosting logs are retained for approximately 30 days. Support correspondence
          (emails you send us) is kept for two years from last contact.
        </p>
      </Section>

      <Section title="8. Children">
        <p>
          This website is not directed at children. We do not knowingly collect personal data
          from anyone under 16. There is nothing on this website requiring personal information
          from visitors of any age.
        </p>
      </Section>

      <Section title="9. Changes to this policy">
        <p>
          We may update this policy from time to time. The &quot;Last updated&quot; date at the
          top shows when it last changed.
        </p>
      </Section>

      <Section title="10. Contact and complaints">
        <p>For any privacy question or request:</p>
        <p style={{ marginTop: 8 }}>
          Knoodlepot Studio<br />
          <a href="mailto:knoodlepot@knoodlepotstudio.com" style={styles.link}>
            knoodlepot@knoodlepotstudio.com
          </a>
        </p>
        <p style={{ marginTop: 12 }}>
          If you are not satisfied with our response, you may complain to the ICO:
          <br />
          Information Commissioner&apos;s Office, Wycliffe House, Water Lane, Wilmslow, Cheshire SK9 5AF
          <br />
          <a href="https://ico.org.uk/make-a-complaint" style={styles.link}>
            ico.org.uk/make-a-complaint
          </a>{" "}
          · 0303 123 1113
        </p>
        <p style={{ marginTop: 12 }}>
          ICO registration: <strong>ZC143302</strong>
        </p>
      </Section>
    </PrivacyPage>
  );
}
