// 'use client'
// react
import React, { type FC } from 'react'

// clerk
import { useUser } from '@clerk/clerk-react'

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
import ArticlesList from '@/components/ArticlesList'
import SearchArticlesForm from '@/components/SearchArticlesForm'

const f = '⇒ pages.tsx (ArticlesPage):'

const ArticlesPage: FC = async () => {
  // const { isSignedIn, user, isLoaded } = useUser()
  // const clerkPublicRole = user?.publicMetadata?.role || 'user'
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['articles', '', 'all', 1],
    queryFn: () => getAllArticlesAction({}),
  })

  // if (!isLoaded) {
  //   return <Spinner />
  // }
  // if (isSignedIn && clerkPublicRole !== 'admin') {
  //   return <NoAccess />
  // }
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <SearchArticlesForm />
      <ArticlesList />
    </HydrationBoundary>
  )
}
export default ArticlesPage
