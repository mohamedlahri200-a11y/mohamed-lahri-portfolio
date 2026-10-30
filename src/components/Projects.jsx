import { useEffect, useRef, useState } from "react";
import Icon from "./Icon.jsx";
import { DemoButton, RepoButton, VideoButton, VideoDialog, VideoSlot } from "./Media.jsx";
import { useLang } from "../i18n/LangContext.jsx";

/** Fonctionnement du projet, étape par étape (horizontal ou vertical). */
function Flow({ steps, vertical = false, label }) {
  const { t } = useLang();
  return (
    <ol className={`flow ${vertical ? "is-vertical" : ""}`} aria-label={label}>
      {steps.map((s, i) => (
        <li key={i} className={`flow-step ${s.ai ? "is-ai" : ""}`}>
          <span className="flow-icon"><Icon name={s.icon} size={16} /></span>
          <span className="flow-text">
            <span className="flow-title"><span className="visually-hidden">{t.step} {i + 1} : </span>{s.title}</span>
            <span className="flow-sub">{s.text}</span>
          </span>
        </li>
      ))}
    </ol>
  );
}

function Meta({ p }) {
  return (
    <p className="proj-meta">
      {[p.type, p.org].filter(Boolean).join(" · ")}
      <span className="proj-period"><Icon name="calendar" size={14} />{p.period}</span>
    </p>
  );
}

/** Visionneuse de captures (dialog modal, ← → Échap). */
export function Lightbox({ state, onClose }) {
  const { t } = useLang();
  const ref = useRef(null);
  const [i, setI] = useState(0);
  const p = state?.project;

  useEffect(() => {
    if (!p) return;
    setI(state.index);
    const d = ref.current;
    if (d && !d.open) d.showModal();
    document.documentElement.classList.add("no-scroll");
  }, [state, p]);

  if (!p) return <dialog ref={ref} className="lb" aria-label={t.shots} onClose={onClose} />;
  const n = p.images.length;
  const img = p.images[i] || p.images[0];
  const go = (d) => setI((v) => (v + d + n) % n);

  return (
    <dialog ref={ref} className={`lb ${p.light ? "is-light" : ""}`} aria-labelledby="lb-title" onClose={onClose}
      onClick={(e) => { if (e.target === ref.current) ref.current.close(); }}
      onKeyDown={(e) => {
        if (n > 1 && e.key === "ArrowRight") { e.preventDefault(); go(1); }
        if (n > 1 && e.key === "ArrowLeft") { e.preventDefault(); go(-1); }
      }}>
      <div className="lb-panel">
        <div className="lb-bar">
          <span id="lb-title" className="lb-title">{p.title}</span>
          {n > 1 && <span className="lb-count" aria-live="polite">{i + 1} / {n}</span>}
          <button type="button" className="btn btn-icon" onClick={() => ref.current.close()} aria-label={t.closeViewer}>
            <Icon name="close" size={18} />
          </button>
        </div>
        <figure className="lb-figure">
          <img src={img.src} alt={img.alt} width={img.w} height={img.h} />
          <figcaption>{img.alt}</figcaption>
        </figure>
        {n > 1 && (
          <div className="lb-nav">
            <button type="button" className="btn" onClick={() => go(-1)}><Icon name="arrow" size={16} className="flip" />{t.prev}</button>
            <button type="button" className="btn" onClick={() => go(1)}>{t.next}<Icon name="arrow" size={16} /></button>
          </div>
        )}
      </div>
    </dialog>
  );
}

/** Zone visuelle d'une carte : captures (cliquables) ou emplacement de la démo vidéo. */
function Media({ p, onOpen }) {
  const { t } = useLang();
  if (!p.images.length && p.video === false) {
    // Pas de capture ni de vidéo : couverture graphique à partir du fonctionnement du projet
    return (
      <div className={`proj-cover ${p.cats?.includes("devops") && !p.cats?.includes("ia") ? "is-devops" : ""}`} aria-hidden="true">
        <ol className="proj-cover-flow">
          {(p.flow || []).map((s, i) => (
            <li key={i} className={s.ai ? "is-ai" : ""}><Icon name={s.icon} size={16} /><span>{s.title}</span></li>
          ))}
        </ol>
      </div>
    );
  }
  if (!p.images.length) return <div className="proj-media"><VideoSlot video={p.video} id={p.id} title={p.title} compact /></div>;
  const first = p.images[0];
  return (
    <button type="button" className="proj-shot" onClick={(e) => onOpen(p, 0, e.currentTarget)}
      aria-label={t.enlargeShots(p.title, p.images.length)}>
      <img src={first.src} alt="" width={first.w} height={first.h} loading="lazy" decoding="async" />
      <span className="proj-shot-count"><Icon name="image" size={14} />{t.captures(p.images.length)}</span>
    </button>
  );
}

/** Section Projets. */
export default function Projects() {
  const { c, t } = useLang();
  const { projects, projectsSection, projectFilters } = c;
  const [filter, setFilter] = useState("all");
  const [lb, setLb] = useState(null);
  const [vd, setVd] = useState(null);
  const trigger = useRef(null);
  const visible = projects.filter((p) => filter === "all" || p.cats?.includes(filter));
  const featured = visible.find((p) => p.featured);
  const others = visible.filter((p) => !p.featured);
  const count = (id) => projects.filter((p) => id === "all" || p.cats?.includes(id)).length;

  const open = (project, index, el) => { trigger.current = el; setLb({ project, index }); };
  const closed = () => {
    document.documentElement.classList.remove("no-scroll");
    setLb(null);
    trigger.current?.focus();
  };
  const openVideo = (s, el) => { trigger.current = el; setVd(s); };
  const closeVideo = () => { setVd(null); trigger.current?.focus(); };

  return (
    <section id="projets" className="proj wrap" aria-labelledby="proj-title">
      <div className="section-head">
        <span className="kicker" data-n="03">{projectsSection.kicker}</span>
        <h2 id="proj-title" className="section-title">{projectsSection.title}</h2>
      </div>

      <div className="proj-filters" role="group" aria-label={t.filterProjects}>
        {projectFilters.map((f) => (
          <button key={f.id} type="button" aria-pressed={filter === f.id} onClick={() => setFilter(f.id)}>
            {f.label}<span className="proj-filter-count">{count(f.id)}</span>
          </button>
        ))}
      </div>

      {featured && (
        <article id={`projet-${featured.id}`} className="proj-featured" aria-labelledby={`p-${featured.id}`}>
          <div className="proj-featured-main">
            <span className="proj-badge"><Icon name="sparkles" size={14} />{t.recentAi}</span>
            <Meta p={featured} />
            <h3 id={`p-${featured.id}`} className="proj-title is-big">{featured.title}</h3>
            <p className="proj-summary">{featured.summary}</p>
            <h4 className="proj-subtitle">{featured.featuresTitle}</h4>
            <ul className="proj-features">
              {featured.features.map((f) => <li key={f}><Icon name="check" size={16} />{f}</li>)}
            </ul>
            <ul className="proj-stack" aria-label={t.technologies}>{featured.stack.map((s) => <li key={s}>{s}</li>)}</ul>
            <div className="proj-actions">
              <VideoButton video={featured.video} id={featured.id} title={featured.title} onOpen={openVideo} primary />
              <DemoButton demo={featured.demo} />
              <RepoButton repo={featured.repo} />
            </div>
          </div>
          <div className="proj-featured-side">
            <VideoSlot video={featured.video} id={featured.id} title={featured.title} compact />
            <h4 className="proj-subtitle">{t.howItWorks}</h4>
            <Flow steps={featured.flow} vertical label={`${t.howItWorksOf} ${featured.title}`} />
          </div>
        </article>
      )}

      <ul className="proj-grid">
        {others.map((p) => (
          <li key={p.id}>
            <article id={`projet-${p.id}`} className="proj-card" aria-labelledby={`p-${p.id}`}>
              <Media p={p} onOpen={open} />
              <div className="proj-body">
                <Meta p={p} />
                <h3 id={`p-${p.id}`} className="proj-title">{p.title}</h3>
                <p className="proj-summary">{p.summary}</p>
                {p.flow && <Flow steps={p.flow} label={`${t.howItWorksOf} ${p.title}`} />}
                <ul className="proj-stack" aria-label={t.technologies}>{p.stack.map((s) => <li key={s}>{s}</li>)}</ul>
                <div className="proj-actions">
                  <VideoButton video={p.video} id={p.id} title={p.title} onOpen={openVideo} />
                  <DemoButton demo={p.demo} />
                  <RepoButton repo={p.repo} />
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>

      <Lightbox state={lb} onClose={closed} />
      <VideoDialog state={vd} onClose={closeVideo} />
    </section>
  );
}
