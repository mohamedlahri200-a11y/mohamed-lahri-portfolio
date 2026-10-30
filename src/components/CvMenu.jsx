import { useCallback, useId, useRef, useState } from "react";
import Icon from "./Icon.jsx";
import CvOption from "./CvOption.jsx";
import useDismiss from "../hooks/useDismiss.js";
import { useLang } from "../i18n/LangContext.jsx";

/** Bouton « CV » + menu déroulant (FR / EN). Clavier : ↓ ↑, Échap. */
export default function CvMenu({ size = "md", align = "right", label }) {
  const { c, t } = useLang();
  const { cvs } = c;
  const [open, setOpen] = useState(false);
  const btnRef = useRef(null);
  const menuRef = useRef(null);
  const id = useId();

  const close = useCallback((focusButton) => {
    setOpen(false);
    if (focusButton) btnRef.current?.focus();
  }, []);
  useDismiss(open, [btnRef, menuRef], close);

  const focusItem = (dir) => {
    const items = [...(menuRef.current?.querySelectorAll('[role="menuitem"]:not([aria-disabled="true"])') || [])];
    if (!items.length) return;
    const i = items.indexOf(document.activeElement);
    const next = dir === "first" ? 0 : (i + (dir === "down" ? 1 : -1) + items.length) % items.length;
    items[next].focus();
  };

  const onButtonKey = (e) => {
    if (e.key === "ArrowDown") { e.preventDefault(); setOpen(true); requestAnimationFrame(() => focusItem("first")); }
  };
  const onMenuKey = (e) => {
    if (e.key === "ArrowDown") { e.preventDefault(); focusItem("down"); }
    if (e.key === "ArrowUp") { e.preventDefault(); focusItem("up"); }
    if (e.key === "Tab") setOpen(false);
  };

  return (
    <div className="cv-menu">
      <button ref={btnRef} type="button" className={`btn ${size === "lg" ? "btn-lg" : ""}`}
        aria-haspopup="menu" aria-expanded={open} aria-controls={id}
        onClick={() => setOpen((o) => !o)} onKeyDown={onButtonKey}>
        <Icon name="download" size={16} />{label ?? t.cv}<Icon name="chevron" size={15} className={`chev ${open ? "is-open" : ""}`} />
      </button>
      {open && (
        <div ref={menuRef} id={id} role="menu" aria-label={t.downloadCv} className={`cv-popover align-${align}`} onKeyDown={onMenuKey}>
          {cvs.map((cv) => <CvOption key={cv.lang} cv={cv} role="menuitem" onSelect={() => close(false)} />)}
        </div>
      )}
    </div>
  );
}
