import { whyPoints } from "../../data/homepageContent";

const icons = [
  <svg key="target" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
  </svg>,
  <svg key="link" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
  </svg>,
  <svg key="tool" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
  </svg>,
];

export default function Capabilities() {
  return (
    <section className="px-6 py-14 sm:px-8 lg:px-8 lg:py-16 bg-dot-pattern" id="why">
      <div className="mx-auto max-w-[1120px]">
        <div className="max-w-[28rem]">
          <div className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-text-muted">
            Why Abzal Innovation
          </div>
          <h2 className="mt-2 text-[1.6rem] font-extrabold tracking-[-0.04em] text-navy">
            Built different, on purpose.
          </h2>
          <p className="mt-3 text-[0.9rem] leading-7 text-text-secondary">
            Generic platforms force your workflow into their structure. We build tools shaped by how the work actually runs.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3 stagger-children">
          {whyPoints.map((point, i) => (
            <article
              className="glow-card rounded-xl border border-slate-200/60 bg-white p-5 shadow-card"
              key={point.title}
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                {icons[i]}
              </span>
              <h3 className="mt-4 text-[0.98rem] font-semibold tracking-[-0.02em] text-navy">
                {point.title}
              </h3>
              <p className="mt-2 text-[0.86rem] leading-6 text-text-secondary">
                {point.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
