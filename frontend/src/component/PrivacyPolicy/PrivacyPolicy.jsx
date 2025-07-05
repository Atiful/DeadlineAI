// components/PrivacyPolicy.jsx
import styles from './PrivacyPolicy.module.css';

const PrivacyPolicy = () => {
  return (
    <div className={styles.container}>
      <h1>Privacy Policy</h1>
      <p>Last updated: July 5, 2025</p>

      <p>
        DeadlineAI respects your privacy. This Privacy Policy explains how we collect, use, and protect your information when you use our application.
      </p>

      <h2>Information We Collect</h2>
      <ul>
        <li>Your Google email address</li>
        <li>Your name and profile picture from your Google account</li>
        <li>Google Calendar events (only those created by our app)</li>

      </ul>

      <h2>How We Use Your Information</h2>
      <p>
        We use your information to:
      </p>
      <ul>
        <li>Identify you and personalize your experience on DeadlineAI</li>
        <li>Display your name and profile photo within the app</li>
        <li>Create and delete Google Calendar events related to your tracked deadlines</li>
      </ul>

      <h2>Permissions</h2>
      <p>
        We only access the Google Calendar events that our app creates. We do not read, edit, or delete events outside those managed by DeadlineAI.
      </p>

      <h2>Data Security</h2>
      <p>We take all necessary steps to protect your data and never share it with third parties.</p>

      <h2>Changes</h2>
      <p>
        We may update this Privacy Policy. Any changes will be posted here with an updated date.
      </p>

      <p>Contact us at <strong>mdatifulhaque26@gmail.com</strong> if you have questions.</p>
    </div>
  );
};

export default PrivacyPolicy;
