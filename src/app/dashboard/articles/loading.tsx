import Spinner from '@/components/utils/Spinner'
import React, { type FC } from 'react'

const f = '⇒ loading.tsx (LoadingArticlesPage):'

const LoadingArticlesPage: FC = () => {
  return (
    <div>
      <h1>Loading Articles Page...</h1>
      <Spinner />
    </div>
  )
}
export default LoadingArticlesPage
