// Assemble le contenu dans la langue demandée :
// français = profile.js ; anglais = profile.js + traductions de profile.en.js.
import * as fr from "./profile.js";
import enOverrides from "./profile.en.js";

const isObj = (v) => v && typeof v === "object" && !Array.isArray(v);

/** Fusion profonde : les objets sont fusionnés clé par clé, les tableaux élément par élément. */
export function merge(base, over) {
  if (over === undefined) return base;
  if (Array.isArray(base) && Array.isArray(over)) {
    // Éléments avec un « id » (projets…) : appariés par id, sinon par position.
    if (over.length && over.every((o) => isObj(o) && o.id)) {
      return base.map((b) => merge(b, over.find((o) => o.id === b?.id)));
    }
    return base.map((b, i) => (i < over.length ? merge(b, over[i]) : b));
  }
  if (isObj(base) && isObj(over)) {
    const out = { ...base };
    for (const k of Object.keys(over)) out[k] = merge(base[k], over[k]);
    return out;
  }
  return over;
}

const FR = { ...fr };
const EN = merge(FR, enOverrides);

export const CONTENT = { fr: FR, en: EN };
