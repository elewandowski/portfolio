import { defineCollection } from "astro:content";
import { file } from "astro/loaders";

const projects = defineCollection({
  loader: file("src/content/projects.yml"),
});

export const collections = { projects };
