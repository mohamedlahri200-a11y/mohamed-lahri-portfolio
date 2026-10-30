import { useEffect } from "react";

/** Ferme un menu au clic extérieur ou avec Échap (onClose(true) rend le focus au bouton). */
export default function useDismiss(open, refs, onClose) {
  useEffect(() => {
    if (!open) return undefined;
    const onDown = (e) => {
      if (refs.every((r) => !r.current || !r.current.contains(e.target))) onClose(false);
    };
    const onKey = (e) => { if (e.key === "Escape") onClose(true); };
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open, refs, onClose]);
}
