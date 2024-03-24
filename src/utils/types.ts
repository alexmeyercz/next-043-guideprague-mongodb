import * as z from 'zod'

export type ArticleType = {
  id: string
  // form fields
  title: string
  articleSlug: string
  articleStatus: string
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
  articleStatus: z.nativeEnum(ArticleStatus),
  articleSlug: z
    .string()
    .min(2, { message: 'Slug must be at least 2 characters' })
    .regex(/^[a-z0-9-]+$/, {
      message: 'Slug can only contain lowercase letters, numbers, and dashes',
    }),
})

export type CreateAndEditArticleType = z.infer<
  typeof createAndEditArticleSchema
>

// Category Types

export type CategoryType = {
  id: string
  // form fields
  name: string
  categoryStatus: boolean
  // prefilled/auto
  clerkId: string
  createdAt: Date
  updatedAt: Date
}
export const createAndEditCategorySchema = z.object({
  name: z.string().min(2, {
    message: 'Category name must be at least 2 characters',
  }),
  categoryStatus: z.boolean().optional().default(true),
})

export type CreateAndEditCategoryType = z.infer<
  typeof createAndEditCategorySchema
>
