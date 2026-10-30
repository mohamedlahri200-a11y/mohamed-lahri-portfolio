import Icon from "./Icon.jsx";
import { useLang } from "../i18n/LangContext.jsx";

/** Bouton soleil / lune. */
export default function ThemeToggle({ theme, onToggle }) {
  const { t } = useLang();
  const dark = theme === "dark";
  return (
    <button type="button" className="btn btn-icon" onClick={onToggle}
      aria-label={dark ? t.toLight : t.toDark} title={dark ? t.toLight : t.toDark}>
      <Icon name={dark ? "sun" : "moon"} size={18} />
    </button>
  );
}
