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
};

type Product = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  goal: string;
  audience: string;
  solves: string;
  href: string;
  linkLabel: string;
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
    href: "/volt",
    linkLabel: "Explore Volt",
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
    href: "/build",
    linkLabel: "View Build Preview",
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
    href: "/atlas",
    linkLabel: "Explore Atlas",
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
    },
  },
];

export default function Products() {
  return (
    <SiteFrame
      hero={
        <GradientHero
          description="Each Abzal Innovation product is purpose-built for a specific professional audience and operational context. Volt and Land Use Atlas are live now, while Build is opening soon."
          kicker="Products"
          title={
            <>
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #0f172a 0%, #2563eb 50%, #0ea5e9 100%)",
                }}
              >
                Three products.
              </span>{" "}
              One connected ecosystem.
            </>
          }
          titleClassName="text-[48px] leading-[1.06] sm:text-[56px]"
        />
      }
    >
      <div>
        {/* Expanded product cards */}
        <section className="bg-white px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-[1200px] space-y-6">
            {products.map((p) => (
              <article
                key={p.id}
                className={`overflow-hidden rounded-[20px] border bg-white transition-all duration-300 hover:shadow-[0_12px_36px_rgba(15,23,42,0.08)] ${p.theme.border}`}
              >
                <div className="grid gap-8 p-8 lg:grid-cols-[1fr_1.4fr] lg:gap-12 lg:p-10">
                  {/* Identity */}
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
                    <span
                      className={`mt-5 inline-flex rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.06em] ${p.theme.status}`}
                    >
                      {p.theme.statusLabel}
                    </span>
                    <div className="mt-6">
                      <Link
                        className={`inline-flex items-center gap-1.5 text-[14px] font-semibold transition-all hover:gap-2.5 ${p.theme.accent}`}
                        href={p.href}
                      >
                        {p.linkLabel} <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </div>

                  {/* Goal + details */}
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
        </section>

        {/* Coming soon */}
        <section className="bg-slate-50 px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-[1200px]">
            <div className="mb-10 max-w-[640px]">
              <div className="mb-3 text-[13px] font-bold uppercase tracking-[0.08em] text-slate-400">
                Expanding
              </div>
              <h2 className="text-[36px] font-extrabold leading-[1.15] tracking-[-0.025em] text-navy">
                More trades, more tools.
              </h2>
              <p className="mt-3 text-[17px] leading-[1.65] text-slate-600">
                The same purpose-built approach, applied to plumbing and
                HVAC operations. Built for the specific workflows, terminology,
                and operational patterns of each trade.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {comingSoonProducts.map((product) => (
                <div
                  key={product.id}
                  className="flex items-start gap-4 rounded-[16px] border border-slate-200 bg-white p-6"
                >
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
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Future modules */}
        <section className="bg-white px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-[1200px]">
            <div className="mb-10 max-w-[640px]">
              <div className="mb-3 text-[13px] font-bold uppercase tracking-[0.08em] text-blue-600">
                Ecosystem Roadmap
              </div>
              <h2 className="text-[36px] font-extrabold leading-[1.15] tracking-[-0.025em] text-navy">
                Planned modules and capabilities.
              </h2>
              <p className="mt-3 text-[17px] leading-[1.65] text-slate-600">
                Beyond core products, we're building a suite of shared
                modules that extend across the entire ecosystem — from
                AI-powered assistants to integrated payments and advanced
                reporting.
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

        {/* CTA */}
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
          <div className="relative mx-auto max-w-[620px] text-center text-white">
            <h2 className="text-[36px] font-extrabold leading-[1.15] tracking-[-0.025em]">
              Not sure which product fits?
            </h2>
            <p className="mx-auto mt-4 text-[17px] leading-[1.65] text-slate-400">
              We'll walk you through the ecosystem and help you pick the
              right starting point for your team.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                className="inline-flex items-center justify-center rounded-[10px] bg-white px-6 py-3 text-[14px] font-semibold text-navy transition-all hover:-translate-y-px hover:bg-slate-50"
                href="/contact"
              >
                Request a Demo
              </Link>
              <Link
                className="inline-flex items-center justify-center rounded-[10px] border border-white/20 bg-white/5 px-6 py-3 text-[14px] font-semibold text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10"
                href="/about"
              >
                About Abzal
              </Link>
            </div>
          </div>
        </section>
      </div>
    </SiteFrame>
  );
}
