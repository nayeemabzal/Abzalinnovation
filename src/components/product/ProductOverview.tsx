import type { ReactNode } from "react";
import GradientHero from "../site/GradientHero";
import Link from "../site/Link";
import SiteFrame from "../site/SiteFrame";

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
    <SiteFrame
      hero={
        <GradientHero
          actions={[
            { label: ctaLabel, href: ctaHref },
            { label: "Request a Demo", href: "/contact", variant: "secondary" },
          ]}
          description={
            <>
              <span className="block text-[20px] font-semibold text-slate-600">
                {tagline}
              </span>
              <span className="mt-4 block text-[17px] font-normal leading-[1.7] text-slate-600">
                {description}
              </span>
            </>
          }
          kicker={
            <span
              className="inline-flex items-center rounded-full border px-3 py-1"
              style={{
                borderColor: `${accent}40`,
                backgroundColor: `${accent}12`,
                color: accent,
              }}
            >
              {badgeLabel}
            </span>
          }
          kickerClassName="mb-5 inline-flex text-[12px] font-bold uppercase tracking-[0.08em]"
          meta={
            <>
              <span className="font-semibold text-navy">Built for:</span> {audience}
            </>
          }
          title={name}
          descriptionClassName="mt-3 max-w-[600px]"
          metaClassName="mt-4 text-[14px] text-slate-500"
          titleClassName="mt-0 text-[48px] leading-[1.06] sm:text-[56px]"
        />
      }
    >
      <div>
        {/* Goal & Problem */}
        <section className="bg-white px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-[1200px]">
            <div className="grid gap-5 md:grid-cols-2">
              <article
                className="rounded-[20px] border bg-white p-8"
                style={{
                  borderColor: `${accent}30`,
                  background: `linear-gradient(145deg, ${accent}08 0%, #ffffff 100%)`,
                }}
              >
                <div
                  className="text-[13px] font-bold uppercase tracking-[0.08em]"
                  style={{ color: accent }}
                >
                  The Goal
                </div>
                <p className="mt-4 text-[18px] font-semibold leading-[1.55] text-navy">
                  {goal}
                </p>
              </article>
              <article className="rounded-[20px] border border-slate-200 bg-white p-8">
                <div className="text-[13px] font-bold uppercase tracking-[0.08em] text-slate-400">
                  What It Replaces
                </div>
                <p className="mt-4 text-[16px] leading-[1.7] text-slate-600">
                  {solves}
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Key highlights */}
        <section className="bg-slate-50 px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-[1200px]">
            <div className="mb-12 max-w-[640px]">
              <div
                className="mb-3 text-[13px] font-bold uppercase tracking-[0.08em]"
                style={{ color: accent }}
              >
                Key Capabilities
              </div>
              <h2 className="text-[36px] font-extrabold leading-[1.15] tracking-[-0.025em] text-navy">
                What {name} covers.
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {highlights.map((h) => (
                <article
                  key={h.title}
                  className="rounded-[16px] border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(15,23,42,0.08)]"
                >
                  <span
                    className="flex h-11 w-11 items-center justify-center rounded-[12px]"
                    style={{ backgroundColor: `${accent}14`, color: accent }}
                  >
                    {h.icon}
                  </span>
                  <h3 className="mt-5 text-[17px] font-extrabold tracking-[-0.01em] text-navy">
                    {h.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-[1.6] text-slate-600">
                    {h.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA band */}
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
              background: `radial-gradient(circle, ${accent}28 0%, transparent 70%)`,
            }}
          />
          <div className="relative mx-auto max-w-[620px] text-center text-white">
            <h2 className="text-[36px] font-extrabold leading-[1.15] tracking-[-0.025em]">
              Interested in {name}?
            </h2>
            <p className="mx-auto mt-4 text-[17px] leading-[1.65] text-slate-400">
              Schedule a walkthrough with our team to see how {name} fits your
              operation, or explore the rest of the Abzal Innovation ecosystem.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                className="inline-flex items-center justify-center rounded-[10px] bg-white px-6 py-3 text-[14px] font-semibold text-navy transition-all hover:-translate-y-px hover:bg-slate-50"
                href="/contact"
              >
                Request a Demo
              </Link>
              <Link
                className="inline-flex items-center justify-center rounded-[10px] border border-white/20 bg-white/5 px-6 py-3 text-[14px] font-semibold text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10"
                href="/products"
              >
                View All Products
              </Link>
            </div>
          </div>
        </section>
      </div>
    </SiteFrame>
  );
}
