import { TermsPage, Section, styles } from "@/components/TermsPage";

export const metadata = { title: "Terms of Service — Floriography" };

export default function FloriographyTerms() {
  return (
    <TermsPage appName="Floriography" lastUpdated="20 May 2026">
      <Section title="1. Who we are and what this is">
        <p>
          These Terms of Service (&quot;Terms&quot;) form a legally binding agreement between
          you and Knoodlepot Studio (sole trader) regarding your use of Floriography
          (&quot;the app&quot;). You can reach us at{" "}
          <a href="mailto:knoodlepot@knoodlepotstudio.com" style={styles.link}>
            knoodlepot@knoodlepotstudio.com
          </a>
          . Our ICO registration number is <strong>ZC143302</strong>.
        </p>
      </Section>

      <Section title="2. Accepting these Terms">
        <p>
          By installing or using Floriography, you confirm that you have read, understood, and
          accepted these Terms. If you do not agree, please do not use the app.
        </p>
        <p style={{ marginTop: 12 }}>
          You must be at least <strong>16 years old</strong> to use this app.
        </p>
      </Section>

      <Section title="3. What this app does">
        <p>
          Floriography is a flower identification and journaling app. It uses AI to identify
          flowers from photographs and generate stories drawn from Victorian floriography and
          the language of flowers. The app includes a personal Garden Journal, a Dark Bouquet
          Builder, and a Garden Map with collectible stamps.
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
          <li>Upload content that is illegal, harmful, or infringes third-party rights.</li>
        </ul>
        <p style={{ marginTop: 12 }}>
          We may terminate your licence if you breach these Terms.
        </p>
      </Section>

      <Section title="5. Subscriptions and payments">
        <p>
          Floriography offers a free tier and a paid <strong>Bloom</strong> subscription.
          Subscriptions are sold and billed by Google Play, with purchase verification provided
          by RevenueCat.
        </p>
        <ul style={styles.list}>
          <li><strong>Price</strong> — the price shown in the app at the time of purchase applies. Prices may change for future renewals; we will tell you before any change takes effect.</li>
          <li><strong>Renewal</strong> — subscriptions renew automatically at the end of each billing period unless you cancel at least 24 hours before the renewal date.</li>
          <li><strong>Cancellation</strong> — cancel any time from your Google Play account. Paid features remain available until the end of the current billing period and are not refunded pro-rata.</li>
          <li><strong>Free trials</strong> — if offered and not cancelled before the trial ends, the subscription starts automatically at the listed price.</li>
        </ul>
      </Section>

      <Section title="6. Refunds">
        <p>
          Refunds are handled by Google Play under Google&apos;s own refund policy. Within 48
          hours of purchase you can usually request a refund through the Play Store. This does
          not affect your statutory rights under the Consumer Rights Act 2015. To raise a claim
          with us, email{" "}
          <a href="mailto:knoodlepot@knoodlepotstudio.com" style={styles.link}>
            knoodlepot@knoodlepotstudio.com
          </a>{" "}
          with proof of purchase and a description of the issue.
        </p>
      </Section>

      <Section title="7. Your content">
        <p>
          The app allows you to create and save journal entries, including flower photographs
          and personal notes. This content belongs to you, not to us. We do not claim any
          ownership of it.
        </p>
        <p style={{ marginTop: 12 }}>
          Your content is stored in Firebase on your behalf so you can access it across your
          devices. You can delete individual entries within the app at any time. To delete your
          account and all associated content, use the delete-account option in settings or
          email us.
        </p>
        <p style={{ marginTop: 12 }}>
          You are responsible for the content you create and submit. You must not submit
          photographs or notes that are illegal, infringe anyone&apos;s rights, or could be
          used to harm another person.
        </p>
      </Section>

      <Section title="8. AI-generated content">
        <p>
          Floriography uses artificial intelligence (Anthropic Claude) to identify flowers from
          photographs and generate stories based on Victorian floriography.
        </p>
        <p style={{ marginTop: 12 }}>You acknowledge that:</p>
        <ul style={styles.list}>
          <li>AI flower identifications can be inaccurate or incomplete. Do not rely on them for botanical, medical, foraging, or safety decisions.</li>
          <li>AI-generated stories and symbolic meanings are provided for entertainment and informational purposes only and are not factual statements.</li>
          <li>We do not guarantee any particular result or that the AI feature will remain available indefinitely.</li>
        </ul>
        <p style={{ marginTop: 12 }}>
          When you submit a photograph for identification, it is sent to Anthropic via our
          server-side function. See our{" "}
          <a href="/floriography/privacy" style={styles.link}>Privacy Policy</a> for full
          details. Do not submit photographs you would not be comfortable sending to a
          US-based service provider.
        </p>
      </Section>

      <Section title="9. Acceptable use">
        <p>You agree not to:</p>
        <ul style={styles.list}>
          <li>Use the app for any unlawful purpose.</li>
          <li>Use AI features to generate content that targets, identifies, or could harm another person.</li>
          <li>Attempt to reverse-engineer or jailbreak the AI, or prompt it to behave outside its intended scope.</li>
          <li>Redistribute paid content commercially without written permission from us.</li>
        </ul>
        <p style={{ marginTop: 12 }}>
          We may suspend or revoke access to paid features without refund for serious breaches.
          For unlawful breaches, we will cooperate with law enforcement as required.
        </p>
      </Section>

      <Section title="10. Third-party services">
        <p>
          The app relies on Google Play, RevenueCat, Firebase, and Anthropic. Your
          use of those services is also subject to their own terms. Full detail is in our{" "}
          <a href="/floriography/privacy" style={styles.link}>Privacy Policy</a>.
        </p>
      </Section>

      <Section title="11. Intellectual property">
        <p>
          The app, its code, design, text, graphics, and original content are owned by
          Knoodlepot Studio or licensed to us, and are protected by copyright and other
          intellectual property laws. Your licence under section 4 does not transfer any
          ownership. You may save and share your own journal entries and story cards for
          personal, non-commercial use.
        </p>
      </Section>

      <Section title="12. Availability">
        <p>
          We try to keep the app running smoothly but do not guarantee uninterrupted or
          error-free availability. We may suspend or modify the app at any time for maintenance
          or security. If we end-of-life the app while you have an active paid subscription,
          we will issue a pro-rata refund for the remaining period through Google Play.
        </p>
      </Section>

      <Section title="13. Disclaimers">
        <p>
          To the maximum extent permitted by law, the app is provided &quot;as is&quot; without
          warranties of any kind, including implied warranties of satisfactory quality or
          fitness for a particular purpose. Nothing in this section limits your rights under
          the Consumer Rights Act 2015.
        </p>
      </Section>

      <Section title="14. Limitation of liability">
        <p>
          Nothing in these Terms excludes our liability for death or personal injury caused by
          our negligence, fraud or fraudulent misrepresentation, or any matter that cannot be
          excluded by law. Subject to the above, our total liability to you in any 12-month
          period is limited to the total amount you have paid us for the app in that period
          (or £100 if you have paid nothing). We are not liable for indirect or consequential
          loss, loss of data, or loss of goodwill.
        </p>
      </Section>

      <Section title="15. Changes to these Terms">
        <p>
          We may update these Terms from time to time. If a change is material — for example,
          if it affects pricing, refund rights, or data handling — we will give you clear notice
          in the app before it takes effect. Continued use of the app after that notice means
          you accept the new Terms.
        </p>
      </Section>

      <Section title="16. Governing law">
        <p>
          These Terms are governed by the laws of England and Wales. Any dispute will be
          subject to the exclusive jurisdiction of the courts of England and Wales, except that
          if you are a consumer resident in another part of the UK, you may bring proceedings
          in your local courts. Nothing in this section affects mandatory consumer protection
          rights that apply in your country of residence.
        </p>
      </Section>

      <Section title="17. Contact">
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
