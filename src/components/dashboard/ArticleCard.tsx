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

import IconWithText from '@/components/dashboard/IconWithText'
import DeleteArticleButton from '@/components/dashboard/DeleteArticleButton'
import { Calendar, Edit, RadioTower, Text } from 'lucide-react'

const f = '⇒ ArticleCard.tsx (ArticleCard):'

const ArticleCard: FC<{ article: ArticleType }> = ({ article }) => {
  const { articleSlug, articleStatus, title, createdAt, id } = article
  const date = new Date(createdAt).toLocaleDateString()

  const generateViewArticleText = () => {
    if (articleStatus === 'published') {
      return 'Open Article'
    } else if (articleStatus === 'archived') {
      return 'Open Archived Article'
    } else {
      return 'Admin Preview'
    }
  }
  return (
    <Card className='bg-muted'>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <Separator />
      <CardContent className='grid grid-cols-2 pt-4 text-gray-400'>
        <IconWithText
          icon={<Calendar />}
          text={`Created at ${date}`}
        />
        <IconWithText
          icon={<RadioTower />}
          text={articleStatus}
        />
      </CardContent>
      <CardFooter className='flex gap-4'>
        <Button
          asChild
          size='sm'
        >
          <Link href={`/dashboard/articles/edit/${articleSlug}`}>
            <IconWithText
              icon={<Edit />}
              text='Edit Article'
            />
          </Link>
        </Button>
        <Button
          asChild
          size='sm'
        >
          <Link
            href={`/${articleSlug}`}
            target='_blank'
          >
            <IconWithText
              icon={<Text />}
              text={generateViewArticleText()}
            />
          </Link>
        </Button>
        <DeleteArticleButton id={id} />
      </CardFooter>
    </Card>
  )
}
export default ArticleCard
