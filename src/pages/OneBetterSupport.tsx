import Link from "../components/site/Link";
import PageShell from "../components/site/PageShell";
import { oneBetterSupportQuestions } from "../data/oneBetterContent";
import useDocumentMetadata from "../hooks/useDocumentMetadata";

const title = "One Better Support - Abzal Innovation";
const description =
  "Help, common questions, privacy links, and email support for the One Better mobile app.";
const url = "https://www.abzalinnovation.com/one-better/support";
const supportHref =
  "mailto:hello@abzalinnovation.com?subject=One%20Better%20support";

export default function OneBetterSupport() {
  useDocumentMetadata({
    title,
    description,
    url,
    schemaId: "one-better-support",
    schema: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: "One Better Support",
      url,
      description,
      mainEntity: {
        "@type": "Organization",
        name: "Abzal Innovation",
        email: "hello@abzalinnovation.com",
      },
    },
  });

  return (
    <PageShell
      actions={[
        { label: "Email One Better", href: supportHref },
        { label: "One Better home", href: "/one-better", variant: "secondary" },
      ]}
      description={description}
      eyebrow="One Better"
      title="Help & Support"
    >
      <section className="bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-[1200px] gap-8 lg:grid-cols-[1fr_0.38fr] lg:items-start">
          <div className="rounded-[20px] border border-slate-200 bg-white p-8 lg:p-10">
            <div className="space-y-7">
              {oneBetterSupportQuestions.map((item) => (
                <article className="border-b border-slate-100 pb-7 last:border-0 last:pb-0" key={item.question}>
                  <h2 className="text-[19px] font-extrabold tracking-[-0.02em] text-navy">
                    {item.question}
                  </h2>
                  <p className="mt-3 text-[15px] leading-[1.7] text-slate-600">
                    {item.answer}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <aside className="space-y-4">
            <div className="rounded-[20px] border border-emerald-100 bg-emerald-50 p-6">
              <div className="text-[12px] font-bold uppercase tracking-[0.08em] text-emerald-700">
                Contact
              </div>
              <h2 className="mt-3 text-[20px] font-extrabold text-navy">
                Tell us what happened.
              </h2>
              <p className="mt-3 text-[14px] leading-[1.65] text-slate-600">
                Share a problem, question, or improvement idea. Your email app will open a draft for you to review before sending.
              </p>
              <Link
                className="mt-5 inline-flex w-full items-center justify-center rounded-[10px] bg-[#327955] px-5 py-3 text-[13px] font-bold text-white hover:-translate-y-px hover:bg-[#286446]"
                href={supportHref}
              >
                hello@abzalinnovation.com
              </Link>
            </div>

            <div className="rounded-[20px] border border-slate-200 bg-white p-6">
              <div className="text-[12px] font-bold uppercase tracking-[0.08em] text-slate-400">
                App documents
              </div>
              <div className="mt-4 flex flex-col gap-3">
                <Link className="text-[14px] font-bold text-[#327955]" href="/one-better/privacy">
                  Privacy policy →
                </Link>
                <Link className="text-[14px] font-bold text-[#327955]" href="/one-better/terms">
                  Terms of use →
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </PageShell>
  );
}
