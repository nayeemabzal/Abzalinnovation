import ProductOverview from "../components/product/ProductOverview";

const icon = (d: string) => (
  <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d={d} />
  </svg>
);

export default function Atlas() {
  return (
    <ProductOverview
      name="Land Use Atlas"
      tagline="Zoning and land-use intelligence, modernized."
      accent="#d97706"
      badgeLabel="Zoning & Municipal Intelligence"
      availabilityLabel="Live Now"
      availabilityNote="Live now for the Town of Glenville, NY."
      description="Research parcels, analyze zoning districts, compare permitted uses, and work through code-linked workflows — built for planners, municipalities, and land professionals."
      audience="Municipal building departments, planning boards, zoning professionals, and land-use consultants."
      goal="Turn zoning research and land-use review from a manual, scattered process into a structured, searchable, code-linked workflow — built by someone who does this work every day."
      solves="Replaces manual zoning lookups, paper-based review processes, and fragmented regulatory data with searchable, structured intelligence that connects directly to municipal code."
      ctaLabel="Open Atlas Site"
      ctaHref="https://atlas.abzalinnovation.com"
      bottomCtaTitle="Ready to explore Land Use Atlas?"
      bottomCtaDescription="Visit the live Atlas site or contact Abzal if you want to talk through a municipal or land-use workflow."
      highlights={[
        {
          title: "Zoning Analysis",
          description: "Review zoning districts, overlay zones, and development standards with structured, searchable data.",
          icon: icon("M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"),
        },
        {
          title: "Parcel Research",
          description: "Look up parcels, view property details, and access parcel-level zoning and land-use context instantly.",
          icon: icon("M21 21l-6-6M10 17a7 7 0 110-14 7 7 0 010 14z"),
        },
        {
          title: "Use Comparison",
          description: "Compare permitted, conditional, and prohibited uses across zones and districts side-by-side.",
          icon: icon("M12 3v18M3 3h18v18H3z"),
        },
        {
          title: "District Analysis",
          description: "Explore district-level summaries, development patterns, and regulatory context for any jurisdiction.",
          icon: icon("M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z"),
        },
        {
          title: "Code-Linked Workflows",
          description: "Tie research directly to municipal code references so decisions are grounded in actual regulations.",
          icon: icon("M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"),
        },
        {
          title: "Land Use Review",
          description: "Run structured reviews that connect parcel data, zoning context, and code requirements into one workflow.",
          icon: icon("M9 2h6l1 3H8l1-3zM7 5h10v15H7z"),
        },
      ]}
    />
  );
}
