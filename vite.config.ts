import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const apiUrl = process.env.API_URL ?? "http://localhost:4001";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: "es2020",
    cssMinify: true,
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("framer-motion")) return "motion";
            if (id.includes("react-icons")) return "icons";
            if (
              id.includes("react-dom") ||
              id.includes("react-router") ||
              id.includes("/react/")
            ) {
              return "react-vendor";
            }
            if (id.includes("react-international-phone")) return "phone-input";
          }
        },
      },
    },
  },
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: apiUrl,
        changeOrigin: true,
      },
    },
  },
});
