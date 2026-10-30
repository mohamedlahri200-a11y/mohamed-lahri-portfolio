import { Fragment } from "react";
import Icon from "./Icon.jsx";
import CvMenu from "./CvMenu.jsx";
import Starfield from "./Starfield.jsx";
import { useLang } from "../i18n/LangContext.jsx";

/** Met en forme **gras** et ==mise en valeur IA== dans un texte. */
function rich(text) {
  return text.split(/(\*\*[^*]+\*\*|==[^=]+==)/g).map((part, i) => {
    if (part.startsWith("**")) return <strong key={i}>{part.slice(2, -2)}</strong>;
    if (part.startsWith("==")) return <strong key={i} className="hl-ai">{part.slice(2, -2)}</strong>;
    return <Fragment key={i}>{part}</Fragment>;
  });
}

/** Étape 2 : section Accueil. */
export { rich };
export default function Hero() {
  const { c, t } = useLang();
  const { profile, hero } = c;
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="hero-sky" aria-hidden="true"><Starfield /></div>

      <div className="hero-inner wrap">
        <div className="hero-body">
          <p className="hero-status reveal" style={{ "--d": "0ms" }}>
            <span className="status-dot" aria-hidden="true" />
            {hero.availability}
          </p>

          <p className="hero-name reveal" style={{ "--d": "60ms" }}>
            <strong className="hero-fullname">{profile.name}</strong>
            <span className="hero-role">{hero.roleLine}</span>
          </p>

          <h1 id="hero-title" className="hero-title reveal" style={{ "--d": "120ms" }}>
            {hero.title.map((part, i) =>
              part.accent ? <span key={i} className={`accent accent-${part.accent}`}>{part.text}</span> : <Fragment key={i}>{part.text}</Fragment>
            )}
          </h1>

          <p className="hero-intro reveal" style={{ "--d": "200ms" }}>{rich(hero.pitch)}</p>

          <div className="hero-actions reveal" style={{ "--d": "280ms" }}>
            <a className="btn btn-primary btn-lg" href="#projets">
              {hero.actions.projects}<Icon name="arrow" size={17} />
            </a>
            <a className="btn btn-lg" href="#contact">
              <Icon name="mail" size={17} />{hero.actions.contact}
            </a>
            <CvMenu size="lg" align="left" label={hero.actions.cv} />
          </div>

          <ul className="hero-proofs reveal" style={{ "--d": "330ms" }}>
            {hero.proofs.map((p) => {
              const ext = p.href.startsWith("http");
              return (
                <li key={p.label}>
                  <a href={p.href} className="hero-proof" {...(ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                    <span className="hero-proof-icon"><Icon name={p.icon} size={17} /></span>
                    <span className="hero-proof-text"><strong>{p.label}</strong><span>{p.detail}</span></span>
                    {ext && <span className="visually-hidden">{t.newTab}</span>}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="reveal" style={{ "--d": "380ms" }}>
            <ul className="hero-stack" aria-label={t.mainTech}>
              {hero.stack.map((t) => (
                <li key={t.name} className="tech" style={{ "--tc": t.color }}>
                  <Icon name={t.icon} size={16} />{t.name}
                </li>
              ))}
            </ul>
          </div>

          <ul className="hero-links reveal" style={{ "--d": "420ms" }}>
            <li><Icon name="pin" size={16} />{profile.location}</li>
            <li><a href={profile.linkedin} target="_blank" rel="noopener noreferrer"><Icon name="linkedin" size={16} />LinkedIn<span className="visually-hidden">{t.newTab}</span></a></li>
            <li><a href={profile.github} target="_blank" rel="noopener noreferrer"><Icon name="github" size={16} />GitHub<span className="visually-hidden">{t.newTab}</span></a></li>
          </ul>
        </div>

        <figure className="hero-photo">
          <div className="photo-frame">
            <picture>
              <source type="image/webp" srcSet={`${profile.photo.webp} 640w, ${profile.photo.webp2x} 796w`}
                sizes="(max-width: 760px) 210px, (max-width: 980px) 260px, 320px" />
              <img src={profile.photo.jpg} alt={`${t.portraitOf} ${profile.name}`} width={profile.photo.width}
                height={profile.photo.height} fetchpriority="high" decoding="async" />
            </picture>
          </div>
          <figcaption className="photo-caption">
            <span className="photo-caption-icon"><Icon name="school" size={18} /></span>
            <span><strong>{hero.photoCaption.title}</strong>{hero.photoCaption.text}</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
