import type { AnchorHTMLAttributes, ReactNode } from "react";
import { navigate } from "../../router";

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
};

/** SPA-aware anchor. Standalone apps and external links navigate normally. */
export default function Link({ href, children, onClick, ...rest }: LinkProps) {
  const isHttpExternal = href.startsWith("http");
  const isExternal = isHttpExternal || href.startsWith("mailto:");
  const isStandaloneApp = /^\/earth-time-machine(?:[/?#]|$)/.test(href);

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    onClick?.(e);
    if (!e.defaultPrevented && !isExternal && !isStandaloneApp) navigate(href, e);
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      {...(isHttpExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...rest}
    >
      {children}
    </a>
  );
}
