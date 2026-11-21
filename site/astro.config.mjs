import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://eg.lambder.com",
  prefetch: true,
  build: {
    inlineStylesheets: "auto",
  },
});
