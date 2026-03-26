import type { ReactNode } from "react";
import { useState } from "react";
import { productLinks, siteNavigation } from "../../data/siteContent";
import { solutions } from "../../data/homepageContent";
import { getPathname } from "../../router";
import Link from "./Link";

type BrandMarkProps = {
  compact?: boolean;
  dark?: boolean;
  label?: string;
};

export function BrandMark({
  compact = false,
  dark = true,
  label = "Abzal Innovation",
}: BrandMarkProps) {
  const textTone = dark ? "text-navy" : "text-white";
  const ringTone = dark ? "border-slate-200 bg-white shadow-sm" : "border-white/16 bg-white/10";

  return (
    <Link className="flex items-center gap-2.5" href="/">
      <span
        className={`flex items-center justify-center rounded-lg border ${
          compact ? "h-7 w-7" : "h-8 w-8"
        } ${ringTone}`}
      >
        <svg
          aria-hidden="true"
          className={`${compact ? "h-3.5 w-3.5" : "h-4 w-4"} ${textTone}`}
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            d="M5.5 16.75L9.3 8.8a3 3 0 015.4 0l3.8 7.95M8 14.7h8"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.35"
          />
        </svg>
      </span>
      <span
        className={`font-semibold tracking-[-0.03em] ${textTone} ${
          compact ? "text-[0.88rem]" : "text-[1.05rem]"
        }`}
      >
        {label}
      </span>
    </Link>
  );
}

function ProductDropdown({ open }: { open: boolean }) {
  if (!open) return null;

  const icons: Record<string, ReactNode> = {
    bolt: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13 2L5 13h5l-1 9 10-13h-6l1-7z" />
      </svg>
    ),
    hardhat: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4.5 12.2l3-4.7h9l3 4.7v5.3h-15v-5.3z" />
        <path d="M8 5.8A4 4 0 0116 5.8v.7H8v-.7z" opacity="0.65" />
      </svg>
    ),
    map: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 3.2c4 0 7 3.1 7 7.1 0 4.5-5 9.5-7 10.5-2-1-7-6-7-10.5 0-4 3-7.1 7-7.1z" />
        <circle cx="12" cy="10.5" r="2.6" fill="white" opacity="0.6" />
      </svg>
    ),
  };

  return (
    <div className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-2">
      <div className="w-[320px] rounded-xl border border-slate-200 bg-white p-1.5 shadow-elevated">
        {solutions.map((s) => (
          <Link
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-slate-50"
            href={s.href}
            key={s.id}
          >
            <span
              className="flex h-8 w-8 items-center justify-center rounded-lg text-white"
              style={{ backgroundColor: s.accent }}
            >
              {icons[s.icon]}
            </span>
            <div>
              <div className="text-[0.84rem] font-semibold text-navy">{s.name}</div>
              <div className="text-[0.74rem] text-text-muted">{s.tagline}</div>
            </div>
          </Link>
        ))}
        <div className="mt-1 border-t border-slate-100 pt-1">
          <Link
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-[0.8rem] font-medium text-text-muted hover:text-navy"
            href="/products"
          >
            View all products <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

function isActiveLink(href: string, pathname: string) {
  if (href === "/products") {
    return ["/products", "/volt", "/build", "/atlas"].includes(pathname);
  }
  return pathname === href;
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const pathname = getPathname();

  return (
    <header className="relative z-30">
      <a
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-navy focus:shadow-elevated"
        href="#main-content"
      >
        Skip to content
      </a>

      <div className="mx-auto flex w-full max-w-[1120px] items-center justify-between gap-4 px-6 py-4 lg:px-8">
        <BrandMark />

        <nav aria-label="Main navigation" className="hidden items-center gap-0.5 lg:flex">
          {siteNavigation.map((link) => {
            const active = isActiveLink(link.href, pathname);
            const isProducts = link.label === "Products";

            return (
              <div
                className="relative"
                key={link.label}
                onMouseEnter={() => isProducts && setProductsOpen(true)}
                onMouseLeave={() => isProducts && setProductsOpen(false)}
              >
                <Link
                  className={`inline-flex items-center gap-1 rounded-lg px-3 py-1.5 text-[0.88rem] font-medium transition-colors ${
                    active ? "text-navy" : "text-text-secondary hover:text-navy"
                  }`}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                >
                  {link.label}
                  {isProducts && (
                    <svg className={`h-3.5 w-3.5 opacity-50 transition-transform ${productsOpen ? "rotate-180" : ""}`} viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                    </svg>
                  )}
                </Link>
                {isProducts && <ProductDropdown open={productsOpen} />}
              </div>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            className="hidden items-center justify-center rounded-xl bg-navy px-4 py-2 text-[0.84rem] font-semibold text-white shadow-sm hover:bg-navy/90 sm:inline-flex"
            href="/contact"
          >
            Request a Demo
          </Link>

          <button
            aria-controls="mobile-site-nav"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-navy lg:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            type="button"
          >
            <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
              ) : (
                <path d="M5 8.5h14M5 12h14M5 15.5h14" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="px-6 pb-3 lg:hidden">
          <div
            className="mx-auto w-full max-w-[1120px] rounded-xl border border-slate-200 bg-white p-3 shadow-elevated animate-slide-down"
            id="mobile-site-nav"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <nav className="flex flex-col gap-0.5">
              {siteNavigation.map((link) => {
                const active = isActiveLink(link.href, pathname);
                return (
                  <Link
                    className={`rounded-lg px-3 py-2 text-[0.88rem] font-semibold ${
                      active ? "bg-slate-50 text-navy" : "text-text-secondary"
                    }`}
                    href={link.href}
                    key={link.label}
                    onClick={() => setMobileOpen(false)}
                    aria-current={active ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="mt-1 border-t border-slate-100 pt-2">
                <div className="px-3 pb-1 text-[0.72rem] font-semibold uppercase tracking-wider text-text-muted">Products</div>
                {productLinks.map((link) => (
                  <Link
                    className="block rounded-lg px-3 py-1.5 text-[0.86rem] font-medium text-text-secondary hover:text-navy"
                    href={link.href}
                    key={link.label}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </nav>
            <Link
              className="mt-2 flex w-full items-center justify-center rounded-xl bg-navy px-4 py-2.5 text-[0.84rem] font-semibold text-white sm:hidden"
              href="/contact"
              onClick={() => setMobileOpen(false)}
            >
              Request a Demo
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
