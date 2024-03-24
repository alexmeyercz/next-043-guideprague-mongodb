import React, { FC } from 'react'

interface EditArticlePageProps {
  params: string
}

const f = '⇒ page.tsx (EditArticlePage):'

const EditArticlePage: FC<EditArticlePageProps> = ({ params }) => {
  console.log(f, 'params →', params)
  return (
    <div>
      <h1>EditArticlePage</h1>
    </div>
  )
}
export default EditArticlePage
