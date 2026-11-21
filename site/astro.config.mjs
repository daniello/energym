import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://energym-comic.vercel.app",
  prefetch: true,
  build: {
    inlineStylesheets: "auto",
  },
});
