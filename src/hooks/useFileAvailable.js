import { useEffect, useState } from "react";

const cache = new Map();

/** Vérifie qu'un fichier existe vraiment (HEAD + type attendu). null = en cours, true / false sinon. */
export default function useFileAvailable(href, expectedType = "pdf") {
  const [ok, setOk] = useState(cache.has(href) ? cache.get(href) : null);
  useEffect(() => {
    if (!href) { setOk(false); return undefined; }
    if (cache.has(href)) { setOk(cache.get(href)); return undefined; }
    let alive = true;
    fetch(href, { method: "HEAD" })
      .then((res) => res.ok && (res.headers.get("content-type") || "").includes(expectedType))
      .catch(() => false)
      .then((v) => { cache.set(href, v); if (alive) setOk(v); });
    return () => { alive = false; };
  }, [href, expectedType]);
  return ok;
}
