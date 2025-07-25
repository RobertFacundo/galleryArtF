  // vite.config.js
  import { defineConfig, loadEnv } from 'vite'; // <--- 1. Importa 'loadEnv'
  import react from '@vitejs/plugin-react';
  import tailwindcss from '@tailwindcss/vite';

  // <--- 2. Cambia la exportación por esta estructura de función
  export default defineConfig(({ mode }) => { 
    // <--- 3. Carga las variables de entorno aquí dentro
    const env = loadEnv(mode, process.cwd(), 'VITE_');

    return { // <--- 4. Todo lo demás va dentro de este 'return'
      plugins: [
        react(),
        tailwindcss()
      ],
      server: {
        proxy: {
          '/art_images': {
            target: env.VITE_DATABASE_URL, // <-- Ahora 'env' está definido
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/art_images/, '/art_images'),
          },
          '/login': {
            target: env.VITE_DATABASE_URL,
            changeOrigin: true,
          },
          '/logout': {
            target: env.VITE_DATABASE_URL,
            changeOrigin: true,
          },
          '/artworks': {
            target: env.VITE_DATABASE_URL,
            changeOrigin: true,
          },
          // ... otros proxies si los tienes
        },
      },
    };
  });