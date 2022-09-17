import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import react from "@astrojs/react";

// import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  site: "https://xezar.netlify.app/",
  // integrations: [tailwind(), preact({ compat:true })],
  integrations: [tailwind(), react()],
  vite: {
    build: {
      rollupOptions: {
        output: {
          entryFileNames: 'entry.[hash].js',
          chunkFileNames: 'chunks/chunk.[hash].js',
          assetFileNames: 'assets/asset.[hash][extname]',
        },
      },
    },
    ssr: {
      external: ["@11ty/eleventy-img", "svgo"]
    }
  },
  publicDir: 'public',
  // output: "server",
  // adapter: netlify()
});