/**
 * Chat Partoo — optionnel.
 *
 * TANT QUE CE FICHIER EST VIDE, LE SITE FONCTIONNE : le bouton de contact
 * ouvre un petit panneau maison (appeler, SMS, courriel), sans aucun
 * tiers ni cookie. Il n'y a donc rien d'urgent à faire ici.
 *
 * Si Partoo active un jour le chat web sur ton compte, ils fourniront une
 * balise du type :
 *
 *     <script src="https://…/widget.js" data-id="XXXX" async></script>
 *
 * Reporter alors :
 *   scriptUrl  → la valeur du src
 *   attributs  → les autres attributs ({ 'data-id': 'XXXX' })
 *
 * et le bouton basculera automatiquement sur le chat Partoo.
 *
 * IMPORTANT — le script n'est chargé qu'au clic. C'est ce qui permet au
 * site de ne déposer aucun cookie tant que le visiteur ne demande rien,
 * et donc de se passer de bandeau de consentement. Ne pas déplacer ce
 * chargement dans le <head> ou au chargement de la page sans revoir la
 * politique de confidentialité.
 */
export const partoo = {
  scriptUrl: '',
  attributs: {} as Record<string, string>,
};
