import { defineCollection, z } from "astro:content";
import { file } from "astro/loaders";

const projects = defineCollection({
  loader: file("src/content/projects.yml"),
  schema: ({ image }) =>
    z.object({
      id: z.string(),
      title: z.string(),
      description: z.string(),
      img: image().optional(),
    }),
});

export const collections = { projects };
