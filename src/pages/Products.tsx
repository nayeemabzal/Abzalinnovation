import type { ReactNode } from "react";
import Link from "../components/site/Link";
import PageShell from "../components/site/PageShell";
import { comingSoonProducts, futureModules, solutions } from "../data/homepageContent";

function SolutionIcon({ icon }: { icon: string }) {
  const icons: Record<string, ReactNode> = {
    bolt: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="white">
        <path d="M13 2L5 13h5l-1 9 10-13h-6l1-7z" />
      </svg>
    ),
    hardhat: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="white">
        <path d="M4.5 12.2l3-4.7h9l3 4.7v5.3h-15v-5.3z" />
        <path d="M8 5.8A4 4 0 0116 5.8v.7H8v-.7z" opacity="0.7" />
      </svg>
    ),
    map: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="white">
        <path d="M12 3.2c4 0 7 3.1 7 7.1 0 4.5-5 9.5-7 10.5-2-1-7-6-7-10.5 0-4 3-7.1 7-7.1z" />
        <circle cx="12" cy="10.5" r="2.6" fill="white" opacity="0.5" />
      </svg>
    ),
  };
  return icons[icon] || icons.bolt;
}

const productDetails: Record<string, { goal: string; audience: string; solves: string }> = {
  volt: {
    goal: "Give electrical contractors a single platform to run their entire business — from estimate to close-out.",
    audience: "Electrical contractors, shops, and service companies",
    solves: "Replaces the stack of spreadsheets, paper forms, and disconnected apps that most electrical contractors use to manage estimates, projects, finances, inspections, and crews.",
  },
  build: {
    goal: "Give builders and renovators full project-centered visibility across budgets, schedules, and field coordination.",
    audience: "General contractors, remodelers, renovators, and flippers",
    solves: "Replaces scattered project tracking, manual budget management, and disconnected field communication with a single platform built for how construction actually works.",
  },
  atlas: {
    goal: "Turn zoning research and land-use review from a manual, scattered process into a structured, code-linked workflow.",
    audience: "Municipal building departments, planning boards, and land-use professionals",
    solves: "Replaces manual zoning lookups, paper-based review processes, and fragmented regulatory data with searchable, structured intelligence that connects directly to municipal code.",
  },
};

export default function Products() {
  return (
    <PageShell
      actions={[
        { label: "Request a Demo", href: "/contact" },
        { label: "About Us", href: "/about", variant: "secondary" },
      ]}
      description="Each Abzal Innovation product is designed for a specific professional audience and operational context. Explore the ecosystem to find the right fit for your team."
      eyebrow="Products"
      title="Purpose-built software for the teams that build everything else."
    >
      {/* Core products — expanded cards */}
      <section>
        <div className="mb-6">
          <div className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-text-muted">
            Core Products
          </div>
          <h2 className="mt-2 text-[1.5rem] font-extrabold tracking-[-0.04em] text-navy">
            Three products, one connected ecosystem.
          </h2>
          <p className="mt-2 max-w-[36rem] text-[0.9rem] leading-7 text-text-secondary">
            Each product serves a distinct audience with focused capabilities. Together, they form an ecosystem that covers contractor operations, construction management, and municipal intelligence.
          </p>
        </div>

        <div className="space-y-4 stagger-children">
          {solutions.map((solution) => {
            const details = productDetails[solution.id];
            return (
              <article
                className="glow-card rounded-xl border border-slate-200/60 bg-white p-5 shadow-card"
                key={solution.id}
              >
                <div className="grid gap-5 lg:grid-cols-[1fr_1.4fr]">
                  {/* Left — identity */}
                  <div>
                    <div className="flex items-center gap-3">
                      <span
                        className="flex h-10 w-10 items-center justify-center rounded-lg"
                        style={{ backgroundColor: solution.accent }}
                      >
                        <SolutionIcon icon={solution.icon} />
                      </span>
                      <div>
                        <h3 className="text-[1.1rem] font-semibold tracking-[-0.02em] text-navy">
                          {solution.name}
                        </h3>
                        <div className="text-[0.76rem] font-medium text-text-muted">{solution.tagline}</div>
                      </div>
                    </div>
                    <p className="mt-3 text-[0.86rem] leading-6 text-text-secondary">
                      {solution.description}
                    </p>
                    <Link
                      className="mt-4 inline-flex items-center gap-1.5 text-[0.84rem] font-semibold text-blue-600 hover:text-blue-700"
                      href={solution.href}
                    >
                      Explore {solution.name} <span aria-hidden="true">→</span>
                    </Link>
                  </div>

                  {/* Right — goal and problem */}
                  <div className="border-t border-slate-100 pt-4 lg:border-t-0 lg:border-l lg:pl-5 lg:pt-0">
                    <div className="space-y-3">
                      <div>
                        <div className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-text-muted">
                          Goal
                        </div>
                        <p className="mt-1 text-[0.88rem] leading-6 text-navy font-medium">
                          {details.goal}
                        </p>
                      </div>
                      <div>
                        <div className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-text-muted">
                          Built for
                        </div>
                        <p className="mt-1 text-[0.86rem] text-text-secondary">
                          {details.audience}
                        </p>
                      </div>
                      <div>
                        <div className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-text-muted">
                          What it replaces
                        </div>
                        <p className="mt-1 text-[0.86rem] leading-6 text-text-secondary">
                          {details.solves}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Coming soon */}
      <section className="rounded-xl border border-slate-200/60 bg-white p-5 shadow-card">
        <div className="mb-4">
          <div className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-text-muted">
            Coming Soon
          </div>
          <h2 className="mt-2 text-[1.3rem] font-extrabold tracking-[-0.04em] text-navy">
            Expanding into more trades.
          </h2>
          <p className="mt-2 max-w-[32rem] text-[0.88rem] leading-6 text-text-secondary">
            The same purpose-built approach, applied to plumbing and HVAC operations. Designed for the specific
            workflows, terminology, and operational patterns of each trade.
          </p>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {comingSoonProducts.map((product) => (
            <div
              className="flex items-center gap-3 rounded-xl border border-slate-200/40 bg-slate-50 px-4 py-3.5"
              key={product.id}
            >
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: product.accent }}
              />
              <div>
                <div className="text-[0.92rem] font-semibold text-navy">{product.name}</div>
                <div className="text-[0.78rem] text-text-muted">{product.tagline}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Future modules */}
      <section className="rounded-xl border border-slate-200/60 bg-white p-5 shadow-card">
        <div className="mb-4">
          <div className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-text-muted">
            Ecosystem Roadmap
          </div>
          <h2 className="mt-2 text-[1.3rem] font-extrabold tracking-[-0.04em] text-navy">
            Planned modules and capabilities.
          </h2>
          <p className="mt-2 max-w-[32rem] text-[0.88rem] leading-6 text-text-secondary">
            Beyond core products, we're building a suite of shared modules that extend across the entire
            ecosystem — from AI-powered assistants to integrated payments and advanced reporting.
          </p>
        </div>

        <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-4">
          {futureModules.map((module) => (
            <div
              className="rounded-xl border border-slate-200/40 bg-slate-50 px-4 py-3"
              key={module.name}
            >
              <div className="text-[0.88rem] font-semibold text-navy">{module.name}</div>
              <div className="mt-1 text-[0.78rem] text-text-muted">{module.description}</div>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
