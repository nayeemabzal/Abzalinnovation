import Link from "../components/site/Link";
import PageShell from "../components/site/PageShell";

export default function NotFound() {
  return (
    <PageShell
      actions={[
        { label: "Go Home", href: "/" },
        { label: "View Products", href: "/products", variant: "secondary" },
      ]}
      description="The page you're looking for doesn't exist or has been moved. Try navigating from the homepage or exploring our products."
      eyebrow="404"
      title="Page not found."
    >
      <section className="bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-[1200px]">
          <div className="rounded-[20px] border border-slate-200 bg-gradient-to-br from-white via-[#fafbff] to-[#f5f9ff] p-12 text-center lg:p-16">
            <div className="mx-auto max-w-[440px]">
              <div
                className="text-[96px] font-black leading-none tracking-[-0.06em]"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #0f172a 0%, #2563eb 50%, #0ea5e9 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                404
              </div>
              <h2 className="mt-4 text-[26px] font-extrabold tracking-[-0.025em] text-navy">
                This page doesn't exist.
              </h2>
              <p className="mt-3 text-[15px] leading-[1.65] text-slate-600">
                If you followed a link here, it may be outdated. Head back to
                the homepage or explore the product lineup.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link
                  className="inline-flex items-center justify-center rounded-[10px] bg-navy px-6 py-3 text-[14px] font-semibold text-white transition-all hover:-translate-y-px hover:bg-slate-800 hover:shadow-[0_6px_20px_rgba(15,23,42,0.2)]"
                  href="/"
                >
                  Back to Home
                </Link>
                <Link
                  className="inline-flex items-center justify-center rounded-[10px] border border-slate-200 bg-white px-6 py-3 text-[14px] font-semibold text-navy transition-all hover:border-slate-400"
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
