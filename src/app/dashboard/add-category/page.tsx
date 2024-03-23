'use client'

// react
import React, { type FC } from 'react'

// react-query
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query'

// clerk
import { useUser } from '@clerk/clerk-react'

// components
import CreateCategoryForm from '@/components/CreateCategoryForm'
import Spinner from '@/components/utils/Spinner'
import NoAccess from '@/components/utils/NoAccess'

const f = '⇒ page.tsx (AddCategoryPage):'

const AddCategoryPage: FC = () => {
  const { isSignedIn, user, isLoaded } = useUser()
  const clerkPublicRole = user?.publicMetadata?.role || 'user'

  const queryClient = new QueryClient()

  if (!isLoaded) {
    return <Spinner />
  }

  if (isSignedIn && clerkPublicRole !== 'admin') {
    return <NoAccess />
  }

  return (
    <div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <CreateCategoryForm />
      </HydrationBoundary>
    </div>
  )
}
export default AddCategoryPage
