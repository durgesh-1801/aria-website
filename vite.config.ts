import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  // SPA fallback for dev server: allows direct URL access to any route
  // (e.g. http://localhost:5173/how-it-works refreshes without 404)
  server: {
    historyApiFallback: true,
  },
  // SPA fallback for `vite preview` (production preview locally)
  preview: {
    historyApiFallback: true,
  },
})
