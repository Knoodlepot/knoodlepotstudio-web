import { TermsPage, Section, styles } from "@/components/TermsPage";

export const metadata = { title: "Terms of Service — Describr" };

export default function DescriberTerms() {
  return (
    <TermsPage appName="Describr" lastUpdated="16 May 2026">
      <Section title="1. Acceptance of Terms">
        <p>By downloading or using Describr, you agree to these Terms of Service. If you do not agree, do not use the app. These terms form a binding agreement between you and Knoodlepot Studio, a UK sole trader.</p>
      </Section>

      <Section title="2. The Service">
        <p>Describr is an Android accessibility app that combines camera magnification, on-device OCR text recognition, and AI image description. OCR is processed entirely on-device via Google ML Kit — no text is transmitted. Images submitted for AI description are sent to Anthropic&apos;s Claude API, compressed and anonymised, and discarded immediately after the response is returned.</p>
        <p>AI-generated descriptions are provided in good faith. Accuracy may vary depending on image quality and content. Describr should not be relied upon for safety-critical decisions.</p>
      </Section>

      <Section title="3. Accounts">
        <p>You must create an account to use Describr. You are responsible for maintaining the security of your account credentials and for all activity that occurs under your account. You must be aged 13 or over to create an account.</p>
      </Section>

      <Section title="4. Subscriptions and Payments">
        <p>Describr offers subscription tiers providing access to OCR and AI description features. Subscriptions are billed through Google Play in accordance with Google&apos;s payment terms. Subscription management, cancellation, and refunds are handled by Google Play. We do not process payments directly.</p>
      </Section>

      <Section title="5. Acceptable Use">
        <p>You agree not to:</p>
        <ul style={styles.list}>
          <li>Use the app for any unlawful purpose.</li>
          <li>Submit images of content you do not have the right to process.</li>
          <li>Attempt to reverse-engineer, decompile, or tamper with the app.</li>
          <li>Use automated tools to access the service beyond normal app usage.</li>
        </ul>
      </Section>

      <Section title="6. Intellectual Property">
        <p>All app content, design, and code are the property of Knoodlepot Studio or its licensors. AI-generated descriptions are produced transiently and are not stored by us after the response is returned. You may not reproduce, distribute, or exploit app content commercially without written permission.</p>
      </Section>

      <Section title="7. Disclaimer of Warranties">
        <p>Describr is provided &quot;as is&quot; without warranties of any kind. We do not guarantee that OCR or AI descriptions will be accurate in all circumstances. The app should not be used as the sole means of identifying content in situations where safety or accuracy is critical. Use of the app is at your own risk.</p>
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
