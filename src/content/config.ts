import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional()
  }),
});

const work = defineCollection({
  type: "content",
  schema: z.object({
    company: z.string(),
    role: z.string(),
    dateStart: z.coerce.date(),
    dateEnd: z.union([z.coerce.date(), z.string()]),
  }),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
      draft: z.boolean().optional(),
      tech: z.array(z.string()).optional(),
      status: z.string().optional(),
      impact: z.string().optional(),
      github: z.string().optional(),
      demo: z.string().optional(),
      featured: z.boolean().optional(),
      order: z.number().optional(),
  }),
});

export const collections = { blog, work, projects };
