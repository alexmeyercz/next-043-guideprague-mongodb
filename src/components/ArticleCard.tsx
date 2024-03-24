import React, { FC } from 'react'
import { ArticleType } from '@/utils/types'

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
import ArticleInfo from '@/components/ArticleInfo'
import DeleteArticleButton from '@/components/DeleteArticleButton'

const f = '⇒ ArticleCard.tsx (ArticleCard):'

const ArticleCard: FC<{ article: ArticleType }> = ({ article }) => {
  return (
    <Card className='bg-muted'>
      <CardHeader>
        <CardTitle>{article.title}</CardTitle>
        <CardDescription>{article.status}</CardDescription>
      </CardHeader>
      <Separator />
      <CardContent></CardContent>
      <CardFooter className='flex gap-4'>
        <Button
          asChild
          size='sm'
        >
          <Link href={`/dashboard/articles/edit/${article.id}`}>Edit</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
export default ArticleCard
