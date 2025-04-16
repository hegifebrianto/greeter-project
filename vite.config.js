import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 👇 Tambahkan konfigurasi test untuk Vitest
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: './src/greeter.js',
      name: 'Greeter',
      fileName: () => 'compiled-greeter.js',
      formats: ['iife'] 
    },
    rollupOptions: {
      external: ['vue'], 
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  test: {
    environment: 'jsdom',
    globals: true
  }
})
