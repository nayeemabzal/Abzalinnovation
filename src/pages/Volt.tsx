import ProductOverview from "../components/product/ProductOverview";

const icon = (d: string) => (
  <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d={d} />
  </svg>
);

export default function Volt() {
  return (
    <ProductOverview
      name="Abzal Volt"
      tagline="The operating platform for electrical contractors."
      accent="#2d8cff"
      badgeLabel="Electrical Contractor Platform"
      description="Manage estimates, projects, finances, inspections, documents, and your team — all from one platform designed for how electrical work actually runs."
      audience="Electrical contractors, shops, and service companies of all sizes."
      goal="Give electrical contractors a single platform to manage estimates, projects, finances, inspections, and crews — so they can run their entire business from one place instead of five disconnected tools."
      solves="Replaces the stack of spreadsheets, paper forms, and disconnected apps that most electrical contractors use to manage estimates, projects, finances, inspections, and crews."
      ctaLabel="Explore Volt"
      ctaHref="https://sparktrack-pro-ui.vercel.app/"
      highlights={[
        {
          title: "Estimates & Proposals",
          description: "Build detailed electrical estimates, generate professional proposals, and convert to active projects.",
          icon: icon("M4 4h16v16H4zM8 8h8M8 12h4M8 16h6"),
        },
        {
          title: "Project Management",
          description: "Track every job from bid to close-out with scheduling, milestones, and real-time status visibility.",
          icon: icon("M9 2h6l1 3H8l1-3zM7 5h10v15H7z"),
        },
        {
          title: "Financial Tracking",
          description: "Monitor job costs, margins, invoicing, and cash flow across your entire book of business.",
          icon: icon("M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H7"),
        },
        {
          title: "Inspections & Compliance",
          description: "Schedule and track inspections, manage compliance requirements, and maintain audit-ready records.",
          icon: icon("M12 3l8 4.5V12c0 4.2-3.1 7.7-8 9-4.9-1.3-8-4.8-8-9V7.5L12 3zM9 12l2 2 4-4"),
        },
        {
          title: "Document Management",
          description: "Organize permits, plans, contracts, and change orders — attached to the right project, always accessible.",
          icon: icon("M3 6h7l2-2h9v14H3z"),
        },
        {
          title: "Team & Scheduling",
          description: "Manage crews, assign work, coordinate field schedules, and keep everyone aligned on what matters.",
          icon: icon("M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8z"),
        },
      ]}
    />
  );
}
