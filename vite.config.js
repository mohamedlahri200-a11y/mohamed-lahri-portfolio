import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Portfolio 100 % front-end (aucun serveur) : déployable tel quel sur Vercel, Netlify ou Cloudflare Pages.
export default defineConfig({
  plugins: [react()],
  server: { port: 5173 },
});
