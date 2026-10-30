import { useEffect, useRef } from "react";

/**
 * Ciel étoilé en arrière-plan (canvas 2D, aucune bibliothèque).
 * - À l'ouverture du portfolio : une pluie d'étoiles filantes traverse l'accueil (≈ 3 s).
 * - Ensuite : étoiles scintillantes + pluie continue d'étoiles qui tombent.
 * - Sombre : étoiles lumineuses blanches ; clair : étoiles indigo plus discrètes (lisibilité).
 * - prefers-reduced-motion : ciel fixe, aucune animation ni pluie d'étoiles.
 * - Pause automatique hors écran ou onglet caché.
 */
const THEMES = {
  dark: { colors: ["255,255,255", "199,210,254", "153,246,228"], alpha: 0.85, twinkle: 0.45, meteor: "255,255,255", meteorAlpha: 0.9 },
  light: { colors: ["67,56,202", "11,15,23", "15,118,110"], alpha: 0.34, twinkle: 0.2, meteor: "67,56,202", meteorAlpha: 0.85 },
};

const SHOWER = { count: 70, duration: 4200 }; // pluie d'étoiles à l'ouverture (forte)
const RAIN = { min: 220, max: 650 };          // ensuite : une étoile qui tombe toutes les 0,2 à 0,65 s

export default function Starfield() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    const root = document.documentElement;
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    let stars = [];
    let meteors = [];
    let nextShot = 0;
    let showerDone = false;
    let w = 0, h = 0, dpr = 1;
    let raf = 0, visible = true;
    let palette = THEMES[root.dataset.theme === "dark" ? "dark" : "light"];

    const seed = () => {
      const count = Math.min(340, Math.round((w * h) / 3600));
      stars = Array.from({ length: count }, () => {
        const big = Math.random() < 0.08;
        return {
          x: Math.random() * w,
          y: Math.random() * h,
          r: big ? 1.1 + Math.random() * 0.7 : 0.35 + Math.random() * 0.75,
          c: Math.floor(Math.random() * 3),
          base: 0.35 + Math.random() * 0.65,
          speed: 0.4 + Math.random() * 1.4,
          phase: Math.random() * Math.PI * 2,
        };
      });
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = rect.width; h = rect.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
      if (motionQuery.matches || !raf) draw(0, true);
    };

    /** Une étoile filante. steep = chute plus verticale (pluie d'ouverture). */
    const makeMeteor = (t, steep = false) => {
      const fromLeft = Math.random() < 0.5;
      const base = steep ? 1.05 + Math.random() * 0.35 : 0.42; // angle par rapport à l'horizontale
      const angle = (fromLeft ? base : Math.PI - base) + (Math.random() - 0.5) * 0.2;
      const speed = steep ? 0.7 + Math.random() * 0.5 : 0.75; // px / ms
      return {
        x: steep ? Math.random() * w : fromLeft ? Math.random() * w * 0.5 : w * 0.5 + Math.random() * w * 0.5,
        y: steep ? -20 - Math.random() * h * 0.15 : Math.random() * h * 0.35,
        vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed, speed,
        born: t, life: steep ? 1100 + Math.random() * 900 : 900 + Math.random() * 500,
        len: steep ? 90 + Math.random() * 150 : 110 + Math.random() * 80,
        width: steep ? 1.2 + Math.random() * 1.1 : 1.5,
      };
    };

    /** Pluie d'étoiles à l'ouverture : départs échelonnés sur ≈ 3 s. */
    const startShower = (t0) => {
      if (showerDone) return;
      showerDone = true;
      for (let i = 0; i < SHOWER.count; i++) {
        const delay = (i / SHOWER.count) * SHOWER.duration + Math.random() * 250;
        meteors.push({ pending: t0 + delay });
      }
      canvas.dataset.shower = "1";
    };

    const drawMeteor = (m, t) => {
      const age = t - m.born;
      const p = age / m.life;
      const fade = Math.sin(Math.PI * Math.min(1, p)) * palette.meteorAlpha;
      const hx = m.x + m.vx * age, hy = m.y + m.vy * age;
      const tx = hx - (m.vx / m.speed) * m.len, ty = hy - (m.vy / m.speed) * m.len;
      const g = ctx.createLinearGradient(hx, hy, tx, ty);
      g.addColorStop(0, `rgba(${palette.meteor},${fade.toFixed(3)})`);
      g.addColorStop(1, `rgba(${palette.meteor},0)`);
      ctx.strokeStyle = g;
      ctx.lineWidth = m.width;
      ctx.lineCap = "round";
      ctx.beginPath(); ctx.moveTo(hx, hy); ctx.lineTo(tx, ty); ctx.stroke();
      // tête lumineuse
      ctx.fillStyle = `rgba(${palette.meteor},${(fade * 0.9).toFixed(3)})`;
      ctx.beginPath(); ctx.arc(hx, hy, m.width * 0.9, 0, Math.PI * 2); ctx.fill();
    };

    const draw = (t, still = false) => {
      ctx.clearRect(0, 0, w, h);
      const sec = t / 1000;
      for (const s of stars) {
        const tw = still ? 0 : Math.sin(sec * s.speed + s.phase);
        const a = palette.alpha * s.base * (1 - palette.twinkle + palette.twinkle * (0.5 + 0.5 * tw));
        ctx.fillStyle = `rgba(${palette.colors[s.c]},${a.toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      }
      if (still) { meteors = meteors.filter((m) => m.pending); return; }

      // Étoiles filantes : celles de la pluie d'ouverture, puis une de temps en temps
      meteors = meteors.flatMap((m) => {
        if (m.pending) {
          return t < m.pending ? [m] : [makeMeteor(t, true)];
        }
        return t - m.born > m.life ? [] : [m];
      });
      if (!meteors.length) delete canvas.dataset.shower;
      // Pluie continue : des étoiles tombent en permanence, plus une grande étoile filante de temps en temps
      if (t > nextShot) {
        meteors.push(makeMeteor(t, true));
        if (Math.random() < 0.12) meteors.push(makeMeteor(t));
        nextShot = t + RAIN.min + Math.random() * (RAIN.max - RAIN.min);
      }
      for (const m of meteors) if (!m.pending) drawMeteor(m, t);
    };

    const loop = (t) => { draw(t); raf = requestAnimationFrame(loop); };
    const start = () => {
      if (raf || motionQuery.matches || !visible || document.hidden) return;
      const now = performance.now();
      if (!nextShot) nextShot = now + SHOWER.duration;
      startShower(now + 250);
      raf = requestAnimationFrame(loop);
    };
    const stop = () => { cancelAnimationFrame(raf); raf = 0; };
    const refresh = () => { stop(); draw(0, true); start(); };

    // Changement de thème (attribut data-theme posé par useTheme)
    const themeObserver = new MutationObserver(() => {
      palette = THEMES[root.dataset.theme === "dark" ? "dark" : "light"];
      if (!raf) draw(0, true);
    });
    themeObserver.observe(root, { attributes: true, attributeFilter: ["data-theme"] });

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      visible ? start() : stop();
    });
    io.observe(canvas);

    const onVisibility = () => (document.hidden ? stop() : start());
    document.addEventListener("visibilitychange", onVisibility);
    motionQuery.addEventListener?.("change", refresh);

    resize();
    start();

    return () => {
      stop();
      themeObserver.disconnect();
      resizeObserver.disconnect();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      motionQuery.removeEventListener?.("change", refresh);
    };
  }, []);

  return <canvas ref={ref} className="starfield" aria-hidden="true" />;
}
