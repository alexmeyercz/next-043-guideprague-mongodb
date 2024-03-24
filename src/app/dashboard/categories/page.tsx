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
import { getAllCategoriesAction } from '@/utils/actions'

// components
import Spinner from '@/components/utils/Spinner'
import NoAccess from '@/components/utils/NoAccess'
import CategoriesList from '@/components/dashboard/CategoriesList'
import SearchCategoriesForm from '@/components/dashboard/SearchCategoriesForm'

const f = '⇒ pages.tsx (CategoriesPage):'

const CategoriesPage: FC = async () => {
  const user = await currentUser()
  const clerkPublicRole = user?.publicMetadata?.role || 'user'

  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['categories', '', 'all', 1],
    queryFn: () => getAllCategoriesAction({}),
  })

  if (!user) {
    return <Spinner />
  }
  if (user && clerkPublicRole !== 'admin') {
    return <NoAccess />
  }
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <SearchCategoriesForm />
      <CategoriesList />
    </HydrationBoundary>
  )
}
export default CategoriesPage
