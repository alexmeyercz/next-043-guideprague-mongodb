import Spinner from '@/components/utils/Spinner'
import React, { type FC } from 'react'

const f = '⇒ loading.tsx (LoadingCategoriesPage):'

const LoadingCategoriesPage: FC = () => {
  return (
    <div>
      <h1>Loading Category Page...</h1>
      <Spinner />
    </div>
  )
}
export default LoadingCategoriesPage
