import { DeleteAccountPage, Section, styles } from "@/components/DeleteAccountPage";

export const metadata = { title: "Delete Your Account — Veracitor" };

export default function VeracitorDeleteAccount() {
  return (
    <DeleteAccountPage appName="Veracitor">
      <div style={styles.callout}>
        <strong>The quickest way to delete your account is from within the app.</strong><br />
        Go to <strong>Settings → Delete Account</strong>. Your account and all associated data will be permanently deleted within 30 days.
      </div>

      <Section title="If you no longer have the app">
        <p>You can also request deletion by email. Send a message to <a href="mailto:knoodlepot@knoodlepotstudio.com" style={styles.link}>knoodlepot@knoodlepotstudio.com</a> from the email address registered to your account, with the subject line <strong>Account Deletion Request — Veracitor</strong>. We will action it within 30 days.</p>
        <a href="mailto:knoodlepot@knoodlepotstudio.com?subject=Account%20Deletion%20Request%20%E2%80%94%20Veracitor" style={styles.emailBtn}>Email us to request deletion</a>
      </Section>

      <Section title="What gets deleted">
        <p>When your account is deleted, the following data is permanently removed:</p>
        <ul style={styles.list}>
          <li>Your email address and account credentials</li>
          <li>Your fact-check history and saved verdicts</li>
          <li>Your subscription status (managed by Google Play — see below)</li>
        </ul>
        <p>Subscription management is handled by Google Play. Deleting your account does not automatically cancel an active subscription — you should cancel through the Google Play Store before requesting deletion.</p>
      </Section>

      <Section title="Retention period">
        <p>Account deletion is processed within 30 days of the request. Some data may be retained for a short additional period in encrypted backups before being permanently purged.</p>
      </Section>
    </DeleteAccountPage>
  );
}
