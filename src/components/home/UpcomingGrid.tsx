import type { ReactNode } from "react";

type Upcoming = {
  name: string;
  description: string;
  iconBg: string;
  iconColor: string;
  icon: ReactNode;
};

const items: Upcoming[] = [
  {
    name: "Abzal Flow",
    description: "Service dispatch and field coordination for trade contractors.",
    iconBg: "bg-violet-50",
    iconColor: "text-violet-500",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    name: "Abzal Air",
    description: "HVAC project tracking and compliance management.",
    iconBg: "bg-blue-50",
    iconColor: "text-sky-500",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3v18M3 12h18" />
      </svg>
    ),
  },
  {
    name: "ProjectHub",
    description: "Cross-product project intelligence and portfolio oversight.",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-500",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
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
            On the Roadmap
          </div>
          <h2 className="text-[36px] font-extrabold leading-[1.15] tracking-[-0.025em] text-navy">
            What's coming next.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.name}
              className="flex items-start gap-4 rounded-[14px] border border-slate-100 bg-slate-50 p-6"
            >
              <div
                className={`flex h-10 w-10 flex-none items-center justify-center rounded-[10px] ${item.iconBg} ${item.iconColor}`}
              >
                <span className="block h-5 w-5">{item.icon}</span>
              </div>
              <div>
                <h4 className="text-[15px] font-bold text-navy">{item.name}</h4>
                <p className="mt-1 text-[13px] leading-[1.5] text-slate-500">
                  {item.description}
                </p>
                <span className="mt-1.5 inline-block text-[10px] font-bold uppercase tracking-[0.06em] text-slate-400">
                  Future
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
