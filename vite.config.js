import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  base: "/", // Asegura que las rutas sean relativas a la raíz
  server: {
    historyApiFallback: true, // Manejo de rutas en React Router
  },
  build: {
    outDir: "dist",
    rollupOptions: {
      output: {
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "assets/[name].js",
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor";
          }
        },
      },
    },
  },
  resolve: {
    alias: {
      "@assets": "/src/assets",
      "@components": "/src/components",
      "@locales": "/src/locales",
      "@pages": "/src/pages",
      "@seo": "/src/seo",
    },
  },
});
