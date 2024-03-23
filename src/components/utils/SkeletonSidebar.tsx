import React, { type FC } from 'react'
import { Skeleton } from '@/components/ui/skeleton'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'

const f = '⇒ SkeletonSidebar.tsx (SkeletonSidebar):'

type SkeletonSidebarProps = {
  color?: string
}

/**
 * Renders a skeleton sidebar component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.color - The color of the skeleton. Syntax: `bg-white`, `bg-red-500`
 * @returns {JSX.Element} The rendered skeleton sidebar component.
 */
const SkeletonSidebar: FC<SkeletonSidebarProps> = ({ color }) => {
  return (
    <div className='flex flex-col gap-3'>
      <div className='flex items-center space-x-3'>
        <Skeleton
          className={clsx(
            'h-6 w-6 rounded-full flex-grow-0 flex-shrink-0',
            color
          )}
        />
        <div className='space-y-2'>
          <Skeleton className={clsx('h-6 w-32', color)} />
        </div>
      </div>
      <div className='flex items-center space-x-3'>
        <Skeleton
          className={clsx(
            'h-6 w-6 rounded-full flex-grow-0 flex-shrink-0',
            color
          )}
        />
        <div className='space-y-2'>
          <Skeleton className={clsx('h-6 w-32', color)} />
        </div>
      </div>
      <div className='flex items-center space-x-3'>
        <Skeleton
          className={clsx(
            'h-6 w-6 rounded-full flex-grow-0 flex-shrink-0',
            color
          )}
        />
        <div className='space-y-2'>
          <Skeleton className={clsx('h-6 w-32', color)} />
        </div>
      </div>
    </div>
  )
}
export default SkeletonSidebar
