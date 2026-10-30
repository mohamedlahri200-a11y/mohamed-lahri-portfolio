import { useCallback, useEffect, useRef, useState } from "react";
import Icon from "./Icon.jsx";
import CaseStudy from "./CaseStudy.jsx";
import { RepoButton, VideoButton, VideoDialog } from "./Media.jsx";
import { useLang } from "../i18n/LangContext.jsx";

/** Section « Expérience & Activités » — cartes + études de cas. */
export default function Experience() {
  const { c, t } = useLang();
  const { experiences, experienceSection } = c;
  const [openId, setOpenId] = useState(null);
  const [vd, setVd] = useState(null);
  const dialogRef = useRef(null);
  const triggerRef = useRef(null);
  const vdTrigger = useRef(null);
  const current = experiences.find((e) => e.id === openId);

  const open = useCallback((exp, trigger) => {
    triggerRef.current = trigger || null;
    setOpenId(exp.id);
    history.replaceState(null, "", `#${exp.anchor}`);
  }, []);

  const close = useCallback(() => {
    dialogRef.current?.open && dialogRef.current.close();
  }, []);

  // Lien direct partageable : /#etude-cas-chu ouvre l'étude de cas.
  useEffect(() => {
    const fromHash = () => {
      const exp = experiences.find((e) => `#${e.anchor}` === location.hash);
      if (exp) setOpenId(exp.id);
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, [experiences]);

  useEffect(() => {
    const d = dialogRef.current;
    if (!d || !openId) return;
    if (!d.open) d.showModal();
    d.querySelector(".cs-scroll")?.scrollTo(0, 0);
    document.documentElement.classList.add("no-scroll");
  }, [openId]);

  const onClosed = () => {
    document.documentElement.classList.remove("no-scroll");
    setOpenId(null);
    if (location.hash.startsWith("#etude-cas")) history.replaceState(null, "", location.pathname + location.search);
    const back = triggerRef.current || document.querySelector(`[data-case="${openId}"]`);
    back?.focus();
  };

  const openVideo = (s, el) => { vdTrigger.current = el; setVd(s); };
  const closeVideo = () => { setVd(null); vdTrigger.current?.focus(); };

  return (
    <section id="experience" className="exp wrap" aria-labelledby="exp-title">
      <div className="section-head">
        <span className="kicker" data-n="02">{experienceSection.kicker}</span>
        <h2 id="exp-title" className="section-title">{experienceSection.title}</h2>
      </div>

      <ul className="exp-list">
        {experiences.map((exp) => (
          <li key={exp.id} className="exp-card">
            <div className="exp-card-top">
              <p className="exp-company">{exp.company}</p>
              <p className="exp-dates"><Icon name="calendar" size={15} />{[exp.dates, ...exp.meta].join(" · ")}</p>
            </div>
            <h3 className="exp-role">{exp.role}</h3>
            <p className="exp-project">{exp.caseStudy.title}</p>
            <p className="exp-hook">{exp.hook}</p>
            <ul className="exp-tags" aria-label={t.themes}>{exp.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
            <div className="exp-actions">
              <button type="button" className="btn btn-primary exp-open" data-case={exp.id}
                aria-haspopup="dialog" onClick={(e) => open(exp, e.currentTarget)}>
                {t.caseStudy}<Icon name="arrow" size={16} />
                <span className="visually-hidden"> : {exp.caseStudy.title}</span>
              </button>
              <VideoButton video={exp.video} id={exp.id} title={exp.caseStudy.title} onOpen={openVideo} />
              <RepoButton repo={exp.repo} />
            </div>
          </li>
        ))}
      </ul>

      <dialog ref={dialogRef} className="cs-dialog" aria-labelledby="cs-dialog-title"
        onClose={onClosed}
        onClick={(e) => { if (e.target === dialogRef.current) close(); }}>
        {current && (
          <div className="cs-panel">
            <div className="cs-bar">
              <span className="cs-bar-title">{current.caseStudy.title}</span>
              <button type="button" className="btn btn-icon" onClick={close} aria-label={t.closeCase}>
                <Icon name="close" size={18} />
              </button>
            </div>
            <div className="cs-scroll">
              <CaseStudy exp={current} titleId="cs-dialog-title" />
            </div>
          </div>
        )}
      </dialog>

      <VideoDialog state={vd} onClose={closeVideo} />
    </section>
  );
}
