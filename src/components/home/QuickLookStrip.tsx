import Link from "../site/Link";

type PreviewTone = "blue" | "amber";

type LivePreview = {
  name: string;
  label: string;
  badge: string;
  description: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  tone: PreviewTone;
};

const livePreviews: LivePreview[] = [
  {
    name: "Abzal Volt",
    label: "Electrical operations",
    badge: "Live Now",
    description:
      "A quick look at the live Volt experience for electrical contractors managing estimates, jobs, and closeout in one place.",
    href: "https://volt.abzalinnovation.com",
    imageSrc: "/product-previews/volt-home.jpg",
    imageAlt: "Preview of the Abzal Volt website and dashboard experience.",
    tone: "blue",
  },
  {
    name: "Land Use Atlas",
    label: "Municipal intelligence",
    badge: "Live Now",
    description:
      "A quick look at the live Atlas workspace supporting parcel review, district workflows, and municipal land-use research.",
    href: "https://atlas.abzalinnovation.com",
    imageSrc: "/product-previews/atlas-home.jpg",
    imageAlt: "Preview of the Land Use Atlas workspace and review tools.",
    tone: "amber",
  },
];

const toneClasses: Record<PreviewTone, { badge: string; link: string }> = {
  blue: {
    badge: "border-blue-200 bg-blue-50 text-blue-700",
    link: "text-blue-600",
  },
  amber: {
    badge: "border-amber-200 bg-amber-50 text-amber-700",
    link: "text-amber-600",
  },
};

const buildSignals = [
  "Project-centered budgets and scheduling",
  "Cleaner field coordination for builders",
  "Waitlist open while the workflow takes shape",
];

export default function QuickLookStrip() {
  return (
    <section className="bg-slate-50 px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-10 max-w-[760px]">
          <div className="mb-3 text-[13px] font-bold uppercase tracking-[0.08em] text-blue-600">
            Quick Look
          </div>
          <h2 className="text-[36px] font-extrabold leading-[1.15] tracking-[-0.025em] text-navy">
            See the tools without turning this site into the demo.
          </h2>
          <p className="mt-3 text-[17px] leading-[1.65] text-slate-600">
            The company site stays high-level on purpose. These previews are
            here to show that the products are real, polished, and already in
            motion, while the deeper walkthroughs stay on each product&apos;s own
            page.
          </p>
        </div>

        <div className="grid gap-5 xl:grid-cols-[1fr_1fr_0.88fr]">
          {livePreviews.map((preview) => {
            const tone = toneClasses[preview.tone];

            return (
              <article
                key={preview.name}
                className="group overflow-hidden rounded-[22px] border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(15,23,42,0.08)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden border-b border-slate-100 bg-slate-100">
                  <img
                    alt={preview.imageAlt}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.015]"
                    loading="lazy"
                    src={preview.imageSrc}
                  />
                  <div className="absolute left-4 top-4">
                    <span
                      className={`inline-flex rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-[0.08em] backdrop-blur-sm ${tone.badge}`}
                    >
                      {preview.badge}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="text-[12px] font-bold uppercase tracking-[0.08em] text-slate-400">
                    {preview.label}
                  </div>
                  <h3 className="mt-2 text-[24px] font-extrabold tracking-[-0.02em] text-navy">
                    {preview.name}
                  </h3>
                  <p className="mt-3 text-[14px] leading-[1.65] text-slate-600">
                    {preview.description}
                  </p>
                  <Link
                    className={`mt-5 inline-flex items-center gap-1 text-[14px] font-semibold transition-all group-hover:gap-2 ${tone.link}`}
                    href={preview.href}
                  >
                    Visit live site <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            );
          })}

          <aside
            className="rounded-[22px] border border-slate-200 p-6"
            style={{
              background:
                "linear-gradient(165deg, rgba(255,255,255,1) 0%, rgba(247,250,255,1) 55%, rgba(240,247,255,1) 100%)",
            }}
          >
            <div className="text-[12px] font-bold uppercase tracking-[0.08em] text-emerald-600">
              Build Waitlist
            </div>
            <h3 className="mt-2 text-[28px] font-extrabold leading-[1.1] tracking-[-0.03em] text-navy">
              Keep the main site company-first.
            </h3>
            <p className="mt-4 text-[15px] leading-[1.7] text-slate-600">
              Build is part of the story, but the deeper product walkthroughs
              belong on the product pages. Here, we just give people enough
              proof to trust what Abzal is building.
            </p>

            <div className="mt-6 overflow-hidden rounded-[18px] border border-emerald-100 bg-white shadow-[0_12px_30px_rgba(15,23,42,0.05)]">
              <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.08em] text-slate-400">
                    In Progress
                  </div>
                  <div className="mt-1 text-[15px] font-bold text-navy">
                    Abzal Build
                  </div>
                </div>
                <span className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.06em] text-emerald-700">
                  Waitlist Open
                </span>
              </div>
              <div className="space-y-3 px-4 py-4">
                <div className="rounded-[12px] border border-slate-100 bg-slate-50 px-3 py-3">
                  <div className="mb-2 h-2.5 w-24 rounded-full bg-slate-200" />
                  <div className="grid grid-cols-3 gap-2">
                    <div className="h-12 rounded-[10px] bg-emerald-100/70" />
                    <div className="h-12 rounded-[10px] bg-slate-200/70" />
                    <div className="h-12 rounded-[10px] bg-blue-100/70" />
                  </div>
                </div>
                <div className="rounded-[12px] border border-slate-100 bg-slate-50 px-3 py-3">
                  <div className="mb-2 h-2.5 w-20 rounded-full bg-slate-200" />
                  <div className="space-y-2">
                    <div className="h-2.5 w-full rounded-full bg-slate-200/80" />
                    <div className="h-2.5 w-[82%] rounded-full bg-slate-200/80" />
                    <div className="h-2.5 w-[64%] rounded-full bg-slate-200/80" />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 space-y-3">
              {buildSignals.map((signal) => (
                <div className="flex items-start gap-3" key={signal}>
                  <span className="mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                    <svg
                      className="h-3 w-3"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  <span className="text-[14px] leading-[1.6] text-slate-600">
                    {signal}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                className="inline-flex items-center justify-center rounded-[10px] bg-navy px-4 py-2.5 text-[13px] font-semibold text-white transition-all hover:-translate-y-px hover:bg-slate-800"
                href="/contact"
              >
                Join Build waitlist
              </Link>
              <Link
                className="inline-flex items-center justify-center rounded-[10px] border border-slate-200 bg-white px-4 py-2.5 text-[13px] font-semibold text-navy transition-all hover:border-slate-300"
                href="/products"
              >
                View product lineup
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
