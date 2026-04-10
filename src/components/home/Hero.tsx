import { socialLinks } from "../../data/siteContent";
import Link from "../site/Link";
import GradientHero from "../site/GradientHero";

export default function Hero() {
  return (
    <GradientHero
      actions={[
        { label: "Explore Live Products", href: "#products" },
        { label: "Join Build Waitlist", href: "/contact", variant: "secondary" },
      ]}
      contentClassName="mx-auto max-w-[760px] text-center"
      description="Abzal Innovation builds software for the people doing real operational work, from electrical contractors and builders to municipal land-use teams."
      descriptionClassName="mx-auto mt-5 max-w-[580px] text-[17px] leading-[1.7] text-slate-600"
      kicker="Software for the Built Environment"
      kickerClassName="mb-5 text-slate-400"
      meta={
        <div className="flex flex-col items-center gap-3">
          <div className="text-[13px] font-semibold uppercase tracking-[0.08em] text-slate-500">
            Volt and Land Use Atlas are live now. Build waitlist is open.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2">
            <Link
              className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-[12px] font-semibold text-blue-700 transition-all hover:-translate-y-px hover:border-blue-300"
              href="https://volt.abzalinnovation.com"
            >
              Live now: Volt
            </Link>
            <Link
              className="inline-flex items-center rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-[12px] font-semibold text-amber-700 transition-all hover:-translate-y-px hover:border-amber-300"
              href="https://atlas.abzalinnovation.com"
            >
              Live now: Atlas
            </Link>
            <Link
              className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[12px] font-semibold text-navy transition-all hover:-translate-y-px hover:border-slate-300"
              href={socialLinks[0].href}
            >
              Follow on Facebook
            </Link>
          </div>
        </div>
      }
      metaClassName="mx-auto mt-6 max-w-[720px]"
      sectionClassName="pb-24 pt-20 lg:pb-28 lg:pt-24"
      title={
        <>
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(135deg, #0f172a 0%, #2563eb 50%, #0ea5e9 100%)",
            }}
          >
            Purpose-built tools
          </span>{" "}
          for contractors, builders, and municipalities.
        </>
      }
      titleClassName="text-[36px] leading-[1.06] sm:text-[44px] lg:text-[56px]"
      actionsClassName="items-center justify-center"
    />
  );
}
