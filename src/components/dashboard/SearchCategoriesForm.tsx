'use client'

import React, { type FC } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'

const f = '⇒ SearchCategoriesForm.tsx (SearchCategoriesForm):'

const SearchCategoriesForm: FC = () => {
  const searchParams = useSearchParams()
  const search = searchParams.get('search') || ''

  const router = useRouter()
  const pathname = usePathname()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const search = formData.get('search') as string

    console.log(f, 'search →', search)

    let params = new URLSearchParams()
    params.set('search', search)

    router.push(`${pathname}?${params.toString()}`)
  }
  return (
    <form
      onSubmit={handleSubmit}
      className='bg-muted mb-16 p-8 grid sm:grid-cols-2 md:grid-cols-3 gap-4 rounded-lg'
    >
      <Input
        type='text'
        placeholder='Search categories'
        name='search'
        defaultValue={search}
      />

      <Button type='submit'>Search</Button>
    </form>
  )
}
export default SearchCategoriesForm
