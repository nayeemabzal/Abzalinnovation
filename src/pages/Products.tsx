import type { ReactNode } from "react";
import GradientHero from "../components/site/GradientHero";
import Link from "../components/site/Link";
import SiteFrame from "../components/site/SiteFrame";
import { comingSoonProducts, futureModules } from "../data/homepageContent";

type Theme = {
  accent: string;
  border: string;
  iconBg: string;
  iconColor: string;
  status: string;
  statusLabel: string;
  button: string;
  link: string;
  note: string;
};

type Product = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  goal: string;
  audience: string;
  solves: string;
  overviewHref: string;
  overviewLabel: string;
  actionHref: string;
  actionLabel: string;
  availabilityNote: string;
  icon: ReactNode;
  theme: Theme;
};

const products: Product[] = [
  {
    id: "volt",
    name: "Abzal Volt",
    tagline: "Electrical Contractor Platform",
    description:
      "The operating platform for electrical contractors. Estimating, project tracking, inspections, crew hours, billing, and closeout in one workspace.",
    goal: "Give electrical contractors a single platform to run their entire business — from estimate to close-out.",
    audience: "Electrical contractors, shops, and service companies",
    solves:
      "Replaces the stack of spreadsheets, paper forms, and disconnected apps that most electrical contractors use to manage estimates, projects, finances, inspections, and crews.",
    overviewHref: "/volt",
    overviewLabel: "See Volt overview",
    actionHref: "https://volt.abzalinnovation.com",
    actionLabel: "Visit Volt",
    availabilityNote: "Live now for electrical contractor operations.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    theme: {
      accent: "text-blue-600",
      border: "border-blue-200",
      iconBg: "bg-blue-50",
      iconColor: "text-blue-500",
      status: "bg-blue-50 text-blue-600",
      statusLabel: "Available Now",
      button:
        "bg-blue-600 text-white hover:-translate-y-px hover:bg-blue-700 hover:shadow-[0_8px_24px_rgba(37,99,235,0.18)]",
      link: "text-blue-600",
      note: "border-blue-100 bg-blue-50 text-blue-700",
    },
  },
  {
    id: "build",
    name: "Abzal Build",
    tagline: "General Construction Management",
    description:
      "Project management for general contractors. Scope tracking, subcontractor coordination, RFIs, submittals, and financial oversight.",
    goal: "Give builders and renovators full project-centered visibility across budgets, schedules, and field coordination.",
    audience: "General contractors, remodelers, renovators, and flippers",
    solves:
      "Replaces scattered project tracking, manual budget management, and disconnected field communication with a single platform built for how construction actually works.",
    overviewHref: "/build",
    overviewLabel: "See Build overview",
    actionHref: "/contact",
    actionLabel: "Join Build waitlist",
    availabilityNote: "Waitlist open now while Build continues development.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20h20M5 20V8l7-5 7 5v12M9 20v-4h6v4" />
      </svg>
    ),
    theme: {
      accent: "text-emerald-600",
      border: "border-emerald-200",
      iconBg: "bg-emerald-50",
      iconColor: "text-emerald-500",
      status: "bg-emerald-50 text-emerald-600",
      statusLabel: "Waitlist Open",
      button:
        "bg-emerald-600 text-white hover:-translate-y-px hover:bg-emerald-700 hover:shadow-[0_8px_24px_rgba(5,150,105,0.18)]",
      link: "text-emerald-600",
      note: "border-emerald-100 bg-emerald-50 text-emerald-700",
    },
  },
  {
    id: "atlas",
    name: "Land Use Atlas",
    tagline: "Municipal Zoning & Land Use Tool",
    description:
      "Interactive zoning visualization for municipalities. Parcel-level data, overlay districts, variance tracking, and public-facing maps.",
    goal: "Turn zoning research and land-use review from a manual, scattered process into a structured, code-linked workflow.",
    audience: "Municipal building departments, planning boards, and land-use professionals",
    solves:
      "Replaces manual zoning lookups, paper-based review processes, and fragmented regulatory data with searchable, structured intelligence that connects directly to municipal code.",
    overviewHref: "/atlas",
    overviewLabel: "See Atlas overview",
    actionHref: "https://atlas.abzalinnovation.com",
    actionLabel: "Visit Atlas",
    availabilityNote: "Live now for the Town of Glenville, NY.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="10" r="3" />
        <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 10-16 0c0 3 2.7 7 8 11.7z" />
      </svg>
    ),
    theme: {
      accent: "text-amber-600",
      border: "border-amber-200",
      iconBg: "bg-amber-50",
      iconColor: "text-amber-500",
      status: "bg-amber-50 text-amber-600",
      statusLabel: "Available Now",
      button:
        "bg-amber-500 text-white hover:-translate-y-px hover:bg-amber-600 hover:shadow-[0_8px_24px_rgba(217,119,6,0.18)]",
      link: "text-amber-600",
      note: "border-amber-100 bg-amber-50 text-amber-700",
    },
  },
];

export default function Products() {
  return (
    <SiteFrame
      hero={
        <GradientHero
          actions={[
            { label: "Visit Volt", href: "https://volt.abzalinnovation.com" },
            { label: "Join Build Waitlist", href: "/contact", variant: "secondary" },
          ]}
          actionsClassName="items-center justify-center"
          contentClassName="mx-auto max-w-[860px] text-center"
          description="Choose the Abzal product that matches your workflow. Volt and Land Use Atlas are live now, and Build is open for early-interest conversations."
          kicker="Products"
          meta={
            <div className="flex flex-wrap items-center justify-center gap-2">
              <Link
                className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-[12px] font-semibold text-blue-700 transition-all hover:-translate-y-px hover:border-blue-300"
                href="https://volt.abzalinnovation.com"
              >
                Live now: Volt
              </Link>
              <Link
                className="inline-flex items-center rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-[12px] font-semibold text-amber-700 transition-all hover:-translate-y-px hover:border-amber-300"
                href="https://atlas.abzalinnovation.com"
              >
                Live now: Atlas
              </Link>
              <Link
                className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-[12px] font-semibold text-emerald-700 transition-all hover:-translate-y-px hover:border-emerald-300"
                href="/contact"
              >
                Waitlist open: Build
              </Link>
            </div>
          }
          metaClassName="mx-auto mt-6 max-w-[720px]"
          title={
            <>
              Choose the{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #0f172a 0%, #2563eb 50%, #0ea5e9 100%)",
                }}
              >
                right starting point.
              </span>
            </>
          }
          titleClassName="text-[48px] leading-[1.06] sm:text-[56px]"
        />
      }
    >
      <div>
        <section className="bg-white px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-[1200px]">
            <div className="mb-10 max-w-[720px]">
              <div className="mb-3 text-[13px] font-bold uppercase tracking-[0.08em] text-blue-600">
                Product Lineup
              </div>
              <h2 className="text-[36px] font-extrabold leading-[1.15] tracking-[-0.025em] text-navy">
                See what each product is built to solve.
              </h2>
              <p className="mt-3 text-[17px] leading-[1.65] text-slate-600">
                Each Abzal product is focused on a specific operational context.
                The goal is not to be everything at once. The goal is to give
                the right team a better operating layer.
              </p>
            </div>

            <div className="space-y-6">
              {products.map((p) => (
                <article
                  key={p.id}
                  className={`overflow-hidden rounded-[20px] border bg-white transition-all duration-300 hover:shadow-[0_12px_36px_rgba(15,23,42,0.08)] ${p.theme.border}`}
                >
                  <div className="grid gap-8 p-8 lg:grid-cols-[1fr_1.4fr] lg:gap-12 lg:p-10">
                    <div>
                      <div className="flex items-start gap-4">
                        <div
                          className={`flex h-14 w-14 flex-none items-center justify-center rounded-[14px] ${p.theme.iconBg} ${p.theme.iconColor}`}
                        >
                          <span className="block h-7 w-7">{p.icon}</span>
                        </div>
                        <div>
                          <h2 className="text-[26px] font-extrabold tracking-[-0.02em] text-navy">
                            {p.name}
                          </h2>
                          <div className={`text-[13px] font-semibold ${p.theme.accent}`}>
                            {p.tagline}
                          </div>
                        </div>
                      </div>
                      <p className="mt-5 text-[15px] leading-[1.65] text-slate-600">
                        {p.description}
                      </p>
                      <div className="mt-5 flex flex-wrap items-center gap-3">
                        <span
                          className={`inline-flex rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.06em] ${p.theme.status}`}
                        >
                          {p.theme.statusLabel}
                        </span>
                        <span
                          className={`inline-flex rounded-full border px-3 py-1 text-[11px] font-semibold ${p.theme.note}`}
                        >
                          {p.availabilityNote}
                        </span>
                      </div>
                      <div className="mt-6 flex flex-wrap items-center gap-3">
                        <Link
                          className={`inline-flex items-center justify-center rounded-[10px] px-5 py-2.5 text-[14px] font-semibold transition-all ${p.theme.button}`}
                          href={p.actionHref}
                        >
                          {p.actionLabel}
                        </Link>
                        <Link
                          className={`inline-flex items-center gap-1.5 text-[14px] font-semibold transition-all hover:gap-2.5 ${p.theme.link}`}
                          href={p.overviewHref}
                        >
                          {p.overviewLabel} <span aria-hidden="true">→</span>
                        </Link>
                      </div>
                    </div>

                    <div className="space-y-5 border-t border-slate-100 pt-6 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
                      <div>
                        <div className="text-[11px] font-bold uppercase tracking-[0.08em] text-slate-400">
                          Goal
                        </div>
                        <p className="mt-2 text-[16px] font-semibold leading-[1.55] text-navy">
                          {p.goal}
                        </p>
                      </div>
                      <div>
                        <div className="text-[11px] font-bold uppercase tracking-[0.08em] text-slate-400">
                          Built for
                        </div>
                        <p className="mt-1.5 text-[14px] leading-[1.6] text-slate-600">
                          {p.audience}
                        </p>
                      </div>
                      <div>
                        <div className="text-[11px] font-bold uppercase tracking-[0.08em] text-slate-400">
                          What it replaces
                        </div>
                        <p className="mt-1.5 text-[14px] leading-[1.6] text-slate-600">
                          {p.solves}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-[1200px]">
            <div className="mb-10 max-w-[720px]">
              <div className="mb-3 text-[13px] font-bold uppercase tracking-[0.08em] text-slate-400">
                Future Trade Expansion
              </div>
              <h2 className="text-[36px] font-extrabold leading-[1.15] tracking-[-0.025em] text-navy">
                More trade-specific products are planned.
              </h2>
              <p className="mt-3 text-[17px] leading-[1.65] text-slate-600">
                These products are part of the longer-term roadmap and are not
                live yet. The same Abzal approach will be applied to additional
                trades as the ecosystem expands.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {comingSoonProducts.map((product) => (
                <div
                  key={product.id}
                  className="rounded-[16px] border border-slate-200 bg-white p-6"
                >
                  <div className="flex items-start gap-4">
                    <span
                      className="mt-1.5 h-3 w-3 flex-none rounded-full"
                      style={{ backgroundColor: product.accent }}
                    />
                    <div>
                      <div className="text-[17px] font-extrabold tracking-[-0.01em] text-navy">
                        {product.name}
                      </div>
                      <div className="text-[13px] font-semibold text-slate-500">
                        {product.tagline}
                      </div>
                      <span className="mt-3 inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.06em] text-slate-500">
                        Planned
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-[1200px]">
            <div className="mb-10 max-w-[720px]">
              <div className="mb-3 text-[13px] font-bold uppercase tracking-[0.08em] text-blue-600">
                Shared Platform Roadmap
              </div>
              <h2 className="text-[36px] font-extrabold leading-[1.15] tracking-[-0.025em] text-navy">
                Modules planned across the ecosystem.
              </h2>
              <p className="mt-3 text-[17px] leading-[1.65] text-slate-600">
                These are shared capabilities planned to support Abzal products
                over time. They are roadmap items, not separate live launches
                today.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {futureModules.map((module) => (
                <div
                  key={module.name}
                  className="rounded-[14px] border border-slate-100 bg-slate-50 p-5"
                >
                  <div className="text-[15px] font-bold text-navy">
                    {module.name}
                  </div>
                  <div className="mt-1.5 text-[13px] leading-[1.5] text-slate-500">
                    {module.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          className="relative overflow-hidden px-6 py-20 lg:px-8"
          style={{
            background:
              "linear-gradient(145deg, #0f172a 0%, #111c34 50%, #172554 100%)",
          }}
        >
          <div
            className="pointer-events-none absolute -right-[100px] -top-[100px] h-[400px] w-[400px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)",
            }}
          />
          <div className="relative mx-auto max-w-[680px] text-center text-white">
            <h2 className="text-[36px] font-extrabold leading-[1.15] tracking-[-0.025em]">
              Need help choosing your starting point?
            </h2>
            <p className="mx-auto mt-4 text-[17px] leading-[1.65] text-slate-400">
              Tell us about your workflow and we'll point you toward Volt,
              Atlas, or the Build waitlist based on what you're actually trying
              to solve.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                className="inline-flex items-center justify-center rounded-[10px] bg-white px-6 py-3 text-[14px] font-semibold text-navy transition-all hover:-translate-y-px hover:bg-slate-50"
                href="https://volt.abzalinnovation.com"
              >
                Visit Volt
              </Link>
              <Link
                className="inline-flex items-center justify-center rounded-[10px] border border-white/20 bg-white/5 px-6 py-3 text-[14px] font-semibold text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10"
                href="https://atlas.abzalinnovation.com"
              >
                Visit Atlas
              </Link>
              <Link
                className="inline-flex items-center justify-center rounded-[10px] bg-blue-600 px-6 py-3 text-[14px] font-semibold text-white transition-all hover:-translate-y-px hover:bg-blue-700"
                href="/contact"
              >
                Contact Abzal
              </Link>
            </div>
          </div>
        </section>
      </div>
    </SiteFrame>
  );
}
