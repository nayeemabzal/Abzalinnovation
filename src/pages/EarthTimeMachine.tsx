import { useState } from "react";
import Link from "../components/site/Link";
import useDocumentMetadata from "../hooks/useDocumentMetadata";
import { earthDestinations, earthTimeMachine, getEarthDestination } from "../data/earthTimeMachineContent";
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
  const [destination, setDestination] = useState(() =>
    getEarthDestination(new URLSearchParams(window.location.search).get("place")),
  );
  const appUrl = earthTimeMachine.appUrl + destination.query;

  useDocumentMetadata({
    title: "Earth Time Machine | Abzal Studio Kids",
    description: earthTimeMachine.description,
    url: earthTimeMachine.pageUrl,
    schema: pageSchema,
    schemaId: "earth-time-machine",
  });

  function selectDestination(id: string) {
    const next = getEarthDestination(id);
    setDestination(next);
    const url = new URL(window.location.href);
    url.searchParams.set("place", next.id);
    window.history.replaceState(window.history.state, "", url.pathname + url.search + url.hash);
  }

  return (
    <div className="earth-page">
      <a className="earth-skip" href="#earth-explorer">Skip to the explorer</a>
      <header className="earth-page-header">
        <div>
          <Link href="/studio-kids" className="earth-parent-link">Abzal Studio Kids</Link>
          <h1>{earthTimeMachine.title}</h1>
        </div>
        <a className="earth-open-link" href={appUrl} target="_blank" rel="noopener noreferrer">
          Open on its own ↗
        </a>
      </header>
      <nav className="earth-destinations" aria-label="Choose a starting place">
        <span>Explore today</span>
        {earthDestinations.map((place) => (
          <button
            key={place.id}
            type="button"
            aria-pressed={destination.id === place.id}
            onClick={() => selectDestination(place.id)}
          >
            {place.label}
          </button>
        ))}
      </nav>
      <main className="earth-explorer" id="earth-explorer" tabIndex={-1}>
        <iframe
          key={destination.id}
          src={appUrl}
          title={earthTimeMachine.title + " — " + destination.label}
          allow="fullscreen"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </main>
      <footer className="earth-page-footer">
        <span>Drag to explore. Pinch to zoom.</span>
        <a href={appUrl} target="_blank" rel="noopener noreferrer">Having trouble? Open the explorer directly ↗</a>
      </footer>
    </div>
  );
}
