// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

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
});