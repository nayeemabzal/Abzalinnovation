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
      <section className="bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.34fr]">
            <div className="rounded-[20px] border border-slate-200 bg-white p-8 lg:p-10">
              <div className="space-y-8">
                {sections.map((section) => (
                  <div
                    className="border-b border-slate-100 pb-8 last:border-b-0 last:pb-0"
                    key={section.title}
                  >
                    <h2 className="text-[20px] font-extrabold tracking-[-0.02em] text-navy">
                      {section.title}
                    </h2>
                    <div className="mt-3 space-y-3 text-[15px] leading-[1.7] text-slate-600">
                      {section.body.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-[20px] border border-slate-200 bg-white p-6">
                <div className="text-[11px] font-bold uppercase tracking-[0.08em] text-slate-400">
                  Last Updated
                </div>
                <div className="mt-1.5 text-[15px] font-bold text-navy">
                  {effectiveDate}
                </div>
              </div>

              <div className="rounded-[20px] border border-slate-200 bg-white p-6">
                <div className="text-[13px] font-bold uppercase tracking-[0.08em] text-blue-600">
                  Questions?
                </div>
                <p className="mt-3 text-[14px] leading-[1.6] text-slate-600">
                  For questions about this policy, contact the Abzal Innovation
                  team.
                </p>
                <Link
                  className="mt-4 inline-flex items-center justify-center rounded-[10px] bg-navy px-5 py-2.5 text-[13px] font-semibold text-white transition-all hover:-translate-y-px hover:bg-slate-800 hover:shadow-[0_6px_20px_rgba(15,23,42,0.2)]"
                  href="/contact"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
