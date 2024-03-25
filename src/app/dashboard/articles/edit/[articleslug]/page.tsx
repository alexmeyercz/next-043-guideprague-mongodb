import React, { FC } from 'react'

import EditArticleForm from '@/components/dashboard/EditArticleForm'
import { getSingleArticleAction } from '@/utils/actions'

import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query'

interface EditArticlePageProps {
  params: { articleslug: string }
}

const f = '⇒ page.tsx (EditArticlePage):'

const EditArticlePage: FC<EditArticlePageProps> = async ({ params }) => {
  const { articleslug } = params
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery({
    queryKey: ['article', articleslug],
    queryFn: () => getSingleArticleAction(articleslug),
  })
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <EditArticleForm articleSlug={articleslug} />
    </HydrationBoundary>
  )
}
export default EditArticlePage
