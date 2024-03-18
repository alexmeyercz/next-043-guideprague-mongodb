import * as z from 'zod'

export type ArticleType = {
  id: string
  createdAt: Date
  updatedAt: Date
  clerkId: string
  title: string
  excerpt: string
  status: string
  content: string
}
export enum status {
  published = 'published',
  draft = 'draft',
  deleted = 'deleted',
}

export const createAndEditArticleSchema = z.object({
  title: z
    .string()
    .min(2, {
      message: 'Title must be at least 2 characters.',
    })
    .max(50, {
      message: 'Title must be less than 50 characters.',
    }),
  excerpt: z
    .string()
    .min(20, {
      message: 'Title must be at least 20 characters.',
    })
    .max(200, {
      message: 'Title must be at most 200 characters.',
    }),
  status: z.nativeEnum(status),
})

export type CreateAndEditArticleType = z.infer<
  typeof createAndEditArticleSchema
>
