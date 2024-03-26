'use client'
import React, { type FC } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { Button } from '@/components/ui/button'

const f = '⇒ PagingContainer.tsx (PagingContainer):'
type PagingContainerProps = {
  currentPage: number
  totalPages: number
}
const PagingContainer: FC<PagingContainerProps> = ({
  currentPage,
  totalPages,
}) => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  const pagingButtons = Array.from({ length: totalPages }, (_, i) => i + 1)

  const handlePageChange = (page: number) => {
    const defaultParams = {
      search: searchParams.get('search') || '',
      articleStatus: searchParams.get('articleStatus') || '',
      page: String(page),
    }
    let params = new URLSearchParams(defaultParams)
    router.push(`${pathname}?${params.toString()}`)
  }

  return (
    <div className='flex gap-x-2'>
      {pagingButtons.map((page) => {
        return (
          <Button
            key={page}
            size='icon'
            variant={currentPage === page ? 'default' : 'outline'}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </Button>
        )
      })}
    </div>
  )
}
export default PagingContainer
