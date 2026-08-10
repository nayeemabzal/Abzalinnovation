export const flipTrackerMeta = {
  title: "Abzal Flip Tracker - House Flip Project Tracker",
  description:
    "Abzal Flip Tracker is a mobile-first tracker for house-flip projects, expenses, acquisition costs, receipts, calendars, documents, and portfolio performance.",
  url: "https://www.abzalinnovation.com/flip-tracker",
};

export const flipTrackerAssets = {
  logo: "/product-previews/flip-tracker-logo.svg",
  appIcon: "/product-previews/flip-tracker-app-icon.svg",
  dashboard: "/product-previews/flip-tracker-dashboard.svg",
};

export const flipTrackerHero = {
  eyebrow: "Focused App",
  title: "Track every flip from acquisition to sale.",
  description:
    "Abzal Flip Tracker is a mobile-first app for house-flip projects, built to replace scattered spreadsheets with one workflow for purchase costs, budgets, expenses, receipts, events, documents, and portfolio performance.",
  primaryCta: {
    label: "Request Access",
    href: "/contact",
  },
  secondaryCta: {
    label: "View Products",
    href: "/products",
  },
};

export const flipTrackerStatus = [
  {
    value: "Local mode works",
    label: "Runs without Supabase",
  },
  {
    value: "Supabase-ready",
    label: "Cloud rollout pending",
  },
  {
    value: "Mobile-first",
    label: "Capacitor-ready direction",
  },
];

export const flipTrackerHighlights = [
  {
    title: "Project financials",
    description:
      "Track purchase price, acquisition basis, rehab spend, holding costs, sale proceeds, profit, ROI, and cash tied up across active flips.",
    tone: "blue",
  },
  {
    title: "Acquisition review",
    description:
      "Upload or manually enter closing documents, review extracted line items, and approve acquisition costs before they enter the ledger.",
    tone: "amber",
  },
  {
    title: "Expenses and receipts",
    description:
      "Log expenses, categorize spend, attach receipts, flag missing documentation, and export clean CSV data for future Abzal Build import workflows.",
    tone: "emerald",
  },
  {
    title: "Calendar and documents",
    description:
      "Keep inspections, site visits, permits, contractor meetings, closing dates, and project documents connected to the right flip.",
    tone: "slate",
  },
];

export const flipTrackerWorkflow = [
  "Create a project and enter the acquisition baseline",
  "Review closing costs before they affect cost basis",
  "Track rehab, holding, and selling expenses with receipts",
  "Record sale details and watch portfolio ROI update",
];

export const flipTrackerReadiness = [
  {
    title: "Working now",
    items: [
      "Local browser mode with IndexedDB storage",
      "Projects, expenses, budgets, calendar, documents, and portfolio pages",
      "CSV exports for projects, expenses, and portfolio summaries",
    ],
  },
  {
    title: "Before public cloud launch",
    items: [
      "Provision live Supabase project and storage",
      "Finish mobile Budget and Portfolio card layouts",
      "Improve acquisition draft resume and document preview polish",
    ],
  },
];
