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
import CategoryInfo from '@/components/dashboard/CategoryInfo'
import DeleteCategoryButton from '@/components/dashboard/DeleteCategoryButton'

const f = '⇒ CategoryCard.tsx (CategoryCard):'

const CategoryCard: FC<{ category: CategoryType }> = ({ category }) => {
  return (
    <Card className='bg-muted'>
      <CardHeader>
        <CardTitle>{category.name}</CardTitle>
        <CardDescription>
          {category.categoryStatus ? 'Active' : 'Inactive'}
        </CardDescription>
      </CardHeader>
      <Separator />
      <CardContent></CardContent>
      <CardFooter className='flex gap-4'>
        <Button
          asChild
          size='sm'
        >
          <Link href={`/dashboard/categories/edit/${category.id}`}>Edit</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
export default CategoryCard
