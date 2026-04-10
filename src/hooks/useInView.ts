import { useEffect, useRef, useState } from "react";

type UseInViewOptions = {
  /** Fraction of element visible before triggering (0–1). Default 0.15 */
  threshold?: number;
  /** Root margin — e.g. "0px 0px -60px 0px" to trigger slightly before. Default "-40px" */
  rootMargin?: string;
  /** Trigger only once (default true). */
  once?: boolean;
};

/**
 * Lightweight IntersectionObserver hook.
 * Returns a ref to attach and a boolean `inView`.
 */
export function useInView<T extends HTMLElement = HTMLDivElement>(
  options: UseInViewOptions = {},
) {
  const { threshold = 0.15, rootMargin = "-40px", once = true } = options;
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, inView };
}

/**
 * Tiny wrapper component for scroll-reveal.
 * Adds `data-inview` attribute when visible so pure-CSS transitions fire.
 */
export function useRevealClass(options?: UseInViewOptions) {
  const { ref, inView } = useInView<HTMLDivElement>(options);
  return { ref, className: inView ? "in-view" : "" };
}
