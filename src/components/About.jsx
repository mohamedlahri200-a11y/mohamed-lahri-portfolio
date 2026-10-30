import Icon from "./Icon.jsx";
import { useLang } from "../i18n/LangContext.jsx";
import { rich } from "./Hero.jsx";

/** Section « À propos » : profil & vision, trois cartes, carte whoami.json et compteurs. */
export default function About() {
  const { c, t } = useLang();
  const { about, experiences, projects, activities, certificates } = c;
  const competitions = activities.filter((a) => /hackathon|comp[ée]tition/i.test(a.type)).length;
  const stats = [
    { value: experiences.length, label: about.stats.internships, icon: "briefcase" },
    { value: projects.filter((p) => p.repo).length, label: about.stats.projects, icon: "github" },
    { value: competitions, label: about.stats.competitions, icon: "trophy" },
    { value: certificates.length, label: about.stats.certificates, icon: "check" },
  ];

  return (
    <section id="about" className="about wrap" aria-labelledby="about-title">
      <header className="about-head">
        <span className="about-pill"><span className="about-pill-n" aria-hidden="true">01</span>{about.kicker}</span>
        <h2 id="about-title" className="about-title">
          {about.title.map((part, i) => (part.accent ? <span key={i} className="about-grad">{part.text}</span> : <span key={i}>{part.text}</span>))}
        </h2>
        <p className="about-intro">{rich(about.intro)}</p>
      </header>

      <ul className="about-cards">
        {about.cards.map((card) => (
          <li key={card.icon} className={`about-card tone-${card.tone}`}>
            <div className="about-card-head">
              <span className="about-card-icon"><Icon name={card.icon} size={24} /></span>
              <h3>{card.title}</h3>
            </div>
            {card.paragraphs.map((p) => <p key={p}>{rich(p)}</p>)}
            {card.list && (
              <ul className="about-card-list">
                {card.list.map((li) => <li key={li}><Icon name="chevron" size={16} className="about-chev" />{li}</li>)}
              </ul>
            )}
          </li>
        ))}
      </ul>

      <div className="about-bottom">
        <figure className="whoami" aria-label="whoami.json">
          <div className="whoami-bar" aria-hidden="true">
            <span className="dot" /><span className="dot" /><span className="dot" />
            <span className="whoami-file">whoami.json</span>
          </div>
          <dl className="whoami-body">
            {about.whoami.map((row) => (
              <div key={row.key} className="whoami-row">
                <dt>{row.key}</dt>
                <dd>
                  <span className="whoami-colon" aria-hidden="true">: </span>
                  {row.key === "email" ? <a href={`mailto:${row.value}`}>{row.value}</a> : row.value}
                </dd>
              </div>
            ))}
            <div className="whoami-row is-status">
              <dt>status</dt>
              <dd><span aria-hidden="true">✓ </span>{about.whoamiStatus}</dd>
            </div>
          </dl>
        </figure>

        <ul className="about-stats" aria-label={t.statsLabel}>
          {stats.map((s) => (
            <li key={s.label} className="about-stat">
              <span className="about-stat-icon"><Icon name={s.icon} size={18} /></span>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
