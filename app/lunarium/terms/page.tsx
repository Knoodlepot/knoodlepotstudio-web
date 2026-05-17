import { TermsPage, Section, styles } from "@/components/TermsPage";

export const metadata = { title: "Terms of Service — Lunarium" };

export default function LunariumTerms() {
  return (
    <TermsPage appName="Lunarium" lastUpdated="16 May 2026">
      <Section title="1. Acceptance of Terms">
        <p>By downloading or using Lunarium, you agree to these Terms of Service. If you do not agree, do not use the app. These terms form a binding agreement between you and Knoodlepot Studio, a UK sole trader.</p>
      </Section>

      <Section title="2. The Service">
        <p>Lunarium is a moon phase tracker and almanac for Android. It calculates moon phase data entirely on-device and provides a rotating almanac of Victorian-era folklore and superstitions associated with each phase. No account is required. No personal data is collected beyond anonymous purchase identifiers.</p>
        <p>Almanac content — including historical superstitions, folklore, and the Lunacy Alert feature — is provided for entertainment and cultural interest only. It does not constitute medical, agricultural, or scientific advice.</p>
      </Section>

      <Section title="3. Subscriptions and Payments">
        <p>Lunarium may offer optional paid features. Any purchases are processed through Google Play in accordance with Google&apos;s payment terms. Subscription management, cancellation, and refunds are handled by Google Play. We do not process payments directly.</p>
      </Section>

      <Section title="4. Acceptable Use">
        <p>You agree not to:</p>
        <ul style={styles.list}>
          <li>Use the app for any unlawful purpose.</li>
          <li>Attempt to reverse-engineer, decompile, or tamper with the app.</li>
          <li>Use automated tools to access the service beyond normal app usage.</li>
        </ul>
      </Section>

      <Section title="5. Intellectual Property">
        <p>All app content, design, code, and original almanac writing are the property of Knoodlepot Studio or its licensors. Historical folkloric content is drawn from public domain sources; original curation and presentation remain proprietary. You may not reproduce, distribute, or exploit app content commercially without written permission.</p>
      </Section>

      <Section title="6. Disclaimer of Warranties">
        <p>Lunarium is provided &quot;as is&quot; without warranties of any kind. Moon phase calculations are provided in good faith but should not be used for navigation, agriculture, or any purpose requiring precision astronomical data. Use of the app is at your own risk.</p>
      </Section>

      <Section title="7. Limitation of Liability">
        <p>To the fullest extent permitted by UK law, Knoodlepot Studio shall not be liable for any indirect, incidental, or consequential damages arising from your use of the app. Our total liability to you shall not exceed the amount you paid for the service in the three months preceding the claim.</p>
      </Section>

      <Section title="8. Governing Law">
        <p>These terms are governed by the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.</p>
      </Section>

      <Section title="9. Changes to These Terms">
        <p>We may update these terms from time to time. Continued use of the app after changes are posted constitutes acceptance of the updated terms.</p>
      </Section>

      <Section title="10. Contact">
        <p>For any questions about these terms: <a href="mailto:knoodlepot@knoodlepotstudio.com" style={styles.link}>knoodlepot@knoodlepotstudio.com</a></p>
      </Section>
    </TermsPage>
  );
}
