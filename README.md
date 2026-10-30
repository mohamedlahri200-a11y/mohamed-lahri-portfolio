# Portfolio — Mohamed Lahri (version front-end)

Site 100 % front-end (React 18 + Vite), bilingue FR / EN, thème clair / sombre.
Aucun serveur à gérer : déploiement gratuit sur **Vercel** (ou Netlify / Cloudflare Pages).

## Lancer sur votre PC
```powershell
npm install
npm run dev        # http://localhost:5173
```

## Formulaire de contact (messages vers mohamed.lahri200@gmail.com)
Deux services gratuits, sans backend :

**Option A — Web3Forms (recommandée, la plus fiable)**
1. Aller sur https://web3forms.com, saisir `mohamed.lahri200@gmail.com`, cliquer *Create Access Key*.
2. Copier la clé reçue par e-mail.
3. Copier `.env.example` en `.env` et compléter : `VITE_WEB3FORMS_KEY=votre-cle`
4. Relancer `npm run dev`.
5. Sur Vercel : *Settings → Environment Variables* → `VITE_WEB3FORMS_KEY` = votre clé → *Redeploy*.

**Option B — FormSubmit (sans clé, utilisée automatiquement si pas de clé Web3Forms)**
Au premier message, FormSubmit envoie un e-mail **« Activate Form »** à votre Gmail (vérifier Spam / Promotions) :
cliquer dessus une seule fois. Ensuite, chaque message arrive dans Gmail.

Vérification : touche F12 → Console. Lors de l'envoi, une ligne `[Contact]` indique le service utilisé.

## Modifier le contenu
| Je veux… | Fichier |
|---|---|
| Changer un texte (français) | `src/data/profile.js` |
| Changer la traduction anglaise | `src/data/profile.en.js` |
| Ajouter une démo vidéo | copier `chu.mp4`, `termcopilot.mp4`, `churn.mp4` ou `assistant-rapports.mp4` dans `public/videos/` |
| Remplacer un CV | `public/cv/CV_Mohamed_Lahri_FR.pdf` / `CV_Mohamed_Lahri_EN.pdf` |

## Déployer sur Vercel
1. Mettre ce dossier sur GitHub (dépôt `mohamed-lahri-portfolio`).
2. vercel.com → *Continue with GitHub* → *Add New → Project* → choisir le dépôt → *Deploy*
   (Vercel détecte Vite tout seul : build `npm run build`, dossier `dist`).
3. Chaque `git push` met le site à jour automatiquement.
