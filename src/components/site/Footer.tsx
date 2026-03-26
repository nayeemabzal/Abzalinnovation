import { footerGroups } from "../../data/siteContent";
import { BrandMark } from "./Header";
import Link from "./Link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-slate-50">
      <div className="mx-auto grid w-full max-w-[1120px] gap-8 px-6 py-10 lg:grid-cols-[1.3fr_repeat(3,minmax(0,1fr))] lg:px-8">
        <div className="max-w-[18rem]">
          <BrandMark compact label="Abzal Innovation" />
          <p className="mt-3 text-[0.84rem] leading-6 text-text-muted">
            Purpose-built software for contractors, construction teams, and municipal land-use professionals.
          </p>
        </div>

        {footerGroups.map((group) => (
          <div key={group.title}>
            <h2 className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-text-muted">
              {group.title}
            </h2>
            <div className="mt-3 flex flex-col gap-2 text-[0.86rem] text-text-secondary">
              {group.links.map((link) => (
                <Link className="hover:text-navy transition-colors" href={link.href} key={link.label}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-slate-200/60">
        <div className="mx-auto flex w-full max-w-[1120px] items-center justify-between px-6 py-3 text-[0.76rem] text-text-muted lg:px-8">
          <div>&copy; {new Date().getFullYear()} Abzal Innovation. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
