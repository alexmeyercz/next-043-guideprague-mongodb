'use server'

import prisma from './db'
import { auth } from '@clerk/nextjs'

import {
  type CategoryType,
  type ArticleType,
  type CreateAndEditArticleType,
  type CreateAndEditCategoryType,
  createAndEditArticleSchema,
  createAndEditCategorySchema,
} from './types'
import { redirect } from 'next/navigation'
import { Article, Category, Prisma } from '@prisma/client'

const f = '⇒ actions.ts:'

function authenticateAndRedirect(): string {
  // console.log('authenticateAndRedirect()')
  const { userId } = auth()
  // console.log(f, 'getting userId from Clerk →', userId)

  if (!userId) redirect('/')
  return userId
}

export async function createArticleAction(
  values: CreateAndEditArticleType
): Promise<ArticleType | null> {
  // simulate a long running operation
  console.log(f, 'createArticleAction(): simulate delay...')
  await new Promise((resolve) => setTimeout(resolve, 1000))
  // console.log(f, '... simulate complete.')

  // get userId
  const userId = authenticateAndRedirect()
  // console.log(f, 'getting userId from authenticateAndRedirect() →', userId)

  try {
    createAndEditArticleSchema.parse(values)
    const article: ArticleType = await prisma.article.create({
      data: {
        ...values,
        clerkId: userId,
      },
    })
    return article
  } catch (error) {
    console.log(f, 'createArticleAction() error →', error)
    return null
  }
}

export async function createCategoryAction(
  values: CreateAndEditCategoryType
): Promise<CategoryType | null> {
  // simulate a long running operation
  console.log(f, 'createCategoryAction(): simulate delay...')
  await new Promise((resolve) => setTimeout(resolve, 1000))
  // console.log(f, '... simulate complete.')

  // get userId
  const userId = authenticateAndRedirect()
  // console.log(f, 'getting userId from authenticateAndRedirect() →', userId)

  try {
    createAndEditCategorySchema.parse(values)
    const category: CategoryType = await prisma.category.create({
      data: {
        ...values,
        clerkId: userId,
      },
    })
    return category
  } catch (error) {
    console.log(f, 'createCategoryAction() error →', error)
    return null
  }
}

type GetAllArticlesActionType = {
  search?: string
  articleStatus?: string
  page?: number
  limit?: number
}
export async function getAllArticlesAction({
  search,
  articleStatus,
  page = 1,
  limit = 2,
}: GetAllArticlesActionType): Promise<{
  articles: ArticleType[]
  count: number
  page: number
  totalPages: number
}> {
  // const userId = authenticateAndRedirect()
  try {
    let whereClause: Prisma.ArticleWhereInput = {
      // just of the current user
      // clerkId: userId,
    }

    if (search) {
      whereClause = {
        ...whereClause,
        OR: [
          {
            title: {
              contains: search,
              mode: 'insensitive',
            },
            // add here more fields that you want to include to the full text search
          },
        ],
      }
    }

    if (articleStatus && articleStatus !== 'all') {
      whereClause = {
        ...whereClause,
        articleStatus: articleStatus,
      }
    }

    const articles: ArticleType[] = await prisma.article.findMany({
      where: whereClause,
      orderBy: {
        createdAt: 'desc',
      },
    })

    return { articles, count: 0, page: 1, totalPages: 0 }
  } catch (error) {
    console.warn(f, 'error →', error)
    return { articles: [], count: 0, page: 1, totalPages: 0 }
  }
}

type getAllCategoriesActionProps = {
  search?: string
  categoryStatus?: 'any' | boolean
  page?: number
  limit?: number
}

export async function getAllCategoriesAction({
  search,
  page,
  limit,
}: getAllCategoriesActionProps): Promise<{
  categories: CategoryType[]
  count: number
  page: number
  totalPages: number
}> {
  try {
    let whereClause: Prisma.CategoryWhereInput = {}

    if (search) {
      whereClause = {
        ...whereClause,
        OR: [
          {
            name: {
              contains: search,
              mode: 'insensitive',
            },
          },
        ],
      }
    }

    const categories: CategoryType[] = await prisma.category.findMany({
      where: whereClause,
      orderBy: {
        createdAt: 'desc',
      },
    })

    return { categories, count: 0, page: 1, totalPages: 0 }
  } catch (error) {
    console.log(f, 'error →', error)
    return { categories: [], count: 0, page: 1, totalPages: 0 }
  }
}

export async function deleteArticleAction(id: string): Promise<Article | null> {
  // const userId = authenticateAndRedirect()
  try {
    const article: ArticleType = await prisma.article.delete({
      where: {
        id,
        // clerkId: userId,
      },
    })
    return article
  } catch (error) {
    console.log(f, 'error →', error)
    return null
  }
}

export async function deleteCategoryAction(
  id: string
): Promise<Category | null> {
  // const userId = authenticateAndRedirect()
  try {
    const category: CategoryType = await prisma.category.delete({
      where: {
        id,
        // clerkId: userId,
      },
    })
    return category
  } catch (error) {
    console.log(f, 'error →', error)
    return null
  }
}

export async function getSingleArticleAction(
  articleSlug: string
): Promise<ArticleType | null> {
  let article: ArticleType | null = null
  // const userId = authenticateAndRedirect()

  try {
    article = await prisma.article.findUnique({
      where: {
        articleSlug,
        // clerkId: userId,
      },
    })
  } catch (error) {
    article = null
  }
  if (!article) {
    redirect('/articles')
  }
  return article
}

export async function getSingleCategoryAction(
  id: string
): Promise<CategoryType | null> {
  let category: CategoryType | null = null
  // const userId = authenticateAndRedirect()

  try {
    category = await prisma.category.findUnique({
      where: {
        id,
        // clerkId: userId,
      },
    })
  } catch (error) {
    category = null
  }
  if (!category) {
    redirect('/dashboard/categories')
  }
  return category
}

export async function updateArticleAction(
  articleSlug: string,
  values: CreateAndEditArticleType
): Promise<ArticleType | null> {
  // const userId = authenticateAndRedirect()
  try {
    const article: ArticleType = await prisma.article.update({
      where: {
        articleSlug,
        // clerkId: userId,
      },
      data: {
        ...values,
      },
    })
    return article
  } catch (error) {
    return null
  }
}
export async function updateCategoryAction(
  id: string,
  values: CreateAndEditCategoryType
): Promise<CategoryType | null> {
  // const userId = authenticateAndRedirect()
  try {
    const category: CategoryType = await prisma.category.update({
      where: {
        id,
        // clerkId: userId,
      },
      data: {
        ...values,
      },
    })
    return category
  } catch (error) {
    return null
  }
}
