const problems = [
  "Contractor software that looks like it was built in 2008",
  "Generic project management tools that don't understand your trade",
  "Zoning research scattered across PDFs, binders, and tribal knowledge",
  "Paying enterprise prices for features your small shop will never use",
  "Software that doesn't know the difference between an inspection and a change order",
];

const solutions = [
  "Modern, premium software that feels as good as it works",
  "Purpose-built for electrical, construction, and municipal workflows",
  "Code-linked zoning intelligence with real citations, not guesses",
  "Pricing that fits solo operators, small shops, and growing teams",
  "Built by a Master Electrician and Building Inspector — not a product manager",
];

function XIcon() {
  return (
    <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

export default function Capabilities() {
  return (
    <section className="bg-slate-50 px-6 py-20 lg:px-8 lg:py-24" id="why">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-14 max-w-[640px]">
          <div className="mb-3 text-[13px] font-bold uppercase tracking-[0.08em] text-blue-600">
            Why Abzal Innovation
          </div>
          <h2 className="text-[36px] font-extrabold leading-[1.15] tracking-[-0.025em] text-navy">
            The tools your teams deserve — finally built right.
          </h2>
          <p className="mt-4 text-[17px] leading-[1.65] text-slate-600">
            Most software in the contractor and municipal spaces is outdated,
            clunky, and disconnected from how the work actually runs. We're
            fixing that, one workflow at a time.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Problem card */}
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-[0_1px_3px_rgba(15,23,42,0.04)]">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-500">
              What's broken today
            </div>
            <h3 className="text-[22px] font-extrabold tracking-[-0.02em] text-navy">
              The software most teams are stuck with
            </h3>
            <ul className="mt-6 space-y-3">
              {problems.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-md bg-slate-100 text-slate-400">
                    <XIcon />
                  </span>
                  <span className="text-[14px] leading-[1.6] text-slate-600">{p}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solution card */}
          <div className="relative overflow-hidden rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 via-[#f5f9ff] to-white p-8 shadow-[0_1px_3px_rgba(15,23,42,0.04)]">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-blue-600 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
              The Abzal way
            </div>
            <h3 className="text-[22px] font-extrabold tracking-[-0.02em] text-navy">
              Software that respects the craft
            </h3>
            <ul className="mt-6 space-y-3">
              {solutions.map((s) => (
                <li key={s} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-md bg-blue-600 text-white">
                    <CheckIcon />
                  </span>
                  <span className="text-[14px] leading-[1.6] text-slate-700">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
