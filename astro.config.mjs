// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap'


import react from '@astrojs/react';


export default defineConfig({
  site: 'http://localhost:4321/',
  integrations: [sitemap(), react()],
})