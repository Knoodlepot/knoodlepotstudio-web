import { PrivacyPage, Section, styles } from "@/components/PrivacyPage";

export const metadata = { title: "Privacy Policy — Veracitor" };

export default function VeracitorPrivacy() {
  return (
    <PrivacyPage appName="Veracitor" lastUpdated="16 April 2026">
      <Section title="1. Who We Are">
        <p>Veracitor is developed and operated by Knoodlepot Studios, a sole trader based in the United Kingdom. Contact: <a href="mailto:knoodlepot@knoodlepotstudio.com" style={styles.link}>knoodlepot@knoodlepotstudio.com</a></p>
      </Section>

      <Section title="2. What Data We Collect">
        <p>We collect only what is necessary to provide the service:</p>
        <ul style={styles.list}>
          <li><strong>Email address</strong> — used to create and manage your account.</li>
          <li><strong>Fact-check history</strong> — the claims you submit for checking and the verdicts returned. This is stored so you can review your history within the app.</li>
          <li><strong>Subscription status</strong> — managed via RevenueCat, which records your purchase history and a device identifier to manage your subscription across reinstalls.</li>
        </ul>
        <p>We do not collect your name, location, phone number, or any other personal information beyond the above.</p>
      </Section>

      <Section title="3. How We Use Your Data">
        <ul style={styles.list}>
          <li>To authenticate you and maintain your account.</li>
          <li>To store your fact-check history so you can access it in the app.</li>
          <li>To process claims through the Anthropic Claude API to generate fact-check verdicts. Only the claim text and your chosen context settings are sent — no personal information is included.</li>
          <li>To enforce daily usage limits on the free tier.</li>
          <li>To manage your subscription via RevenueCat.</li>
        </ul>
        <p>We do not use your data for advertising, profiling, or any purpose beyond operating the app.</p>
      </Section>

      <Section title="4. Third-Party Services">
        <p>The following third-party services process data on our behalf:</p>
        <ul style={styles.list}>
          <li><strong>Supabase</strong> — cloud database and authentication provider. Your email address and fact-check history are stored on Supabase servers (EU region where available). <a href="https://supabase.com/privacy" style={styles.link}>Supabase Privacy Policy</a></li>
          <li><strong>Anthropic</strong> — claims you submit are sent to Anthropic&apos;s Claude API to generate verdicts. Anthropic may retain API inputs for safety purposes in accordance with their policy. <a href="https://www.anthropic.com/privacy" style={styles.link}>Anthropic Privacy Policy</a></li>
          <li><strong>RevenueCat</strong> — subscription and purchase management. RevenueCat collects a device identifier and purchase history. <a href="https://www.revenuecat.com/privacy" style={styles.link}>RevenueCat Privacy Policy</a></li>
        </ul>
      </Section>

      <Section title="5. Data Retention">
        <p>Your fact-check history is stored until you delete individual entries within the app or request account deletion. To request deletion of your account and all associated data, email <a href="mailto:knoodlepot@knoodlepotstudio.com" style={styles.link}>knoodlepot@knoodlepotstudio.com</a> and we will action it within 30 days.</p>
      </Section>

      <Section title="6. Your Rights (UK GDPR)">
        <p>As a UK resident, you have the right to:</p>
        <ul style={styles.list}>
          <li>Access the personal data we hold about you.</li>
          <li>Request correction of inaccurate data.</li>
          <li>Request deletion of your data.</li>
          <li>Object to processing of your data.</li>
        </ul>
        <p>To exercise any of these rights, contact us at <a href="mailto:knoodlepot@knoodlepotstudio.com" style={styles.link}>knoodlepot@knoodlepotstudio.com</a>.</p>
      </Section>

      <Section title="7. Children">
        <p>This app is intended for users aged 13 and over. We do not knowingly collect data from anyone under 13. If you believe a minor has created an account, please contact us and we will delete it.</p>
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
