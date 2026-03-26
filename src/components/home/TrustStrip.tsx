import { trustMarks } from "../../data/homepageContent";

export default function TrustStrip() {
  return (
    <section className="px-6 py-10 sm:px-8 lg:px-8 lg:py-12" id="trust">
      <div className="mx-auto max-w-[1120px]">
        <div className="divider-fade mb-10" />
        <div className="text-center">
          <div className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-text-muted">
            Trusted By
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
          {trustMarks.map((mark) => (
            <div
              className="flex items-center gap-3 rounded-xl border border-slate-200/60 bg-white px-4 py-3.5 shadow-card"
              key={mark.name}
            >
              <span
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
                style={{ backgroundColor: `${mark.accent}10`, color: mark.accent }}
              >
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M12 4l6.8 3.8V12c0 4.2-2.8 7.5-6.8 8.9C8 19.5 5.2 16.2 5.2 12V7.8L12 4z"
                    fill="currentColor"
                    opacity="0.2"
                  />
                  <path
                    d="M9.2 12.1l1.9 1.9 3.8-4"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </span>
              <div>
                <div className="text-[0.86rem] font-semibold text-navy">{mark.name}</div>
                <div className="text-[0.72rem] text-text-muted">{mark.descriptor}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
