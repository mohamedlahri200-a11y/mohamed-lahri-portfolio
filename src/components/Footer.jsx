import Icon from "./Icon.jsx";
import { useLang } from "../i18n/LangContext.jsx";

export default function Footer() {
  const { c, t } = useLang();
  const { profile } = c;
  return (
    <footer className="footer">
      <div className="footer-inner wrap">
        <p className="footer-id"><strong>{profile.name}</strong><span>{profile.subtitle} · {profile.shortTitle}</span></p>
        <nav className="footer-links" aria-label={t.footerLinks}>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer"><Icon name="linkedin" size={16} />LinkedIn</a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer"><Icon name="github" size={16} />GitHub</a>
          <a href={`mailto:${profile.email}`}><Icon name="mail" size={16} />{t.email}</a>
        </nav>
        <p className="footer-copy">© {new Date().getFullYear()} {profile.name}</p>
      </div>
    </footer>
  );
}
