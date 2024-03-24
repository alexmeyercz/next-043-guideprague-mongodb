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
import { Prisma } from '@prisma/client'

const f = '⇒ actions.ts:'

function authenticateAndRedirect(): string {
  console.log('authenticateAndRedirect()')
  const { userId } = auth()
  console.log(f, 'getting userId from Clerk →', userId)

  if (!userId) redirect('/')
  return userId
}

export async function createArticleAction(
  values: CreateAndEditArticleType
): Promise<ArticleType | null> {
  // simulate a long running operation
  console.log(f, 'createArticleAction(): simulate delay...')
  await new Promise((resolve) => setTimeout(resolve, 1000))
  console.log(f, '... simulate complete.')

  // get userId
  const userId = authenticateAndRedirect()
  console.log(f, 'getting userId from authenticateAndRedirect() →', userId)

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
  console.log(f, '... simulate complete.')

  // get userId
  const userId = authenticateAndRedirect()
  console.log(f, 'getting userId from authenticateAndRedirect() →', userId)

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
  status?: string
  page?: number
  limit?: number
}
export async function getAllArticlesAction({
  search,
  status,
  page = 1,
  limit = 2,
}: GetAllArticlesActionType): Promise<{
  articles: ArticleType[]
  count: number
  page: number
  totalPages: number
}> {
  const userId = authenticateAndRedirect()
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
            },
          },
          {
            status: {
              contains: search,
            },
          },
        ],
      }
    }

    if (status && status !== 'all') {
      whereClause = {
        ...whereClause,
        status: status,
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
