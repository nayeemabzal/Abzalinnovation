import type { ReactNode } from "react";
import Link from "./Link";

export type HeroAction = {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
};

type GradientHeroProps = {
  kicker?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  meta?: ReactNode;
  actions?: HeroAction[];
  sectionClassName?: string;
  contentClassName?: string;
  kickerClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  metaClassName?: string;
  actionsClassName?: string;
};

function getActionClassName(variant: HeroAction["variant"]) {
  if (variant === "secondary") {
    return "border border-slate-200 bg-white text-navy hover:border-slate-400";
  }

  return "bg-navy text-white hover:-translate-y-px hover:bg-slate-800 hover:shadow-[0_6px_20px_rgba(15,23,42,0.2)]";
}

export default function GradientHero({
  kicker,
  title,
  description,
  meta,
  actions = [],
  sectionClassName,
  contentClassName,
  kickerClassName,
  titleClassName,
  descriptionClassName,
  metaClassName,
  actionsClassName,
}: GradientHeroProps) {
  return (
    <section
      className={[
        "relative overflow-hidden bg-[linear-gradient(180deg,#f8fafc_0%,#f0f6ff_30%,#ffffff_100%)] px-6 pb-20 pt-20 lg:px-8 lg:pb-24 lg:pt-24",
        sectionClassName,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div
        className="pointer-events-none absolute left-1/2 top-[-250px] h-[800px] w-[800px] -translate-x-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,0.06) 0%, rgba(56,189,248,0.03) 40%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[1200px]">
        <div className={contentClassName ?? "max-w-[740px]"}>
          {kicker && (
            <div
              className={[
                "fade-up mb-4 text-[12px] font-bold uppercase tracking-[0.1em] text-blue-600",
                kickerClassName,
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {kicker}
            </div>
          )}

          <h1
            className={[
              "font-display fade-up d1 text-[40px] font-black leading-[1.08] tracking-[-0.04em] text-navy sm:text-[48px] lg:text-[56px]",
              titleClassName,
            ]
              .filter(Boolean)
              .join(" ")}
          >
            {title}
          </h1>

          {description && (
            <p
              className={[
                "fade-up d2 mt-5 max-w-[600px] text-[17px] leading-[1.7] text-slate-600",
                descriptionClassName,
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {description}
            </p>
          )}

          {meta && (
            <div
              className={[
                "fade-up d3 mt-4 text-[14px] text-slate-500",
                metaClassName,
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {meta}
            </div>
          )}

          {actions.length > 0 && (
            <div
              className={[
                "fade-up d3 mt-8 flex flex-col gap-3 sm:flex-row",
                actionsClassName,
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {actions.map((action) => (
                <Link
                  className={`inline-flex items-center justify-center rounded-[10px] px-6 py-3 text-[14px] font-semibold transition-all ${getActionClassName(action.variant)}`}
                  href={action.href}
                  key={action.label}
                >
                  {action.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
