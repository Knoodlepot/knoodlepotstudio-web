import { TermsPage, Section, styles } from "@/components/TermsPage";

export const metadata = { title: "Terms of Service — Naturlore" };

export default function NaturloreTerms() {
  return (
    <TermsPage appName="Naturlore" lastUpdated="16 May 2026">
      <Section title="1. Acceptance of Terms">
        <p>By downloading or using Naturlore, you agree to these Terms of Service. If you do not agree, do not use the app. These terms form a binding agreement between you and Knoodlepot Studio, a UK sole trader.</p>
      </Section>

      <Section title="2. The Service">
        <p>Naturlore is a nature folklore app for Android. It uses AI to identify plants, creatures, fungi, and insects from photographs and generates lore entries drawing on mythology, folklore, and natural history. Identified species are cached in a shared community archive, and first discoveries are credited by username permanently.</p>
        <p>AI-generated content is provided for informational and entertainment purposes. It should not be relied upon for foraging, medical, or safety decisions. Species identification accuracy may vary. Never consume or handle anything based solely on an app identification.</p>
      </Section>

      <Section title="3. Accounts and Usernames">
        <p>You must be aged 13 or over to use Naturlore. Your chosen username will be publicly visible in the shared archive alongside any species you are the first to identify. You are responsible for choosing an appropriate username. We reserve the right to remove usernames that are offensive, misleading, or in violation of these terms.</p>
        <p>First-discovery credits are permanent in the archive. Requesting account deletion will remove your personal data but your username credit may remain associated with the discovery record.</p>
      </Section>

      <Section title="4. Subscriptions and Payments">
        <p>Naturlore offers a free tier and a paid Full Access subscription. Subscriptions are billed monthly through Google Play in accordance with Google&apos;s payment terms. Subscription management, cancellation, and refunds are handled by Google Play. We do not process payments directly.</p>
      </Section>

      <Section title="5. Acceptable Use">
        <p>You agree not to:</p>
        <ul style={styles.list}>
          <li>Use the app for any unlawful purpose.</li>
          <li>Attempt to manipulate the discovery archive or claim false first discoveries.</li>
          <li>Attempt to reverse-engineer, decompile, or tamper with the app.</li>
          <li>Use automated tools to access the service beyond normal app usage.</li>
          <li>Upload content that is illegal, harmful, or infringes third-party rights.</li>
        </ul>
      </Section>

      <Section title="6. Intellectual Property">
        <p>All app content, design, code, and AI-generated lore entries are the property of Knoodlepot Studio or its licensors. You may share individual lore entries for personal, non-commercial use. You may not reproduce, distribute, or exploit app content commercially without written permission.</p>
      </Section>

      <Section title="7. Disclaimer of Warranties">
        <p>Naturlore is provided &quot;as is&quot; without warranties of any kind. We do not guarantee that species identifications will be accurate. Folkloric content is drawn from historical sources and may contain cultural interpretations. Use of the app is at your own risk.</p>
      </Section>

      <Section title="8. Limitation of Liability">
        <p>To the fullest extent permitted by UK law, Knoodlepot Studio shall not be liable for any indirect, incidental, or consequential damages arising from your use of the app. Our total liability to you shall not exceed the amount you paid for the service in the three months preceding the claim.</p>
      </Section>

      <Section title="9. Governing Law">
        <p>These terms are governed by the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.</p>
      </Section>

      <Section title="10. Changes to These Terms">
        <p>We may update these terms from time to time. Continued use of the app after changes are posted constitutes acceptance of the updated terms.</p>
      </Section>

      <Section title="11. Contact">
        <p>For any questions about these terms: <a href="mailto:knoodlepot@knoodlepotstudio.com" style={styles.link}>knoodlepot@knoodlepotstudio.com</a></p>
      </Section>
    </TermsPage>
  );
}
