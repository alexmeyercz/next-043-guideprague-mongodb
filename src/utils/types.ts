import * as z from 'zod'

export type ArticleType = {
  id: string
  // form fields
  title: string
  status: string
  // prefilled/auto
  clerkId: string
  createdAt: Date
  updatedAt: Date
}

// Enum in TypeScript are a special type that allows you to define a set of named constants. They can be numeric or string based.
export enum ArticleStatus {
  Published = 'published',
  Draft = 'draft',
  Archived = 'archived',
}

export const createAndEditArticleSchema = z.object({
  title: z.string().min(2, {
    message: 'Title must be at least 2 characters',
  }),
  status: z.nativeEnum(ArticleStatus),
})

export type CreateAndEditArticleType = z.infer<
  typeof createAndEditArticleSchema
>

// Category Types

export type CategoryType = {
  id: string
  // form fields
  name: string
  status: boolean
  // prefilled/auto
  clerkId: string
  createdAt: Date
  updatedAt: Date
}
export const createAndEditCategorySchema = z.object({
  name: z.string().min(2, {
    message: 'Category name must be at least 2 characters',
  }),
  status: z.boolean().optional().default(true),
})

export type CreateAndEditCategoryType = z.infer<
  typeof createAndEditCategorySchema
>
