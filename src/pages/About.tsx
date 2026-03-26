import Link from "../components/site/Link";
import PageShell from "../components/site/PageShell";

const companyGoals = [
  {
    title: "Build the operating layer for trade professionals",
    description:
      "Contractors, builders, and field teams run the physical economy but are forced to manage operations with fragmented, outdated tools. Abzal Innovation is building the software layer that gives them real visibility, structure, and control over their work.",
  },
  {
    title: "Modernize municipal workflows with intelligence tools",
    description:
      "Zoning, land use, and code enforcement are still largely paper-based and manual. We're building tools that make regulatory data searchable, structured, and actionable — so municipalities can operate faster and more transparently.",
  },
  {
    title: "Create a connected ecosystem, not isolated point solutions",
    description:
      "Each Abzal product focuses on a specific audience, but they share architecture, design patterns, and a long-term strategy. As the ecosystem grows, the products become more valuable together — not just individually.",
  },
];

const productGoals = [
  {
    name: "Abzal Volt",
    accent: "#2d8cff",
    goal: "Give electrical contractors a single platform to manage estimates, projects, finances, inspections, and crews — so they can run their entire business from one place instead of five disconnected tools.",
    audience: "Electrical contractors, shops, and service companies",
    href: "/volt",
  },
  {
    name: "Abzal Build",
    accent: "#ff7e34",
    goal: "Give builders, renovators, and flippers a project-centered platform for budgets, scheduling, documents, and field coordination — purpose-built for how construction actually works.",
    audience: "General contractors, remodelers, renovators, and flippers",
    href: "/build",
  },
  {
    name: "Land Use Atlas",
    accent: "#1cbe94",
    goal: "Turn zoning research and land-use review from a scattered, manual process into a structured, searchable, code-linked workflow — built by someone who does this work every day.",
    audience: "Municipal building departments, planning boards, and land-use professionals",
    href: "/atlas",
  },
];

const missionVision = [
  {
    title: "Mission",
    description:
      "Build practical, premium software that improves execution, visibility, and decision-making for the teams doing real operational work — contractors, builders, and municipal professionals.",
  },
  {
    title: "Vision",
    description:
      "A connected ecosystem where contractor operations, construction management, and land-use intelligence tools support the full reality of how projects move — from permit to close-out.",
  },
  {
    title: "Operating Principle",
    description:
      "Stay grounded in real workflows. Build for clarity and execution. Keep each product focused on its audience while strengthening the portfolio as a whole. Never ship something that looks unfinished.",
  },
];

const whyWeBuiltIt = [
  {
    title: "The tools are outdated",
    description:
      "Most software in contracting and municipal operations was built a decade ago with generic frameworks. It shows. The interfaces are clunky, the workflows are rigid, and the experience doesn't match the quality of work these professionals deliver.",
  },
  {
    title: "Real work is fragmented",
    description:
      "A single project can touch estimates, permits, schedules, inspections, invoices, and close-out — but contractors manage each piece in a different tool, spreadsheet, or folder. That fragmentation creates risk, wastes time, and hides problems until it's too late.",
  },
  {
    title: "Nobody builds for these users specifically",
    description:
      "Enterprise platforms are bloated and expensive. Generic project management tools don't understand trade workflows. Small shops and municipal teams get the worst of both worlds: overpaying for software that doesn't fit. We're building the alternative.",
  },
];

export default function About() {
  return (
    <PageShell
      actions={[
        { label: "View Products", href: "/products" },
        { label: "Contact Us", href: "/contact", variant: "secondary" },
      ]}
      description="Abzal Innovation builds purpose-built software for electrical contractors, construction teams, and municipal land-use professionals. Here's who we are, why we exist, and what we're building toward."
      eyebrow="About"
      title="Software built for the teams that build everything else."
    >
      {/* Founder */}
      <section className="rounded-xl border border-slate-200/60 bg-white p-6 shadow-card">
        <div className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-text-muted">The Founder</div>
        <h2 className="mt-2 text-[1.4rem] font-extrabold tracking-[-0.04em] text-navy">
          Built by someone who does the work.
        </h2>
        <div className="mt-5 grid gap-6 lg:grid-cols-2">
          <div className="space-y-3 text-[0.9rem] leading-7 text-text-secondary">
            <p>
              Abzal Innovation was founded by Nayeem Abzal — a Master Electrician, Building Inspector
              for the Town of Glenville, and software engineer. That combination of field expertise
              and technical ability is rare, and it's the reason these products exist.
            </p>
            <p>
              Nayeem has spent years running electrical jobs, managing inspections, interpreting zoning
              codes, and dealing firsthand with the operational gaps that slow down contractors and
              municipalities. Instead of waiting for someone else to fix it, he started building.
            </p>
          </div>
          <div className="space-y-3 text-[0.9rem] leading-7 text-text-secondary">
            <p>
              Every product in the Abzal ecosystem is shaped by direct experience — not by abstract
              market research or feature-list benchmarking. When Volt handles inspections, it reflects
              how inspections actually work. When Atlas links to municipal code, it's because the
              founder reads that code for a living.
            </p>
            <p>
              The goal isn't to build another generic SaaS platform. It's to build software that's as
              serious, capable, and premium as the professionals who use it — and to prove that tools
              for contractors and municipalities can look and work as well as anything in tech.
            </p>
          </div>
        </div>
      </section>

      {/* Company goals */}
      <section>
        <div className="mb-6">
          <div className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-text-muted">Company Goals</div>
          <h2 className="mt-2 text-[1.4rem] font-extrabold tracking-[-0.04em] text-navy">
            What Abzal Innovation is working toward.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3 stagger-children">
          {companyGoals.map((goal) => (
            <article className="glow-card rounded-xl border border-slate-200/60 bg-white p-5 shadow-card" key={goal.title}>
              <h3 className="text-[0.96rem] font-semibold tracking-[-0.02em] text-navy leading-snug">{goal.title}</h3>
              <p className="mt-2.5 text-[0.84rem] leading-6 text-text-secondary">{goal.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Product goals */}
      <section>
        <div className="mb-6">
          <div className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-text-muted">Product Goals</div>
          <h2 className="mt-2 text-[1.4rem] font-extrabold tracking-[-0.04em] text-navy">
            What each product is designed to accomplish.
          </h2>
        </div>

        <div className="space-y-4 stagger-children">
          {productGoals.map((product) => (
            <article
              className="glow-card rounded-xl border border-slate-200/60 bg-white p-5 shadow-card"
              key={product.name}
            >
              <div className="flex items-start gap-4">
                <span
                  className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-[0.76rem] font-extrabold text-white"
                  style={{ backgroundColor: product.accent }}
                >
                  {product.name.charAt(product.name.lastIndexOf(" ") + 1)}
                </span>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-[1.05rem] font-semibold tracking-[-0.02em] text-navy">
                      {product.name}
                    </h3>
                    <Link
                      className="hidden sm:inline-flex items-center gap-1 text-[0.82rem] font-semibold text-blue-600 hover:text-blue-700 shrink-0"
                      href={product.href}
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                  <div className="mt-0.5 text-[0.78rem] font-medium text-text-muted">
                    {product.audience}
                  </div>
                  <p className="mt-2.5 text-[0.88rem] leading-7 text-text-secondary">
                    {product.goal}
                  </p>
                  <Link
                    className="mt-3 inline-flex sm:hidden items-center gap-1 text-[0.82rem] font-semibold text-blue-600 hover:text-blue-700"
                    href={product.href}
                  >
                    Learn more <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Why we built it */}
      <section>
        <div className="mb-6">
          <div className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-text-muted">Why We Built It</div>
          <h2 className="mt-2 text-[1.4rem] font-extrabold tracking-[-0.04em] text-navy">
            The problems we're here to solve.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3 stagger-children">
          {whyWeBuiltIt.map((item) => (
            <article className="glow-card rounded-xl border border-slate-200/60 bg-white p-5 shadow-card" key={item.title}>
              <h3 className="text-[0.96rem] font-semibold tracking-[-0.02em] text-navy">{item.title}</h3>
              <p className="mt-2.5 text-[0.84rem] leading-6 text-text-secondary">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Mission & vision */}
      <section>
        <div className="mb-6">
          <div className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-text-muted">Mission & Vision</div>
          <h2 className="mt-2 text-[1.4rem] font-extrabold tracking-[-0.04em] text-navy">
            Where we're headed and how we operate.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3 stagger-children">
          {missionVision.map((item) => (
            <article className="glow-card rounded-xl border border-slate-200/60 bg-white p-5 shadow-card" key={item.title}>
              <h3 className="text-[0.98rem] font-semibold tracking-[-0.02em] text-navy">{item.title}</h3>
              <p className="mt-2.5 text-[0.86rem] leading-6 text-text-secondary">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="overflow-hidden rounded-2xl bg-navy relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_0%_0%,rgba(59,130,246,0.2),transparent)]" />
        <div className="relative px-8 py-10 sm:px-10 lg:px-12 lg:py-12 z-[2]">
          <div className="max-w-[32rem]">
            <h2 className="text-[1.6rem] font-extrabold leading-[1.1] tracking-[-0.04em] text-white sm:text-[1.85rem]">
              Explore the ecosystem or start a conversation.
            </h2>
            <p className="mt-4 text-[0.92rem] leading-7 text-white/60">
              See the products, request a walkthrough, or reach out to learn how Abzal Innovation fits your team.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-[0.88rem] font-semibold text-navy shadow-sm" href="/products">
                View Products
              </Link>
              <Link className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/8 px-6 py-3 text-[0.88rem] font-semibold text-white hover:bg-white/12" href="/contact">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
