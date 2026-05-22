import { PrivacyPage, Section, styles } from "@/components/PrivacyPage";

export const metadata = { title: "Privacy Policy — Greenman" };

export default function GreenmanPrivacy() {
  return (
    <PrivacyPage appName="Greenman" lastUpdated="20 May 2026">
      <Section title="1. Who we are">
        <p>
          This Privacy Policy explains how Knoodlepot Studio (sole trader) collects, uses, and
          protects your personal data when you use Greenman.
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
          Greenman does not require an account. The app stores your settings and preferences
          locally on your device only. When you use the Cunning tier AI features, your question
          is sent to our backend proxy service (Google Cloud Run), which calls the Anthropic
          Claude AI — your question reaches the proxy but Anthropic only sees the proxy&apos;s
          server IP, not your device. Purchases are managed by RevenueCat.
        </p>
      </Section>

      <Section title="4. What information we collect directly">
        <p>We collect very little information:</p>
        <ul style={styles.list}>
          <li>
            <strong>Local preferences</strong> — your disclaimer acceptance, tier status, and
            any in-app settings are saved using local on-device storage (AsyncStorage). This
            data never leaves your device and we cannot access it.
          </li>
          <li>
            <strong>AI queries (Cunning tier)</strong> — questions you send to the Ask the
            Hedgewitch and other Cunning AI features are transmitted to our backend proxy
            service. See section 6.
          </li>
          <li>
            <strong>Support correspondence</strong> — if you email us, we keep the message so
            we can respond and follow up.
          </li>
        </ul>
        <p style={{ marginTop: 12 }}>
          We do not collect your name, email address, location, phone number, contacts, or any
          other personal information. No account is required to use the app.
        </p>
      </Section>

      <Section title="5. Hosting — Vercel">
        <p>
          This privacy policy page is hosted by Vercel Inc. (340 S Lemon Ave #4133, Walnut,
          CA 91789, USA). When you visit it, Vercel records your IP address, browser type, page
          requested, and a timestamp in standard server logs (retained approximately 30 days).
          Legal basis: legitimate interests (Article 6(1)(f) UK GDPR).{" "}
          <a href="https://vercel.com/legal/privacy-policy" style={styles.link}>
            Vercel Privacy Policy
          </a>
        </p>
      </Section>

      <Section title="6. AI features — backend proxy and Anthropic (Claude)">
        <p>
          The Cunning tier includes AI features (Ask the Hedgewitch, Ritual Builder, Plant
          Recognition, and others). When you use these features, your question and any relevant
          context are sent from your device to our backend proxy service, hosted on Google Cloud
          Run (Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA).
        </p>
        <p style={{ marginTop: 12 }}>Our backend proxy receives:</p>
        <ul style={styles.list}>
          <li>The text of your question</li>
          <li>Any context selected by the app to help answer it (reference content from the app)</li>
          <li>Your device&apos;s IP address (as part of the standard HTTP request)</li>
        </ul>
        <p style={{ marginTop: 12 }}>
          The proxy then forwards the question and context to{" "}
          <strong>Anthropic, PBC</strong> (548 Market Street, PMB 90375, San Francisco, CA
          94104, USA) for processing by the Claude AI model.{" "}
          <strong>
            Anthropic receives the question content only — it does not receive your IP address
            or any personal information.
          </strong>{" "}
          The call to Anthropic originates from our server, not from your device.
        </p>
        <p style={{ marginTop: 12 }}>
          Under Anthropic&apos;s Commercial Terms, API inputs and outputs are retained for a
          maximum of 7 days for trust and safety purposes, then automatically deleted. Anthropic
          does not use API content to train their models.
        </p>
        <p style={{ marginTop: 12 }}>
          Legal basis: performance of a contract (Article 6(1)(b)) — you have purchased Cunning
          tier access to use these features.
        </p>
        <p style={{ marginTop: 12 }}>
          <a href="https://www.anthropic.com/legal/privacy" style={styles.link}>
            Anthropic Privacy Policy
          </a>{" "}
          ·{" "}
          <a href="https://cloud.google.com/terms/cloud-privacy-notice" style={styles.link}>
            Google Cloud Privacy Notice
          </a>
        </p>
      </Section>

      <Section title="7. Subscriptions and payments — RevenueCat">
        <p>
          We use RevenueCat, Inc. (1032 E Brandon Blvd #3003, Brandon, FL 33511, USA) to manage
          subscriptions and one-off purchases, and to verify entitlements. RevenueCat receives
          an anonymous App User ID (a random identifier generated on your device, not linked to
          your name or email), your purchase and subscription history, your locale and currency
          code, and standard HTTP metadata.
        </p>
        <p style={{ marginTop: 12 }}>
          Greenman offers two paid tiers: a one-off <strong>Hedgewalker</strong> unlock and a
          monthly <strong>Cunning</strong> subscription. Both are processed by Google Play and
          verified by RevenueCat. Legal basis: performance of a contract (Article 6(1)(b)) and
          legitimate interests (Article 6(1)(f)) for fraud prevention.{" "}
          <a href="https://www.revenuecat.com/privacy" style={styles.link}>
            RevenueCat Privacy Policy
          </a>
        </p>
      </Section>

      <Section title="8. Distribution — Google Play">
        <p>
          This app is distributed through Google Play (Google LLC). When you download, install,
          or purchase the app, Google processes information about that transaction under its own
          privacy policy.{" "}
          <a href="https://policies.google.com/privacy" style={styles.link}>
            Google Privacy Policy
          </a>
        </p>
      </Section>

      <Section title="9. The Trail — map links">
        <p>
          The Trail section provides GPS coordinates for publicly documented sacred sites across
          Britain. Tapping the &quot;Get directions&quot; button opens your device&apos;s native
          maps application with those coordinates. No location data is collected or stored by
          Greenman; the handoff is handled entirely by your device&apos;s operating system.
        </p>
      </Section>

      <Section title="10. Data we never collect or use">
        <p>
          We do not sell, rent, or trade your personal data. We do not require an account. We
          do not use your data for advertising or profiling. We do not use any advertising SDKs.
          We do not track you across other apps or websites.
        </p>
      </Section>

      <Section title="11. International transfers">
        <p>
          Several services above process data in the United States. For each transfer we rely
          on Standard Contractual Clauses and/or the UK-US Data Privacy Framework where
          applicable. You can request details by emailing{" "}
          <a href="mailto:knoodlepot@knoodlepotstudio.com" style={styles.link}>
            knoodlepot@knoodlepotstudio.com
          </a>.
        </p>
      </Section>

      <Section title="12. How long we keep your data">
        <ul style={styles.list}>
          <li><strong>Local preferences</strong> — stored on your device; cleared when you uninstall the app.</li>
          <li><strong>Purchase records (RevenueCat)</strong> — lifetime of your RevenueCat account plus 6 years for legal and tax purposes.</li>
          <li><strong>AI query logs (Anthropic)</strong> — up to 7 days.</li>
          <li><strong>Backend proxy logs (Google Cloud Run)</strong> — standard Google Cloud logging retention, typically up to 30 days.</li>
          <li><strong>Vercel logs</strong> — approximately 30 days.</li>
          <li><strong>Support correspondence</strong> — 2 years from last contact.</li>
        </ul>
        <p style={{ marginTop: 12 }}>
          Knoodlepot Studio holds no personal data about you on its own servers beyond support
          emails. For purchase data held by RevenueCat or Google, contact them directly.
        </p>
      </Section>

      <Section title="13. Security">
        <p>
          We use industry-standard measures including encryption in transit (TLS). The app
          requires no account, and the only personal data that reaches our backend is your IP
          address, which is not stored beyond standard server log retention. In the unlikely
          event of a breach, we will notify the ICO within 72 hours as required by UK GDPR.
        </p>
      </Section>

      <Section title="14. Age restriction">
        <p>
          This app is for users aged <strong>18 and over</strong>. The app displays an age gate
          on first launch. If you indicate you are under 18, the app will not operate. We do not
          knowingly collect any data from anyone under 18.
        </p>
      </Section>

      <Section title="15. Changes to this policy">
        <p>
          We may update this policy from time to time. If a change materially expands what data
          leaves your device or who it is shared with, we will notify you in the app before it
          takes effect. The &quot;Last updated&quot; date at the top shows when it last changed.
        </p>
      </Section>

      <Section title="16. Contact and complaints">
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
