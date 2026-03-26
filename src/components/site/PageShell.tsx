import type { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Link from "./Link";

type PageAction = {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
};

type PageShellProps = {
  eyebrow: string;
  title: string;
  description: string;
  actions?: PageAction[];
  children: ReactNode;
};

export default function PageShell({
  eyebrow,
  title,
  description,
  actions = [],
  children,
}: PageShellProps) {
  return (
    <div className="overflow-hidden bg-white text-text-primary">
      <div className="relative overflow-hidden hero-mesh-blue grain-overlay">
        <Header />

        <section className="relative z-10 px-6 pb-16 pt-4 sm:px-8 lg:px-8 lg:pb-20 lg:pt-6">
          <div className="mx-auto max-w-[1120px]">
            <div className="max-w-[38rem] animate-slide-up">
              <div className="inline-flex items-center rounded-full border border-blue-200/60 bg-blue-50/80 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-blue-600">
                {eyebrow}
              </div>
              <h1 className="mt-4 text-[2rem] font-extrabold leading-[1.08] tracking-[-0.04em] text-navy sm:text-[2.5rem] lg:text-[2.8rem] lg:leading-[1.02]">
                {title}
              </h1>
              <p className="mt-4 max-w-[30rem] text-[0.96rem] leading-7 text-text-secondary">
                {description}
              </p>

              {actions.length > 0 && (
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  {actions.map((action) => (
                    <Link
                      className={`inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-[0.88rem] font-semibold ${
                        action.variant === "secondary"
                          ? "border border-slate-200 bg-white text-navy shadow-sm hover:bg-slate-50"
                          : "bg-navy text-white shadow-sm hover:bg-navy/90"
                      }`}
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

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent z-[2]" />
      </div>

      <main className="relative px-6 py-8 sm:px-8 lg:px-8 lg:py-10" id="main-content">
        <div className="mx-auto max-w-[1120px] space-y-6">{children}</div>
      </main>

      <Footer />
    </div>
  );
}
