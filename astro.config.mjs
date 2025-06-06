// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    site: "evercano.github.io",
    base: '/evercano.github.io'
    //plugins: [tailwindcss()],
  },
});
