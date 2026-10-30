import { useRef, useState } from "react";
import Icon from "./Icon.jsx";
import { Lightbox } from "./Projects.jsx";
import { useLang } from "../i18n/LangContext.jsx";

function Meta({ a }) {
  return (
    <p className="act-meta">
      {a.dates && <span><Icon name="calendar" size={14} />{a.dates}</span>}
      {a.place && <span><Icon name="pin" size={14} />{a.place}</span>}
    </p>
  );
}

function Gallery({ a, onOpen }) {
  const { t } = useLang();
  const [main, ...rest] = a.images;
  return (
    <div className={`act-gallery n-${a.images.length}`}>
      <button type="button" className="act-shot is-main" onClick={(e) => onOpen(a, 0, e.currentTarget)}
        aria-label={t.enlargePhotos(a.title, a.images.length)}>
        <img src={main.src} alt="" width={main.w} height={main.h} loading="lazy" decoding="async" style={main.pos ? { objectPosition: main.pos } : undefined} />
      </button>
      {rest.length > 0 && (
        <div className="act-thumbs">
          {rest.map((img, i) => (
            <button key={img.src} type="button" className="act-shot" onClick={(e) => onOpen(a, i + 1, e.currentTarget)}
              aria-label={`${t.enlarge} ${img.alt}`}>
              <img src={img.src} alt="" width={img.w} height={img.h} loading="lazy" decoding="async" style={img.pos ? { objectPosition: img.pos } : undefined} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function Takeaways({ a }) {
  if (!a.takeaways) return null;
  return (
    <div className="act-block">
      <h4 className="act-subtitle">{a.takeawaysTitle}</h4>
      <ul className="act-checks">
        {a.takeaways.map((t) => <li key={t}><Icon name="check" size={16} />{t}</li>)}
      </ul>
    </div>
  );
}

function Featured({ a, onOpen, flip }) {
  const { t } = useLang();
  const pr = a.project;
  return (
    <article id={`activite-${a.id}`} className={`act-featured ${flip ? "is-flip" : ""}`} aria-labelledby={`act-${a.id}`}>
      <Gallery a={a} onOpen={onOpen} />
      <div className="act-body">
        <span className="act-type">{a.type}</span>
        <h3 id={`act-${a.id}`} className="act-title">{a.title}</h3>
        {a.subtitle && <p className="act-sub">{a.subtitle}</p>}
        <Meta a={a} />
        {a.org && <p className="act-org"><Icon name="school" size={15} />{a.org}</p>}
        <ul className="act-facts">{a.facts.map((f) => <li key={f}>{f}</li>)}</ul>

        <div className="act-project">
          <div className="act-project-head">
            {pr.logo && <img className="act-logo" src={pr.logo.src} alt={pr.logo.alt} width={pr.logo.w} height={pr.logo.h} loading="lazy" />}
            <div>
              <p className="act-project-label">{t.ourProject}</p>
              <p className="act-project-name">{pr.name}</p>
              <p className="act-project-tagline">« {pr.tagline} »</p>
            </div>
          </div>
          <p className="act-text">{pr.text}</p>
          {pr.pillars && (
            <ul className="act-pillars">
              {pr.pillars.map((p) => (
                <li key={p.title}>
                  <span className="act-pillar-icon"><Icon name={p.icon} size={16} /></span>
                  <span><strong>{p.title}</strong>{p.text}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
        <Takeaways a={a} />
      </div>
    </article>
  );
}

/** Étape 8 : compétitions, hackathons et vie associative. */
export default function Activities() {
  const { c, t } = useLang();
  const { activities, activitiesSection } = c;
  const [lb, setLb] = useState(null);
  const trigger = useRef(null);
  const open = (a, index, el) => { trigger.current = el; setLb({ project: a, index }); };
  const closed = () => {
    document.documentElement.classList.remove("no-scroll");
    setLb(null);
    trigger.current?.focus();
  };
  const featured = activities.filter((a) => a.featured);
  const others = activities.filter((a) => !a.featured);

  return (
    <section id="competitions" className="act wrap" aria-labelledby="act-title">
      <div className="section-head">
        <span className="kicker" data-n="06">{activitiesSection.kicker}</span>
        <h2 id="act-title" className="section-title">{activitiesSection.title}</h2>
      </div>

      <div className="act-featured-list">
        {featured.map((a, i) => <Featured key={a.id} a={a} onOpen={open} flip={i % 2 === 1} />)}
      </div>

      <ul className="act-grid">
        {others.map((a) => (
          <li key={a.id} className={a.images.length ? "is-wide" : ""}>
            <article id={`activite-${a.id}`} className={`act-card ${a.images.length || a.photoSlot ? "has-shot" : ""}`} aria-labelledby={`act-${a.id}`}>
              {!a.images.length && a.photoSlot && (
                <div className="act-card-shot act-photo-slot" role="img" aria-label={`${a.title} — ${t.photoSoon}`}>
                  <Icon name="image" size={26} />
                  <span>{t.photoSoon}</span>
                </div>
              )}
              {a.images.length > 0 && (
                <div className={`act-card-shots n-${a.images.length}`}>
                  {a.images.map((img, i) => (
                    <button key={img.src} type="button" className={`act-shot act-card-shot ${img.full ? "is-full" : ""}`} onClick={(e) => open(a, i, e.currentTarget)}
                      aria-label={a.images.length > 1 ? `${t.enlarge} ${img.alt}` : t.enlargePhoto(a.title)} style={img.full ? { "--ar": `${img.w} / ${img.h}` } : undefined}>
                      <img src={img.src} alt="" width={img.w} height={img.h} loading="lazy" decoding="async" style={img.pos ? { objectPosition: img.pos } : undefined} />
                    </button>
                  ))}
                </div>
              )}
              <div className="act-card-body">
                <span className="act-type">{a.type}</span>
                <h3 id={`act-${a.id}`} className="act-title is-small">{a.title}</h3>
                <Meta a={a} />
                <p className="act-text">{a.text}</p>
                <Takeaways a={a} />
              </div>
            </article>
          </li>
        ))}
      </ul>

      <Lightbox state={lb} onClose={closed} />
    </section>
  );
}
