// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: "https://smkn1bantul.sch.id",
  output: "server",
  adapter: node({ mode: "standalone" }),
  integrations: [react()],
  server: { port: 3000 },
});
