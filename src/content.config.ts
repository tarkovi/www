import { defineCollection, z } from 'astro:content'
import { file, glob } from 'astro/loaders'

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/posts' }),
  schema: z.object({
    title: z.string().max(30),
    description: z.string().max(60),
    image: z.string().optional(),
    date: z.date()
  })
})

const gallery = defineCollection({
  loader: file('src/data/gallery.json'),
  schema: z.object({
    title: z.string().max(40),
    date: z.date()
  })
})

export const collections = { posts, gallery }
