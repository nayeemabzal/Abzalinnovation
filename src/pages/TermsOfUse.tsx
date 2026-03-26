import LegalPageTemplate from "../components/site/LegalPageTemplate";
import { termsSections } from "../data/siteContent";

export default function TermsOfUse() {
  return (
    <LegalPageTemplate
      description="Starter Terms of Use language for the Abzal Innovation website and future products, with placeholder sections that should be reviewed and finalized before launch."
      effectiveDate="March 19, 2026"
      eyebrow="Terms of Use"
      sections={termsSections}
      title="Terms of Use"
    />
  );
}
