import LegalPageTemplate from "../components/site/LegalPageTemplate";
import { oneBetterTermsSections } from "../data/oneBetterContent";
import useDocumentMetadata from "../hooks/useDocumentMetadata";

const title = "One Better Terms of Use - Abzal Innovation";
const description =
  "Terms governing use of the One Better mobile app from Abzal Innovation.";
const url = "https://www.abzalinnovation.com/one-better/terms";

export default function OneBetterTerms() {
  useDocumentMetadata({
    title,
    description,
    url,
    schemaId: "one-better-terms",
    schema: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "One Better Terms of Use",
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
      contactDescription="For questions about these terms or the One Better app, email the One Better support team."
      contactHref="mailto:hello@abzalinnovation.com?subject=One%20Better%20terms"
      contactLabel="Email One Better"
      description={description}
      effectiveDate="August 10, 2026"
      eyebrow="One Better"
      sections={oneBetterTermsSections}
      title="Terms of Use"
    />
  );
}
