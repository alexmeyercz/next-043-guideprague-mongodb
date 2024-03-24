import React, { FC } from 'react'
import { type ArticleType } from '@/utils/types'

import Link from 'next/link'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import ArticleInfo from '@/components/dashboard/ArticleInfo'
import DeleteArticleButton from '@/components/dashboard/DeleteArticleButton'

const f = '⇒ ArticleCard.tsx (ArticleCard):'

const ArticleCard: FC<{ article: ArticleType }> = ({ article }) => {
  return (
    <Card className='bg-muted'>
      <CardHeader>
        <CardTitle>{article.title}</CardTitle>
        <CardDescription>{article.articleStatus}</CardDescription>
      </CardHeader>
      <Separator />
      <CardContent></CardContent>
      <CardFooter className='flex gap-4'>
        <Button
          asChild
          size='sm'
        >
          <Link href={`/dashboard/articles/edit/${article.articleSlug}`}>
            Edit
          </Link>
        </Button>
        <Button
          asChild
          size='sm'
        >
          <Link href={`/${article.articleSlug}`}>View</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
export default ArticleCard
