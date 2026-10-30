import { useLang } from "../i18n/LangContext.jsx";

/** Sélecteur de langue FR | EN (tout le portfolio change de langue). */
export default function LangToggle({ className = "" }) {
  const { lang, setLang, t } = useLang();
  return (
    <div className={`lang-toggle ${className}`} role="group" aria-label={t.language}>
      <button type="button" lang="fr" aria-pressed={lang === "fr"} onClick={() => setLang("fr")}
        aria-label={lang === "fr" ? "Français" : "Passer en français"}>FR</button>
      <button type="button" lang="en" aria-pressed={lang === "en"} onClick={() => setLang("en")}
        aria-label={lang === "en" ? "English" : "Switch to English"}>EN</button>
    </div>
  );
}
