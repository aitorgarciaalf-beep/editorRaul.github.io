import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Update this with your production URL
  site: 'https://example.com',

  // Output directory - change if needed (e.g., '../docs' for GitHub Pages)
  // outDir: './dist',

  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  },

  build: {
    assets: 'assets'
  },

  markdown: {
    syntaxHighlight: 'prism',
    shikiConfig: {
      theme: 'github-dark'
    }
  }
});
