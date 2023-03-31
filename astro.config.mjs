import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify/edge-functions';

// https://astro.build/config
export default defineConfig({
  site: 'https://afsp.org',
  integrations: [],
  adapter: netlify(),
  output: 'server'
});
