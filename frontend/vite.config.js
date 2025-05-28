import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,           // <-- allow external access from ngrok
    port: 5137,
    strictPort: true,     // <-- prevent port fallback
    cors: true            // <-- allow all origins
  }
})
