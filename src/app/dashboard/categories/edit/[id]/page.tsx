import React, { type FC } from 'react'

import EditCategoryForm from '@/components/dashboard/EditCategoryForm'
import { getSingleCategoryAction } from '@/utils/actions'

import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query'

interface EditCategoryPageProps {
  params: { id: string }
}

const f = '⇒ page.tsx (EditCategoryPage):'

const EditCategoryPage: FC<EditCategoryPageProps> = async ({ params }) => {
  const { id } = params
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery({
    queryKey: ['category', id],
    queryFn: () => getSingleCategoryAction(id),
  })
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <EditCategoryForm categoryId={params.id} />
    </HydrationBoundary>
  )
}
export default EditCategoryPage
