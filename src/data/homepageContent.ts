export type SolutionId = "volt" | "build" | "atlas";

export type Solution = {
  id: SolutionId;
  name: string;
  tagline: string;
  description: string;
  accent: string;
  href: string;
  ctaLabel: string;
  icon: "bolt" | "hardhat" | "map";
};

export type ComingSoonProduct = {
  id: string;
  name: string;
  tagline: string;
  accent: string;
};

export type FutureModule = {
  name: string;
  description: string;
};

export type TrustMark = {
  name: string;
  descriptor: string;
  accent: string;
};

export type VoltFeature = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export const heroContent = {
  title: "Software built for the teams that build everything else.",
  description:
    "Abzal Innovation delivers purpose-built tools for electrical contractors, construction teams, and municipal land-use professionals.",
  primaryCta: {
    label: "Explore Products",
    href: "/products",
  },
  secondaryCta: {
    label: "Request a Demo",
    href: "/contact",
  },
};

export const solutions: Solution[] = [
  {
    id: "volt",
    name: "Abzal Volt",
    tagline: "Electrical contractor operations",
    description:
      "Estimates, projects, financial tracking, inspections, and team management — built for electrical contractors who need full operational visibility.",
    accent: "#2d8cff",
    href: "/volt",
    ctaLabel: "Learn more",
    icon: "bolt",
  },
  {
    id: "build",
    name: "Abzal Build",
    tagline: "Construction project management",
    description:
      "Project tracking, budgets, scheduling, and field coordination for builders, renovators, and flippers who need tighter control over every job.",
    accent: "#ff7e34",
    href: "/build",
    ctaLabel: "Learn more",
    icon: "hardhat",
  },
  {
    id: "atlas",
    name: "Land Use Atlas",
    tagline: "Zoning & municipal intelligence",
    description:
      "Zoning analysis, parcel research, district comparison, and code-linked workflows for planners, municipalities, and land-use professionals.",
    accent: "#1cbe94",
    href: "/atlas",
    ctaLabel: "Learn more",
    icon: "map",
  },
];

export const comingSoonProducts: ComingSoonProduct[] = [
  {
    id: "flow",
    name: "Abzal Flow",
    tagline: "Plumbing operations and dispatch",
    accent: "#3ba4ff",
  },
  {
    id: "air",
    name: "Abzal Air",
    tagline: "HVAC service and project coordination",
    accent: "#276fda",
  },
];

export const futureModules: FutureModule[] = [
  { name: "AI Assistant", description: "Contextual AI across every workflow" },
  { name: "Professional Estimator", description: "Advanced estimating engine" },
  { name: "Receipt & Expense AI", description: "Automated expense capture" },
  { name: "Financial Intelligence", description: "Advanced reporting and analytics" },
  { name: "Daily Briefings", description: "Morning operational summaries" },
  { name: "QuickBooks Sync", description: "Two-way accounting integration" },
  { name: "Payments", description: "Integrated invoicing and collection" },
  { name: "Automation Pro", description: "Custom workflow automation" },
];

export const whyPoints = [
  {
    title: "Purpose-built, not generic",
    description:
      "Each product is designed for a specific operational context — not adapted from a one-size-fits-all platform.",
  },
  {
    title: "Connected ecosystem",
    description:
      "Shared architecture means your tools work together as your business grows, without switching platforms.",
  },
  {
    title: "Built for real workflows",
    description:
      "Shaped by the way contractors, builders, and municipal teams actually work — not by abstract software categories.",
  },
];

export const trustMarks: TrustMark[] = [
  {
    name: "TriTech Electrical",
    descriptor: "Electrical operations",
    accent: "#2d8cff",
  },
  {
    name: "ProBuild Solutions",
    descriptor: "Regional construction",
    accent: "#ff7e34",
  },
  {
    name: "City of Glenville",
    descriptor: "Municipal planning",
    accent: "#1cbe94",
  },
  {
    name: "Meridian Builders",
    descriptor: "Residential development",
    accent: "#ff7e34",
  },
];

export const ctaContent = {
  title: "Ready to see what purpose-built software looks like?",
  description:
    "Explore the products, request a walkthrough, or start a conversation about how Abzal Innovation fits your team.",
  primaryCta: {
    label: "Request a Demo",
    href: "/contact",
  },
  secondaryCta: {
    label: "View All Products",
    href: "/products",
  },
};

// --- Volt page content ---

export const voltHeroContent = {
  title: "The operating platform for electrical contractors",
  description:
    "Manage estimates, projects, finances, inspections, documents, and your team — all from one platform designed for how electrical work actually runs.",
  primaryCta: {
    label: "Request a Demo",
    href: "/contact",
  },
  secondaryCta: {
    label: "View All Products",
    href: "/products",
  },
};

export const voltFeatures: VoltFeature[] = [
  {
    id: "estimates",
    title: "Estimates & Proposals",
    description: "Build detailed electrical estimates, generate professional proposals, and convert to active projects.",
    icon: "calculator",
  },
  {
    id: "projects",
    title: "Project Management",
    description: "Track every job from bid to close-out with scheduling, milestones, and real-time status visibility.",
    icon: "clipboard",
  },
  {
    id: "finances",
    title: "Financial Tracking",
    description: "Monitor job costs, margins, invoicing, and cash flow across your entire book of business.",
    icon: "dollar",
  },
  {
    id: "inspections",
    title: "Inspections & Compliance",
    description: "Schedule and track inspections, manage compliance requirements, and maintain audit-ready records.",
    icon: "check-shield",
  },
  {
    id: "documents",
    title: "Document Management",
    description: "Organize permits, plans, contracts, and change orders — attached to the right project, always accessible.",
    icon: "folder",
  },
  {
    id: "team",
    title: "Team & Scheduling",
    description: "Manage crews, assign work, coordinate field schedules, and keep everyone aligned on what matters.",
    icon: "users",
  },
];

export const voltWhyPoints = [
  {
    title: "Built for electrical contractors",
    description: "Not a generic tool adapted for your trade. Volt is designed from the ground up for how electrical businesses operate.",
  },
  {
    title: "Full operational visibility",
    description: "See the real state of every estimate, project, inspection, and dollar — in one place, in real time.",
  },
  {
    title: "From bid to close-out",
    description: "Manage the full lifecycle of your work without bouncing between disconnected tools and spreadsheets.",
  },
];

// --- Atlas page content ---

export const atlasHeroContent = {
  title: "Zoning and land-use intelligence, modernized",
  description:
    "Research parcels, analyze zoning districts, compare permitted uses, and work through code-linked workflows — built for planners, municipalities, and land professionals.",
  primaryCta: {
    label: "Request a Demo",
    href: "/contact",
  },
  secondaryCta: {
    label: "View All Products",
    href: "/products",
  },
};

export const atlasFeatures: VoltFeature[] = [
  {
    id: "zoning",
    title: "Zoning Analysis",
    description: "Review zoning districts, overlay zones, and development standards with structured, searchable data.",
    icon: "layers",
  },
  {
    id: "parcels",
    title: "Parcel Research",
    description: "Look up parcels, view property details, and access parcel-level zoning and land-use context instantly.",
    icon: "search",
  },
  {
    id: "compare",
    title: "Use Comparison",
    description: "Compare permitted, conditional, and prohibited uses across zones and districts side-by-side.",
    icon: "columns",
  },
  {
    id: "districts",
    title: "District Analysis",
    description: "Explore district-level summaries, development patterns, and regulatory context for any jurisdiction.",
    icon: "grid",
  },
  {
    id: "code",
    title: "Code-Linked Workflows",
    description: "Tie research directly to municipal code references so decisions are grounded in actual regulations.",
    icon: "link",
  },
  {
    id: "review",
    title: "Land Use Review",
    description: "Run structured reviews that connect parcel data, zoning context, and code requirements into one workflow.",
    icon: "clipboard",
  },
];

export const atlasWhyPoints = [
  {
    title: "Designed for municipal workflows",
    description: "Not a GIS viewer with extra features bolted on. Atlas is built around how planning and zoning teams actually work.",
  },
  {
    title: "Code-connected intelligence",
    description: "Every analysis links back to actual municipal code — so research stays grounded in real regulatory context.",
  },
  {
    title: "Faster, more structured decisions",
    description: "Replace manual look-ups and scattered documents with a connected workflow that accelerates review cycles.",
  },
];

// --- Build page content ---

export const buildHeroContent = {
  title: "Project management built for builders",
  description:
    "Track projects, manage budgets, coordinate teams, and maintain full visibility across every job — designed for builders, renovators, and flippers.",
  primaryCta: {
    label: "Request a Demo",
    href: "/contact",
  },
  secondaryCta: {
    label: "View All Products",
    href: "/products",
  },
};

export const buildFeatures: VoltFeature[] = [
  {
    id: "projects",
    title: "Project Tracking",
    description: "Manage every project with milestones, phase tracking, and real-time status updates across your portfolio.",
    icon: "clipboard",
  },
  {
    id: "budgets",
    title: "Budget Management",
    description: "Set budgets, track actuals, monitor overruns, and keep every dollar accountable at the project level.",
    icon: "dollar",
  },
  {
    id: "scheduling",
    title: "Scheduling & Timelines",
    description: "Plan work sequences, manage dependencies, and keep trades and milestones aligned across the build.",
    icon: "calendar",
  },
  {
    id: "field",
    title: "Field Coordination",
    description: "Connect field teams to project plans with updates, assignments, and daily progress tracking.",
    icon: "users",
  },
  {
    id: "documents",
    title: "Plans & Documents",
    description: "Centralize blueprints, permits, contracts, and change orders — organized by project, always current.",
    icon: "folder",
  },
  {
    id: "visibility",
    title: "Operational Visibility",
    description: "See the state of every job, every budget, and every team at a glance — no digging through spreadsheets.",
    icon: "chart",
  },
];

export const buildWhyPoints = [
  {
    title: "Built for construction, not adapted",
    description: "Purpose-built for the way builders, renovators, and flippers actually manage projects — not repurposed from another industry.",
  },
  {
    title: "Project-centered workflow",
    description: "Everything revolves around the project: budgets, schedules, documents, and team coordination in one place.",
  },
  {
    title: "From start to finish",
    description: "Manage the entire lifecycle — from initial planning through daily execution to final close-out and handoff.",
  },
];

// --- Pricing data (reserved for dedicated product sites) ---
// Pricing tiers live on the individual product landing pages, not the umbrella site.
// Keeping the data here as a shared reference for when product sites are built.

export type PricingTier = {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number | null;
  annualPrice: number | null;
  highlighted?: boolean;
  badge?: string;
  ctaLabel: string;
  ctaHref: string;
  features: string[];
};

export type PricingProduct = {
  id: SolutionId;
  name: string;
  tagline: string;
  accent: string;
  tiers: PricingTier[];
};

export const pricingProducts: PricingProduct[] = [
  {
    id: "volt",
    name: "Abzal Volt",
    tagline: "Electrical contractor operations",
    accent: "#2d8cff",
    tiers: [
      {
        id: "volt-starter",
        name: "Starter",
        description: "For solo electricians and small crews getting organized.",
        monthlyPrice: 49,
        annualPrice: 39,
        ctaLabel: "Start Free Trial",
        ctaHref: "/contact",
        features: [
          "Up to 3 users",
          "Estimates & proposals",
          "Basic project tracking",
          "Client management",
          "Document storage (5 GB)",
          "Mobile access",
        ],
      },
      {
        id: "volt-professional",
        name: "Professional",
        description: "For growing shops that need full operational visibility.",
        monthlyPrice: 129,
        annualPrice: 99,
        highlighted: true,
        badge: "Most popular",
        ctaLabel: "Start Free Trial",
        ctaHref: "/contact",
        features: [
          "Up to 15 users",
          "Everything in Starter",
          "Financial tracking & margins",
          "Inspection management",
          "Team scheduling & dispatch",
          "Custom templates",
          "Document storage (25 GB)",
          "Priority support",
        ],
      },
      {
        id: "volt-enterprise",
        name: "Enterprise",
        description: "For multi-crew operations with advanced needs.",
        monthlyPrice: null,
        annualPrice: null,
        ctaLabel: "Contact Sales",
        ctaHref: "/contact",
        features: [
          "Unlimited users",
          "Everything in Professional",
          "Advanced reporting & analytics",
          "Role-based permissions",
          "API access",
          "QuickBooks integration",
          "Dedicated account manager",
          "Custom onboarding",
          "SLA & uptime guarantee",
        ],
      },
    ],
  },
  {
    id: "build",
    name: "Abzal Build",
    tagline: "Construction project management",
    accent: "#ff7e34",
    tiers: [
      {
        id: "build-starter",
        name: "Starter",
        description: "For independent builders and small renovation crews.",
        monthlyPrice: 49,
        annualPrice: 39,
        ctaLabel: "Start Free Trial",
        ctaHref: "/contact",
        features: [
          "Up to 3 users",
          "Project tracking",
          "Basic budgeting",
          "Document management",
          "Client portal",
          "Mobile access",
        ],
      },
      {
        id: "build-professional",
        name: "Professional",
        description: "For builders managing multiple active projects.",
        monthlyPrice: 129,
        annualPrice: 99,
        highlighted: true,
        badge: "Most popular",
        ctaLabel: "Start Free Trial",
        ctaHref: "/contact",
        features: [
          "Up to 15 users",
          "Everything in Starter",
          "Advanced budgeting & cost tracking",
          "Scheduling & timelines",
          "Subcontractor coordination",
          "Change order management",
          "Storage (25 GB)",
          "Priority support",
        ],
      },
      {
        id: "build-enterprise",
        name: "Enterprise",
        description: "For general contractors running high-volume operations.",
        monthlyPrice: null,
        annualPrice: null,
        ctaLabel: "Contact Sales",
        ctaHref: "/contact",
        features: [
          "Unlimited users",
          "Everything in Professional",
          "Multi-project dashboards",
          "Advanced reporting",
          "Role-based permissions",
          "API access",
          "Dedicated account manager",
          "Custom onboarding",
        ],
      },
    ],
  },
  {
    id: "atlas",
    name: "Land Use Atlas",
    tagline: "Zoning & municipal intelligence",
    accent: "#1cbe94",
    tiers: [
      {
        id: "atlas-professional",
        name: "Professional",
        description: "For planners and land-use professionals.",
        monthlyPrice: 79,
        annualPrice: 59,
        ctaLabel: "Start Free Trial",
        ctaHref: "/contact",
        features: [
          "Up to 5 users",
          "Zoning analysis & lookup",
          "Parcel research",
          "District comparison",
          "Use permission tables",
          "Code-linked references",
          "PDF report export",
        ],
      },
      {
        id: "atlas-municipal",
        name: "Municipal",
        description: "For building departments and planning boards.",
        monthlyPrice: null,
        annualPrice: null,
        highlighted: true,
        badge: "For municipalities",
        ctaLabel: "Contact Sales",
        ctaHref: "/contact",
        features: [
          "Unlimited users",
          "Everything in Professional",
          "Multi-jurisdiction support",
          "Custom zoning data import",
          "Public-facing lookup portal",
          "Workflow automation",
          "Integration support",
          "Dedicated onboarding",
          "SLA & uptime guarantee",
        ],
      },
    ],
  },
];

export const pricingFaqs = [
  {
    question: "Can I try before I commit?",
    answer: "Yes. Every product includes a 14-day free trial with full access to all features in your selected plan. No credit card required to start.",
  },
  {
    question: "What happens when my trial ends?",
    answer: "You'll be prompted to choose a plan. Your data is preserved for 30 days after the trial ends, so there's no rush.",
  },
  {
    question: "Can I switch plans later?",
    answer: "Absolutely. You can upgrade, downgrade, or switch billing cycles at any time. Changes take effect on your next billing date.",
  },
  {
    question: "Is there a discount for annual billing?",
    answer: "Yes. Annual plans save roughly 20% compared to monthly billing across all products.",
  },
  {
    question: "Do you offer discounts for municipalities or government agencies?",
    answer: "Yes. We offer special pricing for municipal departments and government agencies. Contact our sales team to discuss your needs.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards and ACH bank transfer for annual plans. Enterprise customers can pay by invoice.",
  },
];
