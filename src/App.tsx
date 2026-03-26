import { useEffect, useState } from "react";
import About from "./pages/About";
import Atlas from "./pages/Atlas";
import Build from "./pages/Build";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

import PrivacyPolicy from "./pages/PrivacyPolicy";
import Products from "./pages/Products";
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
