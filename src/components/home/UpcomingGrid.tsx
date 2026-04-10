import type { ReactNode } from "react";
import { socialLinks } from "../../data/siteContent";
import Link from "../site/Link";

type NextStep = {
  name: string;
  description: string;
  badge: string;
  ctaLabel: string;
  href: string;
  iconBg: string;
  iconColor: string;
  icon: ReactNode;
};

const items: NextStep[] = [
  {
    name: "Join the Build waitlist",
    description:
      "Abzal Build is opening soon for general contractors, remodelers, and teams that want a cleaner operating layer.",
    badge: "Waitlist Open",
    ctaLabel: "Request early access",
    href: "/contact",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-500",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20h20M5 20V8l7-5 7 5v12M9 20v-4h6v4" />
      </svg>
    ),
  },
  {
    name: "Follow Abzal on Facebook",
    description:
      "Stay close to launch updates, product progress, and the next improvements across the Abzal ecosystem.",
    badge: "Social Updates",
    ctaLabel: "Visit Facebook",
    href: socialLinks[0].href,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-500",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    name: "Talk through your workflow",
    description:
      "If you're not sure whether Volt, Atlas, or Build is the right fit, start a conversation and we'll point you in the right direction.",
    badge: "Quick Start",
    ctaLabel: "Contact Abzal",
    href: "/contact",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-500",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
  },
];

export default function UpcomingGrid() {
  return (
    <section className="bg-white px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-10 max-w-[640px]">
          <div className="mb-3 text-[13px] font-bold uppercase tracking-[0.08em] text-slate-400">
            Stay Connected
          </div>
          <h2 className="text-[36px] font-extrabold leading-[1.15] tracking-[-0.025em] text-navy">
            Keep up with what's launching next.
          </h2>
          <p className="mt-3 text-[17px] leading-[1.65] text-slate-600">
            If you're interested in what's shipping next, these are the easiest
            ways to stay close to the Abzal ecosystem.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.name}
              className="flex h-full flex-col rounded-[18px] border border-slate-200 bg-slate-50 p-6"
            >
              <div className="flex items-start gap-4">
                <div
                  className={`flex h-10 w-10 flex-none items-center justify-center rounded-[10px] ${item.iconBg} ${item.iconColor}`}
                >
                  <span className="block h-5 w-5">{item.icon}</span>
                </div>
                <div>
                  <h4 className="text-[16px] font-bold text-navy">{item.name}</h4>
                  <span className="mt-1.5 inline-block text-[10px] font-bold uppercase tracking-[0.06em] text-slate-400">
                    {item.badge}
                  </span>
                </div>
              </div>
              <div className="mt-4 flex-1">
                <p className="mt-1 text-[13px] leading-[1.5] text-slate-500">
                  {item.description}
                </p>
              </div>
              <Link
                className="mt-5 inline-flex items-center gap-1 text-[13px] font-semibold text-navy transition-all hover:gap-2"
                href={item.href}
              >
                {item.ctaLabel} <span aria-hidden="true">→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
