import { PrivacyPage, Section, styles } from "@/components/PrivacyPage";

export const metadata = { title: "Privacy Policy — Plain English, Please." };

export default function PlainEnglishPrivacy() {
  return (
    <PrivacyPage appName="Plain English, Please." lastUpdated="20 May 2026">
      <Section title="1. Who we are">
        <p>
          This Privacy Policy explains how Knoodlepot Studio (sole trader) collects, uses, and
          protects your personal data when you use Plain English, Please.
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
          <li><strong>Access</strong> — ask for a copy of the personal data we hold about you.</li>
          <li><strong>Rectification</strong> — ask us to correct inaccurate data.</li>
          <li><strong>Erasure</strong> — ask us to delete your data (&quot;right to be forgotten&quot;).</li>
          <li><strong>Restriction</strong> — ask us to stop processing your data in certain circumstances.</li>
          <li><strong>Portability</strong> — ask for your data in a portable format.</li>
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
          To use this app you create an account, which stores your email with Firebase. When
          you submit text for translation, it is sent <strong>directly from your device</strong>{" "}
          to the Anthropic Claude API — this means Anthropic receives your IP address as well
          as the text you submit. Translations you save are stored in Firebase Firestore.
          Subscriptions are managed by RevenueCat.
        </p>
      </Section>

      <Section title="4. What information we collect directly">
        <p>We collect:</p>
        <ul style={styles.list}>
          <li>
            <strong>Email address</strong> — used to create and manage your account via Firebase
            Authentication.
          </li>
          <li>
            <strong>Text you submit for translation</strong> — sent to Anthropic&apos;s Claude
            API to generate the plain-English response. Submitted text is not stored by us
            after processing, unless you choose to save the result to your history.
          </li>
          <li>
            <strong>Saved translation history</strong> — if you save a result, the original
            text, category, and full AI response are stored in Firebase Firestore under your
            account.
          </li>
          <li>
            <strong>Support correspondence</strong> — if you email us, we keep the message so
            we can respond and follow up.
          </li>
        </ul>
        <p style={{ marginTop: 12 }}>
          We do not collect your real name, phone number, postal address, contacts, location,
          or any other personal information beyond the above.
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

      <Section title="6. Account and data storage — Firebase (Google)">
        <p>
          We use Firebase, operated by Google Ireland Limited (Gordon House, Barrow Street,
          Dublin 4, Ireland), as our data processor for:
        </p>
        <ul style={styles.list}>
          <li>
            <strong>Firebase Authentication</strong> — manages sign-in. Firebase receives your
            email address, a hashed password (we never see the plain-text version), and your
            IP address and sign-in timestamp for security purposes.
          </li>
          <li>
            <strong>Firebase Firestore</strong> — stores your saved translation history.
            Data is encrypted in transit and at rest.
          </li>
        </ul>
        <p style={{ marginTop: 12 }}>
          Legal basis: performance of a contract (Article 6(1)(b) UK GDPR). International
          transfers are covered by Standard Contractual Clauses and the UK International Data
          Transfer Addendum.{" "}
          <a href="https://firebase.google.com/support/privacy" style={styles.link}>
            Firebase Privacy &amp; Security
          </a>
        </p>
      </Section>

      <Section title="7. AI features — Anthropic (Claude)">
        <p>
          When you submit text for translation, your device sends it{" "}
          <strong>directly to Anthropic, PBC</strong> (548 Market Street, PMB 90375, San
          Francisco, CA 94104, USA) for processing by the Claude AI model. Anthropic acts as
          our data processor.
        </p>
        <p style={{ marginTop: 12 }}>
          Because the call is made from your device rather than our server, Anthropic receives:
        </p>
        <ul style={styles.list}>
          <li>The text you submitted, exactly as you typed it</li>
          <li>The category you selected (e.g. &quot;The Workplace&quot;)</li>
          <li><strong>Your device&apos;s IP address</strong></li>
          <li>Standard HTTP metadata (our API key, SDK version)</li>
        </ul>
        <p style={{ marginTop: 12 }}>
          Anthropic does <strong>not</strong> receive your name, email address, or account
          identifier from us.
        </p>
        <p style={{ marginTop: 12 }}>
          Under Anthropic&apos;s Commercial Terms, API inputs and outputs are retained for a
          maximum of 7 days for trust and safety purposes, then automatically deleted. Anthropic
          does not use API content to train their models.
        </p>
        <p style={{ marginTop: 12 }}>
          Legal basis: performance of a contract (Article 6(1)(b)).{" "}
          <a href="https://www.anthropic.com/legal/privacy" style={styles.link}>
            Anthropic Privacy Policy
          </a>
        </p>
      </Section>

      <Section title="8. Subscriptions and payments — RevenueCat">
        <p>
          We use RevenueCat, Inc. (1032 E Brandon Blvd #3003, Brandon, FL 33511, USA) to manage
          subscriptions and verify purchases. RevenueCat receives an anonymous App User ID (not
          linked to your email or name), your subscription and purchase history, your locale and
          currency code, and standard HTTP metadata. Legal basis: performance of a contract
          (Article 6(1)(b)) and legitimate interests (Article 6(1)(f)) for fraud prevention.{" "}
          <a href="https://www.revenuecat.com/privacy" style={styles.link}>
            RevenueCat Privacy Policy
          </a>
        </p>
      </Section>

      <Section title="9. Distribution — Google Play">
        <p>
          This app is distributed through Google Play (Google LLC). When you download, install,
          or purchase the app, Google processes information about that transaction under its own
          privacy policy.{" "}
          <a href="https://policies.google.com/privacy" style={styles.link}>
            Google Privacy Policy
          </a>
        </p>
      </Section>

      <Section title="10. Data we never collect or use">
        <p>
          We do not sell, rent, or trade your personal data. We do not use your data for
          behavioural advertising. We do not use any advertising SDKs. We do not track you
          across other apps or websites.
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
          <li><strong>Account data (Firebase)</strong> — until you delete your account; backups purged within 30 days.</li>
          <li><strong>Saved translation history</strong> — until you delete individual items or your account.</li>
          <li><strong>Purchase records (RevenueCat)</strong> — lifetime of account plus 6 years for legal and tax purposes.</li>
          <li><strong>AI processing (Anthropic)</strong> — up to 7 days.</li>
          <li><strong>Server logs (Vercel)</strong> — approximately 30 days.</li>
          <li><strong>Support correspondence</strong> — 2 years from last contact.</li>
        </ul>
        <p style={{ marginTop: 12 }}>
          To delete your account and all associated data, use the delete-account option in the
          app&apos;s settings, or email{" "}
          <a href="mailto:knoodlepot@knoodlepotstudio.com" style={styles.link}>
            knoodlepot@knoodlepotstudio.com
          </a>.
          We will action it within 30 days.
        </p>
      </Section>

      <Section title="13. Security">
        <p>
          We use industry-standard measures including encryption in transit (TLS) and at rest,
          access controls, and regular review of our processors&apos; security certifications.
          In the unlikely event of a personal data breach affecting your rights, we will notify
          you and the ICO within 72 hours as required by UK GDPR.
        </p>
      </Section>

      <Section title="14. Children">
        <p>
          This app is not intended for children under 16. We do not knowingly collect personal
          data from anyone under 16. If you believe a child has created an account, please
          email{" "}
          <a href="mailto:knoodlepot@knoodlepotstudio.com" style={styles.link}>
            knoodlepot@knoodlepotstudio.com
          </a>{" "}
          and we will delete it.
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
