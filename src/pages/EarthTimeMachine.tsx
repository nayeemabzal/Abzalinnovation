import Link from "../components/site/Link";
import useDocumentMetadata from "../hooks/useDocumentMetadata";
import { earthTimeMachine } from "../data/earthTimeMachineContent";
import "./EarthTimeMachine.css";

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: earthTimeMachine.title,
  description: earthTimeMachine.description,
  url: earthTimeMachine.pageUrl,
  isPartOf: {
    "@type": "WebSite",
    name: "Abzal Innovation",
    url: "https://www.abzalinnovation.com",
  },
};

export default function EarthTimeMachine() {
  // Vercel serves the app directly. This is a usable fallback for local previews
  // or an older SPA page, retaining the entire destination query and fragment.
  const appUrl = earthTimeMachine.appUrl + window.location.search + window.location.hash;

  useDocumentMetadata({
    title: "Earth Time Machine | Abzal Studio Kids",
    description: earthTimeMachine.description,
    url: earthTimeMachine.pageUrl,
    schema: pageSchema,
    schemaId: "earth-time-machine",
  });

  return (
    <div className="earth-page">
      <header className="earth-page-header">
        <div>
          <Link href="/studio-kids" className="earth-parent-link">Abzal Studio Kids</Link>
          <h1>{earthTimeMachine.title}</h1>
        </div>
      </header>
      <main className="earth-fallback">
        <h2>A planet full of stories.</h2>
        <p>Spin Earth, travel through its history, and discover the landscapes and wildlife of Guyana.</p>
        <a className="earth-open-link" href={appUrl}>Open Earth Time Machine ↗</a>
      </main>
    </div>
  );
}
