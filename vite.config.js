import { resolve } from 'node:path'
import { defineConfig } from 'vite'

const root = import.meta.dirname

export default defineConfig({
  // Relative asset URLs so GitHub Pages (/repo/) and localhost both work
  base: './',
  server: { port: 5173, open: true, host: true },
  build: {
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        kontserdid: resolve(root, 'kontserdid.html'),
        kontsert: resolve(root, 'kontsert.html'),
        osta: resolve(root, 'osta.html'),
        teenused: resolve(root, 'teenused.html'),
      },
    },
  },
})
