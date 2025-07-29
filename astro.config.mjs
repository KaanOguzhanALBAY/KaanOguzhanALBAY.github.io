import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// Remove GitHub adapter and base path
export default defineConfig({
  site: 'https://kaanoguzhanalbay.github.io', // ⚠️ Note lowercase username
  vite: {
    plugins: [tailwindcss()],
  },
  outDir: 'docs', 
  build: {
    format: 'directory' 
  }
});
