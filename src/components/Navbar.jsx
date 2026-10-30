import { useEffect, useMemo, useRef, useState } from "react";
import Icon from "./Icon.jsx";
import ThemeToggle from "./ThemeToggle.jsx";
import CvMenu from "./CvMenu.jsx";
import CvOption from "./CvOption.jsx";
import LangToggle from "./LangToggle.jsx";
import { useLang } from "../i18n/LangContext.jsx";

/** Section visible à l'écran → lien du menu mis en évidence. */
function useActiveSection(ids) {
  const [active, setActive] = useState(null);
  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!els.length || !("IntersectionObserver" in window)) return undefined;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [ids]);
  return active;
}

export default function Navbar({ theme, onToggleTheme, setTheme }) {
  const { c, t } = useLang();
  const { profile, nav, menu, cvs } = c;
  // « top » (accueil) est observé aussi : en haut de page, aucun lien n'est actif.
  const sectionIds = useMemo(() => [...new Set(["top", ...nav.map((n) => n.href.slice(1))])], [nav]);
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection(sectionIds);
  const panelRef = useRef(null);
  const burgerRef = useRef(null);

  // Menu mobile : Échap pour fermer, défilement de la page bloqué, focus dans le panneau.
  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKey = (e) => { if (e.key === "Escape") { setMenuOpen(false); burgerRef.current?.focus(); } };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    panelRef.current?.querySelector("a")?.focus();
    const mq = window.matchMedia("(min-width: 1281px)");
    const onWide = (e) => e.matches && setMenuOpen(false);
    mq.addEventListener?.("change", onWide);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      mq.removeEventListener?.("change", onWide);
    };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <>
      <header className="nav">
        <div className="nav-inner wrap">
          <a className="brand" href="#top" aria-label={`${profile.name} — ${t.backTop}`}>
            <img src={profile.photo.thumb} alt="" width="40" height="40" />
            <span className="brand-text"><strong>{profile.name}</strong><span>{profile.shortTitle}</span></span>
          </a>

          <nav className="nav-links" aria-label={t.sections}>
            {nav.map((n) => (
              <a key={n.href} href={n.href} aria-current={active === n.href.slice(1) ? "true" : undefined}>{n.label}</a>
            ))}
          </nav>

          <div className="nav-actions">
            <LangToggle className="hide-mobile" />
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
            <div className="hide-mobile"><CvMenu /></div>
            <a className="btn btn-primary hide-mobile" href="#contact"><Icon name="mail" size={16} />{t.contactMe}</a>
            <button ref={burgerRef} type="button" className="btn btn-icon show-mobile" aria-haspopup="dialog"
              aria-expanded={menuOpen} aria-controls="menu-mobile" aria-label={menuOpen ? t.closeMenu : t.openMenu}
              onClick={() => setMenuOpen((o) => !o)}>
              <Icon name={menuOpen ? "close" : "menu"} size={20} />
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div id="menu-mobile" ref={panelRef} className="mobile-panel" role="dialog" aria-modal="true" aria-label={t.menu}>
          <div className="wrap">
            <nav className="mobile-links" aria-label={t.sections}>
              {menu.map((n, i) => (
                <a key={n.href} href={n.href} onClick={close} aria-current={active === n.href.slice(1) ? "true" : undefined}>
                  <span className="menu-num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                  <span className="menu-label">{n.label}</span>
                  <Icon name="arrow" size={18} />
                </a>
              ))}
            </nav>
            <div className="menu-side">
            <div className="mobile-block">
              <span className="mobile-label">{t.language}</span>
              <LangToggle className="is-wide" />
            </div>
            <div className="mobile-block">
              <span className="mobile-label">{t.theme}</span>
              <div className="segmented" role="group" aria-label={t.theme}>
                <button type="button" aria-pressed={theme === "light"} onClick={() => setTheme("light")}><Icon name="sun" size={16} />{t.light}</button>
                <button type="button" aria-pressed={theme === "dark"} onClick={() => setTheme("dark")}><Icon name="moon" size={16} />{t.dark}</button>
              </div>
            </div>
            <div className="mobile-block">
              <span className="mobile-label">{t.myCv}</span>
              <div className="mobile-cvs">{cvs.map((cv) => <CvOption key={cv.lang} cv={cv} onSelect={close} />)}</div>
            </div>
            <div className="mobile-socials">
              <a className="btn" href={profile.linkedin} target="_blank" rel="noopener noreferrer"><Icon name="linkedin" size={17} />LinkedIn</a>
              <a className="btn" href={profile.github} target="_blank" rel="noopener noreferrer"><Icon name="github" size={17} />GitHub</a>
            </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
