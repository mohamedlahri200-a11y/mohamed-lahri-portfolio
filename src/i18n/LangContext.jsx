import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { CONTENT } from "../data/content.js";
import { UI } from "./ui.jsx";

const KEY = "lang";
const LangContext = createContext(null);

function initialLang() {
  // 1) lien partagé avec ?lang=en  2) dernier choix du visiteur  3) langue du navigateur
  const fromUrl = new URLSearchParams(location.search).get("lang");
  if (fromUrl === "fr" || fromUrl === "en") return fromUrl;
  try {
    const saved = localStorage.getItem(KEY);
    if (saved === "fr" || saved === "en") return saved;
  } catch { /* stockage indisponible */ }
  // Par défaut : français, sauf navigateur en anglais.
  return (navigator.language || "").toLowerCase().startsWith("en") ? "en" : "fr";
}

export function LangProvider({ children }) {
  const [lang, setLangState] = useState(initialLang);

  const setLang = useCallback((l) => {
    setLangState(l);
    try { localStorage.setItem(KEY, l); } catch { /* ignoré */ }
  }, []);

  useEffect(() => {
    const t = UI[lang].meta;
    document.documentElement.lang = lang;
    document.title = t.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", t.description);
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang, c: CONTENT[lang], t: UI[lang] }), [lang, setLang]);
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

/** { lang, setLang, c: contenu du portfolio, t: textes d'interface } */
export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang doit être utilisé dans <LangProvider>");
  return ctx;
}
