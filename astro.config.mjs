import { defineConfig } from "astro/config";
import github from "@astrojs/github";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: 'https://KaanOguzhanALBAY.github.io',
  base: '/KaanOguzhanALBAY.github.io/',
  adapter: github(),
  vite: {
    plugins: [tailwindcss()],
  },
});
