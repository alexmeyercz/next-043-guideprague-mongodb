import React, { FC } from 'react'

interface ArticlePageProps {
  params: string
}

const f = '⇒ page.tsx (ArticlePage):'

const ArticlePage: FC<ArticlePageProps> = ({ params }) => {
  console.log(f, 'params →', params)
  return (
    <div>
      <h1>ArticlePage</h1>
    </div>
  )
}
export default ArticlePage
