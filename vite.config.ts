import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Custom domain (avaykumar.dev) serves from the root, so base stays '/'.
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
