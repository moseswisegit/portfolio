// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  // REPLACE WITH ACTUAL GITHUB PAGES URL IF KNOWN
  // For now using a placeholder
  site: 'https://moseswisegit.github.io',
  base: '/portfolio',
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react()]
});