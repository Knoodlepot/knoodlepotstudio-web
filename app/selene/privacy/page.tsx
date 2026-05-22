import { PrivacyPage, Section, styles } from "@/components/PrivacyPage";

export const metadata = { title: "Privacy Policy — Selene" };

export default function SelenePrivacy() {
  return (
    <PrivacyPage appName="Selene" lastUpdated="22 May 2026">
      <Section title="1. Who we are">
        <p>
          This Privacy Policy explains how Knoodlepot Studio (sole trader) collects, uses, and
          protects your personal data when you use Selene.
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
          <li><strong>Portability</strong> — ask for your data in a portable format. You can also export everything directly from Settings &rarr; Export as CSV at any time, without contacting us.</li>
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
          All data you enter in Selene stays on your phone. We have no servers, no database,
          and no cloud storage for health data. We structurally cannot see your cycle logs,
          symptoms, moods, or any other health information you record — not because we promise
          not to look, but because there is nowhere for it to go.
        </p>
        <p style={{ marginTop: 12 }}>
          The only information that ever leaves your device is:
        </p>
        <ul style={styles.list}>
          <li>
            <strong>Purchase receipt</strong> — processed by RevenueCat to verify your one-off purchase.
            This contains an anonymous random ID. It does not contain your name, email, or any health data.
          </li>
          <li>
            <strong>Crash reports</strong> — if the app crashes, an error report is sent to Sentry.
            This contains technical information only (stack trace, device model, app version).
            It never contains your health data, cycle logs, or anything you have typed into the app.
          </li>
          <li>
            <strong>Encrypted backup (opt-in only)</strong> — if you choose to set up Google Drive backup,
            an AES-256 encrypted file is uploaded to a private folder in your own Google Drive account.
            Google cannot read this file. Neither can we. Only you can, using your passphrase.
          </li>
        </ul>
        <p style={{ marginTop: 12 }}>
          <strong>December 2024 UK police guidance.</strong> In December 2024, guidance acknowledged
          that period app data could theoretically be accessed by police in certain circumstances.
          With Selene, this risk does not apply to data we hold — because we hold none. Police
          can request data from us, but we have nothing to provide. Your data lives on your device,
          encrypted, accessible only with your device PIN or biometric. The one risk we cannot
          remove is physical access to your unlocked device; no app can protect against that.
          We recommend a screen lock. The optional Discreet Mode in Settings adds an extra layer.
        </p>
      </Section>

      <Section title="4. Special Category health data">
        <p>
          The data you enter in Selene — cycle dates, symptoms, moods, pain levels, test results,
          and related information — is classified as <strong>Special Category personal data</strong>{" "}
          under UK GDPR (Article 9). This is the highest level of legal protection for personal data.
        </p>
        <p style={{ marginTop: 12 }}>
          We process this data on the legal basis of <strong>explicit consent</strong> (UK GDPR
          Article 9(2)(a)), given by you during onboarding. You can withdraw consent at any time
          by deleting the app, which also deletes all data from your device.
        </p>
        <p style={{ marginTop: 12 }}>
          Because this data is stored entirely on your device and never transmitted to us, we act
          as a data controller only in the limited technical sense of providing the software that
          processes it locally. We never receive, access, or store your health data on any server
          we operate.
        </p>
      </Section>

      <Section title="5. What we collect directly">
        <p>
          We do not collect your name, email address, phone number, location, contacts, photos,
          or browsing history. The app does not require an account.
        </p>
        <p style={{ marginTop: 12 }}>
          The only information stored outside your device is:
        </p>
        <ul style={styles.list}>
          <li>Support correspondence — if you email us, we keep the message to respond and follow up.</li>
        </ul>
      </Section>

      <Section title="6. Hosting — Vercel">
        <p>
          This privacy policy page is hosted by Vercel Inc. (340 S Lemon Ave #4133, Walnut,
          CA 91789, USA). When you visit this page, Vercel receives standard server log information
          (your IP address, browser type, page requested, timestamp). This is used solely to serve
          the page and is not shared with us in identifiable form.
        </p>
        <p style={{ marginTop: 12 }}>
          Legal basis: legitimate interests (UK GDPR Article 6(1)(f)).{" "}
          <a href="https://vercel.com/legal/privacy-policy" style={styles.link}>Vercel privacy policy</a>.
        </p>
      </Section>

      <Section title="7. Purchase verification — RevenueCat">
        <p>
          We use RevenueCat (RevenueCat, Inc., 1032 E Brandon Blvd #3003, Brandon, FL 33511, USA)
          to verify your one-off purchase and unlock paid features.
        </p>
        <p style={{ marginTop: 12 }}>RevenueCat receives:</p>
        <ul style={styles.list}>
          <li><strong>An anonymous App User ID</strong> — a random identifier generated on your device. Not linked to your name, email, or any contact details.</li>
          <li><strong>Purchase history</strong> — subscription status, products purchased, transaction dates.</li>
          <li><strong>Locale and currency code</strong> — e.g. <code>en_GB</code> and <code>GBP</code>, for showing prices. Not your location.</li>
          <li><strong>Standard HTTP metadata</strong> — your IP address, SDK version, operating system.</li>
        </ul>
        <p style={{ marginTop: 12 }}>
          RevenueCat does <strong>not</strong> receive your health data, cycle logs, symptoms, moods,
          or any other information you enter into the app.
        </p>
        <p style={{ marginTop: 12 }}>
          Legal basis: performance of a contract (Article 6(1)(b)) and legitimate interests
          (Article 6(1)(f)) for fraud prevention.{" "}
          <a href="https://www.revenuecat.com/privacy" style={styles.link}>RevenueCat privacy policy</a>.
        </p>
      </Section>

      <Section title="8. Crash reporting — Sentry">
        <p>
          We use Sentry (Functional Software, Inc., 45 Fremont Street, 8th Floor, San Francisco,
          CA 94105, USA) to receive reports when the app encounters an error or crash.
        </p>
        <p style={{ marginTop: 12 }}>Sentry receives:</p>
        <ul style={styles.list}>
          <li>The error or crash type and stack trace</li>
          <li>Device model, operating system version, and app version</li>
          <li>A short trail of recent app events leading to the error (e.g. &quot;user opened settings&quot;, &quot;backup started&quot;) — these do not include any health data or content you have entered</li>
          <li>Your IP address</li>
        </ul>
        <p style={{ marginTop: 12 }}>
          Sentry does <strong>not</strong> receive your health data, cycle logs, symptoms, or any
          information you have entered into the app. Crash reports are retained for up to 90 days
          then deleted automatically.
        </p>
        <p style={{ marginTop: 12 }}>
          Legal basis: legitimate interests (Article 6(1)(f)) — keeping the app working properly.{" "}
          <a href="https://sentry.io/privacy/" style={styles.link}>Sentry privacy policy</a>.
        </p>
      </Section>

      <Section title="9. Encrypted backup — Google Drive (opt-in)">
        <p>
          If you choose to enable Google Drive backup, the app asks you to sign in with Google
          and encrypts all your data on your device using AES-256-CBC before uploading it to
          a private app data folder in your own Google Drive account.
        </p>
        <p style={{ marginTop: 12 }}>
          <strong>What Google receives:</strong> an encrypted blob that is unreadable without your
          passphrase. Google cannot read your health data. Neither can we. The file is stored in
          your Drive&apos;s app data folder, which is invisible in your Drive file list and
          accessible only by Selene. It is automatically deleted if you uninstall the app.
        </p>
        <p style={{ marginTop: 12 }}>
          <strong>Your passphrase is never transmitted anywhere.</strong> It exists only in your
          memory and temporarily in your device&apos;s RAM during encryption/decryption. If you
          forget your passphrase, the backup is permanently unreadable. We cannot reset or
          recover it.
        </p>
        <p style={{ marginTop: 12 }}>
          Google Sign-In processes standard authentication data (your Google account email, an
          OAuth token) to identify your Drive account. This is handled by Google and subject to{" "}
          <a href="https://policies.google.com/privacy" style={styles.link}>Google&apos;s privacy policy</a>.
          We do not receive or store your Google account email.
        </p>
        <p style={{ marginTop: 12 }}>
          Legal basis: performance of a contract (Article 6(1)(b)) — you have explicitly requested
          this feature. Backup is entirely optional and can be disabled at any time in Settings.
        </p>
      </Section>

      <Section title="10. Distribution — Google Play">
        <p>
          Selene is distributed through the Google Play Store. When you download, install, update,
          or purchase the app, Google processes information about that transaction under their own
          privacy policy. We have no control over this processing.{" "}
          <a href="https://policies.google.com/privacy" style={styles.link}>Google privacy policy</a>.
        </p>
      </Section>

      <Section title="11. On-device PIN lock (Discreet Mode)">
        <p>
          If you enable Discreet Mode, the app uses Android&apos;s BiometricPrompt API or a
          PIN you set to lock access to the app. Your biometric data never leaves your phone.
          Android handles biometric matching entirely within your device&apos;s secure hardware.
          We do not receive, see, or store any biometric or PIN information.
        </p>
        <p style={{ marginTop: 12 }}>
          <strong>Important:</strong> the Discreet Mode PIN is deliberately unrecoverable. If you
          forget it, you cannot unlock the app. This is stated clearly before you set one.
        </p>
      </Section>

      <Section title="12. Manual health measurements (BBT, LH, heart rate, HRV)">
        <p>
          Selene allows you to manually enter basal body temperature, LH test results, resting
          heart rate, and heart rate variability. All of these are stored only on your device.
          None of this data is transmitted anywhere.
        </p>
        <p style={{ marginTop: 12 }}>
          Selene does not connect to any wearable device, fitness tracker, smartwatch, or phone
          camera. Manual entry is deliberate: every smartwatch syncs data to the manufacturer&apos;s
          servers before it reaches your phone. By requiring manual entry, we ensure that data
          exists in Selene only because you chose to put it there.
        </p>
        <p style={{ marginTop: 12 }}>
          <strong>BBT disclaimer:</strong> Selene logs and charts BBT readings but does not claim
          this data can be used as contraception. Natural Cycles is the only app with regulatory
          approval for that use. Do not use Selene for fertility planning or contraception.
        </p>
      </Section>

      <Section title="13. Data we never collect">
        <p>To make this explicit, we do not:</p>
        <ul style={styles.list}>
          <li>Sell, rent, or trade your personal data to anyone, ever.</li>
          <li>Use your data for advertising or behavioural profiling.</li>
          <li>Include any advertising SDKs, analytics SDKs, or tracking SDKs in the app.</li>
          <li>Share your data with advertisers, data brokers, or social media platforms.</li>
          <li>Use Firebase Analytics, Crashlytics, Google Analytics, Mixpanel, Amplitude, or any equivalent.</li>
          <li>Connect to Health Connect, any wearable SDK, or any camera-based biometric measurement system.</li>
        </ul>
      </Section>

      <Section title="14. International transfers">
        <p>
          RevenueCat, Sentry, and Vercel process data in the United States. For each transfer
          we rely on the UK International Data Transfer Addendum to Standard Contractual Clauses,
          and where applicable the EU-US and UK-US Data Privacy Framework. You can request
          details of the specific safeguards by emailing us.
        </p>
      </Section>

      <Section title="15. Retention">
        <p>
          Health data (cycle logs, symptoms, etc.) exists only on your device. Deleting the app
          deletes it permanently. We hold no copy.
        </p>
        <ul style={styles.list}>
          <li>Purchase records (RevenueCat): retained for 6 years for legal and tax purposes.</li>
          <li>Crash reports (Sentry): 30 to 90 days, then automatically deleted.</li>
          <li>Support correspondence: 2 years from last contact.</li>
          <li>Vercel access logs: approximately 30 days.</li>
        </ul>
      </Section>

      <Section title="16. Security">
        <p>
          All health data stored on your device is encrypted using the Android Keystore system.
          The optional Google Drive backup is AES-256-CBC encrypted before it leaves your device.
          Crash reports are transmitted over TLS. No system is perfectly secure; in the event of
          a personal data breach affecting your rights, we will notify you and the ICO within
          72 hours as required by UK GDPR.
        </p>
      </Section>

      <Section title="17. Children">
        <p>
          Selene is for users aged 16 and over. The app shows an age gate on first launch and
          does not operate if you indicate you are under 16. We do not knowingly collect data
          from anyone under 16.
        </p>
      </Section>

      <Section title="18. Changes to this policy">
        <p>
          We may update this policy from time to time. If a change expands what data leaves your
          device or who it is shared with, we will give you clear notice before the change takes
          effect. The &quot;Last updated&quot; date at the top of this page shows when it was last changed.
        </p>
      </Section>

      <Section title="19. Contact">
        <p>
          For any privacy question, request, or complaint:
        </p>
        <p style={{ marginTop: 12 }}>
          Knoodlepot Studio<br />
          <a href="mailto:knoodlepot@knoodlepotstudio.com" style={styles.link}>
            knoodlepot@knoodlepotstudio.com
          </a>
        </p>
        <p style={{ marginTop: 12 }}>
          If you are not satisfied with our response, you can complain to the ICO:
        </p>
        <p style={{ marginTop: 8 }}>
          Information Commissioner&apos;s Office<br />
          Wycliffe House, Water Lane, Wilmslow, Cheshire, SK9 5AF<br />
          Helpline: 0303 123 1113<br />
          <a href="https://ico.org.uk/make-a-complaint" style={styles.link}>
            ico.org.uk/make-a-complaint
          </a>
        </p>
      </Section>
    </PrivacyPage>
  );
}
