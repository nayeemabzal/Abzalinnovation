import type { LegalSection } from "../../data/siteContent";
import Link from "./Link";
import PageShell from "./PageShell";

type LegalPageTemplateProps = {
  eyebrow: string;
  title: string;
  description: string;
  effectiveDate: string;
  sections: LegalSection[];
};

export default function LegalPageTemplate({
  eyebrow,
  title,
  description,
  effectiveDate,
  sections,
}: LegalPageTemplateProps) {
  return (
    <PageShell
      actions={[
        { label: "Contact Us", href: "/contact" },
        { label: "View Products", href: "/products", variant: "secondary" },
      ]}
      description={description}
      eyebrow={eyebrow}
      title={title}
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_0.32fr]">
        <section className="rounded-xl border border-slate-200/60 bg-white p-5 shadow-card">
          <div className="space-y-6">
            {sections.map((section) => (
              <div className="border-b border-slate-200/50 pb-6 last:border-b-0 last:pb-0" key={section.title}>
                <h2 className="text-[1.08rem] font-semibold tracking-[-0.03em] text-navy">{section.title}</h2>
                <div className="mt-2.5 space-y-2.5 text-[0.88rem] leading-6 text-text-secondary">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="space-y-4">
          <div className="rounded-xl border border-slate-200/60 bg-white p-4 shadow-card">
            <div className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-text-muted">
              Last Updated
            </div>
            <div className="mt-1.5 text-[0.92rem] font-semibold text-navy">{effectiveDate}</div>
          </div>

          <div className="rounded-xl border border-slate-200/60 bg-white p-4 shadow-card">
            <div className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-text-muted">
              Questions?
            </div>
            <p className="mt-2 text-[0.84rem] leading-6 text-text-secondary">
              For questions about this policy, contact the Abzal Innovation team.
            </p>
            <Link
              className="mt-3 inline-flex items-center justify-center rounded-xl bg-navy px-4 py-2 text-[0.82rem] font-semibold text-white shadow-sm hover:bg-navy/90"
              href="/contact"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
