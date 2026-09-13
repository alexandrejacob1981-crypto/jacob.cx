# CONTEXTE — Refonte du site jacob.cx

Ce fichier est le brief permanent du projet. À lire au début de chaque session.

---

## 1. Qui

Alexandre Jacob, prestataire indépendant, 146 rue de Paris, 92190 Meudon (Hauts-de-Seine).
Téléphone 06 14 02 60 47 — alexandre@jacob.cx
Plus de 25 ans d'expérience terrain.

**Identité administrative (confirmée le 08/09/2026)** :
Entrepreneur individuel (EI) · SIRET 514 175 132 00034 · SIREN 514 175 132 ·
TVA FR77514175132 · services à la personne sous le n° **SAP488755646**, qui est celui
de la **MDSAP** — Alexandre est prestataire chez eux, c'est normal et à formuler ainsi.
Mention « EI » obligatoire à côté du nom sur le site, les devis et les factures.

Zone d'intervention : toute l'Île-de-France, base à Meudon (confirmé le 08/09/2026 —
l'ancienne mention « Meudon et ouest parisien » était plus étroite que la réalité).

Il gère lui-même le domaine `jacob.cx` (registrar externe, pas Wix). Il a une seconde
activité distincte, le site e-commerce **futuredge.fr** (cartes premium personnalisées,
objets connectés, impression 3D, gravure laser) — à ne pas mélanger avec jacob.cx.

## 2. L'activité réelle

**Infogérance et dépannage informatique, plus installation et maintenance de réseaux
WiFi, pour les professionnels et les particuliers.**

Trois branches :

- **Entreprises / infogérance** — infogérance, maintenance informatique et réseaux,
  systèmes d'information, sauvegarde et récupération de données, administration de
  messagerie (Exchange, Gmail pro), systèmes d'impression, noms de domaine, Cloud.
  Cible : TPE et professions libérales.
- **Réseaux WiFi** — installation, audit de couverture, bornes, réseau invité,
  segmentation, dépannage de performances. Pour les pros (commerces, cabinets, hôtels,
  restaurants, coworking) comme pour les particuliers (couverture multi-étages,
  maisons en pierre, maillage).
- **Particuliers** — maintenance, dépannage, réparation informatique, domotique,
  son et vidéo. À domicile et à distance.

**Matériel de mesure (confirmé le 08/09/2026)** : qualificateur **IDEAL Networks
SignalTEK II** (modèle identifié sur photo — teste le PoE, mesure la longueur des
paires, détecte court-circuit et câblage inversé), photomètre optique (OPM 1310 nm),
ARGUS 52+ (ADSL / VDSL / RTC), ARGUS SHDSL, OTDR fibre, soudeuse fibre Sumitomo,
Panasonic Toughbook CF-20. Il **soude la fibre**, il ne fait pas que diagnostiquer —
argument à exploiter au-delà de la page WiFi.

**Récupération de données (confirmé le 08/09/2026)** : **Rusolut VNR — Visual NAND
Reconstructor**, lecture directe des puces mémoire NAND sans passer par le
contrôleur. Couvre clés USB, cartes SD et microSD (monolithiques comprises) et SSD.
**Chip-off réalisé par Alexandre lui-même**, plus adaptateurs, dans un **laboratoire
équipé pour la micro-soudure sous microscope**. Rien en sous-traitance.
**Pas de facturation si moins de 50 % des données sont récupérées.**
**Disques durs mécaniques et RAID : non traités** (pas de salle blanche) — orientés
vers le laboratoire partenaire **Recoveo, à Issy-les-Moulineaux**. Choix retenu : ne
pas le nommer sur le site, pour ne pas inviter le client à s'y adresser directement ;
le nom se donne de vive voix.

**Réparation au niveau du circuit (confirmé le 08/09/2026)** : soudures sur nappes et
cartes mères, ports arrachés, **rebillage**. Compétence rare en local, sous-exploitée
— mériterait une page à part entière une fois les sept premières en ligne.

**Fibre (confirmé le 08/09/2026)** : réparation rapide d'une fibre coupée **sur la
partie privative** (intérieur de bâtiment, fourreaux du client). Pas d'intervention
sur le réseau opérateur — mais localisation exacte fournie.
Grille validée le 08/09/2026 : **590 € HT dans la journée · 790 € HT sous 4 heures ·
390 € HT si le défaut est en amont** (diagnostic avec distance de coupure, annoncé
avant le déplacement).

**Habilitations : aucune** (ni travail en hauteur, ni électrique). Conséquence à
respecter dans la rédaction : pas d'aérien, pas de poteau, pas de nacelle — tout reste
au sol et en intérieur. Peut fermer des portes côté donneurs d'ordre ; AIPR et travail
en hauteur sont des formations courtes si le besoin se confirme.

**Références (confirmées le 08/09/2026)** : Passman (connectivité hôtelière, de
nombreux hôtels parisiens), Punto Architecte, Agnès et Agnès, Fréquence Architecture,
Agence Lacombe. À faire valider par les intéressés avant publication, et vérifier
l'absence de clause de confidentialité côté Passman.

**Réseau invité** : il gère la journalisation et la conservation des données de
connexion. Peu d'installateurs locaux le font — argument fort en hôtellerie et
restauration.

**Photos** : Alexandre fournit des photos de terrain dans un second temps. Pas
d'images générées pour illustrer les interventions — décision du 08/09/2026.
Dépôt dans `photos/a-trier/` (voir `photos/LISEZ-MOI.md`). iCloud est synchronisé en
local dans `C:\Users\pc\iCloudPhotos\Photos` (30 000+ fichiers, photothèque
personnelle : ne pas y fouiller, c'est lui qui sélectionne).

**Téléphones et tablettes : hors périmètre** (décision du 08/09/2026). Alexandre sait
faire, mais le temps réellement passé n'est pas facturable et le rapport temps /
résultat est mauvais. Ne figure nulle part sur le site — ne pas créer une demande
qu'on ne veut pas servir.

**Expertise différenciante :** un vrai socle télécom. Interventions sur lignes cuivre
et fibre, avec le matériel de mesure, de test et de diagnostic utilisé par les
techniciens télécom. C'est l'argument décisif face à un infogérant généraliste :
un problème de WiFi sur trois est en réalité un problème de ligne ou de débit, et il
peut le prouver.

## 3. L'historique du site — à comprendre avant de toucher au contenu

Le site actuel est sur **Wix**. Il a été **réécrit récemment pour justifier un
changement de code INSEE** : les pages d'accueil, /pro et /particulier ne parlent plus
que d'« interventions techniques en télécommunications filaires » (calibré sur le code
NAF 61.10Z). Cette réécriture a effacé le reste de l'activité.

**Le site actuel ne décrit donc pas l'activité réelle.** Ne pas s'en servir comme
source pour le contenu.

Ce que la réécriture a fait disparaître, retrouvé dans les archives Wayback de
février-mars 2026 :

- l'accroche d'origine : « Spécialiste IT / Réseaux — Maintenance et dépannage informatique »
- toute la partie **infogérance** (remplacée par de la prestation ponctuelle en sous-traitance)
- la **domotique, le son et la vidéo**, disparus sans laisser de trace
- la page **récupération de données**, aujourd'hui vide mais toujours en ligne et indexée

Le télécom reste une vraie compétence, mais c'est un sous-ensemble qui a mangé toute
la façade. Il doit redevenir une page parmi d'autres, pas le discours principal.

## 4. Structure cible — 7 pages

1. **Accueil** — titre : « Infogérance, dépannage informatique et réseaux WiFi | Meudon (92) ».
   Trois portes d'entrée immédiatement visibles : Entreprises, Particuliers, WiFi.
2. **Entreprises / Infogérance** — le contenu de la branche pro ci-dessus.
   Mettre en avant un **forfait mensuel** : l'infogérance se vend au contrat, pas à l'intervention.
3. **Réseaux WiFi professionnels** — page nouvelle, et la plus stratégique.
   C'est le meilleur atout commercial et il n'existe nulle part sur le site actuel.
   Mots-clés bien moins concurrentiels que « dépannage informatique meudon ».
4. **Particuliers** — dépannage, réparation, domotique, son et vidéo, plus le WiFi domestique.
5. **Récupération de données** — page à remettre en ligne.
   Prestation la mieux margée. **Corriger l'URL au passage** : l'actuelle est
   `/recuperation-donnnees`, avec trois « n ».
6. **Maintenance à distance** — contenu actuel correct, à reprendre tel quel.
7. **Expertise télécom** — interventions cuivre et fibre. Deux fonctions : justifier
   le code NAF de façon vérifiable, et servir de preuve technique aux autres branches.

Plus : **mentions légales, politique de confidentialité**. Absentes aujourd'hui alors
qu'il y a un formulaire qui collecte des données. SIRET à intégrer.

## 5. Tarifs actuels (à confirmer par Alexandre)

| Prestation | Tarif |
|---|---|
| Intervention sur site — particulier | 290 € TTC, soit **145 € après crédit d'impôt** (déplacement + 2 h) |
| Heure supplémentaire — particulier | 120 € TTC, soit **60 € après crédit d'impôt** |
| Hors heures ouvrées — professionnels | **+ 50 %** (ne s'applique pas aux particuliers) |
| État des lieux infogérance | facturé, **déduit du premier mois** |
| Contrat d'infogérance | **sans engagement, 3 mois de préavis** |
| Maintenance à distance | 90 € TTC, **1 h incluse**, virement ou lien CB |
| Soir et samedi — particulier | **sans supplément** (le supplément ne vaut que pour les pros) |
| Intervention sur site — professionnel | 290 € HT |
| Maintenance à distance | 90 € TTC |
| Récupération de données | 390 € TTC — **diagnostic gratuit**, rien à payer si moins de 50 % des données récupérées |
| Heure supplémentaire à distance | 90 € TTC (même tarif horaire) |
| Audit de couverture WiFi (≤ 100 m²) | 290 € HT, rapport écrit, déduit si installation |
| Installation WiFi | sur devis après audit, matériel en sus |
| Dépannage WiFi sur installation existante | 290 € HT |
| Hors heures ouvrées (soir, samedi) | supplément — montant à fixer |

Pas de forfait de suivi WiFi : tranché le 08/09/2026. Le revenu récurrent passe
uniquement par l'infogérance.
Matériel installé : Aruba, Ruckus, Zyxel.

## 6. Points de vigilance

- **Crédit d'impôt — tranché le 08/09/2026 : c'est réel.** Alexandre est affilié à la
  **MDSAP (Maison des Services À la Personne)**. Les tarifs particuliers s'affichent
  après crédit d'impôt. Attention au périmètre : ça couvre l'assistance informatique
  à domicile, **pas** la domotique, le son et vidéo, ni le télécom — la page doit le
  dire pour ne pas créer d'attente fausse. Ni la récupération de données ni
  l'assistance à distance n'y ouvrent droit. **Pas d'avance immédiate Urssaf** —
  écartée le 08/09/2026, procédure trop lourde pour un ou deux passages par an chez
  un même particulier ; ne plus reposer la question. Reste à obtenir le numéro de
  déclaration SAP. **Plafond : 3 000 € de dépenses par an et par foyer** (soit
  1 500 € de crédit). **L'attestation fiscale est émise par la MDSAP**, pas par
  Alexandre — argument de confiance à exploiter.
- **Redirections.** Les URL actuelles sont indexées, certaines depuis 2023. Prévoir
  les redirections 301 depuis toutes les anciennes adresses avant la bascule DNS.
- **Photos.** Le site actuel tourne à la banque d'images. Pour du service local, des
  photos réelles (interventions, matériel de mesure, baie, installation WiFi) valent
  bien mieux. Alexandre doit les fournir.
- **Site sans cookie — décision du 08/09/2026.** Aucun bandeau de consentement.
  Conséquences à tenir à l'intégration : chat Partoo chargé **au clic uniquement**,
  pas de Google Analytics (utiliser Cloudflare Web Analytics, Plausible ou Matomo),
  pas de carte Maps ni de vidéo YouTube intégrées.

- **Avis Google.** Alexandre a de nombreux avis positifs sur sa fiche Google et veut
  les intégrer. Méthode retenue le 08/09/2026 : **citations en dur dans le HTML**,
  réparties par page selon la prestation, avec lien vers la fiche Google. Pas de
  widget tiers (JS lourd, traceurs, abonnement). **Pas de données structurées
  `Review` / `AggregateRating`** — Google sanctionne le balisage des avis
  auto-promotionnels. Évolution possible plus tard : récupération via l'API Google
  Places **au moment du build**, le site restant statique. Collecte en cours dans
  `contenu/avis-clients.md`.
  **Lien public de la fiche Google (vérifié le 08/09/2026) :**
  https://maps.google.com/?cid=8658779057807844095

- **Continuité de service.** Alexandre répond toujours au téléphone, congés compris.
  Pas de confrère en relais pour les déplacements — ne pas promettre d'intervention
  sur site en son absence.

- **Liens sociaux.** Les liens actuels pointent vers des comptes personnels
  (@alexandrejacob1337), une boutique Etsy et un lien affilié Amazon. À retirer ou
  remplacer par des comptes professionnels.
- **Boutique.** Un produit « carte de visite métallique gravure laser » traîne sur
  jacob.cx. Il appartient à FuturEdge. À ne pas reprendre.
- **Extension de domaine.** `.cx` (île Christmas) fait exotique pour un artisan local.
  Un `.fr` inspirerait plus confiance. Pas urgent, à envisager plus tard avec les deux
  domaines en parallèle.

## 7. Choix techniques

- Site **en code**, dans un dépôt **git**. Pas de constructeur visuel.
- Dépôt sur **GitHub**, **privé** : https://github.com/alexandrejacob1981-crypto/jacob.cx
  Déploiement continu via **Cloudflare Pages** (ou Netlify) — reste à brancher.
- Domaine **jacob.cx** branché sur l'hébergement — Alexandre gère la zone DNS.
- Site vitrine : privilégier un rendu **statique**, rapide, sans dépendances lourdes.
  Priorités : performance, SEO local, accessibilité, responsive.
- **Wix reste en ligne pendant tout le chantier.** La bascule DNS se fait quand le
  nouveau site est validé. Ne rien casser côté Wix entre-temps.

## 8. Méthode de travail

- Contenu et structure d'abord, direction graphique ensuite, intégration en dernier.
- Deux ou trois directions graphiques contrastées à proposer, Alexandre tranche sur
  maquette avant intégration.
- Rien n'est publié sans son accord explicite. C'est lui qui déclenche la mise en ligne.

## 9. État d'avancement

- [x] Analyse du site existant et récupération des archives
- [x] Positionnement défini
- [x] Structure des 7 pages arrêtée
- [ ] Rédaction du contenu page par page (commencer par WiFi pro et Entreprises)
  - [x] WiFi professionnel — premier jet dans `contenu/03-wifi-professionnel.md`,
        en attente des réponses d'Alexandre (matériel de mesure, tarifs, zone)
  - [x] Entreprises / Infogérance — premier jet dans
        `contenu/02-entreprises-infogerance.md`. En attente : grille de forfaits,
        délai d'intervention, engagement, outils de supervision et de sauvegarde.
  - [x] Particuliers — premier jet dans `contenu/04-particuliers.md`.
        **Bloquant : statut services à la personne / crédit d'impôt.**
        En attente aussi : horaires soir-samedi, périmètre domotique et son-vidéo.
  - [x] Récupération de données — premier jet dans
        `contenu/05-recuperation-de-donnees.md`. **Bloquant : périmètre réel**
        (cas mécaniques, SSD, RAID, téléphones), diagnostic gratuit ou non,
        et facturation en cas d'échec.
  - [x] Maintenance à distance — `contenu/06-maintenance-a-distance.md`.
        ⚠️ Écrite sans le texte Wix existant (que le brief disait « à reprendre tel
        quel ») : à comparer avec l'existant. En attente : outil de prise en main,
        durée couverte par les 90 €, moyen de paiement.
  - [x] Expertise télécom — `contenu/07-expertise-telecom.md`. En attente : tirage de
        câble ou non, sous-traitance affichée ou non, habilitations, tarifs.
  - [x] Accueil — `contenu/01-accueil.md`. Trois portes d'entrée, arguments forts
        remontés, liens vers les six autres pages.
  - [x] **Mentions légales** — `contenu/08-mentions-legales.md`
  - [x] **Politique de confidentialité** — `contenu/09-politique-de-confidentialite.md`
        Médiateur de la consommation et assurance RC pro : **non affichés, décision
        d'Alexandre du 08/09/2026** — ne pas reproposer. Manquent encore :
        l'hébergeur définitif et le service de traitement du formulaire, tous deux à
        fixer au moment de l'intégration.
        Facturation MDSAP : le nom d'Alexandre figure sur les factures en tant que
        prestataire.
  - [x] Mentions légales et politique de confidentialité
- [x] **Direction graphique — « A / Relevé » retenue le 08/09/2026.**
      Fond graphite, typo **Archivo** + **JetBrains Mono** pour les valeurs de mesure,
      accent ambre unique (#E3A93C). Respirations en clair sur les trois portes de
      l'accueil et sur tout le hero Particuliers, pour ne pas intimider le grand
      public. Maquettes : `design/*.dc.html` (8 pages + vue mobile).
      Directions B (Artisan) et C (Infrastructure) écartées, conservées en page 2.
      **Chat Partoo** intégré en bouton flottant — script chargé **au clic
      uniquement**, donc aucun cookie ni bandeau.
- [x] **Intégration — site Astro monté le 09/09/2026 dans `site/`.**
      10 pages générées, build vérifié. Node est installé
      (`C:\Program Files\nodejs`). Voir `site/README.md` pour tout le détail.
      Pages de 6 à 24 Ko, feuille CSS unique de 44 Ko mise en cache, images
      converties en WebP responsive au build, sitemap et données structurées
      LocalBusiness automatiques, redirections 301 dans `site/public/_redirects`.
      Restent avant mise en ligne : script Partoo à coller dans
      `site/src/data/partoo.ts`, avis Google, photos manquantes, liste réelle des
      anciennes URL, et décision sur le formulaire de contact.
- [x] **Passe UI/UX du 13/09/2026 — direction « Relevé » conservée, rien de
      graphique remis en cause.** Dix corrections, vérifiées au navigateur à
      320, 390, 860 et 1440 px.
      La plus grave : la navigation était masquée sous 960 px **sans menu de
      remplacement** — ni sur téléphone, ni sur tablette, un visiteur ne
      pouvait atteindre aucune des sept pages depuis l'en-tête. Ajout d'un
      menu dépliant qui liste les **six** prestations, contre quatre dans la
      barre desktop.
      Accessibilité WCAG 2.2 AA : lien d'évitement rendu visible au focus,
      `scroll-padding-top` (l'en-tête collant de 69 px masquait entièrement
      la cible des ancres, critère 2.4.11), cibles interactives portées à
      24 px (critère 2.5.8), hiérarchie h1 > h2 > h3 sans saut sur les 10
      pages. Les liens en ligne dans les phrases des mentions légales
      relèvent de l'exception et sont laissés tels quels.
      Conversion : les appels téléphoniques portent un verbe (« Appeler 06… »)
      au lieu du numéro nu ; le numéro n'est plus répété trois fois par écran
      sur mobile.
      Cohérence : la bulle de contact repasse à angle vif et sans ombre — elle
      était le seul élément à contredire « des filets plutôt que des ombres ».
- [x] **Projet versionné le 13/09/2026.** `git init` puis commit initial
      `6e33755` (92 fichiers), poussé sur GitHub en dépôt privé. Identité git
      posée au niveau du dépôt uniquement. `node_modules/`, `site/dist/` et
      `site/.astro/` exclus par le `.gitignore`. Les 30 photos sont dans
      l'historique : garder le dépôt privé.
- [x] **Cloudflare Pages branché le 13/09/2026.** Projet `jacob-cx`, branche
      de production `main`, préréglage Astro, racine `site`, build
      `npm run build`, sortie `dist`, `NODE_VERSION = 22`. Chaque push sur
      `main` redéploie automatiquement.
      Site de recette : **https://jacob-cx.pages.dev** — 10 pages en 200,
      404 correct. **Non indexable** : `site/public/_headers` sert
      `X-Robots-Tag: noindex, nofollow`, vérifié en ligne. La règle est
      limitée à l'hôte `pages.dev`, donc rien à retirer à la bascule DNS.
      Le flux « Workers » proposé par défaut ne convient pas (il exige un
      fichier `wrangler`) : c'est bien le flux **Pages** qu'il faut.
- [x] **Redirections 301 établies le 13/09/2026** dans `site/public/_redirects`,
      à partir du sitemap du Wix encore en ligne recoupé avec les archives
      Wayback. 13 règles. Les adresses inventées du premier jet
      (`/professionnels`, `/entreprises`, `/wifi`, `/telecom`,
      `/maintenance-distance`) n'ont jamais existé et ont été retirées.
      `/maintenance-a-distance` garde la même adresse sur le nouveau site :
      surtout ne pas lui ajouter de règle, ce serait une boucle.
- [ ] **Bascule DNS — à faire dans cet ordre, le jour J**
  - [ ] Ajouter le domaine `jacob.cx` au projet Pages (Custom domains),
        apex **et** `www`.
  - [ ] **Créer la redirection `www.jacob.cx/*` vers `jacob.cx/:splat` en 301.**
        Cloudflare > Règles > Règles de redirection. Gratuit.
        ⚠️ Ça ne peut PAS se faire dans `_redirects`, qui ne sait pas filtrer
        par nom d'hôte (contrairement à `_headers`). Or le Wix est indexé sur
        `www` et le nouveau site se déclare sur l'apex : sans cette règle, tout
        le référencement acquis sur `www` reste orphelin.
  - [ ] Vérifier les 13 redirections une fois le domaine branché.
  - [ ] Contrôler en Search Console que les anciennes URL renvoient bien 301
        et non 404, puis soumettre le nouveau sitemap.
  - [ ] Le `noindex` de `_headers` ne vise que `pages.dev` : rien à retirer.
        Vérifier tout de même qu'il n'apparaît pas sur `jacob.cx`.
