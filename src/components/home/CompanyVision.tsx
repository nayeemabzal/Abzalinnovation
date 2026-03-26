import Link from "../site/Link";

const pillars = [
  {
    number: "01",
    title: "Replace fragmented tools with unified platforms",
    description:
      "Contractors and municipal teams shouldn't need five disconnected apps to manage one project. Each Abzal product consolidates the workflows that matter into a single, purpose-built platform.",
  },
  {
    number: "02",
    title: "Build software from real operational experience",
    description:
      "Our products are shaped by direct experience in the field — not by abstract software categories. Every feature reflects how work actually runs on a jobsite, in a building department, or across a crew.",
  },
  {
    number: "03",
    title: "Create an ecosystem that grows with the industry",
    description:
      "Abzal Innovation isn't a single product — it's a connected family of tools. As we expand into new trades and new modules, everything shares a common architecture and design language.",
  },
];

export default function CompanyVision() {
  return (
    <section className="px-6 py-14 sm:px-8 lg:px-8 lg:py-20" id="vision">
      <div className="mx-auto max-w-[1120px]">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-14 items-start">
          {/* Left — narrative */}
          <div>
            <div className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-text-muted">
              Our Vision
            </div>
            <h2 className="mt-2 text-[1.6rem] font-extrabold leading-[1.12] tracking-[-0.04em] text-navy sm:text-[1.8rem]">
              Give every contractor and municipality the same operational power as a large enterprise.
            </h2>
            <p className="mt-4 text-[0.92rem] leading-7 text-text-secondary">
              The teams that build our infrastructure, wire our buildings, and manage our land use
              deserve software that's as serious as the work they do. Today, most of them run on
              spreadsheets, paper, and disconnected tools that weren't built for their workflows.
            </p>
            <p className="mt-3 text-[0.92rem] leading-7 text-text-secondary">
              We're changing that. Abzal Innovation is building a portfolio of modern, premium
              software products — each one purpose-built for a specific professional audience,
              but all connected under one ecosystem with a shared commitment to clarity, speed,
              and operational visibility.
            </p>
            <Link
              className="mt-6 inline-flex items-center gap-1.5 text-[0.86rem] font-semibold text-blue-600 hover:text-blue-700"
              href="/about"
            >
              Learn more about Abzal Innovation <span aria-hidden="true">→</span>
            </Link>
          </div>

          {/* Right — pillars */}
          <div className="space-y-4 stagger-children">
            {pillars.map((pillar) => (
              <article
                className="glow-card rounded-xl border border-slate-200/60 bg-white p-5 shadow-card"
                key={pillar.number}
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-[0.78rem] font-extrabold text-blue-600">
                    {pillar.number}
                  </span>
                  <div>
                    <h3 className="text-[0.96rem] font-semibold tracking-[-0.02em] text-navy">
                      {pillar.title}
                    </h3>
                    <p className="mt-1.5 text-[0.84rem] leading-6 text-text-secondary">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
