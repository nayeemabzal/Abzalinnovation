import type { CSSProperties, ReactNode } from "react";
import { useInView } from "../../hooks/useInView";

type RevealProps = {
  children: ReactNode;
  /** Animation variant. Default "up" */
  variant?: "up" | "left" | "right" | "scale" | "fade";
  /** Delay in ms. Default 0 */
  delay?: number;
  /** Extra className */
  className?: string;
  /** HTML tag. Default "div" */
  as?: "div" | "section" | "article" | "span";
  /** IntersectionObserver threshold. Default 0.15 */
  threshold?: number;
  /** Stagger children instead of animating container. Default false */
  stagger?: boolean;
};

const variantStyles: Record<string, { from: CSSProperties; to: CSSProperties }> = {
  up: {
    from: { opacity: 0, transform: "translateY(28px)" },
    to: { opacity: 1, transform: "translateY(0)" },
  },
  left: {
    from: { opacity: 0, transform: "translateX(-28px)" },
    to: { opacity: 1, transform: "translateX(0)" },
  },
  right: {
    from: { opacity: 0, transform: "translateX(28px)" },
    to: { opacity: 1, transform: "translateX(0)" },
  },
  scale: {
    from: { opacity: 0, transform: "scale(0.95)" },
    to: { opacity: 1, transform: "scale(1)" },
  },
  fade: {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
};

export default function Reveal({
  children,
  variant = "up",
  delay = 0,
  className = "",
  as: Tag = "div",
  threshold = 0.15,
  stagger = false,
}: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold });
  const v = variantStyles[variant];

  const style: CSSProperties = {
    ...(inView ? v.to : v.from),
    transition: `opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
    willChange: "opacity, transform",
  };

  return (
    <Tag ref={ref} className={`${className} ${stagger && inView ? "stagger-in-view" : ""}`} style={stagger ? undefined : style}>
      {children}
    </Tag>
  );
}

/**
 * Staggered grid reveal — wraps a grid and staggers each child on scroll.
 */
export function RevealGrid({
  children,
  className = "",
  staggerMs = 80,
  threshold = 0.1,
}: {
  children: ReactNode;
  className?: string;
  staggerMs?: number;
  threshold?: number;
}) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold });

  return (
    <div ref={ref} className={className}>
      {Array.isArray(children)
        ? children.map((child, i) => {
            const childStyle: CSSProperties = {
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(24px)",
              transition: `opacity 0.55s cubic-bezier(0.16, 1, 0.3, 1) ${i * staggerMs}ms, transform 0.55s cubic-bezier(0.16, 1, 0.3, 1) ${i * staggerMs}ms`,
              willChange: "opacity, transform",
            };
            return (
              <div key={i} style={childStyle}>
                {child}
              </div>
            );
          })
        : children}
    </div>
  );
}
