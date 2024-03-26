'use client'
import React, { type FC } from 'react'
import ArticleCard from './ArticleCard'
import { useSearchParams } from 'next/navigation'
import { getAllArticlesAction } from '@/utils/actions'
import { useQuery } from '@tanstack/react-query'
import Spinner from '@/components/utils/Spinner'
import ComplexPagingContainer from './ComplexPagingContainer'

const f = '⇒ ArticlesList.tsx (ArticlesList):'

const ArticlesList: FC = () => {
  const searchParams = useSearchParams()
  const search = searchParams.get('search') || ''
  const articleStatus = searchParams.get('articleStatus') || ''
  const pageNumber = Number(searchParams.get('page')) || 1

  const { data, isPending } = useQuery({
    queryKey: ['articles', search, articleStatus, pageNumber],
    queryFn: () =>
      getAllArticlesAction({ search, articleStatus, page: pageNumber }),
  })

  const renderPaging = () => {
    return (
      <div className='flex items-center justify-between my-8'>
        <h2 className='font-semibold text-xl capitalize'>
          {count} articles found
        </h2>
        {totalPages < 2 ? null : (
          <ComplexPagingContainer
            currentPage={page}
            totalPages={totalPages}
          />
        )}
      </div>
    )
  }

  const articles = data?.articles || []

  const count = data?.count || 0
  const page = data?.page || 0
  const totalPages = data?.totalPages || 0

  if (isPending) {
    return <Spinner />
  }
  if (articles.length < 1) {
    return <h2>No articles found.</h2>
  }
  return (
    <>
      {renderPaging()}
      <div className='grid md:grid-cols-2 gap-8'>
        {articles.map((article) => {
          return (
            <ArticleCard
              key={article.id}
              article={article}
            />
          )
        })}
      </div>
      {renderPaging()}
    </>
  )
}
export default ArticlesList
