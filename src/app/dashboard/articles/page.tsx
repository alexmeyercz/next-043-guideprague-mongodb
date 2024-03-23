'use client'

// react
import React, { type FC } from 'react'

// clerk
import { useUser } from '@clerk/clerk-react'

// components
import Spinner from '@/components/utils/Spinner'
import NoAccess from '@/components/utils/NoAccess'

const f = '⇒ pages.tsx (ArticlesPage):'

const ArticlesPage: FC = () => {
  const { isSignedIn, user, isLoaded } = useUser()
  const clerkPublicRole = user?.publicMetadata?.role || 'user'
  if (!isLoaded) {
    return <Spinner />
  }
  if (isSignedIn && clerkPublicRole !== 'admin') {
    return <NoAccess />
  }
  return (
    <div>
      <h1>ArticlesPage</h1>
    </div>
  )
}
export default ArticlesPage
