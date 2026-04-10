import type { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

type SiteFrameProps = {
  hero?: ReactNode;
  children: ReactNode;
  mainClassName?: string;
  contentClassName?: string;
};

export default function SiteFrame({
  hero,
  children,
  mainClassName,
  contentClassName,
}: SiteFrameProps) {
  return (
    <div className="overflow-hidden bg-white text-text-primary">
      <Header />
      {hero}
      <main className={["relative", mainClassName].filter(Boolean).join(" ")} id="main-content">
        {contentClassName ? <div className={contentClassName}>{children}</div> : children}
      </main>
      <Footer />
    </div>
  );
}
