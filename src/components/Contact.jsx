import { useEffect, useState } from "react";
import Icon from "./Icon.jsx";
import CvMenu from "./CvMenu.jsx";
import { useLang } from "../i18n/LangContext.jsx";

// Envoi sans serveur, deux services gratuits :
// 1) Web3Forms (recommandé, très fiable) si une clé est définie dans .env : VITE_WEB3FORMS_KEY=xxxx
//    → clé gratuite reçue par e-mail sur https://web3forms.com (cette clé est faite pour être publique).
// 2) FormSubmit (sans clé) sinon, ou si Web3Forms ne répond pas.
//    Au tout premier envoi, FormSubmit envoie un e-mail « Activate Form » : cliquez dessus une fois.
const WEB3FORMS_KEY = (import.meta.env.VITE_WEB3FORMS_KEY || "").trim();
const formEndpoint = (email) => `https://formsubmit.co/${email}`;

/**
 * Solution de secours très fiable : envoi classique du formulaire (sans JavaScript côté FormSubmit).
 * Le navigateur passe par la page FormSubmit puis revient sur le portfolio (?envoye=1#contact).
 */
function sendWithClassicForm(email, payload) {
  const form = document.createElement("form");
  form.method = "POST";
  form.action = formEndpoint(email);
  form.acceptCharset = "UTF-8";
  const back = `${location.origin}${location.pathname}?envoye=1#contact`;
  Object.entries({ ...payload, _next: back }).forEach(([name, value]) => {
    const input = document.createElement("input");
    input.type = "hidden";
    input.name = name;
    input.value = value;
    form.appendChild(input);
  });
  document.body.appendChild(form);
  form.submit();
}
// subject = index dans la liste des objets (le texte suit la langue choisie)
const EMPTY = { name: "", email: "", company: "", subject: 0, message: "", website: "" };

function validate(f, t) {
  const e = {};
  if (!f.name.trim()) e.name = t.errName;
  if (!f.email.trim()) e.email = t.errEmail;
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim())) e.email = t.errEmailBad;
  if (f.message.trim().length < 10) e.message = t.errMsg;
  return e;
}

function Copy({ value, label }) {
  const { t } = useLang();
  const [done, setDone] = useState(false);
  return (
    <button type="button" className="chip-btn" onClick={async () => {
      try { await navigator.clipboard.writeText(value); setDone(true); setTimeout(() => setDone(false), 1800); } catch { /* sélection manuelle possible */ }
    }} aria-label={t.copyOf(label)}>
      <Icon name={done ? "check" : "copy"} size={13} /><span aria-live="polite">{done ? t.copied : t.copy}</span>
    </button>
  );
}

/** Étape 12 : contact — coordonnées + formulaire envoyé par e-mail. */
export default function Contact() {
  const { c, t, lang } = useLang();
  const { profile, contactSection: C, hero } = c;
  const [f, setF] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ state: "idle", message: "" });
  const set = (k) => (e) => setF((v) => ({ ...v, [k]: e.target.value }));

  // Retour après un envoi classique : afficher la confirmation et nettoyer l'adresse.
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get("envoye") === "1") {
      setStatus({ state: "sent", message: t.thanks });
      params.delete("envoye");
      const q = params.toString();
      history.replaceState(null, "", `${location.pathname}${q ? `?${q}` : ""}#contact`);
    }
  }, [t.thanks]);

  const submit = async (e) => {
    e.preventDefault();
    const errs = validate(f, t);
    setErrors(errs);
    if (Object.keys(errs).length) {
      document.getElementById(`ct-${Object.keys(errs)[0]}`)?.focus();
      return;
    }
    setStatus({ state: "sending", message: "" });
    // Champ piège rempli = robot : on fait comme si tout s'était bien passé, sans rien envoyer.
    if (f.website) { setStatus({ state: "sent", message: t.thanks }); setF(EMPTY); return; }
    const subject = C.subjects[f.subject];
    const payload = {
      _subject: `[Portfolio] ${subject} — ${f.name.trim()}`,
      _template: "table",
      _captcha: "false",
      _replyto: f.email.trim(),
      Nom: f.name.trim(),
      "E-mail": f.email.trim(),
      Entreprise: f.company.trim() || "—",
      Objet: subject,
      Message: f.message.trim(),
    };
    // 1) Web3Forms (si la clé est configurée)
    if (WEB3FORMS_KEY) {
      try {
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            access_key: WEB3FORMS_KEY,
            subject: payload._subject,
            from_name: "Portfolio Mohamed Lahri",
            replyto: payload._replyto,
            Nom: payload.Nom,
            "E-mail": payload["E-mail"],
            Entreprise: payload.Entreprise,
            Objet: payload.Objet,
            Message: payload.Message,
          }),
        });
        const data = await res.json().catch(() => ({}));
        if (res.ok && data.success) {
          setStatus({ state: "sent", message: t.thanks });
          setF(EMPTY);
          return;
        }
        console.warn("[Contact] Web3Forms a refusé :", res.status, data.message || data, "→ FormSubmit");
      } catch (err) {
        console.warn("[Contact] Web3Forms injoignable :", err, "→ FormSubmit");
      }
    }
    // 2) FormSubmit, envoi classique (pas de problème de CORS ni de bloqueur) : le navigateur
    //    passe par FormSubmit puis revient sur le portfolio avec ?envoye=1#contact.
    console.info("[Contact] envoi via FormSubmit (formulaire classique)");
    try {
      sendWithClassicForm(profile.email, payload);
    } catch {
      // Dernier recours : ouvrir la messagerie du visiteur avec le message déjà rempli.
      const body = `${payload.Message}\n\n— ${payload.Nom} (${payload["E-mail"]}) · ${payload.Entreprise}`;
      location.href = `mailto:${profile.email}?subject=${encodeURIComponent(payload._subject)}&body=${encodeURIComponent(body)}`;
      setStatus({ state: "idle", message: "" });
    }
  };

  const field = (k, label, props = {}, Tag = "input") => (
    <div className={`ct-field ${errors[k] ? "has-error" : ""}`}>
      <label htmlFor={`ct-${k}`}>{label}{props.required && <span aria-hidden="true"> *</span>}</label>
      <Tag id={`ct-${k}`} value={f[k]} onChange={set(k)} aria-invalid={!!errors[k]}
        aria-describedby={errors[k] ? `ct-${k}-err` : undefined} {...props} />
      {errors[k] && <p id={`ct-${k}-err`} className="ct-error">{errors[k]}</p>}
    </div>
  );

  return (
    <section id="contact" className="ct wrap" aria-labelledby="ct-title">
      <div className="ct-shell">
        <div className="ct-info">
          <span className="kicker" data-n="10">{C.kicker}</span>
          <h2 id="ct-title" className="section-title ct-title">{C.title}</h2>
          <p className="ct-text">{C.text}</p>
          <p className="ct-avail"><span className="status-dot" aria-hidden="true" />{hero.availability}</p>

          <ul className="ct-list">
            <li>
              <span className="ct-icon"><Icon name="mail" size={18} /></span>
              <span className="ct-item"><span className="ct-label">{t.email}</span><a href={`mailto:${profile.email}`}>{profile.email.split("@")[0]}<wbr />@{profile.email.split("@")[1]}</a></span>
              <Copy value={profile.email} label={t.theEmail} />
            </li>
            <li>
              <span className="ct-icon"><Icon name="phone" size={18} /></span>
              <span className="ct-item"><span className="ct-label">{t.phone}</span><a href={`tel:${profile.phone.href}`}>{profile.phone.display}</a></span>
            </li>
            <li>
              <span className="ct-icon"><Icon name="linkedin" size={18} /></span>
              <span className="ct-item"><span className="ct-label">LinkedIn</span>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">{t.seeProfile}<span className="visually-hidden">{t.newTab}</span></a></span>
            </li>
            <li>
              <span className="ct-icon"><Icon name="github" size={18} /></span>
              <span className="ct-item"><span className="ct-label">GitHub</span>
                <a href={profile.github} target="_blank" rel="noopener noreferrer">mohamedlahri200-a11y<span className="visually-hidden">{t.newTab}</span></a></span>
            </li>
            <li>
              <span className="ct-icon"><Icon name="pin" size={18} /></span>
              <span className="ct-item"><span className="ct-label">{t.location}</span><span>{profile.location}</span></span>
            </li>
          </ul>
          <CvMenu align="left" label={t.downloadCv} />
        </div>

        <form className="ct-form" onSubmit={submit} noValidate aria-describedby="ct-required">
          {status.state === "sent" ? (
            <div className="ct-success" role="status">
              <span className="ct-success-icon"><Icon name="check" size={26} /></span>
              <p className="ct-success-title">{t.sent}</p>
              <p>{status.message}</p>
              <button type="button" className="btn" onClick={() => setStatus({ state: "idle", message: "" })}>{t.sendAnother}</button>
            </div>
          ) : (
            <>
              <div className="ct-row">
                {field("name", t.fullName, { required: true, autoComplete: "name", maxLength: 100 })}
                {field("email", t.proEmail, { required: true, type: "email", autoComplete: "email", maxLength: 190 })}
              </div>
              <div className="ct-row">
                {field("company", t.company, { autoComplete: "organization", maxLength: 150 })}
                <div className="ct-field">
                  <label htmlFor="ct-subject">{t.subject}</label>
                  <select id="ct-subject" value={f.subject} onChange={(e) => setF((v) => ({ ...v, subject: Number(e.target.value) }))}>
                    {C.subjects.map((s, i) => <option key={i} value={i}>{s}</option>)}
                  </select>
                </div>
              </div>
              {field("message", t.message, { required: true, rows: 6, maxLength: 3000 }, "textarea")}
              {/* Piège à robots : invisible pour les humains */}
              <div className="ct-hp" aria-hidden="true">
                <label htmlFor="ct-website">{t.website}</label>
                <input id="ct-website" tabIndex={-1} autoComplete="off" value={f.website} onChange={set("website")} />
              </div>
              <div className="ct-footer">
                <p id="ct-required" className="ct-note">{t.required}</p>
                <button type="submit" className="btn btn-primary btn-lg" disabled={status.state === "sending"}>
                  {status.state === "sending" ? t.sending : <>{t.sendMessage}<Icon name="arrow" size={17} /></>}
                </button>
              </div>
              {status.state === "error" && <p className="ct-alert" role="alert">{status.message}</p>}
              {status.state === "activation" && <p className="ct-alert is-info" role="status">{status.message}</p>}
            </>
          )}
        </form>
      </div>
    </section>
  );
}
