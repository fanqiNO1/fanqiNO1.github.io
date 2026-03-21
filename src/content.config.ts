import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const about = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './public/content/about' }),
  schema: z.object({
    lang: z.string(),
  }),
});

const publications = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './public/content/publications' }),
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    conference: z.string(),
    year: z.number(),
    cover: z.string(),
    tags: z.array(z.string()).default([]),
    links: z.object({
      paper: z.string().optional(),
      code: z.string().optional(),
      project: z.string().optional(),
    }).default({}),
    date: z.date(),
    selected: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './public/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    cover: z.string(),
    tags: z.array(z.string()).default([]),
    github: z.string().optional(),
    stars: z.number().optional(),
    demo: z.string().optional(),
    date: z.date(),
  }),
});

const blogs = defineCollection({
  loader: glob({ pattern: '**/main.md', base: './public/content/blogs' }),
  schema: z.object({
    title: z.string(),
    series: z.string(),
    date: z.date(),
    readTime: z.number(),
    zhihuLink: z.string().optional(),
    wechatLink: z.string().optional(),
  }),
});

export const collections = {
  about,
  publications,
  projects,
  blogs,
};