import { TermsPage, Section, styles } from "@/components/TermsPage";

export const metadata = { title: "Terms of Service — Plain English, Please." };

export default function PlainEnglishTerms() {
  return (
    <TermsPage appName="Plain English, Please." lastUpdated="20 May 2026">
      <Section title="1. Who we are and what this is">
        <p>
          These Terms of Service (&quot;Terms&quot;) form a legally binding agreement between
          you and Knoodlepot Studio (sole trader) regarding your use of Plain English, Please.
          (&quot;the app&quot;). You can reach us at{" "}
          <a href="mailto:knoodlepot@knoodlepotstudio.com" style={styles.link}>
            knoodlepot@knoodlepotstudio.com
          </a>
          . Our ICO registration number is <strong>ZC143302</strong>.
        </p>
      </Section>

      <Section title="2. Accepting these Terms">
        <p>
          By installing or using Plain English, Please., you confirm that you have read,
          understood, and accepted these Terms. If you do not agree, please do not use the app.
        </p>
        <p style={{ marginTop: 12 }}>
          You must be at least <strong>16 years old</strong> to use this app.
        </p>
      </Section>

      <Section title="3. What this app does">
        <p>
          Plain English, Please. is an Android app that passes passive-aggressive, corporate,
          or diplomatically difficult remarks through the Claude AI, returning a translation of
          what was actually meant, a polished response, and an internal monologue. The
          Twat-O-Meter rates the offender on a scale of one to five teacups. Translations can
          be saved to your history or shared as an image.
        </p>
        <p style={{ marginTop: 12 }}>
          All content is provided for <strong>entertainment and humour purposes only</strong>.
          AI-generated translations and responses should not be relied upon for legal,
          professional, or interpersonal decisions.
        </p>
      </Section>

      <Section title="4. Your licence to use the app">
        <p>
          We grant you a personal, non-exclusive, non-transferable, revocable licence to
          install and use the app on devices you own or control, for your own personal,
          non-commercial use, subject to these Terms.
        </p>
        <p style={{ marginTop: 12 }}>You must not:</p>
        <ul style={styles.list}>
          <li>Copy, modify, distribute, sell, sub-licence, or rent the app or its contents.</li>
          <li>Reverse-engineer or decompile the app, except as expressly permitted by UK law.</li>
          <li>Remove or alter any copyright or proprietary notices.</li>
          <li>Use automated tools to access the service beyond normal app usage.</li>
        </ul>
        <p style={{ marginTop: 12 }}>
          We may terminate your licence if you breach these Terms.
        </p>
      </Section>

      <Section title="5. Subscriptions and payments">
        <p>
          Plain English, Please. offers a free trial period and a paid subscription.
          Subscriptions are sold and billed by Google Play, with purchase verification by
          RevenueCat.
        </p>
        <ul style={styles.list}>
          <li><strong>Price</strong> — the price shown in the app at the time of purchase applies.</li>
          <li><strong>Renewal</strong> — subscriptions renew automatically at the end of each billing period unless you cancel at least 24 hours before renewal.</li>
          <li><strong>Cancellation</strong> — cancel any time from your Google Play account. Access continues to the end of the current billing period.</li>
          <li><strong>Free trial</strong> — if not cancelled before the trial ends, the subscription starts automatically at the listed price.</li>
        </ul>
      </Section>

      <Section title="6. Refunds">
        <p>
          Refunds are handled by Google Play under Google&apos;s refund policy. Within 48 hours
          of purchase you can usually request a refund through the Play Store. This does not
          affect your statutory rights under the Consumer Rights Act 2015. To raise a claim with
          us, email{" "}
          <a href="mailto:knoodlepot@knoodlepotstudio.com" style={styles.link}>
            knoodlepot@knoodlepotstudio.com
          </a>{" "}
          with proof of purchase and a description of the issue.
        </p>
      </Section>

      <Section title="7. Your content">
        <p>
          The app allows you to save translation results to your history. This content belongs
          to you, not to us. We do not claim any ownership of it.
        </p>
        <p style={{ marginTop: 12 }}>
          Your saved history is stored in Firebase Firestore on your behalf. You can delete
          individual entries at any time. To delete your account and all associated data, use
          the delete-account option in settings or email us.
        </p>
        <p style={{ marginTop: 12 }}>
          You are responsible for the text you submit to the app. You must not submit content
          that is designed to produce material that constitutes harassment, defamation, or
          threats against any identifiable person.
        </p>
      </Section>

      <Section title="8. AI-generated content">
        <p>
          This app uses artificial intelligence (Anthropic Claude) to analyse and translate
          text. AI calls are made directly from your device to Anthropic&apos;s servers.
        </p>
        <p style={{ marginTop: 12 }}>You acknowledge that:</p>
        <ul style={styles.list}>
          <li>AI output is generated for entertainment purposes and may not accurately reflect anyone&apos;s actual intent.</li>
          <li>AI output is not professional, legal, medical, or interpersonal advice. Do not rely on it for consequential decisions.</li>
          <li>We do not guarantee any particular result or that the AI will remain available indefinitely.</li>
          <li>When you submit text, it and your IP address are sent directly to Anthropic for processing. See our <a href="/plain-english-please/privacy" style={styles.link}>Privacy Policy</a> for full details.</li>
        </ul>
        <p style={{ marginTop: 12 }}>
          Do not submit information into the app that you would not be comfortable sending to a
          US-based service provider.
        </p>
      </Section>

      <Section title="9. Acceptable use">
        <p>
          This app is a humour tool. We respect that people use it to vent. What we will not
          permit is using the app as a vehicle for harming another person.
        </p>
        <p style={{ marginTop: 12 }}>You agree not to:</p>
        <ul style={styles.list}>
          <li><strong>Use the app to harm another person.</strong> Do not submit text with the intent of generating content that threatens, identifies, defames, or constitutes harassment of any real individual.</li>
          <li><strong>Use AI features to generate discriminatory content.</strong> Do not attempt to prompt the AI to produce content that would constitute hate speech, harassment, or incitement under UK law.</li>
          <li><strong>Misrepresent AI output.</strong> Do not present AI-generated translations as factual, professional, or the actual views of Knoodlepot Studio.</li>
          <li><strong>Reverse-engineer or jailbreak the AI.</strong> Do not attempt to make the AI reveal its system prompt or generate content outside its intended scope.</li>
          <li>Use the app for any unlawful purpose.</li>
          <li>Use automated tools to access the service beyond normal app usage.</li>
        </ul>
        <p style={{ marginTop: 12 }}>
          For breaches involving misuse of AI features to target another person, we may suspend
          or revoke your access to paid features without refund. For unlawful breaches, we will
          cooperate with law enforcement as required.
        </p>
        <p style={{ marginTop: 12 }}>
          To report misuse, email{" "}
          <a href="mailto:knoodlepot@knoodlepotstudio.com" style={styles.link}>
            knoodlepot@knoodlepotstudio.com
          </a>.
        </p>
      </Section>

      <Section title="10. Third-party services">
        <p>
          The app relies on Google Play, RevenueCat, Firebase, and Anthropic. Your use of those
          services is also subject to their own terms. Full detail is in our{" "}
          <a href="/plain-english-please/privacy" style={styles.link}>Privacy Policy</a>.
        </p>
      </Section>

      <Section title="11. Intellectual property">
        <p>
          The app, its code, design, text, graphics, and original content are owned by
          Knoodlepot Studio or licensed to us. Your licence under section 4 does not transfer
          any ownership. You may save and share individual translation results for personal,
          non-commercial use.
        </p>
      </Section>

      <Section title="12. Disclaimers">
        <p>
          To the maximum extent permitted by law, the app is provided &quot;as is&quot; without
          warranties of any kind. Nothing in this section limits your rights under the Consumer
          Rights Act 2015.
        </p>
      </Section>

      <Section title="13. Limitation of liability">
        <p>
          Nothing in these Terms excludes our liability for death or personal injury caused by
          our negligence, fraud, or any matter that cannot be limited by law. Subject to the
          above, our total liability to you in any 12-month period is limited to the total
          amount you have paid us for the app in that period (or £100 if you have paid nothing).
          We are not liable for indirect or consequential loss, or for any reliance placed on
          AI-generated content.
        </p>
      </Section>

      <Section title="14. Changes to these Terms">
        <p>
          We may update these Terms from time to time. If a change is material, we will give
          you clear notice in the app before it takes effect. Continued use of the app after
          that notice means you accept the new Terms.
        </p>
      </Section>

      <Section title="15. Governing law">
        <p>
          These Terms are governed by the laws of England and Wales. Any dispute will be
          subject to the exclusive jurisdiction of the courts of England and Wales, except that
          if you are a consumer resident in another part of the UK, you may bring proceedings
          in your local courts. Nothing in this section affects mandatory consumer protection
          rights that apply in your country of residence.
        </p>
      </Section>

      <Section title="16. Contact">
        <p>
          For any questions about these Terms:{" "}
          <a href="mailto:knoodlepot@knoodlepotstudio.com" style={styles.link}>
            knoodlepot@knoodlepotstudio.com
          </a>
        </p>
      </Section>
    </TermsPage>
  );
}
