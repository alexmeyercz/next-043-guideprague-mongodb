'use client'
import React, { type FC } from 'react'
import ArticleCard from './ArticleCard'
import { useSearchParams } from 'next/navigation'
import { getAllArticlesAction } from '@/utils/actions'
import { useQuery } from '@tanstack/react-query'
import Spinner from '@/components/utils/Spinner'

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

  const articles = data?.articles || []

  if (isPending) {
    return <Spinner />
  }
  if (articles.length < 1) {
    return <h2>No articles found.</h2>
  }
  return (
    <div>
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
    </div>
  )
}
export default ArticlesList
