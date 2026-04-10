import GradientHero from "../site/GradientHero";

export default function Hero() {
  return (
    <GradientHero
      actions={[
        { label: "Explore Our Products", href: "#products" },
        { label: "Get in Touch", href: "/contact", variant: "secondary" },
      ]}
      contentClassName="mx-auto max-w-[760px] text-center"
      description="Abzal Innovation creates vertical software that replaces the disconnected spreadsheets, paper forms, and generic tools that slow down physical-world operations."
      descriptionClassName="mx-auto mt-5 max-w-[580px] text-[17px] leading-[1.7] text-slate-600"
      kicker="Software for the Built Environment"
      kickerClassName="mb-5 text-slate-400"
      meta="Volt and Land Use Atlas are live now. Build is opening soon."
      metaClassName="mx-auto mt-4 max-w-[560px] text-[13px] font-semibold uppercase tracking-[0.08em] text-slate-500"
      sectionClassName="pb-24 pt-20 lg:pb-28 lg:pt-24"
      title={
        <>
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(135deg, #0f172a 0%, #2563eb 50%, #0ea5e9 100%)",
            }}
          >
            Purpose-built tools
          </span>{" "}
          for contractors, builders, and municipalities.
        </>
      }
      titleClassName="text-[36px] leading-[1.06] sm:text-[44px] lg:text-[56px]"
      actionsClassName="items-center justify-center"
    />
  );
}
