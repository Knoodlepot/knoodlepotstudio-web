import { TermsPage, Section, styles } from "@/components/TermsPage";

export const metadata = { title: "Terms of Service — Lunettes" };

export default function LunettesTerms() {
  return (
    <TermsPage appName="Lunettes" lastUpdated="16 May 2026">
      <Section title="1. Acceptance of Terms">
        <p>By downloading or using Lunettes, you agree to these Terms of Service. If you do not agree, do not use the app. These terms form a binding agreement between you and Knoodlepot Studio, a UK sole trader.</p>
      </Section>

      <Section title="2. The Service">
        <p>Lunettes is a premium Android reading app that gives books a voice, designed for people with dyslexia, visual impairment, ADHD, or any print disability. It passes text through Claude AI to detect emotional context and uses ElevenLabs to deliver contextually appropriate narration. The app supports an overlay mode for reading from other apps and an import mode for DRM-free EPUBs and PDFs.</p>
        <p>The overlay mode reads only text that is already displayed on screen. It does not interact with, copy, or circumvent any DRM protection. This is lawful under the Marrakesh Treaty 2018 for users with a qualifying print disability.</p>
        <p>AI-generated narration delivery is provided in good faith. The accuracy of emotional context detection may vary depending on the text.</p>
      </Section>

      <Section title="3. Accounts">
        <p>You must create an account to use Lunettes. You are responsible for maintaining the security of your account credentials and for all activity that occurs under your account. You must be aged 13 or over to create an account.</p>
      </Section>

      <Section title="4. Family Helper">
        <p>The Family Helper feature allows a carer, parent, or friend to remotely adjust book and voice settings for a primary reader. Any changes made via Family Helper require the explicit real-time consent of the primary reader before they take effect. You must not use this feature to make changes without the knowledge and consent of the primary reader.</p>
      </Section>

      <Section title="5. Subscriptions and Payments">
        <p>Lunettes may offer optional paid subscription tiers. Any purchases are processed through Google Play in accordance with Google&apos;s payment terms. Subscription management, cancellation, and refunds are handled by Google Play. We do not process payments directly.</p>
      </Section>

      <Section title="6. Acceptable Use">
        <p>You agree not to:</p>
        <ul style={styles.list}>
          <li>Use the app for any unlawful purpose.</li>
          <li>Attempt to reverse-engineer, decompile, or tamper with the app.</li>
          <li>Use automated tools to access the service beyond normal app usage.</li>
          <li>Use the Family Helper feature without the explicit consent of the primary reader.</li>
          <li>Import content that you do not have the right to use.</li>
        </ul>
      </Section>

      <Section title="7. Intellectual Property">
        <p>All app content, design, and code are the property of Knoodlepot Studio or its licensors. Books and documents you import remain your property. AI-generated narration instructions are produced transiently and are not stored or reproduced beyond the current session.</p>
      </Section>

      <Section title="8. Disclaimer of Warranties">
        <p>Lunettes is provided &quot;as is&quot; without warranties of any kind. We do not guarantee that the service will be uninterrupted, error-free, or that narration will be accurate or appropriate for all content. Use of the app is at your own risk.</p>
      </Section>

      <Section title="9. Limitation of Liability">
        <p>To the fullest extent permitted by UK law, Knoodlepot Studio shall not be liable for any indirect, incidental, or consequential damages arising from your use of the app. Our total liability to you shall not exceed the amount you paid for the service in the three months preceding the claim.</p>
      </Section>

      <Section title="10. Governing Law">
        <p>These terms are governed by the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.</p>
      </Section>

      <Section title="11. Changes to These Terms">
        <p>We may update these terms from time to time. Continued use of the app after changes are posted constitutes acceptance of the updated terms. Significant changes will be communicated via the app or by email.</p>
      </Section>

      <Section title="12. Contact">
        <p>For any questions about these terms: <a href="mailto:knoodlepot@knoodlepotstudio.com" style={styles.link}>knoodlepot@knoodlepotstudio.com</a></p>
      </Section>
    </TermsPage>
  );
}
