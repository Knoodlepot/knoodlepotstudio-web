import { PrivacyPage, Section, styles } from "@/components/PrivacyPage";

export const metadata = { title: "Privacy Policy — Floriography" };

export default function FloriographyPrivacy() {
  return (
    <PrivacyPage appName="Floriography" lastUpdated="23 April 2026">
      <Section title="1. Who We Are">
        <p>Floriography is developed and operated by Knoodlepot Studio, a sole trader based in the United Kingdom. Contact: <a href="mailto:knoodlepot@knoodlepotstudio.com" style={styles.link}>knoodlepot@knoodlepotstudio.com</a></p>
      </Section>

      <Section title="2. What Data We Collect">
        <p>We collect only what is necessary to provide the service:</p>
        <ul style={styles.list}>
          <li><strong>Email address</strong> — used to create and manage your account.</li>
          <li><strong>Flower photographs</strong> — photos you take or select are uploaded to our secure storage in order to identify the flower and generate your story card. Photos are stored so you can view them in your garden journal.</li>
          <li><strong>Journal entries</strong> — the flower name, Latin name, generated story, and any notes associated with each identification are stored in your personal garden journal.</li>
          <li><strong>Location (optional)</strong> — if you grant location permission, the approximate place name where a flower was photographed is saved alongside that journal entry. We do not track your location continuously or store precise GPS coordinates beyond the moment of identification.</li>
          <li><strong>Subscription status</strong> — managed via RevenueCat, which records your purchase history and a device identifier to manage your subscription across reinstalls.</li>
        </ul>
        <p>We do not collect your name, phone number, or any other personal information beyond the above.</p>
      </Section>

      <Section title="3. How We Use Your Data">
        <ul style={styles.list}>
          <li>To authenticate you and maintain your account.</li>
          <li>To store your garden journal so you can access it within the app.</li>
          <li>To send your photograph to the Anthropic Claude API for flower identification and story generation. Only the image itself is sent — no personal information is included in the request.</li>
          <li>To display the approximate location where a flower was photographed, if you have granted location permission.</li>
          <li>To manage your subscription via RevenueCat.</li>
        </ul>
        <p>We do not use your data for advertising, profiling, or any purpose beyond operating the app.</p>
      </Section>

      <Section title="4. Third-Party Services">
        <p>The following third-party services process data on our behalf:</p>
        <ul style={styles.list}>
          <li><strong>Supabase</strong> — authentication, cloud database, and storage. Your email address, journal entries, and flower photographs are stored on Supabase servers (EU region where available). <a href="https://supabase.com/privacy" style={styles.link}>Supabase Privacy Policy</a></li>
          <li><strong>Anthropic</strong> — photographs you submit for identification are sent to Anthropic&apos;s Claude API to generate flower stories. Anthropic may retain API inputs for safety purposes in accordance with their policy. <a href="https://www.anthropic.com/privacy" style={styles.link}>Anthropic Privacy Policy</a></li>
          <li><strong>RevenueCat</strong> — subscription and purchase management. RevenueCat collects a device identifier and purchase history. <a href="https://www.revenuecat.com/privacy" style={styles.link}>RevenueCat Privacy Policy</a></li>
          <li><strong>OpenStreetMap Nominatim</strong> — if location permission is granted, GPS coordinates are sent to the Nominatim reverse geocoding service to convert them to a human-readable place name. Coordinates are not stored. <a href="https://osmfoundation.org/wiki/Privacy_Policy" style={styles.link}>OSM Privacy Policy</a></li>
        </ul>
      </Section>

      <Section title="5. Data Retention">
        <p>Your journal entries and photographs are stored until you delete individual entries within the app or request account deletion. To request deletion of your account and all associated data, email <a href="mailto:knoodlepot@knoodlepotstudio.com" style={styles.link}>knoodlepot@knoodlepotstudio.com</a> — we will action it within 30 days.</p>
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
