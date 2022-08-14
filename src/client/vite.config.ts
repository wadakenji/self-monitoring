import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: '../../.dist',
  },
  server: {
    host: true,
  },
  plugins: [react(), viteSingleFile()],
})
