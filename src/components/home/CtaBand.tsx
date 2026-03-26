import { ctaContent } from "../../data/homepageContent";
import Link from "../site/Link";

export default function CtaBand() {
  return (
    <section className="px-6 pb-12 pt-4 sm:px-8 lg:px-8 lg:pb-16" id="cta">
      <div className="mx-auto max-w-[1120px] overflow-hidden rounded-2xl bg-navy relative">
        {/* Mesh gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_0%_0%,rgba(59,130,246,0.2),transparent),radial-gradient(ellipse_40%_40%_at_100%_100%,rgba(99,102,241,0.12),transparent)]" />
        <div className="absolute inset-0 grain-overlay" />

        <div className="relative px-8 py-10 sm:px-10 lg:px-12 lg:py-12 z-[2]">
          <div className="max-w-[32rem]">
            <h2 className="text-[1.6rem] font-extrabold leading-[1.1] tracking-[-0.04em] text-white sm:text-[1.85rem]">
              {ctaContent.title}
            </h2>
            <p className="mt-4 max-w-[28rem] text-[0.92rem] leading-7 text-white/60">
              {ctaContent.description}
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-[0.88rem] font-semibold text-navy shadow-sm hover:bg-slate-50"
                href={ctaContent.primaryCta.href}
              >
                {ctaContent.primaryCta.label}
              </Link>
              <Link
                className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/8 px-6 py-3 text-[0.88rem] font-semibold text-white hover:bg-white/12"
                href={ctaContent.secondaryCta.href}
              >
                {ctaContent.secondaryCta.label}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
