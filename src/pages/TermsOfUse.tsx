import LegalPageTemplate from "../components/site/LegalPageTemplate";
import { termsSections } from "../data/siteContent";

export default function TermsOfUse() {
  return (
    <LegalPageTemplate
      description="Terms covering use of the Abzal Innovation website, product information, and any related digital services made available through the company."
      effectiveDate="March 19, 2026"
      eyebrow="Terms of Use"
      sections={termsSections}
      title="Terms of Use"
    />
  );
}
