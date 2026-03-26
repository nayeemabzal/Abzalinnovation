import { useState } from "react";
import Link from "../components/site/Link";
import PageShell from "../components/site/PageShell";
import { solutions } from "../data/homepageContent";
import { contactMethods, inquiryCategories } from "../data/siteContent";

type FormState = "idle" | "submitting" | "success" | "error";

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function Contact() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const newErrors: Record<string, string> = {};

    if (!data.get("name")?.toString().trim()) newErrors.name = "Name is required.";
    if (!data.get("email")?.toString().trim()) newErrors.email = "Email is required.";
    else if (!validateEmail(data.get("email")!.toString())) newErrors.email = "Enter a valid email.";
    if (!data.get("message")?.toString().trim()) newErrors.message = "Message is required.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setFormState("submitting");

    // Simulate form submission (replace with actual endpoint)
    setTimeout(() => {
      setFormState("success");
      form.reset();
    }, 1200);
  }

  return (
    <PageShell
      actions={[
        { label: "Send a Message", href: "#contact-form" },
        { label: "View Products", href: "/products", variant: "secondary" },
      ]}
      description="Reach out for product questions, demo requests, municipal inquiries, partnerships, or general questions. We'll help point you in the right direction."
      eyebrow="Contact"
      title="Start a conversation with the Abzal team."
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Form */}
        <section
          className="rounded-xl border border-slate-200/60 bg-white p-5 shadow-card"
          id="contact-form"
        >
          {formState === "success" ? (
            <div className="flex flex-col items-center justify-center py-10 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10">
                <svg className="h-7 w-7 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="mt-4 text-[1.3rem] font-extrabold tracking-[-0.04em] text-navy">
                Message sent.
              </h2>
              <p className="mt-2 max-w-[20rem] text-[0.88rem] leading-6 text-text-secondary">
                Thanks for reaching out. We'll get back to you within one business day.
              </p>
              <button
                className="mt-5 inline-flex items-center justify-center rounded-xl bg-slate-50 px-4 py-2 text-[0.84rem] font-bold text-navy hover:bg-blue-500/8"
                onClick={() => setFormState("idle")}
                type="button"
              >
                Send another message
              </button>
            </div>
          ) : (
            <>
              <div className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-text-muted">
                Send a Message
              </div>
              <h2 className="mt-1.5 text-[1.3rem] font-extrabold tracking-[-0.04em] text-navy">
                Tell us about your team and what you need.
              </h2>

              <form className="mt-5 grid gap-3 md:grid-cols-2" onSubmit={handleSubmit} noValidate>
                <label className="block">
                  <span className="mb-1.5 block text-[0.78rem] font-semibold text-navy">Name *</span>
                  <input
                    className={`w-full rounded-xl border px-3.5 py-2.5 text-[0.88rem] text-navy outline-none transition-colors bg-slate-50 focus:border-blue-500/40 ${errors.name ? "border-red-400" : "border-slate-200"}`}
                    name="name"
                    placeholder="Your full name"
                    type="text"
                  />
                  {errors.name && <span className="mt-1 block text-[0.76rem] text-red-500">{errors.name}</span>}
                </label>

                <label className="block">
                  <span className="mb-1.5 block text-[0.78rem] font-semibold text-navy">Company</span>
                  <input
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-[0.88rem] text-navy outline-none transition-colors focus:border-blue-500/40"
                    name="company"
                    placeholder="Company or organization"
                    type="text"
                  />
                </label>

                <label className="block">
                  <span className="mb-1.5 block text-[0.78rem] font-semibold text-navy">Email *</span>
                  <input
                    className={`w-full rounded-xl border px-3.5 py-2.5 text-[0.88rem] text-navy outline-none transition-colors bg-slate-50 focus:border-blue-500/40 ${errors.email ? "border-red-400" : "border-slate-200"}`}
                    name="email"
                    placeholder="name@company.com"
                    type="email"
                  />
                  {errors.email && <span className="mt-1 block text-[0.76rem] text-red-500">{errors.email}</span>}
                </label>

                <label className="block">
                  <span className="mb-1.5 block text-[0.78rem] font-semibold text-navy">Phone (Optional)</span>
                  <input
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-[0.88rem] text-navy outline-none transition-colors focus:border-blue-500/40"
                    name="phone"
                    placeholder="(555) 000-0000"
                    type="tel"
                  />
                </label>

                <label className="block">
                  <span className="mb-1.5 block text-[0.78rem] font-semibold text-navy">Inquiry Type</span>
                  <select className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-[0.88rem] text-navy outline-none transition-colors focus:border-blue-500/40" name="inquiry">
                    {inquiryCategories.map((cat) => (
                      <option key={cat.label}>{cat.label}</option>
                    ))}
                  </select>
                </label>

                <label className="block">
                  <span className="mb-1.5 block text-[0.78rem] font-semibold text-navy">Product of Interest</span>
                  <select className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-[0.88rem] text-navy outline-none transition-colors focus:border-blue-500/40" name="product">
                    <option>Not sure yet</option>
                    {solutions.map((s) => (
                      <option key={s.id}>{s.name}</option>
                    ))}
                  </select>
                </label>

                <label className="block md:col-span-2">
                  <span className="mb-1.5 block text-[0.78rem] font-semibold text-navy">Message *</span>
                  <textarea
                    className={`min-h-[120px] w-full rounded-xl border px-3.5 py-2.5 text-[0.88rem] text-navy outline-none transition-colors bg-slate-50 focus:border-blue-500/40 ${errors.message ? "border-red-400" : "border-slate-200"}`}
                    name="message"
                    placeholder="Share context about your team, trade, or what you'd like to discuss."
                  />
                  {errors.message && <span className="mt-1 block text-[0.76rem] text-red-500">{errors.message}</span>}
                </label>

                <div className="md:col-span-2">
                  <button
                    className="inline-flex items-center justify-center rounded-xl bg-navy px-5 py-2.5 text-[0.86rem] font-semibold text-white shadow-sm hover:bg-navy/90 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
                    disabled={formState === "submitting"}
                    type="submit"
                  >
                    {formState === "submitting" ? (
                      <>
                        <svg className="mr-2 h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      "Send Inquiry"
                    )}
                  </button>
                </div>
              </form>
            </>
          )}
        </section>

        {/* Sidebar */}
        <div className="space-y-4">
          <section className="rounded-xl border border-slate-200/60 bg-white p-5 shadow-card">
            <div className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-text-muted">
              Direct Contact
            </div>
            <div className="mt-3 space-y-3">
              {contactMethods.map((method) => (
                <a
                  className="block rounded-xl border border-slate-200/40 bg-slate-50 px-3.5 py-3 transition-colors hover:border-slate-200"
                  href={method.href}
                  key={method.label}
                >
                  <div className="text-[0.7rem] font-semibold uppercase tracking-wider text-text-muted">
                    {method.label}
                  </div>
                  <div className="mt-1 text-[0.92rem] font-bold text-navy">{method.value}</div>
                  <p className="mt-1 text-[0.78rem] text-text-muted">{method.detail}</p>
                </a>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-slate-200/60 bg-white p-5 shadow-card">
            <div className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-text-muted">
              Quick Links
            </div>
            <div className="mt-3 space-y-2">
              <Link className="flex items-center justify-between rounded-xl border border-slate-200/40 bg-slate-50 px-3.5 py-2.5 text-[0.86rem] font-semibold text-navy transition-colors hover:border-slate-200" href="/products">
                Explore Products <span className="text-text-muted">→</span>
              </Link>
              <Link className="flex items-center justify-between rounded-xl border border-slate-200/40 bg-slate-50 px-3.5 py-2.5 text-[0.86rem] font-semibold text-navy transition-colors hover:border-slate-200" href="/faq">
                Read the FAQ <span className="text-text-muted">→</span>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </PageShell>
  );
}
