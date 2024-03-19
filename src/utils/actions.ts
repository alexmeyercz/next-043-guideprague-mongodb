import {
  createAndEditArticleSchema,
  type ArticleType,
  type CreateAndEditArticleType,
} from './types'
import prisma from './tb'
import { auth } from '@clerk/nextjs'
import { redirect } from 'next/navigation'
import { resolve } from 'path'

const f = '⇒ actions.ts:'

function authenticateAndRedirect(): string {
  const { userId } = auth()
  console.log(f, 'authenticateAndRedirect(): userId →', userId)
  if (!userId) {
    redirect('/')
  }
  return userId
}

export async function createArticleAction(
  values: CreateAndEditArticleType
): Promise<ArticleType | null> {
  // simulate a long running operation
  await new Promise((resolve) => setTimeout(resolve, 3000))
  console.log(f, 'Simulating a long running operation...')
  const userId = authenticateAndRedirect()
  console.log(f, 'createArticleAction(): userId →', userId)
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
    console.log(f, 'error →', error)
    return null
  }
}
