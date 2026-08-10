import LegalPageTemplate from "../components/site/LegalPageTemplate";
import { oneBetterPrivacySections } from "../data/oneBetterContent";
import useDocumentMetadata from "../hooks/useDocumentMetadata";

const title = "One Better Privacy Policy - Abzal Innovation";
const description =
  "Privacy policy for the One Better mobile app, including local data storage, app updates, notifications, feedback, and deletion.";
const url = "https://www.abzalinnovation.com/one-better/privacy";

export default function OneBetterPrivacy() {
  useDocumentMetadata({
    title,
    description,
    url,
    schemaId: "one-better-privacy",
    schema: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "One Better Privacy Policy",
      url,
      description,
      isPartOf: {
        "@type": "WebSite",
        name: "Abzal Innovation",
        url: "https://www.abzalinnovation.com",
      },
    },
  });

  return (
    <LegalPageTemplate
      actions={[
        { label: "One Better home", href: "/one-better" },
        { label: "App support", href: "/one-better/support", variant: "secondary" },
      ]}
      contactDescription="For questions about One Better privacy or local app data, email the One Better support team."
      contactHref="mailto:hello@abzalinnovation.com?subject=One%20Better%20privacy"
      contactLabel="Email One Better"
      description={description}
      effectiveDate="August 10, 2026"
      eyebrow="One Better"
      sections={oneBetterPrivacySections}
      title="Privacy Policy"
    />
  );
}
