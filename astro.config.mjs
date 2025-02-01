// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

import vercel from '@astrojs/vercel';
// https://astro.build/config
export default defineConfig({
  integrations: [
    icon()
  ],

  i18n: {
    locales: ['en', 'pt-br'],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: true
  }
  },
  
  output: 'server',
  adapter: vercel(),
});