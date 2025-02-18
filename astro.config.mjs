// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://balderekjk2.github.io",
  integrations: [mdx(), icon()],

  vite: {
    plugins: [tailwindcss()],
  },
});
