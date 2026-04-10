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
      tagline="Project management built for builders."
      accent="#059669"
      badgeLabel="Construction Project Management"
      description="Track projects, manage budgets, coordinate teams, and maintain full visibility across every job — designed for builders, renovators, and flippers."
      audience="General contractors, remodelers, renovators, flippers, and small builders."
      goal="Give builders and renovators full project-centered visibility across budgets, schedules, and field coordination — purpose-built for how construction actually works."
      solves="Replaces scattered project tracking, manual budget management, and disconnected field communication with a single platform built for how construction actually works."
      ctaLabel="Join Build Waitlist"
      ctaHref="/contact"
      highlights={[
        {
          title: "Project Tracking",
          description: "Manage every project with milestones, phase tracking, and real-time status updates across your portfolio.",
          icon: icon("M9 2h6l1 3H8l1-3zM7 5h10v15H7z"),
        },
        {
          title: "Budget Management",
          description: "Set budgets, track actuals, monitor overruns, and keep every dollar accountable at the project level.",
          icon: icon("M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H7"),
        },
        {
          title: "Scheduling & Timelines",
          description: "Plan work sequences, manage dependencies, and keep trades and milestones aligned across the build.",
          icon: icon("M3 6h18v15H3zM16 3v3M8 3v3M3 10h18"),
        },
        {
          title: "Field Coordination",
          description: "Connect field teams to project plans with updates, assignments, and daily progress tracking.",
          icon: icon("M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8z"),
        },
        {
          title: "Plans & Documents",
          description: "Centralize blueprints, permits, contracts, and change orders — organized by project, always current.",
          icon: icon("M3 6h7l2-2h9v14H3z"),
        },
        {
          title: "Operational Visibility",
          description: "See the state of every job, every budget, and every team at a glance — no digging through spreadsheets.",
          icon: icon("M18 20V10M12 20V4M6 20v-6"),
        },
      ]}
    />
  );
}
