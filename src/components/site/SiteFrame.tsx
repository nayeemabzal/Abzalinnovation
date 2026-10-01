import type { ReactNode } from "react";
import useDocumentMetadata from "../../hooks/useDocumentMetadata";
import { marketingMetadata } from "../../data/siteContent";
import { getPathname } from "../../router";
import Footer from "./Footer";
import Header from "./Header";

type SiteFrameProps = {
  hero?: ReactNode;
  children: ReactNode;
  mainClassName?: string;
  contentClassName?: string;
};

function MarketingMetadata({ pathname }: { pathname: keyof typeof marketingMetadata }) {
  const [title, description] = marketingMetadata[pathname];
  useDocumentMetadata({ title: `${title} | Abzal Innovation`, description, url: `https://www.abzalinnovation.com${pathname === "/" ? "" : pathname}` });
  return null;
}

export default function SiteFrame({
  hero,
  children,
  mainClassName,
  contentClassName,
}: SiteFrameProps) {
  const pathname = getPathname();
  return (
    <div className="overflow-hidden bg-white text-text-primary">
      {pathname in marketingMetadata && <MarketingMetadata pathname={pathname as keyof typeof marketingMetadata} />}
      <Header />
      <main className={["relative", mainClassName].filter(Boolean).join(" ")} id="main-content" tabIndex={-1}>
        {hero}
        {contentClassName ? <div className={contentClassName}>{children}</div> : children}
      </main>
      <Footer />
    </div>
  );
}
