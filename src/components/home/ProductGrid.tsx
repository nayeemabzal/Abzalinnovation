import type { ReactNode } from "react";
import Link from "../site/Link";

type Theme = {
  border: string;
  iconBg: string;
  iconColor: string;
  tagline: string;
  statusBg: string;
  statusColor: string;
  linkColor: string;
};

const themes: Record<string, Theme> = {
  volt: {
    border: "border-blue-200",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-500",
    tagline: "text-blue-600",
    statusBg: "bg-blue-50",
    statusColor: "text-blue-600",
    linkColor: "text-blue-600",
  },
  build: {
    border: "border-emerald-200",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-500",
    tagline: "text-emerald-600",
    statusBg: "bg-emerald-50",
    statusColor: "text-emerald-600",
    linkColor: "text-emerald-600",
  },
  atlas: {
    border: "border-amber-200",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-500",
    tagline: "text-amber-600",
    statusBg: "bg-amber-50",
    statusColor: "text-amber-600",
    linkColor: "text-amber-600",
  },
};

type Product = {
  id: "volt" | "build" | "atlas";
  name: string;
  tagline: string;
  description: string;
  status: string;
  price: string;
  linkLabel: string;
  linkHref: string;
  icon: ReactNode;
};

const products: Product[] = [
  {
    id: "volt",
    name: "Abzal Volt",
    tagline: "Electrical Contractor Platform",
    description:
      "The operating platform for electrical contractors. Estimating, project tracking, inspections, crew hours, billing, and closeout in one workspace.",
    status: "Available Now",
    price: "Starting at $79/mo",
    linkLabel: "Visit Volt",
    linkHref: "https://volt.abzalinnovation.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    id: "build",
    name: "Abzal Build",
    tagline: "General Construction Management",
    description:
      "Project management for general contractors. Scope tracking, subcontractor coordination, RFIs, submittals, and financial oversight.",
    status: "Waitlist Open",
    price: "Request early access",
    linkLabel: "Join Waitlist",
    linkHref: "/contact",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20h20M5 20V8l7-5 7 5v12M9 20v-4h6v4" />
      </svg>
    ),
  },
  {
    id: "atlas",
    name: "Land Use Atlas",
    tagline: "Municipal Zoning & Land Use Tool",
    description:
      "Interactive zoning visualization for municipalities. Parcel-level data, overlay districts, variance tracking, and public-facing maps.",
    status: "Available Now",
    price: "Live for the Town of Glenville, NY",
    linkLabel: "Visit Atlas",
    linkHref: "https://atlas.abzalinnovation.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="10" r="3" />
        <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 10-16 0c0 3 2.7 7 8 11.7z" />
      </svg>
    ),
  },
];

export default function ProductGrid() {
  return (
    <section className="bg-white px-6 py-20 lg:px-8" id="products">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-12 max-w-[640px]">
          <div className="mb-3 text-[13px] font-bold uppercase tracking-[0.08em] text-blue-600">
            Our Products
          </div>
          <h2 className="text-[36px] font-extrabold leading-[1.15] tracking-[-0.025em] text-navy">
            Three products. One mission.
          </h2>
          <p className="mt-3 text-[17px] leading-[1.65] text-slate-600">
            Each product targets a specific vertical in the built environment
            with domain-specific workflows that generic software can't match.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => {
            const theme = themes[p.id];
            return (
              <article
                key={p.id}
                className={`group flex flex-col overflow-hidden rounded-[20px] border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(15,23,42,0.08)] ${theme.border}`}
              >
                <div className="px-7 pb-5 pt-8">
                  <div
                    className={`mb-4 flex h-12 w-12 items-center justify-center rounded-[14px] ${theme.iconBg} ${theme.iconColor}`}
                  >
                    <span className="block h-6 w-6">{p.icon}</span>
                  </div>
                  <h3 className="text-[22px] font-extrabold tracking-[-0.02em] text-navy">
                    {p.name}
                  </h3>
                  <div className={`mb-3 text-[13px] font-semibold ${theme.tagline}`}>
                    {p.tagline}
                  </div>
                  <p className="mb-5 text-[14px] leading-[1.6] text-slate-600">
                    {p.description}
                  </p>
                  <span
                    className={`inline-flex rounded-full px-[10px] py-1 text-[10px] font-bold uppercase tracking-[0.06em] ${theme.statusBg} ${theme.statusColor}`}
                  >
                    {p.status}
                  </span>
                </div>
                <div className="mt-auto flex items-center justify-between border-t border-slate-100 px-7 py-5">
                  <span className="text-[13px] text-slate-500">{p.price}</span>
                  <Link
                    className={`inline-flex items-center gap-1 text-[13px] font-semibold transition-all group-hover:gap-2 ${theme.linkColor}`}
                    href={p.linkHref}
                  >
                    {p.linkLabel} <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
