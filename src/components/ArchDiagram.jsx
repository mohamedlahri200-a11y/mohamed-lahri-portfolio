import Icon from "./Icon.jsx";
import { useLang } from "../i18n/LangContext.jsx";

/**
 * Schéma d'architecture en HTML/CSS (pas d'image), style « diagramme technique ».
 * Disposition décrite par des zones de grille : une pour ordinateur, une pour mobile.
 * Flèches : "right" (→), "down" (↓), "both-v" (↕) — flux animé (désactivé si « réduire les animations »).
 */
export default function ArchDiagram({ diagram }) {
  const { t } = useLang();
  const style = {
    "--cols-d": diagram.desktop.cols,
    "--areas-d": diagram.desktop.areas,
    "--cols-m": diagram.mobile.cols,
    "--areas-m": diagram.mobile.areas,
  };
  const hasAi = diagram.nodes.some((n) => n.ai);
  return (
    <figure className="arch">
      <div className="arch-head">
        <span className="arch-head-title"><Icon name="layers" size={15} />{t.archTitle}</span>
        <span className="arch-legend" aria-hidden="true">
          <span><i />{t.legendService}</span>
          {hasAi && <span><i className="is-ai" />{t.legendAi}</span>}
          <span><i className="is-flow" />{t.legendFlow}</span>
        </span>
      </div>
      <div className="arch-canvas">
        <div className="arch-grid" style={style} role="img" aria-label={diagram.label}>
          {diagram.nodes.map((n) => (
            <div key={n.id} className={`arch-node ${n.ai ? "is-ai" : ""}`} style={{ gridArea: n.id }}>
              <span className="arch-node-icon"><Icon name={n.icon} size={20} /></span>
              <span className="arch-node-title">{n.title}</span>
              <span className="arch-node-sub">{n.sub}</span>
            </div>
          ))}
          {diagram.links.map((l) => (
            <div key={l.id} className="arch-link" style={{ gridArea: l.id }}>
              <span className={`arch-line dir-${l.desktop} only-d`} />
              <span className={`arch-line dir-${l.mobile} only-m`} />
              {l.label && <span className="arch-label">{l.label}</span>}
            </div>
          ))}
        </div>
      </div>
      {diagram.caption && <figcaption className="arch-caption">{diagram.caption}</figcaption>}
    </figure>
  );
}
