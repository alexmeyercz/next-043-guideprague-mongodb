'use client'
import React, { type FC } from 'react'

import { useSearchParams } from 'next/navigation'
import { getAllCategoriesAction } from '@/utils/actions'
import { useQuery } from '@tanstack/react-query'
import Spinner from '@/components/utils/Spinner'
import CategoryCard from './CategoryCard'

const f = '⇒ CategoriesList.tsx (CategoriesList):'

const CategoriesList: FC = () => {
  const searchParams = useSearchParams()
  const search = searchParams.get('search') || ''
  const pageNumber = Number(searchParams.get('page')) || 1

  const { data, isPending } = useQuery({
    queryKey: ['categories', search, pageNumber],
    queryFn: () => getAllCategoriesAction({ search, page: pageNumber }),
  })

  const categories = data?.categories || []

  if (isPending) {
    return <Spinner />
  }
  if (categories.length < 1) {
    return <h2>No categories found.</h2>
  }
  return (
    <div>
      <div className='grid md:grid-cols-2 gap-8'>
        {categories.map((category) => {
          return (
            <CategoryCard
              key={category.id}
              category={category}
            />
          )
        })}
      </div>
    </div>
  )
}
export default CategoriesList
