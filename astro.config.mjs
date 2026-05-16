// @ts-check
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
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
