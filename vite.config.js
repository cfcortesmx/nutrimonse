import { defineConfig } from 'vite';

export default defineConfig({
  root: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    minify: 'terser',
    sourcemap: false,
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
