import { PrivacyPage, Section, styles } from "@/components/PrivacyPage";

export const metadata = { title: "Privacy Policy — Greenman" };

export default function GreenmanPrivacy() {
  return (
    <PrivacyPage appName="Greenman" lastUpdated="18 April 2026">
      <Section title="1. Who We Are">
        <p>Greenman is developed and operated by Knoodlepot Studios, a sole trader based in the United Kingdom. Contact: <a href="mailto:knoodlepot@knoodlepotstudio.com" style={styles.link}>knoodlepot@knoodlepotstudio.com</a></p>
      </Section>

      <Section title="2. What Data We Collect">
        <p>Greenman is a reference app. It does not require an account and does not collect personal information. The only data stored is:</p>
        <ul style={styles.list}>
          <li><strong>Local app preferences</strong> — your disclaimer acceptance and any settings are saved locally on your device using AsyncStorage. This data never leaves your device.</li>
          <li><strong>Subscription status</strong> — if you make a purchase, RevenueCat records an anonymous device identifier and your purchase receipt to manage and restore your entitlements. No name, email address, or other personal information is collected by Knoodlepot Studios in connection with purchases.</li>
        </ul>
        <p>We do not collect your name, email address, location, or any other personal information.</p>
      </Section>

      <Section title="3. How We Use Your Data">
        <ul style={styles.list}>
          <li>Local preferences are used solely to remember your in-app settings between sessions.</li>
          <li>Purchase data is used solely to grant or restore access to premium features.</li>
        </ul>
        <p>We do not use any data for advertising, profiling, or any purpose beyond operating the app.</p>
      </Section>

      <Section title="4. Third-Party Services">
        <p>The following third-party services process data on our behalf:</p>
        <ul style={styles.list}>
          <li><strong>RevenueCat</strong> — subscription and purchase management. RevenueCat collects an anonymous device identifier and purchase history to manage entitlements. <a href="https://www.revenuecat.com/privacy" style={styles.link}>RevenueCat Privacy Policy</a></li>
          <li><strong>Google Play</strong> — purchases are processed by Google Play. <a href="https://policies.google.com/privacy" style={styles.link}>Google Privacy Policy</a></li>
        </ul>
        <p>The Trail section of the app offers an option to open a location in your device&apos;s maps app. Tapping this button launches your native maps application with the relevant coordinates. No location data is collected or stored by Greenman; the handoff is handled entirely by your device&apos;s operating system.</p>
      </Section>

      <Section title="5. Data Retention">
        <p>Local preferences are stored on your device and can be cleared by uninstalling the app. Purchase records are held by RevenueCat and Google Play in accordance with their respective policies. Knoodlepot Studios does not hold any personal data on its own servers.</p>
      </Section>

      <Section title="6. Your Rights (UK GDPR)">
        <p>Because Greenman collects no personal information beyond anonymous purchase identifiers managed by third parties, there is limited personal data for Knoodlepot Studios to action. However, as a UK resident you have the right to:</p>
        <ul style={styles.list}>
          <li>Access any personal data we hold about you.</li>
          <li>Request correction of inaccurate data.</li>
          <li>Request deletion of your data.</li>
          <li>Object to processing of your data.</li>
        </ul>
        <p>To exercise any of these rights, contact us at <a href="mailto:knoodlepot@knoodlepotstudio.com" style={styles.link}>knoodlepot@knoodlepotstudio.com</a>. For data held by RevenueCat or Google, please contact them directly using the links in section 4.</p>
      </Section>

      <Section title="7. Children">
        <p>This app is not directed at children under 13. We do not knowingly collect data from anyone under 13.</p>
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
