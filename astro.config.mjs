import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";

export default defineConfig({
  integrations: [tailwind({ applyBaseStyles: true }), react(), mdx()],
  site: "https://scott-marriage.com",
  markdown: { shikiConfig: { theme: "github-dark" } },
});
