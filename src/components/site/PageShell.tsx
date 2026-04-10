import type { ReactNode } from "react";
import GradientHero, { type HeroAction } from "./GradientHero";
import SiteFrame from "./SiteFrame";

type PageShellProps = {
  eyebrow: string;
  title: string;
  description: string;
  actions?: HeroAction[];
  children: ReactNode;
};

export default function PageShell({
  eyebrow,
  title,
  description,
  actions = [],
  children,
}: PageShellProps) {
  return (
    <SiteFrame
      hero={
        <GradientHero
          actions={actions}
          description={description}
          kicker={eyebrow}
          title={title}
        />
      }
    >
      {children}
    </SiteFrame>
  );
}
