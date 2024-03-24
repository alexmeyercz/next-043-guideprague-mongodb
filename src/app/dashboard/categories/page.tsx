// react
import React, { type FC } from 'react'

// clerk
import { currentUser } from '@clerk/nextjs'

// components
import Spinner from '@/components/utils/Spinner'
import NoAccess from '@/components/utils/NoAccess'
import ArticlesList from '@/components/ArticlesList'
import SearchArticlesForm from '@/components/SearchArticlesForm'

const f = '⇒ pages.tsx (CategoriesPage):'

const CategoriesPage: FC = async () => {
  const user = await currentUser()
  const clerkPublicRole = user?.publicMetadata?.role || 'user'

  if (!user) {
    return <Spinner />
  }
  if (user && clerkPublicRole !== 'admin') {
    return <NoAccess />
  }
  return (
    <div>
      <h1>CategoriesPage</h1>
    </div>
  )
}
export default CategoriesPage
