import { defineConfig } from 'vite';

export default defineConfig({
  base: '/nutrimonse/', // Importante: nombre de tu repositorio
  root: './',
  build: {
    outDir: 'docs', // Cambiado de 'dist' a 'docs' para GitHub Pages
    assetsDir: 'assets',
    minify: 'terser',
    sourcemap: false,
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['gsap', '@studio-freight/lenis', 'swiper'],
          utils: ['lozad', 'dayjs', 'clipboard']
        }
      }
    }
  },
  server: {
    port: 3000,
    open: true
  }
});
