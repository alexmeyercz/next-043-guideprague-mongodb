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
  const status = searchParams.get('status') || ''

  const router = useRouter()
  const pathname = usePathname()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const search = formData.get('search') as string
    const status = formData.get('status') as ArticleStatus // or as string????
    console.log(f, 'search →', search)
    console.log(f, 'status →', status)

    let params = new URLSearchParams()
    params.set('search', search)
    params.set('status', status)
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
        name='status'
        defaultValue={status}
      >
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {['all', ...Object.values(ArticleStatus)].map((status) => {
            return (
              <SelectItem
                key={status}
                value={status}
              >
                {status}
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
