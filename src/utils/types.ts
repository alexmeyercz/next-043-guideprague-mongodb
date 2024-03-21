import * as z from 'zod'

export type ArticleType = {
  // form fields
  title: string
  // auto
  id: string
  createdAt: Date
  updatedAt: Date
  clerkId: string
}
export enum ArticleStatus {
  Published = 'published',
  Draft = 'draft',
  Archived = 'archived',
}

export const createAndEditArticleSchema = z.object({
  title: z.string().min(2, {
    message: 'Title must be at least 2 characters',
  }),
})

export type CreateAndEditArticleType = z.infer<
  typeof createAndEditArticleSchema
>
