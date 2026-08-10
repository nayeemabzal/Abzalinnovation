import { useEffect } from "react";
import Link from "../components/site/Link";
import SiteFrame from "../components/site/SiteFrame";
import {
  flipTrackerAssets,
  flipTrackerHero,
  flipTrackerHighlights,
  flipTrackerMeta,
  flipTrackerReadiness,
  flipTrackerStatus,
  flipTrackerWorkflow,
} from "../data/flipTrackerContent";

const toneClasses: Record<string, { icon: string; badge: string; border: string }> = {
  blue: {
    icon: "bg-blue-50 text-blue-600",
    badge: "border-blue-100 bg-blue-50 text-blue-700",
    border: "border-blue-100",
  },
  amber: {
    icon: "bg-amber-50 text-amber-700",
    badge: "border-amber-100 bg-amber-50 text-amber-700",
    border: "border-amber-100",
  },
  emerald: {
    icon: "bg-emerald-50 text-emerald-600",
    badge: "border-emerald-100 bg-emerald-50 text-emerald-700",
    border: "border-emerald-100",
  },
  slate: {
    icon: "bg-slate-100 text-slate-700",
    badge: "border-slate-200 bg-slate-50 text-slate-600",
    border: "border-slate-200",
  },
};

function Icon({ type }: { type: string }) {
  if (type === "amber") {
    return (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16v16H4z" />
        <path d="M8 8h8M8 12h5M8 16h7" />
      </svg>
    );
  }
  if (type === "emerald") {
    return (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1z" />
        <path d="M8 7h8M8 11h8M8 15h5" />
      </svg>
    );
  }
  if (type === "slate") {
    return (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
      </svg>
    );
  }
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 3v18h18" />
      <path d="M7 15l4-4 3 3 5-6" />
    </svg>
  );
}

function DevicePreview() {
  return (
    <div className="relative mx-auto max-w-[620px]">
      <div className="absolute -right-6 -top-6 hidden h-20 w-20 rounded-[18px] border border-white/12 bg-white/8 p-3 backdrop-blur-sm sm:block">
        <img
          alt=""
          className="h-full w-full"
          src={flipTrackerAssets.appIcon}
        />
      </div>
      <img
        alt="Abzal Flip Tracker dashboard preview showing portfolio metrics, project progress, and acquisition workflow."
        className="w-full rounded-[24px] border border-white/14 shadow-[0_30px_80px_rgba(2,6,23,0.35)]"
        src={flipTrackerAssets.dashboard}
      />
    </div>
  );
}

export default function FlipTracker() {
  useEffect(() => {
    const previousTitle = document.title;
    const descriptionTag = document.querySelector<HTMLMetaElement>("meta[name='description']");
    const previousDescription = descriptionTag?.content;

    document.title = flipTrackerMeta.title;
    if (descriptionTag) descriptionTag.content = flipTrackerMeta.description;

    return () => {
      document.title = previousTitle;
      if (descriptionTag && previousDescription) descriptionTag.content = previousDescription;
    };
  }, []);

  return (
    <SiteFrame>
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#0f172a_0%,#12213f_48%,#155e75_100%)] px-6 py-20 text-white lg:px-8 lg:py-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(255,255,255,0.22) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.22) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
        <div className="relative mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <img
                alt=""
                className="h-14 w-14 rounded-[14px] border border-white/12 shadow-[0_10px_28px_rgba(2,6,23,0.22)]"
                src={flipTrackerAssets.appIcon}
              />
              <div>
                <div className="inline-flex rounded-full border border-cyan-200/20 bg-white/10 px-3 py-1.5 text-[12px] font-bold uppercase tracking-[0.08em] text-cyan-100 backdrop-blur-sm">
                  {flipTrackerHero.eyebrow}
                </div>
                <div className="mt-2 text-[13px] font-semibold text-white/58">
                  Abzal Flip Tracker
                </div>
              </div>
            </div>
            <h1 className="font-display text-[44px] font-black leading-[1.02] tracking-[-0.04em] text-white sm:text-[58px] lg:text-[68px]">
              {flipTrackerHero.title}
            </h1>
            <p className="mt-5 max-w-[660px] text-[18px] leading-[1.7] text-white/72">
              {flipTrackerHero.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                className="inline-flex items-center justify-center rounded-[10px] bg-cyan-400 px-6 py-3 text-[14px] font-bold text-navy transition-all hover:-translate-y-px hover:bg-cyan-300"
                href={flipTrackerHero.primaryCta.href}
              >
                {flipTrackerHero.primaryCta.label}
              </Link>
              <Link
                className="inline-flex items-center justify-center rounded-[10px] border border-white/20 bg-white/8 px-6 py-3 text-[14px] font-bold text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/12"
                href={flipTrackerHero.secondaryCta.href}
              >
                {flipTrackerHero.secondaryCta.label}
              </Link>
            </div>
            <div className="mt-8 grid gap-2 sm:grid-cols-3">
              {flipTrackerStatus.map((item) => (
                <div className="rounded-[10px] border border-white/12 bg-white/8 px-4 py-3 backdrop-blur-sm" key={item.label}>
                  <div className="text-[14px] font-extrabold text-white">{item.value}</div>
                  <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-white/45">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <DevicePreview />
        </div>
      </section>

      <section className="bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-14 max-w-[760px]">
            <img
              alt="Abzal Flip Tracker logo."
              className="w-full max-w-[560px] rounded-[18px] shadow-[0_12px_32px_rgba(15,23,42,0.05)]"
              src={flipTrackerAssets.logo}
            />
          </div>
          <div className="mb-10 max-w-[760px]">
            <div className="mb-3 text-[13px] font-bold uppercase tracking-[0.08em] text-cyan-700">
              What It Tracks
            </div>
            <h2 className="text-[36px] font-extrabold leading-[1.15] tracking-[-0.025em] text-navy">
              The flip spreadsheet, rebuilt as a working app.
            </h2>
            <p className="mt-3 text-[17px] leading-[1.65] text-slate-600">
              Flip Tracker centralizes the financial and operational details
              that decide whether a project is on plan, drifting, or ready to
              sell.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {flipTrackerHighlights.map((item) => {
              const tone = toneClasses[item.tone];
              return (
                <article
                  className={`rounded-[14px] border bg-white p-7 shadow-[0_12px_36px_rgba(15,23,42,0.04)] ${tone.border}`}
                  key={item.title}
                >
                  <div className={`flex h-11 w-11 items-center justify-center rounded-[10px] ${tone.icon}`}>
                    <Icon type={item.tone} />
                  </div>
                  <span className={`mt-5 inline-flex rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-[0.06em] ${tone.badge}`}>
                    Tracker
                  </span>
                  <h3 className="mt-4 text-[20px] font-extrabold tracking-[-0.02em] text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-[1.65] text-slate-600">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <div className="mb-3 text-[13px] font-bold uppercase tracking-[0.08em] text-cyan-700">
              Workflow
            </div>
            <h2 className="text-[36px] font-extrabold leading-[1.15] tracking-[-0.025em] text-navy">
              Built around the real order of a flip.
            </h2>
            <p className="mt-4 text-[17px] leading-[1.7] text-slate-600">
              The app starts with acquisition, then keeps the project ledger,
              document trail, field schedule, and final disposition connected.
            </p>
          </div>

          <div className="rounded-[14px] border border-slate-200 bg-white p-6">
            <div className="space-y-3">
              {flipTrackerWorkflow.map((step, index) => (
                <div className="flex items-center gap-4 rounded-[10px] border border-slate-100 bg-slate-50 p-4" key={step}>
                  <span className="flex h-9 w-9 flex-none items-center justify-center rounded-[9px] bg-white text-[13px] font-extrabold text-cyan-700 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
                    {index + 1}
                  </span>
                  <span className="text-[15px] font-semibold text-navy">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-10 max-w-[760px]">
            <div className="mb-3 text-[13px] font-bold uppercase tracking-[0.08em] text-cyan-700">
              Current State
            </div>
            <h2 className="text-[36px] font-extrabold leading-[1.15] tracking-[-0.025em] text-navy">
              Working app, cloud launch still pending.
            </h2>
            <p className="mt-3 text-[17px] leading-[1.65] text-slate-600">
              This page is intentionally precise: Flip Tracker already runs
              locally and is Supabase-ready, but the public cloud deployment is
              not being claimed as live yet.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {flipTrackerReadiness.map((group) => (
              <article className="rounded-[14px] border border-slate-200 bg-slate-50 p-7" key={group.title}>
                <h3 className="text-[20px] font-extrabold tracking-[-0.02em] text-navy">
                  {group.title}
                </h3>
                <div className="mt-5 space-y-3">
                  {group.items.map((item) => (
                    <div className="flex items-start gap-3" key={item}>
                      <span className="mt-1 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-cyan-100 text-cyan-700">
                        <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                      </span>
                      <span className="text-[14px] leading-[1.6] text-slate-600">{item}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(145deg,#0f172a_0%,#12213f_52%,#155e75_100%)] px-6 py-20 text-white lg:px-8">
        <div className="mx-auto max-w-[720px] text-center">
          <h2 className="text-[36px] font-extrabold leading-[1.15] tracking-[-0.025em]">
            Want to test Flip Tracker against a real project?
          </h2>
          <p className="mx-auto mt-4 text-[17px] leading-[1.65] text-white/62">
            Start a conversation with Abzal about early access, local testing,
            or how Flip Tracker should connect into the broader Build roadmap.
          </p>
          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Link
              className="inline-flex items-center justify-center rounded-[10px] bg-white px-6 py-3 text-[14px] font-bold text-navy transition-all hover:-translate-y-px hover:bg-slate-50"
              href="/contact"
            >
              Request Access
            </Link>
            <Link
              className="inline-flex items-center justify-center rounded-[10px] border border-white/20 bg-white/8 px-6 py-3 text-[14px] font-bold text-white transition-all hover:border-white/40 hover:bg-white/12"
              href="/build"
            >
              View Abzal Build
            </Link>
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}
