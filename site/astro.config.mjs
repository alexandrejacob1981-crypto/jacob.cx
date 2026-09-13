import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://jacob.cx',
  trailingSlash: 'never',
  integrations: [sitemap()],
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
});
