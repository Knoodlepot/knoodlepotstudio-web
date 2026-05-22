import { TermsPage, Section, styles } from "@/components/TermsPage";

export const metadata = { title: "Terms of Service — Selene" };

export default function SeleneTerms() {
  return (
    <TermsPage appName="Selene" lastUpdated="22 May 2026">
      <Section title="1. Who we are and what this is">
        <p>
          These Terms of Service (&quot;Terms&quot;) form a legally binding agreement between
          you and Knoodlepot Studio (sole trader) regarding your use of Selene (&quot;the app&quot;).
          You can reach us at{" "}
          <a href="mailto:knoodlepot@knoodlepotstudio.com" style={styles.link}>
            knoodlepot@knoodlepotstudio.com
          </a>
          . Our ICO registration number is <strong>ZC143302</strong>.
        </p>
      </Section>

      <Section title="2. Accepting these Terms">
        <p>
          By installing or using Selene, you confirm that you have read, understood, and accepted
          these Terms. If you do not agree, please do not use the app.
        </p>
        <p style={{ marginTop: 12 }}>
          You must be at least <strong>16 years old</strong> to use this app. Selene shows an
          age gate on first launch and will not operate if you indicate you are under 16.
        </p>
      </Section>

      <Section title="3. What this app does">
        <p>
          Selene is a privacy-first menstrual cycle tracking app for the UK market. It allows you
          to log cycle dates, symptoms, moods, pain levels, sleep quality, and related health
          information entirely on your device. All data is stored locally and encrypted on your
          phone. Selene is not a medical device and does not provide medical advice.
        </p>
      </Section>

      <Section title="4. Your licence to use the app">
        <p>
          We grant you a personal, non-exclusive, non-transferable, revocable licence to install
          and use Selene on devices you own or control, for your own personal, non-commercial use,
          subject to these Terms.
        </p>
        <p style={{ marginTop: 12 }}>You must not:</p>
        <ul style={styles.list}>
          <li>Copy, modify, distribute, sell, sub-licence, or rent the app or its contents.</li>
          <li>Reverse-engineer or decompile the app, except as expressly permitted by UK law.</li>
          <li>Remove or alter any copyright or proprietary notices.</li>
          <li>Use the app to break any law or to do anything that could damage or impair the app.</li>
        </ul>
        <p style={{ marginTop: 12 }}>We may terminate your licence if you breach these Terms.</p>
      </Section>

      <Section title="5. One-off purchase">
        <p>
          Selene is available with a 14-day free trial. After the trial, a one-off purchase unlocks
          the app permanently. This purchase is processed by Google Play and verified by RevenueCat.
        </p>
        <p style={{ marginTop: 12 }}>
          Once purchased, the app is unlocked on your Google account and can be restored on other
          Android devices signed in to the same account using <strong>Settings &rarr; About &rarr; Restore purchase</strong>.
        </p>
      </Section>

      <Section title="6. Refunds">
        <p>
          Refunds are handled by Google Play under{" "}
          <a href="https://support.google.com/googleplay/answer/2479637" style={styles.link}>
            Google&apos;s refund policy
          </a>. Within 48 hours of purchase you can usually request a refund directly through the
          Play Store.
        </p>
        <p style={{ marginTop: 12 }}>
          This does not affect your statutory rights under the Consumer Rights Act 2015 if the app
          is faulty or not as described. To raise such a claim, email{" "}
          <a href="mailto:knoodlepot@knoodlepotstudio.com" style={styles.link}>
            knoodlepot@knoodlepotstudio.com
          </a>{" "}
          with proof of purchase and a description of the issue.
        </p>
      </Section>

      <Section title="7. Your content">
        <p>
          The app allows you to create and save health logs, cycle entries, notes, and related
          content. This content belongs to you, not to us.
        </p>
        <p style={{ marginTop: 12 }}>
          Your content is stored only on your device. We do not have access to it and cannot
          recover it if you uninstall the app or delete it. You can export everything at any time
          from <strong>Settings &rarr; Export as CSV</strong>.
        </p>
        <p style={{ marginTop: 12 }}>
          If you enable the optional Google Drive backup, your content is encrypted on your device
          before it is uploaded. Only you can decrypt it, using your passphrase. We cannot access
          the backup.
        </p>
      </Section>

      <Section title="8. Health information disclaimer">
        <p>
          Selene is a self-tracking tool and <strong>is not a medical device</strong>. It does not
          diagnose, treat, cure, or prevent any condition. Predictions, patterns, and health insights
          shown in the app are estimates based on your logged data and published NHS and NICE
          guidelines. They are not a diagnosis.
        </p>
        <p style={{ marginTop: 12 }}>Do not use Selene:</p>
        <ul style={styles.list}>
          <li>As a means of contraception or fertility planning.</li>
          <li>To diagnose or self-treat any medical condition.</li>
          <li>As a substitute for advice from a qualified medical professional.</li>
        </ul>
        <p style={{ marginTop: 12 }}>
          If you have any concern about your health, please consult your GP, a nurse, pharmacist,
          or other appropriate professional.
        </p>
        <p style={{ marginTop: 12 }}>
          <strong>BBT (basal body temperature):</strong> Selene logs and charts BBT readings.
          It does not and cannot be used as contraception on the basis of BBT alone.
          Natural Cycles is the only app with regulatory approval for that claim.
        </p>
      </Section>

      <Section title="9. Third-party services">
        <p>
          Selene uses Google Play (for distribution and purchase verification), RevenueCat (for
          purchase verification), and Sentry (for crash reporting). Your use of those services
          is also subject to their own terms. Details are in our{" "}
          <a href="https://knoodlepotstudio.com/selene/privacy" style={styles.link}>
            Privacy Policy
          </a>.
        </p>
      </Section>

      <Section title="10. Intellectual property">
        <p>
          Selene, including its code, design, text, and visual elements, is owned by Knoodlepot
          Studio (or licensed to us) and protected by copyright and other intellectual property
          laws. Your licence to use the app does not transfer any ownership.
        </p>
      </Section>

      <Section title="11. Availability">
        <p>
          We aim to keep Selene working well but do not guarantee uninterrupted availability.
          We may update, modify, or withdraw features at any time. Because all your data is stored
          on your device and not on our servers, your data is never at risk from changes we make
          to the app.
        </p>
        <p style={{ marginTop: 12 }}>
          If we ever remove the app from the Google Play Store and you have an unexpired purchase,
          you will retain access to any version already installed on your device.
        </p>
      </Section>

      <Section title="12. Disclaimers">
        <p>
          To the maximum extent permitted by law, Selene is provided &quot;as is&quot; without
          warranties of any kind. Nothing in this section limits your rights under the Consumer
          Rights Act 2015.
        </p>
      </Section>

      <Section title="13. Limitation of liability">
        <p>
          Nothing in these Terms excludes or limits our liability for death or personal injury
          caused by negligence, fraud, or any matter that cannot be excluded by law.
        </p>
        <p style={{ marginTop: 12 }}>
          Subject to the above, our total liability to you in any 12-month period is limited to
          the total amount you have paid us for the app in that period (or £100 if you have paid
          nothing).
        </p>
      </Section>

      <Section title="14. Governing law">
        <p>
          These Terms are governed by the laws of England and Wales. Any dispute will be subject
          to the exclusive jurisdiction of the courts of England and Wales, except that if you
          are a consumer resident elsewhere in the UK, you may also bring proceedings in your
          local courts.
        </p>
      </Section>

      <Section title="15. Changes to these Terms">
        <p>
          We may update these Terms from time to time. If a change materially affects your rights
          or how you use the app, we will give you clear notice before it takes effect. The
          &quot;Last updated&quot; date at the top of this page shows when it was last changed.
        </p>
      </Section>

      <Section title="16. Contact">
        <p>
          For any question about these Terms:
        </p>
        <p style={{ marginTop: 12 }}>
          Knoodlepot Studio<br />
          <a href="mailto:knoodlepot@knoodlepotstudio.com" style={styles.link}>
            knoodlepot@knoodlepotstudio.com
          </a>
        </p>
      </Section>
    </TermsPage>
  );
}
