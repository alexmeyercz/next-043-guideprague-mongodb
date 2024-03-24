import Spinner from '@/components/utils/Spinner'
import React, { type FC } from 'react'

const f = '⇒ loading.tsx (LoadingPage):'

const LoadingPage: FC = () => {
  return (
    <div>
      <h1>Loading Page...</h1>
      <Spinner />
    </div>
  )
}
export default LoadingPage
