import type { ReactNode } from "react";
import Link from "../components/site/Link";
import SiteFrame from "../components/site/SiteFrame";
import {
  oneBetterAsset,
  oneBetterFacts,
  oneBetterFeatures,
  oneBetterHero,
  oneBetterLaunchItems,
  oneBetterMeta,
  oneBetterPrivacyPromises,
} from "../data/oneBetterContent";
import useDocumentMetadata from "../hooks/useDocumentMetadata";

const oneBetterSchema = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: "One Better",
  url: oneBetterMeta.url,
  description: oneBetterMeta.description,
  image: oneBetterMeta.image,
  applicationCategory: "LifestyleApplication",
  operatingSystem: "Android",
  isAccessibleForFree: true,
  publisher: {
    "@type": "Organization",
    name: "Abzal Innovation",
    url: "https://www.abzalinnovation.com",
  },
};

const featureTones: Record<
  string,
  { badge: string; icon: string; border: string; symbol: ReactNode }
> = {
  forest: {
    badge: "border-emerald-100 bg-emerald-50 text-emerald-700",
    icon: "bg-emerald-100 text-emerald-700",
    border: "border-emerald-100",
    symbol: (
      <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M5 6h14M5 12h9M5 18h6" strokeLinecap="round" />
        <path d="M18 15v6M15 18h6" strokeLinecap="round" />
      </svg>
    ),
  },
  sun: {
    badge: "border-amber-100 bg-amber-50 text-amber-700",
    icon: "bg-amber-100 text-amber-700",
    border: "border-amber-100",
    symbol: (
      <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 18c4-7 8-9 18-12" strokeLinecap="round" />
        <circle cx="17" cy="7" r="3" />
      </svg>
    ),
  },
  lavender: {
    badge: "border-violet-100 bg-violet-50 text-violet-700",
    icon: "bg-violet-100 text-violet-700",
    border: "border-violet-100",
    symbol: (
      <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M5 12h14M12 5l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  mint: {
    badge: "border-teal-100 bg-teal-50 text-teal-700",
    icon: "bg-teal-100 text-teal-700",
    border: "border-teal-100",
    symbol: (
      <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M8 6h8M6 10h12M8 14h8M10 18h4" strokeLinecap="round" />
      </svg>
    ),
  },
};

function AppPreview() {
  return (
    <div
      aria-label="Illustrated preview of the One Better Daily 5 screen"
      className="relative mx-auto w-full max-w-[390px]"
      role="img"
    >
      <div className="absolute -left-8 top-16 h-28 w-28 rounded-full bg-[#dceee1] blur-2xl" />
      <div className="absolute -right-10 bottom-16 h-32 w-32 rounded-full bg-[#ffd890] blur-2xl" />
      <div className="relative rounded-[38px] border-[7px] border-[#173229] bg-[#fbf8f0] p-5 shadow-[0_34px_80px_rgba(23,50,41,0.24)]">
        <div className="mx-auto mb-5 h-1.5 w-16 rounded-full bg-[#173229]/20" />
        <div className="flex items-start justify-between">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#327955]">
              Today
            </div>
            <div className="mt-1 font-display text-[27px] font-black tracking-[-0.04em] text-[#173229]">
              Your Daily 5
            </div>
          </div>
          <img alt="" className="h-12 w-12 rounded-[13px]" src={oneBetterAsset} />
        </div>

        <div className="mt-5 rounded-[18px] bg-[#dceee1] p-4">
          <div className="text-[10px] font-extrabold uppercase tracking-[0.08em] text-[#327955]">
            Main goal · 5 min
          </div>
          <div className="mt-2 text-[18px] font-extrabold leading-tight text-[#173229]">
            Clear one useful surface
          </div>
          <div className="mt-4 inline-flex rounded-full bg-[#327955] px-4 py-2 text-[11px] font-bold text-white">
            Start mission
          </div>
        </div>

        <div className="mt-3 space-y-2.5">
          {[
            ["Quick win", "Close every extra browser tab", "2 min"],
            ["Life reset", "Put five things back", "3 min"],
            ["Mindful", "Take five slow breaths", "1 min"],
          ].map(([slot, title, time]) => (
            <div className="flex items-center gap-3 rounded-[14px] border border-[#e8e2d7] bg-white p-3" key={slot}>
              <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-[#eee9ff] text-[13px] text-[#327955]">
                ◆
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-[9px] font-bold uppercase tracking-[0.08em] text-[#557066]">
                  {slot}
                </span>
                <span className="mt-0.5 block truncate text-[12px] font-bold text-[#173229]">
                  {title}
                </span>
              </span>
              <span className="text-[10px] font-semibold text-[#557066]">{time}</span>
            </div>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between rounded-[13px] bg-white px-4 py-3 text-[10px] font-bold text-[#557066]">
          <span>2 of 5 complete</span>
          <span className="text-[#327955]">Better Day ✓</span>
        </div>
      </div>
    </div>
  );
}

export default function OneBetter() {
  useDocumentMetadata({
    ...oneBetterMeta,
    imageAlt: "One Better app icon with a growing plant, sunrise, and path.",
    schema: oneBetterSchema,
    schemaId: "one-better",
  });

  return (
    <SiteFrame>
      <section className="relative overflow-hidden bg-[#fbf8f0] px-6 py-16 lg:px-8 lg:py-24">
        <div className="pointer-events-none absolute inset-0 opacity-50 bg-[radial-gradient(circle_at_12%_18%,rgba(110,174,91,0.18),transparent_28%),radial-gradient(circle_at_92%_82%,rgba(249,181,67,0.22),transparent_32%)]" />
        <div className="relative mx-auto grid max-w-[1200px] gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <div className="fade-up flex items-center gap-3">
              <img
                alt="One Better"
                className="h-16 w-16 rounded-[17px] shadow-[0_10px_28px_rgba(23,50,41,0.12)]"
                src={oneBetterAsset}
              />
              <div>
                <div className="inline-flex rounded-full border border-[#327955]/15 bg-white/70 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.09em] text-[#327955]">
                  {oneBetterHero.eyebrow}
                </div>
                <div className="mt-1.5 text-[13px] font-bold text-[#557066]">One Better</div>
              </div>
            </div>

            <h1 className="font-display fade-up d1 mt-7 max-w-[720px] text-[48px] font-black leading-[0.98] tracking-[-0.045em] text-[#173229] sm:text-[62px] lg:text-[72px]">
              {oneBetterHero.title}
            </h1>
            <p className="fade-up d2 mt-6 max-w-[660px] text-[18px] leading-[1.7] text-[#557066] sm:text-[20px]">
              {oneBetterHero.description}
            </p>

            <div className="fade-up d3 mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                className="inline-flex items-center justify-center rounded-[12px] bg-[#327955] px-6 py-3.5 text-[14px] font-bold text-white hover:-translate-y-px hover:bg-[#286446] hover:shadow-[0_12px_30px_rgba(50,121,85,0.2)]"
                href={oneBetterHero.primaryCta.href}
              >
                {oneBetterHero.primaryCta.label}
              </Link>
              <Link
                className="inline-flex items-center justify-center rounded-[12px] border border-[#327955]/20 bg-white/70 px-6 py-3.5 text-[14px] font-bold text-[#173229] hover:border-[#327955]/40 hover:bg-white"
                href={oneBetterHero.secondaryCta.href}
              >
                {oneBetterHero.secondaryCta.label}
              </Link>
            </div>

            <div className="fade-up d4 mt-8 grid max-w-[680px] gap-2 sm:grid-cols-3">
              {oneBetterFacts.map((fact) => (
                <div className="rounded-[14px] border border-[#327955]/10 bg-white/65 px-4 py-3 backdrop-blur-sm" key={fact.label}>
                  <div className="text-[16px] font-extrabold text-[#173229]">{fact.value}</div>
                  <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.08em] text-[#557066]">
                    {fact.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <AppPreview />
        </div>
      </section>

      <section className="bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-11 max-w-[760px]">
            <div className="mb-3 text-[12px] font-bold uppercase tracking-[0.1em] text-[#327955]">
              Built for real days
            </div>
            <h2 className="font-display text-[36px] font-extrabold leading-[1.12] tracking-[-0.03em] text-[#173229] sm:text-[42px]">
              Useful structure without another demanding routine.
            </h2>
            <p className="mt-4 text-[17px] leading-[1.7] text-slate-600">
              One Better keeps the next action small, specific, and flexible—then makes progress visible without turning a missed day into a failure.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {oneBetterFeatures.map((feature) => {
              const tone = featureTones[feature.tone];
              return (
                <article className={`rounded-[20px] border bg-white p-7 shadow-[0_12px_36px_rgba(15,23,42,0.04)] ${tone.border}`} key={feature.title}>
                  <div className={`flex h-11 w-11 items-center justify-center rounded-[12px] ${tone.icon}`}>
                    {tone.symbol}
                  </div>
                  <span className={`mt-5 inline-flex rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-[0.07em] ${tone.badge}`}>
                    {feature.label}
                  </span>
                  <h3 className="mt-4 text-[21px] font-extrabold leading-[1.25] tracking-[-0.02em] text-[#173229]">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-[1.7] text-slate-600">
                    {feature.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#edf5ee] px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <div>
            <div className="mb-3 text-[12px] font-bold uppercase tracking-[0.1em] text-[#327955]">
              Private by default
            </div>
            <h2 className="font-display text-[36px] font-extrabold leading-[1.12] tracking-[-0.03em] text-[#173229]">
              Your progress stays with you.
            </h2>
            <p className="mt-4 text-[17px] leading-[1.7] text-[#557066]">
              The first Google Play release is deliberately local-first. It proves the daily experience before adding accounts, cloud services, ads, or purchases.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link className="text-[14px] font-bold text-[#327955] hover:text-[#286446]" href="/one-better/privacy">
                Privacy policy <span aria-hidden="true">→</span>
              </Link>
              <Link className="text-[14px] font-bold text-[#327955] hover:text-[#286446]" href="/one-better/support">
                App support <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div className="rounded-[22px] border border-[#327955]/10 bg-white p-7 shadow-[0_18px_50px_rgba(50,121,85,0.08)]">
            <div className="space-y-3">
              {oneBetterPrivacyPromises.map((promise) => (
                <div className="flex items-start gap-3 rounded-[13px] bg-[#fbf8f0] p-4" key={promise}>
                  <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-[#dceee1] text-[12px] font-black text-[#327955]">
                    ✓
                  </span>
                  <span className="text-[14px] font-semibold leading-[1.6] text-[#173229]">{promise}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-[1200px] gap-8 rounded-[24px] bg-[#173229] p-8 text-white sm:p-10 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:p-12">
          <div>
            <div className="text-[12px] font-bold uppercase tracking-[0.1em] text-[#a9d39f]">
              App availability
            </div>
            <h2 className="font-display mt-3 text-[34px] font-extrabold leading-[1.12] tracking-[-0.03em]">
              Ask about current Android availability.
            </h2>
            <p className="mt-4 max-w-[650px] text-[16px] leading-[1.7] text-white/66">
              Explore the app overview, privacy information, and support resources here. Contact the team for current Android access options.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link className="inline-flex items-center justify-center rounded-[11px] bg-[#f9b543] px-6 py-3 text-[14px] font-bold text-[#173229] hover:-translate-y-px hover:bg-[#ffc761]" href={oneBetterHero.primaryCta.href}>
                Ask about availability
              </Link>
              <Link className="inline-flex items-center justify-center rounded-[11px] border border-white/18 bg-white/8 px-6 py-3 text-[14px] font-bold text-white hover:border-white/35 hover:bg-white/12" href="/one-better/support">
                Contact support
              </Link>
            </div>
          </div>

          <div className="rounded-[18px] border border-white/12 bg-white/8 p-6">
            <div className="space-y-4">
              {oneBetterLaunchItems.map((item, index) => (
                <div className="flex items-start gap-3" key={item}>
                  <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-white/10 text-[11px] font-extrabold text-[#f9b543]">
                    {index + 1}
                  </span>
                  <span className="pt-0.5 text-[14px] leading-[1.6] text-white/74">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}
