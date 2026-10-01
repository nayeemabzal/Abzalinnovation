import ProductOverview from "../components/product/ProductOverview";

const icon = (d: string) => (
  <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d={d} />
  </svg>
);

export default function Build() {
  return (
    <ProductOverview
      name="Abzal Build"
      tagline="Construction project management in development."
      accent="#059669"
      badgeLabel="Construction Project Management"
      availabilityLabel="In Development"
      availabilityNote="Early-interest conversations are open while Build continues development."
      description="Abzal Build is an upcoming product for builders, renovators, and flippers. It is being shaped around project visibility, budget clarity, scheduling, and field coordination."
      audience="General contractors, remodelers, renovators, flippers, and small builders."
      goal="Shape a project-centered operating layer for builders and renovators before the product opens more broadly."
      solves="Build is aimed at teams that are still coordinating projects, budgets, schedules, documents, and field updates across spreadsheets, messages, and disconnected tools."
      ctaLabel="Ask about Build"
      ctaHref="/contact"
      secondaryCtaLabel="View All Products"
      secondaryCtaHref="/products"
      tertiaryCtaLabel="Contact Abzal"
      tertiaryCtaHref="/contact"
      bottomCtaTitle="Want to stay close to Build?"
      bottomCtaDescription="Discuss your construction workflow with us while the product continues to take shape."
      goalEyebrow="Product Direction"
      solvesEyebrow="Workflow Gaps"
      highlightsEyebrow="Planned Focus Areas"
      highlightsTitle="What Build is being shaped around."
      highlights={[
        {
          title: "Project Visibility",
          description: "Planned around helping teams understand project phase, status, and next steps across active work.",
          icon: icon("M9 2h6l1 3H8l1-3zM7 5h10v15H7z"),
        },
        {
          title: "Budget Clarity",
          description: "Being shaped around clearer budget context so builders can spot pressure earlier in the job.",
          icon: icon("M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H7"),
        },
        {
          title: "Scheduling Direction",
          description: "Planned to support tighter coordination around timelines, dependencies, and field sequencing.",
          icon: icon("M3 6h18v15H3zM16 3v3M8 3v3M3 10h18"),
        },
        {
          title: "Field Coordination",
          description: "Exploring cleaner ways to keep field teams aligned with the current project plan and priorities.",
          icon: icon("M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8z"),
        },
        {
          title: "Plans & Documents",
          description: "Planned around keeping project materials easier to find, reference, and connect to the job.",
          icon: icon("M3 6h7l2-2h9v14H3z"),
        },
        {
          title: "Operational Visibility",
          description: "The intended direction is a clearer view of work, money, and coordination across each project.",
          icon: icon("M18 20V10M12 20V4M6 20v-6"),
        },
      ]}
    />
  );
}
