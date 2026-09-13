# Site jacob.cx

Site statique construit avec **Astro**. Aucun JavaScript n'est envoyé au visiteur,
sauf le petit script qui charge le chat au clic. Les images sont converties en WebP
et déclinées en plusieurs tailles au moment du build.

## Faire tourner le site

**Le plus simple : double-cliquer sur `dev.cmd`.** L'aperçu s'ouvre sur
http://localhost:4321 et se met à jour à chaque enregistrement de fichier.
`build.cmd` génère le site final dans `dist/`.

### Depuis PowerShell

PowerShell bloque par défaut les scripts `.ps1`, dont le lanceur `npm.ps1` :

```
npm : Impossible de charger le fichier ...\npm.ps1, car l'exécution de scripts
est désactivée sur ce système.
```

Deux façons de s'en sortir :

```powershell
# 1. sans rien changer au système — appeler npm.cmd
& "C:\Program Files\nodejs\npm.cmd" run dev

# 2. autoriser une fois pour toutes les scripts signés, pour ton compte seulement
Set-ExecutionPolicy -Scope CurrentUser RemoteSigned
# puis « npm run dev » fonctionne normalement
```

La seconde est le réglage recommandé par Microsoft pour un poste de développement :
elle n'autorise que les scripts locaux et les scripts distants signés, et ne touche
qu'à ton compte utilisateur.

Node est installé dans `C:\Program Files\nodejs`. Si `npm` n'est pas reconnu du tout,
ouvrir un nouveau terminal — le PATH n'est lu qu'au démarrage.

## Où se trouve quoi

| Chemin | Contenu |
|---|---|
| `src/pages/` | une page = un fichier. Le nom du fichier donne l'URL. |
| `src/layouts/Base.astro` | en-tête HTML commun, métadonnées, données structurées |
| `src/components/` | en-tête, pied de page, bloc d'appel, lanceur de chat |
| `src/components/hero-1.tsx` | ouverture des pages (bloc Magic UI Pro adapté, React) — contenu passé en props |
| `src/styles/global.css` | **tous les réglages visuels** — couleurs, typographie, espacements |
| `src/styles/tailwind.css` | Tailwind + jetons shadcn, **sans preflight** — réservé aux blocs React (Magic UI) |
| `components.json` | registres shadcn : `@magicui-pro` (jeton dans `.env.local`) et `@magicui` |
| `src/data/site.ts` | téléphone, adresse, SIRET, références clients, navigation |
| `src/data/partoo.ts` | code du chat Partoo (à compléter) |
| `src/assets/` | photos sources, optimisées automatiquement au build |
| `public/_redirects` | redirections 301 depuis les anciennes URL |

Pour changer une couleur ou une taille de texte partout sur le site, il n'y a qu'un
endroit : le bloc `:root` en haut de `src/styles/global.css`.

## Mise en ligne — Cloudflare Pages

1. Pousser ce dossier sur GitHub.
2. Cloudflare Pages → **Create a project** → connecter le dépôt.
3. Réglages de build :
   - commande : `npm run build`
   - dossier de sortie : `dist`
   - dossier racine : `site` (si le dépôt contient tout le projet)
4. Brancher le domaine `jacob.cx` **seulement quand le site est validé** — le site Wix
   reste en ligne jusque-là.

Le fichier `public/_redirects` est lu automatiquement par Cloudflare Pages.

## À terminer avant la mise en ligne

- [ ] **Chat Partoo** — coller le script dans `src/data/partoo.ts`. Tant que le champ
      est vide, le bouton de chat n'apparaît pas. Le script est chargé **au clic
      uniquement** : c'est ce qui permet au site de ne déposer aucun cookie et donc de
      se passer de bandeau de consentement. Ne pas déplacer ce chargement.
- [ ] **Formulaire de contact** — pas encore en place ; les appels à l'action pointent
      pour l'instant vers le téléphone et le courriel, qui convertissent très bien en
      local. Si on ajoute un formulaire, il faudra un service de traitement (fonction
      Cloudflare, ou service tiers) et le déclarer dans la politique de confidentialité.
- [ ] **Avis Google** — à intégrer en dur, sans widget tiers. Lien public de la fiche :
      `https://maps.google.com/?cid=8658779057807844095`. Pas de balisage `Review` ni
      `AggregateRating` : Google sanctionne le balisage des avis auto-promotionnels.
- [ ] **Photos manquantes** — poste de micro-soudure, Rusolut VNR, ARGUS raccordé sur
      une ligne, borne WiFi au plafond, Alexandre en intervention, baie rangée « après ».
- [ ] **Redirections** — compléter `public/_redirects` avec la liste réelle des URL
      indexées, relevée dans la Search Console du site Wix.
- [ ] **Orthographe des références clients** (`src/data/site.ts`) et vérification d'une
      éventuelle clause de confidentialité côté Passman.
- [ ] **Mesure d'audience** sans cookie si souhaitée : Cloudflare Web Analytics est
      inclus dans l'hébergement et ne dépose rien.

## Choix techniques, et pourquoi

- **Magic UI Pro via shadcn** (13/09/2026) : `npx shadcn@latest add @magicui-pro/<nom>`
  installe un bloc dans `src/components/`. Il faut le jeton Pro dans `.env.local`
  (voir `.env.example`). React et Tailwind sont là pour ces blocs uniquement : tant
  qu'aucun bloc n'est utilisé dans une page, le visiteur ne reçoit aucun JS de plus.
  Le hero est le premier bloc en service : ≈ 127 Ko de JS compressé par page.
  Deux règles dans `src/styles/tailwind.css` : ne jamais redéfinir `--accent` (c'est
  l'ambre du site, shadcn l'utilise pour autre chose), et garder les utilitaires
  Tailwind hors `@layer`, sinon `global.css` l'emporte sur leurs classes.
- **Pas de bandeau cookies** parce qu'aucun traceur n'est chargé. C'est un avantage réel
  sur mobile, où le bandeau s'interpose entre le visiteur et la page. Toute la chaîne en
  dépend : pas de Google Analytics, pas de carte Maps intégrée, pas de vidéo YouTube.
- **Polices auto-hébergées** (Archivo et JetBrains Mono via Fontsource) plutôt que
  chargées chez Google : plus rapide, et un tiers de moins dans le circuit.
- **Données structurées LocalBusiness** dans chaque page : elles aident Google à
  rattacher le site à la fiche de l'entreprise.
- **URL sans slash final** et une page par fichier, pour que les redirections depuis
  l'ancien site soient simples à écrire.
