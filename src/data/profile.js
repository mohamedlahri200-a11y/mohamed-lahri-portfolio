// ═══════════════════════════════════════════════════════════════════════
//  CONTENU DU PORTFOLIO (FRANÇAIS) — source principale des textes, projets,
//  compétences, liens… La version anglaise est dans profile.en.js : elle ne
//  contient QUE les traductions (les liens, images, dépôts et vidéos sont
//  repris d'ici automatiquement). Le design s'adapte tout seul.
//  Les valeurs entre [crochets] sont à compléter.
// ═══════════════════════════════════════════════════════════════════════

const GITHUB = "https://github.com/mohamedlahri200-a11y";

// ── Identité & liens ────────────────────────────────────────────────────
export const profile = {
  name: "Mohamed Lahri",
  shortTitle: "Full-Stack Java & IA",
  school: "ENSA Oujda",
  subtitle: "Élève ingénieur, ENSA Oujda",
  // Photo optimisée (WebP + JPG de secours) : public/images/
  photo: { webp: "/images/profile.webp", webp2x: "/images/profile-796.webp", jpg: "/images/profile.jpg", thumb: "/images/profile-96.webp", width: 640, height: 817 },
  email: "mohamed.lahri200@gmail.com",
  // Téléphone : affichage + format international pour le lien « appeler »
  phone: { display: "06 32 04 11 19", href: "+212632041119" },
  location: "Oujda, Oriental · Maroc",
  linkedin: "https://www.linkedin.com/in/mohamed-lahri",
  github: GITHUB,
};

// ── CV téléchargeables ──────────────────────────────────────────────────
// Placez les fichiers dans frontend/public/cv/ avec exactement ces noms.
// Le site vérifie automatiquement leur présence : un CV absent s'affiche
// « bientôt disponible » au lieu d'un lien cassé.
export const cvs = [
  { lang: "fr", label: "CV en français", action: "Télécharger", soon: "Bientôt disponible", href: "/cv/CV_Mohamed_Lahri_FR.pdf", file: "CV_Mohamed_Lahri_FR.pdf" },
  { lang: "en", label: "CV in English", action: "Download", soon: "Coming soon", href: "/cv/CV_Mohamed_Lahri_EN.pdf", file: "CV_Mohamed_Lahri_EN.pdf" },
];

// ── Accueil ─────────────────────────────────────────────────────────────
export const hero = {
  availability: "À la recherche d’un stage PFA — Juillet à octobre 2027",
  // Preuves affichées sous les boutons de l'accueil (faits présents dans le portfolio)
  proofs: [
    { icon: "briefcase", label: "2 stages", detail: "CHU Mohammed VI · 3LM Solutions", href: "#experience" },
    { icon: "zap", label: "Jusqu’à 3,46x plus rapide", detail: "résultat mesuré · WinAgent", href: "#etude-cas-winagent" },
    { icon: "github", label: "Code sur GitHub", detail: "stages & projets", href: GITHUB },
  ],
  // Ligne affichée sous le nom
  roleLine: "Élève ingénieur en Génie Informatique · Génie Logiciel & IA · ENSA Oujda",
  // Phrase d'accroche découpée pour mettre en valeur certains mots :
  // accent "stack" = indigo (Full-Stack Java), accent "ai" = turquoise (IA).
  title: [
    { text: "Je développe des applications " },
    { text: "Full-Stack Java", accent: "stack" },
    { text: " qui intègrent l’" },
    { text: "intelligence artificielle", accent: "ai" },
    { text: "." },
  ],
  // Texte complet. ==…== = mis en valeur en turquoise (IA), **…** = gras.
  intro:
    "Élève en 2e année du cycle ingénieur en **Génie Informatique** (Génie Logiciel & Intelligence Artificielle) à l’ENSA d’Oujda, je réalise mes projets avec une stack **Java** : **Spring Boot** côté back-end et **React** ou **Angular** côté front-end. J’y intègre l’==IA== avec Python : Machine Learning, LLMs et RAG. J’ai aussi une **culture DevOps** (Docker, CI/CD) qui m’aide à penser une application jusqu’à son déploiement. Je m’intéresse particulièrement à l’intégration de l’intelligence artificielle dans des solutions concrètes répondant à des besoins réels. Je souhaite rejoindre une équipe dynamique pour mettre en pratique mes compétences, contribuer à des projets innovants et progresser dans un environnement professionnel.",
  // Texte affiché dans l'accueil
  pitch:
    "Élève en 2e année du cycle ingénieur en **Génie Informatique** (Génie Logiciel & Intelligence Artificielle) à l’ENSA d’Oujda, je réalise mes projets avec une stack **Java** : **Spring Boot** côté back-end et **React** ou **Angular** côté front-end. J’y intègre l’==IA== avec Python : Machine Learning, LLMs et RAG. J’ai aussi une **culture DevOps** (Docker, CI/CD) qui m’aide à penser une application jusqu’à son déploiement.",
  // icon = pictogramme générique (pas de logo de marque), color = touche de couleur
  stack: [
    { name: "Java", icon: "cup", color: "#e76f00" },
    { name: "Spring Boot", icon: "leaf", color: "#6db33f" },
    { name: "React", icon: "atom", color: "#149eca" },
    { name: "Angular", icon: "shield", color: "#dd0031" },
    { name: "Python", icon: "code", color: "#3776ab" },
    { name: "MySQL", icon: "database", color: "#00758f" },
    { name: "Machine Learning", icon: "sparkles", color: "#12a594" },
    { name: "Docker", icon: "box", color: "#2496ed" },
  ],
  // Libellé sous la photo (informations confirmées uniquement)
  photoCaption: { title: "ENSA Oujda", text: "Génie Logiciel & IA · 2e année" },
  actions: { projects: "Voir mes projets", contact: "Me contacter", cv: "Télécharger mon CV" },
};

// ── À propos ────────────────────────────────────────────────────────────
// Textes repris de l'introduction (aucune information nouvelle).
export const about = {
  kicker: "Profil & vision",
  // Titre : la partie "accent" est mise en valeur (dégradé)
  title: [
    { text: "Du Full-Stack Java " },
    { text: "à l’IA appliquée.", accent: true },
  ],
  // **…** = gras, ==…== = mot-clé mis en valeur
  intro: "Je suis **Mohamed Lahri**, élève ingénieur en 2e année du cycle ingénieur en Génie Informatique (Génie Logiciel & IA) à l’ENSA d’Oujda. Mon objectif : concevoir des applications complètes et y intégrer l’intelligence artificielle là où elle apporte une vraie valeur.",
  cards: [
    {
      tone: "dark",
      icon: "code",
      title: "Développement Full-Stack Java",
      paragraphs: [
        "Mon cœur de métier se construit autour de ==Java== et ==Spring Boot== côté back-end (API REST, Spring Security, Spring Data JPA) et de ==React== ou ==Angular== côté front-end.",
        "Pendant mon stage au **CHU Mohammed VI d’Oujda**, j’ai développé une plateforme React + Spring Boot pour le service des urgences : j’y ai appris à structurer une application de bout en bout, de la base MySQL jusqu’aux tableaux de bord.",
      ],
    },
    {
      tone: "ai",
      icon: "sparkles",
      title: "Intégrer l’IA dans de vraies applications",
      paragraphs: [
        "J’aime faire entrer l’IA là où elle est utile : ==Machine Learning== (scikit-learn, XGBoost), ==LLMs== et ==RAG== dans mes projets avec Python et FastAPI, et je continue de développer mes bases en ==Deep Learning==.",
        "Un modèle expliqué avec **SHAP** pour aider les médecins des urgences, un assistant vocal piloté par **Gemini** chez 3LM Solutions, un agent LLM qui diagnostique des pannes Linux : l’IA y reste un outil au service de l’utilisateur.",
      ],
    },
    {
      tone: "solid",
      icon: "box",
      title: "Une culture DevOps",
      paragraphs: [
        "Je ne me présente pas comme ingénieur DevOps, mais j’en ai la culture : penser une application jusqu’à son déploiement et automatiser ce qui peut l’être.",
      ],
      list: ["Git & GitHub (branches, Pull Requests)", "Docker & Docker Compose", "CI/CD avec GitHub Actions", "Scripts Bash & administration Linux"],
    },
  ],
  // Carte « whoami.json » (style terminal) : uniquement des informations déjà présentes dans le portfolio
  whoami: [
    { key: "name", value: "Mohamed Lahri" },
    { key: "role", value: "Élève ingénieur — Full-Stack Java & IA" },
    { key: "school", value: "ENSA Oujda · Génie Logiciel & IA · 2e année" },
    { key: "location", value: "Oujda, Maroc · présentiel ou remote" },
    { key: "email", value: "mohamed.lahri200@gmail.com" },
  ],
  whoamiStatus: "Ouvert aux stages PFA en Full-Stack Java & IA — juillet → octobre 2027",
  // Libellés des compteurs (les nombres sont calculés à partir du contenu)
  stats: { internships: "stages (hôpital & entreprise logicielle)", projects: "projets avec code sur GitHub", competitions: "hackathons & compétitions", certificates: "certificats" },
};

// ── Stage recherché (bloc « Je recherche ») ─────────────────────────────
export const internship = {
  kicker: "Je recherche",
  // Affiché : « Stage PFA — Élève ingénieur en Génie Informatique (été 2027) »
  title: { main: "Stage PFA", detail: "Élève ingénieur en Génie Informatique", season: "été 2027" },
  // level : "main" = principal, "plus" = atout, "extra" = complément
  domains: [
    { level: "main", tag: "Principal", name: "Développement Full-Stack Java", techs: ["Spring Boot", "React / Angular"], icon: "code" },
    { level: "plus", tag: "Atout", name: "Intégration de l’IA", techs: ["Machine Learning", "LLMs"], icon: "sparkles" },
    { level: "extra", tag: "Complément", name: "Culture DevOps", techs: ["Docker", "Kubernetes"], icon: "box" },
  ],
  duration: { label: "Durée", value: "3 mois", detail: "juillet – octobre 2027" },
  mode: { label: "Mode", items: ["Présentiel partout au Maroc", "Remote depuis l’international"] },
  languages: {
    label: "Langues",
    items: [
      { name: "Arabe", level: "Langue maternelle" },
      { name: "Français", level: "Courant" },
      { name: "Anglais", level: "B1–B2 (anglais technique)" },
    ],
  },
  cta: "Me proposer un stage",
};

// ── Bande de crédibilité ────────────────────────────────────────────────
export const credibility = {
  title: "Stages, institutions et compétitions",
  items: [
    { name: "3LM Solutions", type: "Stage" },
    { name: "CHU Mohammed VI Oujda", type: "Stage" },
    { name: "Ministère de la Transition Numérique", detail: "RallyIA Future Lab", type: "Compétition" },
    { name: "ENSA Oujda", type: "Formation" },
    { name: "MIATHON’03", detail: "SEMIA’04", type: "Hackathon" },
  ],
};

// ── Expérience & Activités ──────────────────────────────────────────────
// Chaque stage = une carte + une étude de cas (panneau « Voir l’étude de cas »).
// Textes fournis par Mohamed, utilisés tels quels. Aucun chiffre ajouté.
// linkedinPost : remplacer "LIEN_LINKEDIN" par l’adresse du post (sinon bouton « bientôt disponible »).
// repo  : URL EXACTE du dépôt GitHub (null → bouton « Dépôt bientôt public »)
// video : null  → détection automatique : copiez « <id>.mp4 » dans public/videos/
//                 (ex. chu.mp4, + chu.jpg facultatif comme image d'aperçu) ; sinon « bientôt disponible »
//         false → pas de vidéo pour cet élément
//         Placez les fichiers dans public/videos/ (MP4 H.264, idéalement < 30 Mo).
export const experienceSection = {
  kicker: "Parcours professionnel",
  title: "Expérience & Activités",
};

export const experiences = [
  {
    id: "chu",
    anchor: "etude-cas-chu",
    role: "Stagiaire Full-Stack & IA",
    company: "CHU Mohammed VI Oujda",
    dates: "Juillet – Septembre 2026",
    meta: ["2 mois", "Présentiel", "Oujda"],
    hook: "Une plateforme d’aide à la décision qui aide les urgences à prioriser les patients, les orienter et anticiper les lits disponibles, avec une IA explicable.",
    tags: ["Full-Stack", "IA médicale", "Microservices", "Machine Learning explicable"],
    linkedinPost: "LIEN_LINKEDIN",
    repo: `${GITHUB}/smart-emergency-decision-system`,
    video: null,
    caseStudy: {
      title: "Smart Emergency Decision System",
      subtitle: "Plateforme intelligente d’aide à la décision pour les urgences médicales",
      blocks: [
        {
          type: "problem",
          title: "Le problème",
          intro: "J’ai étudié le parcours du patient au service des urgences du CHU et identifié trois difficultés :",
          cards: [
            { icon: "pulse", label: "Priorité", text: "déterminer rapidement le niveau de priorité des patients ;" },
            { icon: "route", label: "Orientation", text: "les délais d’orientation vers les services spécialisés ;" },
            { icon: "bed", label: "Lits", text: "gérer et anticiper la disponibilité des lits d’hospitalisation." },
          ],
        },
        {
          type: "features",
          title: "La solution",
          intro: "J’ai conçu et développé une plateforme d’aide à la décision destinée aux professionnels de santé. Elle permet de :",
          items: [
            { icon: "users", text: "centraliser les informations des patients ;" },
            { icon: "pulse", text: "évaluer leur niveau de priorité ;" },
            { icon: "route", text: "orienter vers le service approprié ;" },
            { icon: "flask", text: "recommander des examens biologiques et radiologiques ;" },
            { icon: "bed", text: "estimer la durée d’hospitalisation et prédire la disponibilité des lits ;" },
            { icon: "trend", text: "suivre l’évolution des patients ;" },
            { icon: "layout", text: "afficher des tableaux de bord adaptés à chaque profil hospitalier." },
          ],
          note: { icon: "eye", text: "Les recommandations de l’IA sont expliquées avec SHAP : le médecin voit pourquoi le modèle propose une décision, et c’est toujours lui qui décide." },
        },
        {
          type: "architecture",
          title: "Architecture",
          text: "Application web React → Backend Spring Boot → Microservice IA FastAPI, communiquant par API REST, avec une base de données MySQL.",
          diagram: {
            label: "Schéma : l’application React appelle le backend Spring Boot par API REST ; le backend appelle le microservice IA FastAPI par API REST et lit et écrit dans la base MySQL.",
            desktop: { cols: "minmax(0,1fr) 92px minmax(0,1fr) 92px minmax(0,1fr)", areas: '"n1 l1 n2 l2 n3" ". . l3 . ." ". . n4 . ."' },
            mobile: { cols: "minmax(0,1fr) minmax(0,1fr)", areas: '"n1 n1" "l1 l1" "n2 n2" "l2 l3" "n3 n4"' },
            nodes: [
              { id: "n1", title: "React", sub: "Frontend", icon: "layout" },
              { id: "n2", title: "Spring Boot", sub: "Backend", icon: "leaf" },
              { id: "n3", title: "FastAPI", sub: "Microservice IA", icon: "sparkles", ai: true },
              { id: "n4", title: "MySQL", sub: "Base de données", icon: "database" },
            ],
            links: [
              { id: "l1", label: "API REST", desktop: "right", mobile: "down" },
              { id: "l2", label: "API REST", desktop: "right", mobile: "down" },
              { id: "l3", label: "Spring Data JPA", desktop: "both-v", mobile: "both-v" },
            ],
          },
        },
        {
          type: "stack",
          title: "Stack technique",
          groups: [
            { name: "Frontend", items: ["React", "TypeScript", "Redux Toolkit", "Material UI"] },
            { name: "Backend", items: ["Java", "Spring Boot", "Spring Security", "JWT", "Spring Data JPA", "MySQL"] },
            { name: "IA", ai: true, items: ["Python", "FastAPI", "Machine Learning", "scikit-learn", "XGBoost", "Joblib", "SHAP"] },
          ],
        },
        {
          type: "text",
          title: "Ce que j’ai appris",
          icon: "lightbulb",
          text: "J’ai renforcé mes compétences en génie logiciel, en architecture microservices, en sécurité applicative (authentification JWT) et en IA appliquée, sur un vrai problème du domaine hospitalier, en partant de l’observation du terrain.",
        },
      ],
    },
  },
  {
    id: "3lm-ete-2026",
    anchor: "etude-cas-winagent",
    role: "Stagiaire en Génie Logiciel & IA",
    company: "3LM Solutions",
    dates: "Juillet – Août 2026",
    meta: ["Tunisie", "À distance"],
    hook: "WinAgent, un assistant Windows intelligent piloté en langage naturel : fonctions cœur en Python, IA vocale Gemini et performances jusqu’à 3,46x plus rapides.",
    tags: ["Python", "IA vocale", "Gemini", "Génie logiciel", "Performance"],
    linkedinPost: "LIEN_LINKEDIN",
    repo: `${GITHUB}/WinAgent`,
    video: false, // pas de démo vidéo pour ce stage
    caseStudy: {
      title: "WinAgent",
      subtitle: "Assistant Windows intelligent piloté en langage naturel",
      blocks: [
        {
          type: "text",
          title: "Le contexte",
          icon: "monitor",
          text: "Durant mon stage chez 3LM Solutions, j’ai contribué au développement de WinAgent, un assistant de bureau qui permet de contrôler Windows et de gérer ses fichiers simplement en parlant ou en écrivant en langage naturel.",
        },
        {
          type: "metrics",
          title: "Résultats mesurés",
          items: [
            { prefix: "jusqu’à", value: "3,46x", legend: "Détection de doublons plus rapide", full: "Détection de doublons jusqu’à 3,46x plus rapide." },
            { value: "3,04x", legend: "Parcours de gros dossiers plus rapide", full: "Parcours de gros dossiers 3,04x plus rapide." },
            { prefix: "environ", value: "−8 %", legend: "de duplication de code, grâce à un décorateur centralisé de gestion d’erreurs appliqué à 9 fonctions", full: "Duplication de code réduite d’environ 8 %, grâce à un décorateur centralisé de gestion d’erreurs appliqué à 9 fonctions." },
          ],
        },
        {
          type: "groups",
          title: "Ce que j’ai réalisé",
          groups: [
            {
              name: "Fonctionnalités",
              items: [
                { icon: "search", text: "Développement des fonctions cœur en Python : organisation, recherche et nettoyage de fichiers, contrôle système." },
                { icon: "layout", text: "Interface graphique développée avec PyQt6." },
                { icon: "zap", text: "Résolution du gel de l’interface pendant les actions longues, grâce à leur exécution dans des threads séparés." },
              ],
            },
            {
              name: "IA",
              ai: true,
              items: [
                { icon: "mic", text: "Intégration d’un module d’IA vocale connecté à l’API Gemini (function calling), pour piloter l’application en langage naturel." },
                { icon: "link", text: "Conception d’un contrat d’interface stable entre 9 fonctions métier et le module d’IA." },
              ],
            },
            {
              name: "Qualité du code",
              items: [
                { icon: "layers", text: "Architecture modulaire claire, séparée en trois couches : core / ui / utils." },
                { icon: "check", text: "Tests automatisés avec pytest pour garantir la non-régression." },
                { icon: "branch", text: "Travail collaboratif avec Git/GitHub : branches dédiées, Pull Requests documentées, revues de code." },
              ],
            },
          ],
        },
        {
          type: "architecture",
          title: "Architecture",
          text: "Utilisateur (voix ou texte) → Module IA (API Gemini, function calling) → 9 fonctions métier (core) → Système Windows et fichiers. L’interface PyQt6 (ui) communique avec le core ; les outils communs sont regroupés dans utils.",
          diagram: {
            label: "Schéma : l’utilisateur parle ou écrit au module IA (API Gemini, function calling), qui appelle les 9 fonctions métier du core ; le core agit sur Windows et les fichiers ; l’interface PyQt6 communique avec le core.",
            desktop: { cols: "minmax(0,1fr) 64px minmax(0,1fr) 92px minmax(0,1fr) 64px minmax(0,1fr)", areas: '"n1 l1 n2 l2 n3 l3 n4" ". . . . l4 . ." ". . . . n5 . ."' },
            mobile: { cols: "minmax(0,1fr) minmax(0,1fr)", areas: '"n1 n1" "l1 l1" "n2 n2" "l2 l2" "n3 n3" "l3 l4" "n4 n5"' },
            nodes: [
              { id: "n1", title: "Utilisateur", sub: "voix / texte", icon: "user" },
              { id: "n2", title: "Module IA", sub: "Gemini · function calling", icon: "sparkles", ai: true },
              { id: "n3", title: "Fonctions métier", sub: "core · 9 fonctions", icon: "cpu" },
              { id: "n4", title: "Windows & fichiers", sub: "système", icon: "folder" },
              { id: "n5", title: "Interface PyQt6", sub: "ui", icon: "layout" },
            ],
            links: [
              { id: "l1", label: "", desktop: "right", mobile: "down" },
              { id: "l2", label: "function calling", desktop: "right", mobile: "down" },
              { id: "l3", label: "", desktop: "right", mobile: "down" },
              { id: "l4", label: "", desktop: "both-v", mobile: "both-v" },
            ],
            caption: "Outils communs : utils",
          },
        },
        {
          type: "stack",
          title: "Stack technique",
          groups: [
            { name: "Langage & interface", items: ["Python", "PyQt6"] },
            { name: "Intelligence artificielle", ai: true, items: ["API Gemini", "function calling", "IA vocale"] },
            { name: "Qualité & collaboration", items: ["pytest", "Git/GitHub", "Pull Requests", "revues de code"] },
          ],
        },
        {
          type: "text",
          title: "Ce que j’ai appris",
          icon: "lightbulb",
          text: "Ce stage m’a fait passer d’une logique « faire fonctionner le code » à une logique d’ingénierie logicielle complète : architecture propre, tests, documentation, optimisation mesurée et collaboration en équipe.",
        },
      ],
    },
  },
];

// Stage 3LM en cours (oct. 2026 –) : repris du CV, NON affiché tant que
// Mohamed n’a pas envoyé et validé son contenu (étude de cas à venir).
export const pendingExperiences = [
  {
    role: "Stagiaire — Développement d'application web",
    company: "3LM Solutions",
    period: "Oct. 2026 – ?",
    summary: "Module de matching candidats–projets (filtres sans IA, puis score, niveau et explication via l'API Claude). À confirmer.",
  },
];

// ── Projets ─────────────────────────────────────────────────────────────
// Contenu repris de la section « Projets » du profil LinkedIn de Mohamed (octobre 2026).
// repo : URL EXACTE du dépôt GitHub (null → bouton « Dépôt bientôt public »)
// demo : lien de démo en ligne, uniquement s'il existe réellement
// video : démo vidéo { src: "/videos/termcopilot.mp4", poster: "/videos/termcopilot.jpg" } (null → « bientôt disponible »)
// images : captures réelles (public/projects/), alt = légende LinkedIn
// flow : fonctionnement décrit par Mohamed (pas d'étapes inventées)
export const projectsSection = { kicker: "Réalisations", title: "Projets" };

export const projects = [
  {
    id: "termcopilot",
    featured: true,
    cats: ["ia", "devops"],
    title: "TermCopilot",
    type: null,
    org: "ENSA Oujda",
    period: "Sept. 2026 – nov. 2026",
    summary: "TermCopilot est un agent IA en ligne de commande développé pour diagnostiquer automatiquement les pannes d’un système Linux.",
    featuresTitle: "Fonctionnalités clés",
    features: [
      "Analyse en temps réel des logs système (journalctl), des services en échec et des métriques CPU, RAM et disque.",
      "Diagnostic intelligent généré par un LLM (Groq API).",
      "Propositions de correctifs classées par niveau de risque.",
      "Exécution sécurisée : liste blanche / liste noire de commandes et confirmation humaine obligatoire.",
      "Mode surveillance continue (monitor) et historique complet des diagnostics (SQLite).",
    ],
    flow: [
      { icon: "search", title: "Analyse", text: "Logs système et services en échec" },
      { icon: "sparkles", title: "Diagnostic", text: "LLM (Groq API)", ai: true },
      { icon: "layers", title: "Correctifs", text: "Classés par niveau de risque" },
      { icon: "user", title: "Confirmation", text: "Humaine obligatoire" },
      { icon: "database", title: "Historique", text: "SQLite" },
    ],
    stack: ["Python", "Click (CLI)", "psutil", "Bash", "Linux", "LLM · Groq API", "SQLite", "pytest"],
    images: [],
    repo: `${GITHUB}/termcopilot`,
    demo: null,
    video: null,
  },
  {
    id: "portfolio-ia",
    cats: ["fullstack", "ia", "devops"],
    title: "Portfolio intelligent avec agent IA (RAG)",
    type: "Projet personnel",
    org: "mohamedlahri.com",
    period: "Oct. 2026",
    summary: "Ce portfolio : un front React, une API Java Spring Boot (contenu, formulaire de contact, MySQL) et un agent IA Python qui répond aux recruteurs à partir des données du portfolio, en citant ses sources, et analyse une offre de stage.",
    flow: [
      { icon: "layout", title: "React", text: "Site bilingue FR / EN" },
      { icon: "leaf", title: "Spring Boot", text: "API REST · MySQL · Flyway" },
      { icon: "sparkles", title: "Agent IA (RAG)", text: "Recherche hybride + LLM, 6 outils", ai: true },
      { icon: "box", title: "Docker · CI/CD", text: "Caddy HTTPS · GitHub Actions" },
    ],
    stack: ["React", "Java", "Spring Boot", "MySQL", "Python", "FastAPI", "RAG", "LLM", "Docker", "GitHub Actions"],
    images: [],
    repo: null,
    demo: null,
    video: false,
  },
  {
    id: "churn",
    cats: ["ia"],
    title: "Prédiction du churn client avec scikit-learn",
    type: "Projet personnel · Machine Learning",
    org: null,
    period: "Sept. – oct. 2026",
    summary: "Prédire quels clients d’un opérateur télécom risquent de résilier leur abonnement (jeu de données IBM Telco, 7 043 clients), pour cibler les actions de rétention. Le modèle retenu privilégie le rappel : il repère 74 % des clients qui partent sur le jeu de test.",
    flow: [
      { icon: "search", title: "EDA & nettoyage", text: "Prévention de la fuite de données" },
      { icon: "layers", title: "Pipeline", text: "ColumnTransformer · scikit-learn" },
      { icon: "sparkles", title: "Modèles", text: "Régression logistique, Random Forest, Gradient Boosting", ai: true },
      { icon: "layout", title: "Application", text: "Streamlit (un client ou un CSV)" },
    ],
    stack: ["Python", "pandas", "scikit-learn", "Pipeline · validation croisée", "Streamlit", "joblib"],
    images: [],
    repo: `${GITHUB}/churn-prediction-sklearn`,
    demo: null,
    video: null,
  },
  {
    id: "deploymaster",
    cats: ["devops"],
    title: "DeployMaster — Pipeline de déploiement automatisé",
    type: "Projet personnel · DevOps",
    org: null,
    period: "Sept. 2026",
    summary: "Automatisation du déploiement d’une application Flask (Build → Copy → Run) avec des scripts Bash orchestrés en Python : configuration par environnement (dev, staging, prod), vérification /health et rollback automatique en cas d’échec.",
    flow: [
      { icon: "box", title: "Build", text: "Version isolée + venv dédié" },
      { icon: "folder", title: "Copy", text: "current → previous, puis nouvelle version" },
      { icon: "zap", title: "Run", text: "Redémarrage + healthcheck /health" },
      { icon: "route", title: "Rollback", text: "Automatique si le healthcheck échoue" },
    ],
    stack: ["Bash", "Python", "subprocess · argparse · logging", "Flask", "Multi-environnements (.env)", "Git"],
    images: [],
    repo: `${GITHUB}/deploymaster`,
    demo: null,
    video: false,
  },
  {
    id: "assistant-rapports",
    cats: ["ia", "fullstack"],
    title: "Assistant intelligent pour la création des rapports de stage & PFE",
    type: "Projet académique",
    org: "ENSA Oujda",
    period: "Janv. 2026",
    summary: "Conception et développement d’une application Web intégrant un assistant IA automatisé pour la génération de rapports de stage et PFE structurés, respectant les normes académiques.",
    flow: [
      { icon: "layout", title: "Sujet & description", text: "Saisis dans le formulaire" },
      { icon: "layers", title: "Structuration", text: "STAR, SOAR, CAR ou PAR" },
      { icon: "sparkles", title: "Génération IA", text: "Groq AI", ai: true },
      { icon: "download", title: "PDF professionnel", text: "Télécharger, régénérer, prévisualiser" },
    ],
    stack: ["Prompt Engineering", "Large Language Models", "Groq AI", "Flask (Python)", "ReportLab (PDF)", "HTML · CSS · JavaScript"],
    images: [
      { src: "/projects/rapport-formulaire.webp", w: 720, h: 341, alt: "Interface de l’assistant IA : sujet du rapport et description détaillée du projet" },
      { src: "/projects/rapport-metadonnees.webp", w: 720, h: 328, alt: "Formulaire de configuration : métadonnées de soutenance (étudiant, jury, spécialité) et choix du framework de structuration (STAR)" },
      { src: "/projects/rapport-pdf.webp", w: 720, h: 341, alt: "Page de garde générée et actions sur le PDF professionnel : télécharger, régénérer, prévisualiser" },
    ],
    repo: `${GITHUB}/rapport-generateur`,
    demo: null,
    video: null,
  },
  {
    id: "snake",
    cats: ["algo"],
    title: "Jeu Snake — Architecture hybride C & Python GUI",
    type: "Projet académique",
    org: "ENSA Oujda",
    period: "Nov. 2025 – déc. 2025",
    summary: "Conception et développement d’un jeu Snake haute performance combinant un moteur bas niveau en C et une interface graphique interactive en Python.",
    flow: [
      { icon: "cpu", title: "Moteur de jeu", text: "C (listes chaînées)" },
      { icon: "link", title: "Interopérabilité", text: "C / Python" },
      { icon: "layout", title: "Interface graphique", text: "Python · Pygame" },
    ],
    stack: ["C (listes chaînées)", "Python", "Pygame", "Interopérabilité C / Python"],
    images: [
      { src: "/projects/snake-jeu.webp", w: 720, h: 562, alt: "Partie en cours : rendu graphique Pygame, score, meilleur score et longueur du serpent" },
      { src: "/projects/snake-game-over.webp", w: 719, h: 568, alt: "Écran de fin de partie : « Game over », score final et « Appuyez ESPACE pour rejouer »" },
    ],
    repo: null,
    demo: null,
    video: false, // photos uniquement
  },
  {
    id: "simulation-thermique",
    cats: ["algo"],
    title: "Simulation numérique 2D de la propagation de la température",
    type: "Projet académique",
    org: "ENSA Oujda",
    period: "Déc. 2025",
    summary: "Modélisation et simulation numérique en 2D de la diffusion de la chaleur à travers un maillage dynamique, avec gestion du chauffage/refroidissement et alertes en temps réel.",
    stack: ["C", "Listes chaînées", "Simulation numérique", "Calcul scientifique", "Gnuplot"],
    images: [
      { src: "/projects/thermique-jour.webp", w: 720, h: 612, alt: "Cartographie des températures sur maillage 2D, échelle thermique et panneau de contrôle (refroidir, chauffer, reset), mode jour" },
      { src: "/projects/thermique-nuit.webp", w: 720, h: 617, alt: "Même simulation affichée en mode nuit" },
    ],
    repo: `${GITHUB}/Projet-Temp-rature`,
    demo: null,
    video: false, // photos uniquement
  },
];

// Projets du CV non présents sur LinkedIn : NON affichés tant que Mohamed ne les a pas confirmés.
export const pendingProjects = [
  {
    title: "Plateforme APOGEE — Gestion universitaire",
    period: "2025 – 2026",
    note: "CV : React, Spring Boot, JavaScript, MySQL, authentification, tableaux de bord, modèle ML de prédiction d'orientation. Rôle, captures et dépôt à fournir.",
  },
];

export const projectFilters = [
  { id: "all", label: "Tous" },
  { id: "fullstack", label: "Full-Stack" },
  { id: "ia", label: "IA" },
  { id: "devops", label: "DevOps" },
  { id: "algo", label: "Algorithmique" },
];

// ── Compétences techniques ──────────────────────────────────────────────
// Liste reprise du CV (octobre 2026) + technologies citées dans les stages et projets.
// p : preuves = où la compétence a été utilisée (clés de `proofs` ci-dessous).
// Une compétence sans preuve vient uniquement du CV.
export const skillsSection = {
  kicker: "Du code jusqu’au déploiement",
  title: "Compétences techniques",
};

export const proofs = {
  chu: { label: "Stage CHU", href: "#etude-cas-chu", kind: "stage" },
  wa: { label: "Stage 3LM", href: "#etude-cas-winagent", kind: "stage" },
  termcopilot: { label: "TermCopilot", href: "#projet-termcopilot", kind: "projet" },
  rapports: { label: "Assistant PFE", href: "#projet-assistant-rapports", kind: "projet" },
  snake: { label: "Snake", href: "#projet-snake", kind: "projet" },
  simulation: { label: "Simulation", href: "#projet-simulation-thermique", kind: "projet" },
  portfolioIa: { label: "Portfolio IA", href: "#projet-portfolio-ia", kind: "projet" },
  churn: { label: "Churn", href: "#projet-churn", kind: "projet" },
  deploy: { label: "DeployMaster", href: "#projet-deploymaster", kind: "projet" },
  skills: { label: "Compétences techniques", href: "#competences", kind: "projet" },
  miathon: { label: "MIATHON’03", href: "#activite-miathon", kind: "projet" },
  rallyia: { label: "RallyIA", href: "#activite-rallyia", kind: "projet" },
};

export const techSkills = [
  {
    title: "Back-end", icon: "cpu", main: true,
    items: [
      { name: "Java (POO)", p: ["chu"] },
      { name: "Spring Boot", p: ["chu", "portfolioIa"] },
      { name: "Spring Security · JWT", p: ["chu"] },
      { name: "Spring Data JPA", p: ["chu"] },
      { name: "API REST", p: ["chu", "portfolioIa"] },
      { name: "Architecture microservices", p: ["chu"] },
      { name: "FastAPI (Python)", p: ["chu", "portfolioIa"] },
      { name: "Flask (Python)", p: ["rapports", "deploy"] },
    ],
  },
  {
    title: "Front-end & interfaces", icon: "layout", main: true,
    items: [
      { name: "React", p: ["chu", "portfolioIa"] },
      { name: "TypeScript", p: ["chu"] },
      { name: "Redux Toolkit", p: ["chu"] },
      { name: "Material UI", p: ["chu"] },
      { name: "Angular" },
      { name: "JavaScript · HTML5 · CSS3" },
      { name: "Responsive Web Design" },
      { name: "PyQt6 (interface desktop)", p: ["wa"] },
      { name: "Pygame", p: ["snake"] },
    ],
  },
  {
    title: "Intelligence artificielle", icon: "sparkles", tone: "ai", main: true,
    items: [
      { name: "Machine Learning", p: ["chu", "churn"] },
      { name: "scikit-learn · XGBoost", p: ["chu", "churn"] },
      { name: "IA explicable · SHAP", p: ["chu"] },
      { name: "Joblib", p: ["chu", "churn"] },
      { name: "LLMs", p: ["termcopilot", "rapports", "portfolioIa"] },
      { name: "API Gemini · function calling", p: ["wa"] },
      { name: "IA vocale", p: ["wa"] },
      { name: "Groq API", p: ["termcopilot", "rapports"] },
      { name: "Prompt Engineering", p: ["rapports"] },
      { name: "Intégration d’IA dans le web", p: ["chu", "rapports", "portfolioIa"] },
      { name: "Chatbots", p: ["portfolioIa"] },
      { name: "NLP" },
      { name: "RAG", p: ["portfolioIa"] },
      { name: "API Claude" },
    ],
  },
  {
    title: "DevOps & Cloud", icon: "box", tone: "devops", main: true, note: "Culture DevOps",
    items: [
      { name: "Git / GitHub", p: ["wa"] },
      { name: "Docker", p: ["portfolioIa"] },
      { name: "CI/CD · GitHub Actions", p: ["portfolioIa"] },
      { name: "Scripts de déploiement · rollback", p: ["deploy"] },
      { name: "Kubernetes" },
      { name: "Terraform (Infrastructure as Code)" },
    ],
  },
  {
    title: "Bases de données", icon: "database",
    items: [
      { name: "MySQL", p: ["chu", "portfolioIa"] },
      { name: "SQLite", p: ["termcopilot"] },
      { name: "PostgreSQL" },
      { name: "SQL" },
    ],
  },
  {
    title: "Langages", icon: "code",
    items: [
      { name: "Java", p: ["chu"] },
      { name: "Python", p: ["chu", "wa", "termcopilot", "churn"] },
      { name: "C", p: ["snake", "simulation"] },
      { name: "TypeScript", p: ["chu"] },
      { name: "Bash", p: ["termcopilot", "deploy"] },
      { name: "PHP" },
      { name: "JavaScript" },
      { name: "C++" },
      { name: "Kotlin" },
      { name: "Dart" },
    ],
  },
  {
    title: "Outils & méthodes", icon: "tools",
    items: [
      { name: "Branches · Pull Requests · revues de code", p: ["wa"] },
      { name: "Tests automatisés · pytest", p: ["wa"] },
      { name: "Structures de données", p: ["snake", "simulation"] },
      { name: "Interopérabilité C / Python", p: ["snake"] },
      { name: "Simulation numérique · calcul scientifique", p: ["simulation"] },
      { name: "UML" },
      { name: "Méthodes Agile" },
      { name: "Selenium" },
    ],
  },
  {
    title: "Mobile", icon: "monitor",
    items: [{ name: "Android (Kotlin)" }, { name: "Flutter (Dart)" }],
  },
  {
    title: "Systèmes & réseaux", icon: "globe",
    items: [
      { name: "Linux", p: ["termcopilot", "deploy"] },
      { name: "Windows", p: ["wa"] },
      { name: "TCP/IP" },
      { name: "Adressage IPv4 & IPv6" },
      { name: "Routage" },
      { name: "Sous-réseaux (CIDR / VLSM)" },
    ],
  },
];

// ── Skills (savoir-être) ────────────────────────────────────────────────
// Qualités validées par Mohamed (1, 2, 3, 4, 6). p : preuves cliquables (voir `proofs`).
export const softSection = { kicker: "Savoir-être", title: "Skills" };

export const softSkills = [
  {
    title: "Travail en équipe",
    icon: "users",
    text: "Je travaille en mode collaboratif : branches dédiées, Pull Requests documentées et revues de code au sein de l’équipe 3LM Solutions, et projets menés en équipe lors des hackathons MIATHON’03, DiNext’26 et RallyIA Future Lab.",
    p: ["wa", "miathon", "rallyia"],
  },
  {
    title: "Communication",
    icon: "chat",
    text: "J’anime des ateliers sur l’intelligence artificielle au Club Informatique de l’ENSA Oujda, ce qui m’amène à expliquer des notions techniques de façon claire et accessible.",
  },
  {
    title: "Autonomie",
    icon: "globe",
    text: "J’ai réalisé deux stages entièrement à distance avec 3LM Solutions (Tunisie), en organisant mon travail et en maintenant une communication régulière avec l’équipe.",
    p: ["wa"],
  },
  {
    title: "Rigueur",
    icon: "check",
    text: "Je soigne la qualité du code : tests de non-régression automatisés (pytest), Pull Requests documentées et architecture modulaire en couches (core / ui / utils).",
    p: ["wa"],
  },
  {
    title: "Curiosité",
    icon: "lightbulb",
    text: "J’assure une veille technologique continue sur les LLMs, le RAG, le développement mobile (Kotlin, Flutter) et la culture DevOps (Docker, Kubernetes, Terraform).",
    p: ["skills"],
  },
];

// ── Compétitions & vie associative ──────────────────────────────────────
// Contenu repris des posts LinkedIn de Mohamed (mai – juin 2026) et de ses photos.
// Aucun classement ni chiffre ajouté : seuls les éléments cités dans ses posts.
export const activitiesSection = { kicker: "Hackathons & événements", title: "Compétitions & vie associative" };

export const activities = [
  {
    id: "rallyia",
    featured: true,
    type: "Compétition nationale · 4 jours",
    title: "RallyIA Future Lab",
    dates: "16 – 20 juin 2026",
    place: "Merzouga",
    org: "Ministère de la Transition Numérique et de la Réforme de l’Administration",
    facts: ["Plus de 1 000 participants venus de tout le Royaume", "Thématiques HealthTech & MedTech", "Équipe multidisciplinaire de 6 personnes"],
    project: {
      name: "DamIA",
      tagline: "Arriver à temps, c’est donner une chance de vivre",
      text: "Plateforme intelligente de gestion et de transport du sang au Maroc, conçue avec une équipe multidisciplinaire (data science, analyse métier, mathématiques, développement full-stack).",
      logo: { src: "/activities/damia-logo.webp", w: 1200, h: 612, alt: "Logo du projet DamIA : une goutte de sang stylisée en circuit et un tracé de rythme cardiaque" },
    },
    takeawaysTitle: "Ce que j’en retiens",
    takeaways: [
      "Une compréhension approfondie des solutions IA appliquées à la santé",
      "Une expérience concrète du travail en équipe multidisciplinaire",
      "Le développement de mes compétences en communication et en pitch",
      "Une vision plus claire du futur de l’IA au Maroc",
    ],
    images: [
      { src: "/activities/rallyia-portrait.webp", w: 900, h: 1200, alt: "Mohamed Lahri devant le kakémono officiel du RallyIA Future Lab à Merzouga" },
      { src: "/activities/rallyia-studio.webp", pos: "center 72%", w: 900, h: 1200, alt: "Mohamed Lahri sur le plateau « Génération(s) Tech » du RallyIA Future Lab" },
    ],
  },
  {
    id: "miathon",
    featured: true,
    type: "Hackathon · 72 h",
    title: "MIATHON’03",
    subtitle: "4e Semaine de l’Intelligence Artificielle (SEMIA’04)",
    dates: "14 – 16 mai 2026",
    place: "Université Mohammed Premier, Oujda",
    org: null,
    facts: ["600 participants · 120 équipes", "Équipe HandiTech de 6 personnes", "Pitch de la solution devant le jury"],
    project: {
      name: "Smart Retail AI",
      tagline: "Une idée pour transformer la grande distribution",
      text: "Une solution IA qui transforme les caméras de surveillance en partenaires stratégiques capables d’agir en temps réel, autour de 4 piliers :",
      pillars: [
        { icon: "trend", title: "Alertes de réapprovisionnement", text: "Alerte automatique avant la rupture de stock, quand un rayon approche du seuil critique." },
        { icon: "eye", title: "Analyse de l’hésitation", text: "Détection des doutes des clients pour optimiser le placement des articles." },
        { icon: "layout", title: "Cartographie des zones chaudes", text: "Heatmap des flux de clients pour optimiser l’agencement des rayons." },
        { icon: "lock", title: "Prévention des vols", text: "Détection instantanée des comportements suspects en magasin." },
      ],
    },
    images: [
      { src: "/activities/miathon-pitch.webp", w: 1200, h: 900, alt: "Pitch de l’équipe HandiTech sur la scène du MIATHON’03" },
      { src: "/activities/miathon-solution.webp", w: 1200, h: 900, alt: "Présentation de la solution HandiTech au jury : vitesse, sécurité, impact" },
      { src: "/activities/miathon-portrait.webp", w: 900, h: 1200, alt: "Mohamed Lahri, badge participant, devant la bannière officielle du MIATHON’03" },
      { src: "/activities/semia-amphi.webp", w: 900, h: 1200, alt: "Amphithéâtre de l’Université Mohammed Premier pendant la SEMIA’04" },
    ],
  },
  {
    id: "dinext",
    type: "Hackathon · 24 h",
    title: "DiNext’26",
    dates: "22 – 23 mai 2026",
    place: "Faculté des Sciences d’Oujda (UMP)",
    text: "24 heures de sprint intensif pour concevoir et pitcher une solution innovante autour de trois piliers : l’intelligence artificielle, la FinTech et l’innovation digitale.",
    takeawaysTitle: "Ce que j’en retiens",
    takeaways: [
      "Vélocité technique & MVP : concevoir, structurer et déployer une architecture logicielle viable en un temps record.",
      "Résilience sous contrainte : enchaîner deux compétitions majeures en 7 jours et prendre des décisions d’ingénierie critiques sous pression.",
      "Culture de l’itération : confronter notre livrable à un jury d’experts et aux professionnels de l’écosystème.",
    ],
    images: [
      { src: "/activities/dinext-portrait.webp", full: true, w: 900, h: 1200, alt: "Mohamed Lahri, badge participant, devant le panneau DiNext’26 (22 – 23 mai 2026)" },
    ],
  },
  {
    id: "siel",
    type: "Événement",
    title: "Salon International de l’Édition et du Livre",
    dates: "4 mai 2026",
    place: "Rabat",
    text: "Une journée pour nourrir ma curiosité au-delà du code : explorer les publications internationales et réfléchir à la manière dont l’IA et le logiciel peuvent rendre la connaissance accessible à tous.",
    images: [
      { src: "/activities/siel-lecture.webp", w: 720, h: 960, full: true, alt: "Mohamed Lahri feuilletant un livre dans un stand du Salon International de l’Édition et du Livre, à Rabat" },
      { src: "/activities/siel-stand.webp", w: 720, h: 960, full: true, alt: "Mohamed Lahri et d’autres visiteurs devant un stand du Salon International de l’Édition et du Livre, à Rabat" },
    ],
  },
  {
    id: "club",
    type: "Vie associative",
    title: "Club Informatique de l’ENSA Oujda",
    dates: null,
    place: "ENSA Oujda",
    text: "Animation d’ateliers sur l’intelligence artificielle pour partager des notions techniques de façon claire et accessible.",
    images: [],
  },
];

// ── Formation ───────────────────────────────────────────────────────────
// Repris du CV (octobre 2026).
export const educationSection = { kicker: "Parcours académique", title: "Formation" };
export const education = [
  { period: "2025 – 2028", title: "Cycle ingénieur — Génie Informatique", school: "ENSA Oujda", detail: "Option Génie Logiciel & IA · 2e année en cours", current: true, icon: "school" },
  { period: "2023 – 2025", title: "Cycle préparatoire intégré", school: "ENSA Oujda", detail: "Mention Bien", icon: "layers" },
  { period: "2022 – 2023", title: "Baccalauréat Sciences Mathématiques A", school: "Oujda", detail: "Mention Bien", icon: "check" },
];

export const certificatesSection = { kicker: "Apprentissage continu", title: "Certificats" };
// Certificats Coursera envoyés par Mohamed (images LinkedIn). Dates = celles imprimées sur le certificat.
// verifyUrl : seulement si le code est certain. Les codes lus sur les images floues sont notés
// en commentaire, À CONFIRMER par Mohamed avant de les activer.
export const certificates = [
  {
    id: "genai", title: "Generative AI and LLMs: Architecture and Data Preparation", issuer: "IBM", via: "Coursera",
    topic: "IA", date: "Novembre 2025", skills: ["IA générative", "LLMs", "Préparation des données"],
    image: { src: "/certificates/genai.webp", w: 982, h: 746 },
    verifyUrl: null, // lu : TKSMWHA43FMC (à confirmer)
  },
  {
    id: "javascript", title: "Programming with JavaScript", issuer: "Meta", via: "Coursera",
    topic: "Développement web", date: "Août 2026", skills: ["JavaScript", "Tableaux, objets, boucles"],
    image: { src: "/certificates/javascript.webp", w: 1110, h: 845 },
    verifyUrl: "https://coursera.org/verify/LU73IDU9GD2P", // identifiant confirmé sur LinkedIn
  },
  {
    id: "linux", title: "Hands-on Introduction to Linux Commands and Shell Scripting", issuer: "IBM", via: "Coursera",
    topic: "Systèmes & DevOps", date: "Septembre 2026", skills: ["Linux", "Bash", "Shell scripting"],
    image: { src: "/certificates/linux.webp", w: 1125, h: 853 },
    verifyUrl: null, // lu : IMUAAXQWSCJR (à confirmer)
  },
  {
    id: "cloud", title: "Introduction to Cloud Computing", issuer: "IBM", via: "Coursera",
    topic: "Cloud", date: "Septembre 2026", skills: ["Cloud Computing", "SaaS / PaaS / IaaS"],
    image: { src: "/certificates/cloud.webp", w: 1123, h: 826 },
    verifyUrl: null, // lu : 2P40QCK2KSCI (à confirmer)
  },
];

// Certificats cités dans le CV mais sans image ni lien reçus : NON affichés.
export const pendingCertificates = [
  "Prompt Engineering for Developers — DeepLearning.AI",
  "Machine Learning Fundamentals — Coursera",
  "Java Programming and Software Engineering — Duke University",
  "Git & GitHub — Atlassian",
];

// ── Contact ─────────────────────────────────────────────────────────────
// Le formulaire appelle POST /api/contact (back-end Spring Boot) : message enregistré en base,
// envoyé par e-mail à profile.email, accusé de réception automatique au recruteur.
export const contactSection = {
  kicker: "Contact",
  title: "Discutons de votre stage PFA 2027.",
  text: "Une offre de stage, une question sur un projet ou un échange autour de l’IA et du développement Full-Stack ? Écrivez-moi, je vous réponds personnellement.",
  subjects: ["Offre de stage PFA", "Question sur un projet", "Autre"],
};


// ── Navigation ──────────────────────────────────────────────────────────
export const nav = [
  { href: "#top", label: "Accueil" },
  { href: "#about", label: "À propos" },
  { href: "#experience", label: "Expérience" },
  { href: "#projets", label: "Projets" },
  { href: "#competences", label: "Compétences" },
  { href: "#parcours", label: "Parcours" },
  { href: "#certificats", label: "Certificats" },
];

// Menu complet (bouton « Menu ») : toutes les sections, dans l'ordre de la page
export const menu = [
  { href: "#top", label: "Accueil" },
  { href: "#about", label: "À propos" },
  { href: "#recherche", label: "Stage recherché" },
  { href: "#experience", label: "Expérience" },
  { href: "#projets", label: "Projets" },
  { href: "#competences", label: "Compétences techniques" },
  { href: "#skills", label: "Skills (savoir-être)" },
  { href: "#competitions", label: "Compétitions & vie associative" },
  { href: "#parcours", label: "Formation" },
  { href: "#certificats", label: "Certificats" },
  { href: "#contact", label: "Contact" },
];
