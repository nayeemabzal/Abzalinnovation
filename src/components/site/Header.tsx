import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import abzalLogo from "../../assets/abzal-logo.jpg";
import { productLinks, siteNavigation } from "../../data/siteContent";
import { solutions } from "../../data/homepageContent";
import { getPathname } from "../../router";
import Link from "./Link";

type BrandMarkProps = {
  compact?: boolean;
  dark?: boolean;
};

export function BrandMark({ compact = false, dark = false }: BrandMarkProps) {
  const subTone = dark ? "text-slate-400" : "text-slate-500";

  return (
    <Link
      aria-label="Abzal Innovation home"
      className={`flex items-center ${compact ? "" : "gap-3"}`}
      href="/"
    >
      <span className="flex flex-col leading-none">
        <img
          alt="Abzal Innovation"
          className={`w-auto object-contain ${compact ? "h-11" : "h-9 sm:h-11"}`}
          draggable="false"
          src={abzalLogo}
        />
        {!compact && (
          <span className={`mt-0.5 hidden pl-0.5 text-[0.64rem] font-medium tracking-wide sm:block ${subTone}`}>
          Software for the teams that build everything
        </span>
        )}
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
    <div className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3">
      <div className="w-[320px] rounded-2xl border border-slate-200 bg-white p-2 shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
        {solutions.map((s) => (
          <Link
            className="flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-slate-50"
            href={s.href}
            key={s.id}
          >
            <span
              className="flex h-9 w-9 items-center justify-center rounded-[10px] text-white"
              style={{ backgroundColor: s.accent }}
            >
              {icons[s.icon]}
            </span>
            <div>
              <div className="text-[0.86rem] font-semibold text-navy">{s.name}</div>
              <div className="text-[0.74rem] text-slate-500">{s.tagline}</div>
            </div>
          </Link>
        ))}
        <div className="mt-1 border-t border-slate-100 pt-1">
          <Link
            className="arrow-link flex items-center gap-2 rounded-xl px-3 py-2 text-[0.8rem] font-semibold text-slate-500 hover:text-navy"
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
  const [scrolled, setScrolled] = useState(false);
  const pathname = getPathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-30 transition-[background-color,border-color,backdrop-filter] duration-300 ${
        scrolled
          ? "border-b border-slate-200/60 bg-white/92 backdrop-blur-[16px] backdrop-saturate-[180%]"
          : "border-b border-transparent bg-white/60 backdrop-blur-[12px]"
      }`}
    >
      <a
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-navy focus:shadow-elevated"
        href="#main-content"
      >
        Skip to content
      </a>

      <div className="mx-auto flex h-16 w-full max-w-[1200px] items-center justify-between gap-4 px-6 lg:px-8">
        <BrandMark />

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-1 rounded-full border border-slate-200 bg-white p-1 shadow-[0_1px_2px_rgba(15,23,42,0.03)] lg:flex"
        >
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
                  className={`inline-flex items-center gap-1 rounded-full px-4 py-[7px] text-[0.8rem] font-semibold transition-all ${
                    active
                      ? "bg-navy text-white"
                      : "text-slate-600 hover:bg-slate-50 hover:text-navy"
                  }`}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                >
                  {link.label}
                  {isProducts && (
                    <svg
                      className={`h-3 w-3 opacity-70 transition-transform ${productsOpen ? "rotate-180" : ""}`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
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
            className="hidden items-center justify-center rounded-[10px] bg-navy px-4 py-2 text-[0.82rem] font-semibold text-white transition-all hover:-translate-y-px hover:bg-slate-800 hover:shadow-[0_6px_20px_rgba(15,23,42,0.2)] sm:inline-flex"
            href="https://volt.abzalinnovation.com"
          >
            Open Volt
          </Link>

          <button
            aria-controls="mobile-site-nav"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            className="inline-flex h-9 w-9 items-center justify-center rounded-[10px] border border-slate-200 bg-white text-navy lg:hidden"
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
            className="mx-auto w-full max-w-[1200px] rounded-2xl border border-slate-200 bg-white p-3 shadow-[0_20px_60px_rgba(15,23,42,0.12)] animate-slide-down"
            id="mobile-site-nav"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <nav className="flex flex-col gap-0.5">
              {siteNavigation.map((link) => {
                const active = isActiveLink(link.href, pathname);
                return (
                  <Link
                    className={`rounded-xl px-3 py-2 text-[0.88rem] font-semibold ${
                      active ? "bg-slate-50 text-navy" : "text-slate-600"
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
                <div className="px-3 pb-1 text-[0.7rem] font-bold uppercase tracking-wider text-slate-400">
                  Products
                </div>
                {productLinks.map((link) => (
                  <Link
                    className="block rounded-xl px-3 py-1.5 text-[0.86rem] font-medium text-slate-600 hover:text-navy"
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
              className="mt-3 flex w-full items-center justify-center rounded-[10px] bg-navy px-4 py-2.5 text-[0.84rem] font-semibold text-white sm:hidden"
              href="https://volt.abzalinnovation.com"
              onClick={() => setMobileOpen(false)}
            >
              Open Volt
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
