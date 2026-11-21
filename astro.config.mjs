// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://alquilerveranonecochea.netlify.app',
  server: {
    host: true,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
