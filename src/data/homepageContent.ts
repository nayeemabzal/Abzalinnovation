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
    tagline: "Construction management in development",
    description:
      "An upcoming product being shaped around project visibility, budget clarity, scheduling, and field coordination for builders, renovators, and flippers.",
    accent: "#059669",
    href: "/build",
    ctaLabel: "Ask about Build",
    icon: "hardhat",
  },
  {
    id: "atlas",
    name: "Land Use Atlas",
    tagline: "Zoning & municipal intelligence",
    description:
      "Zoning analysis, parcel research, district comparison, and code-linked workflows for planners, municipalities, and land-use professionals.",
    accent: "#d97706",
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
    title: "Focused, separate products",
    description:
      "Each product has its own workspace and access. Choose the tool that fits your work and explore it on its dedicated site.",
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
    accent: "#059669",
  },
  {
    name: "Town of Glenville",
    descriptor: "Municipal planning",
    accent: "#d97706",
  },
  {
    name: "Meridian Builders",
    descriptor: "Residential development",
    accent: "#059669",
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
    description: "Explore district-level summaries, development patterns, and regulatory context for supported jurisdictions.",
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
  title: "Project management in development for builders",
  description:
    "Abzal Build is an upcoming product being shaped around project visibility, budget clarity, scheduling, and field coordination for builders, renovators, and flippers.",
  primaryCta: {
    label: "Ask about Build",
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
    title: "Project Visibility",
    description: "Planned around helping teams understand project phase, status, and next steps across active work.",
    icon: "clipboard",
  },
  {
    id: "budgets",
    title: "Budget Clarity",
    description: "Being shaped around clearer budget context so builders can spot pressure earlier in the job.",
    icon: "dollar",
  },
  {
    id: "scheduling",
    title: "Scheduling Direction",
    description: "Planned to support tighter coordination around timelines, dependencies, and field sequencing.",
    icon: "calendar",
  },
  {
    id: "field",
    title: "Field Coordination",
    description: "Exploring cleaner ways to keep field teams aligned with the current project plan and priorities.",
    icon: "users",
  },
  {
    id: "documents",
    title: "Plans & Documents",
    description: "Planned around keeping project materials easier to find, reference, and connect to the job.",
    icon: "folder",
  },
  {
    id: "visibility",
    title: "Operational Visibility",
    description: "The intended direction is a clearer view of work, money, and coordination across each project.",
    icon: "chart",
  },
];

export const buildWhyPoints = [
  {
    title: "Shaped for construction workflows",
    description: "Build is being developed around the way builders, renovators, and flippers actually manage projects.",
  },
  {
    title: "Project-centered direction",
    description: "The product direction centers on budgets, schedules, documents, and team coordination around each project.",
  },
  {
    title: "Early conversations open",
    description: "Early conversations are open for construction teams that want to stay close while Build continues development.",
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
    tagline: "Construction management in development",
    accent: "#059669",
    tiers: [
      {
        id: "build-waitlist",
        name: "Waitlist",
        description: "For builders and construction teams that want to stay close while Build is in development.",
        monthlyPrice: null,
        annualPrice: null,
        ctaLabel: "Ask about Build",
        ctaHref: "/contact",
        features: [
          "Early-interest conversation",
          "Workflow fit discussion",
          "Product direction updates",
          "Waitlist placement",
        ],
      },
    ],
  },
  {
    id: "atlas",
    name: "Land Use Atlas",
    tagline: "Zoning & municipal intelligence",
    accent: "#d97706",
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
    answer: "Demo and trial availability can vary by product. Contact the Abzal team to confirm the right next step for Volt, Atlas, or plans for Build.",
  },
  {
    question: "What happens when my trial ends?",
    answer: "If a trial applies to your product, the Abzal team will explain the next steps before you begin so there are no surprises.",
  },
  {
    question: "Can I switch plans later?",
    answer: "Absolutely. You can upgrade, downgrade, or switch billing cycles at any time. Changes take effect on your next billing date.",
  },
  {
    question: "Is there a discount for annual billing?",
    answer: "Annual billing options may be available for live products. Contact sales to confirm current pricing and billing terms.",
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
