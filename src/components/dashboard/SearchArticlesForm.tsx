'use client'

import React, { type FC } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { ArticleStatus } from '@/utils/types'

const f = '⇒ SearchArticlesForm.tsx (SearchArticlesForm):'

const SearchArticlesForm: FC = () => {
  const searchParams = useSearchParams()
  const search = searchParams.get('search') || ''
  const articleStatus = searchParams.get('articleStatus') || ''

  const router = useRouter()
  const pathname = usePathname()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const search = formData.get('search') as string
    const articleStatus = formData.get('articleStatus') as ArticleStatus // or as string????
    console.log(f, 'search →', search)
    console.log(f, 'articleStatus →', articleStatus)

    let params = new URLSearchParams()
    params.set('search', search)
    params.set('articleStatus', articleStatus)
    router.push(`${pathname}?${params.toString()}`)
  }
  return (
    <form
      onSubmit={handleSubmit}
      className='bg-muted mb-16 p-8 grid sm:grid-cols-2 md:grid-cols-3 gap-4 rounded-lg'
    >
      <Input
        type='text'
        placeholder='Search articles'
        name='search'
        defaultValue={search}
      />
      <Select
        name='articleStatus'
        defaultValue={articleStatus}
      >
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {['all', ...Object.values(ArticleStatus)].map((articleStatus) => {
            return (
              <SelectItem
                key={articleStatus}
                value={articleStatus}
              >
                {articleStatus}
              </SelectItem>
            )
          })}
        </SelectContent>
        <Button type='submit'>Search</Button>
      </Select>
    </form>
  )
}
export default SearchArticlesForm
