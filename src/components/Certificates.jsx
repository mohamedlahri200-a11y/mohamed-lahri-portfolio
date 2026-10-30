import { useRef, useState } from "react";
import Icon from "./Icon.jsx";
import { Lightbox } from "./Projects.jsx";
import { useLang } from "../i18n/LangContext.jsx";

/** Certificats : aperçu bord à bord, agrandissement sur fond clair et vérification. */
export default function Certificates() {
  const { c, t } = useLang();
  const { certificates, certificatesSection } = c;
  const [lb, setLb] = useState(null);
  const trigger = useRef(null);
  const open = (cert, el) => {
    trigger.current = el;
    setLb({ project: { title: cert.title, light: true, images: [{ ...cert.image, alt: t.certAlt(cert.title, cert.issuer, cert.via) }] }, index: 0 });
  };
  const closed = () => { document.documentElement.classList.remove("no-scroll"); setLb(null); trigger.current?.focus(); };

  return (
    <section id="certificats" className="cert wrap" aria-labelledby="cert-title">
      <div className="section-head">
        <span className="kicker" data-n="08">{certificatesSection.kicker}</span>
        <h2 id="cert-title" className="section-title">{certificatesSection.title}</h2>
      </div>
      <ul className="cert-grid">
        {certificates.map((cert) => (
          <li key={cert.id} className="cert-card">
            <button type="button" className="cert-shot" onClick={(e) => open(cert, e.currentTarget)}
              aria-label={t.certZoom(cert.title)}>
              <img src={cert.image.src} alt="" width={cert.image.w} height={cert.image.h} loading="lazy" decoding="async" />
              <span className="cert-zoom"><Icon name="search" size={16} /></span>
            </button>
            <div className="cert-body">
              <p className="cert-issuer">{cert.issuer} <span>· {t.via} {cert.via}</span></p>
              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-meta"><Icon name="calendar" size={14} />{cert.date}<span className="cert-topic">{cert.topic}</span></p>
              <ul className="cert-skills">{cert.skills.map((s) => <li key={s}>{s}</li>)}</ul>
              <div className="cert-actions">
                <button type="button" className="btn" onClick={(e) => open(cert, e.currentTarget)}>
                  <Icon name="eye" size={16} />{t.viewCert}
                </button>
                {cert.verifyUrl && (
                  <a className="btn" href={cert.verifyUrl} target="_blank" rel="noopener noreferrer">
                    <Icon name="check" size={16} />{t.verify}<Icon name="external" size={13} />
                    <span className="visually-hidden">{t.verifyLong}</span>
                  </a>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
      <Lightbox state={lb} onClose={closed} />
    </section>
  );
}
