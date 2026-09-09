import { useEffect, useState } from "react";
import About from "./pages/About";
import Atlas from "./pages/Atlas";
import Build from "./pages/Build";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import FlipTracker from "./pages/FlipTracker";
import Home from "./pages/Home";
import EarthTimeMachine from "./pages/EarthTimeMachine";
import NotFound from "./pages/NotFound";
import OneBetter from "./pages/OneBetter";
import OneBetterPrivacy from "./pages/OneBetterPrivacy";
import OneBetterSupport from "./pages/OneBetterSupport";
import OneBetterTerms from "./pages/OneBetterTerms";

import PrivacyPolicy from "./pages/PrivacyPolicy";
import Products from "./pages/Products";
import StudioKids from "./pages/StudioKids";
import TermsOfUse from "./pages/TermsOfUse";
import Volt from "./pages/Volt";
import { getPathname, onRouteChange } from "./router";

function resolveRoute(pathname: string) {
  switch (pathname) {
    case "/":
      return <Home />;
    case "/about":
      return <About />;
    case "/contact":
      return <Contact />;
    case "/products":
      return <Products />;
    case "/faq":
      return <FAQ />;
    case "/privacy-policy":
      return <PrivacyPolicy />;
    case "/terms-of-use":
      return <TermsOfUse />;
    case "/volt":
      return <Volt />;
    case "/atlas":
      return <Atlas />;
    case "/build":
      return <Build />;
    case "/flip-tracker":
    case "/flip":
      return <FlipTracker />;
    case "/earth-time-machine":
      return <EarthTimeMachine />;
    case "/studio-kids":
    case "/abzal-studio-kids":
      return <StudioKids />;
    case "/one-better":
      return <OneBetter />;
    case "/one-better/privacy":
    case "/one-better/privacy-policy":
      return <OneBetterPrivacy />;
    case "/one-better/support":
      return <OneBetterSupport />;
    case "/one-better/terms":
    case "/one-better/terms-of-use":
      return <OneBetterTerms />;
    default:
      return <NotFound />;
  }
}

export default function App() {
  const [pathname, setPathname] = useState(getPathname);

  useEffect(() => onRouteChange(() => setPathname(getPathname())), []);

  return (
    <div className="animate-fade-in" key={pathname}>
      {resolveRoute(pathname)}
    </div>
  );
}
