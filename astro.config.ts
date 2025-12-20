// @ts-check
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig, fontProviders } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [sitemap()],
  experimental: {
    fonts: [
      {
        cssVariable: '--font-inter',
        name: 'Inter',
        provider: fontProviders.google()
      }
    ]
  },
  vite: {
    plugins: [tailwindcss()]
  }
})
