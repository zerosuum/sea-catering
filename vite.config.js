import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Setiap request dari frontend yang dimulai dengan '/api'
      "/api": {
        // Akan diteruskan ke server backend Anda
        target: "http://127.0.0.1:5000",

        // Ini penting agar backend tidak bingung dengan origin request
        changeOrigin: true,
      },
    },
  },
});
