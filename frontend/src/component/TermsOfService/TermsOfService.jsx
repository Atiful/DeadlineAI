// components/TermsOfService.jsx
import styles from './TermsOfService.module.css';

const TermsOfService = () => {
  return (
    <div className={styles.container}>
      <h1>Terms of Service</h1>
      <p>Effective Date: July 5, 2025</p>

      <h2>1. Acceptance of Terms</h2>
      <p>By using DeadlineAI, you agree to these Terms of Service and our Privacy Policy.</p>

      <h2>2. Use of the Service</h2>
      <p>
        You may use the app only for lawful purposes. We reserve the right to suspend or terminate accounts that violate our terms.
      </p>

      <h2>3. Permissions and Access</h2>
      <p>
        By signing in with Google, you grant DeadlineAI access to your Google profile information (name, email, and profile picture , Gender) and allow the app to create and delete Google Calendar events that it manages.
      </p>

      <h2>4. User Responsibilities</h2>
      <ul>
        <li>Do not share your credentials</li>
        <li>Ensure authorized access when using third-party services</li>
      </ul>

      <h2>5. Limitation of Liability</h2>
      <p>
        We are not liable for any losses or damages resulting from your use of DeadlineAI.
      </p>

      <h2>6. Modifications</h2>
      <p>
        We may update these Terms from time to time and will notify you when modified.
      </p>

      <p>If you have questions, contact us at <strong>mdatifulhaque26@gmail.com</strong>.</p>
    </div>
  );
};

export default TermsOfService;
