import styles from './PrivacyPolicy.module.css';

const PrivacyPolicy = () => {
  return (
    <div className={styles.container}>
      <h1>Privacy Policy</h1>
      <p>Last updated: July 5, 2025</p>

      <p>
        DeadlineAI respects your privacy. This Privacy Policy explains how we collect, use, store, and protect your information when you use our application.
      </p>

      <h2>Information We Collect</h2>
      <ul>
        <li>Your Google email address</li>
        <li>Your name and profile picture from your Google account</li>
        <li>Google Calendar events (only those created by our app)</li>
        <li>Gender from your Google profile (we do not use or store this data)</li>
        <li>Any event title, description, date/time, or image you manually enter in the app</li>
      </ul>

      <h2>How We Use Your Information</h2>
      <ul>
        <li>To identify and authenticate you in the app</li>
        <li>To display your name and profile photo within the app</li>
        <li>To create and delete Google Calendar events related to your tracked deadlines</li>
        <li>To improve user experience and auto-suggest tasks using AI on your manually entered data</li>
      </ul>

      <h2>Use of AI and Machine Learning</h2>
      <p>
        Our AI/ML models are used strictly to analyze the text or images that <strong>you manually provide</strong> in the DeadlineAI app.
        This may include identifying the topic of a deadline or generating suggestions based on input.
      </p>
      <p>
        We do <strong>not</strong> process any data from your Google account (such as Gmail, Drive, Docs, or Photos). AI is only applied to user-submitted data entered into the app interface.
      </p>

      <h2>Permissions</h2>
      <p>
        DeadlineAI only accesses Google Calendar data that is specifically created by our app. We do not read, modify, or delete any other calendar events outside the scope of our app.
      </p>

      <h2>Data Retention and Deletion</h2>
      <p>
        We only store the event data that you manually enter through the DeadlineAI interface. This data is used to generate calendar events via the Google Calendar API.
      </p>
      <p>
        We do not store or fetch any other Google user data beyond what is needed to support these calendar operations.
      </p>
      <p>
        If you would like to delete your data, please contact us at <strong>mdatifulhaque26@gmail.com</strong>. We will delete all relevant stored data within 72 hours of receiving your request.
      </p>

    <h2>Google API Data Use Disclosure</h2>
<p>Our app DeadlineAI accesses certain user data from Google Workspace APIs (such as Calendar API) to provide core features like event tracking and scheduling reminders.</p>
<p>We do <strong>NOT</strong> use any user data to develop, improve, or train generalized AI or machine learning models.</p>
<p>We only extract the relevant information necessary to serve user-facing features, such as reading calendar events for deadline management or inserting reminder events.</p>
<p>All data usage complies with the <a href="https://developers.google.com/workspace/workspace-api-user-data-developer-policy" target="_blank" className={styles.atag}> Workspace API user data and developer policy</a>, including the <a className={styles.atag} href="https://developers.google.com/workspace/workspace-api-user-data-developer-policy#limited-use" target="_blank">Limited use of user data requirement</a>.</p>


      <h2>Data Security</h2>
      <p>
        We implement appropriate technical and organizational measures to protect your data from unauthorized access, alteration, disclosure, or destruction. Your data is not shared with any third parties.
      </p>

      <h2>Your Rights</h2>
      <p>
        You have certain rights regarding your personal information. Depending on your location and applicable laws, you may have the right to:
      </p>
      <ul>
        <li>Access the personal data we have collected about you</li>
        <li>Request correction of any inaccurate or incomplete data</li>
        <li>Request deletion of your personal data</li>
        <li>Withdraw your consent for data processing, where applicable</li>
      </ul>
      <p>
        If you would like to exercise any of these rights, please contact us at <strong>mdatifulhaque26@gmail.com</strong>. We will respond within a reasonable timeframe, typically within 72 hours.
      </p>

      <h2>Changes to This Privacy Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. If significant changes are made, we will notify you by posting a notice in our app or on our website.
      </p>
      <p>
        We encourage you to review this policy periodically to stay informed about how we are protecting your information.
      </p>

      <h2>Contact Information</h2>
      <p>
        If you have any questions or concerns about this Privacy Policy or how your data is handled, please contact us at:  
        <strong>mdatifulhaque26@gmail.com</strong>
      </p>
    </div>
  );
};

export default PrivacyPolicy;
