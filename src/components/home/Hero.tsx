import { heroContent } from "../../data/homepageContent";
import Link from "../site/Link";

function DashboardMockup() {
  return (
    <div className="relative h-full w-full">
      <div className="absolute right-0 top-4 h-[260px] w-[92%] rounded-2xl border border-slate-200/60 bg-white p-2.5 shadow-elevated animate-float">
        <div className="h-full rounded-xl bg-slate-50 p-2">
          {/* Browser chrome */}
          <div className="flex h-6 items-center justify-between rounded-lg bg-white px-2.5">
            <div className="flex gap-1">
              <span className="h-2 w-2 rounded-full bg-rose-300" />
              <span className="h-2 w-2 rounded-full bg-amber-300" />
              <span className="h-2 w-2 rounded-full bg-emerald-300" />
            </div>
            <div className="h-2 w-20 rounded-full bg-slate-100" />
            <div className="h-2 w-8 rounded-full bg-blue-50" />
          </div>

          {/* Dashboard layout */}
          <div className="mt-2 grid h-[calc(100%-2rem)] grid-cols-[52px_1fr] gap-2">
            {/* Sidebar */}
            <div className="rounded-xl bg-navy p-2.5">
              <div className="space-y-2">
                {[true, false, false, false].map((active, i) => (
                  <div
                    key={i}
                    className={`h-1.5 rounded-full ${active ? "w-7 bg-blue-400" : "w-5 bg-white/15"}`}
                  />
                ))}
              </div>
            </div>

            {/* Main content */}
            <div className="grid gap-2">
              {/* Stats row */}
              <div className="grid grid-cols-3 gap-2">
                {["$142k", "28", "94%"].map((val, i) => (
                  <div key={i} className="rounded-lg bg-white p-2 shadow-card">
                    <div className="text-[0.45rem] font-semibold uppercase tracking-wider text-text-muted">
                      {["Revenue", "Active", "On-time"][i]}
                    </div>
                    <div className="mt-0.5 text-[0.72rem] font-extrabold text-navy">{val}</div>
                  </div>
                ))}
              </div>

              {/* Chart area */}
              <div className="relative rounded-lg bg-white p-2 shadow-card">
                <div className="flex h-full items-end gap-1">
                  {[40, 55, 48, 62, 58, 75, 70, 82].map((h, i) => (
                    <div
                      key={i}
                      className={`w-full rounded-t-md ${
                        i >= 6 ? "bg-blue-500" : "bg-slate-100"
                      }`}
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating stat card */}
      <div className="absolute bottom-6 left-0 w-[46%] rounded-xl border border-slate-200/60 bg-white/90 p-3 shadow-elevated backdrop-blur-sm sm:left-[2%] animate-float-delayed">
        <div className="text-[0.5rem] font-semibold uppercase tracking-wider text-text-muted">Active Projects</div>
        <div className="mt-1 text-[0.82rem] font-extrabold text-navy">28 projects across 3 teams</div>
        <div className="mt-2 h-1.5 rounded-full bg-slate-100">
          <div className="h-1.5 w-[82%] rounded-full bg-gradient-to-r from-blue-500 to-blue-400" />
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative z-10 overflow-hidden pb-20 pt-4 lg:pb-28 lg:pt-2" id="top">
      <div className="relative mx-auto grid w-full max-w-[1120px] items-center gap-10 px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
        <div className="max-w-[34rem] pt-2 animate-slide-up">
          <div className="inline-flex items-center rounded-full border border-blue-200/60 bg-blue-50/80 px-3 py-1 text-[0.72rem] font-semibold text-blue-600">
            <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-blue-500" />
            Purpose-built contractor software
          </div>
          <h1 className="mt-5 text-[2.4rem] font-extrabold leading-[1.05] tracking-[-0.04em] text-navy sm:text-[2.8rem] sm:leading-[1.02] lg:text-[3.4rem] lg:leading-[0.98]">
            {heroContent.title}
          </h1>
          <p className="mt-5 max-w-[28rem] text-[1rem] leading-7 text-text-secondary">
            {heroContent.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              className="inline-flex items-center justify-center rounded-xl bg-navy px-6 py-3 text-[0.9rem] font-semibold text-white shadow-sm hover:bg-navy/90"
              href={heroContent.primaryCta.href}
            >
              {heroContent.primaryCta.label}
              <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
            <Link
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3 text-[0.9rem] font-semibold text-navy shadow-sm hover:border-slate-300 hover:bg-slate-50"
              href={heroContent.secondaryCta.href}
            >
              {heroContent.secondaryCta.label}
            </Link>
          </div>
        </div>

        <div className="relative mx-auto hidden h-[320px] w-full max-w-[500px] lg:block">
          <DashboardMockup />
        </div>
      </div>
    </section>
  );
}
