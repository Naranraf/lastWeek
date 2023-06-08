import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        'bootswatch/dist/lux/bootstrap.min.css',
        '/App','/store', "react-bootstrap","react-router-dom"
      ],
    },
  },
});
