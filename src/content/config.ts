import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.union([z.string(), z.date()]).optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tech: z.array(z.string()).default([]),
    github: z.string().url().optional(),
    demo: z.string().url().optional(),
    status: z.enum(["completed", "in-progress", "concept", "archived"]).default("completed"),
    featured: z.boolean().default(false),
    image: z.string().optional(),
  }),
});

export const collections = { posts, projects };
