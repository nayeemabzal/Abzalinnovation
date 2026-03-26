import LegalPageTemplate from "../components/site/LegalPageTemplate";
import { privacySections } from "../data/siteContent";

export default function PrivacyPolicy() {
  return (
    <LegalPageTemplate
      description="Starter privacy policy content for the Abzal Innovation parent website and future software products, covering form submissions, analytics, cookies, login-related information, and demo request data."
      effectiveDate="March 19, 2026"
      eyebrow="Privacy Policy"
      sections={privacySections}
      title="Privacy Policy"
    />
  );
}
