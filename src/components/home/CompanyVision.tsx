const stats = [
  { value: "3", label: "Products in development", color: "text-blue-400" },
  { value: "1", label: "Live product (Volt)", color: "text-emerald-400" },
  { value: "100%", label: "Domain-expert founders", color: "text-amber-400" },
  { value: "0", label: "Generic features", color: "text-violet-400" },
];

export default function CompanyVision() {
  return (
    <section
      className="relative overflow-hidden bg-navy px-6 py-20 text-white lg:px-8"
      id="vision"
    >
      {/* Radial glow */}
      <div
        className="pointer-events-none absolute -right-[200px] -top-[200px] h-[500px] w-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[1200px]">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <div className="mb-3 text-[13px] font-bold uppercase tracking-[0.08em] text-blue-400">
              Our Vision
            </div>
            <h2 className="text-[36px] font-extrabold leading-[1.15] tracking-[-0.025em]">
              Software should understand your industry, not the other way
              around.
            </h2>
            <p className="mt-5 text-[16px] leading-[1.7] text-slate-400">
              Most software forces contractors, builders, and municipalities
              to adapt their workflows to fit generic tools. We build the
              opposite: vertical software that already speaks your language,
              understands your compliance requirements, and follows the
              rhythm of how physical-world work actually gets done.
            </p>
            <p className="mt-4 text-[16px] leading-[1.7] text-slate-400">
              Every product starts from real domain expertise — a Master
              Electrician building electrical contractor software, a
              construction professional shaping GC tools, a municipal
              planner designing zoning systems.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-[14px] border border-white/10 bg-white/[0.04] p-5"
              >
                <div
                  className={`text-[28px] font-extrabold tracking-[-0.02em] ${s.color}`}
                >
                  {s.value}
                </div>
                <div className="mt-1 text-[13px] text-slate-400">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
