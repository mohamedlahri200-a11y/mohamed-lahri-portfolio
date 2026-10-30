import Icon from "./Icon.jsx";
import useFileAvailable from "../hooks/useFileAvailable.js";

/** Une ligne du menu CV : lien de téléchargement, ou « bientôt disponible » si le PDF est absent. */
export default function CvOption({ cv, role, onSelect }) {
  const ok = useFileAvailable(cv.href);
  if (!ok) {
    return (
      <span role={role} aria-disabled="true" className="cv-option is-disabled" lang={cv.lang}>
        <span className="cv-option-icon"><Icon name="lock" size={16} /></span>
        <span className="cv-option-text"><strong>{cv.label}</strong><small>{ok === null ? "…" : cv.soon}</small></span>
      </span>
    );
  }
  return (
    <a role={role} className="cv-option" href={cv.href} download={cv.file} target="_blank" rel="noopener" lang={cv.lang} onClick={onSelect}>
      <span className="cv-option-icon"><Icon name="download" size={16} /></span>
      <span className="cv-option-text"><strong>{cv.label} — {cv.action}</strong><small>PDF · {cv.file}</small></span>
    </a>
  );
}
