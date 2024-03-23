import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React, { type FC } from 'react'

const f = '⇒ page.tsx (HomePage):'

const HomePage: FC = () => {
  return (
    <div>
      <h1>HomePage</h1>
      <Button asChild>
        <Link href='/dashboard/'>Articles</Link>
      </Button>
    </div>
  )
}
export default HomePage
