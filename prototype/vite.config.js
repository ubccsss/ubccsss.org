import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Standalone prototype — deliberately not wired into the Hugo build.
export default defineConfig({
  plugins: [react()],
  server: { port: 5199, strictPort: true },
  preview: { port: 5199, strictPort: true },
});
