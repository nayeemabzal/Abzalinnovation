import { socialLinks } from "../../data/siteContent";
import Link from "../site/Link";

export default function CtaBand() {
  return (
    <section
      className="relative overflow-hidden px-6 py-20 lg:px-8"
      style={{
        background:
          "linear-gradient(145deg, #0f172a 0%, #111c34 50%, #172554 100%)",
      }}
      id="cta"
    >
      {/* Radial glow */}
      <div
        className="pointer-events-none absolute -right-[100px] -top-[100px] h-[400px] w-[400px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[620px] text-center text-white">
        <h2 className="text-[32px] font-extrabold leading-[1.12] tracking-[-0.025em] sm:text-[36px]">
          Start with a live product today.
        </h2>
        <p className="mx-auto mt-4 text-[16px] leading-[1.65] text-slate-400 sm:text-[17px]">
          Visit Volt for electrical operations, explore Atlas for municipal
          intelligence, or join the Build waitlist if that's the direction
          you're planning toward.
        </p>

        <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <Link
            className="inline-flex w-full items-center justify-center rounded-[10px] bg-white px-6 py-3 text-[14px] font-semibold text-navy transition-all hover:-translate-y-px hover:bg-slate-50 sm:w-auto"
            href="https://volt.abzalinnovation.com"
          >
            Visit Volt
          </Link>
          <Link
            className="inline-flex w-full items-center justify-center rounded-[10px] bg-blue-600 px-6 py-3 text-[14px] font-semibold text-white transition-all hover:-translate-y-px hover:bg-blue-700 sm:w-auto"
            href="https://atlas.abzalinnovation.com"
          >
            Visit Atlas
          </Link>
          <Link
            className="inline-flex w-full items-center justify-center rounded-[10px] border border-white/20 bg-white/5 px-6 py-3 text-[14px] font-semibold text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10 sm:w-auto"
            href="/contact"
          >
            Join Build Waitlist
          </Link>
        </div>
        <div className="mt-5">
          <Link
            className="text-[13px] font-semibold text-slate-300 transition-colors hover:text-white"
            href={socialLinks[0].href}
          >
            Follow Abzal on Facebook for launch updates
          </Link>
        </div>
      </div>
    </section>
  );
}
