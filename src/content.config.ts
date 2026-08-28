import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.enum([
      "Destinos",
      "Dicas de Viagem",
      "Eventos",
      "Feriados",
      "Gastronomia Pet",
      "Guia Completo",
      "Hospedagem Pet Friendly",
      "Natureza e Bem-estar",
      "Viagem com Pets",
    ]),
    tags: z.array(z.string()).default([]),
    excerpt: z.string(),
    cover: z.string().optional(),
    author: z.string().default("Pousada Portal do Cacau"),
  }),
});

export const collections = { blog };
