import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Adasa-14/',  // << مهم جداً، لازم يكون نفس اسم الريبو
})
