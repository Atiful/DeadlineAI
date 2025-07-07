import styles from './TermsOfService.module.css';

const TermsOfService = () => {
  return (
    <div className={styles.container}>
      <h1>Terms of Service</h1>
      <p>Effective Date: July 5, 2025</p>

      <h2>1. Acceptance of Terms</h2>
      <p>
        By using DeadlineAI, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree, please do not use the app.
      </p>

      <h2>2. Account Access and Google Permissions</h2>
      <p>
        DeadlineAI uses Google Sign-In to authenticate users. By signing in, you grant DeadlineAI access to your basic Google profile information, including your name, email address, profile picture, and gender (which we do not use or store).
      </p>
      <p>
        You also grant DeadlineAI permission to access your Google Calendar for the sole purpose of creating and deleting events that are managed by the app. We do not access, modify, or delete any other calendar events not created through DeadlineAI.
      </p>

      <h2>3. Use of the Service</h2>
      <p>
        You agree to use DeadlineAI only for lawful purposes and in compliance with all applicable laws and regulations. We reserve the right to suspend or terminate accounts that violate these terms or misuse the app.
      </p>

      <h2>4. Use of AI</h2>
      <p>
        DeadlineAI uses AI and machine learning features to analyze text or images that you manually submit. This data is used to suggest or describe deadlines more effectively. We do not apply AI to any data retrieved from Google services.
      </p>

      <h2>5. User Responsibilities</h2>
      <ul>
        <li>Do not share your login credentials with others.</li>
        <li>Ensure you are authorized to use third-party services connected to the app.</li>
      </ul>

      <h2>6. Limitation of Liability</h2>
      <p>
        To the fullest extent permitted by law, DeadlineAI is provided "as is" and we are not liable for any direct, indirect, incidental, or consequential damages arising from your use of the app.
      </p>

      <h2>7. Modifications</h2>
      <p>
        We may update these Terms of Service at any time. If changes are significant, we will notify users through the app or website. Continued use of the app after any changes means you accept the updated Terms.
      </p>

      <h2>8. Termination</h2>
      <p>
        We reserve the right to suspend or terminate your access to DeadlineAI at any time for violating these Terms or applicable laws.
      </p>

      <h2>9. Governing Law</h2>
      <p>
        These Terms shall be governed by and interpreted in accordance with the laws of India, without regard to conflict of law principles.
      </p>

      <h2>10. Contact Information</h2>
      <p>
        If you have any questions or concerns about these Terms of Service, please contact us at: <strong>mdatifulhaque26@gmail.com</strong>
      </p>
    </div>
  );
};

export default TermsOfService;
