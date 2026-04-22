import CtaBand from "../components/home/CtaBand";
import Hero from "../components/home/Hero";
import ProofBand from "../components/home/ProofBand";
import ProductGrid from "../components/home/ProductGrid";
import QuickLookStrip from "../components/home/QuickLookStrip";
import UpcomingGrid from "../components/home/UpcomingGrid";
import SiteFrame from "../components/site/SiteFrame";

export default function Home() {
  return (
    <SiteFrame hero={<Hero />}>
      <div className="relative">
        <ProductGrid />
        <QuickLookStrip />
        <ProofBand />
        <UpcomingGrid />
        <CtaBand />
      </div>
    </SiteFrame>
  );
}
