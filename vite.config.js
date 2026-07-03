import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'assets/logo.png', 'assets/astron_hero_banner.png'],
      manifest: {
        name: 'Astron City Wiki',
        short_name: 'Astron Wiki',
        description: 'Enciclopédia definitiva do modpack Astron City',
        theme_color: '#238636',
        background_color: '#0d1117',
        display: 'standalone',
        icons: [
          {
            src: '/assets/logo.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/assets/logo.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
})
