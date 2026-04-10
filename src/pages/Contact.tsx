import { useState } from "react";
import Link from "../components/site/Link";
import PageShell from "../components/site/PageShell";
import { solutions } from "../data/homepageContent";
import { contactMethods, inquiryCategories, socialLinks } from "../data/siteContent";

type FormState = "idle" | "submitting" | "success" | "error";

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const inputBase =
  "w-full rounded-[10px] border bg-white px-4 py-3 text-[14px] text-navy outline-none transition-colors placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10";
const contactFormEndpoint = "https://formsubmit.co/ajax/abzalelectric@gmail.com";
const contactFormSubject = "New Abzal Innovation website inquiry";

export default function Contact() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const newErrors: Record<string, string> = {};

    if (!data.get("name")?.toString().trim()) newErrors.name = "Name is required.";
    if (!data.get("email")?.toString().trim()) newErrors.email = "Email is required.";
    else if (!validateEmail(data.get("email")!.toString()))
      newErrors.email = "Enter a valid email.";
    if (!data.get("message")?.toString().trim()) newErrors.message = "Message is required.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setFormState("submitting");

    data.append("_subject", contactFormSubject);
    data.append("_template", "table");
    data.append("_url", window.location.href);
    data.append("_replyto", data.get("email")?.toString() ?? "");

    try {
      const response = await fetch(contactFormEndpoint, {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Unable to submit form");
      }

      setFormState("success");
      form.reset();
    } catch {
      setFormState("error");
    }
  }

  return (
    <PageShell
      actions={[
        { label: "Send a Message", href: "#contact-form" },
        { label: "View Products", href: "/products", variant: "secondary" },
      ]}
      description="Reach out for product questions, demo requests, municipal inquiries, partnerships, or general questions. We'll point you in the right direction."
      eyebrow="Contact"
      title="Start a conversation with the Abzal team."
    >
      <section className="bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            {/* Form */}
            <div
              className="rounded-[20px] border border-slate-200 bg-white p-8 lg:p-10"
              id="contact-form"
            >
              {formState === "success" ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50">
                    <svg
                      className="h-8 w-8 text-emerald-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="mt-5 text-[28px] font-extrabold tracking-[-0.025em] text-navy">
                    Message sent.
                  </h2>
                  <p className="mt-3 max-w-[380px] text-[15px] leading-[1.6] text-slate-600">
                    Thanks for reaching out. We'll get back to you within one
                    business day.
                  </p>
                  <button
                    className="mt-6 inline-flex items-center justify-center rounded-[10px] border border-slate-200 bg-white px-5 py-2.5 text-[14px] font-semibold text-navy transition-all hover:border-slate-400"
                    onClick={() => setFormState("idle")}
                    type="button"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <div className="text-[13px] font-bold uppercase tracking-[0.08em] text-blue-600">
                    Send a Message
                  </div>
                  <h2 className="mt-2 text-[26px] font-extrabold tracking-[-0.025em] text-navy">
                    Tell us about your team and what you need.
                  </h2>

                  <form className="mt-7 grid gap-4 md:grid-cols-2" onSubmit={handleSubmit} noValidate>
                    <input
                      aria-hidden="true"
                      autoComplete="off"
                      className="hidden"
                      name="_honey"
                      tabIndex={-1}
                      type="text"
                    />
                    <label className="block">
                      <span className="mb-2 block text-[12px] font-bold uppercase tracking-wider text-slate-500">
                        Name *
                      </span>
                      <input
                        className={`${inputBase} ${errors.name ? "border-red-400" : "border-slate-200"}`}
                        name="name"
                        placeholder="Your full name"
                        type="text"
                      />
                      {errors.name && (
                        <span className="mt-1 block text-[12px] text-red-500">{errors.name}</span>
                      )}
                    </label>

                    <label className="block">
                      <span className="mb-2 block text-[12px] font-bold uppercase tracking-wider text-slate-500">
                        Company
                      </span>
                      <input
                        className={`${inputBase} border-slate-200`}
                        name="company"
                        placeholder="Company or organization"
                        type="text"
                      />
                    </label>

                    <label className="block">
                      <span className="mb-2 block text-[12px] font-bold uppercase tracking-wider text-slate-500">
                        Email *
                      </span>
                      <input
                        className={`${inputBase} ${errors.email ? "border-red-400" : "border-slate-200"}`}
                        name="email"
                        placeholder="name@company.com"
                        type="email"
                      />
                      {errors.email && (
                        <span className="mt-1 block text-[12px] text-red-500">{errors.email}</span>
                      )}
                    </label>

                    <label className="block">
                      <span className="mb-2 block text-[12px] font-bold uppercase tracking-wider text-slate-500">
                        Phone
                      </span>
                      <input
                        className={`${inputBase} border-slate-200`}
                        name="phone"
                        placeholder="(555) 000-0000"
                        type="tel"
                      />
                    </label>

                    <label className="block">
                      <span className="mb-2 block text-[12px] font-bold uppercase tracking-wider text-slate-500">
                        Inquiry Type
                      </span>
                      <select className={`${inputBase} border-slate-200`} name="inquiry">
                        {inquiryCategories.map((cat) => (
                          <option key={cat.label}>{cat.label}</option>
                        ))}
                      </select>
                    </label>

                    <label className="block">
                      <span className="mb-2 block text-[12px] font-bold uppercase tracking-wider text-slate-500">
                        Product of Interest
                      </span>
                      <select className={`${inputBase} border-slate-200`} name="product">
                        <option>Not sure yet</option>
                        {solutions.map((s) => (
                          <option key={s.id}>{s.name}</option>
                        ))}
                      </select>
                    </label>

                    <label className="block md:col-span-2">
                      <span className="mb-2 block text-[12px] font-bold uppercase tracking-wider text-slate-500">
                        Message *
                      </span>
                      <textarea
                        className={`${inputBase} min-h-[140px] resize-y ${errors.message ? "border-red-400" : "border-slate-200"}`}
                        name="message"
                        placeholder="Share context about your team, trade, or what you'd like to discuss."
                      />
                      {errors.message && (
                        <span className="mt-1 block text-[12px] text-red-500">{errors.message}</span>
                      )}
                    </label>

                    <div className="md:col-span-2">
                      {formState === "error" && (
                        <div className="mb-4 rounded-[12px] border border-red-200 bg-red-50 px-4 py-3 text-[13px] leading-[1.6] text-red-700">
                          We couldn't send your message right now. Please try again in a moment, or email us directly.
                        </div>
                      )}
                      <button
                        className="inline-flex items-center justify-center rounded-[10px] bg-navy px-6 py-3 text-[14px] font-semibold text-white transition-all hover:-translate-y-px hover:bg-slate-800 hover:shadow-[0_6px_20px_rgba(15,23,42,0.2)] disabled:cursor-not-allowed disabled:opacity-60"
                        disabled={formState === "submitting"}
                        type="submit"
                      >
                        {formState === "submitting" ? (
                          <>
                            <svg className="mr-2 h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              />
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                              />
                            </svg>
                            Sending...
                          </>
                        ) : (
                          "Send Inquiry"
                        )}
                      </button>
                      <p className="mt-3 text-[13px] leading-[1.6] text-slate-500">
                        Your inquiry will be delivered directly to the Abzal team.
                      </p>
                    </div>
                  </form>
                </>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              <div className="rounded-[20px] border border-slate-200 bg-white p-8">
                <div className="text-[13px] font-bold uppercase tracking-[0.08em] text-blue-600">
                  Direct Contact
                </div>
                <div className="mt-5 space-y-3">
                  {contactMethods.map((method) => (
                    <a
                      className="block rounded-[12px] border border-slate-100 bg-slate-50 p-4 transition-all hover:-translate-y-px hover:border-slate-200 hover:bg-white hover:shadow-[0_4px_14px_rgba(15,23,42,0.04)]"
                      href={method.href}
                      key={method.label}
                    >
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        {method.label}
                      </div>
                      <div className="mt-1 text-[15px] font-bold text-navy">
                        {method.value}
                      </div>
                      <p className="mt-1 text-[13px] leading-[1.5] text-slate-500">
                        {method.detail}
                      </p>
                    </a>
                  ))}
                </div>
              </div>

              <div className="rounded-[20px] border border-slate-200 bg-white p-8">
                <div className="text-[13px] font-bold uppercase tracking-[0.08em] text-blue-600">
                  Live & Upcoming
                </div>
                <div className="mt-5 space-y-3">
                  <div className="rounded-[12px] border border-blue-100 bg-blue-50 p-4">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-blue-600">
                      Live Now
                    </div>
                    <p className="mt-1 text-[14px] font-semibold text-navy">
                      Abzal Volt
                    </p>
                  </div>
                  <div className="rounded-[12px] border border-amber-100 bg-amber-50 p-4">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-amber-600">
                      Live Now
                    </div>
                    <p className="mt-1 text-[14px] font-semibold text-navy">
                      Land Use Atlas for the Town of Glenville
                    </p>
                  </div>
                  <div className="rounded-[12px] border border-emerald-100 bg-emerald-50 p-4">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-600">
                      Opening Soon
                    </div>
                    <p className="mt-1 text-[14px] font-semibold text-navy">
                      Abzal Build waitlist is open
                    </p>
                  </div>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  <Link
                    className="inline-flex items-center justify-center rounded-[10px] bg-navy px-4 py-2 text-[13px] font-semibold text-white transition-all hover:-translate-y-px hover:bg-slate-800"
                    href="https://volt.abzalinnovation.com"
                  >
                    Open Volt
                  </Link>
                  <Link
                    className="inline-flex items-center justify-center rounded-[10px] border border-slate-200 bg-white px-4 py-2 text-[13px] font-semibold text-navy transition-all hover:border-slate-400"
                    href="https://atlas.abzalinnovation.com"
                  >
                    Visit Atlas
                  </Link>
                  <Link
                    className="inline-flex items-center justify-center rounded-[10px] border border-slate-200 bg-white px-4 py-2 text-[13px] font-semibold text-navy transition-all hover:border-slate-400"
                    href="/build"
                  >
                    Build Details
                  </Link>
                </div>
              </div>

              <div className="rounded-[20px] border border-slate-200 bg-white p-8">
                <div className="text-[13px] font-bold uppercase tracking-[0.08em] text-blue-600">
                  Quick Links
                </div>
                <div className="mt-5 space-y-2">
                  <Link
                    className="flex items-center justify-between rounded-[12px] border border-slate-100 bg-slate-50 px-4 py-3 text-[14px] font-semibold text-navy transition-all hover:border-slate-200 hover:bg-white"
                    href="/products"
                  >
                    Explore Products <span className="text-slate-400">→</span>
                  </Link>
                  <Link
                    className="flex items-center justify-between rounded-[12px] border border-slate-100 bg-slate-50 px-4 py-3 text-[14px] font-semibold text-navy transition-all hover:border-slate-200 hover:bg-white"
                    href="/faq"
                  >
                    Read the FAQ <span className="text-slate-400">→</span>
                  </Link>
                </div>
              </div>

              <div className="rounded-[20px] border border-slate-200 bg-white p-8">
                <div className="text-[13px] font-bold uppercase tracking-[0.08em] text-blue-600">
                  Follow Abzal
                </div>
                <div className="mt-5 space-y-3">
                  {socialLinks.map((social) => (
                    <Link
                      className="block rounded-[12px] border border-slate-100 bg-slate-50 p-4 transition-all hover:-translate-y-px hover:border-slate-200 hover:bg-white hover:shadow-[0_4px_14px_rgba(15,23,42,0.04)]"
                      href={social.href}
                      key={social.label}
                    >
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        {social.label}
                      </div>
                      <div className="mt-1 text-[15px] font-bold text-navy">
                        {social.handle}
                      </div>
                      <p className="mt-1 text-[13px] leading-[1.5] text-slate-500">
                        {social.detail}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
