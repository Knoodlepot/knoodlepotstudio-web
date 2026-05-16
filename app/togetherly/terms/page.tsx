import { TermsPage, Section, styles } from "@/components/TermsPage";

export const metadata = { title: "Terms of Service — Togetherly" };

export default function TogetherlyTerms() {
  return (
    <TermsPage appName="Togetherly" lastUpdated="16 May 2026">
      <Section title="1. Acceptance of Terms">
        <p>By downloading or using Togetherly, you agree to these Terms of Service. If you do not agree, do not use the app. These terms form a binding agreement between you and Knoodlepot Studio, a UK sole trader.</p>
      </Section>

      <Section title="2. The Service">
        <p>Togetherly is a check-in app for Android designed for elderly or disabled people who live alone and the people who care about them. It uses a shared six-character connection code — no account, no login, no profile. The primary person sends check-ins; the connected person receives them. If no check-in is received within a configurable window, a push notification is sent automatically.</p>
        <p>Togetherly is not an emergency service. The SOS button sends an alert to a connected person via push notification — it does not contact the emergency services, and it does not guarantee delivery in all circumstances. If you are in an emergency, call 999.</p>
      </Section>

      <Section title="3. Acceptable Use">
        <p>You agree not to:</p>
        <ul style={styles.list}>
          <li>Use the app for any unlawful purpose.</li>
          <li>Attempt to reverse-engineer, decompile, or tamper with the app.</li>
          <li>Use automated tools to send false check-ins or trigger false alerts.</li>
          <li>Use the app as a substitute for emergency services.</li>
        </ul>
      </Section>

      <Section title="4. Intellectual Property">
        <p>All app content, design, and code are the property of Knoodlepot Studio or its licensors. You may not reproduce, distribute, or exploit app content commercially without written permission.</p>
      </Section>

      <Section title="5. Disclaimer of Warranties">
        <p>Togetherly is provided &quot;as is&quot; without warranties of any kind. Push notifications depend on device settings, network connectivity, and third-party services — delivery cannot be guaranteed in all circumstances. We do not guarantee that the service will be uninterrupted or error-free. Use of the app is at your own risk.</p>
      </Section>

      <Section title="6. Limitation of Liability">
        <p>To the fullest extent permitted by UK law, Knoodlepot Studio shall not be liable for any indirect, incidental, or consequential damages arising from your use of the app, including any failure to deliver a check-in alert or SOS notification. Our total liability to you shall not exceed the amount you paid for the service in the three months preceding the claim.</p>
      </Section>

      <Section title="7. Governing Law">
        <p>These terms are governed by the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.</p>
      </Section>

      <Section title="8. Changes to These Terms">
        <p>We may update these terms from time to time. Continued use of the app after changes are posted constitutes acceptance of the updated terms.</p>
      </Section>

      <Section title="9. Contact">
        <p>For any questions about these terms: <a href="mailto:knoodlepot@knoodlepotstudio.com" style={styles.link}>knoodlepot@knoodlepotstudio.com</a></p>
      </Section>
    </TermsPage>
  );
}
