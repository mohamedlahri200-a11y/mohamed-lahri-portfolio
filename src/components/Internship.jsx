import Icon from "./Icon.jsx";
import { useLang } from "../i18n/LangContext.jsx";

/** Bloc « Je recherche » + bande de crédibilité. */
export default function Internship() {
  const { c, t } = useLang();
  const { internship: it, credibility } = c;
  return (
    <>
      <section id="recherche" className="seek wrap" aria-labelledby="seek-title">
        <div className="seek-card">
          <div className="seek-main">
            <span className="kicker"><Icon name="target" size={14} />{it.kicker}</span>
            <h2 id="seek-title" className="seek-title">
              {it.title.main} <span className="seek-dash">—</span> <span className="seek-detail">{it.title.detail}</span>{" "}
              <span className="seek-season">({it.title.season})</span>
            </h2>

            <ul className="seek-domains" aria-label={t.domainsLabel}>
              {it.domains.map((d) => (
                <li key={d.level} className={`domain domain-${d.level}`}>
                  <span className="domain-icon"><Icon name={d.icon} size={18} /></span>
                  <div className="domain-text">
                    <p className="domain-name">{d.name} <span className="domain-tag">{d.tag}</span></p>
                    <p className="domain-techs">{d.techs.join(" · ")}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="seek-facts">
            <dl className="facts-list">
              <div className="fact fact-highlight">
                <dt><Icon name="calendar" size={16} />{it.duration.label}</dt>
                <dd><strong>{it.duration.value}</strong> · {it.duration.detail}</dd>
              </div>
              <div className="fact">
                <dt><Icon name="globe" size={16} />{it.mode.label}</dt>
                {it.mode.items.map((m) => <dd key={m}>{m}</dd>)}
              </div>
              <div className="fact">
                <dt><Icon name="chat" size={16} />{it.languages.label}</dt>
                <dd>
                  <ul className="langs">
                    {it.languages.items.map((l) => (
                      <li key={l.name}><span>{l.name}</span><span className="lang-level">{l.level}</span></li>
                    ))}
                  </ul>
                </dd>
              </div>
            </dl>
            <a className="btn btn-primary seek-cta" href="#contact">{it.cta}<Icon name="arrow" size={16} /></a>
          </div>
        </div>
      </section>

      <section className="cred wrap" aria-labelledby="cred-title">
        <h2 id="cred-title" className="cred-title">{credibility.title}</h2>
        <ul className="cred-list">
          {credibility.items.map((ci, i) => (
            <li key={i} className="cred-item">
              <span className="cred-name">{ci.name}</span>
              <span className="cred-type">{ci.detail ? `${ci.detail} · ${ci.type}` : ci.type}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
