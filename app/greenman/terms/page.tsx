import { TermsPage, Section, styles } from "@/components/TermsPage";

export const metadata = { title: "Terms of Service — Greenman" };

export default function GreenmanTerms() {
  return (
    <TermsPage appName="Greenman" lastUpdated="20 May 2026">
      <Section title="1. Who we are and what this is">
        <p>
          These Terms of Service (&quot;Terms&quot;) form a legally binding agreement between
          you and Knoodlepot Studio (sole trader) regarding your use of Greenman (&quot;the
          app&quot;). You can reach us at{" "}
          <a href="mailto:knoodlepot@knoodlepotstudio.com" style={styles.link}>
            knoodlepot@knoodlepotstudio.com
          </a>
          . Our ICO registration number is <strong>ZC143302</strong>.
        </p>
      </Section>

      <Section title="2. Accepting these Terms">
        <p>
          By installing or using Greenman, you confirm that you have read, understood, and
          accepted these Terms. If you do not agree, please do not use the app.
        </p>
        <p style={{ marginTop: 12 }}>
          You must be at least <strong>18 years old</strong> to use this app. The app displays
          an age gate on first launch and will not operate if you indicate you are under 18.
        </p>
      </Section>

      <Section title="3. What this app does">
        <p>
          Greenman is a British folk craft reference app — a working grimoire of herbs,
          crystals, spells, and lore drawn from the tradition as it was practised in these
          islands. It includes a reference library, the Wheel of the Year, GPS directions to
          sacred sites across Britain (the Trail), and, for Cunning tier subscribers, AI
          guidance grounded in documented British and Irish folk sources.
        </p>
        <p style={{ marginTop: 12 }}>
          All content is provided for informational, educational, and personal practice
          purposes. Nothing in the app constitutes medical, legal, or professional advice.
          Greenman does not require an account.
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
          <li>Redistribute paid reference content, AI responses, or illustrations commercially without written permission.</li>
        </ul>
        <p style={{ marginTop: 12 }}>
          We may terminate your licence if you breach these Terms.
        </p>
      </Section>

      <Section title="5. Purchases — Hedgewalker and Cunning tiers">
        <p>
          Greenman offers two paid tiers in addition to the free content:
        </p>
        <ul style={styles.list}>
          <li>
            <strong>Hedgewalker</strong> — a one-off purchase that unlocks the full reference
            library. Once purchased, it is permanently unlocked on your Google account and can
            be restored on other Android devices via the &quot;Restore purchases&quot; option
            in the app.
          </li>
          <li>
            <strong>Cunning</strong> — a monthly auto-renewing subscription that adds AI
            guidance features (Ask the Hedgewitch, Ritual Builder, Plant Recognition, and
            others). Subscriptions renew automatically at the end of each billing period unless
            you cancel at least 24 hours before the renewal date. After cancellation, Cunning
            features remain available until the end of the current billing period.
          </li>
        </ul>
        <p style={{ marginTop: 12 }}>
          All purchases are processed by Google Play and verified by RevenueCat. We do not
          process payments directly.
        </p>
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
          Greenman stores your preferences (such as disclaimer acceptance and settings) only on
          your device using local storage. We do not have access to this data and it is not
          backed up to any server. Clearing app data or uninstalling the app will remove it.
        </p>
      </Section>

      <Section title="8. AI-generated content (Cunning tier)">
        <p>
          Cunning tier features use artificial intelligence (Anthropic Claude) to answer
          questions and generate content grounded in British and Irish folk tradition. AI calls
          are routed through our backend proxy service; see our{" "}
          <a href="/greenman/privacy" style={styles.link}>Privacy Policy</a> for details.
        </p>
        <p style={{ marginTop: 12 }}>You acknowledge that:</p>
        <ul style={styles.list}>
          <li>AI output can be inaccurate, incomplete, or out-of-date.</li>
          <li>AI output is not professional advice. Do not rely on it for medical, legal, financial, or safety-critical decisions.</li>
          <li>AI responses represent the folk tradition as documented in historical sources, not authoritative scholarship. For consequential decisions, consult a qualified professional.</li>
          <li>We do not guarantee that the AI will produce any particular result or remain available indefinitely.</li>
        </ul>
        <p style={{ marginTop: 12 }}>
          When you use a Cunning AI feature, your question is sent to our backend. Do not
          submit information into AI features that you would not be comfortable sending to a
          US-based service provider.
        </p>
      </Section>

      <Section title="9. Folklore content disclaimer">
        <p>
          The content in this app is presented for cultural, historical, and educational
          interest. It includes traditional folk practices, herbs, crystals, spells, and rituals
          collected from historical and folkloric sources.
        </p>
        <ul style={styles.list}>
          <li>
            <strong>Herb and plant content is not medical advice.</strong> Do not consume or
            apply any plant without checking with a qualified medical professional first. Some
            plants mentioned in folk tradition are toxic, allergenic, or contraindicated in
            pregnancy or with certain medications.
          </li>
          <li>
            <strong>Fire and ritual safety.</strong> Where the app describes fire-based or other
            potentially hazardous practices, do not attempt them without proper safety
            precautions.
          </li>
          <li>
            <strong>Historical practices.</strong> Folklore that historically involved animal
            harm is documented for cultural completeness only and must not be re-enacted.
          </li>
          <li>
            <strong>The Trail.</strong> GPS directions lead to publicly documented sites. You
            are responsible for your own safety when visiting any location. Respect access
            rights, private land, and any site-specific rules.
          </li>
        </ul>
      </Section>

      <Section title="10. Acceptable use">
        <p>
          Greenman is a reference resource on British and Irish folk craft, presented for
          cultural, historical, and educational interest. We take no view on your personal
          spiritual practice; we do take a view on using the app as a vehicle for harming
          someone else.
        </p>
        <p style={{ marginTop: 12 }}>You agree not to:</p>
        <ul style={styles.list}>
          <li>
            <strong>Use the app to harm another person.</strong> This includes using app content
            to threaten, intimidate, harass, stalk, or coerce any identifiable person.
          </li>
          <li>
            <strong>Use AI features to generate harmful content.</strong> Do not prompt the AI
            to produce content that targets, identifies, threatens, or harasses a real person,
            or that would constitute hate speech or incitement under UK law.
          </li>
          <li>
            <strong>Attempt to extract or jailbreak the AI.</strong> Do not try to make the AI
            reveal its system prompt, behave outside its intended scope, or generate content
            unrelated to the folk tradition.
          </li>
          <li>
            <strong>Redistribute paid content</strong> — reference text, AI responses,
            illustrations, or audio in paid tiers are licensed for your personal use only.
          </li>
          <li>
            <strong>Reverse-engineer or scrape</strong> the app or its responses, including
            feeding app content into other AI models or training pipelines.
          </li>
          <li>
            <strong>Bypass the age gate.</strong> If you are under 18, you must not use the app.
          </li>
          <li>Use the app for any unlawful purpose.</li>
        </ul>
        <p style={{ marginTop: 12 }}>
          For minor breaches we may remind you of these Terms. For breaches involving misuse of
          AI features or attempts to harm others, we may suspend or revoke your access to paid
          features without refund. For unlawful breaches, we will cooperate with law enforcement
          as required.
        </p>
        <p style={{ marginTop: 12 }}>
          To report misuse, email{" "}
          <a href="mailto:knoodlepot@knoodlepotstudio.com" style={styles.link}>
            knoodlepot@knoodlepotstudio.com
          </a>.
        </p>
      </Section>

      <Section title="11. Third-party services">
        <p>
          The app relies on Google Play, RevenueCat, Google Cloud Run, and Anthropic. Your use
          of those services is also subject to their own terms. Full detail is in our{" "}
          <a href="/greenman/privacy" style={styles.link}>Privacy Policy</a>.
        </p>
      </Section>

      <Section title="12. Intellectual property">
        <p>
          The app, its code, design, text, graphics, illustrations, and original written
          material are owned by Knoodlepot Studio or licensed to us. Historical and folkloric
          content is drawn from public domain sources; original curation, structure, and
          presentation remain proprietary. Your licence under section 4 does not transfer any
          ownership.
        </p>
      </Section>

      <Section title="13. Availability">
        <p>
          We try to keep the app running smoothly but do not guarantee uninterrupted or
          error-free availability. If we end-of-life the app while you have an active Cunning
          subscription, we will issue a pro-rata refund for the remaining period through Google
          Play. One-off Hedgewalker purchases are not refundable in an end-of-life scenario
          beyond what Google Play&apos;s own policy provides.
        </p>
      </Section>

      <Section title="14. Disclaimers">
        <p>
          To the maximum extent permitted by law, the app is provided &quot;as is&quot; without
          warranties of any kind. Nothing in this section limits your rights under the Consumer
          Rights Act 2015.
        </p>
      </Section>

      <Section title="15. Limitation of liability">
        <p>
          Nothing in these Terms excludes our liability for death or personal injury caused by
          our negligence, fraud, or any matter that cannot be limited by law. Subject to the
          above, our total liability to you in any 12-month period is limited to the total
          amount you have paid us for the app in that period (or £100 if you have paid nothing).
          We are not liable for indirect or consequential loss, loss of data, or loss of
          goodwill.
        </p>
      </Section>

      <Section title="16. Changes to these Terms">
        <p>
          We may update these Terms from time to time. If a change is material, we will give
          you clear notice in the app before it takes effect. Continued use of the app after
          that notice means you accept the new Terms.
        </p>
      </Section>

      <Section title="17. Governing law">
        <p>
          These Terms are governed by the laws of England and Wales. Any dispute will be
          subject to the exclusive jurisdiction of the courts of England and Wales, except that
          if you are a consumer resident in another part of the UK, you may bring proceedings
          in your local courts. Nothing in this section affects mandatory consumer protection
          rights that apply in your country of residence.
        </p>
      </Section>

      <Section title="18. Contact">
        <p>
          For any questions about these Terms:{" "}
          <a href="mailto:knoodlepot@knoodlepotstudio.com" style={styles.link}>
            knoodlepot@knoodlepotstudio.com
          </a>
        </p>
        <p style={{ marginTop: 12 }}>
          For complaints about how we handle your data, you may also contact the ICO:{" "}
          <a href="https://ico.org.uk/make-a-complaint" style={styles.link}>
            ico.org.uk/make-a-complaint
          </a>
        </p>
      </Section>
    </TermsPage>
  );
}
