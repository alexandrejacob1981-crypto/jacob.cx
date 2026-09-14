/** Les constantes du site — un seul endroit à corriger. */

export const site = {
  nom: 'Alexandre Jacob',
  domaine: 'jacob.cx',
  statut: 'EI',
  telephone: '06 14 02 60 47',
  telephoneLien: 'tel:+33614026047',
  courriel: 'alexandre@jacob.cx',
  adresse: {
    rue: '146 rue de Paris',
    codePostal: '92190',
    ville: 'Meudon',
    pays: 'FR',
  },
  siret: '514 175 132 00034',
  tva: 'FR77514175132',
  sap: 'SAP488755646',
  ficheGoogle: 'https://maps.google.com/?cid=8658779057807844095',
  zone: "Meudon, Hauts-de-Seine et toute l'Île-de-France",
} as const;

export const nav = [
  { href: '/infogerance', label: 'Entreprises' },
  { href: '/particuliers', label: 'Particuliers' },
  { href: '/wifi-professionnel', label: 'WiFi' },
  { href: '/expertise-telecom', label: 'Télécom' },
] as const;

export const navPied = [
  { href: '/infogerance', label: 'Infogérance et maintenance' },
  { href: '/wifi-professionnel', label: 'Réseaux WiFi professionnels' },
  { href: '/particuliers', label: 'Dépannage à domicile' },
  { href: '/recuperation-de-donnees', label: 'Récupération de données' },
  { href: '/maintenance-a-distance', label: 'Maintenance à distance' },
  { href: '/expertise-telecom', label: 'Expertise télécom' },
] as const;

/** Communes citées pour le référencement local. */
export const communes = [
  'Meudon', 'Sèvres', 'Clamart', 'Chaville', "Ville-d'Avray",
  'Boulogne-Billancourt', 'Issy-les-Moulineaux', 'Vanves', 'Viroflay',
  'Versailles', 'Paris',
] as const;

/**
 * Références clients — RETIRÉES DU SITE avant la mise en ligne du 14/09/2026.
 *
 * Alexandre les avait citées le 08/09, mais les intéressés n'ont pas encore
 * donné leur accord, et la clause de confidentialité côté Passman n'a pas été
 * vérifiée. On ne publie pas le nom d'un client sans son accord.
 *
 * POUR LES REMETTRE : décommenter la liste ci-dessous et supprimer le tableau
 * vide. Les trois sections « Ils me font confiance » réapparaissent seules,
 * elles sont conditionnées à cette liste.
 *
 *   'Passman',
 *   'Punto Architecte',
 *   'Agnès et Agnès',
 *   'Fréquence Architecture',
 *   'Agence Lacombe',
 */
export const references: readonly string[] = [];
