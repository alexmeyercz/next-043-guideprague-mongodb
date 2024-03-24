// react
import React, { type FC } from 'react'

// clerk
import { currentUser } from '@clerk/nextjs'

// react query
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query'

// actions
import { getAllArticlesAction } from '@/utils/actions'

// components
import Spinner from '@/components/utils/Spinner'
import NoAccess from '@/components/utils/NoAccess'
import ArticlesList from '@/components/dashboard/ArticlesList'
import SearchArticlesForm from '@/components/dashboard/SearchArticlesForm'

const f = '⇒ pages.tsx (ArticlesPage):'

const ArticlesPage: FC = async () => {
  const user = await currentUser()
  const clerkPublicRole = user?.publicMetadata?.role || 'user'

  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['articles', '', 'all', 1],
    queryFn: () => getAllArticlesAction({}),
  })

  if (!user) {
    return <Spinner />
  }
  if (user && clerkPublicRole !== 'admin') {
    return <NoAccess />
  }
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <SearchArticlesForm />
      <ArticlesList />
    </HydrationBoundary>
  )
}
export default ArticlesPage
