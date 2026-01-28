import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/MyReactApp/', // <-- نفس اسم الريبو الجديد
})
