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
      <section className="bg-white px-6 pt-20 lg:px-8">
        <div className="mx-auto max-w-[1200px]">
          <div className="rounded-[20px] border border-slate-200 bg-white p-8">
            <div className="text-[13px] font-bold uppercase tracking-[0.08em] text-blue-600">
              Browse by Topic
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {faqGroups.map((group) => (
                <a
                  className="inline-flex items-center justify-center rounded-[10px] border border-slate-200 bg-slate-50 px-4 py-2 text-[13px] font-semibold text-navy transition-all hover:-translate-y-px hover:border-slate-300 hover:bg-white hover:shadow-[0_4px_14px_rgba(15,23,42,0.04)]"
                  href={`#${group.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                  key={group.title}
                >
                  {group.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ groups */}
      <section className="bg-white px-6 pb-20 pt-10 lg:px-8">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-5 xl:grid-cols-2">
            {faqGroups.map((group, gi) => {
              const groupId = group.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
              return (
                <section
                  className="rounded-[20px] border border-slate-200 bg-white p-8 transition-all duration-300 hover:shadow-[0_12px_36px_rgba(15,23,42,0.06)]"
                  id={groupId}
                  key={group.title}
                >
                  <div className="border-b border-slate-100 pb-5">
                    <div className="text-[13px] font-bold uppercase tracking-[0.08em] text-blue-600">
                      {group.title}
                    </div>
                    <p className="mt-2 text-[15px] leading-[1.6] text-slate-600">
                      {group.description}
                    </p>
                  </div>

                  <div className="mt-5 space-y-3">
                    {group.items.map((item, ii) => (
                      <details
                        className="group rounded-[12px] border border-slate-100 bg-slate-50 px-4 py-3 transition-colors open:border-slate-200 open:bg-white"
                        key={item.question}
                        open={gi === 0 && ii === 0}
                      >
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-2 text-[14px] font-semibold text-navy">
                          {item.question}
                          <svg
                            className="h-4 w-4 shrink-0 text-slate-400 transition-transform group-open:rotate-180"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </summary>
                        <p className="mt-3 text-[14px] leading-[1.65] text-slate-600">
                          {item.answer}
                        </p>
                      </details>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
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
            background:
              "radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-[620px] text-center text-white">
          <h2 className="text-[36px] font-extrabold leading-[1.15] tracking-[-0.025em]">
            Still have questions?
          </h2>
          <p className="mx-auto mt-4 text-[17px] leading-[1.65] text-slate-400">
            Contact our team directly, explore the product lineup, or request a
            walkthrough.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              className="inline-flex items-center justify-center rounded-[10px] bg-white px-6 py-3 text-[14px] font-semibold text-navy transition-all hover:-translate-y-px hover:bg-slate-50"
              href="/contact"
            >
              Contact Us
            </Link>
            <Link
              className="inline-flex items-center justify-center rounded-[10px] border border-white/20 bg-white/5 px-6 py-3 text-[14px] font-semibold text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10"
              href="/products"
            >
              View Products
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
