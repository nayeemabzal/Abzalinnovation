import type { ReactNode } from "react";
import Footer from "../site/Footer";
import Header from "../site/Header";
import Link from "../site/Link";

type Highlight = {
  title: string;
  description: string;
  icon: ReactNode;
};

type ProductOverviewProps = {
  name: string;
  tagline: string;
  accent: string;
  description: string;
  audience: string;
  goal: string;
  solves: string;
  highlights: Highlight[];
  ctaLabel: string;
  ctaHref: string;
  badgeLabel: string;
};

export default function ProductOverview({
  name,
  tagline,
  accent,
  description,
  audience,
  goal,
  solves,
  highlights,
  ctaLabel,
  ctaHref,
  badgeLabel,
}: ProductOverviewProps) {
  return (
    <div className="overflow-hidden bg-white">
      {/* Hero */}
      <div className="hero-mesh-blue grain-overlay relative">
        <Header />

        <div className="relative z-10 mx-auto max-w-[1120px] px-6 pb-16 pt-6 sm:px-8 lg:px-8 lg:pb-20 lg:pt-8">
          <div className="max-w-[36rem] animate-slide-up">
            <div
              className="inline-flex items-center rounded-full border px-3 py-1 text-[0.72rem] font-semibold"
              style={{
                borderColor: `${accent}30`,
                backgroundColor: `${accent}0d`,
                color: accent,
              }}
            >
              {badgeLabel}
            </div>
            <h1 className="mt-4 text-[2rem] font-extrabold leading-[1.08] tracking-[-0.04em] text-navy sm:text-[2.5rem] lg:text-[2.8rem] lg:leading-[1.02]">
              {name}
            </h1>
            <p className="mt-2 text-[1rem] font-medium text-text-secondary/80">
              {tagline}
            </p>
            <p className="mt-4 max-w-[28rem] text-[0.96rem] leading-7 text-text-secondary">
              {description}
            </p>
            <div className="mt-3 text-[0.84rem] text-text-muted">
              <span className="font-semibold text-navy">Built for:</span>{" "}
              {audience}
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-navy px-6 py-3 text-[0.88rem] font-semibold text-white shadow-sm hover:bg-navy/90"
                href={ctaHref}
              >
                {ctaLabel}
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3 text-[0.88rem] font-semibold text-navy shadow-sm hover:bg-slate-50"
                href="/contact"
              >
                Request a Demo
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent z-[2]" />
      </div>

      {/* Goal & Problem */}
      <section className="mx-auto max-w-[1120px] px-6 py-12 sm:px-8 lg:px-8 lg:py-16">
        <div className="grid gap-5 md:grid-cols-2">
          <article className="rounded-xl border border-slate-200/60 bg-white p-6 shadow-card">
            <div className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-text-muted">
              The Goal
            </div>
            <p className="mt-3 text-[1.05rem] font-semibold leading-7 text-navy">
              {goal}
            </p>
          </article>
          <article className="rounded-xl border border-slate-200/60 bg-white p-6 shadow-card">
            <div className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-text-muted">
              What It Replaces
            </div>
            <p className="mt-3 text-[0.92rem] leading-7 text-text-secondary">
              {solves}
            </p>
          </article>
        </div>
      </section>

      {/* Key highlights */}
      <section className="mx-auto max-w-[1120px] px-6 pb-12 sm:px-8 lg:px-8 lg:pb-16">
        <div className="max-w-[28rem]">
          <div className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-text-muted">
            Key Capabilities
          </div>
          <h2 className="mt-2 text-[1.4rem] font-extrabold tracking-[-0.03em] text-navy sm:text-[1.6rem]">
            What {name} covers.
          </h2>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 stagger-children">
          {highlights.map((h) => (
            <article
              className="glow-card rounded-xl border border-slate-200/60 bg-white p-5 shadow-card"
              key={h.title}
            >
              <span
                className="flex h-9 w-9 items-center justify-center rounded-lg"
                style={{ backgroundColor: `${accent}14`, color: accent }}
              >
                {h.icon}
              </span>
              <h3 className="mt-3 text-[0.96rem] font-semibold tracking-[-0.02em] text-navy">
                {h.title}
              </h3>
              <p className="mt-1.5 text-[0.84rem] leading-6 text-text-secondary">
                {h.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* CTA band */}
      <section className="px-6 pb-12 sm:px-8 lg:px-8 lg:pb-16">
        <div className="mx-auto max-w-[1120px] overflow-hidden rounded-2xl bg-navy relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_0%_0%,rgba(59,130,246,0.2),transparent)]" />
          <div className="relative z-[2] px-8 py-10 sm:px-10 lg:px-12 lg:py-12">
            <div className="max-w-[32rem]">
              <h2 className="text-[1.5rem] font-extrabold leading-[1.1] tracking-[-0.04em] text-white sm:text-[1.75rem]">
                Interested in {name}?
              </h2>
              <p className="mt-3 text-[0.92rem] leading-7 text-white/60">
                Schedule a walkthrough with our team to see how {name} fits your
                operation, or explore the rest of the Abzal Innovation ecosystem.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-[0.88rem] font-semibold text-navy shadow-sm"
                  href="/contact"
                >
                  Request a Demo
                </Link>
                <Link
                  className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/8 px-6 py-3 text-[0.88rem] font-semibold text-white hover:bg-white/12"
                  href="/products"
                >
                  View All Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
