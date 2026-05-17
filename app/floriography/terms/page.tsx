import { TermsPage, Section, styles } from "@/components/TermsPage";

export const metadata = { title: "Terms of Service — Floriography" };

export default function FloriographyTerms() {
  return (
    <TermsPage appName="Floriography" lastUpdated="16 May 2026">
      <Section title="1. Acceptance of Terms">
        <p>By downloading or using Floriography, you agree to these Terms of Service. If you do not agree, do not use the app. These terms form a binding agreement between you and Knoodlepot Studio, a UK sole trader.</p>
      </Section>

      <Section title="2. The Service">
        <p>Floriography is a flower identification and journaling app. It uses AI to identify flowers from photographs and generate stories drawn from Victorian floriography. The app includes a personal garden journal, a Dark Bouquet Builder, and a Garden Map with collectible stamps.</p>
        <p>AI-generated content — flower identifications, stories, and symbolic meanings — is provided for entertainment and informational purposes. It should not be relied upon for botanical, medical, or scientific decisions. Identification accuracy may vary.</p>
      </Section>

      <Section title="3. Accounts">
        <p>You must create an account to use Floriography. You are responsible for maintaining the security of your account credentials and for all activity that occurs under your account. You must be aged 13 or over to create an account.</p>
      </Section>

      <Section title="4. Subscriptions and Payments">
        <p>Floriography offers a free tier and a paid Bloom subscription. Subscriptions are billed monthly through Google Play in accordance with Google&apos;s payment terms. Subscription management, cancellation, and refunds are handled by Google Play. We do not process payments directly.</p>
        <p>The free tier provides 5 flower identifications per month. The Bloom subscription provides unlimited identifications and additional features as described in the app.</p>
      </Section>

      <Section title="5. Acceptable Use">
        <p>You agree not to:</p>
        <ul style={styles.list}>
          <li>Use the app for any unlawful purpose.</li>
          <li>Attempt to reverse-engineer, decompile, or tamper with the app.</li>
          <li>Use automated tools to access the service beyond normal app usage.</li>
          <li>Upload content that is illegal, harmful, or infringes third-party rights.</li>
        </ul>
      </Section>

      <Section title="6. Intellectual Property">
        <p>All app content, design, code, and AI-generated stories are the property of Knoodlepot Studio or its licensors. You may save and share your own journal entries and story cards for personal, non-commercial use. You may not reproduce, distribute, or exploit app content commercially without written permission.</p>
      </Section>

      <Section title="7. Disclaimer of Warranties">
        <p>Floriography is provided &quot;as is&quot; without warranties of any kind. We do not guarantee that the service will be uninterrupted, error-free, or that AI identifications will be accurate. Use of the app is at your own risk.</p>
      </Section>

      <Section title="8. Limitation of Liability">
        <p>To the fullest extent permitted by UK law, Knoodlepot Studio shall not be liable for any indirect, incidental, or consequential damages arising from your use of the app. Our total liability to you shall not exceed the amount you paid for the service in the three months preceding the claim.</p>
      </Section>

      <Section title="9. Governing Law">
        <p>These terms are governed by the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.</p>
      </Section>

      <Section title="10. Changes to These Terms">
        <p>We may update these terms from time to time. Continued use of the app after changes are posted constitutes acceptance of the updated terms. Significant changes will be communicated via the app or by email.</p>
      </Section>

      <Section title="11. Contact">
        <p>For any questions about these terms: <a href="mailto:knoodlepot@knoodlepotstudio.com" style={styles.link}>knoodlepot@knoodlepotstudio.com</a></p>
      </Section>
    </TermsPage>
  );
}
