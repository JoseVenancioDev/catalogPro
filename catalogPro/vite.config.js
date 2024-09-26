import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: 'localhost', // '0.0.0.0' se quiser acessar em rede local
    port: 3000, // Porta padrão ou a que você preferir
    cors: true, // Habilita o CORS para o desenvolvimento
  },
})
