import type { ReactNode } from "react";

type TrustItem = {
  label: string;
  icon: ReactNode;
};

const trustItems: TrustItem[] = [
  {
    label: "Enterprise-grade security",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    label: "Modern React stack",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    label: "Built in the USA",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
        <path d="M22 4L12 14.01l-3-3" />
      </svg>
    ),
  },
  {
    label: "Domain expert-led",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
];

export default function TrustStrip() {
  return (
    <section className="bg-slate-50 px-6 py-12 lg:px-8">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-center gap-x-12 gap-y-4">
        {trustItems.map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-2.5 text-[14px] font-semibold text-slate-500"
          >
            <span className="block h-5 w-5 text-blue-500">{item.icon}</span>
            {item.label}
          </div>
        ))}
      </div>
    </section>
  );
}
