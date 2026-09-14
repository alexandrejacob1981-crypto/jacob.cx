import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Canonique sur www : OVH ne sait pas pointer un apex vers un CNAME, et c'est
  // de toute facon l'hote que Google indexe deja (le sitemap Wix liste des URL
  // en www). L'apex redirige en 301 vers www, cote OVH.
  site: 'https://www.jacob.cx',
  trailingSlash: 'never',
  integrations: [sitemap(), react()],

  build: {
    // fichiers .html plutôt que /dossier/index.html : URL sans slash final
    format: 'file',
    // 'auto' : les petites feuilles sont inlinées, la feuille globale reste
    // un fichier séparé — donc mise en cache d'une page à l'autre.
    inlineStylesheets: 'auto',
  },

  image: {
    // formats modernes générés au build par sharp
    responsiveStyles: true,
  },

  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },

  vite: {
    plugins: [tailwindcss()],
  },
});