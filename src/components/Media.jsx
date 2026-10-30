import { useEffect, useRef } from "react";
import Icon from "./Icon.jsx";
import { useLang } from "../i18n/LangContext.jsx";
import useFileAvailable from "../hooks/useFileAvailable.js";

const hasVideo = (v) => !!(v && v.src);

/**
 * Vidéo d'un stage ou d'un projet.
 * - video = false → pas de vidéo prévue ;
 * - video = { src, poster } → ce fichier ;
 * - video = null → détection automatique : il suffit de copier « <id>.mp4 »
 *   (et éventuellement « <id>.jpg » comme image d'aperçu) dans public/videos/.
 */
export function useVideo(video, id) {
  const auto = video === null && id ? `/videos/${id}.mp4` : null;
  const found = useFileAvailable(auto || "", "video");
  const poster = useFileAvailable(auto ? `/videos/${id}.jpg` : "", "image");
  if (video === false) return false;
  if (hasVideo(video)) return video;
  if (auto && found) return { src: auto, poster: poster ? `/videos/${id}.jpg` : null };
  return null;
}

/** Bouton GitHub : actif seulement si l'URL exacte du dépôt est renseignée (sinon « bientôt public »). */
export function RepoButton({ repo }) {
  const { t } = useLang();
  if (repo) {
    return (
      <a className="btn" href={repo} target="_blank" rel="noopener noreferrer">
        <Icon name="github" size={17} />{t.repo}<Icon name="external" size={13} />
        <span className="visually-hidden">{t.newTab}</span>
      </a>
    );
  }
  return (
    <span className="btn is-soon" aria-disabled="true" title={t.repoSoon}>
      <Icon name="github" size={16} />{t.repoSoon}
    </span>
  );
}

/** Lien « Démo en ligne » : seulement si une démo existe réellement. */
export function DemoButton({ demo }) {
  const { t } = useLang();
  if (!demo) return null;
  return (
    <a className="btn" href={demo} target="_blank" rel="noopener noreferrer">
      {t.liveDemo}<Icon name="external" size={14} /><span className="visually-hidden">{t.newTab}</span>
    </a>
  );
}

/** Bouton « Démo vidéo » : ouvre le lecteur, ou indique « bientôt disponible ». */
export function VideoButton({ video: declared, id, title, onOpen, primary = false }) {
  const { t } = useLang();
  const video = useVideo(declared, id);
  if (video === false) return null; // pas de vidéo prévue pour cet élément
  if (!hasVideo(video)) {
    return (
      <span className="btn is-soon" aria-disabled="true" title={t.videoSoon}>
        <Icon name="video" size={16} />{t.video}<span className="soon-tag">{t.soon}</span>
      </span>
    );
  }
  return (
    <button type="button" className={`btn ${primary ? "btn-primary" : ""}`} onClick={(e) => onOpen({ video, title }, e.currentTarget)}>
      <Icon name="play" size={16} />{t.video}<span className="visually-hidden"> : {title}</span>
    </button>
  );
}

/**
 * Emplacement de la démo vidéo, intégré dans la page.
 * video = { src, poster } → lecteur ; sinon → emplacement « bientôt disponible ».
 */
export function VideoSlot({ video: declared, id, title, compact = false }) {
  const { t } = useLang();
  const video = useVideo(declared, id);
  if (video === false) return null;
  if (hasVideo(video)) {
    return (
      <figure className={`video-slot ${compact ? "is-compact" : ""}`}>
        <video controls preload="metadata" playsInline poster={video.poster || undefined} aria-label={`${t.videoOf} ${title}`}>
          <source src={video.src} type={video.type || "video/mp4"} />
          {t.noVideoSupport}
        </video>
      </figure>
    );
  }
  return (
    <figure className={`video-slot is-empty ${compact ? "is-compact" : ""}`} aria-label={`${t.videoOf} ${title} — ${t.videoSoon}`}>
      <span className="video-play" aria-hidden="true"><Icon name="play" size={22} /></span>
      <figcaption>
        <strong>{t.video}</strong>
        <span>{t.videoSoon}</span>
      </figcaption>
    </figure>
  );
}

/** Lecteur vidéo plein écran (dialog modal). state = { video, title } | null */
export function VideoDialog({ state, onClose }) {
  const { t } = useLang();
  const ref = useRef(null);
  useEffect(() => {
    const d = ref.current;
    if (state && d && !d.open) {
      d.showModal();
      document.documentElement.classList.add("no-scroll");
    }
  }, [state]);
  const closed = () => {
    ref.current?.querySelector("video")?.pause();
    document.documentElement.classList.remove("no-scroll");
    onClose();
  };
  return (
    <dialog ref={ref} className="lb vd" aria-label={state ? `${t.videoOf} ${state.title}` : t.video} onClose={closed}
      onClick={(e) => { if (e.target === ref.current) ref.current.close(); }}>
      {state && (
        <div className="lb-panel">
          <div className="lb-bar">
            <span className="lb-title">{state.title}</span>
            <button type="button" className="btn btn-icon" onClick={() => ref.current.close()} aria-label={t.closeVideo}>
              <Icon name="close" size={18} />
            </button>
          </div>
          <video className="vd-video" controls autoPlay playsInline poster={state.video.poster || undefined}>
            <source src={state.video.src} type={state.video.type || "video/mp4"} />
            {t.noVideoSupport}
          </video>
        </div>
      )}
    </dialog>
  );
}
