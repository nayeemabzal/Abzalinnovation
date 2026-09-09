import { useEffect, type ReactNode } from "react";
import Link from "../components/site/Link";
import SiteFrame from "../components/site/SiteFrame";

const channelHref = "https://www.youtube.com/@AbzalStudioKids";
const featuredVideoHref = "https://www.youtube.com/watch?v=qJbvpXjAq7g";
const featuredVideoImage = "https://img.youtube.com/vi/qJbvpXjAq7g/maxresdefault.jpg";
const pageTitle = "Abzal Studio Kids - Storytime Videos on YouTube";
const pageDescription =
  "Abzal Studio Kids is a YouTube channel for read-aloud stories, animated books, and family-friendly storytime videos.";
const pageUrl = "https://www.abzalinnovation.com/studio-kids";

type StoryPillar = {
  label: string;
  title: string;
  description: string;
  classes: string;
  icon: ReactNode;
};

const iconBase = "h-5 w-5";

const storyPillars: StoryPillar[] = [
  {
    label: "Storytime",
    title: "Read-aloud adventures",
    description:
      "Gentle stories with an easy pace for families who want a calm, imaginative watch.",
    classes: "border-red-100 bg-red-50 text-red-600",
    icon: (
      <svg className={iconBase} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
        <path d="M4 4.5A2.5 2.5 0 016.5 2H20v20H6.5A2.5 2.5 0 014 19.5z" />
      </svg>
    ),
  },
  {
    label: "Animated",
    title: "Picture-book worlds",
    description:
      "Soft visuals, simple motion, and storybook moments that feel made for family viewing.",
    classes: "border-amber-100 bg-amber-50 text-amber-700",
    icon: (
      <svg className={iconBase} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 11l18-8-8 18-2-8-8-2z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    title: "Family-friendly channel",
    description:
      "A dedicated YouTube home for Abzal Studio Kids stories, uploads, and channel updates.",
    classes: "border-blue-100 bg-blue-50 text-blue-600",
    icon: (
      <svg className={iconBase} viewBox="0 0 24 24" fill="currentColor">
        <path d="M21.6 7.2a3 3 0 00-2.1-2.1C17.7 4.6 12 4.6 12 4.6s-5.7 0-7.5.5a3 3 0 00-2.1 2.1A31 31 0 002 12a31 31 0 00.4 4.8 3 3 0 002.1 2.1c1.8.5 7.5.5 7.5.5s5.7 0 7.5-.5a3 3 0 002.1-2.1A31 31 0 0022 12a31 31 0 00-.4-4.8zM10 15.4V8.6l6 3.4-6 3.4z" />
      </svg>
    ),
  },
];

const watchSteps = [
  "Open the channel on YouTube",
  "Subscribe for new stories",
  "Watch from a parent-managed YouTube account",
];

const channelFacts = [
  { value: "YouTube", label: "Official home" },
  { value: "Storytime", label: "Read-aloud format" },
  { value: "Family", label: "Parent-managed viewing" },
];

function YouTubeIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M21.6 7.2a3 3 0 00-2.1-2.1C17.7 4.6 12 4.6 12 4.6s-5.7 0-7.5.5a3 3 0 00-2.1 2.1A31 31 0 002 12a31 31 0 00.4 4.8 3 3 0 002.1 2.1c1.8.5 7.5.5 7.5.5s5.7 0 7.5-.5a3 3 0 002.1-2.1A31 31 0 0022 12a31 31 0 00-.4-4.8zM10 15.4V8.6l6 3.4-6 3.4z" />
    </svg>
  );
}

export default function StudioKids() {
  useEffect(() => {
    const previousTitle = document.title;
    const schema = document.createElement("script");
    const metaTargets = [
      { key: "name", keyValue: "description", value: pageDescription },
      { key: "property", keyValue: "og:title", value: pageTitle },
      { key: "property", keyValue: "og:description", value: pageDescription },
      { key: "property", keyValue: "og:url", value: pageUrl },
      { key: "property", keyValue: "og:image", value: featuredVideoImage },
      { key: "property", keyValue: "og:image:alt", value: "Abzal Studio Kids story thumbnail." },
      { key: "name", keyValue: "twitter:title", value: pageTitle },
      { key: "name", keyValue: "twitter:description", value: pageDescription },
      { key: "name", keyValue: "twitter:image", value: featuredVideoImage },
    ];
    const previousValues = metaTargets.map((target) => {
      const selector = `meta[${target.key}='${target.keyValue}']`;
      let element = document.querySelector<HTMLMetaElement>(selector);
      const created = !element;

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(target.key, target.keyValue);
        document.head.appendChild(element);
      }

      const value = element.getAttribute("content") ?? "";
      element.setAttribute("content", target.value);
      return { element, value, created };
    });

    document.title = pageTitle;
    schema.type = "application/ld+json";
    schema.dataset.pageSchema = "studio-kids";
    schema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Abzal Studio Kids",
      url: pageUrl,
      description: pageDescription,
      image: featuredVideoImage,
      isPartOf: {
        "@type": "WebSite",
        name: "Abzal Innovation",
        url: "https://www.abzalinnovation.com",
      },
      sameAs: [channelHref],
    });
    document.head.appendChild(schema);

    return () => {
      document.title = previousTitle;
      previousValues.forEach(({ element, value, created }) => {
        if (created) element.remove();
        else element.setAttribute("content", value);
      });
      schema.remove();
    };
  }, []);

  return (
    <SiteFrame>
      <section className="relative overflow-hidden bg-navy px-6 py-14 text-white lg:px-8">
        <img
          alt="Illustrated Abzal Studio Kids story thumbnail with children reading a glowing book."
          className="absolute inset-0 h-full w-full object-cover object-center opacity-70"
          src={featuredVideoImage}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,23,42,0.9)_0%,rgba(15,23,42,0.72)_42%,rgba(15,23,42,0.18)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white to-transparent" />

        <div className="relative mx-auto grid min-h-[calc(86svh-4.5rem)] max-w-[1200px] items-center py-8">
          <div className="max-w-[720px]">
            <div className="fade-up mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/12 px-3 py-1.5 text-[12px] font-bold uppercase tracking-[0.08em] text-white backdrop-blur-sm">
              <YouTubeIcon className="h-4 w-4 text-red-300" />
              YouTube Channel
            </div>
            <h1 className="font-display fade-up d1 text-[48px] font-black leading-[0.98] tracking-[-0.04em] text-white sm:text-[64px] lg:text-[76px]">
              Abzal Studio Kids
            </h1>
            <p className="fade-up d2 mt-5 max-w-[610px] text-[19px] font-semibold leading-[1.55] text-white/88 sm:text-[22px]">
              Magical read-aloud stories and animated books for families to
              enjoy together.
            </p>
            <div className="fade-up d3 mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                className="inline-flex items-center justify-center gap-2 rounded-[10px] bg-red-600 px-6 py-3 text-[14px] font-bold text-white transition-all hover:-translate-y-px hover:bg-red-700 hover:shadow-[0_12px_30px_rgba(220,38,38,0.24)]"
                href={channelHref}
              >
                <YouTubeIcon />
                Visit Channel
              </Link>
              <Link
                className="inline-flex items-center justify-center rounded-[10px] border border-white/24 bg-white/12 px-6 py-3 text-[14px] font-bold text-white backdrop-blur-sm transition-all hover:border-white/50 hover:bg-white/18"
                href={featuredVideoHref}
              >
                Watch Featured Story
              </Link>
              <Link
                className="inline-flex items-center justify-center rounded-[10px] border border-emerald-200/50 bg-emerald-950/70 px-6 py-3 text-[14px] font-bold text-white transition-all hover:bg-emerald-900"
                href="/earth-time-machine"
              >
                Explore Earth Time Machine
              </Link>
            </div>
            <div className="fade-up d4 mt-6 flex flex-wrap gap-2">
              <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[12px] font-semibold text-white/82 backdrop-blur-sm">
                @AbzalStudioKids
              </span>
              <span className="inline-flex rounded-full border border-amber-200/40 bg-amber-200/18 px-3 py-1.5 text-[12px] font-semibold text-amber-100 backdrop-blur-sm">
                Story videos for kids and families
              </span>
            </div>
            <div className="fade-up d5 mt-8 grid max-w-[560px] gap-2 sm:grid-cols-3">
              {channelFacts.map((fact) => (
                <div
                  className="rounded-[12px] border border-white/14 bg-white/10 px-4 py-3 backdrop-blur-sm"
                  key={fact.label}
                >
                  <div className="text-[15px] font-extrabold leading-tight text-white">
                    {fact.value}
                  </div>
                  <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-white/52">
                    {fact.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-10 lg:grid-cols-[1.22fr_0.78fr] lg:items-center">
            <div className="overflow-hidden rounded-[20px] border border-slate-200 bg-slate-950 shadow-[0_24px_60px_rgba(15,23,42,0.14)]">
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-500" />
                  <span className="h-3 w-3 rounded-full bg-amber-400" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-[0.08em] text-white/50">
                  Featured Video
                </span>
              </div>
              <Link
                aria-label="Watch the featured Abzal Studio Kids story on YouTube"
                className="group relative block aspect-video overflow-hidden bg-slate-900"
                href={featuredVideoHref}
              >
                <img
                  alt="Featured Abzal Studio Kids story thumbnail."
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.025]"
                  loading="lazy"
                  src={featuredVideoImage}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.08)_0%,rgba(15,23,42,0.34)_100%)]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-red-600 text-white shadow-[0_18px_44px_rgba(15,23,42,0.3)] transition-transform group-hover:scale-105">
                    <svg className="ml-1 h-7 w-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </div>
                <span className="absolute bottom-4 right-4 rounded-full bg-white px-3 py-1.5 text-[12px] font-bold text-navy shadow-[0_8px_24px_rgba(15,23,42,0.16)]">
                  Watch on YouTube
                </span>
              </Link>
            </div>

            <div>
              <div className="mb-3 text-[13px] font-bold uppercase tracking-[0.08em] text-red-600">
                Featured Story
              </div>
              <h2 className="text-[36px] font-extrabold leading-[1.12] tracking-[-0.025em] text-navy">
                Step into a storybook world.
              </h2>
              <p className="mt-4 text-[17px] leading-[1.7] text-slate-600">
                The channel is built around visual storytime: bright scenes,
                gentle pacing, and narrated adventures that families can watch
                together on YouTube.
              </p>
              <div className="mt-7 grid gap-3">
                {watchSteps.map((step, index) => (
                  <div className="flex items-center gap-3 rounded-[12px] border border-slate-100 bg-slate-50 px-4 py-3" key={step}>
                    <span className="flex h-8 w-8 flex-none items-center justify-center rounded-[8px] bg-white text-[12px] font-extrabold text-red-600 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
                      {index + 1}
                    </span>
                    <span className="text-[14px] font-semibold text-navy">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,#fff7ed_0%,#f8fafc_100%)] px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-10 max-w-[760px]">
            <div className="mb-3 text-[13px] font-bold uppercase tracking-[0.08em] text-red-600">
              Channel Feel
            </div>
            <h2 className="text-[36px] font-extrabold leading-[1.15] tracking-[-0.025em] text-navy">
              Soft, colorful storytime without the clutter.
            </h2>
            <p className="mt-3 text-[17px] leading-[1.65] text-slate-600">
              Abzal Studio Kids gives the children&apos;s channel its own
              doorway while the main Abzal Innovation site stays focused on
              software products.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {storyPillars.map((pillar) => (
              <article
                className="rounded-[18px] border border-slate-200 bg-white p-7 shadow-[0_12px_36px_rgba(15,23,42,0.04)]"
                key={pillar.title}
              >
                <div className={`flex h-12 w-12 items-center justify-center rounded-[12px] border ${pillar.classes}`}>
                  {pillar.icon}
                </div>
                <span
                  className={`mt-5 inline-flex rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-[0.06em] ${pillar.classes}`}
                >
                  {pillar.label}
                </span>
                <h3 className="mt-4 text-[18px] font-extrabold tracking-[-0.01em] text-navy">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-[14px] leading-[1.65] text-slate-600">
                  {pillar.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-[1200px] gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <div className="mb-3 text-[13px] font-bold uppercase tracking-[0.08em] text-red-600">
              For Parents
            </div>
            <h2 className="text-[36px] font-extrabold leading-[1.15] tracking-[-0.025em] text-navy">
              Watch on YouTube with your usual family settings.
            </h2>
            <p className="mt-4 text-[17px] leading-[1.7] text-slate-600">
              Playback, recommendations, subscriptions, and parental controls
              are managed by YouTube. Use your own family settings when viewing
              or subscribing.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[20px] border border-slate-200 bg-navy p-7 text-white">
            <div
              className="absolute inset-0 opacity-16"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, rgba(255,255,255,0.22) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.22) 1px, transparent 1px)",
                backgroundSize: "36px 36px",
              }}
            />
            <div className="relative">
              <div className="text-[12px] font-bold uppercase tracking-[0.1em] text-red-200">
                Official Channel
              </div>
              <h3 className="mt-3 text-[28px] font-extrabold leading-[1.12] tracking-[-0.025em]">
                @AbzalStudioKids
              </h3>
              <p className="mt-3 max-w-[520px] text-[15px] leading-[1.7] text-white/68">
                Subscribe on YouTube to follow new storytime uploads from Abzal
                Studio Kids.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  className="inline-flex items-center justify-center gap-2 rounded-[10px] bg-red-600 px-5 py-3 text-[14px] font-bold text-white transition-all hover:-translate-y-px hover:bg-red-700"
                  href={channelHref}
                >
                  <YouTubeIcon />
                  Visit Channel
                </Link>
                <Link
                  className="inline-flex items-center justify-center rounded-[10px] border border-white/18 bg-white/8 px-5 py-3 text-[14px] font-bold text-white transition-all hover:border-white/36 hover:bg-white/12"
                  href="/"
                >
                  Back to Abzal Innovation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}
