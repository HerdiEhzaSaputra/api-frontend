import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import react from "@astrojs/react";

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  site: "https://xezar.netlify.app/",
  // integrations: [tailwind(), preact({ compat:true })],
  integrations: [tailwind(), react()],
  vite: {
    ssr: {
      external: ["@11ty/eleventy-img", "svgo"]
    }
  },
  output: "server",
  adapter: netlify()
});