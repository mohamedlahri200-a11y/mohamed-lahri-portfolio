import Icon from "./Icon.jsx";
import { useLang } from "../i18n/LangContext.jsx";

/** Étape 7 : savoir-être, chaque qualité avec sa preuve. */
export default function SoftSkills() {
  const { c, t } = useLang();
  const { softSkills, softSection, proofs } = c;
  return (
    <section id="skills" className="soft wrap" aria-labelledby="soft-title">
      <div className="section-head">
        <span className="kicker" data-n="05">{softSection.kicker}</span>
        <h2 id="soft-title" className="section-title">{softSection.title}</h2>
      </div>
      <ul className="soft-grid">
        {softSkills.map((s, i) => (
          <li key={i} className="soft-card">
            <div className="soft-head">
              <span className="soft-icon"><Icon name={s.icon} size={20} /></span>
              <span className="soft-num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
            </div>
            <h3 className="soft-title">{s.title}</h3>
            <p className="soft-text">{s.text}</p>
            {s.p?.length > 0 && (
              <p className="soft-proof">
                <span>{t.see}</span>
                {s.p.map((k) => (
                  <a key={k} href={proofs[k].href} className={`sk-proof is-${proofs[k].kind}`}>{proofs[k].label}</a>
                ))}
              </p>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
