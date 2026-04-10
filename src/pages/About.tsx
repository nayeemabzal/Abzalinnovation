import Footer from "../components/site/Footer";
import Header from "../components/site/Header";
import Link from "../components/site/Link";

const companyGoals = [
  {
    title: "Build the operating layer for trade professionals",
    description:
      "Contractors, builders, and field teams run the physical economy but are forced to manage operations with fragmented, outdated tools. Abzal Innovation is building the software layer that gives them real visibility, structure, and control.",
  },
  {
    title: "Modernize municipal workflows with intelligence tools",
    description:
      "Zoning, land use, and code enforcement are still largely paper-based and manual. We're building tools that make regulatory data searchable, structured, and actionable.",
  },
  {
    title: "Create a connected ecosystem, not isolated point solutions",
    description:
      "Each Abzal product focuses on a specific audience, but they share architecture, design patterns, and a long-term strategy. The ecosystem grows more valuable together.",
  },
];

const productGoals = [
  {
    name: "Abzal Volt",
    accent: "#2563eb",
    bg: "bg-blue-50",
    text: "text-blue-600",
    goal: "Give electrical contractors a single platform to manage estimates, projects, finances, inspections, and crews — so they can run their entire business from one place.",
    audience: "Electrical contractors, shops, and service companies",
    href: "/volt",
  },
  {
    name: "Abzal Build",
    accent: "#059669",
    bg: "bg-emerald-50",
    text: "text-emerald-600",
    goal: "Give builders, renovators, and flippers a project-centered platform for budgets, scheduling, documents, and field coordination — purpose-built for how construction works.",
    audience: "General contractors, remodelers, renovators, and flippers",
    href: "/build",
  },
  {
    name: "Land Use Atlas",
    accent: "#d97706",
    bg: "bg-amber-50",
    text: "text-amber-600",
    goal: "Turn zoning research and land-use review from a scattered, manual process into a structured, searchable, code-linked workflow — built by someone who does this work every day.",
    audience: "Municipal building departments, planning boards, and land-use professionals",
    href: "/atlas",
  },
];

const whyWeBuiltIt = [
  {
    title: "The tools are outdated",
    description:
      "Most software in contracting and municipal operations was built a decade ago with generic frameworks. Clunky interfaces, rigid workflows, and an experience that doesn't match the quality of work these professionals deliver.",
  },
  {
    title: "Real work is fragmented",
    description:
      "A single project can touch estimates, permits, schedules, inspections, invoices, and close-out — but contractors manage each piece in a different tool. That fragmentation creates risk, wastes time, and hides problems.",
  },
  {
    title: "Nobody builds for these users specifically",
    description:
      "Enterprise platforms are bloated and expensive. Generic project management tools don't understand trade workflows. Small shops and municipal teams get the worst of both worlds. We're the alternative.",
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
      "Stay grounded in real workflows. Build for clarity and execution. Keep each product focused on its audience while strengthening the portfolio. Never ship something that looks unfinished.",
  },
];

const proofPoints = [
  {
    value: "2",
    label: "Live products",
    detail: "Volt and Land Use Atlas are available now.",
  },
  {
    value: "Town of Glenville, NY",
    label: "Municipal launch",
    detail: "Atlas is live for the Town of Glenville.",
  },
  {
    value: "Build waitlist",
    label: "Open now",
    detail: "Construction teams can request early access today.",
  },
  {
    value: "Founder-led",
    label: "Field + municipal experience",
    detail: "Built by a Master Electrician and Town Building Inspector.",
  },
];

function SectionHeader({
  eyebrow,
  title,
  description,
  eyebrowColor = "text-blue-600",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  eyebrowColor?: string;
}) {
  return (
    <div className="mb-12 max-w-[680px]">
      <div className={`mb-3 text-[13px] font-bold uppercase tracking-[0.08em] ${eyebrowColor}`}>
        {eyebrow}
      </div>
      <h2 className="text-[36px] font-extrabold leading-[1.15] tracking-[-0.025em] text-navy">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-[17px] leading-[1.65] text-slate-600">
          {description}
        </p>
      )}
    </div>
  );
}

export default function About() {
  return (
    <div className="overflow-hidden bg-white text-text-primary">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f8fafc_0%,#f0f6ff_30%,#ffffff_100%)] px-6 pb-20 pt-20 lg:px-8 lg:pb-24 lg:pt-24">
        <div
          className="pointer-events-none absolute left-1/2 top-[-250px] h-[700px] w-[700px] -translate-x-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(59,130,246,0.06) 0%, rgba(56,189,248,0.03) 40%, transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-[1200px]">
          <div className="max-w-[740px]">
            <div className="fade-up mb-4 text-[12px] font-bold uppercase tracking-[0.1em] text-blue-600">
              About
            </div>
            <h1 className="fade-up d1 text-[48px] font-black leading-[1.06] tracking-[-0.04em] text-navy sm:text-[56px]">
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #0f172a 0%, #2563eb 50%, #0ea5e9 100%)",
                }}
              >
                Software built
              </span>{" "}
              for the teams that build everything else.
            </h1>
            <p className="fade-up d2 mt-5 max-w-[620px] text-[17px] leading-[1.7] text-slate-600">
              Abzal Innovation builds purpose-built software for electrical
              contractors, construction teams, and municipal land-use
              professionals. Here's who we are, why we exist, and what
              we're building toward.
            </p>
            <div className="fade-up d3 mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                className="inline-flex items-center justify-center rounded-[10px] bg-navy px-6 py-3 text-[14px] font-semibold text-white transition-all hover:-translate-y-px hover:bg-slate-800 hover:shadow-[0_6px_20px_rgba(15,23,42,0.2)]"
                href="/products"
              >
                View Products
              </Link>
              <Link
                className="inline-flex items-center justify-center rounded-[10px] border border-slate-200 bg-white px-6 py-3 text-[14px] font-semibold text-navy transition-all hover:border-slate-400"
                href="/contact"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 pb-6 lg:px-8">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {proofPoints.map((point) => (
              <article
                key={point.label}
                className="rounded-[18px] border border-slate-200 bg-white p-6"
              >
                <div className="text-[11px] font-bold uppercase tracking-[0.08em] text-slate-400">
                  {point.label}
                </div>
                <div className="mt-2 text-[24px] font-extrabold tracking-[-0.02em] text-navy">
                  {point.value}
                </div>
                <p className="mt-2 text-[14px] leading-[1.6] text-slate-600">
                  {point.detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <main id="main-content">
        {/* Founder */}
        <section className="bg-white px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-[1200px]">
            <div className="rounded-[20px] border border-slate-200 bg-gradient-to-br from-white via-[#fafbff] to-[#f5f9ff] p-10 lg:p-14">
              <div className="mb-5 text-[13px] font-bold uppercase tracking-[0.08em] text-blue-600">
                The Founder
              </div>
              <h2 className="text-[36px] font-extrabold leading-[1.15] tracking-[-0.025em] text-navy">
                Built by someone who does the work.
              </h2>
              <div className="mt-8 grid gap-8 text-[16px] leading-[1.75] text-slate-600 lg:grid-cols-2">
                <div className="space-y-4">
                  <p>
                    Abzal Innovation was founded by Nayeem Abzal — a Master
                    Electrician, Building Inspector for the Town of Glenville,
                    and software engineer. That combination of field
                    expertise and technical ability is rare, and it's the
                    reason these products exist.
                  </p>
                  <p>
                    Nayeem has spent years running electrical jobs, managing
                    inspections, interpreting zoning codes, and dealing
                    firsthand with the operational gaps that slow down
                    contractors and municipalities. Instead of waiting for
                    someone else to fix it, he started building.
                  </p>
                </div>
                <div className="space-y-4">
                  <p>
                    Every product in the Abzal ecosystem is shaped by direct
                    experience — not by abstract market research or
                    feature-list benchmarking. When Volt handles inspections,
                    it reflects how inspections actually work. When Atlas
                    links to municipal code, it's because the founder reads
                    that code for a living.
                  </p>
                  <p className="font-semibold text-navy">
                    The goal isn't to build another generic SaaS platform.
                    It's to build software that's as serious, capable, and
                    premium as the professionals who use it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company goals */}
        <section className="bg-slate-50 px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-[1200px]">
            <SectionHeader
              eyebrow="Company Goals"
              title="What Abzal Innovation is working toward."
            />
            <div className="grid gap-5 md:grid-cols-3">
              {companyGoals.map((goal) => (
                <article
                  key={goal.title}
                  className="rounded-[16px] border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(15,23,42,0.08)]"
                >
                  <h3 className="text-[17px] font-extrabold leading-[1.35] tracking-[-0.01em] text-navy">
                    {goal.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-[1.65] text-slate-600">
                    {goal.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Product goals */}
        <section className="bg-white px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-[1200px]">
            <SectionHeader
              eyebrow="Product Goals"
              title="What each product is designed to accomplish."
            />
            <div className="space-y-5">
              {productGoals.map((p) => (
                <article
                  key={p.name}
                  className="flex flex-col gap-5 rounded-[16px] border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(15,23,42,0.08)] lg:flex-row lg:items-center"
                >
                  <div
                    className={`flex h-12 w-12 flex-none items-center justify-center rounded-[12px] ${p.bg}`}
                  >
                    <span
                      className="text-[18px] font-black"
                      style={{ color: p.accent }}
                    >
                      {p.name.split(" ").slice(-1)[0].charAt(0)}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <h3 className="text-[20px] font-extrabold tracking-[-0.02em] text-navy">
                        {p.name}
                      </h3>
                      <Link
                        className={`inline-flex items-center gap-1.5 text-[13px] font-semibold transition-all hover:gap-2.5 ${p.text}`}
                        href={p.href}
                      >
                        Learn more <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                    <div className="mt-0.5 text-[13px] font-semibold text-slate-500">
                      {p.audience}
                    </div>
                    <p className="mt-3 text-[15px] leading-[1.65] text-slate-600">
                      {p.goal}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Why */}
        <section className="bg-slate-50 px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-[1200px]">
            <SectionHeader
              eyebrow="Why We Built It"
              title="The problems we're here to solve."
              eyebrowColor="text-slate-400"
            />
            <div className="grid gap-5 md:grid-cols-3">
              {whyWeBuiltIt.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[16px] border border-slate-200 bg-white p-7"
                >
                  <h3 className="text-[17px] font-extrabold tracking-[-0.01em] text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-[1.65] text-slate-600">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & vision */}
        <section className="relative overflow-hidden bg-navy px-6 py-20 text-white lg:px-8">
          <div
            className="pointer-events-none absolute -right-[200px] -top-[200px] h-[500px] w-[500px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)",
            }}
          />
          <div className="relative mx-auto max-w-[1200px]">
            <div className="mb-12 max-w-[680px]">
              <div className="mb-3 text-[13px] font-bold uppercase tracking-[0.08em] text-blue-400">
                Mission & Vision
              </div>
              <h2 className="text-[36px] font-extrabold leading-[1.15] tracking-[-0.025em]">
                Where we're headed and how we operate.
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {missionVision.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[16px] border border-white/10 bg-white/[0.04] p-7"
                >
                  <h3 className="text-[18px] font-extrabold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-[1.65] text-slate-400">
                    {item.description}
                  </p>
                </article>
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
              Explore the ecosystem or start a conversation.
            </h2>
            <p className="mx-auto mt-4 text-[17px] leading-[1.65] text-slate-400">
              See the products, request a walkthrough, or reach out to learn
              how Abzal Innovation fits your team.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                className="inline-flex items-center justify-center rounded-[10px] bg-white px-6 py-3 text-[14px] font-semibold text-navy transition-all hover:-translate-y-px hover:bg-slate-50"
                href="/products"
              >
                View Products
              </Link>
              <Link
                className="inline-flex items-center justify-center rounded-[10px] border border-white/20 bg-white/5 px-6 py-3 text-[14px] font-semibold text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10"
                href="/contact"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
