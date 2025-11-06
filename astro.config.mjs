import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless"; // tetap pakai serverless

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  output: "server",
  adapter: vercel({
    runtime: "nodejs20.x", // ✅ tambahkan baris ini
  }),
});
