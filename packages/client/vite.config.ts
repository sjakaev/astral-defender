import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { VitePWA } from 'vite-plugin-pwa'
import dotenv from 'dotenv'
dotenv.config({ path: '../../.env' })

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: Number(process.env.CLIENT_PORT) || 3000,
  },
  build: {
    outDir: path.join(__dirname, 'dist/client'),
  },
  ssr: {
    format: 'cjs',
  },
  define: {
    __NODE_ENV__: JSON.stringify(process.env.NODE_ENV),
    __DOMAIN__: JSON.stringify(process.env.DOMAIN),
    __CLIENT_PORT__: JSON.stringify(process.env.CLIENT_PORT),
  },
  plugins: [
    react(),
    VitePWA({
      strategies: 'injectManifest',
      includeAssets: ['images/**/*.png', 'svg/*.svg'],
      injectManifest: {
        globPatterns: ['**/*.{js,css,html,ttf,eot,woff2,woff}'],
      },
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData(source, fp) {
          if (fp.endsWith('mixins.scss')) return source
          return `@import "./src/assets/scss/mixins";` + source
        },
      },
    },
  },
})
