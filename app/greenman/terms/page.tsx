import { TermsPage, Section, styles } from "@/components/TermsPage";

export const metadata = { title: "Terms of Service — Greenman" };

export default function GreenmanTerms() {
  return (
    <TermsPage appName="Greenman" lastUpdated="16 May 2026">
      <Section title="1. Acceptance of Terms">
        <p>By downloading or using Greenman, you agree to these Terms of Service. If you do not agree, do not use the app. These terms form a binding agreement between you and Knoodlepot Studio, a UK sole trader.</p>
      </Section>

      <Section title="2. The Service">
        <p>Greenman is a British folk craft reference app — a working grimoire of herbs, crystals, spells, and lore drawn from the tradition as it was practised in these islands. It includes a reference library, the Wheel of the Year, GPS directions to sacred sites across Britain, and AI guidance grounded in documented sources.</p>
        <p>All content is provided for informational, educational, and personal practice purposes. Nothing in the app constitutes medical, legal, or professional advice. Use any information responsibly and at your own discretion.</p>
        <p>Greenman does not require an account. No personal information is collected beyond anonymous purchase identifiers.</p>
      </Section>

      <Section title="3. Subscriptions and Payments">
        <p>Greenman offers free access and two optional paid tiers: a one-off Hedgewalker unlock and a monthly Cunning add-on subscription. All purchases are processed through Google Play in accordance with Google&apos;s payment terms. Subscription management, cancellation, and refunds are handled by Google Play. We do not process payments directly.</p>
      </Section>

      <Section title="4. Acceptable Use">
        <p>You agree not to:</p>
        <ul style={styles.list}>
          <li>Use the app for any unlawful purpose.</li>
          <li>Attempt to reverse-engineer, decompile, or tamper with the app.</li>
          <li>Use automated tools to access the service beyond normal app usage.</li>
        </ul>
        <p>The Trail section provides GPS coordinates to publicly documented sacred sites. You are responsible for your own safety when visiting any location. Respect access rights, private land, and any site-specific rules.</p>
      </Section>

      <Section title="5. Intellectual Property">
        <p>All app content, design, code, and original written material are the property of Knoodlepot Studio or its licensors. Historical and folkloric content is drawn from public domain sources; original curation, structure, and presentation remain proprietary. You may not reproduce, distribute, or exploit app content commercially without written permission.</p>
      </Section>

      <Section title="6. Disclaimer of Warranties">
        <p>Greenman is provided &quot;as is&quot; without warranties of any kind. We do not guarantee that the service will be uninterrupted or error-free. Historical and folkloric content is drawn from documented sources but may contain errors or omissions. Use of the app is at your own risk.</p>
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
