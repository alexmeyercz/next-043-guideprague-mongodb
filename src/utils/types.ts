import * as z from 'zod'

export type ArticleType = {
  // prefilled/auto
  id: string
  clerkId: string
  createdAt: Date
  updatedAt: Date
  // form fields
  title: string
}

// Enum in TypeScript are a special type that allows you to define a set of named constants. They can be numeric or string based.
// export enum ArticleStatus {
//   Published = 'published',
//   Draft = 'draft',
//   Archived = 'archived',
// }

export const createAndEditArticleSchema = z.object({
  title: z.string().min(2, {
    message: 'Title must be at least 2 characters',
  }),
})

export type CreateAndEditArticleType = z.infer<
  typeof createAndEditArticleSchema
>
