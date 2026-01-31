import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/Portfolio/', // <-- importante para Github Pages
  plugins: [
    react(),
    tailwindcss(),
  ],
})
