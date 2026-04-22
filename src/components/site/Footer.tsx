import { footerGroups, socialLinks } from "../../data/siteContent";
import { BrandMark } from "./Header";
import Link from "./Link";

const launchLinks = [
  { label: "Open Volt", href: "https://volt.abzalinnovation.com", tone: "live" },
  { label: "Visit Atlas", href: "https://atlas.abzalinnovation.com", tone: "live" },
  { label: "Build Waitlist", href: "/contact", tone: "waitlist" },
  {
    label: "Get Updates",
    href: "mailto:hello@abzalinnovation.com?subject=Abzal%20Innovation%20Updates",
    tone: "updates",
  },
  {
    label: "Facebook",
    href: socialLinks[0].href,
    tone: "social",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-slate-50">
      <div className="mx-auto grid w-full max-w-[1120px] gap-8 px-6 py-10 lg:grid-cols-[1.3fr_repeat(3,minmax(0,1fr))] lg:px-8">
        <div className="max-w-[18rem]">
          <BrandMark compact />
          <p className="mt-3 text-[0.84rem] leading-6 text-text-muted">
            Purpose-built software for contractors, construction teams, and municipal land-use professionals.
          </p>
          <p className="mt-4 text-[0.74rem] font-semibold uppercase tracking-[0.12em] text-slate-500">
            Volt and Atlas are live now
          </p>
          <p className="mt-2 text-[0.8rem] leading-5 text-text-muted">
            Follow launches, demo availability, and product updates from the
            Abzal team.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {launchLinks.map((link) => (
              <Link
                className={`inline-flex items-center rounded-full px-3 py-1.5 text-[0.75rem] font-semibold transition-all ${
                  link.tone === "live"
                    ? "bg-white text-navy hover:-translate-y-px hover:shadow-[0_6px_16px_rgba(15,23,42,0.08)]"
                    : "border border-slate-200 bg-slate-50 text-slate-600 hover:border-slate-300 hover:bg-white"
                }`}
                href={link.href}
                key={link.label}
              >
                {link.label}
              </Link>
            ))}
          </div>
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
