import Capabilities from "../components/home/Capabilities";
import CompanyVision from "../components/home/CompanyVision";
import CtaBand from "../components/home/CtaBand";
import Hero from "../components/home/Hero";
import ProductGrid from "../components/home/ProductGrid";
import TrustStrip from "../components/home/TrustStrip";
import Footer from "../components/site/Footer";
import Header from "../components/site/Header";

export default function Home() {
  return (
    <div className="overflow-hidden bg-white text-text-primary">
      {/* Hero band — mesh gradient instead of flat solid */}
      <div className="relative hero-mesh-blue grain-overlay overflow-hidden">
        <Header />
        <Hero />
        {/* Bottom fade into white */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-[2]" />
      </div>

      <main className="relative" id="main-content">
        <ProductGrid />
        <Capabilities />
        <CompanyVision />
        <TrustStrip />
        <CtaBand />
      </main>

      <Footer />
    </div>
  );
}
