import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { vitePluginGhPages } from 'vite-plugin-gh-pages';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    vitePluginGhPages()],
})
