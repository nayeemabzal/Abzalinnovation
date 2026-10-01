// Lightweight SPA router — pushState navigation with event dispatch

const ROUTE_CHANGE_EVENT = "routechange";

/** Push a new route and trigger re-render. */
export function navigate(href: string, e?: React.MouseEvent) {
  if (e) {
    // Allow ctrl/cmd+click to open in new tab
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
  }

  const url = new URL(href, window.location.origin);

  // Same-page hash link — just scroll
  if (url.pathname === window.location.pathname && url.hash) {
    const el = document.getElementById(url.hash.slice(1));
    if (el) {
      if (window.location.hash !== url.hash) window.history.pushState(null, "", url.pathname + url.search + url.hash);
      el.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
      el.focus({ preventScroll: true });
    }
    return;
  }

  window.history.pushState(null, "", href);
  window.dispatchEvent(new Event(ROUTE_CHANGE_EVENT));
  window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
}

/** Normalized pathname getter. */
export function getPathname() {
  const normalized = window.location.pathname.replace(/\/+$/, "");
  return normalized === "" ? "/" : normalized;
}

/** Subscribe to route changes (popstate + pushState). Returns unsubscribe fn. */
export function onRouteChange(callback: () => void) {
  window.addEventListener("popstate", callback);
  window.addEventListener(ROUTE_CHANGE_EVENT, callback);
  return () => {
    window.removeEventListener("popstate", callback);
    window.removeEventListener(ROUTE_CHANGE_EVENT, callback);
  };
}
