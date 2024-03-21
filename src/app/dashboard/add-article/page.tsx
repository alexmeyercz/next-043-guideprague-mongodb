import React, { type FC } from 'react'
import CreateArticleForm from '@/components/CreateArticleForm'
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query'

const f = '⇒ page.tsx (AddArticlePage):'

const AddArticlePage: FC = () => {
  const queryClient = new QueryClient()
  return (
    <div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <CreateArticleForm />
      </HydrationBoundary>
    </div>
  )
}
export default AddArticlePage
