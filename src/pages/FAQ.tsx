import Link from "../components/site/Link";
import PageShell from "../components/site/PageShell";
import { faqGroups } from "../data/siteContent";

export default function FAQ() {
  return (
    <PageShell
      actions={[
        { label: "Contact Us", href: "/contact" },
        { label: "View Products", href: "/products", variant: "secondary" },
      ]}
      description="Quick answers about Abzal Innovation, our products, municipal workflows, and how to get started."
      eyebrow="FAQ"
      title="Answers about the company and how to get started."
    >
      {/* Category nav */}
      <section className="rounded-xl border border-slate-200/60 bg-white p-5 shadow-card">
        <div className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-text-muted">
          Browse by Topic
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {faqGroups.map((group) => (
            <a
              className="inline-flex items-center justify-center rounded-xl bg-slate-50 px-3 py-1.5 text-[0.78rem] font-semibold text-navy hover:bg-blue-50 transition-colors"
              href={`#${group.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
              key={group.title}
            >
              {group.title}
            </a>
          ))}
        </div>
      </section>

      {/* FAQ groups */}
      <div className="grid gap-4 xl:grid-cols-2 stagger-children">
        {faqGroups.map((group, gi) => {
          const groupId = group.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");

          return (
            <section
              className="glow-card rounded-xl border border-slate-200/60 bg-white p-5 shadow-card"
              id={groupId}
              key={group.title}
            >
              <div className="border-b border-slate-200/50 pb-3">
                <div className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-text-muted">
                  {group.title}
                </div>
                <p className="mt-1.5 text-[0.84rem] leading-6 text-text-secondary">{group.description}</p>
              </div>

              <div className="mt-4 space-y-3">
                {group.items.map((item, ii) => (
                  <details
                    className="group rounded-xl border border-slate-200/40 bg-slate-50 px-4 py-3"
                    key={item.question}
                    open={gi === 0 && ii === 0}
                  >
                    <summary className="cursor-pointer list-none text-[0.9rem] font-semibold text-navy flex items-center justify-between gap-2">
                      {item.question}
                      <svg className="h-4 w-4 shrink-0 text-text-muted transition-transform group-open:rotate-180" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                      </svg>
                    </summary>
                    <p className="mt-2.5 text-[0.84rem] leading-6 text-text-secondary">{item.answer}</p>
                  </details>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {/* CTA */}
      <section className="overflow-hidden rounded-2xl bg-navy relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_0%_0%,rgba(59,130,246,0.2),transparent)]" />
        <div className="relative px-8 py-10 sm:px-10 lg:px-12 lg:py-12 z-[2]">
          <div className="max-w-[32rem]">
            <h2 className="text-[1.6rem] font-extrabold leading-[1.1] tracking-[-0.04em] text-white sm:text-[1.85rem]">
              Still have questions?
            </h2>
            <p className="mt-4 text-[0.92rem] leading-7 text-white/60">
              Contact our team directly, explore the product lineup, or request a walkthrough.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-[0.88rem] font-semibold text-navy shadow-sm" href="/contact">
                Contact Us
              </Link>
              <Link className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/8 px-6 py-3 text-[0.88rem] font-semibold text-white hover:bg-white/12" href="/products">
                View Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
