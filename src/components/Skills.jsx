import Icon from "./Icon.jsx";
import { useLang } from "../i18n/LangContext.jsx";

function Group({ g, proofs, idx }) {
  const { t } = useLang();
  return (
    <section className={`sk-group ${g.main ? "is-main" : ""} ${g.tone ? `tone-${g.tone}` : ""}`} aria-labelledby={`sk-${idx}`}>
      <header className="sk-head">
        <span className="sk-icon"><Icon name={g.icon} size={18} /></span>
        <h3 id={`sk-${idx}`} className="sk-title">{g.title}</h3>
        {g.note && <span className="sk-note">{g.note}</span>}
      </header>
      <ul className="sk-list">
        {g.items.map((it) => (
          <li key={it.name} className="sk-item">
            <span className="sk-name">{it.name}</span>
            {it.p?.length > 0 && (
              <span className="sk-proofs">
                <span className="visually-hidden">{t.usedIn}</span>
                {it.p.map((k) => {
                  const pr = proofs[k];
                  return (
                    <a key={k} href={pr.href} className={`sk-proof is-${pr.kind}`}>
                      {pr.label}
                    </a>
                  );
                })}
              </span>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

/** Étape 6 : compétences techniques, avec la preuve de leur utilisation. */
export default function Skills() {
  const { c, t } = useLang();
  const { techSkills, proofs, skillsSection } = c;
  const all = techSkills.flatMap((g) => g.items);
  const proven = all.filter((i) => i.p?.length).length;
  const main = techSkills.filter((g) => g.main);
  const others = techSkills.filter((g) => !g.main);

  return (
    <section id="competences" className="sk wrap" aria-labelledby="sk-title">
      <div className="section-head">
        <span className="kicker" data-n="04">{skillsSection.kicker}</span>
        <h2 id="sk-title" className="section-title">{skillsSection.title}</h2>
      </div>

      <div className="sk-legend">
        <p>{t.skillsProven(proven, all.length)}</p>
        <p className="sk-legend-keys">
          <span className="sk-proof is-stage" aria-hidden="true">{t.keyStage}</span>
          <span className="sk-proof is-projet" aria-hidden="true">{t.keyProject}</span>
          <span>{t.keyHelp}</span>
        </p>
      </div>

      <div className="sk-main">{main.map((g, i) => <Group key={i} idx={`m${i}`} g={g} proofs={proofs} />)}</div>
      <div className="sk-others">{others.map((g, i) => <Group key={i} idx={`o${i}`} g={g} proofs={proofs} />)}</div>
    </section>
  );
}
