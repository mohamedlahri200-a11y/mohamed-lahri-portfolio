import Icon from "./Icon.jsx";
import { useLang } from "../i18n/LangContext.jsx";

/** Étape 9 : formation (frise chronologique). */
export default function Education() {
  const { c, t } = useLang();
  const { education, educationSection } = c;
  return (
    <section id="parcours" className="edu wrap" aria-labelledby="edu-title">
      <div className="section-head">
        <span className="kicker" data-n="07">{educationSection.kicker}</span>
        <h2 id="edu-title" className="section-title">{educationSection.title}</h2>
      </div>
      <ol className="edu-list">
        {education.map((e) => (
          <li key={e.period} className={`edu-item ${e.current ? "is-current" : ""}`}>
            <span className="edu-dot" aria-hidden="true"><Icon name={e.icon} size={18} /></span>
            <div className="edu-card">
              <p className="edu-period">
                {e.period}
                {e.current && <span className="edu-badge">{t.current}</span>}
              </p>
              <h3 className="edu-title">{e.title}</h3>
              <p className="edu-school"><Icon name="pin" size={14} />{e.school}</p>
              <p className="edu-detail">{e.detail}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
