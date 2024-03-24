import React, { type FC } from 'react'
import { type CategoryType } from '@/utils/types'

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
import IconWithText from '@/components/dashboard/IconWithText'
import DeleteCategoryButton from '@/components/dashboard/DeleteCategoryButton'
import { Calendar, Edit, RadioTower, Text } from 'lucide-react'

const f = '⇒ CategoryCard.tsx (CategoryCard):'

const CategoryCard: FC<{ category: CategoryType }> = ({ category }) => {
  console.log(f, 'category →', category)
  const { categoryStatus, id, name } = category
  return (
    <Card className='bg-muted'>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>
          {categoryStatus ? 'Active' : 'Inactive'}
        </CardDescription>
      </CardHeader>
      <Separator />
      <CardContent></CardContent>
      <CardFooter className='flex gap-4'>
        <Button
          asChild
          size='sm'
        >
          <Link href={`/dashboard/categories/edit/${id}`}>
            <IconWithText
              icon={<Edit />}
              text='Edit Category'
            />
          </Link>
        </Button>
        <DeleteCategoryButton id={id} />
      </CardFooter>
    </Card>
  )
}
export default CategoryCard
