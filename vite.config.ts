import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      ui: path.resolve(__dirname, "./src/ui/"),
      views: path.resolve(__dirname, "./src/views/"),
      hooks: path.resolve(__dirname, "./src/hooks/"),
      store: path.resolve(__dirname, "./src/store/"),
      assets: path.resolve(__dirname, "./src/assets/"),
      modules: path.resolve(__dirname, "./src/modules/"),
      entities: path.resolve(__dirname, "./src/entities/"),
    },
  },
});
