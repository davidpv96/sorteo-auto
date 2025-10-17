import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  site: 'https://tu-dominio.vercel.app', // Reemplaza con tu URL de Vercel
  base: '/',
});

