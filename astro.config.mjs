// @ts-check
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://elewandowski.github.io",
  base: "/portfolio",
  devToolbar: { enabled: false },
  fonts: [
    {
      provider: fontProviders.local(),
      name: "LibreBaskerville",
      cssVariable: "--font-LibreBaskerville",
      options: {
        variants: [
          {
            src: ["./src/assets/LibreBaskerville-Regular.ttf"],
            weight: "normal",
            style: "normal",
          },
        ],
      },
    },
  ],
});
