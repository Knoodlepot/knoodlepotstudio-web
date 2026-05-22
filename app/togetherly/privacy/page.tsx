import { PrivacyPage, Section, styles } from "@/components/PrivacyPage";

export const metadata = { title: "Privacy Policy — Togetherly" };

export default function TogetherlyPrivacy() {
  return (
    <PrivacyPage appName="Togetherly" lastUpdated="16 May 2026">
      <Section title="1. Who We Are">
        <p>Togetherly is developed and operated by Knoodlepot Studio, a sole trader based in the United Kingdom. Contact: <a href="mailto:knoodlepot@knoodlepotstudio.com" style={styles.link}>knoodlepot@knoodlepotstudio.com</a></p>
      </Section>

      <Section title="2. What Data We Collect">
        <p>Togetherly is designed to collect as little as possible. There is no account, no login, and no profile. The only data we store is:</p>
        <ul style={styles.list}>
          <li><strong>Check-in status</strong> — your most recent check-in (I&apos;m Okay, I Need Help, or SOS), along with any mood or needs note you choose to share. This is stored only for as long as it is needed to display to your connected person and trigger notifications.</li>
          <li><strong>Connection code</strong> — the six-character code used to link two people. This code contains no personal information and is used only to route check-ins between the correct devices.</li>
          <li><strong>Device token</strong> — a push notification token is stored on our servers to allow check-in alerts and missed check-in notifications to be delivered to the connected person&apos;s device. This token contains no personal information.</li>
          <li><strong>Check-in window preference</strong> — your chosen notification window (for example, six hours or twenty-four hours) is stored to determine when a missed check-in alert should be sent.</li>
        </ul>
        <p>We do not collect your name, email address, location, or any other personal information.</p>
      </Section>

      <Section title="3. How We Use Your Data">
        <ul style={styles.list}>
          <li>To display your check-in status to your connected person in real time.</li>
          <li>To send a push notification to your connected person if no check-in is received within the configured window.</li>
          <li>To send an SOS alert immediately if the SOS button is pressed.</li>
        </ul>
        <p>We do not use any data for advertising, profiling, or any purpose beyond operating the app.</p>
      </Section>

      <Section title="4. Third-Party Services">
        <p>The following third-party services process data on our behalf:</p>
        <ul style={styles.list}>
          <li><strong>Firebase</strong> — real-time database. Check-in status, connection codes, and notification windows are stored on Firebase servers (EU region where available). <a href="https://firebase.google.com/support/privacy" style={styles.link}>Firebase Privacy &amp; Security</a></li>
          <li><strong>Firebase Cloud Messaging</strong> — push notifications are delivered via Google&apos;s FCM service using your device token. <a href="https://policies.google.com/privacy" style={styles.link}>Google Privacy Policy</a></li>
        </ul>
      </Section>

      <Section title="5. Data Retention">
        <p>Check-in data is overwritten each time a new check-in is submitted. Connection codes and device tokens are deleted when a connection is ended within the app. To request deletion of all data associated with your connection code, email <a href="mailto:knoodlepot@knoodlepotstudio.com" style={styles.link}>knoodlepot@knoodlepotstudio.com</a> — we will action it within 30 days.</p>
      </Section>

      <Section title="6. Your Rights (UK GDPR)">
        <p>Because Togetherly collects no personally identifying information, there is limited personal data for Knoodlepot Studio to action. However, as a UK resident you have the right to:</p>
        <ul style={styles.list}>
          <li>Access any personal data we hold about you.</li>
          <li>Request correction of inaccurate data.</li>
          <li>Request deletion of your data.</li>
          <li>Object to processing of your data.</li>
        </ul>
        <p>To exercise any of these rights, contact us at <a href="mailto:knoodlepot@knoodlepotstudio.com" style={styles.link}>knoodlepot@knoodlepotstudio.com</a>.</p>
      </Section>

      <Section title="7. Children">
        <p>This app is intended for users aged 13 and over. We do not knowingly collect data from anyone under 13.</p>
      </Section>

      <Section title="8. Changes to This Policy">
        <p>We may update this policy from time to time. Any significant changes will be noted by updating the date at the top of this page. Continued use of the app after changes constitutes acceptance of the updated policy.</p>
      </Section>

      <Section title="9. Contact">
        <p>For any privacy-related questions: <a href="mailto:knoodlepot@knoodlepotstudio.com" style={styles.link}>knoodlepot@knoodlepotstudio.com</a></p>
      </Section>
    </PrivacyPage>
  );
}
