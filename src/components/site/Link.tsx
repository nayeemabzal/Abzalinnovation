import type { AnchorHTMLAttributes, ReactNode } from "react";
import { navigate } from "../../router";

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
};

/** SPA-aware anchor. Internal links use pushState; external links open normally. */
export default function Link({ href, children, onClick, ...rest }: LinkProps) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    onClick?.(e);
    if (!isExternal) navigate(href, e);
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...rest}
    >
      {children}
    </a>
  );
}
