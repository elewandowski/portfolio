import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { file } from "astro/loaders";

const projects = defineCollection({
  loader: file("src/content/projects.yml"),
  schema: ({ image }) =>
    z.object({
      id: z.string(),
      title: z.string(),
      subtitle: z.string(),
      description: z.string().optional(),
      url: z.url().optional(),
      img: image().optional(),
    }),
});

export const collections = { projects };
