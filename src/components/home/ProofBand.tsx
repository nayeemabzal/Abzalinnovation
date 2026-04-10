const stats = [
  {
    value: "2",
    label: "Live products",
    sub: "Volt and Atlas are available today",
  },
  {
    value: "Town of Glenville, NY",
    label: "Municipal launch",
    sub: "Atlas is live for a real municipality",
  },
  {
    value: "Build waitlist",
    label: "Open now",
    sub: "Construction teams can request early access",
  },
  {
    value: "Founder-led",
    label: "Field + municipal experience",
    sub: "Master Electrician and Town Building Inspector",
  },
];

const principles = [
  {
    title: "Grounded in real work",
    description:
      "Abzal products are shaped by electrical, construction, and municipal workflows the company knows firsthand.",
  },
  {
    title: "Clear by design",
    description:
      "The goal is software that feels modern, fast, and premium without enterprise bloat or generic workflows.",
  },
  {
    title: "Focused products, shared ecosystem",
    description:
      "Each product solves a specific problem while still fitting into a broader Abzal ecosystem as the portfolio grows.",
  },
];

export default function ProofBand() {
  return (
    <section className="relative overflow-hidden bg-navy px-6 py-20 lg:px-8 lg:py-24">
      {/* Radial glows */}
      <div
        className="pointer-events-none absolute -right-[200px] -top-[200px] h-[600px] w-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-[150px] -left-[150px] h-[500px] w-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(14,165,233,0.1) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[1200px]">
        <div className="mb-14 max-w-[680px]">
          <div className="mb-3 text-[13px] font-bold uppercase tracking-[0.08em] text-blue-400">
            Built on real experience
          </div>
          <h2 className="text-[36px] font-extrabold leading-[1.15] tracking-[-0.025em] text-white">
            Built by someone who knows the field and the permit counter.
          </h2>
          <p className="mt-4 text-[17px] leading-[1.65] text-white/60">
            Abzal Innovation exists because the tools our industries rely on
            weren't good enough. Every product is held to the same standard
            the team would expect from finished work in the field or a final
            review at the counter.
          </p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-navy p-6 lg:p-8">
              <div className="text-[44px] font-black leading-none tracking-[-0.03em] text-white">
                {s.value}
              </div>
              <div className="mt-3 text-[13px] font-bold uppercase tracking-wider text-blue-400">
                {s.label}
              </div>
              <div className="mt-1 text-[12px] text-white/50">{s.sub}</div>
            </div>
          ))}
        </div>

        {/* Principles row */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {principles.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm"
            >
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-[10px] bg-blue-600/20 text-blue-400">
                <svg
                  className="h-[18px] w-[18px]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
              <h3 className="text-[16px] font-extrabold tracking-[-0.01em] text-white">
                {p.title}
              </h3>
              <p className="mt-2 text-[14px] leading-[1.6] text-white/60">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
