import { useCallback, useEffect, useState } from "react";

/** Thème clair / sombre : 1re visite = thème du système, puis choix mémorisé. */
const read = () => (document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light");

export default function useTheme() {
  const [theme, setThemeState] = useState(read);

  const apply = useCallback((next, { persist = true } = {}) => {
    const root = document.documentElement;
    root.classList.add("theme-switching");
    root.setAttribute("data-theme", next);
    root.style.colorScheme = next;
    setThemeState(next);
    if (persist) {
      try { localStorage.setItem("theme", next); } catch { /* stockage indisponible */ }
    }
    window.setTimeout(() => root.classList.remove("theme-switching"), 300);
  }, []);

  // Tant qu'aucun choix n'est mémorisé, on suit le système.
  useEffect(() => {
    const mq = window.matchMedia?.("(prefers-color-scheme: dark)");
    if (!mq) return undefined;
    const onChange = (e) => {
      let stored = null;
      try { stored = localStorage.getItem("theme"); } catch { /* ignore */ }
      if (stored !== "light" && stored !== "dark") apply(e.matches ? "dark" : "light", { persist: false });
    };
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, [apply]);

  const toggle = useCallback(() => apply(read() === "dark" ? "light" : "dark"), [apply]);
  return { theme, setTheme: apply, toggle };
}
