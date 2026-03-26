import type { Solution } from "../../data/homepageContent";
import { solutions } from "../../data/homepageContent";
import Link from "../site/Link";

function SolutionIcon({ icon, accent }: { icon: Solution["icon"]; accent: string }) {
  const icons = {
    bolt: (
      <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="white">
        <path d="M13 2L5 13h5l-1 9 10-13h-6l1-7z" />
      </svg>
    ),
    hardhat: (
      <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="white">
        <path d="M4.5 12.2l3-4.7h9l3 4.7v5.3h-15v-5.3z" />
        <path d="M8 5.8A4 4 0 0116 5.8v.7H8v-.7z" opacity="0.7" />
      </svg>
    ),
    map: (
      <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="white">
        <path d="M12 3.2c4 0 7 3.1 7 7.1 0 4.5-5 9.5-7 10.5-2-1-7-6-7-10.5 0-4 3-7.1 7-7.1z" />
        <circle cx="12" cy="10.5" r="2.6" fill="white" opacity="0.5" />
      </svg>
    ),
  };

  return (
    <span
      className="flex h-9 w-9 items-center justify-center rounded-lg"
      style={{ backgroundColor: accent }}
    >
      {icons[icon]}
    </span>
  );
}

function SolutionCard({ solution }: { solution: Solution }) {
  return (
    <article className="group glow-card rounded-xl border border-slate-200/60 bg-white p-5 shadow-card">
      <div className="flex items-center gap-3">
        <SolutionIcon accent={solution.accent} icon={solution.icon} />
        <div>
          <h3 className="text-[1.05rem] font-semibold tracking-[-0.02em] text-navy">
            {solution.name}
          </h3>
          <div className="text-[0.74rem] font-medium text-text-muted">{solution.tagline}</div>
        </div>
      </div>

      <p className="mt-3 flex-1 text-[0.86rem] leading-6 text-text-secondary">
        {solution.description}
      </p>

      <Link
        className="mt-4 inline-flex items-center gap-1.5 text-[0.84rem] font-semibold text-blue-600 group-hover:text-blue-700"
        href={solution.href}
      >
        Learn more
        <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">→</span>
      </Link>
    </article>
  );
}

export default function ProductGrid() {
  return (
    <section className="relative z-20 px-6 pt-4 sm:px-8 lg:px-8" id="solutions">
      <div className="mx-auto max-w-[1120px]">
        <div className="mb-6">
          <div className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-text-muted">
            Our Products
          </div>
          <h2 className="mt-2 text-[1.6rem] font-extrabold tracking-[-0.04em] text-navy">
            Purpose-built tools for every stage of the work.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3 stagger-children">
          {solutions.map((solution) => (
            <SolutionCard key={solution.id} solution={solution} />
          ))}
        </div>
      </div>
    </section>
  );
}
