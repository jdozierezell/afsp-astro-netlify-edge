import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify/edge-functions';

// https://astro.build/config
export default defineConfig({
  integrations: [],
  adapter: netlify(),
  output: 'server'
});
