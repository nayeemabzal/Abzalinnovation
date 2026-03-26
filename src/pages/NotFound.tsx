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
      <section className="rounded-xl border border-slate-200/60 bg-white p-6 shadow-card text-center">
        <div className="mx-auto max-w-[24rem]">
          <div className="text-[4rem] font-extrabold leading-none tracking-[-0.06em] text-slate-200">404</div>
          <p className="mt-3 text-[0.92rem] leading-6 text-text-secondary">
            This page doesn't exist. If you followed a link here, it may be outdated.
          </p>
          <div className="mt-5 flex justify-center gap-3">
            <Link
              className="inline-flex items-center justify-center rounded-xl bg-navy px-5 py-2.5 text-[0.86rem] font-semibold text-white shadow-sm hover:bg-navy/90"
              href="/"
            >
              Back to Home
            </Link>
            <Link
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-[0.86rem] font-semibold text-navy shadow-sm hover:bg-slate-50"
              href="/contact"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
