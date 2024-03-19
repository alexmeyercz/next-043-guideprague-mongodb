import * as z from 'zod'

export type ArticleType = {
  id: string
  createdAt: Date
  updatedAt: Date
  clerkId: string
  articleSlug: string
  title: string
  excerpt: string
  status: string
  body: string
}
export enum ArticleStatus {
  Published = 'published',
  Draft = 'draft',
  Archived = 'archived',
}

export const createAndEditArticleSchema = z.object({
  articleSlug: z.string().regex(/^[a-z0-9-]+$/, {
    message: 'Slug can only contain lowercase letters, numbers, and dashes.',
  }),
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
  body: z.string().min(20, {
    message: 'Body must be at least 20 characters.',
  }),
  status: z.nativeEnum(ArticleStatus),
})

export type CreateAndEditArticleType = z.infer<
  typeof createAndEditArticleSchema
>
