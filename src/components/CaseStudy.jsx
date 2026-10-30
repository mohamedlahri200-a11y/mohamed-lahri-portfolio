import Icon from "./Icon.jsx";
import ArchDiagram from "./ArchDiagram.jsx";
import { RepoButton, VideoSlot } from "./Media.jsx";
import { useLang } from "../i18n/LangContext.jsx";

/** Bouton « Voir le post LinkedIn » : désactivé tant que le lien n'est pas renseigné. */
export function LinkedinPostButton({ href }) {
  const { t } = useLang();
  const ready = typeof href === "string" && href.startsWith("https://");
  if (!ready) {
    return (
      <span className="btn is-soon" aria-disabled="true" title={t.soonLink}>
        <Icon name="linkedin" size={17} />{t.linkedinPost}<span className="soon-tag">{t.soon}</span>
      </span>
    );
  }
  return (
    <a className="btn" href={href} target="_blank" rel="noopener noreferrer">
      <Icon name="linkedin" size={17} />{t.linkedinPost}<Icon name="external" size={13} />
      <span className="visually-hidden">{t.newTab}</span>
    </a>
  );
}

function BlockTitle({ id, children }) {
  return <h3 id={id} className="cs-h3">{children}</h3>;
}

function Block({ block, idx, prefix }) {
  const hid = `${prefix}-b${idx}`;
  switch (block.type) {
    case "problem":
      return (
        <section className="cs-block" aria-labelledby={hid}>
          <BlockTitle id={hid}>{block.title}</BlockTitle>
          <p className="cs-lead">{block.intro}</p>
          <ul className="cs-problem">
            {block.cards.map((c) => (
              <li key={c.label} className="cs-problem-card">
                <span className="cs-icon is-warn"><Icon name={c.icon} size={20} /></span>
                <strong>{c.label}</strong>
                <p>{c.text}</p>
              </li>
            ))}
          </ul>
        </section>
      );
    case "features":
      return (
        <section className="cs-block" aria-labelledby={hid}>
          <BlockTitle id={hid}>{block.title}</BlockTitle>
          <p className="cs-lead">{block.intro}</p>
          <ul className="cs-features">
            {block.items.map((f) => (
              <li key={f.text} className="cs-feature">
                <span className="cs-icon"><Icon name={f.icon} size={18} /></span>
                <p>{f.text}</p>
              </li>
            ))}
          </ul>
          {block.note && (
            <p className="cs-note"><span className="cs-icon is-ai"><Icon name={block.note.icon} size={18} /></span>{block.note.text}</p>
          )}
        </section>
      );
    case "metrics":
      return (
        <section className="cs-block cs-metrics-block" aria-labelledby={hid}>
          <BlockTitle id={hid}>{block.title}</BlockTitle>
          <ul className="cs-metrics">
            {block.items.map((m) => (
              <li key={m.value} className="cs-metric">
                <p className="cs-metric-value" aria-hidden="true">
                  <span className="cs-metric-prefix">{m.prefix || "\u00a0"}</span>
                  {m.value}
                </p>
                <p className="cs-metric-legend" aria-hidden="true">{m.legend}</p>
                <p className="visually-hidden">{m.full}</p>
              </li>
            ))}
          </ul>
        </section>
      );
    case "groups":
      return (
        <section className="cs-block" aria-labelledby={hid}>
          <BlockTitle id={hid}>{block.title}</BlockTitle>
          <div className="cs-groups">
            {block.groups.map((g) => (
              <div key={g.name} className={`cs-group ${g.ai ? "is-ai" : ""}`}>
                <h4 className="cs-group-title">{g.name}</h4>
                <ul className="cs-group-list">
                  {g.items.map((it) => (
                    <li key={it.text} className="cs-feature">
                      <span className={`cs-icon ${g.ai ? "is-ai" : ""}`}><Icon name={it.icon} size={18} /></span>
                      <p>{it.text}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      );
    case "architecture":
      return (
        <section className="cs-block" aria-labelledby={hid}>
          <BlockTitle id={hid}>{block.title}</BlockTitle>
          <p className="cs-lead">{block.text}</p>
          <ArchDiagram diagram={block.diagram} />
        </section>
      );
    case "stack":
      return (
        <section className="cs-block" aria-labelledby={hid}>
          <BlockTitle id={hid}>{block.title}</BlockTitle>
          <div className="cs-stack">
            {block.groups.map((g) => (
              <div key={g.name} className={`cs-stack-col ${g.ai ? "is-ai" : ""}`}>
                <h4 className="cs-group-title">{g.name}</h4>
                <ul className="cs-badges">{g.items.map((t) => <li key={t} className="cs-badge">{t}</li>)}</ul>
              </div>
            ))}
          </div>
        </section>
      );
    case "text":
      return (
        <section className="cs-block" aria-labelledby={hid}>
          <BlockTitle id={hid}>{block.title}</BlockTitle>
          <p className={`cs-text ${block.icon === "lightbulb" ? "is-learned" : ""}`}>
            {block.icon === "lightbulb" && <span className="cs-icon"><Icon name="lightbulb" size={18} /></span>}
            <span>{block.text}</span>
          </p>
        </section>
      );
    default:
      return null;
  }
}

/** Contenu complet d'une étude de cas (affiché dans le panneau). */
export default function CaseStudy({ exp, titleId }) {
  const { t } = useLang();
  const cs = exp.caseStudy;
  return (
    <article className="cs">
      <header className="cs-header">
        <span className="kicker">{t.caseStudyOf} · {exp.company}</span>
        <h2 id={titleId} className="cs-title">{cs.title}</h2>
        <p className="cs-subtitle">{cs.subtitle}</p>
        <dl className="cs-meta">
          <div><dt>{t.role}</dt><dd>{exp.role} — {exp.company}</dd></div>
          <div><dt>{t.dates}</dt><dd>{[exp.dates, ...exp.meta].join(" · ")}</dd></div>
        </dl>
        <ul className="exp-tags" aria-label={t.themes}>{exp.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
      </header>
      {exp.video !== false && (
        <section className="cs-block" aria-label={t.video}>
          <VideoSlot video={exp.video} id={exp.id} title={cs.title} />
        </section>
      )}
      {cs.blocks.map((b, i) => <Block key={i} block={b} idx={i} prefix={exp.id} />)}
      <footer className="cs-footer">
        <RepoButton repo={exp.repo} />
        <LinkedinPostButton href={exp.linkedinPost} />
      </footer>
    </article>
  );
}
